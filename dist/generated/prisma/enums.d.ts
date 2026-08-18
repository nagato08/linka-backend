export declare const UserStatus: {
    readonly PENDING_PHONE: "PENDING_PHONE";
    readonly PENDING_PROFILE: "PENDING_PROFILE";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly SHADOW_BANNED: "SHADOW_BANNED";
    readonly BANNED: "BANNED";
    readonly DELETION_PENDING: "DELETION_PENDING";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const UserRole: {
    readonly USER: "USER";
    readonly MODERATOR: "MODERATOR";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const AppLocale: {
    readonly FR: "FR";
    readonly EN: "EN";
};
export type AppLocale = (typeof AppLocale)[keyof typeof AppLocale];
export declare const AuthProvider: {
    readonly EMAIL: "EMAIL";
    readonly PHONE: "PHONE";
    readonly GOOGLE: "GOOGLE";
    readonly APPLE: "APPLE";
};
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
export declare const OtpChannel: {
    readonly EMAIL: "EMAIL";
    readonly SMS: "SMS";
};
export type OtpChannel = (typeof OtpChannel)[keyof typeof OtpChannel];
export declare const OtpPurpose: {
    readonly SIGNUP: "SIGNUP";
    readonly LOGIN: "LOGIN";
    readonly PHONE_CHANGE: "PHONE_CHANGE";
    readonly ACCOUNT_RECOVERY: "ACCOUNT_RECOVERY";
};
export type OtpPurpose = (typeof OtpPurpose)[keyof typeof OtpPurpose];
export declare const DevicePlatform: {
    readonly ANDROID: "ANDROID";
    readonly IOS: "IOS";
    readonly WEB: "WEB";
};
export type DevicePlatform = (typeof DevicePlatform)[keyof typeof DevicePlatform];
export declare const IntegrityVerdict: {
    readonly PASS: "PASS";
    readonly FAIL: "FAIL";
    readonly UNEVALUATED: "UNEVALUATED";
};
export type IntegrityVerdict = (typeof IntegrityVerdict)[keyof typeof IntegrityVerdict];
export declare const ReferralStatus: {
    readonly PENDING: "PENDING";
    readonly QUALIFIED: "QUALIFIED";
    readonly REWARDED: "REWARDED";
    readonly REVOKED: "REVOKED";
};
export type ReferralStatus = (typeof ReferralStatus)[keyof typeof ReferralStatus];
export declare const Gender: {
    readonly WOMAN: "WOMAN";
    readonly MAN: "MAN";
    readonly NON_BINARY: "NON_BINARY";
    readonly OTHER: "OTHER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const MatchingBucket: {
    readonly WOMEN: "WOMEN";
    readonly MEN: "MEN";
    readonly EVERYONE: "EVERYONE";
};
export type MatchingBucket = (typeof MatchingBucket)[keyof typeof MatchingBucket];
export declare const SeekingTarget: {
    readonly WOMEN: "WOMEN";
    readonly MEN: "MEN";
    readonly EVERYONE: "EVERYONE";
};
export type SeekingTarget = (typeof SeekingTarget)[keyof typeof SeekingTarget];
export declare const Intention: {
    readonly LOVE: "LOVE";
    readonly FRIENDSHIP: "FRIENDSHIP";
    readonly FUN: "FUN";
    readonly DATING: "DATING";
};
export type Intention = (typeof Intention)[keyof typeof Intention];
export declare const Religion: {
    readonly CHRISTIAN_CATHOLIC: "CHRISTIAN_CATHOLIC";
    readonly CHRISTIAN_PROTESTANT: "CHRISTIAN_PROTESTANT";
    readonly CHRISTIAN_OTHER: "CHRISTIAN_OTHER";
    readonly MUSLIM: "MUSLIM";
    readonly TRADITIONAL: "TRADITIONAL";
    readonly BUDDHIST: "BUDDHIST";
    readonly HINDU: "HINDU";
    readonly JEWISH: "JEWISH";
    readonly AGNOSTIC: "AGNOSTIC";
    readonly ATHEIST: "ATHEIST";
    readonly OTHER: "OTHER";
    readonly PREFER_NOT_TO_SAY: "PREFER_NOT_TO_SAY";
};
export type Religion = (typeof Religion)[keyof typeof Religion];
export declare const EducationLevel: {
    readonly NONE: "NONE";
    readonly PRIMARY: "PRIMARY";
    readonly SECONDARY: "SECONDARY";
    readonly VOCATIONAL: "VOCATIONAL";
    readonly BACHELOR: "BACHELOR";
    readonly MASTER: "MASTER";
    readonly DOCTORATE: "DOCTORATE";
    readonly OTHER: "OTHER";
};
export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel];
export declare const Frequency: {
    readonly NEVER: "NEVER";
    readonly SOMETIMES: "SOMETIMES";
    readonly OFTEN: "OFTEN";
};
export type Frequency = (typeof Frequency)[keyof typeof Frequency];
export declare const PhotoStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type PhotoStatus = (typeof PhotoStatus)[keyof typeof PhotoStatus];
export declare const PhotoRejectionReason: {
    readonly NSFW: "NSFW";
    readonly VIOLENCE: "VIOLENCE";
    readonly SUSPECTED_MINOR: "SUSPECTED_MINOR";
    readonly DUPLICATE: "DUPLICATE";
    readonly STOLEN: "STOLEN";
    readonly AI_GENERATED: "AI_GENERATED";
    readonly NO_FACE: "NO_FACE";
    readonly LOW_QUALITY: "LOW_QUALITY";
    readonly OTHER: "OTHER";
};
export type PhotoRejectionReason = (typeof PhotoRejectionReason)[keyof typeof PhotoRejectionReason];
export declare const SwipeAction: {
    readonly LIKE: "LIKE";
    readonly PASS: "PASS";
    readonly SUPERLIKE: "SUPERLIKE";
};
export type SwipeAction = (typeof SwipeAction)[keyof typeof SwipeAction];
export declare const SwipeSource: {
    readonly DECK: "DECK";
    readonly LIKES_RECEIVED: "LIKES_RECEIVED";
    readonly EVENT: "EVENT";
    readonly PROFILE_DIRECT: "PROFILE_DIRECT";
};
export type SwipeSource = (typeof SwipeSource)[keyof typeof SwipeSource];
export declare const MatchStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly UNMATCHED: "UNMATCHED";
    readonly BLOCKED: "BLOCKED";
    readonly EXPIRED: "EXPIRED";
};
export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus];
export declare const ConversationType: {
    readonly MATCH: "MATCH";
    readonly EVENT: "EVENT";
};
export type ConversationType = (typeof ConversationType)[keyof typeof ConversationType];
export declare const ConversationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly ARCHIVED: "ARCHIVED";
    readonly CLOSED: "CLOSED";
};
export type ConversationStatus = (typeof ConversationStatus)[keyof typeof ConversationStatus];
export declare const MessageType: {
    readonly TEXT: "TEXT";
    readonly IMAGE: "IMAGE";
    readonly AUDIO: "AUDIO";
    readonly SYSTEM: "SYSTEM";
};
export type MessageType = (typeof MessageType)[keyof typeof MessageType];
export declare const MessageStatus: {
    readonly SENT: "SENT";
    readonly DELIVERED: "DELIVERED";
    readonly READ: "READ";
    readonly DELETED: "DELETED";
};
export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus];
export declare const ReportReason: {
    readonly FAKE_PROFILE: "FAKE_PROFILE";
    readonly HARASSMENT: "HARASSMENT";
    readonly NUDITY: "NUDITY";
    readonly SCAM_MONEY: "SCAM_MONEY";
    readonly UNDERAGE: "UNDERAGE";
    readonly VIOLENCE: "VIOLENCE";
    readonly SPAM: "SPAM";
    readonly OFF_PLATFORM: "OFF_PLATFORM";
    readonly OTHER: "OTHER";
};
export type ReportReason = (typeof ReportReason)[keyof typeof ReportReason];
export declare const ReportStatus: {
    readonly OPEN: "OPEN";
    readonly REVIEWING: "REVIEWING";
    readonly ACTIONED: "ACTIONED";
    readonly DISMISSED: "DISMISSED";
};
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus];
export declare const ModerationTaskType: {
    readonly PHOTO_REVIEW: "PHOTO_REVIEW";
    readonly REPORT_REVIEW: "REPORT_REVIEW";
    readonly VERIFICATION_REVIEW: "VERIFICATION_REVIEW";
    readonly RISK_REVIEW: "RISK_REVIEW";
    readonly EVENT_REVIEW: "EVENT_REVIEW";
};
export type ModerationTaskType = (typeof ModerationTaskType)[keyof typeof ModerationTaskType];
export declare const ModerationTaskStatus: {
    readonly QUEUED: "QUEUED";
    readonly IN_REVIEW: "IN_REVIEW";
    readonly RESOLVED: "RESOLVED";
    readonly ESCALATED: "ESCALATED";
};
export type ModerationTaskStatus = (typeof ModerationTaskStatus)[keyof typeof ModerationTaskStatus];
export declare const ModerationDecision: {
    readonly APPROVE: "APPROVE";
    readonly REJECT: "REJECT";
    readonly WARN: "WARN";
    readonly SHADOW_BAN: "SHADOW_BAN";
    readonly SUSPEND: "SUSPEND";
    readonly BAN: "BAN";
    readonly NO_ACTION: "NO_ACTION";
};
export type ModerationDecision = (typeof ModerationDecision)[keyof typeof ModerationDecision];
export declare const RiskLevel: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
export declare const VerificationType: {
    readonly LIVENESS_FACE_MATCH: "LIVENESS_FACE_MATCH";
    readonly ID_DOCUMENT: "ID_DOCUMENT";
};
export type VerificationType = (typeof VerificationType)[keyof typeof VerificationType];
export declare const VerificationStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly MANUAL_REVIEW: "MANUAL_REVIEW";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly EXPIRED: "EXPIRED";
};
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];
export declare const VerificationFailureReason: {
    readonly LIVENESS_FAILED: "LIVENESS_FAILED";
    readonly FACE_MISMATCH: "FACE_MISMATCH";
    readonly DUPLICATE_FACE: "DUPLICATE_FACE";
    readonly POOR_QUALITY: "POOR_QUALITY";
    readonly CHALLENGE_NOT_PERFORMED: "CHALLENGE_NOT_PERFORMED";
    readonly TIMEOUT: "TIMEOUT";
    readonly MANUAL_REJECT: "MANUAL_REJECT";
};
export type VerificationFailureReason = (typeof VerificationFailureReason)[keyof typeof VerificationFailureReason];
export declare const ProductType: {
    readonly CREDIT_PACK: "CREDIT_PACK";
    readonly SUBSCRIPTION: "SUBSCRIPTION";
    readonly BOOST: "BOOST";
    readonly SUPERLIKE_PACK: "SUPERLIKE_PACK";
    readonly MESSAGE_BEFORE_MATCH: "MESSAGE_BEFORE_MATCH";
    readonly REWIND_PACK: "REWIND_PACK";
    readonly EVENT_SLOT: "EVENT_SLOT";
};
export type ProductType = (typeof ProductType)[keyof typeof ProductType];
export declare const PaymentProviderKind: {
    readonly MOBILE_MONEY: "MOBILE_MONEY";
    readonly IAP_GOOGLE: "IAP_GOOGLE";
    readonly IAP_APPLE: "IAP_APPLE";
    readonly STRIPE: "STRIPE";
    readonly MANUAL: "MANUAL";
};
export type PaymentProviderKind = (typeof PaymentProviderKind)[keyof typeof PaymentProviderKind];
export declare const MobileMoneyOperator: {
    readonly MTN_MOMO: "MTN_MOMO";
    readonly ORANGE_MONEY: "ORANGE_MONEY";
};
export type MobileMoneyOperator = (typeof MobileMoneyOperator)[keyof typeof MobileMoneyOperator];
export declare const PaymentStatus: {
    readonly CREATED: "CREATED";
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SUCCEEDED: "SUCCEEDED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
    readonly EXPIRED: "EXPIRED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const LedgerReason: {
    readonly PURCHASE: "PURCHASE";
    readonly SPEND: "SPEND";
    readonly REFUND: "REFUND";
    readonly REVERSAL: "REVERSAL";
    readonly BONUS_SIGNUP: "BONUS_SIGNUP";
    readonly BONUS_REFERRAL: "BONUS_REFERRAL";
    readonly BONUS_PROMO: "BONUS_PROMO";
    readonly ADMIN_ADJUST: "ADMIN_ADJUST";
    readonly EXPIRY: "EXPIRY";
};
export type LedgerReason = (typeof LedgerReason)[keyof typeof LedgerReason];
export declare const SubscriptionTier: {
    readonly FREE: "FREE";
    readonly PLUS: "PLUS";
    readonly GOLD: "GOLD";
};
export type SubscriptionTier = (typeof SubscriptionTier)[keyof typeof SubscriptionTier];
export declare const SubscriptionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly GRACE: "GRACE";
    readonly EXPIRED: "EXPIRED";
    readonly CANCELLED: "CANCELLED";
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
export declare const EntitlementKey: {
    readonly UNLIMITED_REWIND: "UNLIMITED_REWIND";
    readonly NO_ADS: "NO_ADS";
    readonly INCOGNITO: "INCOGNITO";
    readonly TRAVEL_MODE: "TRAVEL_MODE";
    readonly ADVANCED_FILTERS: "ADVANCED_FILTERS";
    readonly PRIORITY_DECK: "PRIORITY_DECK";
    readonly SUPERLIKE: "SUPERLIKE";
    readonly EXTRA_REWIND: "EXTRA_REWIND";
    readonly MESSAGE_BEFORE_MATCH: "MESSAGE_BEFORE_MATCH";
    readonly EVENT_CREATION: "EVENT_CREATION";
};
export type EntitlementKey = (typeof EntitlementKey)[keyof typeof EntitlementKey];
export declare const EntitlementSource: {
    readonly SUBSCRIPTION: "SUBSCRIPTION";
    readonly PURCHASE: "PURCHASE";
    readonly FREE_QUOTA: "FREE_QUOTA";
    readonly ADMIN_GRANT: "ADMIN_GRANT";
};
export type EntitlementSource = (typeof EntitlementSource)[keyof typeof EntitlementSource];
export declare const BoostTier: {
    readonly BOOST_30M: "BOOST_30M";
    readonly BOOST_1H: "BOOST_1H";
    readonly BOOST_3H: "BOOST_3H";
    readonly BOOST_6H: "BOOST_6H";
    readonly BOOST_12H: "BOOST_12H";
    readonly BOOST_24H: "BOOST_24H";
};
export type BoostTier = (typeof BoostTier)[keyof typeof BoostTier];
export declare const BoostStatus: {
    readonly QUEUED: "QUEUED";
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly REFUNDED: "REFUNDED";
};
export type BoostStatus = (typeof BoostStatus)[keyof typeof BoostStatus];
export declare const EventCategory: {
    readonly OUTING: "OUTING";
    readonly SPORT: "SPORT";
    readonly CULTURE: "CULTURE";
    readonly FOOD: "FOOD";
    readonly MUSIC: "MUSIC";
    readonly GAMES: "GAMES";
    readonly VOLUNTEER: "VOLUNTEER";
    readonly OTHER: "OTHER";
};
export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory];
export declare const EventStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_REVIEW: "PENDING_REVIEW";
    readonly PUBLISHED: "PUBLISHED";
    readonly FULL: "FULL";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
};
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];
export declare const EventRequestStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
    readonly CANCELLED: "CANCELLED";
    readonly WAITLISTED: "WAITLISTED";
};
export type EventRequestStatus = (typeof EventRequestStatus)[keyof typeof EventRequestStatus];
export declare const NotificationType: {
    readonly NEW_MATCH: "NEW_MATCH";
    readonly NEW_MESSAGE: "NEW_MESSAGE";
    readonly NEW_LIKE: "NEW_LIKE";
    readonly BOOST_STARTED: "BOOST_STARTED";
    readonly BOOST_ENDED: "BOOST_ENDED";
    readonly VERIFICATION_RESULT: "VERIFICATION_RESULT";
    readonly EVENT_REQUEST: "EVENT_REQUEST";
    readonly EVENT_ACCEPTED: "EVENT_ACCEPTED";
    readonly EVENT_REMINDER: "EVENT_REMINDER";
    readonly PAYMENT_RESULT: "PAYMENT_RESULT";
    readonly MODERATION: "MODERATION";
    readonly SYSTEM: "SYSTEM";
    readonly MARKETING: "MARKETING";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const NotificationChannel: {
    readonly PUSH: "PUSH";
    readonly IN_APP: "IN_APP";
    readonly EMAIL: "EMAIL";
    readonly SMS: "SMS";
};
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];
export declare const ActorType: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
    readonly SYSTEM: "SYSTEM";
};
export type ActorType = (typeof ActorType)[keyof typeof ActorType];
