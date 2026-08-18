import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificationPreferenceModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationPreferencePayload>;
export type AggregateNotificationPreference = {
    _count: NotificationPreferenceCountAggregateOutputType | null;
    _avg: NotificationPreferenceAvgAggregateOutputType | null;
    _sum: NotificationPreferenceSumAggregateOutputType | null;
    _min: NotificationPreferenceMinAggregateOutputType | null;
    _max: NotificationPreferenceMaxAggregateOutputType | null;
};
export type NotificationPreferenceAvgAggregateOutputType = {
    quietHoursStart: number | null;
    quietHoursEnd: number | null;
};
export type NotificationPreferenceSumAggregateOutputType = {
    quietHoursStart: number | null;
    quietHoursEnd: number | null;
};
export type NotificationPreferenceMinAggregateOutputType = {
    userId: string | null;
    newMatch: boolean | null;
    newMessage: boolean | null;
    newLike: boolean | null;
    events: boolean | null;
    marketing: boolean | null;
    quietHoursStart: number | null;
    quietHoursEnd: number | null;
    timezone: string | null;
    updatedAt: Date | null;
};
export type NotificationPreferenceMaxAggregateOutputType = {
    userId: string | null;
    newMatch: boolean | null;
    newMessage: boolean | null;
    newLike: boolean | null;
    events: boolean | null;
    marketing: boolean | null;
    quietHoursStart: number | null;
    quietHoursEnd: number | null;
    timezone: string | null;
    updatedAt: Date | null;
};
export type NotificationPreferenceCountAggregateOutputType = {
    userId: number;
    newMatch: number;
    newMessage: number;
    newLike: number;
    events: number;
    marketing: number;
    quietHoursStart: number;
    quietHoursEnd: number;
    timezone: number;
    updatedAt: number;
    _all: number;
};
export type NotificationPreferenceAvgAggregateInputType = {
    quietHoursStart?: true;
    quietHoursEnd?: true;
};
export type NotificationPreferenceSumAggregateInputType = {
    quietHoursStart?: true;
    quietHoursEnd?: true;
};
export type NotificationPreferenceMinAggregateInputType = {
    userId?: true;
    newMatch?: true;
    newMessage?: true;
    newLike?: true;
    events?: true;
    marketing?: true;
    quietHoursStart?: true;
    quietHoursEnd?: true;
    timezone?: true;
    updatedAt?: true;
};
export type NotificationPreferenceMaxAggregateInputType = {
    userId?: true;
    newMatch?: true;
    newMessage?: true;
    newLike?: true;
    events?: true;
    marketing?: true;
    quietHoursStart?: true;
    quietHoursEnd?: true;
    timezone?: true;
    updatedAt?: true;
};
export type NotificationPreferenceCountAggregateInputType = {
    userId?: true;
    newMatch?: true;
    newMessage?: true;
    newLike?: true;
    events?: true;
    marketing?: true;
    quietHoursStart?: true;
    quietHoursEnd?: true;
    timezone?: true;
    updatedAt?: true;
    _all?: true;
};
export type NotificationPreferenceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationPreferenceWhereInput;
    orderBy?: Prisma.NotificationPreferenceOrderByWithRelationInput | Prisma.NotificationPreferenceOrderByWithRelationInput[];
    cursor?: Prisma.NotificationPreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationPreferenceCountAggregateInputType;
    _avg?: NotificationPreferenceAvgAggregateInputType;
    _sum?: NotificationPreferenceSumAggregateInputType;
    _min?: NotificationPreferenceMinAggregateInputType;
    _max?: NotificationPreferenceMaxAggregateInputType;
};
export type GetNotificationPreferenceAggregateType<T extends NotificationPreferenceAggregateArgs> = {
    [P in keyof T & keyof AggregateNotificationPreference]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotificationPreference[P]> : Prisma.GetScalarType<T[P], AggregateNotificationPreference[P]>;
};
export type NotificationPreferenceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationPreferenceWhereInput;
    orderBy?: Prisma.NotificationPreferenceOrderByWithAggregationInput | Prisma.NotificationPreferenceOrderByWithAggregationInput[];
    by: Prisma.NotificationPreferenceScalarFieldEnum[] | Prisma.NotificationPreferenceScalarFieldEnum;
    having?: Prisma.NotificationPreferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationPreferenceCountAggregateInputType | true;
    _avg?: NotificationPreferenceAvgAggregateInputType;
    _sum?: NotificationPreferenceSumAggregateInputType;
    _min?: NotificationPreferenceMinAggregateInputType;
    _max?: NotificationPreferenceMaxAggregateInputType;
};
export type NotificationPreferenceGroupByOutputType = {
    userId: string;
    newMatch: boolean;
    newMessage: boolean;
    newLike: boolean;
    events: boolean;
    marketing: boolean;
    quietHoursStart: number | null;
    quietHoursEnd: number | null;
    timezone: string;
    updatedAt: Date;
    _count: NotificationPreferenceCountAggregateOutputType | null;
    _avg: NotificationPreferenceAvgAggregateOutputType | null;
    _sum: NotificationPreferenceSumAggregateOutputType | null;
    _min: NotificationPreferenceMinAggregateOutputType | null;
    _max: NotificationPreferenceMaxAggregateOutputType | null;
};
export type GetNotificationPreferenceGroupByPayload<T extends NotificationPreferenceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationPreferenceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationPreferenceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationPreferenceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationPreferenceGroupByOutputType[P]>;
}>>;
export type NotificationPreferenceWhereInput = {
    AND?: Prisma.NotificationPreferenceWhereInput | Prisma.NotificationPreferenceWhereInput[];
    OR?: Prisma.NotificationPreferenceWhereInput[];
    NOT?: Prisma.NotificationPreferenceWhereInput | Prisma.NotificationPreferenceWhereInput[];
    userId?: Prisma.UuidFilter<"NotificationPreference"> | string;
    newMatch?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    newMessage?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    newLike?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    events?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    marketing?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    quietHoursStart?: Prisma.IntNullableFilter<"NotificationPreference"> | number | null;
    quietHoursEnd?: Prisma.IntNullableFilter<"NotificationPreference"> | number | null;
    timezone?: Prisma.StringFilter<"NotificationPreference"> | string;
    updatedAt?: Prisma.DateTimeFilter<"NotificationPreference"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type NotificationPreferenceOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    newMatch?: Prisma.SortOrder;
    newMessage?: Prisma.SortOrder;
    newLike?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    marketing?: Prisma.SortOrder;
    quietHoursStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    quietHoursEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type NotificationPreferenceWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.NotificationPreferenceWhereInput | Prisma.NotificationPreferenceWhereInput[];
    OR?: Prisma.NotificationPreferenceWhereInput[];
    NOT?: Prisma.NotificationPreferenceWhereInput | Prisma.NotificationPreferenceWhereInput[];
    newMatch?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    newMessage?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    newLike?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    events?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    marketing?: Prisma.BoolFilter<"NotificationPreference"> | boolean;
    quietHoursStart?: Prisma.IntNullableFilter<"NotificationPreference"> | number | null;
    quietHoursEnd?: Prisma.IntNullableFilter<"NotificationPreference"> | number | null;
    timezone?: Prisma.StringFilter<"NotificationPreference"> | string;
    updatedAt?: Prisma.DateTimeFilter<"NotificationPreference"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId">;
export type NotificationPreferenceOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    newMatch?: Prisma.SortOrder;
    newMessage?: Prisma.SortOrder;
    newLike?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    marketing?: Prisma.SortOrder;
    quietHoursStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    quietHoursEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.NotificationPreferenceCountOrderByAggregateInput;
    _avg?: Prisma.NotificationPreferenceAvgOrderByAggregateInput;
    _max?: Prisma.NotificationPreferenceMaxOrderByAggregateInput;
    _min?: Prisma.NotificationPreferenceMinOrderByAggregateInput;
    _sum?: Prisma.NotificationPreferenceSumOrderByAggregateInput;
};
export type NotificationPreferenceScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationPreferenceScalarWhereWithAggregatesInput | Prisma.NotificationPreferenceScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationPreferenceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationPreferenceScalarWhereWithAggregatesInput | Prisma.NotificationPreferenceScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"NotificationPreference"> | string;
    newMatch?: Prisma.BoolWithAggregatesFilter<"NotificationPreference"> | boolean;
    newMessage?: Prisma.BoolWithAggregatesFilter<"NotificationPreference"> | boolean;
    newLike?: Prisma.BoolWithAggregatesFilter<"NotificationPreference"> | boolean;
    events?: Prisma.BoolWithAggregatesFilter<"NotificationPreference"> | boolean;
    marketing?: Prisma.BoolWithAggregatesFilter<"NotificationPreference"> | boolean;
    quietHoursStart?: Prisma.IntNullableWithAggregatesFilter<"NotificationPreference"> | number | null;
    quietHoursEnd?: Prisma.IntNullableWithAggregatesFilter<"NotificationPreference"> | number | null;
    timezone?: Prisma.StringWithAggregatesFilter<"NotificationPreference"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"NotificationPreference"> | Date | string;
};
export type NotificationPreferenceCreateInput = {
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: number | null;
    quietHoursEnd?: number | null;
    timezone?: string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutNotificationPreferenceInput;
};
export type NotificationPreferenceUncheckedCreateInput = {
    userId: string;
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: number | null;
    quietHoursEnd?: number | null;
    timezone?: string;
    updatedAt?: Date | string;
};
export type NotificationPreferenceUpdateInput = {
    newMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newMessage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newLike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    events?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marketing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quietHoursStart?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quietHoursEnd?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationPreferenceNestedInput;
};
export type NotificationPreferenceUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    newMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newMessage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newLike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    events?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marketing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quietHoursStart?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quietHoursEnd?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationPreferenceCreateManyInput = {
    userId: string;
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: number | null;
    quietHoursEnd?: number | null;
    timezone?: string;
    updatedAt?: Date | string;
};
export type NotificationPreferenceUpdateManyMutationInput = {
    newMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newMessage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newLike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    events?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marketing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quietHoursStart?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quietHoursEnd?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationPreferenceUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    newMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newMessage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newLike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    events?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marketing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quietHoursStart?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quietHoursEnd?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationPreferenceNullableScalarRelationFilter = {
    is?: Prisma.NotificationPreferenceWhereInput | null;
    isNot?: Prisma.NotificationPreferenceWhereInput | null;
};
export type NotificationPreferenceCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    newMatch?: Prisma.SortOrder;
    newMessage?: Prisma.SortOrder;
    newLike?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    marketing?: Prisma.SortOrder;
    quietHoursStart?: Prisma.SortOrder;
    quietHoursEnd?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationPreferenceAvgOrderByAggregateInput = {
    quietHoursStart?: Prisma.SortOrder;
    quietHoursEnd?: Prisma.SortOrder;
};
export type NotificationPreferenceMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    newMatch?: Prisma.SortOrder;
    newMessage?: Prisma.SortOrder;
    newLike?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    marketing?: Prisma.SortOrder;
    quietHoursStart?: Prisma.SortOrder;
    quietHoursEnd?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationPreferenceMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    newMatch?: Prisma.SortOrder;
    newMessage?: Prisma.SortOrder;
    newLike?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    marketing?: Prisma.SortOrder;
    quietHoursStart?: Prisma.SortOrder;
    quietHoursEnd?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NotificationPreferenceSumOrderByAggregateInput = {
    quietHoursStart?: Prisma.SortOrder;
    quietHoursEnd?: Prisma.SortOrder;
};
export type NotificationPreferenceCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationPreferenceCreateWithoutUserInput, Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NotificationPreferenceCreateOrConnectWithoutUserInput;
    connect?: Prisma.NotificationPreferenceWhereUniqueInput;
};
export type NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationPreferenceCreateWithoutUserInput, Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NotificationPreferenceCreateOrConnectWithoutUserInput;
    connect?: Prisma.NotificationPreferenceWhereUniqueInput;
};
export type NotificationPreferenceUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationPreferenceCreateWithoutUserInput, Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NotificationPreferenceCreateOrConnectWithoutUserInput;
    upsert?: Prisma.NotificationPreferenceUpsertWithoutUserInput;
    disconnect?: Prisma.NotificationPreferenceWhereInput | boolean;
    delete?: Prisma.NotificationPreferenceWhereInput | boolean;
    connect?: Prisma.NotificationPreferenceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotificationPreferenceUpdateToOneWithWhereWithoutUserInput, Prisma.NotificationPreferenceUpdateWithoutUserInput>, Prisma.NotificationPreferenceUncheckedUpdateWithoutUserInput>;
};
export type NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationPreferenceCreateWithoutUserInput, Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NotificationPreferenceCreateOrConnectWithoutUserInput;
    upsert?: Prisma.NotificationPreferenceUpsertWithoutUserInput;
    disconnect?: Prisma.NotificationPreferenceWhereInput | boolean;
    delete?: Prisma.NotificationPreferenceWhereInput | boolean;
    connect?: Prisma.NotificationPreferenceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotificationPreferenceUpdateToOneWithWhereWithoutUserInput, Prisma.NotificationPreferenceUpdateWithoutUserInput>, Prisma.NotificationPreferenceUncheckedUpdateWithoutUserInput>;
};
export type NotificationPreferenceCreateWithoutUserInput = {
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: number | null;
    quietHoursEnd?: number | null;
    timezone?: string;
    updatedAt?: Date | string;
};
export type NotificationPreferenceUncheckedCreateWithoutUserInput = {
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: number | null;
    quietHoursEnd?: number | null;
    timezone?: string;
    updatedAt?: Date | string;
};
export type NotificationPreferenceCreateOrConnectWithoutUserInput = {
    where: Prisma.NotificationPreferenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationPreferenceCreateWithoutUserInput, Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput>;
};
export type NotificationPreferenceUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.NotificationPreferenceUpdateWithoutUserInput, Prisma.NotificationPreferenceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.NotificationPreferenceCreateWithoutUserInput, Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput>;
    where?: Prisma.NotificationPreferenceWhereInput;
};
export type NotificationPreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.NotificationPreferenceWhereInput;
    data: Prisma.XOR<Prisma.NotificationPreferenceUpdateWithoutUserInput, Prisma.NotificationPreferenceUncheckedUpdateWithoutUserInput>;
};
export type NotificationPreferenceUpdateWithoutUserInput = {
    newMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newMessage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newLike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    events?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marketing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quietHoursStart?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quietHoursEnd?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationPreferenceUncheckedUpdateWithoutUserInput = {
    newMatch?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newMessage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    newLike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    events?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    marketing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    quietHoursStart?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quietHoursEnd?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationPreferenceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: boolean;
    quietHoursEnd?: boolean;
    timezone?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationPreference"]>;
export type NotificationPreferenceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: boolean;
    quietHoursEnd?: boolean;
    timezone?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationPreference"]>;
export type NotificationPreferenceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: boolean;
    quietHoursEnd?: boolean;
    timezone?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationPreference"]>;
export type NotificationPreferenceSelectScalar = {
    userId?: boolean;
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: boolean;
    quietHoursEnd?: boolean;
    timezone?: boolean;
    updatedAt?: boolean;
};
export type NotificationPreferenceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "newMatch" | "newMessage" | "newLike" | "events" | "marketing" | "quietHoursStart" | "quietHoursEnd" | "timezone" | "updatedAt", ExtArgs["result"]["notificationPreference"]>;
export type NotificationPreferenceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type NotificationPreferenceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type NotificationPreferenceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $NotificationPreferencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotificationPreference";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        newMatch: boolean;
        newMessage: boolean;
        newLike: boolean;
        events: boolean;
        marketing: boolean;
        quietHoursStart: number | null;
        quietHoursEnd: number | null;
        timezone: string;
        updatedAt: Date;
    }, ExtArgs["result"]["notificationPreference"]>;
    composites: {};
};
export type NotificationPreferenceGetPayload<S extends boolean | null | undefined | NotificationPreferenceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload, S>;
export type NotificationPreferenceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationPreferenceCountAggregateInputType | true;
};
export interface NotificationPreferenceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotificationPreference'];
        meta: {
            name: 'NotificationPreference';
        };
    };
    findUnique<T extends NotificationPreferenceFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationPreferenceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationPreferenceFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationPreferenceFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationPreferenceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationPreferenceFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationPreferenceCreateArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationPreferenceCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationPreferenceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationPreferenceDeleteArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationPreferenceUpdateArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationPreferenceDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationPreferenceUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationPreferenceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationPreferenceUpsertArgs>(args: Prisma.SelectSubset<T, NotificationPreferenceUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationPreferenceClient<runtime.Types.Result.GetResult<Prisma.$NotificationPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationPreferenceCountArgs>(args?: Prisma.Subset<T, NotificationPreferenceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationPreferenceCountAggregateOutputType> : number>;
    aggregate<T extends NotificationPreferenceAggregateArgs>(args: Prisma.Subset<T, NotificationPreferenceAggregateArgs>): Prisma.PrismaPromise<GetNotificationPreferenceAggregateType<T>>;
    groupBy<T extends NotificationPreferenceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationPreferenceGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationPreferenceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationPreferenceFieldRefs;
}
export interface Prisma__NotificationPreferenceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationPreferenceFieldRefs {
    readonly userId: Prisma.FieldRef<"NotificationPreference", 'String'>;
    readonly newMatch: Prisma.FieldRef<"NotificationPreference", 'Boolean'>;
    readonly newMessage: Prisma.FieldRef<"NotificationPreference", 'Boolean'>;
    readonly newLike: Prisma.FieldRef<"NotificationPreference", 'Boolean'>;
    readonly events: Prisma.FieldRef<"NotificationPreference", 'Boolean'>;
    readonly marketing: Prisma.FieldRef<"NotificationPreference", 'Boolean'>;
    readonly quietHoursStart: Prisma.FieldRef<"NotificationPreference", 'Int'>;
    readonly quietHoursEnd: Prisma.FieldRef<"NotificationPreference", 'Int'>;
    readonly timezone: Prisma.FieldRef<"NotificationPreference", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"NotificationPreference", 'DateTime'>;
}
export type NotificationPreferenceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where: Prisma.NotificationPreferenceWhereUniqueInput;
};
export type NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where: Prisma.NotificationPreferenceWhereUniqueInput;
};
export type NotificationPreferenceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where?: Prisma.NotificationPreferenceWhereInput;
    orderBy?: Prisma.NotificationPreferenceOrderByWithRelationInput | Prisma.NotificationPreferenceOrderByWithRelationInput[];
    cursor?: Prisma.NotificationPreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationPreferenceScalarFieldEnum | Prisma.NotificationPreferenceScalarFieldEnum[];
};
export type NotificationPreferenceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where?: Prisma.NotificationPreferenceWhereInput;
    orderBy?: Prisma.NotificationPreferenceOrderByWithRelationInput | Prisma.NotificationPreferenceOrderByWithRelationInput[];
    cursor?: Prisma.NotificationPreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationPreferenceScalarFieldEnum | Prisma.NotificationPreferenceScalarFieldEnum[];
};
export type NotificationPreferenceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where?: Prisma.NotificationPreferenceWhereInput;
    orderBy?: Prisma.NotificationPreferenceOrderByWithRelationInput | Prisma.NotificationPreferenceOrderByWithRelationInput[];
    cursor?: Prisma.NotificationPreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationPreferenceScalarFieldEnum | Prisma.NotificationPreferenceScalarFieldEnum[];
};
export type NotificationPreferenceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationPreferenceCreateInput, Prisma.NotificationPreferenceUncheckedCreateInput>;
};
export type NotificationPreferenceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationPreferenceCreateManyInput | Prisma.NotificationPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationPreferenceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    data: Prisma.NotificationPreferenceCreateManyInput | Prisma.NotificationPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationPreferenceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationPreferenceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationPreferenceUpdateInput, Prisma.NotificationPreferenceUncheckedUpdateInput>;
    where: Prisma.NotificationPreferenceWhereUniqueInput;
};
export type NotificationPreferenceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationPreferenceUpdateManyMutationInput, Prisma.NotificationPreferenceUncheckedUpdateManyInput>;
    where?: Prisma.NotificationPreferenceWhereInput;
    limit?: number;
};
export type NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationPreferenceUpdateManyMutationInput, Prisma.NotificationPreferenceUncheckedUpdateManyInput>;
    where?: Prisma.NotificationPreferenceWhereInput;
    limit?: number;
    include?: Prisma.NotificationPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationPreferenceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where: Prisma.NotificationPreferenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationPreferenceCreateInput, Prisma.NotificationPreferenceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationPreferenceUpdateInput, Prisma.NotificationPreferenceUncheckedUpdateInput>;
};
export type NotificationPreferenceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
    where: Prisma.NotificationPreferenceWhereUniqueInput;
};
export type NotificationPreferenceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationPreferenceWhereInput;
    limit?: number;
};
export type NotificationPreferenceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationPreferenceSelect<ExtArgs> | null;
    omit?: Prisma.NotificationPreferenceOmit<ExtArgs> | null;
    include?: Prisma.NotificationPreferenceInclude<ExtArgs> | null;
};
