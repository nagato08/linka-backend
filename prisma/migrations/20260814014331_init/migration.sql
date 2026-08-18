-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('PENDING_PHONE', 'PENDING_PROFILE', 'ACTIVE', 'SUSPENDED', 'SHADOW_BANNED', 'BANNED', 'DELETION_PENDING', 'DELETED');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('USER', 'MODERATOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "app_locale" AS ENUM ('FR', 'EN');

-- CreateEnum
CREATE TYPE "auth_provider" AS ENUM ('PHONE', 'GOOGLE', 'APPLE');

-- CreateEnum
CREATE TYPE "otp_purpose" AS ENUM ('SIGNUP', 'LOGIN', 'PHONE_CHANGE', 'ACCOUNT_RECOVERY');

-- CreateEnum
CREATE TYPE "device_platform" AS ENUM ('ANDROID', 'IOS', 'WEB');

-- CreateEnum
CREATE TYPE "integrity_verdict" AS ENUM ('PASS', 'FAIL', 'UNEVALUATED');

-- CreateEnum
CREATE TYPE "referral_status" AS ENUM ('PENDING', 'QUALIFIED', 'REWARDED', 'REVOKED');

-- CreateEnum
CREATE TYPE "gender" AS ENUM ('WOMAN', 'MAN', 'NON_BINARY', 'OTHER');

-- CreateEnum
CREATE TYPE "matching_bucket" AS ENUM ('WOMEN', 'MEN', 'EVERYONE');

-- CreateEnum
CREATE TYPE "seeking_target" AS ENUM ('WOMEN', 'MEN', 'EVERYONE');

-- CreateEnum
CREATE TYPE "intention" AS ENUM ('LOVE', 'FRIENDSHIP', 'FUN', 'DATING');

-- CreateEnum
CREATE TYPE "religion" AS ENUM ('CHRISTIAN_CATHOLIC', 'CHRISTIAN_PROTESTANT', 'CHRISTIAN_OTHER', 'MUSLIM', 'TRADITIONAL', 'BUDDHIST', 'HINDU', 'JEWISH', 'AGNOSTIC', 'ATHEIST', 'OTHER', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "education_level" AS ENUM ('NONE', 'PRIMARY', 'SECONDARY', 'VOCATIONAL', 'BACHELOR', 'MASTER', 'DOCTORATE', 'OTHER');

-- CreateEnum
CREATE TYPE "frequency" AS ENUM ('NEVER', 'SOMETIMES', 'OFTEN');

-- CreateEnum
CREATE TYPE "photo_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "photo_rejection_reason" AS ENUM ('NSFW', 'VIOLENCE', 'SUSPECTED_MINOR', 'DUPLICATE', 'STOLEN', 'AI_GENERATED', 'NO_FACE', 'LOW_QUALITY', 'OTHER');

-- CreateEnum
CREATE TYPE "swipe_action" AS ENUM ('LIKE', 'PASS', 'SUPERLIKE');

-- CreateEnum
CREATE TYPE "swipe_source" AS ENUM ('DECK', 'LIKES_RECEIVED', 'EVENT', 'PROFILE_DIRECT');

-- CreateEnum
CREATE TYPE "match_status" AS ENUM ('ACTIVE', 'UNMATCHED', 'BLOCKED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "conversation_type" AS ENUM ('MATCH', 'EVENT');

-- CreateEnum
CREATE TYPE "conversation_status" AS ENUM ('ACTIVE', 'ARCHIVED', 'CLOSED');

-- CreateEnum
CREATE TYPE "message_type" AS ENUM ('TEXT', 'IMAGE', 'AUDIO', 'SYSTEM');

-- CreateEnum
CREATE TYPE "message_status" AS ENUM ('SENT', 'DELIVERED', 'READ', 'DELETED');

-- CreateEnum
CREATE TYPE "report_reason" AS ENUM ('FAKE_PROFILE', 'HARASSMENT', 'NUDITY', 'SCAM_MONEY', 'UNDERAGE', 'VIOLENCE', 'SPAM', 'OFF_PLATFORM', 'OTHER');

-- CreateEnum
CREATE TYPE "report_status" AS ENUM ('OPEN', 'REVIEWING', 'ACTIONED', 'DISMISSED');

-- CreateEnum
CREATE TYPE "moderation_task_type" AS ENUM ('PHOTO_REVIEW', 'REPORT_REVIEW', 'VERIFICATION_REVIEW', 'RISK_REVIEW', 'EVENT_REVIEW');

-- CreateEnum
CREATE TYPE "moderation_task_status" AS ENUM ('QUEUED', 'IN_REVIEW', 'RESOLVED', 'ESCALATED');

-- CreateEnum
CREATE TYPE "moderation_decision" AS ENUM ('APPROVE', 'REJECT', 'WARN', 'SHADOW_BAN', 'SUSPEND', 'BAN', 'NO_ACTION');

-- CreateEnum
CREATE TYPE "risk_level" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "verification_type" AS ENUM ('LIVENESS_FACE_MATCH', 'ID_DOCUMENT');

-- CreateEnum
CREATE TYPE "verification_status" AS ENUM ('PENDING', 'PROCESSING', 'MANUAL_REVIEW', 'APPROVED', 'REJECTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "verification_failure_reason" AS ENUM ('LIVENESS_FAILED', 'FACE_MISMATCH', 'DUPLICATE_FACE', 'POOR_QUALITY', 'CHALLENGE_NOT_PERFORMED', 'TIMEOUT', 'MANUAL_REJECT');

-- CreateEnum
CREATE TYPE "product_type" AS ENUM ('CREDIT_PACK', 'SUBSCRIPTION', 'BOOST', 'SUPERLIKE_PACK', 'MESSAGE_BEFORE_MATCH', 'REWIND_PACK', 'EVENT_SLOT');

-- CreateEnum
CREATE TYPE "payment_provider_kind" AS ENUM ('MOBILE_MONEY', 'IAP_GOOGLE', 'IAP_APPLE', 'STRIPE', 'MANUAL');

-- CreateEnum
CREATE TYPE "mobile_money_operator" AS ENUM ('MTN_MOMO', 'ORANGE_MONEY');

-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('CREATED', 'PENDING', 'PROCESSING', 'SUCCEEDED', 'FAILED', 'CANCELLED', 'EXPIRED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "ledger_reason" AS ENUM ('PURCHASE', 'SPEND', 'REFUND', 'REVERSAL', 'BONUS_SIGNUP', 'BONUS_REFERRAL', 'BONUS_PROMO', 'ADMIN_ADJUST', 'EXPIRY');

-- CreateEnum
CREATE TYPE "subscription_tier" AS ENUM ('FREE', 'PLUS', 'GOLD');

-- CreateEnum
CREATE TYPE "subscription_status" AS ENUM ('ACTIVE', 'GRACE', 'EXPIRED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "entitlement_key" AS ENUM ('UNLIMITED_REWIND', 'NO_ADS', 'INCOGNITO', 'TRAVEL_MODE', 'ADVANCED_FILTERS', 'PRIORITY_DECK', 'MESSAGE_BEFORE_MATCH', 'EVENT_CREATION');

-- CreateEnum
CREATE TYPE "entitlement_source" AS ENUM ('SUBSCRIPTION', 'PURCHASE', 'FREE_QUOTA', 'ADMIN_GRANT');

-- CreateEnum
CREATE TYPE "boost_tier" AS ENUM ('SPOTLIGHT', 'SUPER_BOOST', 'PRIME_TIME', 'CITY_BOOST');

-- CreateEnum
CREATE TYPE "boost_status" AS ENUM ('QUEUED', 'ACTIVE', 'COMPLETED', 'CANCELLED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "event_category" AS ENUM ('OUTING', 'SPORT', 'CULTURE', 'FOOD', 'MUSIC', 'GAMES', 'VOLUNTEER', 'OTHER');

-- CreateEnum
CREATE TYPE "event_status" AS ENUM ('DRAFT', 'PENDING_REVIEW', 'PUBLISHED', 'FULL', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "event_request_status" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'CANCELLED', 'WAITLISTED');

-- CreateEnum
CREATE TYPE "notification_type" AS ENUM ('NEW_MATCH', 'NEW_MESSAGE', 'NEW_LIKE', 'BOOST_STARTED', 'BOOST_ENDED', 'VERIFICATION_RESULT', 'EVENT_REQUEST', 'EVENT_ACCEPTED', 'EVENT_REMINDER', 'PAYMENT_RESULT', 'MODERATION', 'SYSTEM', 'MARKETING');

-- CreateEnum
CREATE TYPE "notification_channel" AS ENUM ('PUSH', 'IN_APP', 'EMAIL', 'SMS');

-- CreateEnum
CREATE TYPE "actor_type" AS ENUM ('USER', 'ADMIN', 'SYSTEM');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "phoneHash" VARCHAR(64) NOT NULL,
    "phoneVerifiedAt" TIMESTAMP(3),
    "email" VARCHAR(255),
    "emailVerifiedAt" TIMESTAMP(3),
    "passwordHash" VARCHAR(255),
    "authProvider" "auth_provider" NOT NULL DEFAULT 'PHONE',
    "providerUid" VARCHAR(255),
    "status" "user_status" NOT NULL DEFAULT 'PENDING_PHONE',
    "role" "user_role" NOT NULL DEFAULT 'USER',
    "locale" "app_locale" NOT NULL DEFAULT 'FR',
    "referralCode" VARCHAR(6) NOT NULL,
    "referredById" UUID,
    "suspendedUntil" TIMESTAMP(3),
    "bannedAt" TIMESTAMP(3),
    "banReason" VARCHAR(500),
    "shadowBannedAt" TIMESTAMP(3),
    "lastActiveAt" TIMESTAMP(3),
    "deletionRequestedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "refreshTokenHash" VARCHAR(64) NOT NULL,
    "deviceId" UUID,
    "ipAddress" INET,
    "userAgent" VARCHAR(500),
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "revokedReason" VARCHAR(100),
    "lastUsedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "platform" "device_platform" NOT NULL,
    "fingerprint" VARCHAR(64) NOT NULL,
    "model" VARCHAR(100),
    "osVersion" VARCHAR(50),
    "appVersion" VARCHAR(20),
    "integrityVerdict" "integrity_verdict" NOT NULL DEFAULT 'UNEVALUATED',
    "integrityCheckedAt" TIMESTAMP(3),
    "integrityPayload" JSONB,
    "isTrusted" BOOLEAN NOT NULL DEFAULT false,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otp_codes" (
    "id" UUID NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "purpose" "otp_purpose" NOT NULL,
    "codeHash" VARCHAR(64) NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "maxAttempts" INTEGER NOT NULL DEFAULT 5,
    "consumedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" INET,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "otp_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referrals" (
    "id" UUID NOT NULL,
    "referrerId" UUID NOT NULL,
    "refereeId" UUID NOT NULL,
    "code" VARCHAR(6) NOT NULL,
    "status" "referral_status" NOT NULL DEFAULT 'PENDING',
    "rewardCredits" INTEGER NOT NULL DEFAULT 0,
    "qualifiedAt" TIMESTAMP(3),
    "rewardedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "revokedReason" VARCHAR(200),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currencies" (
    "code" CHAR(3) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "symbol" VARCHAR(8) NOT NULL,
    "minorUnitScale" INTEGER NOT NULL DEFAULT 1,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "currencies_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "sku" VARCHAR(60) NOT NULL,
    "type" "product_type" NOT NULL,
    "titleFr" VARCHAR(100) NOT NULL,
    "titleEn" VARCHAR(100) NOT NULL,
    "descriptionFr" VARCHAR(300),
    "descriptionEn" VARCHAR(300),
    "priceAmount" INTEGER,
    "currencyCode" CHAR(3),
    "creditCost" INTEGER,
    "creditGrant" INTEGER,
    "quantity" INTEGER,
    "durationDays" INTEGER,
    "boostTier" "boost_tier",
    "tier" "subscription_tier",
    "googleProductId" VARCHAR(100),
    "appleProductId" VARCHAR(100),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_intents" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "provider" "payment_provider_kind" NOT NULL,
    "operator" "mobile_money_operator",
    "amount" INTEGER NOT NULL,
    "currencyCode" CHAR(3) NOT NULL,
    "status" "payment_status" NOT NULL DEFAULT 'CREATED',
    "providerRef" VARCHAR(120),
    "providerPayload" JSONB,
    "payerPhone" VARCHAR(20),
    "idempotencyKey" VARCHAR(64) NOT NULL,
    "failureCode" VARCHAR(60),
    "failureMessage" VARCHAR(300),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "reconciledAt" TIMESTAMP(3),

    CONSTRAINT "payment_intents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchases" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "paymentIntentId" UUID,
    "provider" "payment_provider_kind" NOT NULL,
    "amount" INTEGER NOT NULL,
    "currencyCode" CHAR(3) NOT NULL,
    "creditsGranted" INTEGER NOT NULL DEFAULT 0,
    "storeReceipt" TEXT,
    "storeTransactionId" VARCHAR(120),
    "refundedAt" TIMESTAMP(3),
    "refundReason" VARCHAR(200),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_ledger" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "delta" INTEGER NOT NULL,
    "balanceAfter" INTEGER NOT NULL,
    "reason" "ledger_reason" NOT NULL,
    "refType" VARCHAR(40),
    "refId" UUID,
    "purchaseId" UUID,
    "idempotencyKey" VARCHAR(64),
    "note" VARCHAR(200),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credit_ledger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tier" "subscription_tier" NOT NULL,
    "status" "subscription_status" NOT NULL DEFAULT 'ACTIVE',
    "purchaseId" UUID,
    "provider" "payment_provider_kind" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "autoRenew" BOOLEAN NOT NULL DEFAULT false,
    "graceUntil" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entitlements" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "key" "entitlement_key" NOT NULL,
    "source" "entitlement_source" NOT NULL,
    "remaining" INTEGER,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "refType" VARCHAR(40),
    "refId" UUID,

    CONSTRAINT "entitlements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boosts" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tier" "boost_tier" NOT NULL,
    "status" "boost_status" NOT NULL DEFAULT 'QUEUED',
    "cityId" UUID,
    "purchaseId" UUID,
    "multiplier" DOUBLE PRECISION NOT NULL DEFAULT 3,
    "queuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startAt" TIMESTAMP(3),
    "endAt" TIMESTAMP(3),
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "profileViews" INTEGER NOT NULL DEFAULT 0,
    "likesGained" INTEGER NOT NULL DEFAULT 0,
    "matchesGained" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversations" (
    "id" UUID NOT NULL,
    "type" "conversation_type" NOT NULL,
    "status" "conversation_status" NOT NULL DEFAULT 'ACTIVE',
    "matchId" UUID,
    "eventId" UUID,
    "lastMessageAt" TIMESTAMP(3),
    "lastMessagePreview" VARCHAR(120),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "closedAt" TIMESTAMP(3),

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation_participants" (
    "conversationId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastReadAt" TIMESTAMP(3),
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "mutedUntil" TIMESTAMP(3),
    "leftAt" TIMESTAMP(3),

    CONSTRAINT "conversation_participants_pkey" PRIMARY KEY ("conversationId","userId")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" UUID NOT NULL,
    "conversationId" UUID NOT NULL,
    "senderId" UUID NOT NULL,
    "type" "message_type" NOT NULL DEFAULT 'TEXT',
    "status" "message_status" NOT NULL DEFAULT 'SENT',
    "body" VARCHAR(2000),
    "mediaKey" VARCHAR(255),
    "mediaMimeType" VARCHAR(100),
    "mediaBytes" INTEGER,
    "mediaDuration" INTEGER,
    "clientKey" VARCHAR(64) NOT NULL,
    "replyToId" UUID,
    "isPaidIntro" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_receipts" (
    "messageId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "deliveredAt" TIMESTAMP(3),
    "readAt" TIMESTAMP(3),

    CONSTRAINT "message_receipts_pkey" PRIMARY KEY ("messageId","userId")
);

-- CreateTable
CREATE TABLE "swipes" (
    "id" UUID NOT NULL,
    "actorId" UUID NOT NULL,
    "targetId" UUID NOT NULL,
    "action" "swipe_action" NOT NULL,
    "source" "swipe_source" NOT NULL DEFAULT 'DECK',
    "isRewound" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "swipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" UUID NOT NULL,
    "userAId" UUID NOT NULL,
    "userBId" UUID NOT NULL,
    "status" "match_status" NOT NULL DEFAULT 'ACTIVE',
    "fromSuperlike" BOOLEAN NOT NULL DEFAULT false,
    "matchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastInteractionAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "unmatchedAt" TIMESTAMP(3),
    "unmatchedById" UUID,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewinds" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "swipeId" UUID NOT NULL,
    "wasFree" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rewinds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" UUID NOT NULL,
    "organizerId" UUID NOT NULL,
    "title" VARCHAR(120) NOT NULL,
    "description" VARCHAR(1500) NOT NULL,
    "category" "event_category" NOT NULL,
    "cityId" UUID,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "locationLabel" VARCHAR(200) NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3),
    "capacity" INTEGER NOT NULL,
    "seatsWomen" INTEGER,
    "seatsMen" INTEGER,
    "costAmount" INTEGER,
    "currencyCode" CHAR(3),
    "status" "event_status" NOT NULL DEFAULT 'DRAFT',
    "coverKey" VARCHAR(255),
    "isSponsored" BOOLEAN NOT NULL DEFAULT false,
    "sponsorName" VARCHAR(100),
    "isPromoted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_requests" (
    "id" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "status" "event_request_status" NOT NULL DEFAULT 'PENDING',
    "message" VARCHAR(300),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" TIMESTAMP(3),

    CONSTRAINT "event_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_check_ins" (
    "id" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "distanceM" INTEGER,
    "checkedInAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_check_ins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "region" VARCHAR(100) NOT NULL,
    "country" CHAR(2) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "radiusKm" INTEGER NOT NULL DEFAULT 25,
    "activeUserCount" INTEGER NOT NULL DEFAULT 0,
    "boostSlots" INTEGER NOT NULL DEFAULT 3,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "userId" UUID NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "birthdate" DATE NOT NULL,
    "gender" "gender" NOT NULL,
    "genderLabel" VARCHAR(40),
    "matchingBucket" "matching_bucket" NOT NULL,
    "seeking" "seeking_target"[],
    "orientationEnc" TEXT,
    "intention" "intention" NOT NULL,
    "bio" VARCHAR(500),
    "heightCm" INTEGER,
    "profession" VARCHAR(100),
    "hasChildren" BOOLEAN,
    "childrenCount" INTEGER,
    "wantsChildren" BOOLEAN,
    "religion" "religion",
    "education" "education_level",
    "smoking" "frequency",
    "drinking" "frequency",
    "languages" TEXT[],
    "homeLatitude" DOUBLE PRECISION,
    "homeLongitude" DOUBLE PRECISION,
    "discoveryLatitude" DOUBLE PRECISION,
    "discoveryLongitude" DOUBLE PRECISION,
    "discoveryLocation" geography(Point, 4326),
    "cityId" UUID,
    "locationLabel" VARCHAR(150),
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "completionScore" INTEGER NOT NULL DEFAULT 0,
    "incognito" BOOLEAN NOT NULL DEFAULT false,
    "hideAge" BOOLEAN NOT NULL DEFAULT false,
    "hideDistance" BOOLEAN NOT NULL DEFAULT false,
    "lastDeckRefreshAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" UUID NOT NULL,
    "profileId" UUID NOT NULL,
    "storageKey" VARCHAR(255) NOT NULL,
    "position" INTEGER NOT NULL,
    "status" "photo_status" NOT NULL DEFAULT 'PENDING',
    "rejectionReason" "photo_rejection_reason",
    "phash" VARCHAR(16),
    "width" INTEGER,
    "height" INTEGER,
    "bytes" INTEGER,
    "moderationScores" JSONB,
    "moderatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interests" (
    "id" UUID NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "labelFr" VARCHAR(60) NOT NULL,
    "labelEn" VARCHAR(60) NOT NULL,
    "emoji" VARCHAR(8),
    "category" VARCHAR(40),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "interests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_interests" (
    "profileId" UUID NOT NULL,
    "interestId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_interests_pkey" PRIMARY KEY ("profileId","interestId")
);

-- CreateTable
CREATE TABLE "prompts" (
    "id" UUID NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "textFr" VARCHAR(150) NOT NULL,
    "textEn" VARCHAR(150) NOT NULL,
    "category" VARCHAR(40),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "prompts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_prompts" (
    "id" UUID NOT NULL,
    "profileId" UUID NOT NULL,
    "promptId" UUID NOT NULL,
    "answer" VARCHAR(300) NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_prompts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preferences" (
    "userId" UUID NOT NULL,
    "minAge" INTEGER NOT NULL DEFAULT 18,
    "maxAge" INTEGER NOT NULL DEFAULT 60,
    "maxDistanceKm" INTEGER NOT NULL DEFAULT 50,
    "intentionFilter" "intention"[],
    "religionFilter" "religion"[],
    "minHeightCm" INTEGER,
    "maxHeightCm" INTEGER,
    "hasChildren" BOOLEAN,
    "smokingFilter" "frequency"[],
    "drinkingFilter" "frequency"[],
    "languagesFilter" TEXT[],
    "verifiedOnly" BOOLEAN NOT NULL DEFAULT false,
    "allowRadiusExpansion" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "preferences_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" UUID NOT NULL,
    "reporterId" UUID NOT NULL,
    "reportedUserId" UUID NOT NULL,
    "reason" "report_reason" NOT NULL,
    "details" VARCHAR(1000),
    "messageId" UUID,
    "evidenceKeys" TEXT[],
    "status" "report_status" NOT NULL DEFAULT 'OPEN',
    "resolvedById" UUID,
    "decision" "moderation_decision",
    "resolutionNote" VARCHAR(500),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blocks" (
    "blockerId" UUID NOT NULL,
    "blockedId" UUID NOT NULL,
    "reason" VARCHAR(200),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("blockerId","blockedId")
);

-- CreateTable
CREATE TABLE "contact_blocks" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "phoneHash" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moderation_tasks" (
    "id" UUID NOT NULL,
    "type" "moderation_task_type" NOT NULL,
    "status" "moderation_task_status" NOT NULL DEFAULT 'QUEUED',
    "priority" INTEGER NOT NULL DEFAULT 0,
    "subjectUserId" UUID,
    "photoId" UUID,
    "reportId" UUID,
    "verificationId" UUID,
    "eventId" UUID,
    "assignedToId" UUID,
    "decision" "moderation_decision",
    "notes" VARCHAR(1000),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "claimedAt" TIMESTAMP(3),
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "moderation_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risk_scores" (
    "userId" UUID NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "level" "risk_level" NOT NULL DEFAULT 'LOW',
    "signals" JSONB,
    "shadowBannedAt" TIMESTAMP(3),
    "reviewedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "risk_scores_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" "notification_type" NOT NULL,
    "channel" "notification_channel" NOT NULL DEFAULT 'PUSH',
    "titleKey" VARCHAR(100) NOT NULL,
    "bodyKey" VARCHAR(100) NOT NULL,
    "data" JSONB,
    "sentAt" TIMESTAMP(3),
    "readAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "error" VARCHAR(300),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_preferences" (
    "userId" UUID NOT NULL,
    "newMatch" BOOLEAN NOT NULL DEFAULT true,
    "newMessage" BOOLEAN NOT NULL DEFAULT true,
    "newLike" BOOLEAN NOT NULL DEFAULT true,
    "events" BOOLEAN NOT NULL DEFAULT true,
    "marketing" BOOLEAN NOT NULL DEFAULT false,
    "quietHoursStart" INTEGER,
    "quietHoursEnd" INTEGER,
    "timezone" VARCHAR(50) NOT NULL DEFAULT 'Africa/Douala',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_preferences_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "push_tokens" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "deviceId" UUID,
    "token" VARCHAR(255) NOT NULL,
    "platform" "device_platform" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastUsedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "push_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "translation_keys" (
    "id" UUID NOT NULL,
    "key" VARCHAR(150) NOT NULL,
    "namespace" VARCHAR(50) NOT NULL,
    "fr" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "translation_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL,
    "actorId" UUID,
    "actorType" "actor_type" NOT NULL DEFAULT 'SYSTEM',
    "action" VARCHAR(80) NOT NULL,
    "entityType" VARCHAR(60) NOT NULL,
    "entityId" UUID,
    "before" JSONB,
    "after" JSONB,
    "ipAddress" INET,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_sessions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "cityId" UUID,
    "locationLabel" VARCHAR(150) NOT NULL,
    "wasFree" BOOLEAN NOT NULL DEFAULT true,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "travel_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verifications" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" "verification_type" NOT NULL DEFAULT 'LIVENESS_FACE_MATCH',
    "status" "verification_status" NOT NULL DEFAULT 'PENDING',
    "poseChallenge" VARCHAR(50) NOT NULL,
    "livenessScore" DOUBLE PRECISION,
    "matchScore" DOUBLE PRECISION,
    "failureReason" "verification_failure_reason",
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "captureKey" VARCHAR(255),
    "captureWiped" BOOLEAN NOT NULL DEFAULT false,
    "reviewedById" UUID,
    "reviewNote" VARCHAR(500),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" TIMESTAMP(3),
    "processedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "face_embeddings" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "verificationId" UUID NOT NULL,
    "model" VARCHAR(50) NOT NULL,
    "dimension" INTEGER NOT NULL DEFAULT 512,
    "embedding" vector(512),
    "duplicateOfUserId" UUID,
    "duplicateDistance" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "face_embeddings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneHash_key" ON "users"("phoneHash");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_referralCode_key" ON "users"("referralCode");

-- CreateIndex
CREATE INDEX "users_status_lastActiveAt_idx" ON "users"("status", "lastActiveAt" DESC);

-- CreateIndex
CREATE INDEX "users_referredById_idx" ON "users"("referredById");

-- CreateIndex
CREATE INDEX "users_deletionRequestedAt_idx" ON "users"("deletionRequestedAt");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_refreshTokenHash_key" ON "sessions"("refreshTokenHash");

-- CreateIndex
CREATE INDEX "sessions_userId_revokedAt_idx" ON "sessions"("userId", "revokedAt");

-- CreateIndex
CREATE INDEX "sessions_expiresAt_idx" ON "sessions"("expiresAt");

-- CreateIndex
CREATE INDEX "devices_fingerprint_idx" ON "devices"("fingerprint");

-- CreateIndex
CREATE UNIQUE INDEX "devices_userId_fingerprint_key" ON "devices"("userId", "fingerprint");

-- CreateIndex
CREATE INDEX "otp_codes_phone_purpose_createdAt_idx" ON "otp_codes"("phone", "purpose", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "otp_codes_expiresAt_idx" ON "otp_codes"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_refereeId_key" ON "referrals"("refereeId");

-- CreateIndex
CREATE INDEX "referrals_referrerId_status_idx" ON "referrals"("referrerId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");

-- CreateIndex
CREATE INDEX "products_type_isActive_sortOrder_idx" ON "products"("type", "isActive", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "payment_intents_idempotencyKey_key" ON "payment_intents"("idempotencyKey");

-- CreateIndex
CREATE INDEX "payment_intents_userId_createdAt_idx" ON "payment_intents"("userId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "payment_intents_status_createdAt_idx" ON "payment_intents"("status", "createdAt");

-- CreateIndex
CREATE INDEX "payment_intents_providerRef_idx" ON "payment_intents"("providerRef");

-- CreateIndex
CREATE UNIQUE INDEX "purchases_paymentIntentId_key" ON "purchases"("paymentIntentId");

-- CreateIndex
CREATE UNIQUE INDEX "purchases_storeTransactionId_key" ON "purchases"("storeTransactionId");

-- CreateIndex
CREATE INDEX "purchases_userId_createdAt_idx" ON "purchases"("userId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "credit_ledger_idempotencyKey_key" ON "credit_ledger"("idempotencyKey");

-- CreateIndex
CREATE INDEX "credit_ledger_userId_createdAt_idx" ON "credit_ledger"("userId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "credit_ledger_refType_refId_idx" ON "credit_ledger"("refType", "refId");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_purchaseId_key" ON "subscriptions"("purchaseId");

-- CreateIndex
CREATE INDEX "subscriptions_userId_status_idx" ON "subscriptions"("userId", "status");

-- CreateIndex
CREATE INDEX "subscriptions_status_expiresAt_idx" ON "subscriptions"("status", "expiresAt");

-- CreateIndex
CREATE INDEX "entitlements_userId_key_revokedAt_idx" ON "entitlements"("userId", "key", "revokedAt");

-- CreateIndex
CREATE INDEX "entitlements_expiresAt_idx" ON "entitlements"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "boosts_purchaseId_key" ON "boosts"("purchaseId");

-- CreateIndex
CREATE INDEX "boosts_cityId_status_queuedAt_idx" ON "boosts"("cityId", "status", "queuedAt");

-- CreateIndex
CREATE INDEX "boosts_status_endAt_idx" ON "boosts"("status", "endAt");

-- CreateIndex
CREATE INDEX "boosts_userId_createdAt_idx" ON "boosts"("userId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "conversations_matchId_key" ON "conversations"("matchId");

-- CreateIndex
CREATE UNIQUE INDEX "conversations_eventId_key" ON "conversations"("eventId");

-- CreateIndex
CREATE INDEX "conversations_status_lastMessageAt_idx" ON "conversations"("status", "lastMessageAt" DESC);

-- CreateIndex
CREATE INDEX "conversation_participants_userId_leftAt_idx" ON "conversation_participants"("userId", "leftAt");

-- CreateIndex
CREATE INDEX "messages_conversationId_createdAt_idx" ON "messages"("conversationId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "messages_senderId_createdAt_idx" ON "messages"("senderId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "messages_conversationId_senderId_clientKey_key" ON "messages"("conversationId", "senderId", "clientKey");

-- CreateIndex
CREATE INDEX "message_receipts_userId_readAt_idx" ON "message_receipts"("userId", "readAt");

-- CreateIndex
CREATE INDEX "swipes_targetId_action_createdAt_idx" ON "swipes"("targetId", "action", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "swipes_actorId_createdAt_idx" ON "swipes"("actorId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "swipes_actorId_targetId_key" ON "swipes"("actorId", "targetId");

-- CreateIndex
CREATE INDEX "matches_userAId_status_matchedAt_idx" ON "matches"("userAId", "status", "matchedAt" DESC);

-- CreateIndex
CREATE INDEX "matches_userBId_status_matchedAt_idx" ON "matches"("userBId", "status", "matchedAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "matches_userAId_userBId_key" ON "matches"("userAId", "userBId");

-- CreateIndex
CREATE UNIQUE INDEX "rewinds_swipeId_key" ON "rewinds"("swipeId");

-- CreateIndex
CREATE INDEX "rewinds_userId_createdAt_idx" ON "rewinds"("userId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "events_status_startsAt_idx" ON "events"("status", "startsAt");

-- CreateIndex
CREATE INDEX "events_cityId_status_startsAt_idx" ON "events"("cityId", "status", "startsAt");

-- CreateIndex
CREATE INDEX "events_organizerId_createdAt_idx" ON "events"("organizerId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "event_requests_userId_status_idx" ON "event_requests"("userId", "status");

-- CreateIndex
CREATE INDEX "event_requests_eventId_status_idx" ON "event_requests"("eventId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "event_requests_eventId_userId_key" ON "event_requests"("eventId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "event_check_ins_eventId_userId_key" ON "event_check_ins"("eventId", "userId");

-- CreateIndex
CREATE INDEX "cities_country_isActive_idx" ON "cities"("country", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "cities_country_region_name_key" ON "cities"("country", "region", "name");

-- CreateIndex
CREATE INDEX "profiles_cityId_isVerified_idx" ON "profiles"("cityId", "isVerified");

-- CreateIndex
CREATE INDEX "profiles_matchingBucket_birthdate_idx" ON "profiles"("matchingBucket", "birthdate");

-- CreateIndex
CREATE INDEX "profiles_completionScore_idx" ON "profiles"("completionScore" DESC);

-- CreateIndex
CREATE INDEX "photos_phash_idx" ON "photos"("phash");

-- CreateIndex
CREATE INDEX "photos_status_createdAt_idx" ON "photos"("status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "photos_profileId_position_key" ON "photos"("profileId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "interests_slug_key" ON "interests"("slug");

-- CreateIndex
CREATE INDEX "interests_isActive_sortOrder_idx" ON "interests"("isActive", "sortOrder");

-- CreateIndex
CREATE INDEX "profile_interests_interestId_idx" ON "profile_interests"("interestId");

-- CreateIndex
CREATE UNIQUE INDEX "prompts_slug_key" ON "prompts"("slug");

-- CreateIndex
CREATE INDEX "prompts_isActive_sortOrder_idx" ON "prompts"("isActive", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "profile_prompts_profileId_promptId_key" ON "profile_prompts"("profileId", "promptId");

-- CreateIndex
CREATE UNIQUE INDEX "profile_prompts_profileId_position_key" ON "profile_prompts"("profileId", "position");

-- CreateIndex
CREATE INDEX "reports_reportedUserId_status_idx" ON "reports"("reportedUserId", "status");

-- CreateIndex
CREATE INDEX "reports_status_createdAt_idx" ON "reports"("status", "createdAt");

-- CreateIndex
CREATE INDEX "blocks_blockedId_idx" ON "blocks"("blockedId");

-- CreateIndex
CREATE INDEX "contact_blocks_phoneHash_idx" ON "contact_blocks"("phoneHash");

-- CreateIndex
CREATE UNIQUE INDEX "contact_blocks_userId_phoneHash_key" ON "contact_blocks"("userId", "phoneHash");

-- CreateIndex
CREATE INDEX "moderation_tasks_status_priority_createdAt_idx" ON "moderation_tasks"("status", "priority" DESC, "createdAt");

-- CreateIndex
CREATE INDEX "moderation_tasks_type_status_idx" ON "moderation_tasks"("type", "status");

-- CreateIndex
CREATE INDEX "moderation_tasks_subjectUserId_idx" ON "moderation_tasks"("subjectUserId");

-- CreateIndex
CREATE INDEX "risk_scores_level_score_idx" ON "risk_scores"("level", "score" DESC);

-- CreateIndex
CREATE INDEX "notifications_userId_readAt_createdAt_idx" ON "notifications"("userId", "readAt", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "notifications_type_createdAt_idx" ON "notifications"("type", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "push_tokens_token_key" ON "push_tokens"("token");

-- CreateIndex
CREATE INDEX "push_tokens_userId_isActive_idx" ON "push_tokens"("userId", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "translation_keys_key_key" ON "translation_keys"("key");

-- CreateIndex
CREATE INDEX "translation_keys_namespace_idx" ON "translation_keys"("namespace");

-- CreateIndex
CREATE INDEX "audit_logs_entityType_entityId_createdAt_idx" ON "audit_logs"("entityType", "entityId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "audit_logs_actorId_createdAt_idx" ON "audit_logs"("actorId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "travel_sessions_userId_startedAt_idx" ON "travel_sessions"("userId", "startedAt" DESC);

-- CreateIndex
CREATE INDEX "travel_sessions_userId_endedAt_idx" ON "travel_sessions"("userId", "endedAt");

-- CreateIndex
CREATE INDEX "verifications_userId_status_idx" ON "verifications"("userId", "status");

-- CreateIndex
CREATE INDEX "verifications_status_createdAt_idx" ON "verifications"("status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "face_embeddings_verificationId_key" ON "face_embeddings"("verificationId");

-- CreateIndex
CREATE INDEX "face_embeddings_userId_idx" ON "face_embeddings"("userId");

-- CreateIndex
CREATE INDEX "face_embeddings_duplicateOfUserId_idx" ON "face_embeddings"("duplicateOfUserId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_referredById_fkey" FOREIGN KEY ("referredById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_refereeId_fkey" FOREIGN KEY ("refereeId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "currencies"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_intents" ADD CONSTRAINT "payment_intents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_intents" ADD CONSTRAINT "payment_intents_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_intents" ADD CONSTRAINT "payment_intents_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "currencies"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "currencies"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_paymentIntentId_fkey" FOREIGN KEY ("paymentIntentId") REFERENCES "payment_intents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_ledger" ADD CONSTRAINT "credit_ledger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_ledger" ADD CONSTRAINT "credit_ledger_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entitlements" ADD CONSTRAINT "entitlements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boosts" ADD CONSTRAINT "boosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boosts" ADD CONSTRAINT "boosts_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boosts" ADD CONSTRAINT "boosts_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversations" ADD CONSTRAINT "conversations_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversations" ADD CONSTRAINT "conversations_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation_participants" ADD CONSTRAINT "conversation_participants_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation_participants" ADD CONSTRAINT "conversation_participants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_receipts" ADD CONSTRAINT "message_receipts_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_receipts" ADD CONSTRAINT "message_receipts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "swipes" ADD CONSTRAINT "swipes_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "swipes" ADD CONSTRAINT "swipes_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_userAId_fkey" FOREIGN KEY ("userAId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_userBId_fkey" FOREIGN KEY ("userBId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_unmatchedById_fkey" FOREIGN KEY ("unmatchedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rewinds" ADD CONSTRAINT "rewinds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rewinds" ADD CONSTRAINT "rewinds_swipeId_fkey" FOREIGN KEY ("swipeId") REFERENCES "swipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "currencies"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_requests" ADD CONSTRAINT "event_requests_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_requests" ADD CONSTRAINT "event_requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_interests" ADD CONSTRAINT "profile_interests_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_interests" ADD CONSTRAINT "profile_interests_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "interests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_prompts" ADD CONSTRAINT "profile_prompts_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_prompts" ADD CONSTRAINT "profile_prompts_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "prompts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "preferences" ADD CONSTRAINT "preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_reportedUserId_fkey" FOREIGN KEY ("reportedUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_blockerId_fkey" FOREIGN KEY ("blockerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_blockedId_fkey" FOREIGN KEY ("blockedId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_blocks" ADD CONSTRAINT "contact_blocks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_tasks" ADD CONSTRAINT "moderation_tasks_subjectUserId_fkey" FOREIGN KEY ("subjectUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_tasks" ADD CONSTRAINT "moderation_tasks_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_tasks" ADD CONSTRAINT "moderation_tasks_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "photos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_tasks" ADD CONSTRAINT "moderation_tasks_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "reports"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_tasks" ADD CONSTRAINT "moderation_tasks_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "verifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_tasks" ADD CONSTRAINT "moderation_tasks_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_scores" ADD CONSTRAINT "risk_scores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preferences" ADD CONSTRAINT "notification_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "push_tokens" ADD CONSTRAINT "push_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "push_tokens" ADD CONSTRAINT "push_tokens_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_sessions" ADD CONSTRAINT "travel_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_sessions" ADD CONSTRAINT "travel_sessions_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verifications" ADD CONSTRAINT "verifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verifications" ADD CONSTRAINT "verifications_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "face_embeddings" ADD CONSTRAINT "face_embeddings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "face_embeddings" ADD CONSTRAINT "face_embeddings_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "verifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;
