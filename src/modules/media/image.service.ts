import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import sharp from 'sharp';

export interface ImageVariant {
  name: string;
  width: number;
  quality: number;
}

export interface ProcessedImage {
  variants: { name: string; buffer: Buffer; width: number; height: number }[];
  phash: string;
  width: number;
  height: number;
}

/**
 * Trois tailles, pas davantage.
 *
 * Le marché visé est en 3G, avec de la data payée au mégaoctet. Le deck
 * précharge d'abord la vignette, puis la taille carte ; le plein format n'est
 * chargé que si l'utilisateur ouvre la photo. Servir un 1080p dans une pile de
 * swipe reviendrait à faire payer le forfait de l'utilisateur pour des images
 * qu'il ne regardera pas.
 */
const VARIANTS: ImageVariant[] = [
  { name: 'thumb', width: 200, quality: 70 },
  { name: 'card', width: 720, quality: 78 },
  { name: 'full', width: 1080, quality: 82 },
];

const MIN_DIMENSION = 320;
const MAX_PIXELS = 50_000_000;

@Injectable()
export class ImageService {
  private readonly logger = new Logger(ImageService.name);

  /**
   * Valide, redimensionne et calcule l'empreinte perceptuelle.
   *
   * Les métadonnées EXIF sont supprimées — sharp le fait par défaut, et c'est
   * essentiel ici : une photo prise au téléphone embarque ses coordonnées GPS.
   * Les publier reviendrait à diffuser l'adresse du domicile de chaque
   * utilisatrice.
   */
  async process(original: Buffer): Promise<ProcessedImage> {
    const metadata = await this.readMetadata(original);

    const variants = await Promise.all(
      VARIANTS.map(async (variant) => {
        const pipeline = sharp(original)
          .rotate() // applique l'orientation EXIF avant de la supprimer
          .resize({
            width: variant.width,
            withoutEnlargement: true,
            fit: 'inside',
          })
          .webp({ quality: variant.quality, effort: 4 });

        const { data, info } = await pipeline.toBuffer({
          resolveWithObject: true,
        });

        return {
          name: variant.name,
          buffer: data,
          width: info.width,
          height: info.height,
        };
      }),
    );

    return {
      variants,
      phash: await this.perceptualHash(original),
      width: metadata.width,
      height: metadata.height,
    };
  }

  /**
   * Contrôle du fichier réellement reçu.
   *
   * Le type déclaré par le client ne vaut rien : il est trivial d'annoncer
   * `image/jpeg` en envoyant tout autre chose. Seule l'inspection du contenu
   * fait foi.
   */
  private async readMetadata(
    buffer: Buffer,
  ): Promise<{ width: number; height: number; format: string }> {
    let metadata: sharp.Metadata;

    try {
      metadata = await sharp(buffer).metadata();
    } catch {
      throw new BadRequestException("Le fichier n'est pas une image valide");
    }

    const { width, height, format } = metadata;

    if (!width || !height || !format) {
      throw new BadRequestException('Image illisible');
    }

    if (!['jpeg', 'png', 'webp', 'heif', 'avif'].includes(format)) {
      throw new BadRequestException(`Format non pris en charge : ${format}`);
    }

    if (width < MIN_DIMENSION || height < MIN_DIMENSION) {
      throw new BadRequestException(
        `Image trop petite, ${MIN_DIMENSION}px minimum`,
      );
    }

    // Garde-fou contre la « bombe de décompression » : une image de quelques
    // kilo-octets peut se déployer sur plusieurs gigaoctets en mémoire.
    if (width * height > MAX_PIXELS) {
      throw new BadRequestException('Image trop grande');
    }

    return { width, height, format };
  }

  /**
   * Empreinte perceptuelle sur 64 bits (dHash).
   *
   * Réduction en 9×8 niveaux de gris, puis comparaison de chaque pixel à son
   * voisin de droite. Le résultat survit au recadrage léger, au
   * rééchantillonnage et au changement de qualité — contrairement à un
   * condensat cryptographique, qui change du tout au tout au moindre octet
   * modifié.
   *
   * C'est le détecteur de faux profils le moins cher de toute la chaîne : une
   * photo déjà utilisée sur un autre compte se repère instantanément, sans
   * appeler le moindre service payant.
   */
  async perceptualHash(buffer: Buffer): Promise<string> {
    const pixels = await sharp(buffer)
      .greyscale()
      .resize(9, 8, { fit: 'fill' })
      .raw()
      .toBuffer();

    let bits = '';
    for (let row = 0; row < 8; row += 1) {
      for (let col = 0; col < 8; col += 1) {
        const left = pixels[row * 9 + col] ?? 0;
        const right = pixels[row * 9 + col + 1] ?? 0;
        bits += left > right ? '1' : '0';
      }
    }

    // 64 bits → 16 caractères hexadécimaux, découpés en deux moitiés pour
    // rester dans les entiers exacts de JavaScript.
    const high = parseInt(bits.slice(0, 32), 2);
    const low = parseInt(bits.slice(32), 2);

    return (
      high.toString(16).padStart(8, '0') + low.toString(16).padStart(8, '0')
    );
  }

  /**
   * Distance de Hamming entre deux empreintes.
   *
   * En dessous de 10 bits d'écart sur 64, il s'agit presque toujours de la
   * même photo retouchée. Au-delà de 15, ce sont deux images différentes.
   */
  hammingDistance(a: string, b: string): number {
    if (a.length !== b.length) return 64;

    let distance = 0;
    for (let i = 0; i < a.length; i += 1) {
      const diff = parseInt(a[i], 16) ^ parseInt(b[i], 16);
      distance += diff.toString(2).replace(/0/g, '').length;
    }
    return distance;
  }

  static get variantNames(): string[] {
    return VARIANTS.map((v) => v.name);
  }
}
