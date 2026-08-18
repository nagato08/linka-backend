"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
exports.validateEnv = validateEnv;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z
        .enum(['development', 'test', 'production'])
        .default('development'),
    PORT: zod_1.z.coerce.number().int().positive().default(3000),
    DATABASE_URL: zod_1.z.url(),
    REDIS_URL: zod_1.z.url(),
    S3_ENDPOINT: zod_1.z.url(),
    S3_ACCESS_KEY: zod_1.z.string().min(1),
    S3_SECRET_KEY: zod_1.z.string().min(1),
    S3_BUCKET: zod_1.z.string().min(1),
    S3_REGION: zod_1.z.string().min(1).default('auto'),
    S3_PUBLIC_URL: zod_1.z.url(),
    S3_FORCE_PATH_STYLE: zod_1.z
        .string()
        .default('true')
        .transform((v) => v === 'true'),
    PHONE_HASH_PEPPER: zod_1.z.string().min(16),
    FIELD_ENCRYPTION_KEY: zod_1.z
        .string()
        .regex(/^[0-9a-f]{64}$/i, 'doit faire 64 caractères hexadécimaux (32 octets)'),
    RESEND_API_KEY: zod_1.z.string().default(''),
    MAIL_FROM: zod_1.z.string().min(3).default('Linka <onboarding@resend.dev>'),
    REQUIRE_DEVICE_INTEGRITY: zod_1.z
        .string()
        .default('false')
        .transform((v) => v === 'true'),
    PLAY_INTEGRITY_PACKAGE_NAME: zod_1.z.string().default(''),
    GOOGLE_SERVICE_ACCOUNT_B64: zod_1.z.string().default(''),
    FIREBASE_PROJECT_ID: zod_1.z.string().default(''),
    FIREBASE_SERVICE_ACCOUNT_B64: zod_1.z.string().default(''),
    NOTCHPAY_PUBLIC_KEY: zod_1.z.string().default(''),
    NOTCHPAY_PRIVATE_KEY: zod_1.z.string().default(''),
    NOTCHPAY_WEBHOOK_SECRET: zod_1.z.string().default(''),
    APP_PUBLIC_URL: zod_1.z.string().default('http://localhost:3000'),
    JWT_ACCESS_SECRET: zod_1.z.string().min(16),
    JWT_REFRESH_SECRET: zod_1.z.string().min(16),
    JWT_ACCESS_TTL: zod_1.z.string().default('15m'),
    JWT_REFRESH_TTL: zod_1.z.string().default('30d'),
});
function validateEnv(raw) {
    const result = exports.envSchema.safeParse(raw);
    if (!result.success) {
        const details = result.error.issues
            .map((issue) => `  - ${issue.path.join('.')} : ${issue.message}`)
            .join('\n');
        throw new Error(`Configuration invalide. Vérifier le fichier .env :\n${details}`);
    }
    return result.data;
}
//# sourceMappingURL=env.schema.js.map