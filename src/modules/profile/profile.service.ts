import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  Gender,
  MatchingBucket,
  PhotoStatus,
  UserStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { EncryptionService } from '../../core/crypto/encryption.service';
import { MediaService } from '../media/media.service';
import { ReferralService } from '../auth/referral.service';
import { GeoIntegrityService } from '../safety/geo-integrity.service';
import { CompletionService } from './completion.service';
import type {
  CreateProfileDto,
  UpdatePreferencesDto,
  UpdatePrivacyDto,
  UpdateProfileDto,
} from './dto/profile.dto';

const MIN_AGE = 18;
const MAX_AGE = 100;

@Injectable()
export class ProfileService {
  private readonly logger = new Logger(ProfileService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly encryption: EncryptionService,
    private readonly completion: CompletionService,
    private readonly media: MediaService,
    private readonly referrals: ReferralService,
    private readonly geoIntegrity: GeoIntegrityService,
  ) {}

  /**
   * Crée le profil à l'issue de l'inscription.
   *
   * Un seul appel, plutôt qu'un endpoint par étape de l'onboarding : sinon un
   * abandon en cours de route laisse des profils à moitié constitués, que
   * toutes les requêtes suivantes doivent apprendre à contourner.
   */
  async create(userId: string, dto: CreateProfileDto) {
    const existing = await this.prisma.profile.findUnique({
      where: { userId },
      select: { userId: true },
    });

    if (existing) {
      throw new ConflictException('Le profil existe déjà');
    }

    const birthdate = this.assertAdult(dto.birthdate);

    await this.prisma.$transaction(async (tx) => {
      await tx.profile.create({
        data: {
          userId,
          firstName: dto.firstName.trim(),
          birthdate,
          gender: dto.gender,
          genderLabel: dto.gender === Gender.OTHER ? dto.genderLabel : null,
          matchingBucket: dto.matchingBucket ?? this.defaultBucket(dto.gender),
          seeking: dto.seeking,
          orientationEnc: this.encryption.encryptNullable(dto.orientation),
          intention: dto.intention,
          bio: dto.bio?.trim(),
          heightCm: dto.heightCm,
          profession: dto.profession,
          hasChildren: dto.hasChildren,
          childrenCount: dto.hasChildren ? dto.childrenCount : null,
          wantsChildren: dto.wantsChildren,
          religion: dto.religion,
          education: dto.education,
          smoking: dto.smoking,
          drinking: dto.drinking,
          languages: dto.languages ?? [],
          homeLatitude: dto.latitude,
          homeLongitude: dto.longitude,
          discoveryLatitude: dto.latitude,
          discoveryLongitude: dto.longitude,
          cityId: await this.resolveCity(dto.latitude, dto.longitude),
        },
      });

      if (dto.interestIds?.length) {
        await this.replaceInterests(tx, userId, dto.interestIds);
      }

      if (dto.prompts?.length) {
        await this.replacePrompts(tx, userId, dto.prompts);
      }
    });

    return this.finalize(userId);
  }

  async update(userId: string, dto: UpdateProfileDto) {
    const profile = await this.prisma.profile.findUnique({ where: { userId } });
    if (!profile) throw new NotFoundException('Profil introuvable');

    const birthdate = dto.birthdate
      ? this.assertAdult(dto.birthdate)
      : undefined;

    await this.prisma.$transaction(async (tx) => {
      await tx.profile.update({
        where: { userId },
        data: {
          firstName: dto.firstName?.trim(),
          birthdate,
          gender: dto.gender,
          genderLabel:
            dto.gender === undefined
              ? undefined
              : dto.gender === Gender.OTHER
                ? dto.genderLabel
                : null,
          matchingBucket: dto.matchingBucket,
          seeking: dto.seeking,
          // `undefined` laisse la valeur en place, `null` l'efface : la
          // distinction compte pour une donnée qu'on doit pouvoir retirer.
          orientationEnc:
            dto.orientation === undefined
              ? undefined
              : this.encryption.encryptNullable(dto.orientation),
          intention: dto.intention,
          bio: dto.bio?.trim(),
          heightCm: dto.heightCm,
          profession: dto.profession,
          hasChildren: dto.hasChildren,
          childrenCount: dto.childrenCount,
          wantsChildren: dto.wantsChildren,
          religion: dto.religion,
          education: dto.education,
          smoking: dto.smoking,
          drinking: dto.drinking,
          languages: dto.languages,
        },
      });

      if (dto.interestIds) {
        await this.replaceInterests(tx, userId, dto.interestIds);
      }

      if (dto.prompts) {
        await this.replacePrompts(tx, userId, dto.prompts);
      }
    });

    return this.finalize(userId);
  }

  /**
   * Met à jour la position.
   *
   * `homeLatitude` et `discoveryLatitude` bougent ensemble ici : c'est la
   * position réelle. Le mode voyage, lui, ne touchera que la position de
   * découverte, laissant le domicile intact.
   */
  async updateLocation(userId: string, latitude: number, longitude: number) {
    const current = await this.prisma.profile.findUnique({
      where: { userId },
      select: { homeLatitude: true, homeLongitude: true },
    });

    // Contrôle de cohérence AVANT l'écriture, tant que l'ancienne position est
    // encore lisible. Ce point d'entrée est gratuit et illimité — il le doit,
    // on déménage — mais sans surveillance il permettrait de contourner le
    // mode voyage payant : déclarer Yaoundé, swiper, revenir.
    //
    // Le contrôle ne bloque jamais : il compte, et le score de risque décide.
    if (current) {
      await this.geoIntegrity.recordLocationChange(
        userId,
        { latitude: current.homeLatitude, longitude: current.homeLongitude },
        { latitude, longitude },
      );
    }

    await this.prisma.profile.update({
      where: { userId },
      data: {
        homeLatitude: latitude,
        homeLongitude: longitude,
        discoveryLatitude: latitude,
        discoveryLongitude: longitude,
        cityId: await this.resolveCity(latitude, longitude),
      },
    });

    return this.finalize(userId);
  }

  async updatePreferences(userId: string, dto: UpdatePreferencesDto) {
    if (dto.minAge && dto.maxAge && dto.minAge > dto.maxAge) {
      throw new BadRequestException("L'âge minimum dépasse l'âge maximum");
    }

    return this.prisma.preference.update({
      where: { userId },
      data: { ...dto },
    });
  }

  updatePrivacy(userId: string, dto: UpdatePrivacyDto) {
    return this.prisma.profile.update({
      where: { userId },
      data: { ...dto },
      select: { incognito: true, hideAge: true, hideDistance: true },
    });
  }

  /** Vue complète, réservée au propriétaire du profil. */
  async getOwn(userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      include: {
        city: { select: { id: true, name: true, region: true } },
        interests: { include: { interest: true } },
        prompts: { include: { prompt: true } },
        photos: {
          where: { deletedAt: null },
          orderBy: { position: 'asc' },
        },
      },
    });

    if (!profile) throw new NotFoundException('Profil introuvable');

    const report = await this.completion.evaluate(userId);

    return {
      ...this.toOwnDto(profile),
      completion: report,
    };
  }

  /**
   * Vue publique d'un autre profil.
   *
   * L'orientation n'y figure jamais, quel que soit le contexte. Les photos non
   * approuvées non plus : elles n'ont pas été modérées.
   */
  async getPublic(viewerId: string, targetUserId: string) {
    const blocked = await this.prisma.block.findFirst({
      where: {
        OR: [
          { blockerId: viewerId, blockedId: targetUserId },
          { blockerId: targetUserId, blockedId: viewerId },
        ],
      },
      select: { blockerId: true },
    });

    if (blocked) throw new NotFoundException('Profil introuvable');

    const profile = await this.prisma.profile.findFirst({
      where: {
        userId: targetUserId,
        user: {
          status: { in: [UserStatus.ACTIVE, UserStatus.SHADOW_BANNED] },
        },
      },
      include: {
        city: { select: { name: true, region: true } },
        interests: { include: { interest: true } },
        prompts: { include: { prompt: true } },
        photos: {
          where: { deletedAt: null, status: PhotoStatus.APPROVED },
          orderBy: { position: 'asc' },
        },
      },
    });

    if (!profile) throw new NotFoundException('Profil introuvable');

    return {
      userId: profile.userId,
      firstName: profile.firstName,
      age: profile.hideAge ? null : this.ageFrom(profile.birthdate),
      gender: profile.gender,
      genderLabel: profile.genderLabel,
      intention: profile.intention,
      bio: profile.bio,
      heightCm: profile.heightCm,
      profession: profile.profession,
      religion: profile.religion,
      education: profile.education,
      smoking: profile.smoking,
      drinking: profile.drinking,
      languages: profile.languages,
      hasChildren: profile.hasChildren,
      city: profile.hideDistance ? null : profile.city,
      isVerified: profile.isVerified,
      interests: profile.interests.map((link) => ({
        slug: link.interest.slug,
        labelFr: link.interest.labelFr,
        labelEn: link.interest.labelEn,
        emoji: link.interest.emoji,
      })),
      prompts: profile.prompts.map((answer) => ({
        textFr: answer.prompt.textFr,
        textEn: answer.prompt.textEn,
        answer: answer.answer,
      })),
      photos: profile.photos.map((photo) => this.media.toDto(photo)),
    };
  }

  listInterests() {
    return this.prisma.interest.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        slug: true,
        labelFr: true,
        labelEn: true,
        emoji: true,
        category: true,
      },
    });
  }

  listPrompts() {
    return this.prisma.prompt.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        slug: true,
        textFr: true,
        textEn: true,
        category: true,
      },
    });
  }

  /**
   * Recalcule la complétude et fait basculer le compte en ACTIVE.
   *
   * C'est aussi ici que le parrainage est récompensé : le parrain touche ses
   * crédits quand son filleul devient réellement exploitable, pas à
   * l'inscription. Payer plus tôt reviendrait à financer des comptes créés en
   * masse et jamais utilisés.
   */
  private async finalize(userId: string) {
    const report = await this.completion.refresh(userId);

    if (report.isComplete) {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: { status: true },
      });

      if (user?.status === UserStatus.PENDING_PROFILE) {
        await this.prisma.user.update({
          where: { id: userId },
          data: { status: UserStatus.ACTIVE },
        });

        await this.referrals.qualify(userId);
        this.logger.log(`Profil complété, compte activé : ${userId}`);
      }
    }

    return this.getOwn(userId);
  }

  /**
   * Contrôle de la majorité, côté serveur exclusivement.
   *
   * Le client peut afficher un sélecteur de date restreint, cela ne prouve
   * rien : la requête se forge à la main. Laisser entrer un mineur sur une
   * application de rencontre est une faute pénale, pas un défaut produit.
   */
  private assertAdult(value: string): Date {
    const birthdate = new Date(value);

    if (Number.isNaN(birthdate.getTime())) {
      throw new BadRequestException('Date de naissance invalide');
    }

    const age = this.ageFrom(birthdate);

    if (age < MIN_AGE) {
      throw new BadRequestException(
        `L'inscription est réservée aux personnes de ${MIN_AGE} ans et plus`,
      );
    }

    if (age > MAX_AGE) {
      throw new BadRequestException('Date de naissance invalide');
    }

    return birthdate;
  }

  private ageFrom(birthdate: Date): number {
    const now = new Date();
    let age = now.getUTCFullYear() - birthdate.getUTCFullYear();

    const monthDiff = now.getUTCMonth() - birthdate.getUTCMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && now.getUTCDate() < birthdate.getUTCDate())
    ) {
      age -= 1;
    }

    return age;
  }

  /**
   * Catégorie de présentation par défaut.
   *
   * Les profils non binaires sont rattachés à EVERYONE : sans cela, ils ne
   * seraient visibles que des utilisateurs ayant explicitement coché cette
   * option, c'est-à-dire d'à peu près personne. La valeur reste modifiable.
   */
  private defaultBucket(gender: Gender): MatchingBucket {
    if (gender === Gender.WOMAN) return MatchingBucket.WOMEN;
    if (gender === Gender.MAN) return MatchingBucket.MEN;
    return MatchingBucket.EVERYONE;
  }

  /**
   * Rattache le profil à la ville la plus proche, dans la limite de son rayon.
   *
   * Requête PostGIS brute : Prisma n'expose pas la colonne géographique.
   */
  private async resolveCity(
    latitude?: number,
    longitude?: number,
  ): Promise<string | null> {
    if (latitude === undefined || longitude === undefined) return null;

    const rows = await this.prisma.$queryRaw<{ id: string }[]>`
      SELECT id
      FROM cities
      WHERE "isActive" = true
        AND ST_DWithin(
          ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
          "radiusKm" * 1000
        )
      ORDER BY ST_Distance(
        ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
        ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography
      )
      LIMIT 1
    `;

    return rows[0]?.id ?? null;
  }

  private async replaceInterests(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    userId: string,
    interestIds: string[],
  ): Promise<void> {
    const unique = [...new Set(interestIds)];

    const valid = await tx.interest.findMany({
      where: { id: { in: unique }, isActive: true },
      select: { id: true },
    });

    if (valid.length !== unique.length) {
      throw new BadRequestException(
        "Un ou plusieurs centres d'intérêt sont inconnus",
      );
    }

    await tx.profileInterest.deleteMany({ where: { profileId: userId } });
    await tx.profileInterest.createMany({
      data: unique.map((interestId) => ({ profileId: userId, interestId })),
    });
  }

  private async replacePrompts(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    userId: string,
    prompts: { promptId: string; answer: string }[],
  ): Promise<void> {
    const ids = prompts.map((p) => p.promptId);

    if (new Set(ids).size !== ids.length) {
      throw new BadRequestException(
        'Une même question ne peut être renseignée deux fois',
      );
    }

    const valid = await tx.prompt.findMany({
      where: { id: { in: ids }, isActive: true },
      select: { id: true },
    });

    if (valid.length !== ids.length) {
      throw new BadRequestException(
        'Une ou plusieurs questions sont inconnues',
      );
    }

    await tx.profilePrompt.deleteMany({ where: { profileId: userId } });

    for (const [index, prompt] of prompts.entries()) {
      await tx.profilePrompt.create({
        data: {
          profileId: userId,
          promptId: prompt.promptId,
          answer: prompt.answer.trim(),
          position: index,
        },
      });
    }
  }

  /** L'orientation est déchiffrée uniquement pour son propriétaire. */
  private toOwnDto(profile: {
    userId: string;
    firstName: string;
    birthdate: Date;
    orientationEnc: string | null;
    photos: Parameters<MediaService['toDto']>[0][];
    interests: {
      interest: {
        slug: string;
        labelFr: string;
        labelEn: string;
        emoji: string | null;
      };
    }[];
    prompts: {
      promptId: string;
      answer: string;
      prompt: { textFr: string; textEn: string };
    }[];
    [key: string]: unknown;
  }) {
    const { orientationEnc, photos, interests, prompts, ...rest } = profile;

    return {
      ...rest,
      age: this.ageFrom(profile.birthdate),
      orientation: this.encryption.decryptNullable(orientationEnc),
      interests: interests.map((link) => link.interest),
      prompts: prompts.map((answer) => ({
        promptId: answer.promptId,
        textFr: answer.prompt.textFr,
        textEn: answer.prompt.textEn,
        answer: answer.answer,
      })),
      photos: photos.map((photo) => this.media.toDto(photo)),
    };
  }
}
