"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannel = exports.NotificationType = exports.EventRequestStatus = exports.EventStatus = exports.EventCategory = exports.BoostStatus = exports.BoostTier = exports.EntitlementSource = exports.EntitlementKey = exports.SubscriptionStatus = exports.SubscriptionTier = exports.LedgerReason = exports.PaymentStatus = exports.MobileMoneyOperator = exports.PaymentProviderKind = exports.ProductType = exports.VerificationFailureReason = exports.VerificationStatus = exports.VerificationType = exports.RiskLevel = exports.ModerationDecision = exports.ModerationTaskStatus = exports.ModerationTaskType = exports.ReportStatus = exports.ReportReason = exports.MessageStatus = exports.MessageType = exports.ConversationStatus = exports.ConversationType = exports.MatchStatus = exports.SwipeSource = exports.SwipeAction = exports.PhotoRejectionReason = exports.PhotoStatus = exports.Frequency = exports.EducationLevel = exports.Religion = exports.Intention = exports.SeekingTarget = exports.MatchingBucket = exports.Gender = exports.ReferralStatus = exports.IntegrityVerdict = exports.DevicePlatform = exports.OtpPurpose = exports.OtpChannel = exports.AuthProvider = exports.AppLocale = exports.UserRole = exports.UserStatus = void 0;
exports.ActorType = void 0;
exports.UserStatus = {
    PENDING_PHONE: 'PENDING_PHONE',
    PENDING_PROFILE: 'PENDING_PROFILE',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    SHADOW_BANNED: 'SHADOW_BANNED',
    BANNED: 'BANNED',
    DELETION_PENDING: 'DELETION_PENDING',
    DELETED: 'DELETED'
};
exports.UserRole = {
    USER: 'USER',
    MODERATOR: 'MODERATOR',
    ADMIN: 'ADMIN'
};
exports.AppLocale = {
    FR: 'FR',
    EN: 'EN'
};
exports.AuthProvider = {
    EMAIL: 'EMAIL',
    PHONE: 'PHONE',
    GOOGLE: 'GOOGLE',
    APPLE: 'APPLE'
};
exports.OtpChannel = {
    EMAIL: 'EMAIL',
    SMS: 'SMS'
};
exports.OtpPurpose = {
    SIGNUP: 'SIGNUP',
    LOGIN: 'LOGIN',
    PHONE_CHANGE: 'PHONE_CHANGE',
    ACCOUNT_RECOVERY: 'ACCOUNT_RECOVERY'
};
exports.DevicePlatform = {
    ANDROID: 'ANDROID',
    IOS: 'IOS',
    WEB: 'WEB'
};
exports.IntegrityVerdict = {
    PASS: 'PASS',
    FAIL: 'FAIL',
    UNEVALUATED: 'UNEVALUATED'
};
exports.ReferralStatus = {
    PENDING: 'PENDING',
    QUALIFIED: 'QUALIFIED',
    REWARDED: 'REWARDED',
    REVOKED: 'REVOKED'
};
exports.Gender = {
    WOMAN: 'WOMAN',
    MAN: 'MAN',
    NON_BINARY: 'NON_BINARY',
    OTHER: 'OTHER'
};
exports.MatchingBucket = {
    WOMEN: 'WOMEN',
    MEN: 'MEN',
    EVERYONE: 'EVERYONE'
};
exports.SeekingTarget = {
    WOMEN: 'WOMEN',
    MEN: 'MEN',
    EVERYONE: 'EVERYONE'
};
exports.Intention = {
    LOVE: 'LOVE',
    FRIENDSHIP: 'FRIENDSHIP',
    FUN: 'FUN',
    DATING: 'DATING'
};
exports.Religion = {
    CHRISTIAN_CATHOLIC: 'CHRISTIAN_CATHOLIC',
    CHRISTIAN_PROTESTANT: 'CHRISTIAN_PROTESTANT',
    CHRISTIAN_OTHER: 'CHRISTIAN_OTHER',
    MUSLIM: 'MUSLIM',
    TRADITIONAL: 'TRADITIONAL',
    BUDDHIST: 'BUDDHIST',
    HINDU: 'HINDU',
    JEWISH: 'JEWISH',
    AGNOSTIC: 'AGNOSTIC',
    ATHEIST: 'ATHEIST',
    OTHER: 'OTHER',
    PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};
exports.EducationLevel = {
    NONE: 'NONE',
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    VOCATIONAL: 'VOCATIONAL',
    BACHELOR: 'BACHELOR',
    MASTER: 'MASTER',
    DOCTORATE: 'DOCTORATE',
    OTHER: 'OTHER'
};
exports.Frequency = {
    NEVER: 'NEVER',
    SOMETIMES: 'SOMETIMES',
    OFTEN: 'OFTEN'
};
exports.PhotoStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.PhotoRejectionReason = {
    NSFW: 'NSFW',
    VIOLENCE: 'VIOLENCE',
    SUSPECTED_MINOR: 'SUSPECTED_MINOR',
    DUPLICATE: 'DUPLICATE',
    STOLEN: 'STOLEN',
    AI_GENERATED: 'AI_GENERATED',
    NO_FACE: 'NO_FACE',
    LOW_QUALITY: 'LOW_QUALITY',
    OTHER: 'OTHER'
};
exports.SwipeAction = {
    LIKE: 'LIKE',
    PASS: 'PASS',
    SUPERLIKE: 'SUPERLIKE'
};
exports.SwipeSource = {
    DECK: 'DECK',
    LIKES_RECEIVED: 'LIKES_RECEIVED',
    EVENT: 'EVENT',
    PROFILE_DIRECT: 'PROFILE_DIRECT'
};
exports.MatchStatus = {
    ACTIVE: 'ACTIVE',
    UNMATCHED: 'UNMATCHED',
    BLOCKED: 'BLOCKED',
    EXPIRED: 'EXPIRED'
};
exports.ConversationType = {
    MATCH: 'MATCH',
    EVENT: 'EVENT'
};
exports.ConversationStatus = {
    ACTIVE: 'ACTIVE',
    ARCHIVED: 'ARCHIVED',
    CLOSED: 'CLOSED'
};
exports.MessageType = {
    TEXT: 'TEXT',
    IMAGE: 'IMAGE',
    AUDIO: 'AUDIO',
    SYSTEM: 'SYSTEM'
};
exports.MessageStatus = {
    SENT: 'SENT',
    DELIVERED: 'DELIVERED',
    READ: 'READ',
    DELETED: 'DELETED'
};
exports.ReportReason = {
    FAKE_PROFILE: 'FAKE_PROFILE',
    HARASSMENT: 'HARASSMENT',
    NUDITY: 'NUDITY',
    SCAM_MONEY: 'SCAM_MONEY',
    UNDERAGE: 'UNDERAGE',
    VIOLENCE: 'VIOLENCE',
    SPAM: 'SPAM',
    OFF_PLATFORM: 'OFF_PLATFORM',
    OTHER: 'OTHER'
};
exports.ReportStatus = {
    OPEN: 'OPEN',
    REVIEWING: 'REVIEWING',
    ACTIONED: 'ACTIONED',
    DISMISSED: 'DISMISSED'
};
exports.ModerationTaskType = {
    PHOTO_REVIEW: 'PHOTO_REVIEW',
    REPORT_REVIEW: 'REPORT_REVIEW',
    VERIFICATION_REVIEW: 'VERIFICATION_REVIEW',
    RISK_REVIEW: 'RISK_REVIEW',
    EVENT_REVIEW: 'EVENT_REVIEW'
};
exports.ModerationTaskStatus = {
    QUEUED: 'QUEUED',
    IN_REVIEW: 'IN_REVIEW',
    RESOLVED: 'RESOLVED',
    ESCALATED: 'ESCALATED'
};
exports.ModerationDecision = {
    APPROVE: 'APPROVE',
    REJECT: 'REJECT',
    WARN: 'WARN',
    SHADOW_BAN: 'SHADOW_BAN',
    SUSPEND: 'SUSPEND',
    BAN: 'BAN',
    NO_ACTION: 'NO_ACTION'
};
exports.RiskLevel = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
};
exports.VerificationType = {
    LIVENESS_FACE_MATCH: 'LIVENESS_FACE_MATCH',
    ID_DOCUMENT: 'ID_DOCUMENT'
};
exports.VerificationStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    MANUAL_REVIEW: 'MANUAL_REVIEW',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    EXPIRED: 'EXPIRED'
};
exports.VerificationFailureReason = {
    LIVENESS_FAILED: 'LIVENESS_FAILED',
    FACE_MISMATCH: 'FACE_MISMATCH',
    DUPLICATE_FACE: 'DUPLICATE_FACE',
    POOR_QUALITY: 'POOR_QUALITY',
    CHALLENGE_NOT_PERFORMED: 'CHALLENGE_NOT_PERFORMED',
    TIMEOUT: 'TIMEOUT',
    MANUAL_REJECT: 'MANUAL_REJECT'
};
exports.ProductType = {
    CREDIT_PACK: 'CREDIT_PACK',
    SUBSCRIPTION: 'SUBSCRIPTION',
    BOOST: 'BOOST',
    SUPERLIKE_PACK: 'SUPERLIKE_PACK',
    MESSAGE_BEFORE_MATCH: 'MESSAGE_BEFORE_MATCH',
    REWIND_PACK: 'REWIND_PACK',
    EVENT_SLOT: 'EVENT_SLOT'
};
exports.PaymentProviderKind = {
    MOBILE_MONEY: 'MOBILE_MONEY',
    IAP_GOOGLE: 'IAP_GOOGLE',
    IAP_APPLE: 'IAP_APPLE',
    STRIPE: 'STRIPE',
    MANUAL: 'MANUAL'
};
exports.MobileMoneyOperator = {
    MTN_MOMO: 'MTN_MOMO',
    ORANGE_MONEY: 'ORANGE_MONEY'
};
exports.PaymentStatus = {
    CREATED: 'CREATED',
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED',
    CANCELLED: 'CANCELLED',
    EXPIRED: 'EXPIRED',
    REFUNDED: 'REFUNDED'
};
exports.LedgerReason = {
    PURCHASE: 'PURCHASE',
    SPEND: 'SPEND',
    REFUND: 'REFUND',
    REVERSAL: 'REVERSAL',
    BONUS_SIGNUP: 'BONUS_SIGNUP',
    BONUS_REFERRAL: 'BONUS_REFERRAL',
    BONUS_PROMO: 'BONUS_PROMO',
    ADMIN_ADJUST: 'ADMIN_ADJUST',
    EXPIRY: 'EXPIRY'
};
exports.SubscriptionTier = {
    FREE: 'FREE',
    PLUS: 'PLUS',
    GOLD: 'GOLD'
};
exports.SubscriptionStatus = {
    ACTIVE: 'ACTIVE',
    GRACE: 'GRACE',
    EXPIRED: 'EXPIRED',
    CANCELLED: 'CANCELLED'
};
exports.EntitlementKey = {
    UNLIMITED_REWIND: 'UNLIMITED_REWIND',
    NO_ADS: 'NO_ADS',
    INCOGNITO: 'INCOGNITO',
    TRAVEL_MODE: 'TRAVEL_MODE',
    ADVANCED_FILTERS: 'ADVANCED_FILTERS',
    PRIORITY_DECK: 'PRIORITY_DECK',
    SUPERLIKE: 'SUPERLIKE',
    EXTRA_REWIND: 'EXTRA_REWIND',
    MESSAGE_BEFORE_MATCH: 'MESSAGE_BEFORE_MATCH',
    EVENT_CREATION: 'EVENT_CREATION'
};
exports.EntitlementSource = {
    SUBSCRIPTION: 'SUBSCRIPTION',
    PURCHASE: 'PURCHASE',
    FREE_QUOTA: 'FREE_QUOTA',
    ADMIN_GRANT: 'ADMIN_GRANT'
};
exports.BoostTier = {
    BOOST_30M: 'BOOST_30M',
    BOOST_1H: 'BOOST_1H',
    BOOST_3H: 'BOOST_3H',
    BOOST_6H: 'BOOST_6H',
    BOOST_12H: 'BOOST_12H',
    BOOST_24H: 'BOOST_24H'
};
exports.BoostStatus = {
    QUEUED: 'QUEUED',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
    REFUNDED: 'REFUNDED'
};
exports.EventCategory = {
    OUTING: 'OUTING',
    SPORT: 'SPORT',
    CULTURE: 'CULTURE',
    FOOD: 'FOOD',
    MUSIC: 'MUSIC',
    GAMES: 'GAMES',
    VOLUNTEER: 'VOLUNTEER',
    OTHER: 'OTHER'
};
exports.EventStatus = {
    DRAFT: 'DRAFT',
    PENDING_REVIEW: 'PENDING_REVIEW',
    PUBLISHED: 'PUBLISHED',
    FULL: 'FULL',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED'
};
exports.EventRequestStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED',
    CANCELLED: 'CANCELLED',
    WAITLISTED: 'WAITLISTED'
};
exports.NotificationType = {
    NEW_MATCH: 'NEW_MATCH',
    NEW_MESSAGE: 'NEW_MESSAGE',
    NEW_LIKE: 'NEW_LIKE',
    BOOST_STARTED: 'BOOST_STARTED',
    BOOST_ENDED: 'BOOST_ENDED',
    VERIFICATION_RESULT: 'VERIFICATION_RESULT',
    EVENT_REQUEST: 'EVENT_REQUEST',
    EVENT_ACCEPTED: 'EVENT_ACCEPTED',
    EVENT_REMINDER: 'EVENT_REMINDER',
    PAYMENT_RESULT: 'PAYMENT_RESULT',
    MODERATION: 'MODERATION',
    SYSTEM: 'SYSTEM',
    MARKETING: 'MARKETING'
};
exports.NotificationChannel = {
    PUSH: 'PUSH',
    IN_APP: 'IN_APP',
    EMAIL: 'EMAIL',
    SMS: 'SMS'
};
exports.ActorType = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    SYSTEM: 'SYSTEM'
};
//# sourceMappingURL=enums.js.map