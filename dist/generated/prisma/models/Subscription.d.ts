import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$SubscriptionPayload>;
export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tier: $Enums.SubscriptionTier | null;
    status: $Enums.SubscriptionStatus | null;
    purchaseId: string | null;
    provider: $Enums.PaymentProviderKind | null;
    startedAt: Date | null;
    expiresAt: Date | null;
    autoRenew: boolean | null;
    graceUntil: Date | null;
    cancelledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tier: $Enums.SubscriptionTier | null;
    status: $Enums.SubscriptionStatus | null;
    purchaseId: string | null;
    provider: $Enums.PaymentProviderKind | null;
    startedAt: Date | null;
    expiresAt: Date | null;
    autoRenew: boolean | null;
    graceUntil: Date | null;
    cancelledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubscriptionCountAggregateOutputType = {
    id: number;
    userId: number;
    tier: number;
    status: number;
    purchaseId: number;
    provider: number;
    startedAt: number;
    expiresAt: number;
    autoRenew: number;
    graceUntil: number;
    cancelledAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubscriptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    tier?: true;
    status?: true;
    purchaseId?: true;
    provider?: true;
    startedAt?: true;
    expiresAt?: true;
    autoRenew?: true;
    graceUntil?: true;
    cancelledAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubscriptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    tier?: true;
    status?: true;
    purchaseId?: true;
    provider?: true;
    startedAt?: true;
    expiresAt?: true;
    autoRenew?: true;
    graceUntil?: true;
    cancelledAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubscriptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    tier?: true;
    status?: true;
    purchaseId?: true;
    provider?: true;
    startedAt?: true;
    expiresAt?: true;
    autoRenew?: true;
    graceUntil?: true;
    cancelledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubscriptionCountAggregateInputType;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscription[P]> : Prisma.GetScalarType<T[P], AggregateSubscription[P]>;
};
export type SubscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithAggregationInput | Prisma.SubscriptionOrderByWithAggregationInput[];
    by: Prisma.SubscriptionScalarFieldEnum[] | Prisma.SubscriptionScalarFieldEnum;
    having?: Prisma.SubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type SubscriptionGroupByOutputType = {
    id: string;
    userId: string;
    tier: $Enums.SubscriptionTier;
    status: $Enums.SubscriptionStatus;
    purchaseId: string | null;
    provider: $Enums.PaymentProviderKind;
    startedAt: Date;
    expiresAt: Date;
    autoRenew: boolean;
    graceUntil: Date | null;
    cancelledAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
export type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubscriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
}>>;
export type SubscriptionWhereInput = {
    AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    OR?: Prisma.SubscriptionWhereInput[];
    NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    id?: Prisma.UuidFilter<"Subscription"> | string;
    userId?: Prisma.UuidFilter<"Subscription"> | string;
    tier?: Prisma.EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus;
    purchaseId?: Prisma.UuidNullableFilter<"Subscription"> | string | null;
    provider?: Prisma.EnumPaymentProviderKindFilter<"Subscription"> | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    autoRenew?: Prisma.BoolFilter<"Subscription"> | boolean;
    graceUntil?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    purchase?: Prisma.XOR<Prisma.PurchaseNullableScalarRelationFilter, Prisma.PurchaseWhereInput> | null;
};
export type SubscriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    autoRenew?: Prisma.SortOrder;
    graceUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    purchase?: Prisma.PurchaseOrderByWithRelationInput;
};
export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    purchaseId?: string;
    AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    OR?: Prisma.SubscriptionWhereInput[];
    NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    userId?: Prisma.UuidFilter<"Subscription"> | string;
    tier?: Prisma.EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus;
    provider?: Prisma.EnumPaymentProviderKindFilter<"Subscription"> | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    autoRenew?: Prisma.BoolFilter<"Subscription"> | boolean;
    graceUntil?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    purchase?: Prisma.XOR<Prisma.PurchaseNullableScalarRelationFilter, Prisma.PurchaseWhereInput> | null;
}, "id" | "purchaseId">;
export type SubscriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    autoRenew?: Prisma.SortOrder;
    graceUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubscriptionCountOrderByAggregateInput;
    _max?: Prisma.SubscriptionMaxOrderByAggregateInput;
    _min?: Prisma.SubscriptionMinOrderByAggregateInput;
};
export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Subscription"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Subscription"> | string;
    tier?: Prisma.EnumSubscriptionTierWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus;
    purchaseId?: Prisma.UuidNullableWithAggregatesFilter<"Subscription"> | string | null;
    provider?: Prisma.EnumPaymentProviderKindWithAggregatesFilter<"Subscription"> | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    autoRenew?: Prisma.BoolWithAggregatesFilter<"Subscription"> | boolean;
    graceUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
};
export type SubscriptionCreateInput = {
    id?: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubscriptionsInput;
    purchase?: Prisma.PurchaseCreateNestedOneWithoutSubscriptionInput;
};
export type SubscriptionUncheckedCreateInput = {
    id?: string;
    userId: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    purchaseId?: string | null;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubscriptionsNestedInput;
    purchase?: Prisma.PurchaseUpdateOneWithoutSubscriptionNestedInput;
};
export type SubscriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionCreateManyInput = {
    id?: string;
    userId: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    purchaseId?: string | null;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionListRelationFilter = {
    every?: Prisma.SubscriptionWhereInput;
    some?: Prisma.SubscriptionWhereInput;
    none?: Prisma.SubscriptionWhereInput;
};
export type SubscriptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubscriptionNullableScalarRelationFilter = {
    is?: Prisma.SubscriptionWhereInput | null;
    isNot?: Prisma.SubscriptionWhereInput | null;
};
export type SubscriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    autoRenew?: Prisma.SortOrder;
    graceUntil?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    autoRenew?: Prisma.SortOrder;
    graceUntil?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    autoRenew?: Prisma.SortOrder;
    graceUntil?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutUserInput, Prisma.SubscriptionUncheckedCreateWithoutUserInput> | Prisma.SubscriptionCreateWithoutUserInput[] | Prisma.SubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutUserInput | Prisma.SubscriptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SubscriptionCreateManyUserInputEnvelope;
    connect?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
};
export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutUserInput, Prisma.SubscriptionUncheckedCreateWithoutUserInput> | Prisma.SubscriptionCreateWithoutUserInput[] | Prisma.SubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutUserInput | Prisma.SubscriptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SubscriptionCreateManyUserInputEnvelope;
    connect?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
};
export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutUserInput, Prisma.SubscriptionUncheckedCreateWithoutUserInput> | Prisma.SubscriptionCreateWithoutUserInput[] | Prisma.SubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutUserInput | Prisma.SubscriptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SubscriptionUpsertWithWhereUniqueWithoutUserInput | Prisma.SubscriptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SubscriptionCreateManyUserInputEnvelope;
    set?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    disconnect?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    delete?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    connect?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    update?: Prisma.SubscriptionUpdateWithWhereUniqueWithoutUserInput | Prisma.SubscriptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SubscriptionUpdateManyWithWhereWithoutUserInput | Prisma.SubscriptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SubscriptionScalarWhereInput | Prisma.SubscriptionScalarWhereInput[];
};
export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutUserInput, Prisma.SubscriptionUncheckedCreateWithoutUserInput> | Prisma.SubscriptionCreateWithoutUserInput[] | Prisma.SubscriptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutUserInput | Prisma.SubscriptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SubscriptionUpsertWithWhereUniqueWithoutUserInput | Prisma.SubscriptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SubscriptionCreateManyUserInputEnvelope;
    set?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    disconnect?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    delete?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    connect?: Prisma.SubscriptionWhereUniqueInput | Prisma.SubscriptionWhereUniqueInput[];
    update?: Prisma.SubscriptionUpdateWithWhereUniqueWithoutUserInput | Prisma.SubscriptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SubscriptionUpdateManyWithWhereWithoutUserInput | Prisma.SubscriptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SubscriptionScalarWhereInput | Prisma.SubscriptionScalarWhereInput[];
};
export type SubscriptionCreateNestedOneWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutPurchaseInput, Prisma.SubscriptionUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutPurchaseInput;
    connect?: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutPurchaseInput, Prisma.SubscriptionUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutPurchaseInput;
    connect?: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUpdateOneWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutPurchaseInput, Prisma.SubscriptionUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutPurchaseInput;
    upsert?: Prisma.SubscriptionUpsertWithoutPurchaseInput;
    disconnect?: Prisma.SubscriptionWhereInput | boolean;
    delete?: Prisma.SubscriptionWhereInput | boolean;
    connect?: Prisma.SubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubscriptionUpdateToOneWithWhereWithoutPurchaseInput, Prisma.SubscriptionUpdateWithoutPurchaseInput>, Prisma.SubscriptionUncheckedUpdateWithoutPurchaseInput>;
};
export type SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutPurchaseInput, Prisma.SubscriptionUncheckedCreateWithoutPurchaseInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutPurchaseInput;
    upsert?: Prisma.SubscriptionUpsertWithoutPurchaseInput;
    disconnect?: Prisma.SubscriptionWhereInput | boolean;
    delete?: Prisma.SubscriptionWhereInput | boolean;
    connect?: Prisma.SubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubscriptionUpdateToOneWithWhereWithoutPurchaseInput, Prisma.SubscriptionUpdateWithoutPurchaseInput>, Prisma.SubscriptionUncheckedUpdateWithoutPurchaseInput>;
};
export type EnumSubscriptionTierFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionTier;
};
export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus;
};
export type SubscriptionCreateWithoutUserInput = {
    id?: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    purchase?: Prisma.PurchaseCreateNestedOneWithoutSubscriptionInput;
};
export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    purchaseId?: string | null;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: Prisma.SubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutUserInput, Prisma.SubscriptionUncheckedCreateWithoutUserInput>;
};
export type SubscriptionCreateManyUserInputEnvelope = {
    data: Prisma.SubscriptionCreateManyUserInput | Prisma.SubscriptionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SubscriptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubscriptionUpdateWithoutUserInput, Prisma.SubscriptionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutUserInput, Prisma.SubscriptionUncheckedCreateWithoutUserInput>;
};
export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SubscriptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubscriptionUpdateWithoutUserInput, Prisma.SubscriptionUncheckedUpdateWithoutUserInput>;
};
export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SubscriptionScalarWhereInput;
    data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyWithoutUserInput>;
};
export type SubscriptionScalarWhereInput = {
    AND?: Prisma.SubscriptionScalarWhereInput | Prisma.SubscriptionScalarWhereInput[];
    OR?: Prisma.SubscriptionScalarWhereInput[];
    NOT?: Prisma.SubscriptionScalarWhereInput | Prisma.SubscriptionScalarWhereInput[];
    id?: Prisma.UuidFilter<"Subscription"> | string;
    userId?: Prisma.UuidFilter<"Subscription"> | string;
    tier?: Prisma.EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus;
    purchaseId?: Prisma.UuidNullableFilter<"Subscription"> | string | null;
    provider?: Prisma.EnumPaymentProviderKindFilter<"Subscription"> | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    autoRenew?: Prisma.BoolFilter<"Subscription"> | boolean;
    graceUntil?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
};
export type SubscriptionCreateWithoutPurchaseInput = {
    id?: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubscriptionsInput;
};
export type SubscriptionUncheckedCreateWithoutPurchaseInput = {
    id?: string;
    userId: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionCreateOrConnectWithoutPurchaseInput = {
    where: Prisma.SubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutPurchaseInput, Prisma.SubscriptionUncheckedCreateWithoutPurchaseInput>;
};
export type SubscriptionUpsertWithoutPurchaseInput = {
    update: Prisma.XOR<Prisma.SubscriptionUpdateWithoutPurchaseInput, Prisma.SubscriptionUncheckedUpdateWithoutPurchaseInput>;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutPurchaseInput, Prisma.SubscriptionUncheckedCreateWithoutPurchaseInput>;
    where?: Prisma.SubscriptionWhereInput;
};
export type SubscriptionUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: Prisma.SubscriptionWhereInput;
    data: Prisma.XOR<Prisma.SubscriptionUpdateWithoutPurchaseInput, Prisma.SubscriptionUncheckedUpdateWithoutPurchaseInput>;
};
export type SubscriptionUpdateWithoutPurchaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubscriptionsNestedInput;
};
export type SubscriptionUncheckedUpdateWithoutPurchaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionCreateManyUserInput = {
    id?: string;
    tier: $Enums.SubscriptionTier;
    status?: $Enums.SubscriptionStatus;
    purchaseId?: string | null;
    provider: $Enums.PaymentProviderKind;
    startedAt?: Date | string;
    expiresAt: Date | string;
    autoRenew?: boolean;
    graceUntil?: Date | string | null;
    cancelledAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase?: Prisma.PurchaseUpdateOneWithoutSubscriptionNestedInput;
};
export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autoRenew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    graceUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    tier?: boolean;
    status?: boolean;
    purchaseId?: boolean;
    provider?: boolean;
    startedAt?: boolean;
    expiresAt?: boolean;
    autoRenew?: boolean;
    graceUntil?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Subscription$purchaseArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    tier?: boolean;
    status?: boolean;
    purchaseId?: boolean;
    provider?: boolean;
    startedAt?: boolean;
    expiresAt?: boolean;
    autoRenew?: boolean;
    graceUntil?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Subscription$purchaseArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    tier?: boolean;
    status?: boolean;
    purchaseId?: boolean;
    provider?: boolean;
    startedAt?: boolean;
    expiresAt?: boolean;
    autoRenew?: boolean;
    graceUntil?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Subscription$purchaseArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    tier?: boolean;
    status?: boolean;
    purchaseId?: boolean;
    provider?: boolean;
    startedAt?: boolean;
    expiresAt?: boolean;
    autoRenew?: boolean;
    graceUntil?: boolean;
    cancelledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "tier" | "status" | "purchaseId" | "provider" | "startedAt" | "expiresAt" | "autoRenew" | "graceUntil" | "cancelledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>;
export type SubscriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Subscription$purchaseArgs<ExtArgs>;
};
export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Subscription$purchaseArgs<ExtArgs>;
};
export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Subscription$purchaseArgs<ExtArgs>;
};
export type $SubscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subscription";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        purchase: Prisma.$PurchasePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        tier: $Enums.SubscriptionTier;
        status: $Enums.SubscriptionStatus;
        purchaseId: string | null;
        provider: $Enums.PaymentProviderKind;
        startedAt: Date;
        expiresAt: Date;
        autoRenew: boolean;
        graceUntil: Date | null;
        cancelledAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subscription"]>;
    composites: {};
};
export type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload, S>;
export type SubscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionCountAggregateInputType | true;
};
export interface SubscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subscription'];
        meta: {
            name: 'Subscription';
        };
    };
    findUnique<T extends SubscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubscriptionCreateArgs>(args: Prisma.SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubscriptionDeleteArgs>(args: Prisma.SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubscriptionUpdateArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubscriptionUpsertArgs>(args: Prisma.SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubscriptionCountArgs>(args?: Prisma.Subset<T, SubscriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubscriptionCountAggregateOutputType> : number>;
    aggregate<T extends SubscriptionAggregateArgs>(args: Prisma.Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;
    groupBy<T extends SubscriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubscriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: SubscriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubscriptionFieldRefs;
}
export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchase<T extends Prisma.Subscription$purchaseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subscription$purchaseArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubscriptionFieldRefs {
    readonly id: Prisma.FieldRef<"Subscription", 'String'>;
    readonly userId: Prisma.FieldRef<"Subscription", 'String'>;
    readonly tier: Prisma.FieldRef<"Subscription", 'SubscriptionTier'>;
    readonly status: Prisma.FieldRef<"Subscription", 'SubscriptionStatus'>;
    readonly purchaseId: Prisma.FieldRef<"Subscription", 'String'>;
    readonly provider: Prisma.FieldRef<"Subscription", 'PaymentProviderKind'>;
    readonly startedAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly autoRenew: Prisma.FieldRef<"Subscription", 'Boolean'>;
    readonly graceUntil: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
}
export type SubscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>;
};
export type SubscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
};
export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
    include?: Prisma.SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>;
};
export type SubscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
};
export type Subscription$purchaseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
};
export type SubscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
};
