import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get session(): Prisma.SessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get device(): Prisma.DeviceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get otpCode(): Prisma.OtpCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get referral(): Prisma.ReferralDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get currency(): Prisma.CurrencyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentIntent(): Prisma.PaymentIntentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get purchase(): Prisma.PurchaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get creditLedger(): Prisma.CreditLedgerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscription(): Prisma.SubscriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get entitlement(): Prisma.EntitlementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boost(): Prisma.BoostDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get conversation(): Prisma.ConversationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get conversationParticipant(): Prisma.ConversationParticipantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get message(): Prisma.MessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get messageReceipt(): Prisma.MessageReceiptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get swipe(): Prisma.SwipeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get match(): Prisma.MatchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rewind(): Prisma.RewindDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get swipeArchive(): Prisma.SwipeArchiveDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get event(): Prisma.EventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get eventRequest(): Prisma.EventRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get eventCheckIn(): Prisma.EventCheckInDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get city(): Prisma.CityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get profile(): Prisma.ProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get photo(): Prisma.PhotoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get interest(): Prisma.InterestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get profileInterest(): Prisma.ProfileInterestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get prompt(): Prisma.PromptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get profilePrompt(): Prisma.ProfilePromptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get preference(): Prisma.PreferenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get report(): Prisma.ReportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get block(): Prisma.BlockDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get contactBlock(): Prisma.ContactBlockDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get moderationTask(): Prisma.ModerationTaskDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get riskScore(): Prisma.RiskScoreDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notificationPreference(): Prisma.NotificationPreferenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pushToken(): Prisma.PushTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get translationKey(): Prisma.TranslationKeyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get travelSession(): Prisma.TravelSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get verification(): Prisma.VerificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get faceEmbedding(): Prisma.FaceEmbeddingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
