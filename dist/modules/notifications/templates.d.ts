import { AppLocale, NotificationType } from '../../generated/prisma/enums';
export interface NotificationTemplate {
    title: string;
    body: string;
}
export declare function renderTemplate(type: NotificationType, locale: AppLocale, vars?: Record<string, string>): NotificationTemplate;
