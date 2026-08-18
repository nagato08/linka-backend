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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const event_service_1 = require("./event.service");
const event_dto_1 = require("./dto/event.dto");
let EventController = class EventController {
    events;
    constructor(events) {
        this.events = events;
    }
    nearby(userId, query) {
        return this.events.listNearby(userId, query);
    }
    mine(userId) {
        return this.events.listMine(userId);
    }
    detail(userId, eventId) {
        return this.events.detail(userId, eventId);
    }
    create(userId, dto) {
        return this.events.create(userId, {
            ...dto,
            startsAt: new Date(dto.startsAt),
            endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
        });
    }
    join(userId, eventId, dto) {
        return this.events.requestToJoin(userId, eventId, dto.message);
    }
    requests(userId, eventId) {
        return this.events.listRequests(userId, eventId);
    }
    respond(userId, eventId, requestId, dto) {
        return this.events.respond(userId, eventId, requestId, dto.accept);
    }
    checkIn(userId, eventId, dto) {
        return this.events.checkIn(userId, eventId, dto.latitude, dto.longitude);
    }
    cancel(userId, eventId, dto) {
        return this.events.cancel(userId, eventId, dto.reason);
    }
    coverTicket(userId, eventId, dto) {
        return this.events.createCoverUploadTicket(userId, eventId, dto.contentType, dto.contentLength);
    }
    confirmCover(userId, eventId, dto) {
        return this.events.confirmCover(userId, eventId, dto.uploadKey);
    }
    promote(userId, eventId) {
        return this.events.promote(userId, eventId);
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Événements à proximité',
        description: 'Rayon élargi automatiquement quand la zone est peu dense.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, event_dto_1.NearbyEventsDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "nearby", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, swagger_1.ApiOperation)({ summary: 'Mes événements, organisés et rejoints' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "mine", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Détail d’un événement',
        description: 'L’adresse précise n’est révélée qu’aux personnes acceptées : la publier permettrait de se poster à un rendez-vous sans y être invité.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "detail", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Créer un événement',
        description: 'Réservé aux profils vérifiés — c’est le principal levier d’adoption du badge.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, event_dto_1.CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/join'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Demander à rejoindre',
        description: 'L’organisateur tranche. La répartition par genre est respectée.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, event_dto_1.JoinEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "join", null);
__decorate([
    (0, common_1.Get)(':id/requests'),
    (0, swagger_1.ApiOperation)({ summary: 'Demandes reçues (organisateur)' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "requests", null);
__decorate([
    (0, common_1.Post)(':id/requests/:requestId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Accepter ou refuser une demande' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Param)('requestId', common_1.ParseUUIDPipe)),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, event_dto_1.RespondRequestDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "respond", null);
__decorate([
    (0, common_1.Post)(':id/checkin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Pointer sur place',
        description: 'Contrôlé par géolocalisation, dans un rayon de 500 m et autour de l’heure prévue. Alimente la réputation d’organisateur.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, event_dto_1.CheckInDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "checkIn", null);
__decorate([
    (0, common_1.Post)(':id/cancel'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Annuler (organisateur)',
        description: 'La conversation reste ouverte : les participants doivent pouvoir s’organiser autrement.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, event_dto_1.CancelEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)(':id/cover'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Demander une URL de dépôt pour l’affiche',
        description: 'Le fichier part directement vers le stockage objet, sans transiter par l’API.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, event_dto_1.CoverUploadDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "coverTicket", null);
__decorate([
    (0, common_1.Post)(':id/cover/confirm'),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    (0, swagger_1.ApiOperation)({
        summary: 'Confirmer le dépôt de l’affiche',
        description: 'Déclenche le redimensionnement et l’analyse de contenu. L’affiche n’apparaît qu’une fois validée.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, event_dto_1.ConfirmCoverDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "confirmCover", null);
__decorate([
    (0, common_1.Post)(':id/promote'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Mettre l’événement en avant',
        description: `Coûte ${event_service_1.EVENT_PROMOTION_COST} pièces. L’événement porte alors trois fois plus loin et passe en tête de liste.`,
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "promote", null);
exports.EventController = EventController = __decorate([
    (0, swagger_1.ApiTags)('events'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('events'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
//# sourceMappingURL=event.controller.js.map