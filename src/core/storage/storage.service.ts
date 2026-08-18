import {
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable, Logger } from '@nestjs/common';
import { TypedConfigService } from '../config/config.module';

export interface PresignedUpload {
  url: string;
  key: string;
  expiresIn: number;
  maxBytes: number;
}

export interface ObjectMetadata {
  contentType?: string;
  contentLength: number;
}

/**
 * Stockage objet compatible S3.
 *
 * MinIO en développement, Cloudflare R2 en production. Le choix de R2 tient à
 * un seul chiffre : son egress est gratuit. Un chargement de deck pèse près de
 * 7 Mo, et les utilisateurs le rechargent en permanence — sur une offre
 * facturant le trafic, la note dépasse le coût des serveurs bien avant le
 * premier millier d'utilisateurs actifs.
 *
 * L'API S3 étant commune aux deux, aucun code métier ne dépend du
 * fournisseur.
 */
@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);
  private readonly client: S3Client;
  private readonly bucket: string;
  private readonly publicUrl: string;

  constructor(config: TypedConfigService) {
    this.bucket = config.get('S3_BUCKET');
    this.publicUrl = config.get('S3_PUBLIC_URL').replace(/\/$/, '');

    this.client = new S3Client({
      endpoint: config.get('S3_ENDPOINT'),
      region: config.get('S3_REGION'),
      forcePathStyle: config.get('S3_FORCE_PATH_STYLE'),
      credentials: {
        accessKeyId: config.get('S3_ACCESS_KEY'),
        secretAccessKey: config.get('S3_SECRET_KEY'),
      },
    });
  }

  /**
   * URL de dépôt signée, à durée limitée.
   *
   * Le client téléverse directement vers le stockage, sans passer par l'API.
   * Faire transiter les octets par le serveur doublerait la bande passante
   * consommée et bloquerait un worker Node pendant toute la durée d'un envoi
   * — plusieurs dizaines de secondes sur une 3G instable.
   *
   * `contentLength` est intégré à la signature : le client ne peut pas
   * déposer un fichier plus gros que ce qu'il a annoncé.
   */
  async createUploadUrl(
    key: string,
    contentType: string,
    contentLength: number,
    expiresIn = 900,
  ): Promise<PresignedUpload> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      ContentType: contentType,
      ContentLength: contentLength,
    });

    const url = await getSignedUrl(this.client, command, { expiresIn });

    return { url, key, expiresIn, maxBytes: contentLength };
  }

  /** URL de lecture signée, pour les objets qui ne sont pas publics. */
  createDownloadUrl(key: string, expiresIn = 3_600): Promise<string> {
    return getSignedUrl(
      this.client,
      new GetObjectCommand({ Bucket: this.bucket, Key: key }),
      { expiresIn },
    );
  }

  /** URL publique servie par le CDN. */
  publicUrlFor(key: string): string {
    return `${this.publicUrl}/${key}`;
  }

  async putObject(
    key: string,
    body: Buffer,
    contentType: string,
    cacheControl = 'public, max-age=31536000, immutable',
  ): Promise<void> {
    await this.client.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
        CacheControl: cacheControl,
      }),
    );
  }

  async getObject(key: string): Promise<Buffer> {
    const response = await this.client.send(
      new GetObjectCommand({ Bucket: this.bucket, Key: key }),
    );

    const bytes = await response.Body?.transformToByteArray();
    if (!bytes) {
      throw new Error(`Objet vide ou illisible : ${key}`);
    }

    return Buffer.from(bytes);
  }

  /** Renvoie null si l'objet n'existe pas — le client n'a pas terminé son envoi. */
  async head(key: string): Promise<ObjectMetadata | null> {
    try {
      const response = await this.client.send(
        new HeadObjectCommand({ Bucket: this.bucket, Key: key }),
      );
      return {
        contentType: response.ContentType,
        contentLength: response.ContentLength ?? 0,
      };
    } catch {
      return null;
    }
  }

  async deleteObject(key: string): Promise<void> {
    await this.client.send(
      new DeleteObjectCommand({ Bucket: this.bucket, Key: key }),
    );
  }

  /**
   * Suppression groupée. Sert à la purge RGPD : effacer un compte doit
   * effacer ses médias, originaux comme variantes.
   */
  async deleteObjects(keys: string[]): Promise<void> {
    if (keys.length === 0) return;

    // S3 plafonne à 1000 clés par appel.
    for (let i = 0; i < keys.length; i += 1_000) {
      await this.client.send(
        new DeleteObjectsCommand({
          Bucket: this.bucket,
          Delete: { Objects: keys.slice(i, i + 1_000).map((Key) => ({ Key })) },
        }),
      );
    }

    this.logger.log(`${keys.length} objet(s) supprimé(s)`);
  }
}
