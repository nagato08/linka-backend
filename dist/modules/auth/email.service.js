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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const resend_1 = require("resend");
const enums_1 = require("../../generated/prisma/enums");
const config_module_1 = require("../../core/config/config.module");
const disposable_domains_1 = require("./disposable-domains");
let EmailService = EmailService_1 = class EmailService {
    config;
    logger = new common_1.Logger(EmailService_1.name);
    resend;
    from;
    constructor(config) {
        this.config = config;
        const apiKey = config.get('RESEND_API_KEY');
        this.from = config.get('MAIL_FROM');
        this.resend = apiKey ? new resend_1.Resend(apiKey) : null;
        if (!this.resend) {
            if (this.config.isProduction) {
                throw new Error('RESEND_API_KEY absente. Aucun e-mail ne partira : configurez-la avant tout déploiement.');
            }
            this.logger.warn('Resend non configuré : les codes sont écrits dans les journaux');
        }
    }
    normalize(raw) {
        const email = raw.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) {
            throw new common_1.BadRequestException('Adresse e-mail invalide');
        }
        const domain = email.split('@')[1];
        if (!domain || disposable_domains_1.DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
            throw new common_1.BadRequestException('Les adresses temporaires ne sont pas acceptées');
        }
        return email;
    }
    async sendOtp(email, code, locale) {
        const isEnglish = locale === enums_1.AppLocale.EN;
        const subject = isEnglish
            ? `${code} — your Linka verification code`
            : `${code} — votre code de vérification Linka`;
        if (!this.resend) {
            this.logger.log(`→ ${email} : code ${code}`);
            return;
        }
        const { error } = await this.resend.emails.send({
            from: this.from,
            to: email,
            subject,
            html: this.template(code, isEnglish),
            text: isEnglish
                ? `Your Linka verification code is ${code}. It expires in 10 minutes.`
                : `Votre code de vérification Linka est ${code}. Il expire dans 10 minutes.`,
        });
        if (error) {
            this.logger.error(`Envoi impossible vers ${email} : ${error.message}`);
            throw new common_1.BadRequestException("L'e-mail n'a pas pu être envoyé");
        }
    }
    template(code, isEnglish) {
        const title = isEnglish
            ? 'Your verification code'
            : 'Votre code de vérification';
        const hint = isEnglish
            ? 'This code expires in 10 minutes. If you did not request it, ignore this message.'
            : "Ce code expire dans 10 minutes. Si vous ne l'avez pas demandé, ignorez ce message.";
        return `<!doctype html>
<html lang="${isEnglish ? 'en' : 'fr'}">
  <body style="margin:0;padding:32px;background:#f7f7f7;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;">
    <div style="max-width:480px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;">
      <p style="margin:0 0 8px;font-size:20px;font-weight:600;color:#6A4CFF;">Linka</p>
      <h1 style="margin:0 0 24px;font-size:18px;font-weight:600;color:#1C1C1C;">${title}</h1>
      <p style="margin:0 0 24px;font-size:34px;font-weight:700;letter-spacing:8px;color:#1C1C1C;">${code}</p>
      <p style="margin:0;font-size:14px;line-height:1.5;color:#7A7A7A;">${hint}</p>
    </div>
  </body>
</html>`;
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map