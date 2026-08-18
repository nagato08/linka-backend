"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const schedule_1 = require("@nestjs/schedule");
const config_module_1 = require("./core/config/config.module");
const crypto_module_1 = require("./core/crypto/crypto.module");
const logger_module_1 = require("./core/logger/logger.module");
const prisma_module_1 = require("./core/prisma/prisma.module");
const redis_module_1 = require("./core/redis/redis.module");
const queue_module_1 = require("./core/queue/queue.module");
const storage_module_1 = require("./core/storage/storage.module");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const auth_module_1 = require("./modules/auth/auth.module");
const account_module_1 = require("./modules/account/account.module");
const admin_module_1 = require("./modules/admin/admin.module");
const billing_module_1 = require("./modules/billing/billing.module");
const safety_module_1 = require("./modules/safety/safety.module");
const verification_module_1 = require("./modules/verification/verification.module");
const jwt_auth_guard_1 = require("./modules/auth/guards/jwt-auth.guard");
const roles_guard_1 = require("./modules/auth/guards/roles.guard");
const events_module_1 = require("./modules/events/events.module");
const health_module_1 = require("./modules/health/health.module");
const travel_module_1 = require("./modules/travel/travel.module");
const chat_module_1 = require("./modules/chat/chat.module");
const discovery_module_1 = require("./modules/discovery/discovery.module");
const matching_module_1 = require("./modules/matching/matching.module");
const media_module_1 = require("./modules/media/media.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const profile_module_1 = require("./modules/profile/profile.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.AppConfigModule,
            logger_module_1.LoggerModule,
            prisma_module_1.PrismaModule,
            redis_module_1.RedisModule,
            crypto_module_1.CryptoModule,
            storage_module_1.StorageModule,
            queue_module_1.QueueModule,
            schedule_1.ScheduleModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [
                    { name: 'short', ttl: 1_000, limit: 10 },
                    { name: 'medium', ttl: 60_000, limit: 120 },
                    { name: 'long', ttl: 3_600_000, limit: 2_000 },
                ],
            }),
            auth_module_1.AuthModule,
            billing_module_1.BillingModule,
            notifications_module_1.NotificationsModule,
            profile_module_1.ProfileModule,
            media_module_1.MediaModule,
            discovery_module_1.DiscoveryModule,
            matching_module_1.MatchingModule,
            chat_module_1.ChatModule,
            safety_module_1.SafetyModule,
            verification_module_1.VerificationModule,
            account_module_1.AccountModule,
            admin_module_1.AdminModule,
            travel_module_1.TravelModule,
            events_module_1.EventsModule,
            health_module_1.HealthModule,
        ],
        providers: [
            { provide: core_1.APP_FILTER, useClass: all_exceptions_filter_1.AllExceptionsFilter },
            { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard },
            { provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard },
            { provide: core_1.APP_GUARD, useClass: roles_guard_1.RolesGuard },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map