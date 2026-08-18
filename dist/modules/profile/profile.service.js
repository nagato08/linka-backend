"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ProfileService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const encryption_service_1 = require("../../core/crypto/encryption.service");
const media_service_1 = require("../media/media.service");
const referral_service_1 = require("../auth/referral.service");
const geo_integrity_service_1 = require("../safety/geo-integrity.service");
const completion_service_1 = require("./completion.service");
const MIN_AGE = 18;
const MAX_AGE = 100;
let ProfileService = ProfileService_1 = class ProfileService {
    prisma;
    encryption;
    completion;
    media;
    referrals;
    geoIntegrity;
    logger = new common_1.Logger(ProfileService_1.name);
    constructor(prisma, encryption, completion, media, referrals, geoIntegrity) {
        this.prisma = prisma;
        this.encryption = encryption;
        this.completion = completion;
        this.media = media;
        this.referrals = referrals;
        this.geoIntegrity = geoIntegrity;
    }
    async create(userId, dto) {
        const existing = await this.prisma.profile.findUnique({
            where: { userId },
            select: { userId: true },
        });
        if (existing) {
            throw new common_1.ConflictException('Le profil existe déjà');
        }
        const birthdate = this.assertAdult(dto.birthdate);
        await this.prisma.$transaction(async (tx) => {
            await tx.profile.create({
                data: {
                    userId,
                    firstName: dto.firstName.trim(),
                    birthdate,
                    gender: dto.gender,
                    genderLabel: dto.gender === enums_1.Gender.OTHER ? dto.genderLabel : null,
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
    async update(userId, dto) {
        const profile = await this.prisma.profile.findUnique({ where: { userId } });
        if (!profile)
            throw new common_1.NotFoundException('Profil introuvable');
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
                    genderLabel: dto.gender === undefined
                        ? undefined
                        : dto.gender === enums_1.Gender.OTHER
                            ? dto.genderLabel
                            : null,
                    matchingBucket: dto.matchingBucket,
                    seeking: dto.seeking,
                    orientationEnc: dto.orientation === undefined
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
    async updateLocation(userId, latitude, longitude) {
        const current = await this.prisma.profile.findUnique({
            where: { userId },
            select: { homeLatitude: true, homeLongitude: true },
        });
        if (current) {
            await this.geoIntegrity.recordLocationChange(userId, { latitude: current.homeLatitude, longitude: current.homeLongitude }, { latitude, longitude });
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
    async updatePreferences(userId, dto) {
        if (dto.minAge && dto.maxAge && dto.minAge > dto.maxAge) {
            throw new common_1.BadRequestException("L'âge minimum dépasse l'âge maximum");
        }
        return this.prisma.preference.update({
            where: { userId },
            data: { ...dto },
        });
    }
    updatePrivacy(userId, dto) {
        return this.prisma.profile.update({
            where: { userId },
            data: { ...dto },
            select: { incognito: true, hideAge: true, hideDistance: true },
        });
    }
    async getOwn(userId) {
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
        if (!profile)
            throw new common_1.NotFoundException('Profil introuvable');
        const report = await this.completion.evaluate(userId);
        return {
            ...this.toOwnDto(profile),
            completion: report,
        };
    }
    async getPublic(viewerId, targetUserId) {
        const blocked = await this.prisma.block.findFirst({
            where: {
                OR: [
                    { blockerId: viewerId, blockedId: targetUserId },
                    { blockerId: targetUserId, blockedId: viewerId },
                ],
            },
            select: { blockerId: true },
        });
        if (blocked)
            throw new common_1.NotFoundException('Profil introuvable');
        const profile = await this.prisma.profile.findFirst({
            where: {
                userId: targetUserId,
                user: {
                    status: { in: [enums_1.UserStatus.ACTIVE, enums_1.UserStatus.SHADOW_BANNED] },
                },
            },
            include: {
                city: { select: { name: true, region: true } },
                interests: { include: { interest: true } },
                prompts: { include: { prompt: true } },
                photos: {
                    where: { deletedAt: null, status: enums_1.PhotoStatus.APPROVED },
                    orderBy: { position: 'asc' },
                },
            },
        });
        if (!profile)
            throw new common_1.NotFoundException('Profil introuvable');
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
    async finalize(userId) {
        const report = await this.completion.refresh(userId);
        if (report.isComplete) {
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
                select: { status: true },
            });
            if (user?.status === enums_1.UserStatus.PENDING_PROFILE) {
                await this.prisma.user.update({
                    where: { id: userId },
                    data: { status: enums_1.UserStatus.ACTIVE },
                });
                await this.referrals.qualify(userId);
                this.logger.log(`Profil complété, compte activé : ${userId}`);
            }
        }
        return this.getOwn(userId);
    }
    assertAdult(value) {
        const birthdate = new Date(value);
        if (Number.isNaN(birthdate.getTime())) {
            throw new common_1.BadRequestException('Date de naissance invalide');
        }
        const age = this.ageFrom(birthdate);
        if (age < MIN_AGE) {
            throw new common_1.BadRequestException(`L'inscription est réservée aux personnes de ${MIN_AGE} ans et plus`);
        }
        if (age > MAX_AGE) {
            throw new common_1.BadRequestException('Date de naissance invalide');
        }
        return birthdate;
    }
    ageFrom(birthdate) {
        const now = new Date();
        let age = now.getUTCFullYear() - birthdate.getUTCFullYear();
        const monthDiff = now.getUTCMonth() - birthdate.getUTCMonth();
        if (monthDiff < 0 ||
            (monthDiff === 0 && now.getUTCDate() < birthdate.getUTCDate())) {
            age -= 1;
        }
        return age;
    }
    defaultBucket(gender) {
        if (gender === enums_1.Gender.WOMAN)
            return enums_1.MatchingBucket.WOMEN;
        if (gender === enums_1.Gender.MAN)
            return enums_1.MatchingBucket.MEN;
        return enums_1.MatchingBucket.EVERYONE;
    }
    async resolveCity(latitude, longitude) {
        if (latitude === undefined || longitude === undefined)
            return null;
        const rows = await this.prisma.$queryRaw `
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
    async replaceInterests(tx, userId, interestIds) {
        const unique = [...new Set(interestIds)];
        const valid = await tx.interest.findMany({
            where: { id: { in: unique }, isActive: true },
            select: { id: true },
        });
        if (valid.length !== unique.length) {
            throw new common_1.BadRequestException("Un ou plusieurs centres d'intérêt sont inconnus");
        }
        await tx.profileInterest.deleteMany({ where: { profileId: userId } });
        await tx.profileInterest.createMany({
            data: unique.map((interestId) => ({ profileId: userId, interestId })),
        });
    }
    async replacePrompts(tx, userId, prompts) {
        const ids = prompts.map((p) => p.promptId);
        if (new Set(ids).size !== ids.length) {
            throw new common_1.BadRequestException('Une même question ne peut être renseignée deux fois');
        }
        const valid = await tx.prompt.findMany({
            where: { id: { in: ids }, isActive: true },
            select: { id: true },
        });
        if (valid.length !== ids.length) {
            throw new common_1.BadRequestException('Une ou plusieurs questions sont inconnues');
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
    toOwnDto(profile) {
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
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = ProfileService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        encryption_service_1.EncryptionService,
        completion_service_1.CompletionService,
        media_service_1.MediaService,
        referral_service_1.ReferralService,
        geo_integrity_service_1.GeoIntegrityService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map