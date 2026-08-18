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
var PushService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushService = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const config_module_1 = require("../../core/config/config.module");
let PushService = PushService_1 = class PushService {
    config;
    logger = new common_1.Logger(PushService_1.name);
    auth = null;
    projectId;
    constructor(config) {
        this.config = config;
        this.projectId = config.get('FIREBASE_PROJECT_ID');
        const serviceAccount = config.get('FIREBASE_SERVICE_ACCOUNT_B64');
        if (serviceAccount && this.projectId) {
            this.auth = new google_auth_library_1.GoogleAuth({
                credentials: JSON.parse(Buffer.from(serviceAccount, 'base64').toString('utf8')),
                scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
            });
        }
        else {
            this.logger.warn('Firebase non configuré : aucune notification ne partira');
        }
    }
    get isConfigured() {
        return this.auth !== null;
    }
    async send(message) {
        if (!this.auth) {
            this.logger.debug(`Push simulé → ${message.title}`);
            return { delivered: false, tokenInvalid: false };
        }
        try {
            const client = await this.auth.getClient();
            await client.request({
                url: `https://fcm.googleapis.com/v1/projects/${this.projectId}/messages:send`,
                method: 'POST',
                data: {
                    message: {
                        token: message.token,
                        notification: { title: message.title, body: message.body },
                        data: message.data ?? {},
                        android: {
                            priority: 'high',
                            notification: {
                                sound: 'default',
                                channel_id: 'linka_default',
                            },
                        },
                        apns: {
                            headers: { 'apns-priority': '10' },
                            payload: { aps: { sound: 'default', badge: 1 } },
                        },
                    },
                },
                timeout: 10_000,
            });
            return { delivered: true, tokenInvalid: false };
        }
        catch (error) {
            const details = this.describe(error);
            if (details.tokenInvalid) {
                this.logger.debug(`Jeton push invalide, à retirer : ${details.message}`);
            }
            else {
                this.logger.warn(`Envoi push impossible : ${details.message}`);
            }
            return {
                delivered: false,
                tokenInvalid: details.tokenInvalid,
                error: details.message,
            };
        }
    }
    describe(error) {
        const err = error;
        const status = err.response?.status;
        const fcmStatus = err.response?.data?.error?.status;
        return {
            message: fcmStatus ?? err.message ?? 'erreur inconnue',
            tokenInvalid: status === 404 ||
                fcmStatus === 'UNREGISTERED' ||
                fcmStatus === 'INVALID_ARGUMENT',
        };
    }
};
exports.PushService = PushService;
exports.PushService = PushService = PushService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], PushService);
//# sourceMappingURL=push.service.js.map