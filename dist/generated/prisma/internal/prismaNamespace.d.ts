import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Session: "Session";
    readonly Device: "Device";
    readonly OtpCode: "OtpCode";
    readonly Referral: "Referral";
    readonly Currency: "Currency";
    readonly Product: "Product";
    readonly PaymentIntent: "PaymentIntent";
    readonly Purchase: "Purchase";
    readonly CreditLedger: "CreditLedger";
    readonly Subscription: "Subscription";
    readonly Entitlement: "Entitlement";
    readonly Boost: "Boost";
    readonly Conversation: "Conversation";
    readonly ConversationParticipant: "ConversationParticipant";
    readonly Message: "Message";
    readonly MessageReceipt: "MessageReceipt";
    readonly Swipe: "Swipe";
    readonly Match: "Match";
    readonly Rewind: "Rewind";
    readonly SwipeArchive: "SwipeArchive";
    readonly Event: "Event";
    readonly EventRequest: "EventRequest";
    readonly EventCheckIn: "EventCheckIn";
    readonly City: "City";
    readonly Profile: "Profile";
    readonly Photo: "Photo";
    readonly Interest: "Interest";
    readonly ProfileInterest: "ProfileInterest";
    readonly Prompt: "Prompt";
    readonly ProfilePrompt: "ProfilePrompt";
    readonly Preference: "Preference";
    readonly Report: "Report";
    readonly Block: "Block";
    readonly ContactBlock: "ContactBlock";
    readonly ModerationTask: "ModerationTask";
    readonly RiskScore: "RiskScore";
    readonly Notification: "Notification";
    readonly NotificationPreference: "NotificationPreference";
    readonly PushToken: "PushToken";
    readonly TranslationKey: "TranslationKey";
    readonly AuditLog: "AuditLog";
    readonly TravelSession: "TravelSession";
    readonly Verification: "Verification";
    readonly FaceEmbedding: "FaceEmbedding";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "session" | "device" | "otpCode" | "referral" | "currency" | "product" | "paymentIntent" | "purchase" | "creditLedger" | "subscription" | "entitlement" | "boost" | "conversation" | "conversationParticipant" | "message" | "messageReceipt" | "swipe" | "match" | "rewind" | "swipeArchive" | "event" | "eventRequest" | "eventCheckIn" | "city" | "profile" | "photo" | "interest" | "profileInterest" | "prompt" | "profilePrompt" | "preference" | "report" | "block" | "contactBlock" | "moderationTask" | "riskScore" | "notification" | "notificationPreference" | "pushToken" | "translationKey" | "auditLog" | "travelSession" | "verification" | "faceEmbedding";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Device: {
            payload: Prisma.$DevicePayload<ExtArgs>;
            fields: Prisma.DeviceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeviceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                findFirst: {
                    args: Prisma.DeviceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                findMany: {
                    args: Prisma.DeviceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                create: {
                    args: Prisma.DeviceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                createMany: {
                    args: Prisma.DeviceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                delete: {
                    args: Prisma.DeviceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                update: {
                    args: Prisma.DeviceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                deleteMany: {
                    args: Prisma.DeviceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeviceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>[];
                };
                upsert: {
                    args: Prisma.DeviceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DevicePayload>;
                };
                aggregate: {
                    args: Prisma.DeviceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDevice>;
                };
                groupBy: {
                    args: Prisma.DeviceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeviceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeviceCountAggregateOutputType> | number;
                };
            };
        };
        OtpCode: {
            payload: Prisma.$OtpCodePayload<ExtArgs>;
            fields: Prisma.OtpCodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OtpCodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OtpCodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                findFirst: {
                    args: Prisma.OtpCodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OtpCodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                findMany: {
                    args: Prisma.OtpCodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                create: {
                    args: Prisma.OtpCodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                createMany: {
                    args: Prisma.OtpCodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OtpCodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                delete: {
                    args: Prisma.OtpCodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                update: {
                    args: Prisma.OtpCodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                deleteMany: {
                    args: Prisma.OtpCodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OtpCodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OtpCodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                upsert: {
                    args: Prisma.OtpCodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                aggregate: {
                    args: Prisma.OtpCodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtpCode>;
                };
                groupBy: {
                    args: Prisma.OtpCodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OtpCodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCodeCountAggregateOutputType> | number;
                };
            };
        };
        Referral: {
            payload: Prisma.$ReferralPayload<ExtArgs>;
            fields: Prisma.ReferralFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReferralFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                findFirst: {
                    args: Prisma.ReferralFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                findMany: {
                    args: Prisma.ReferralFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>[];
                };
                create: {
                    args: Prisma.ReferralCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                createMany: {
                    args: Prisma.ReferralCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>[];
                };
                delete: {
                    args: Prisma.ReferralDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                update: {
                    args: Prisma.ReferralUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                deleteMany: {
                    args: Prisma.ReferralDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReferralUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>[];
                };
                upsert: {
                    args: Prisma.ReferralUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                aggregate: {
                    args: Prisma.ReferralAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReferral>;
                };
                groupBy: {
                    args: Prisma.ReferralGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReferralCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralCountAggregateOutputType> | number;
                };
            };
        };
        Currency: {
            payload: Prisma.$CurrencyPayload<ExtArgs>;
            fields: Prisma.CurrencyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CurrencyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>;
                };
                findFirst: {
                    args: Prisma.CurrencyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>;
                };
                findMany: {
                    args: Prisma.CurrencyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>[];
                };
                create: {
                    args: Prisma.CurrencyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>;
                };
                createMany: {
                    args: Prisma.CurrencyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CurrencyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>[];
                };
                delete: {
                    args: Prisma.CurrencyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>;
                };
                update: {
                    args: Prisma.CurrencyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>;
                };
                deleteMany: {
                    args: Prisma.CurrencyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CurrencyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CurrencyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>[];
                };
                upsert: {
                    args: Prisma.CurrencyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CurrencyPayload>;
                };
                aggregate: {
                    args: Prisma.CurrencyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCurrency>;
                };
                groupBy: {
                    args: Prisma.CurrencyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CurrencyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CurrencyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CurrencyCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        PaymentIntent: {
            payload: Prisma.$PaymentIntentPayload<ExtArgs>;
            fields: Prisma.PaymentIntentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentIntentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentIntentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentIntentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentIntentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentIntentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[];
                };
                create: {
                    args: Prisma.PaymentIntentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentIntentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentIntentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentIntentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>;
                };
                update: {
                    args: Prisma.PaymentIntentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentIntentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentIntentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentIntentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentIntentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentIntentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentIntentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePaymentIntent>;
                };
                groupBy: {
                    args: Prisma.PaymentIntentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentIntentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentIntentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentIntentCountAggregateOutputType> | number;
                };
            };
        };
        Purchase: {
            payload: Prisma.$PurchasePayload<ExtArgs>;
            fields: Prisma.PurchaseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PurchaseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                findFirst: {
                    args: Prisma.PurchaseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                findMany: {
                    args: Prisma.PurchaseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>[];
                };
                create: {
                    args: Prisma.PurchaseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                createMany: {
                    args: Prisma.PurchaseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>[];
                };
                delete: {
                    args: Prisma.PurchaseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                update: {
                    args: Prisma.PurchaseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                deleteMany: {
                    args: Prisma.PurchaseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PurchaseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>[];
                };
                upsert: {
                    args: Prisma.PurchaseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PurchasePayload>;
                };
                aggregate: {
                    args: Prisma.PurchaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchase>;
                };
                groupBy: {
                    args: Prisma.PurchaseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PurchaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PurchaseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PurchaseCountAggregateOutputType> | number;
                };
            };
        };
        CreditLedger: {
            payload: Prisma.$CreditLedgerPayload<ExtArgs>;
            fields: Prisma.CreditLedgerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CreditLedgerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CreditLedgerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>;
                };
                findFirst: {
                    args: Prisma.CreditLedgerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CreditLedgerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>;
                };
                findMany: {
                    args: Prisma.CreditLedgerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>[];
                };
                create: {
                    args: Prisma.CreditLedgerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>;
                };
                createMany: {
                    args: Prisma.CreditLedgerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CreditLedgerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>[];
                };
                delete: {
                    args: Prisma.CreditLedgerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>;
                };
                update: {
                    args: Prisma.CreditLedgerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>;
                };
                deleteMany: {
                    args: Prisma.CreditLedgerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CreditLedgerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CreditLedgerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>[];
                };
                upsert: {
                    args: Prisma.CreditLedgerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreditLedgerPayload>;
                };
                aggregate: {
                    args: Prisma.CreditLedgerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCreditLedger>;
                };
                groupBy: {
                    args: Prisma.CreditLedgerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CreditLedgerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CreditLedgerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CreditLedgerCountAggregateOutputType> | number;
                };
            };
        };
        Subscription: {
            payload: Prisma.$SubscriptionPayload<ExtArgs>;
            fields: Prisma.SubscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findMany: {
                    args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                create: {
                    args: Prisma.SubscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                createMany: {
                    args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                delete: {
                    args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                update: {
                    args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
                };
                groupBy: {
                    args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number;
                };
            };
        };
        Entitlement: {
            payload: Prisma.$EntitlementPayload<ExtArgs>;
            fields: Prisma.EntitlementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EntitlementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EntitlementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>;
                };
                findFirst: {
                    args: Prisma.EntitlementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EntitlementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>;
                };
                findMany: {
                    args: Prisma.EntitlementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>[];
                };
                create: {
                    args: Prisma.EntitlementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>;
                };
                createMany: {
                    args: Prisma.EntitlementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EntitlementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>[];
                };
                delete: {
                    args: Prisma.EntitlementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>;
                };
                update: {
                    args: Prisma.EntitlementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>;
                };
                deleteMany: {
                    args: Prisma.EntitlementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EntitlementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EntitlementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>[];
                };
                upsert: {
                    args: Prisma.EntitlementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntitlementPayload>;
                };
                aggregate: {
                    args: Prisma.EntitlementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEntitlement>;
                };
                groupBy: {
                    args: Prisma.EntitlementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntitlementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EntitlementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntitlementCountAggregateOutputType> | number;
                };
            };
        };
        Boost: {
            payload: Prisma.$BoostPayload<ExtArgs>;
            fields: Prisma.BoostFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BoostFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BoostFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>;
                };
                findFirst: {
                    args: Prisma.BoostFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BoostFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>;
                };
                findMany: {
                    args: Prisma.BoostFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>[];
                };
                create: {
                    args: Prisma.BoostCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>;
                };
                createMany: {
                    args: Prisma.BoostCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BoostCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>[];
                };
                delete: {
                    args: Prisma.BoostDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>;
                };
                update: {
                    args: Prisma.BoostUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>;
                };
                deleteMany: {
                    args: Prisma.BoostDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BoostUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BoostUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>[];
                };
                upsert: {
                    args: Prisma.BoostUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoostPayload>;
                };
                aggregate: {
                    args: Prisma.BoostAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBoost>;
                };
                groupBy: {
                    args: Prisma.BoostGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BoostGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BoostCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BoostCountAggregateOutputType> | number;
                };
            };
        };
        Conversation: {
            payload: Prisma.$ConversationPayload<ExtArgs>;
            fields: Prisma.ConversationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConversationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findFirst: {
                    args: Prisma.ConversationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findMany: {
                    args: Prisma.ConversationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                create: {
                    args: Prisma.ConversationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                createMany: {
                    args: Prisma.ConversationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                delete: {
                    args: Prisma.ConversationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                update: {
                    args: Prisma.ConversationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                deleteMany: {
                    args: Prisma.ConversationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConversationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                upsert: {
                    args: Prisma.ConversationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversation>;
                };
                groupBy: {
                    args: Prisma.ConversationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConversationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationCountAggregateOutputType> | number;
                };
            };
        };
        ConversationParticipant: {
            payload: Prisma.$ConversationParticipantPayload<ExtArgs>;
            fields: Prisma.ConversationParticipantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConversationParticipantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConversationParticipantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                findFirst: {
                    args: Prisma.ConversationParticipantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConversationParticipantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                findMany: {
                    args: Prisma.ConversationParticipantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>[];
                };
                create: {
                    args: Prisma.ConversationParticipantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                createMany: {
                    args: Prisma.ConversationParticipantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConversationParticipantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>[];
                };
                delete: {
                    args: Prisma.ConversationParticipantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                update: {
                    args: Prisma.ConversationParticipantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                deleteMany: {
                    args: Prisma.ConversationParticipantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConversationParticipantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConversationParticipantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>[];
                };
                upsert: {
                    args: Prisma.ConversationParticipantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationParticipantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversationParticipant>;
                };
                groupBy: {
                    args: Prisma.ConversationParticipantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationParticipantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConversationParticipantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationParticipantCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        MessageReceipt: {
            payload: Prisma.$MessageReceiptPayload<ExtArgs>;
            fields: Prisma.MessageReceiptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageReceiptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageReceiptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>;
                };
                findFirst: {
                    args: Prisma.MessageReceiptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageReceiptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>;
                };
                findMany: {
                    args: Prisma.MessageReceiptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>[];
                };
                create: {
                    args: Prisma.MessageReceiptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>;
                };
                createMany: {
                    args: Prisma.MessageReceiptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageReceiptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>[];
                };
                delete: {
                    args: Prisma.MessageReceiptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>;
                };
                update: {
                    args: Prisma.MessageReceiptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>;
                };
                deleteMany: {
                    args: Prisma.MessageReceiptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageReceiptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageReceiptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>[];
                };
                upsert: {
                    args: Prisma.MessageReceiptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReceiptPayload>;
                };
                aggregate: {
                    args: Prisma.MessageReceiptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessageReceipt>;
                };
                groupBy: {
                    args: Prisma.MessageReceiptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageReceiptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageReceiptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageReceiptCountAggregateOutputType> | number;
                };
            };
        };
        Swipe: {
            payload: Prisma.$SwipePayload<ExtArgs>;
            fields: Prisma.SwipeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SwipeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SwipeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>;
                };
                findFirst: {
                    args: Prisma.SwipeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SwipeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>;
                };
                findMany: {
                    args: Prisma.SwipeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>[];
                };
                create: {
                    args: Prisma.SwipeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>;
                };
                createMany: {
                    args: Prisma.SwipeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SwipeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>[];
                };
                delete: {
                    args: Prisma.SwipeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>;
                };
                update: {
                    args: Prisma.SwipeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>;
                };
                deleteMany: {
                    args: Prisma.SwipeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SwipeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SwipeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>[];
                };
                upsert: {
                    args: Prisma.SwipeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipePayload>;
                };
                aggregate: {
                    args: Prisma.SwipeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSwipe>;
                };
                groupBy: {
                    args: Prisma.SwipeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SwipeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SwipeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SwipeCountAggregateOutputType> | number;
                };
            };
        };
        Match: {
            payload: Prisma.$MatchPayload<ExtArgs>;
            fields: Prisma.MatchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                findFirst: {
                    args: Prisma.MatchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                findMany: {
                    args: Prisma.MatchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                create: {
                    args: Prisma.MatchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                createMany: {
                    args: Prisma.MatchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                delete: {
                    args: Prisma.MatchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                update: {
                    args: Prisma.MatchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                deleteMany: {
                    args: Prisma.MatchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                upsert: {
                    args: Prisma.MatchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                aggregate: {
                    args: Prisma.MatchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatch>;
                };
                groupBy: {
                    args: Prisma.MatchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchCountAggregateOutputType> | number;
                };
            };
        };
        Rewind: {
            payload: Prisma.$RewindPayload<ExtArgs>;
            fields: Prisma.RewindFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RewindFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RewindFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>;
                };
                findFirst: {
                    args: Prisma.RewindFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RewindFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>;
                };
                findMany: {
                    args: Prisma.RewindFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>[];
                };
                create: {
                    args: Prisma.RewindCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>;
                };
                createMany: {
                    args: Prisma.RewindCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RewindCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>[];
                };
                delete: {
                    args: Prisma.RewindDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>;
                };
                update: {
                    args: Prisma.RewindUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>;
                };
                deleteMany: {
                    args: Prisma.RewindDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RewindUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RewindUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>[];
                };
                upsert: {
                    args: Prisma.RewindUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewindPayload>;
                };
                aggregate: {
                    args: Prisma.RewindAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRewind>;
                };
                groupBy: {
                    args: Prisma.RewindGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewindGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RewindCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewindCountAggregateOutputType> | number;
                };
            };
        };
        SwipeArchive: {
            payload: Prisma.$SwipeArchivePayload<ExtArgs>;
            fields: Prisma.SwipeArchiveFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SwipeArchiveFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SwipeArchiveFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>;
                };
                findFirst: {
                    args: Prisma.SwipeArchiveFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SwipeArchiveFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>;
                };
                findMany: {
                    args: Prisma.SwipeArchiveFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>[];
                };
                create: {
                    args: Prisma.SwipeArchiveCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>;
                };
                createMany: {
                    args: Prisma.SwipeArchiveCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SwipeArchiveCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>[];
                };
                delete: {
                    args: Prisma.SwipeArchiveDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>;
                };
                update: {
                    args: Prisma.SwipeArchiveUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>;
                };
                deleteMany: {
                    args: Prisma.SwipeArchiveDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SwipeArchiveUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SwipeArchiveUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>[];
                };
                upsert: {
                    args: Prisma.SwipeArchiveUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SwipeArchivePayload>;
                };
                aggregate: {
                    args: Prisma.SwipeArchiveAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSwipeArchive>;
                };
                groupBy: {
                    args: Prisma.SwipeArchiveGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SwipeArchiveGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SwipeArchiveCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SwipeArchiveCountAggregateOutputType> | number;
                };
            };
        };
        Event: {
            payload: Prisma.$EventPayload<ExtArgs>;
            fields: Prisma.EventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findFirst: {
                    args: Prisma.EventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findMany: {
                    args: Prisma.EventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                create: {
                    args: Prisma.EventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                createMany: {
                    args: Prisma.EventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                delete: {
                    args: Prisma.EventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                update: {
                    args: Prisma.EventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                deleteMany: {
                    args: Prisma.EventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                upsert: {
                    args: Prisma.EventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                aggregate: {
                    args: Prisma.EventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvent>;
                };
                groupBy: {
                    args: Prisma.EventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCountAggregateOutputType> | number;
                };
            };
        };
        EventRequest: {
            payload: Prisma.$EventRequestPayload<ExtArgs>;
            fields: Prisma.EventRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>;
                };
                findFirst: {
                    args: Prisma.EventRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>;
                };
                findMany: {
                    args: Prisma.EventRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>[];
                };
                create: {
                    args: Prisma.EventRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>;
                };
                createMany: {
                    args: Prisma.EventRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>[];
                };
                delete: {
                    args: Prisma.EventRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>;
                };
                update: {
                    args: Prisma.EventRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.EventRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>[];
                };
                upsert: {
                    args: Prisma.EventRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRequestPayload>;
                };
                aggregate: {
                    args: Prisma.EventRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventRequest>;
                };
                groupBy: {
                    args: Prisma.EventRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventRequestCountAggregateOutputType> | number;
                };
            };
        };
        EventCheckIn: {
            payload: Prisma.$EventCheckInPayload<ExtArgs>;
            fields: Prisma.EventCheckInFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventCheckInFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventCheckInFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>;
                };
                findFirst: {
                    args: Prisma.EventCheckInFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventCheckInFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>;
                };
                findMany: {
                    args: Prisma.EventCheckInFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>[];
                };
                create: {
                    args: Prisma.EventCheckInCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>;
                };
                createMany: {
                    args: Prisma.EventCheckInCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventCheckInCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>[];
                };
                delete: {
                    args: Prisma.EventCheckInDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>;
                };
                update: {
                    args: Prisma.EventCheckInUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>;
                };
                deleteMany: {
                    args: Prisma.EventCheckInDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventCheckInUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventCheckInUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>[];
                };
                upsert: {
                    args: Prisma.EventCheckInUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventCheckInPayload>;
                };
                aggregate: {
                    args: Prisma.EventCheckInAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventCheckIn>;
                };
                groupBy: {
                    args: Prisma.EventCheckInGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCheckInGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventCheckInCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCheckInCountAggregateOutputType> | number;
                };
            };
        };
        City: {
            payload: Prisma.$CityPayload<ExtArgs>;
            fields: Prisma.CityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findFirst: {
                    args: Prisma.CityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findMany: {
                    args: Prisma.CityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                create: {
                    args: Prisma.CityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                createMany: {
                    args: Prisma.CityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                delete: {
                    args: Prisma.CityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                update: {
                    args: Prisma.CityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                deleteMany: {
                    args: Prisma.CityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                upsert: {
                    args: Prisma.CityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                aggregate: {
                    args: Prisma.CityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCity>;
                };
                groupBy: {
                    args: Prisma.CityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityCountAggregateOutputType> | number;
                };
            };
        };
        Profile: {
            payload: Prisma.$ProfilePayload<ExtArgs>;
            fields: Prisma.ProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findMany: {
                    args: Prisma.ProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                create: {
                    args: Prisma.ProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                createMany: {
                    args: Prisma.ProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                delete: {
                    args: Prisma.ProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                update: {
                    args: Prisma.ProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfile>;
                };
                groupBy: {
                    args: Prisma.ProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileCountAggregateOutputType> | number;
                };
            };
        };
        Photo: {
            payload: Prisma.$PhotoPayload<ExtArgs>;
            fields: Prisma.PhotoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PhotoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>;
                };
                findFirst: {
                    args: Prisma.PhotoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>;
                };
                findMany: {
                    args: Prisma.PhotoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>[];
                };
                create: {
                    args: Prisma.PhotoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>;
                };
                createMany: {
                    args: Prisma.PhotoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>[];
                };
                delete: {
                    args: Prisma.PhotoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>;
                };
                update: {
                    args: Prisma.PhotoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>;
                };
                deleteMany: {
                    args: Prisma.PhotoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PhotoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>[];
                };
                upsert: {
                    args: Prisma.PhotoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PhotoPayload>;
                };
                aggregate: {
                    args: Prisma.PhotoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePhoto>;
                };
                groupBy: {
                    args: Prisma.PhotoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PhotoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PhotoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PhotoCountAggregateOutputType> | number;
                };
            };
        };
        Interest: {
            payload: Prisma.$InterestPayload<ExtArgs>;
            fields: Prisma.InterestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>;
                };
                findFirst: {
                    args: Prisma.InterestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>;
                };
                findMany: {
                    args: Prisma.InterestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>[];
                };
                create: {
                    args: Prisma.InterestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>;
                };
                createMany: {
                    args: Prisma.InterestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InterestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>[];
                };
                delete: {
                    args: Prisma.InterestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>;
                };
                update: {
                    args: Prisma.InterestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>;
                };
                deleteMany: {
                    args: Prisma.InterestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InterestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>[];
                };
                upsert: {
                    args: Prisma.InterestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterestPayload>;
                };
                aggregate: {
                    args: Prisma.InterestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterest>;
                };
                groupBy: {
                    args: Prisma.InterestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterestCountAggregateOutputType> | number;
                };
            };
        };
        ProfileInterest: {
            payload: Prisma.$ProfileInterestPayload<ExtArgs>;
            fields: Prisma.ProfileInterestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfileInterestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfileInterestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>;
                };
                findFirst: {
                    args: Prisma.ProfileInterestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfileInterestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>;
                };
                findMany: {
                    args: Prisma.ProfileInterestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>[];
                };
                create: {
                    args: Prisma.ProfileInterestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>;
                };
                createMany: {
                    args: Prisma.ProfileInterestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfileInterestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>[];
                };
                delete: {
                    args: Prisma.ProfileInterestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>;
                };
                update: {
                    args: Prisma.ProfileInterestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>;
                };
                deleteMany: {
                    args: Prisma.ProfileInterestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfileInterestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfileInterestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>[];
                };
                upsert: {
                    args: Prisma.ProfileInterestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfileInterestPayload>;
                };
                aggregate: {
                    args: Prisma.ProfileInterestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfileInterest>;
                };
                groupBy: {
                    args: Prisma.ProfileInterestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileInterestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfileInterestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileInterestCountAggregateOutputType> | number;
                };
            };
        };
        Prompt: {
            payload: Prisma.$PromptPayload<ExtArgs>;
            fields: Prisma.PromptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PromptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>;
                };
                findFirst: {
                    args: Prisma.PromptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>;
                };
                findMany: {
                    args: Prisma.PromptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>[];
                };
                create: {
                    args: Prisma.PromptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>;
                };
                createMany: {
                    args: Prisma.PromptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>[];
                };
                delete: {
                    args: Prisma.PromptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>;
                };
                update: {
                    args: Prisma.PromptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>;
                };
                deleteMany: {
                    args: Prisma.PromptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PromptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>[];
                };
                upsert: {
                    args: Prisma.PromptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromptPayload>;
                };
                aggregate: {
                    args: Prisma.PromptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrompt>;
                };
                groupBy: {
                    args: Prisma.PromptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PromptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromptCountAggregateOutputType> | number;
                };
            };
        };
        ProfilePrompt: {
            payload: Prisma.$ProfilePromptPayload<ExtArgs>;
            fields: Prisma.ProfilePromptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfilePromptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfilePromptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>;
                };
                findFirst: {
                    args: Prisma.ProfilePromptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfilePromptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>;
                };
                findMany: {
                    args: Prisma.ProfilePromptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>[];
                };
                create: {
                    args: Prisma.ProfilePromptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>;
                };
                createMany: {
                    args: Prisma.ProfilePromptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfilePromptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>[];
                };
                delete: {
                    args: Prisma.ProfilePromptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>;
                };
                update: {
                    args: Prisma.ProfilePromptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>;
                };
                deleteMany: {
                    args: Prisma.ProfilePromptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfilePromptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfilePromptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>[];
                };
                upsert: {
                    args: Prisma.ProfilePromptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePromptPayload>;
                };
                aggregate: {
                    args: Prisma.ProfilePromptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfilePrompt>;
                };
                groupBy: {
                    args: Prisma.ProfilePromptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfilePromptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfilePromptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfilePromptCountAggregateOutputType> | number;
                };
            };
        };
        Preference: {
            payload: Prisma.$PreferencePayload<ExtArgs>;
            fields: Prisma.PreferenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PreferenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PreferenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                findFirst: {
                    args: Prisma.PreferenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PreferenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                findMany: {
                    args: Prisma.PreferenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>[];
                };
                create: {
                    args: Prisma.PreferenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                createMany: {
                    args: Prisma.PreferenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PreferenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>[];
                };
                delete: {
                    args: Prisma.PreferenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                update: {
                    args: Prisma.PreferenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                deleteMany: {
                    args: Prisma.PreferenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PreferenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PreferenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>[];
                };
                upsert: {
                    args: Prisma.PreferenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PreferencePayload>;
                };
                aggregate: {
                    args: Prisma.PreferenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePreference>;
                };
                groupBy: {
                    args: Prisma.PreferenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PreferenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PreferenceCountAggregateOutputType> | number;
                };
            };
        };
        Report: {
            payload: Prisma.$ReportPayload<ExtArgs>;
            fields: Prisma.ReportFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReportFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                findFirst: {
                    args: Prisma.ReportFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                findMany: {
                    args: Prisma.ReportFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>[];
                };
                create: {
                    args: Prisma.ReportCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                createMany: {
                    args: Prisma.ReportCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>[];
                };
                delete: {
                    args: Prisma.ReportDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                update: {
                    args: Prisma.ReportUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                deleteMany: {
                    args: Prisma.ReportDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReportUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>[];
                };
                upsert: {
                    args: Prisma.ReportUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                aggregate: {
                    args: Prisma.ReportAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReport>;
                };
                groupBy: {
                    args: Prisma.ReportGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReportCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportCountAggregateOutputType> | number;
                };
            };
        };
        Block: {
            payload: Prisma.$BlockPayload<ExtArgs>;
            fields: Prisma.BlockFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BlockFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>;
                };
                findFirst: {
                    args: Prisma.BlockFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>;
                };
                findMany: {
                    args: Prisma.BlockFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>[];
                };
                create: {
                    args: Prisma.BlockCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>;
                };
                createMany: {
                    args: Prisma.BlockCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>[];
                };
                delete: {
                    args: Prisma.BlockDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>;
                };
                update: {
                    args: Prisma.BlockUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>;
                };
                deleteMany: {
                    args: Prisma.BlockDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BlockUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BlockUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>[];
                };
                upsert: {
                    args: Prisma.BlockUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BlockPayload>;
                };
                aggregate: {
                    args: Prisma.BlockAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBlock>;
                };
                groupBy: {
                    args: Prisma.BlockGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlockGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BlockCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BlockCountAggregateOutputType> | number;
                };
            };
        };
        ContactBlock: {
            payload: Prisma.$ContactBlockPayload<ExtArgs>;
            fields: Prisma.ContactBlockFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactBlockFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactBlockFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>;
                };
                findFirst: {
                    args: Prisma.ContactBlockFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactBlockFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>;
                };
                findMany: {
                    args: Prisma.ContactBlockFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>[];
                };
                create: {
                    args: Prisma.ContactBlockCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>;
                };
                createMany: {
                    args: Prisma.ContactBlockCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactBlockCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>[];
                };
                delete: {
                    args: Prisma.ContactBlockDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>;
                };
                update: {
                    args: Prisma.ContactBlockUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>;
                };
                deleteMany: {
                    args: Prisma.ContactBlockDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactBlockUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactBlockUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>[];
                };
                upsert: {
                    args: Prisma.ContactBlockUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactBlockPayload>;
                };
                aggregate: {
                    args: Prisma.ContactBlockAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContactBlock>;
                };
                groupBy: {
                    args: Prisma.ContactBlockGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactBlockGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactBlockCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactBlockCountAggregateOutputType> | number;
                };
            };
        };
        ModerationTask: {
            payload: Prisma.$ModerationTaskPayload<ExtArgs>;
            fields: Prisma.ModerationTaskFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModerationTaskFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModerationTaskFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>;
                };
                findFirst: {
                    args: Prisma.ModerationTaskFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModerationTaskFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>;
                };
                findMany: {
                    args: Prisma.ModerationTaskFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>[];
                };
                create: {
                    args: Prisma.ModerationTaskCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>;
                };
                createMany: {
                    args: Prisma.ModerationTaskCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModerationTaskCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>[];
                };
                delete: {
                    args: Prisma.ModerationTaskDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>;
                };
                update: {
                    args: Prisma.ModerationTaskUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>;
                };
                deleteMany: {
                    args: Prisma.ModerationTaskDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModerationTaskUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModerationTaskUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>[];
                };
                upsert: {
                    args: Prisma.ModerationTaskUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationTaskPayload>;
                };
                aggregate: {
                    args: Prisma.ModerationTaskAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModerationTask>;
                };
                groupBy: {
                    args: Prisma.ModerationTaskGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModerationTaskGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModerationTaskCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModerationTaskCountAggregateOutputType> | number;
                };
            };
        };
        RiskScore: {
            payload: Prisma.$RiskScorePayload<ExtArgs>;
            fields: Prisma.RiskScoreFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RiskScoreFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RiskScoreFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                };
                findFirst: {
                    args: Prisma.RiskScoreFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RiskScoreFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                };
                findMany: {
                    args: Prisma.RiskScoreFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>[];
                };
                create: {
                    args: Prisma.RiskScoreCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                };
                createMany: {
                    args: Prisma.RiskScoreCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RiskScoreCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>[];
                };
                delete: {
                    args: Prisma.RiskScoreDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                };
                update: {
                    args: Prisma.RiskScoreUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                };
                deleteMany: {
                    args: Prisma.RiskScoreDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RiskScoreUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RiskScoreUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>[];
                };
                upsert: {
                    args: Prisma.RiskScoreUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                };
                aggregate: {
                    args: Prisma.RiskScoreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRiskScore>;
                };
                groupBy: {
                    args: Prisma.RiskScoreGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiskScoreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RiskScoreCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RiskScoreCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        NotificationPreference: {
            payload: Prisma.$NotificationPreferencePayload<ExtArgs>;
            fields: Prisma.NotificationPreferenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationPreferenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findFirst: {
                    args: Prisma.NotificationPreferenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findMany: {
                    args: Prisma.NotificationPreferenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                create: {
                    args: Prisma.NotificationPreferenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                createMany: {
                    args: Prisma.NotificationPreferenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                delete: {
                    args: Prisma.NotificationPreferenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                update: {
                    args: Prisma.NotificationPreferenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationPreferenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationPreferenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                upsert: {
                    args: Prisma.NotificationPreferenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                aggregate: {
                    args: Prisma.NotificationPreferenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotificationPreference>;
                };
                groupBy: {
                    args: Prisma.NotificationPreferenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationPreferenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceCountAggregateOutputType> | number;
                };
            };
        };
        PushToken: {
            payload: Prisma.$PushTokenPayload<ExtArgs>;
            fields: Prisma.PushTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PushTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PushTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PushTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PushTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>;
                };
                findMany: {
                    args: Prisma.PushTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>[];
                };
                create: {
                    args: Prisma.PushTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>;
                };
                createMany: {
                    args: Prisma.PushTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PushTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>[];
                };
                delete: {
                    args: Prisma.PushTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>;
                };
                update: {
                    args: Prisma.PushTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PushTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PushTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PushTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>[];
                };
                upsert: {
                    args: Prisma.PushTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PushTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PushTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePushToken>;
                };
                groupBy: {
                    args: Prisma.PushTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PushTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PushTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PushTokenCountAggregateOutputType> | number;
                };
            };
        };
        TranslationKey: {
            payload: Prisma.$TranslationKeyPayload<ExtArgs>;
            fields: Prisma.TranslationKeyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TranslationKeyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TranslationKeyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>;
                };
                findFirst: {
                    args: Prisma.TranslationKeyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TranslationKeyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>;
                };
                findMany: {
                    args: Prisma.TranslationKeyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>[];
                };
                create: {
                    args: Prisma.TranslationKeyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>;
                };
                createMany: {
                    args: Prisma.TranslationKeyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TranslationKeyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>[];
                };
                delete: {
                    args: Prisma.TranslationKeyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>;
                };
                update: {
                    args: Prisma.TranslationKeyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>;
                };
                deleteMany: {
                    args: Prisma.TranslationKeyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TranslationKeyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TranslationKeyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>[];
                };
                upsert: {
                    args: Prisma.TranslationKeyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranslationKeyPayload>;
                };
                aggregate: {
                    args: Prisma.TranslationKeyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTranslationKey>;
                };
                groupBy: {
                    args: Prisma.TranslationKeyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranslationKeyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TranslationKeyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranslationKeyCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        TravelSession: {
            payload: Prisma.$TravelSessionPayload<ExtArgs>;
            fields: Prisma.TravelSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TravelSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TravelSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>;
                };
                findFirst: {
                    args: Prisma.TravelSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TravelSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>;
                };
                findMany: {
                    args: Prisma.TravelSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>[];
                };
                create: {
                    args: Prisma.TravelSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>;
                };
                createMany: {
                    args: Prisma.TravelSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TravelSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>[];
                };
                delete: {
                    args: Prisma.TravelSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>;
                };
                update: {
                    args: Prisma.TravelSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.TravelSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TravelSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TravelSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>[];
                };
                upsert: {
                    args: Prisma.TravelSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TravelSessionPayload>;
                };
                aggregate: {
                    args: Prisma.TravelSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTravelSession>;
                };
                groupBy: {
                    args: Prisma.TravelSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TravelSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TravelSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TravelSessionCountAggregateOutputType> | number;
                };
            };
        };
        Verification: {
            payload: Prisma.$VerificationPayload<ExtArgs>;
            fields: Prisma.VerificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findMany: {
                    args: Prisma.VerificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                create: {
                    args: Prisma.VerificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                createMany: {
                    args: Prisma.VerificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                delete: {
                    args: Prisma.VerificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                update: {
                    args: Prisma.VerificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerification>;
                };
                groupBy: {
                    args: Prisma.VerificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationCountAggregateOutputType> | number;
                };
            };
        };
        FaceEmbedding: {
            payload: Prisma.$FaceEmbeddingPayload<ExtArgs>;
            fields: Prisma.FaceEmbeddingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FaceEmbeddingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FaceEmbeddingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>;
                };
                findFirst: {
                    args: Prisma.FaceEmbeddingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FaceEmbeddingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>;
                };
                findMany: {
                    args: Prisma.FaceEmbeddingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>[];
                };
                create: {
                    args: Prisma.FaceEmbeddingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>;
                };
                createMany: {
                    args: Prisma.FaceEmbeddingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FaceEmbeddingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>[];
                };
                delete: {
                    args: Prisma.FaceEmbeddingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>;
                };
                update: {
                    args: Prisma.FaceEmbeddingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>;
                };
                deleteMany: {
                    args: Prisma.FaceEmbeddingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FaceEmbeddingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FaceEmbeddingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>[];
                };
                upsert: {
                    args: Prisma.FaceEmbeddingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaceEmbeddingPayload>;
                };
                aggregate: {
                    args: Prisma.FaceEmbeddingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFaceEmbedding>;
                };
                groupBy: {
                    args: Prisma.FaceEmbeddingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaceEmbeddingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FaceEmbeddingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaceEmbeddingCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly emailVerifiedAt: "emailVerifiedAt";
    readonly phone: "phone";
    readonly phoneHash: "phoneHash";
    readonly phoneVerifiedAt: "phoneVerifiedAt";
    readonly passwordHash: "passwordHash";
    readonly authProvider: "authProvider";
    readonly providerUid: "providerUid";
    readonly status: "status";
    readonly role: "role";
    readonly locale: "locale";
    readonly referralCode: "referralCode";
    readonly referredById: "referredById";
    readonly suspendedUntil: "suspendedUntil";
    readonly bannedAt: "bannedAt";
    readonly banReason: "banReason";
    readonly shadowBannedAt: "shadowBannedAt";
    readonly lastActiveAt: "lastActiveAt";
    readonly deletionRequestedAt: "deletionRequestedAt";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly refreshTokenHash: "refreshTokenHash";
    readonly deviceId: "deviceId";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly revokedReason: "revokedReason";
    readonly lastUsedAt: "lastUsedAt";
    readonly createdAt: "createdAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const DeviceScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly platform: "platform";
    readonly fingerprint: "fingerprint";
    readonly model: "model";
    readonly osVersion: "osVersion";
    readonly appVersion: "appVersion";
    readonly integrityVerdict: "integrityVerdict";
    readonly integrityCheckedAt: "integrityCheckedAt";
    readonly integrityPayload: "integrityPayload";
    readonly isTrusted: "isTrusted";
    readonly firstSeenAt: "firstSeenAt";
    readonly lastSeenAt: "lastSeenAt";
};
export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum];
export declare const OtpCodeScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly channel: "channel";
    readonly purpose: "purpose";
    readonly codeHash: "codeHash";
    readonly attempts: "attempts";
    readonly maxAttempts: "maxAttempts";
    readonly consumedAt: "consumedAt";
    readonly expiresAt: "expiresAt";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type OtpCodeScalarFieldEnum = (typeof OtpCodeScalarFieldEnum)[keyof typeof OtpCodeScalarFieldEnum];
export declare const ReferralScalarFieldEnum: {
    readonly id: "id";
    readonly referrerId: "referrerId";
    readonly refereeId: "refereeId";
    readonly code: "code";
    readonly status: "status";
    readonly rewardCredits: "rewardCredits";
    readonly qualifiedAt: "qualifiedAt";
    readonly rewardedAt: "rewardedAt";
    readonly revokedAt: "revokedAt";
    readonly revokedReason: "revokedReason";
    readonly createdAt: "createdAt";
};
export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum];
export declare const CurrencyScalarFieldEnum: {
    readonly code: "code";
    readonly name: "name";
    readonly symbol: "symbol";
    readonly minorUnitScale: "minorUnitScale";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly sku: "sku";
    readonly type: "type";
    readonly titleFr: "titleFr";
    readonly titleEn: "titleEn";
    readonly descriptionFr: "descriptionFr";
    readonly descriptionEn: "descriptionEn";
    readonly priceAmount: "priceAmount";
    readonly currencyCode: "currencyCode";
    readonly creditCost: "creditCost";
    readonly creditGrant: "creditGrant";
    readonly quantity: "quantity";
    readonly durationDays: "durationDays";
    readonly durationMinutes: "durationMinutes";
    readonly boostTier: "boostTier";
    readonly tier: "tier";
    readonly googleProductId: "googleProductId";
    readonly appleProductId: "appleProductId";
    readonly isActive: "isActive";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const PaymentIntentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly productId: "productId";
    readonly provider: "provider";
    readonly operator: "operator";
    readonly amount: "amount";
    readonly currencyCode: "currencyCode";
    readonly status: "status";
    readonly providerRef: "providerRef";
    readonly providerPayload: "providerPayload";
    readonly payerPhone: "payerPhone";
    readonly idempotencyKey: "idempotencyKey";
    readonly failureCode: "failureCode";
    readonly failureMessage: "failureMessage";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly expiresAt: "expiresAt";
    readonly completedAt: "completedAt";
    readonly reconciledAt: "reconciledAt";
};
export type PaymentIntentScalarFieldEnum = (typeof PaymentIntentScalarFieldEnum)[keyof typeof PaymentIntentScalarFieldEnum];
export declare const PurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly productId: "productId";
    readonly paymentIntentId: "paymentIntentId";
    readonly provider: "provider";
    readonly amount: "amount";
    readonly currencyCode: "currencyCode";
    readonly creditsGranted: "creditsGranted";
    readonly storeReceipt: "storeReceipt";
    readonly storeTransactionId: "storeTransactionId";
    readonly refundedAt: "refundedAt";
    readonly refundReason: "refundReason";
    readonly createdAt: "createdAt";
};
export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum];
export declare const CreditLedgerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly delta: "delta";
    readonly balanceAfter: "balanceAfter";
    readonly reason: "reason";
    readonly refType: "refType";
    readonly refId: "refId";
    readonly purchaseId: "purchaseId";
    readonly idempotencyKey: "idempotencyKey";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type CreditLedgerScalarFieldEnum = (typeof CreditLedgerScalarFieldEnum)[keyof typeof CreditLedgerScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tier: "tier";
    readonly status: "status";
    readonly purchaseId: "purchaseId";
    readonly provider: "provider";
    readonly startedAt: "startedAt";
    readonly expiresAt: "expiresAt";
    readonly autoRenew: "autoRenew";
    readonly graceUntil: "graceUntil";
    readonly cancelledAt: "cancelledAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const EntitlementScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly key: "key";
    readonly source: "source";
    readonly remaining: "remaining";
    readonly grantedAt: "grantedAt";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly refType: "refType";
    readonly refId: "refId";
};
export type EntitlementScalarFieldEnum = (typeof EntitlementScalarFieldEnum)[keyof typeof EntitlementScalarFieldEnum];
export declare const BoostScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tier: "tier";
    readonly status: "status";
    readonly cityId: "cityId";
    readonly purchaseId: "purchaseId";
    readonly multiplier: "multiplier";
    readonly queuedAt: "queuedAt";
    readonly startAt: "startAt";
    readonly endAt: "endAt";
    readonly impressions: "impressions";
    readonly profileViews: "profileViews";
    readonly likesGained: "likesGained";
    readonly matchesGained: "matchesGained";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BoostScalarFieldEnum = (typeof BoostScalarFieldEnum)[keyof typeof BoostScalarFieldEnum];
export declare const ConversationScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly status: "status";
    readonly matchId: "matchId";
    readonly eventId: "eventId";
    readonly lastMessageAt: "lastMessageAt";
    readonly lastMessagePreview: "lastMessagePreview";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly closedAt: "closedAt";
};
export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum];
export declare const ConversationParticipantScalarFieldEnum: {
    readonly conversationId: "conversationId";
    readonly userId: "userId";
    readonly joinedAt: "joinedAt";
    readonly lastReadAt: "lastReadAt";
    readonly unreadCount: "unreadCount";
    readonly mutedUntil: "mutedUntil";
    readonly leftAt: "leftAt";
};
export type ConversationParticipantScalarFieldEnum = (typeof ConversationParticipantScalarFieldEnum)[keyof typeof ConversationParticipantScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly conversationId: "conversationId";
    readonly senderId: "senderId";
    readonly type: "type";
    readonly status: "status";
    readonly body: "body";
    readonly mediaKey: "mediaKey";
    readonly mediaMimeType: "mediaMimeType";
    readonly mediaBytes: "mediaBytes";
    readonly mediaDuration: "mediaDuration";
    readonly clientKey: "clientKey";
    readonly replyToId: "replyToId";
    readonly isPaidIntro: "isPaidIntro";
    readonly createdAt: "createdAt";
    readonly editedAt: "editedAt";
    readonly deletedAt: "deletedAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const MessageReceiptScalarFieldEnum: {
    readonly messageId: "messageId";
    readonly userId: "userId";
    readonly deliveredAt: "deliveredAt";
    readonly readAt: "readAt";
};
export type MessageReceiptScalarFieldEnum = (typeof MessageReceiptScalarFieldEnum)[keyof typeof MessageReceiptScalarFieldEnum];
export declare const SwipeScalarFieldEnum: {
    readonly id: "id";
    readonly actorId: "actorId";
    readonly targetId: "targetId";
    readonly action: "action";
    readonly source: "source";
    readonly isRewound: "isRewound";
    readonly createdAt: "createdAt";
};
export type SwipeScalarFieldEnum = (typeof SwipeScalarFieldEnum)[keyof typeof SwipeScalarFieldEnum];
export declare const MatchScalarFieldEnum: {
    readonly id: "id";
    readonly userAId: "userAId";
    readonly userBId: "userBId";
    readonly status: "status";
    readonly fromSuperlike: "fromSuperlike";
    readonly matchedAt: "matchedAt";
    readonly lastInteractionAt: "lastInteractionAt";
    readonly expiresAt: "expiresAt";
    readonly unmatchedAt: "unmatchedAt";
    readonly unmatchedById: "unmatchedById";
};
export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];
export declare const RewindScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly swipeId: "swipeId";
    readonly wasFree: "wasFree";
    readonly createdAt: "createdAt";
};
export type RewindScalarFieldEnum = (typeof RewindScalarFieldEnum)[keyof typeof RewindScalarFieldEnum];
export declare const SwipeArchiveScalarFieldEnum: {
    readonly id: "id";
    readonly actorId: "actorId";
    readonly targetId: "targetId";
    readonly action: "action";
    readonly source: "source";
    readonly isRewound: "isRewound";
    readonly createdAt: "createdAt";
    readonly archivedAt: "archivedAt";
};
export type SwipeArchiveScalarFieldEnum = (typeof SwipeArchiveScalarFieldEnum)[keyof typeof SwipeArchiveScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly organizerId: "organizerId";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly cityId: "cityId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly locationLabel: "locationLabel";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly capacity: "capacity";
    readonly seatsWomen: "seatsWomen";
    readonly seatsMen: "seatsMen";
    readonly costAmount: "costAmount";
    readonly currencyCode: "currencyCode";
    readonly status: "status";
    readonly coverKey: "coverKey";
    readonly isSponsored: "isSponsored";
    readonly sponsorName: "sponsorName";
    readonly isPromoted: "isPromoted";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly publishedAt: "publishedAt";
    readonly cancelledAt: "cancelledAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const EventRequestScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly userId: "userId";
    readonly status: "status";
    readonly message: "message";
    readonly createdAt: "createdAt";
    readonly respondedAt: "respondedAt";
};
export type EventRequestScalarFieldEnum = (typeof EventRequestScalarFieldEnum)[keyof typeof EventRequestScalarFieldEnum];
export declare const EventCheckInScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly userId: "userId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly distanceM: "distanceM";
    readonly checkedInAt: "checkedInAt";
};
export type EventCheckInScalarFieldEnum = (typeof EventCheckInScalarFieldEnum)[keyof typeof EventCheckInScalarFieldEnum];
export declare const CityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly region: "region";
    readonly country: "country";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly radiusKm: "radiusKm";
    readonly activeUserCount: "activeUserCount";
    readonly boostSlots: "boostSlots";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly birthdate: "birthdate";
    readonly gender: "gender";
    readonly genderLabel: "genderLabel";
    readonly matchingBucket: "matchingBucket";
    readonly seeking: "seeking";
    readonly orientationEnc: "orientationEnc";
    readonly intention: "intention";
    readonly bio: "bio";
    readonly heightCm: "heightCm";
    readonly profession: "profession";
    readonly hasChildren: "hasChildren";
    readonly childrenCount: "childrenCount";
    readonly wantsChildren: "wantsChildren";
    readonly religion: "religion";
    readonly education: "education";
    readonly smoking: "smoking";
    readonly drinking: "drinking";
    readonly languages: "languages";
    readonly homeLatitude: "homeLatitude";
    readonly homeLongitude: "homeLongitude";
    readonly discoveryLatitude: "discoveryLatitude";
    readonly discoveryLongitude: "discoveryLongitude";
    readonly cityId: "cityId";
    readonly locationLabel: "locationLabel";
    readonly isVerified: "isVerified";
    readonly completionScore: "completionScore";
    readonly incognito: "incognito";
    readonly hideAge: "hideAge";
    readonly hideDistance: "hideDistance";
    readonly lastDeckRefreshAt: "lastDeckRefreshAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const PhotoScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly storageKey: "storageKey";
    readonly position: "position";
    readonly status: "status";
    readonly rejectionReason: "rejectionReason";
    readonly phash: "phash";
    readonly width: "width";
    readonly height: "height";
    readonly bytes: "bytes";
    readonly moderationScores: "moderationScores";
    readonly moderatedAt: "moderatedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum];
export declare const InterestScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly labelFr: "labelFr";
    readonly labelEn: "labelEn";
    readonly emoji: "emoji";
    readonly category: "category";
    readonly isActive: "isActive";
    readonly sortOrder: "sortOrder";
};
export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum];
export declare const ProfileInterestScalarFieldEnum: {
    readonly profileId: "profileId";
    readonly interestId: "interestId";
    readonly createdAt: "createdAt";
};
export type ProfileInterestScalarFieldEnum = (typeof ProfileInterestScalarFieldEnum)[keyof typeof ProfileInterestScalarFieldEnum];
export declare const PromptScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly textFr: "textFr";
    readonly textEn: "textEn";
    readonly category: "category";
    readonly isActive: "isActive";
    readonly sortOrder: "sortOrder";
};
export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum];
export declare const ProfilePromptScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly promptId: "promptId";
    readonly answer: "answer";
    readonly position: "position";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfilePromptScalarFieldEnum = (typeof ProfilePromptScalarFieldEnum)[keyof typeof ProfilePromptScalarFieldEnum];
export declare const PreferenceScalarFieldEnum: {
    readonly userId: "userId";
    readonly minAge: "minAge";
    readonly maxAge: "maxAge";
    readonly maxDistanceKm: "maxDistanceKm";
    readonly intentionFilter: "intentionFilter";
    readonly religionFilter: "religionFilter";
    readonly minHeightCm: "minHeightCm";
    readonly maxHeightCm: "maxHeightCm";
    readonly hasChildren: "hasChildren";
    readonly smokingFilter: "smokingFilter";
    readonly drinkingFilter: "drinkingFilter";
    readonly languagesFilter: "languagesFilter";
    readonly verifiedOnly: "verifiedOnly";
    readonly allowRadiusExpansion: "allowRadiusExpansion";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PreferenceScalarFieldEnum = (typeof PreferenceScalarFieldEnum)[keyof typeof PreferenceScalarFieldEnum];
export declare const ReportScalarFieldEnum: {
    readonly id: "id";
    readonly reporterId: "reporterId";
    readonly reportedUserId: "reportedUserId";
    readonly reason: "reason";
    readonly details: "details";
    readonly messageId: "messageId";
    readonly evidenceKeys: "evidenceKeys";
    readonly status: "status";
    readonly resolvedById: "resolvedById";
    readonly decision: "decision";
    readonly resolutionNote: "resolutionNote";
    readonly createdAt: "createdAt";
    readonly resolvedAt: "resolvedAt";
};
export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum];
export declare const BlockScalarFieldEnum: {
    readonly blockerId: "blockerId";
    readonly blockedId: "blockedId";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum];
export declare const ContactBlockScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly phoneHash: "phoneHash";
    readonly createdAt: "createdAt";
};
export type ContactBlockScalarFieldEnum = (typeof ContactBlockScalarFieldEnum)[keyof typeof ContactBlockScalarFieldEnum];
export declare const ModerationTaskScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly status: "status";
    readonly priority: "priority";
    readonly subjectUserId: "subjectUserId";
    readonly photoId: "photoId";
    readonly reportId: "reportId";
    readonly verificationId: "verificationId";
    readonly eventId: "eventId";
    readonly assignedToId: "assignedToId";
    readonly decision: "decision";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly claimedAt: "claimedAt";
    readonly resolvedAt: "resolvedAt";
};
export type ModerationTaskScalarFieldEnum = (typeof ModerationTaskScalarFieldEnum)[keyof typeof ModerationTaskScalarFieldEnum];
export declare const RiskScoreScalarFieldEnum: {
    readonly userId: "userId";
    readonly score: "score";
    readonly level: "level";
    readonly signals: "signals";
    readonly shadowBannedAt: "shadowBannedAt";
    readonly reviewedAt: "reviewedAt";
    readonly updatedAt: "updatedAt";
};
export type RiskScoreScalarFieldEnum = (typeof RiskScoreScalarFieldEnum)[keyof typeof RiskScoreScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly channel: "channel";
    readonly titleKey: "titleKey";
    readonly bodyKey: "bodyKey";
    readonly data: "data";
    readonly sentAt: "sentAt";
    readonly readAt: "readAt";
    readonly failedAt: "failedAt";
    readonly error: "error";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const NotificationPreferenceScalarFieldEnum: {
    readonly userId: "userId";
    readonly newMatch: "newMatch";
    readonly newMessage: "newMessage";
    readonly newLike: "newLike";
    readonly events: "events";
    readonly marketing: "marketing";
    readonly quietHoursStart: "quietHoursStart";
    readonly quietHoursEnd: "quietHoursEnd";
    readonly timezone: "timezone";
    readonly updatedAt: "updatedAt";
};
export type NotificationPreferenceScalarFieldEnum = (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum];
export declare const PushTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly deviceId: "deviceId";
    readonly token: "token";
    readonly platform: "platform";
    readonly isActive: "isActive";
    readonly lastUsedAt: "lastUsedAt";
    readonly createdAt: "createdAt";
};
export type PushTokenScalarFieldEnum = (typeof PushTokenScalarFieldEnum)[keyof typeof PushTokenScalarFieldEnum];
export declare const TranslationKeyScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly namespace: "namespace";
    readonly fr: "fr";
    readonly en: "en";
    readonly updatedAt: "updatedAt";
};
export type TranslationKeyScalarFieldEnum = (typeof TranslationKeyScalarFieldEnum)[keyof typeof TranslationKeyScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly actorId: "actorId";
    readonly actorType: "actorType";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly before: "before";
    readonly after: "after";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const TravelSessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly cityId: "cityId";
    readonly locationLabel: "locationLabel";
    readonly wasFree: "wasFree";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
};
export type TravelSessionScalarFieldEnum = (typeof TravelSessionScalarFieldEnum)[keyof typeof TravelSessionScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly status: "status";
    readonly poseChallenge: "poseChallenge";
    readonly livenessScore: "livenessScore";
    readonly matchScore: "matchScore";
    readonly failureReason: "failureReason";
    readonly attempts: "attempts";
    readonly captureKey: "captureKey";
    readonly captureWiped: "captureWiped";
    readonly reviewedById: "reviewedById";
    readonly reviewNote: "reviewNote";
    readonly createdAt: "createdAt";
    readonly submittedAt: "submittedAt";
    readonly processedAt: "processedAt";
    readonly expiresAt: "expiresAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const FaceEmbeddingScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly verificationId: "verificationId";
    readonly model: "model";
    readonly dimension: "dimension";
    readonly duplicateOfUserId: "duplicateOfUserId";
    readonly duplicateDistance: "duplicateDistance";
    readonly createdAt: "createdAt";
};
export type FaceEmbeddingScalarFieldEnum = (typeof FaceEmbeddingScalarFieldEnum)[keyof typeof FaceEmbeddingScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>;
export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>;
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumAppLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppLocale'>;
export type ListEnumAppLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppLocale[]'>;
export type EnumDevicePlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DevicePlatform'>;
export type ListEnumDevicePlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DevicePlatform[]'>;
export type EnumIntegrityVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrityVerdict'>;
export type ListEnumIntegrityVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrityVerdict[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumOtpChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpChannel'>;
export type ListEnumOtpChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpChannel[]'>;
export type EnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose'>;
export type ListEnumOtpPurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpPurpose[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumReferralStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralStatus'>;
export type ListEnumReferralStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralStatus[]'>;
export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType'>;
export type ListEnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType[]'>;
export type EnumBoostTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoostTier'>;
export type ListEnumBoostTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoostTier[]'>;
export type EnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier'>;
export type ListEnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier[]'>;
export type EnumPaymentProviderKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProviderKind'>;
export type ListEnumPaymentProviderKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProviderKind[]'>;
export type EnumMobileMoneyOperatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MobileMoneyOperator'>;
export type ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MobileMoneyOperator[]'>;
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
export type EnumLedgerReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerReason'>;
export type ListEnumLedgerReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerReason[]'>;
export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>;
export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>;
export type EnumEntitlementKeyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntitlementKey'>;
export type ListEnumEntitlementKeyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntitlementKey[]'>;
export type EnumEntitlementSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntitlementSource'>;
export type ListEnumEntitlementSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntitlementSource[]'>;
export type EnumBoostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoostStatus'>;
export type ListEnumBoostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoostStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumConversationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationType'>;
export type ListEnumConversationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationType[]'>;
export type EnumConversationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationStatus'>;
export type ListEnumConversationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationStatus[]'>;
export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>;
export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>;
export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>;
export type ListEnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus[]'>;
export type EnumSwipeActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeAction'>;
export type ListEnumSwipeActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeAction[]'>;
export type EnumSwipeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeSource'>;
export type ListEnumSwipeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeSource[]'>;
export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>;
export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>;
export type EnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory'>;
export type ListEnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory[]'>;
export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>;
export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>;
export type EnumEventRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventRequestStatus'>;
export type ListEnumEventRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventRequestStatus[]'>;
export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>;
export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>;
export type EnumMatchingBucketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchingBucket'>;
export type ListEnumMatchingBucketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchingBucket[]'>;
export type ListEnumSeekingTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeekingTarget[]'>;
export type EnumSeekingTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeekingTarget'>;
export type EnumIntentionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intention'>;
export type ListEnumIntentionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intention[]'>;
export type EnumReligionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Religion'>;
export type ListEnumReligionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Religion[]'>;
export type EnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel'>;
export type ListEnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel[]'>;
export type EnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency'>;
export type ListEnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency[]'>;
export type EnumPhotoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhotoStatus'>;
export type ListEnumPhotoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhotoStatus[]'>;
export type EnumPhotoRejectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhotoRejectionReason'>;
export type ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhotoRejectionReason[]'>;
export type EnumReportReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportReason'>;
export type ListEnumReportReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportReason[]'>;
export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>;
export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>;
export type EnumModerationDecisionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationDecision'>;
export type ListEnumModerationDecisionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationDecision[]'>;
export type EnumModerationTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationTaskType'>;
export type ListEnumModerationTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationTaskType[]'>;
export type EnumModerationTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationTaskStatus'>;
export type ListEnumModerationTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationTaskStatus[]'>;
export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>;
export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>;
export type ListEnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel[]'>;
export type EnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType'>;
export type ListEnumActorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActorType[]'>;
export type EnumVerificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationType'>;
export type ListEnumVerificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationType[]'>;
export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>;
export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>;
export type EnumVerificationFailureReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationFailureReason'>;
export type ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationFailureReason[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    session?: Prisma.SessionOmit;
    device?: Prisma.DeviceOmit;
    otpCode?: Prisma.OtpCodeOmit;
    referral?: Prisma.ReferralOmit;
    currency?: Prisma.CurrencyOmit;
    product?: Prisma.ProductOmit;
    paymentIntent?: Prisma.PaymentIntentOmit;
    purchase?: Prisma.PurchaseOmit;
    creditLedger?: Prisma.CreditLedgerOmit;
    subscription?: Prisma.SubscriptionOmit;
    entitlement?: Prisma.EntitlementOmit;
    boost?: Prisma.BoostOmit;
    conversation?: Prisma.ConversationOmit;
    conversationParticipant?: Prisma.ConversationParticipantOmit;
    message?: Prisma.MessageOmit;
    messageReceipt?: Prisma.MessageReceiptOmit;
    swipe?: Prisma.SwipeOmit;
    match?: Prisma.MatchOmit;
    rewind?: Prisma.RewindOmit;
    swipeArchive?: Prisma.SwipeArchiveOmit;
    event?: Prisma.EventOmit;
    eventRequest?: Prisma.EventRequestOmit;
    eventCheckIn?: Prisma.EventCheckInOmit;
    city?: Prisma.CityOmit;
    profile?: Prisma.ProfileOmit;
    photo?: Prisma.PhotoOmit;
    interest?: Prisma.InterestOmit;
    profileInterest?: Prisma.ProfileInterestOmit;
    prompt?: Prisma.PromptOmit;
    profilePrompt?: Prisma.ProfilePromptOmit;
    preference?: Prisma.PreferenceOmit;
    report?: Prisma.ReportOmit;
    block?: Prisma.BlockOmit;
    contactBlock?: Prisma.ContactBlockOmit;
    moderationTask?: Prisma.ModerationTaskOmit;
    riskScore?: Prisma.RiskScoreOmit;
    notification?: Prisma.NotificationOmit;
    notificationPreference?: Prisma.NotificationPreferenceOmit;
    pushToken?: Prisma.PushTokenOmit;
    translationKey?: Prisma.TranslationKeyOmit;
    auditLog?: Prisma.AuditLogOmit;
    travelSession?: Prisma.TravelSessionOmit;
    verification?: Prisma.VerificationOmit;
    faceEmbedding?: Prisma.FaceEmbeddingOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
