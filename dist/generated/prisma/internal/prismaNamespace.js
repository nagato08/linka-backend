"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePromptScalarFieldEnum = exports.PromptScalarFieldEnum = exports.ProfileInterestScalarFieldEnum = exports.InterestScalarFieldEnum = exports.PhotoScalarFieldEnum = exports.ProfileScalarFieldEnum = exports.CityScalarFieldEnum = exports.EventCheckInScalarFieldEnum = exports.EventRequestScalarFieldEnum = exports.EventScalarFieldEnum = exports.SwipeArchiveScalarFieldEnum = exports.RewindScalarFieldEnum = exports.MatchScalarFieldEnum = exports.SwipeScalarFieldEnum = exports.MessageReceiptScalarFieldEnum = exports.MessageScalarFieldEnum = exports.ConversationParticipantScalarFieldEnum = exports.ConversationScalarFieldEnum = exports.BoostScalarFieldEnum = exports.EntitlementScalarFieldEnum = exports.SubscriptionScalarFieldEnum = exports.CreditLedgerScalarFieldEnum = exports.PurchaseScalarFieldEnum = exports.PaymentIntentScalarFieldEnum = exports.ProductScalarFieldEnum = exports.CurrencyScalarFieldEnum = exports.ReferralScalarFieldEnum = exports.OtpCodeScalarFieldEnum = exports.DeviceScalarFieldEnum = exports.SessionScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.FaceEmbeddingScalarFieldEnum = exports.VerificationScalarFieldEnum = exports.TravelSessionScalarFieldEnum = exports.AuditLogScalarFieldEnum = exports.TranslationKeyScalarFieldEnum = exports.PushTokenScalarFieldEnum = exports.NotificationPreferenceScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.RiskScoreScalarFieldEnum = exports.ModerationTaskScalarFieldEnum = exports.ContactBlockScalarFieldEnum = exports.BlockScalarFieldEnum = exports.ReportScalarFieldEnum = exports.PreferenceScalarFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.9.1",
    engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Session: 'Session',
    Device: 'Device',
    OtpCode: 'OtpCode',
    Referral: 'Referral',
    Currency: 'Currency',
    Product: 'Product',
    PaymentIntent: 'PaymentIntent',
    Purchase: 'Purchase',
    CreditLedger: 'CreditLedger',
    Subscription: 'Subscription',
    Entitlement: 'Entitlement',
    Boost: 'Boost',
    Conversation: 'Conversation',
    ConversationParticipant: 'ConversationParticipant',
    Message: 'Message',
    MessageReceipt: 'MessageReceipt',
    Swipe: 'Swipe',
    Match: 'Match',
    Rewind: 'Rewind',
    SwipeArchive: 'SwipeArchive',
    Event: 'Event',
    EventRequest: 'EventRequest',
    EventCheckIn: 'EventCheckIn',
    City: 'City',
    Profile: 'Profile',
    Photo: 'Photo',
    Interest: 'Interest',
    ProfileInterest: 'ProfileInterest',
    Prompt: 'Prompt',
    ProfilePrompt: 'ProfilePrompt',
    Preference: 'Preference',
    Report: 'Report',
    Block: 'Block',
    ContactBlock: 'ContactBlock',
    ModerationTask: 'ModerationTask',
    RiskScore: 'RiskScore',
    Notification: 'Notification',
    NotificationPreference: 'NotificationPreference',
    PushToken: 'PushToken',
    TranslationKey: 'TranslationKey',
    AuditLog: 'AuditLog',
    TravelSession: 'TravelSession',
    Verification: 'Verification',
    FaceEmbedding: 'FaceEmbedding'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    emailVerifiedAt: 'emailVerifiedAt',
    phone: 'phone',
    phoneHash: 'phoneHash',
    phoneVerifiedAt: 'phoneVerifiedAt',
    passwordHash: 'passwordHash',
    authProvider: 'authProvider',
    providerUid: 'providerUid',
    status: 'status',
    role: 'role',
    locale: 'locale',
    referralCode: 'referralCode',
    referredById: 'referredById',
    suspendedUntil: 'suspendedUntil',
    bannedAt: 'bannedAt',
    banReason: 'banReason',
    shadowBannedAt: 'shadowBannedAt',
    lastActiveAt: 'lastActiveAt',
    deletionRequestedAt: 'deletionRequestedAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    deviceId: 'deviceId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    revokedReason: 'revokedReason',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt'
};
exports.DeviceScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    platform: 'platform',
    fingerprint: 'fingerprint',
    model: 'model',
    osVersion: 'osVersion',
    appVersion: 'appVersion',
    integrityVerdict: 'integrityVerdict',
    integrityCheckedAt: 'integrityCheckedAt',
    integrityPayload: 'integrityPayload',
    isTrusted: 'isTrusted',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt'
};
exports.OtpCodeScalarFieldEnum = {
    id: 'id',
    identifier: 'identifier',
    channel: 'channel',
    purpose: 'purpose',
    codeHash: 'codeHash',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    consumedAt: 'consumedAt',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
exports.ReferralScalarFieldEnum = {
    id: 'id',
    referrerId: 'referrerId',
    refereeId: 'refereeId',
    code: 'code',
    status: 'status',
    rewardCredits: 'rewardCredits',
    qualifiedAt: 'qualifiedAt',
    rewardedAt: 'rewardedAt',
    revokedAt: 'revokedAt',
    revokedReason: 'revokedReason',
    createdAt: 'createdAt'
};
exports.CurrencyScalarFieldEnum = {
    code: 'code',
    name: 'name',
    symbol: 'symbol',
    minorUnitScale: 'minorUnitScale',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    sku: 'sku',
    type: 'type',
    titleFr: 'titleFr',
    titleEn: 'titleEn',
    descriptionFr: 'descriptionFr',
    descriptionEn: 'descriptionEn',
    priceAmount: 'priceAmount',
    currencyCode: 'currencyCode',
    creditCost: 'creditCost',
    creditGrant: 'creditGrant',
    quantity: 'quantity',
    durationDays: 'durationDays',
    durationMinutes: 'durationMinutes',
    boostTier: 'boostTier',
    tier: 'tier',
    googleProductId: 'googleProductId',
    appleProductId: 'appleProductId',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentIntentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    provider: 'provider',
    operator: 'operator',
    amount: 'amount',
    currencyCode: 'currencyCode',
    status: 'status',
    providerRef: 'providerRef',
    providerPayload: 'providerPayload',
    payerPhone: 'payerPhone',
    idempotencyKey: 'idempotencyKey',
    failureCode: 'failureCode',
    failureMessage: 'failureMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    completedAt: 'completedAt',
    reconciledAt: 'reconciledAt'
};
exports.PurchaseScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    paymentIntentId: 'paymentIntentId',
    provider: 'provider',
    amount: 'amount',
    currencyCode: 'currencyCode',
    creditsGranted: 'creditsGranted',
    storeReceipt: 'storeReceipt',
    storeTransactionId: 'storeTransactionId',
    refundedAt: 'refundedAt',
    refundReason: 'refundReason',
    createdAt: 'createdAt'
};
exports.CreditLedgerScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    delta: 'delta',
    balanceAfter: 'balanceAfter',
    reason: 'reason',
    refType: 'refType',
    refId: 'refId',
    purchaseId: 'purchaseId',
    idempotencyKey: 'idempotencyKey',
    note: 'note',
    createdAt: 'createdAt'
};
exports.SubscriptionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tier: 'tier',
    status: 'status',
    purchaseId: 'purchaseId',
    provider: 'provider',
    startedAt: 'startedAt',
    expiresAt: 'expiresAt',
    autoRenew: 'autoRenew',
    graceUntil: 'graceUntil',
    cancelledAt: 'cancelledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.EntitlementScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    key: 'key',
    source: 'source',
    remaining: 'remaining',
    grantedAt: 'grantedAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    refType: 'refType',
    refId: 'refId'
};
exports.BoostScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tier: 'tier',
    status: 'status',
    cityId: 'cityId',
    purchaseId: 'purchaseId',
    multiplier: 'multiplier',
    queuedAt: 'queuedAt',
    startAt: 'startAt',
    endAt: 'endAt',
    impressions: 'impressions',
    profileViews: 'profileViews',
    likesGained: 'likesGained',
    matchesGained: 'matchesGained',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ConversationScalarFieldEnum = {
    id: 'id',
    type: 'type',
    status: 'status',
    matchId: 'matchId',
    eventId: 'eventId',
    lastMessageAt: 'lastMessageAt',
    lastMessagePreview: 'lastMessagePreview',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    closedAt: 'closedAt'
};
exports.ConversationParticipantScalarFieldEnum = {
    conversationId: 'conversationId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    lastReadAt: 'lastReadAt',
    unreadCount: 'unreadCount',
    mutedUntil: 'mutedUntil',
    leftAt: 'leftAt'
};
exports.MessageScalarFieldEnum = {
    id: 'id',
    conversationId: 'conversationId',
    senderId: 'senderId',
    type: 'type',
    status: 'status',
    body: 'body',
    mediaKey: 'mediaKey',
    mediaMimeType: 'mediaMimeType',
    mediaBytes: 'mediaBytes',
    mediaDuration: 'mediaDuration',
    clientKey: 'clientKey',
    replyToId: 'replyToId',
    isPaidIntro: 'isPaidIntro',
    createdAt: 'createdAt',
    editedAt: 'editedAt',
    deletedAt: 'deletedAt'
};
exports.MessageReceiptScalarFieldEnum = {
    messageId: 'messageId',
    userId: 'userId',
    deliveredAt: 'deliveredAt',
    readAt: 'readAt'
};
exports.SwipeScalarFieldEnum = {
    id: 'id',
    actorId: 'actorId',
    targetId: 'targetId',
    action: 'action',
    source: 'source',
    isRewound: 'isRewound',
    createdAt: 'createdAt'
};
exports.MatchScalarFieldEnum = {
    id: 'id',
    userAId: 'userAId',
    userBId: 'userBId',
    status: 'status',
    fromSuperlike: 'fromSuperlike',
    matchedAt: 'matchedAt',
    lastInteractionAt: 'lastInteractionAt',
    expiresAt: 'expiresAt',
    unmatchedAt: 'unmatchedAt',
    unmatchedById: 'unmatchedById'
};
exports.RewindScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    swipeId: 'swipeId',
    wasFree: 'wasFree',
    createdAt: 'createdAt'
};
exports.SwipeArchiveScalarFieldEnum = {
    id: 'id',
    actorId: 'actorId',
    targetId: 'targetId',
    action: 'action',
    source: 'source',
    isRewound: 'isRewound',
    createdAt: 'createdAt',
    archivedAt: 'archivedAt'
};
exports.EventScalarFieldEnum = {
    id: 'id',
    organizerId: 'organizerId',
    title: 'title',
    description: 'description',
    category: 'category',
    cityId: 'cityId',
    latitude: 'latitude',
    longitude: 'longitude',
    locationLabel: 'locationLabel',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    capacity: 'capacity',
    seatsWomen: 'seatsWomen',
    seatsMen: 'seatsMen',
    costAmount: 'costAmount',
    currencyCode: 'currencyCode',
    status: 'status',
    coverKey: 'coverKey',
    isSponsored: 'isSponsored',
    sponsorName: 'sponsorName',
    isPromoted: 'isPromoted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt',
    cancelledAt: 'cancelledAt'
};
exports.EventRequestScalarFieldEnum = {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    respondedAt: 'respondedAt'
};
exports.EventCheckInScalarFieldEnum = {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    distanceM: 'distanceM',
    checkedInAt: 'checkedInAt'
};
exports.CityScalarFieldEnum = {
    id: 'id',
    name: 'name',
    region: 'region',
    country: 'country',
    latitude: 'latitude',
    longitude: 'longitude',
    radiusKm: 'radiusKm',
    activeUserCount: 'activeUserCount',
    boostSlots: 'boostSlots',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProfileScalarFieldEnum = {
    userId: 'userId',
    firstName: 'firstName',
    birthdate: 'birthdate',
    gender: 'gender',
    genderLabel: 'genderLabel',
    matchingBucket: 'matchingBucket',
    seeking: 'seeking',
    orientationEnc: 'orientationEnc',
    intention: 'intention',
    bio: 'bio',
    heightCm: 'heightCm',
    profession: 'profession',
    hasChildren: 'hasChildren',
    childrenCount: 'childrenCount',
    wantsChildren: 'wantsChildren',
    religion: 'religion',
    education: 'education',
    smoking: 'smoking',
    drinking: 'drinking',
    languages: 'languages',
    homeLatitude: 'homeLatitude',
    homeLongitude: 'homeLongitude',
    discoveryLatitude: 'discoveryLatitude',
    discoveryLongitude: 'discoveryLongitude',
    cityId: 'cityId',
    locationLabel: 'locationLabel',
    isVerified: 'isVerified',
    completionScore: 'completionScore',
    incognito: 'incognito',
    hideAge: 'hideAge',
    hideDistance: 'hideDistance',
    lastDeckRefreshAt: 'lastDeckRefreshAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PhotoScalarFieldEnum = {
    id: 'id',
    profileId: 'profileId',
    storageKey: 'storageKey',
    position: 'position',
    status: 'status',
    rejectionReason: 'rejectionReason',
    phash: 'phash',
    width: 'width',
    height: 'height',
    bytes: 'bytes',
    moderationScores: 'moderationScores',
    moderatedAt: 'moderatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.InterestScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    labelFr: 'labelFr',
    labelEn: 'labelEn',
    emoji: 'emoji',
    category: 'category',
    isActive: 'isActive',
    sortOrder: 'sortOrder'
};
exports.ProfileInterestScalarFieldEnum = {
    profileId: 'profileId',
    interestId: 'interestId',
    createdAt: 'createdAt'
};
exports.PromptScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    textFr: 'textFr',
    textEn: 'textEn',
    category: 'category',
    isActive: 'isActive',
    sortOrder: 'sortOrder'
};
exports.ProfilePromptScalarFieldEnum = {
    id: 'id',
    profileId: 'profileId',
    promptId: 'promptId',
    answer: 'answer',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PreferenceScalarFieldEnum = {
    userId: 'userId',
    minAge: 'minAge',
    maxAge: 'maxAge',
    maxDistanceKm: 'maxDistanceKm',
    intentionFilter: 'intentionFilter',
    religionFilter: 'religionFilter',
    minHeightCm: 'minHeightCm',
    maxHeightCm: 'maxHeightCm',
    hasChildren: 'hasChildren',
    smokingFilter: 'smokingFilter',
    drinkingFilter: 'drinkingFilter',
    languagesFilter: 'languagesFilter',
    verifiedOnly: 'verifiedOnly',
    allowRadiusExpansion: 'allowRadiusExpansion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ReportScalarFieldEnum = {
    id: 'id',
    reporterId: 'reporterId',
    reportedUserId: 'reportedUserId',
    reason: 'reason',
    details: 'details',
    messageId: 'messageId',
    evidenceKeys: 'evidenceKeys',
    status: 'status',
    resolvedById: 'resolvedById',
    decision: 'decision',
    resolutionNote: 'resolutionNote',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
};
exports.BlockScalarFieldEnum = {
    blockerId: 'blockerId',
    blockedId: 'blockedId',
    reason: 'reason',
    createdAt: 'createdAt'
};
exports.ContactBlockScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    phoneHash: 'phoneHash',
    createdAt: 'createdAt'
};
exports.ModerationTaskScalarFieldEnum = {
    id: 'id',
    type: 'type',
    status: 'status',
    priority: 'priority',
    subjectUserId: 'subjectUserId',
    photoId: 'photoId',
    reportId: 'reportId',
    verificationId: 'verificationId',
    eventId: 'eventId',
    assignedToId: 'assignedToId',
    decision: 'decision',
    notes: 'notes',
    createdAt: 'createdAt',
    claimedAt: 'claimedAt',
    resolvedAt: 'resolvedAt'
};
exports.RiskScoreScalarFieldEnum = {
    userId: 'userId',
    score: 'score',
    level: 'level',
    signals: 'signals',
    shadowBannedAt: 'shadowBannedAt',
    reviewedAt: 'reviewedAt',
    updatedAt: 'updatedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    channel: 'channel',
    titleKey: 'titleKey',
    bodyKey: 'bodyKey',
    data: 'data',
    sentAt: 'sentAt',
    readAt: 'readAt',
    failedAt: 'failedAt',
    error: 'error',
    createdAt: 'createdAt'
};
exports.NotificationPreferenceScalarFieldEnum = {
    userId: 'userId',
    newMatch: 'newMatch',
    newMessage: 'newMessage',
    newLike: 'newLike',
    events: 'events',
    marketing: 'marketing',
    quietHoursStart: 'quietHoursStart',
    quietHoursEnd: 'quietHoursEnd',
    timezone: 'timezone',
    updatedAt: 'updatedAt'
};
exports.PushTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    deviceId: 'deviceId',
    token: 'token',
    platform: 'platform',
    isActive: 'isActive',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt'
};
exports.TranslationKeyScalarFieldEnum = {
    id: 'id',
    key: 'key',
    namespace: 'namespace',
    fr: 'fr',
    en: 'en',
    updatedAt: 'updatedAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    actorId: 'actorId',
    actorType: 'actorType',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    before: 'before',
    after: 'after',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
exports.TravelSessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    cityId: 'cityId',
    locationLabel: 'locationLabel',
    wasFree: 'wasFree',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
};
exports.VerificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    poseChallenge: 'poseChallenge',
    livenessScore: 'livenessScore',
    matchScore: 'matchScore',
    failureReason: 'failureReason',
    attempts: 'attempts',
    captureKey: 'captureKey',
    captureWiped: 'captureWiped',
    reviewedById: 'reviewedById',
    reviewNote: 'reviewNote',
    createdAt: 'createdAt',
    submittedAt: 'submittedAt',
    processedAt: 'processedAt',
    expiresAt: 'expiresAt'
};
exports.FaceEmbeddingScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    verificationId: 'verificationId',
    model: 'model',
    dimension: 'dimension',
    duplicateOfUserId: 'duplicateOfUserId',
    duplicateDistance: 'duplicateDistance',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map