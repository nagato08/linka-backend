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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePrivacyDto = exports.UpdatePreferencesDto = exports.UpdateLocationDto = exports.UpdateProfileDto = exports.CreateProfileDto = exports.PromptAnswerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const profile_enums_1 = require("./profile.enums");
class PromptAnswerDto {
    promptId;
    answer;
}
exports.PromptAnswerDto = PromptAnswerDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PromptAnswerDto.prototype, "promptId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 300 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 300),
    __metadata("design:type", String)
], PromptAnswerDto.prototype, "answer", void 0);
class CreateProfileDto {
    firstName;
    birthdate;
    gender;
    genderLabel;
    matchingBucket;
    seeking;
    orientation;
    intention;
    bio;
    heightCm;
    profession;
    hasChildren;
    childrenCount;
    wantsChildren;
    religion;
    education;
    smoking;
    drinking;
    languages;
    latitude;
    longitude;
    interestIds;
    prompts;
}
exports.CreateProfileDto = CreateProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aïcha' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 50),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1998-04-12',
        description: 'Date de naissance. La majorité est contrôlée côté serveur.',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "birthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: profile_enums_1.Gender }),
    (0, class_validator_1.IsEnum)(profile_enums_1.Gender),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Libellé libre, uniquement lorsque gender vaut OTHER',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 40),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "genderLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: profile_enums_1.MatchingBucket,
        description: "Catégorie sous laquelle le profil est proposé. Déduite du genre si elle n'est pas fournie.",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.MatchingBucket),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "matchingBucket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: profile_enums_1.SeekingTarget, isArray: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsEnum)(profile_enums_1.SeekingTarget, { each: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "seeking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: profile_enums_1.Orientation,
        description: 'Donnée sensible : chiffrée au repos, jamais renvoyée par les endpoints publics.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.Orientation),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "orientation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: profile_enums_1.Intention }),
    (0, class_validator_1.IsEnum)(profile_enums_1.Intention),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "intention", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 500 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 120, maximum: 250 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(120),
    (0, class_validator_1.Max)(250),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "heightCm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "profession", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProfileDto.prototype, "hasChildren", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 0, maximum: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(20),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "childrenCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProfileDto.prototype, "wantsChildren", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: profile_enums_1.Religion }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.Religion),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "religion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: profile_enums_1.EducationLevel }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.EducationLevel),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "education", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: profile_enums_1.Frequency }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.Frequency),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "smoking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: profile_enums_1.Frequency }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.Frequency),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "drinking", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: ['fr', 'en'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(6),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "languages", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 4.0511 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 9.7679 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Au moins cinq centres d’intérêt sont attendus',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(15),
    (0, class_validator_1.IsUUID)('all', { each: true }),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "interestIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [PromptAnswerDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(3),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PromptAnswerDto),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "prompts", void 0);
class UpdateProfileDto extends (0, swagger_1.PartialType)(CreateProfileDto) {
}
exports.UpdateProfileDto = UpdateProfileDto;
class UpdateLocationDto {
    latitude;
    longitude;
}
exports.UpdateLocationDto = UpdateLocationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0511 }),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], UpdateLocationDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7679 }),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], UpdateLocationDto.prototype, "longitude", void 0);
class UpdatePreferencesDto {
    minAge;
    maxAge;
    maxDistanceKm;
    verifiedOnly;
    allowRadiusExpansion;
    intentionFilter;
    religionFilter;
}
exports.UpdatePreferencesDto = UpdatePreferencesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 18, maximum: 120 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(18),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], UpdatePreferencesDto.prototype, "minAge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 18, maximum: 120 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(18),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], UpdatePreferencesDto.prototype, "maxAge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 1, maximum: 20_000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(20_000),
    __metadata("design:type", Number)
], UpdatePreferencesDto.prototype, "maxDistanceKm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Gratuit, et volontairement mis en avant : c’est ce qui pousse à se faire vérifier.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePreferencesDto.prototype, "verifiedOnly", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Élargit le rayon automatiquement quand la zone est peu dense. Désactiver expose à un deck vide.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePreferencesDto.prototype, "allowRadiusExpansion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: profile_enums_1.Intention, isArray: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.Intention, { each: true }),
    __metadata("design:type", Array)
], UpdatePreferencesDto.prototype, "intentionFilter", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: profile_enums_1.Religion, isArray: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(profile_enums_1.Religion, { each: true }),
    __metadata("design:type", Array)
], UpdatePreferencesDto.prototype, "religionFilter", void 0);
class UpdatePrivacyDto {
    incognito;
    hideAge;
    hideDistance;
}
exports.UpdatePrivacyDto = UpdatePrivacyDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Invisible dans les decks, sauf pour les personnes déjà likées. Réservé aux abonnés.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePrivacyDto.prototype, "incognito", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePrivacyDto.prototype, "hideAge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePrivacyDto.prototype, "hideDistance", void 0);
//# sourceMappingURL=profile.dto.js.map