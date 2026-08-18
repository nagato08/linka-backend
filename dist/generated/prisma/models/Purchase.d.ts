import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PurchaseModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchasePayload>;
export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type PurchaseAvgAggregateOutputType = {
    amount: number | null;
    creditsGranted: number | null;
};
export type PurchaseSumAggregateOutputType = {
    amount: number | null;
    creditsGranted: number | null;
};
export type PurchaseMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    productId: string | null;
    paymentIntentId: string | null;
    provider: $Enums.PaymentProviderKind | null;
    amount: number | null;
    currencyCode: string | null;
    creditsGranted: number | null;
    storeReceipt: string | null;
    storeTransactionId: string | null;
    refundedAt: Date | null;
    refundReason: string | null;
    createdAt: Date | null;
};
export type PurchaseMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    productId: string | null;
    paymentIntentId: string | null;
    provider: $Enums.PaymentProviderKind | null;
    amount: number | null;
    currencyCode: string | null;
    creditsGranted: number | null;
    storeReceipt: string | null;
    storeTransactionId: string | null;
    refundedAt: Date | null;
    refundReason: string | null;
    createdAt: Date | null;
};
export type PurchaseCountAggregateOutputType = {
    id: number;
    userId: number;
    productId: number;
    paymentIntentId: number;
    provider: number;
    amount: number;
    currencyCode: number;
    creditsGranted: number;
    storeReceipt: number;
    storeTransactionId: number;
    refundedAt: number;
    refundReason: number;
    createdAt: number;
    _all: number;
};
export type PurchaseAvgAggregateInputType = {
    amount?: true;
    creditsGranted?: true;
};
export type PurchaseSumAggregateInputType = {
    amount?: true;
    creditsGranted?: true;
};
export type PurchaseMinAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    paymentIntentId?: true;
    provider?: true;
    amount?: true;
    currencyCode?: true;
    creditsGranted?: true;
    storeReceipt?: true;
    storeTransactionId?: true;
    refundedAt?: true;
    refundReason?: true;
    createdAt?: true;
};
export type PurchaseMaxAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    paymentIntentId?: true;
    provider?: true;
    amount?: true;
    currencyCode?: true;
    creditsGranted?: true;
    storeReceipt?: true;
    storeTransactionId?: true;
    refundedAt?: true;
    refundReason?: true;
    createdAt?: true;
};
export type PurchaseCountAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    paymentIntentId?: true;
    provider?: true;
    amount?: true;
    currencyCode?: true;
    creditsGranted?: true;
    storeReceipt?: true;
    storeTransactionId?: true;
    refundedAt?: true;
    refundReason?: true;
    createdAt?: true;
    _all?: true;
};
export type PurchaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseCountAggregateInputType;
    _avg?: PurchaseAvgAggregateInputType;
    _sum?: PurchaseSumAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase[P]> : Prisma.GetScalarType<T[P], AggregatePurchase[P]>;
};
export type PurchaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithAggregationInput | Prisma.PurchaseOrderByWithAggregationInput[];
    by: Prisma.PurchaseScalarFieldEnum[] | Prisma.PurchaseScalarFieldEnum;
    having?: Prisma.PurchaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseCountAggregateInputType | true;
    _avg?: PurchaseAvgAggregateInputType;
    _sum?: PurchaseSumAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type PurchaseGroupByOutputType = {
    id: string;
    userId: string;
    productId: string;
    paymentIntentId: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted: number;
    storeReceipt: string | null;
    storeTransactionId: string | null;
    refundedAt: Date | null;
    refundReason: string | null;
    createdAt: Date;
    _count: PurchaseCountAggregateOutputType | null;
    _avg: PurchaseAvgAggregateOutputType | null;
    _sum: PurchaseSumAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]>;
}>>;
export type PurchaseWhereInput = {
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    id?: Prisma.UuidFilter<"Purchase"> | string;
    userId?: Prisma.UuidFilter<"Purchase"> | string;
    productId?: Prisma.UuidFilter<"Purchase"> | string;
    paymentIntentId?: Prisma.UuidNullableFilter<"Purchase"> | string | null;
    provider?: Prisma.EnumPaymentProviderKindFilter<"Purchase"> | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFilter<"Purchase"> | number;
    currencyCode?: Prisma.StringFilter<"Purchase"> | string;
    creditsGranted?: Prisma.IntFilter<"Purchase"> | number;
    storeReceipt?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    storeTransactionId?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    refundedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    refundReason?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    currency?: Prisma.XOR<Prisma.CurrencyScalarRelationFilter, Prisma.CurrencyWhereInput>;
    paymentIntent?: Prisma.XOR<Prisma.PaymentIntentNullableScalarRelationFilter, Prisma.PaymentIntentWhereInput> | null;
    ledgerEntries?: Prisma.CreditLedgerListRelationFilter;
    subscription?: Prisma.XOR<Prisma.SubscriptionNullableScalarRelationFilter, Prisma.SubscriptionWhereInput> | null;
    boost?: Prisma.XOR<Prisma.BoostNullableScalarRelationFilter, Prisma.BoostWhereInput> | null;
};
export type PurchaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currencyCode?: Prisma.SortOrder;
    creditsGranted?: Prisma.SortOrder;
    storeReceipt?: Prisma.SortOrderInput | Prisma.SortOrder;
    storeTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    currency?: Prisma.CurrencyOrderByWithRelationInput;
    paymentIntent?: Prisma.PaymentIntentOrderByWithRelationInput;
    ledgerEntries?: Prisma.CreditLedgerOrderByRelationAggregateInput;
    subscription?: Prisma.SubscriptionOrderByWithRelationInput;
    boost?: Prisma.BoostOrderByWithRelationInput;
};
export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    paymentIntentId?: string;
    storeTransactionId?: string;
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    userId?: Prisma.UuidFilter<"Purchase"> | string;
    productId?: Prisma.UuidFilter<"Purchase"> | string;
    provider?: Prisma.EnumPaymentProviderKindFilter<"Purchase"> | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFilter<"Purchase"> | number;
    currencyCode?: Prisma.StringFilter<"Purchase"> | string;
    creditsGranted?: Prisma.IntFilter<"Purchase"> | number;
    storeReceipt?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    refundedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    refundReason?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    currency?: Prisma.XOR<Prisma.CurrencyScalarRelationFilter, Prisma.CurrencyWhereInput>;
    paymentIntent?: Prisma.XOR<Prisma.PaymentIntentNullableScalarRelationFilter, Prisma.PaymentIntentWhereInput> | null;
    ledgerEntries?: Prisma.CreditLedgerListRelationFilter;
    subscription?: Prisma.XOR<Prisma.SubscriptionNullableScalarRelationFilter, Prisma.SubscriptionWhereInput> | null;
    boost?: Prisma.XOR<Prisma.BoostNullableScalarRelationFilter, Prisma.BoostWhereInput> | null;
}, "id" | "paymentIntentId" | "storeTransactionId">;
export type PurchaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currencyCode?: Prisma.SortOrder;
    creditsGranted?: Prisma.SortOrder;
    storeReceipt?: Prisma.SortOrderInput | Prisma.SortOrder;
    storeTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    refundReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PurchaseCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseSumOrderByAggregateInput;
};
export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Purchase"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Purchase"> | string;
    productId?: Prisma.UuidWithAggregatesFilter<"Purchase"> | string;
    paymentIntentId?: Prisma.UuidNullableWithAggregatesFilter<"Purchase"> | string | null;
    provider?: Prisma.EnumPaymentProviderKindWithAggregatesFilter<"Purchase"> | $Enums.PaymentProviderKind;
    amount?: Prisma.IntWithAggregatesFilter<"Purchase"> | number;
    currencyCode?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    creditsGranted?: Prisma.IntWithAggregatesFilter<"Purchase"> | number;
    storeReceipt?: Prisma.StringNullableWithAggregatesFilter<"Purchase"> | string | null;
    storeTransactionId?: Prisma.StringNullableWithAggregatesFilter<"Purchase"> | string | null;
    refundedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null;
    refundReason?: Prisma.StringNullableWithAggregatesFilter<"Purchase"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Purchase"> | Date | string;
};
export type PurchaseCreateInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutPurchasesInput;
    paymentIntent?: Prisma.PaymentIntentCreateNestedOneWithoutPurchaseInput;
    ledgerEntries?: Prisma.CreditLedgerCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateInput = {
    id?: string;
    userId: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutPurchasesNestedInput;
    paymentIntent?: Prisma.PaymentIntentUpdateOneWithoutPurchaseNestedInput;
    ledgerEntries?: Prisma.CreditLedgerUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseCreateManyInput = {
    id?: string;
    userId: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseListRelationFilter = {
    every?: Prisma.PurchaseWhereInput;
    some?: Prisma.PurchaseWhereInput;
    none?: Prisma.PurchaseWhereInput;
};
export type PurchaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseNullableScalarRelationFilter = {
    is?: Prisma.PurchaseWhereInput | null;
    isNot?: Prisma.PurchaseWhereInput | null;
};
export type PurchaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currencyCode?: Prisma.SortOrder;
    creditsGranted?: Prisma.SortOrder;
    storeReceipt?: Prisma.SortOrder;
    storeTransactionId?: Prisma.SortOrder;
    refundedAt?: Prisma.SortOrder;
    refundReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    creditsGranted?: Prisma.SortOrder;
};
export type PurchaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currencyCode?: Prisma.SortOrder;
    creditsGranted?: Prisma.SortOrder;
    storeReceipt?: Prisma.SortOrder;
    storeTransactionId?: Prisma.SortOrder;
    refundedAt?: Prisma.SortOrder;
    refundReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    paymentIntentId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currencyCode?: Prisma.SortOrder;
    creditsGranted?: Prisma.SortOrder;
    storeReceipt?: Prisma.SortOrder;
    storeTransactionId?: Prisma.SortOrder;
    refundedAt?: Prisma.SortOrder;
    refundReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    creditsGranted?: Prisma.SortOrder;
};
export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutUserInput | Prisma.PurchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput> | Prisma.PurchaseCreateWithoutUserInput[] | Prisma.PurchaseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutUserInput | Prisma.PurchaseCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PurchaseCreateManyUserInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutUserInput | Prisma.PurchaseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseCreateNestedManyWithoutCurrencyInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutCurrencyInput, Prisma.PurchaseUncheckedCreateWithoutCurrencyInput> | Prisma.PurchaseCreateWithoutCurrencyInput[] | Prisma.PurchaseUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutCurrencyInput | Prisma.PurchaseCreateOrConnectWithoutCurrencyInput[];
    createMany?: Prisma.PurchaseCreateManyCurrencyInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutCurrencyInput, Prisma.PurchaseUncheckedCreateWithoutCurrencyInput> | Prisma.PurchaseCreateWithoutCurrencyInput[] | Prisma.PurchaseUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutCurrencyInput | Prisma.PurchaseCreateOrConnectWithoutCurrencyInput[];
    createMany?: Prisma.PurchaseCreateManyCurrencyInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutCurrencyInput, Prisma.PurchaseUncheckedCreateWithoutCurrencyInput> | Prisma.PurchaseCreateWithoutCurrencyInput[] | Prisma.PurchaseUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutCurrencyInput | Prisma.PurchaseCreateOrConnectWithoutCurrencyInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutCurrencyInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutCurrencyInput[];
    createMany?: Prisma.PurchaseCreateManyCurrencyInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutCurrencyInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutCurrencyInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutCurrencyInput | Prisma.PurchaseUpdateManyWithWhereWithoutCurrencyInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutCurrencyInput, Prisma.PurchaseUncheckedCreateWithoutCurrencyInput> | Prisma.PurchaseCreateWithoutCurrencyInput[] | Prisma.PurchaseUncheckedCreateWithoutCurrencyInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutCurrencyInput | Prisma.PurchaseCreateOrConnectWithoutCurrencyInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutCurrencyInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutCurrencyInput[];
    createMany?: Prisma.PurchaseCreateManyCurrencyInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutCurrencyInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutCurrencyInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutCurrencyInput | Prisma.PurchaseUpdateManyWithWhereWithoutCurrencyInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseCreateNestedOneWithoutPaymentIntentInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentIntentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentIntentInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUncheckedCreateNestedOneWithoutPaymentIntentInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentIntentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentIntentInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateOneWithoutPaymentIntentNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentIntentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentIntentInput;
    upsert?: Prisma.PurchaseUpsertWithoutPaymentIntentInput;
    disconnect?: Prisma.PurchaseWhereInput | boolean;
    delete?: Prisma.PurchaseWhereInput | boolean;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutPaymentIntentInput, Prisma.PurchaseUpdateWithoutPaymentIntentInput>, Prisma.PurchaseUncheckedUpdateWithoutPaymentIntentInput>;
};
export type PurchaseUncheckedUpdateOneWithoutPaymentIntentNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentIntentInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutPaymentIntentInput;
    upsert?: Prisma.PurchaseUpsertWithoutPaymentIntentInput;
    disconnect?: Prisma.PurchaseWhereInput | boolean;
    delete?: Prisma.PurchaseWhereInput | boolean;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutPaymentIntentInput, Prisma.PurchaseUpdateWithoutPaymentIntentInput>, Prisma.PurchaseUncheckedUpdateWithoutPaymentIntentInput>;
};
export type PurchaseCreateNestedOneWithoutLedgerEntriesInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutLedgerEntriesInput, Prisma.PurchaseUncheckedCreateWithoutLedgerEntriesInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutLedgerEntriesInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateOneWithoutLedgerEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutLedgerEntriesInput, Prisma.PurchaseUncheckedCreateWithoutLedgerEntriesInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutLedgerEntriesInput;
    upsert?: Prisma.PurchaseUpsertWithoutLedgerEntriesInput;
    disconnect?: Prisma.PurchaseWhereInput | boolean;
    delete?: Prisma.PurchaseWhereInput | boolean;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutLedgerEntriesInput, Prisma.PurchaseUpdateWithoutLedgerEntriesInput>, Prisma.PurchaseUncheckedUpdateWithoutLedgerEntriesInput>;
};
export type PurchaseCreateNestedOneWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutSubscriptionInput, Prisma.PurchaseUncheckedCreateWithoutSubscriptionInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutSubscriptionInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateOneWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutSubscriptionInput, Prisma.PurchaseUncheckedCreateWithoutSubscriptionInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutSubscriptionInput;
    upsert?: Prisma.PurchaseUpsertWithoutSubscriptionInput;
    disconnect?: Prisma.PurchaseWhereInput | boolean;
    delete?: Prisma.PurchaseWhereInput | boolean;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutSubscriptionInput, Prisma.PurchaseUpdateWithoutSubscriptionInput>, Prisma.PurchaseUncheckedUpdateWithoutSubscriptionInput>;
};
export type PurchaseCreateNestedOneWithoutBoostInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutBoostInput, Prisma.PurchaseUncheckedCreateWithoutBoostInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutBoostInput;
    connect?: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateOneWithoutBoostNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutBoostInput, Prisma.PurchaseUncheckedCreateWithoutBoostInput>;
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutBoostInput;
    upsert?: Prisma.PurchaseUpsertWithoutBoostInput;
    disconnect?: Prisma.PurchaseWhereInput | boolean;
    delete?: Prisma.PurchaseWhereInput | boolean;
    connect?: Prisma.PurchaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseUpdateToOneWithWhereWithoutBoostInput, Prisma.PurchaseUpdateWithoutBoostInput>, Prisma.PurchaseUncheckedUpdateWithoutBoostInput>;
};
export type PurchaseCreateWithoutUserInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutPurchasesInput;
    paymentIntent?: Prisma.PaymentIntentCreateNestedOneWithoutPurchaseInput;
    ledgerEntries?: Prisma.CreditLedgerCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput>;
};
export type PurchaseCreateManyUserInputEnvelope = {
    data: Prisma.PurchaseCreateManyUserInput | Prisma.PurchaseCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutUserInput, Prisma.PurchaseUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutUserInput, Prisma.PurchaseUncheckedCreateWithoutUserInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutUserInput, Prisma.PurchaseUncheckedUpdateWithoutUserInput>;
};
export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutUserInput>;
};
export type PurchaseScalarWhereInput = {
    AND?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    OR?: Prisma.PurchaseScalarWhereInput[];
    NOT?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    id?: Prisma.UuidFilter<"Purchase"> | string;
    userId?: Prisma.UuidFilter<"Purchase"> | string;
    productId?: Prisma.UuidFilter<"Purchase"> | string;
    paymentIntentId?: Prisma.UuidNullableFilter<"Purchase"> | string | null;
    provider?: Prisma.EnumPaymentProviderKindFilter<"Purchase"> | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFilter<"Purchase"> | number;
    currencyCode?: Prisma.StringFilter<"Purchase"> | string;
    creditsGranted?: Prisma.IntFilter<"Purchase"> | number;
    storeReceipt?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    storeTransactionId?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    refundedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    refundReason?: Prisma.StringNullableFilter<"Purchase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
};
export type PurchaseCreateWithoutCurrencyInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    paymentIntent?: Prisma.PaymentIntentCreateNestedOneWithoutPurchaseInput;
    ledgerEntries?: Prisma.CreditLedgerCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutCurrencyInput = {
    id?: string;
    userId: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutCurrencyInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutCurrencyInput, Prisma.PurchaseUncheckedCreateWithoutCurrencyInput>;
};
export type PurchaseCreateManyCurrencyInputEnvelope = {
    data: Prisma.PurchaseCreateManyCurrencyInput | Prisma.PurchaseCreateManyCurrencyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutCurrencyInput, Prisma.PurchaseUncheckedUpdateWithoutCurrencyInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutCurrencyInput, Prisma.PurchaseUncheckedCreateWithoutCurrencyInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutCurrencyInput, Prisma.PurchaseUncheckedUpdateWithoutCurrencyInput>;
};
export type PurchaseUpdateManyWithWhereWithoutCurrencyInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutCurrencyInput>;
};
export type PurchaseCreateWithoutProductInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutPurchasesInput;
    paymentIntent?: Prisma.PaymentIntentCreateNestedOneWithoutPurchaseInput;
    ledgerEntries?: Prisma.CreditLedgerCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutProductInput = {
    id?: string;
    userId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutProductInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput>;
};
export type PurchaseCreateManyProductInputEnvelope = {
    data: Prisma.PurchaseCreateManyProductInput | Prisma.PurchaseCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutProductInput, Prisma.PurchaseUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutProductInput, Prisma.PurchaseUncheckedUpdateWithoutProductInput>;
};
export type PurchaseUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutProductInput>;
};
export type PurchaseCreateWithoutPaymentIntentInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutPurchasesInput;
    ledgerEntries?: Prisma.CreditLedgerCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutPaymentIntentInput = {
    id?: string;
    userId: string;
    productId: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutPaymentIntentInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentIntentInput>;
};
export type PurchaseUpsertWithoutPaymentIntentInput = {
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedUpdateWithoutPaymentIntentInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedCreateWithoutPaymentIntentInput>;
    where?: Prisma.PurchaseWhereInput;
};
export type PurchaseUpdateToOneWithWhereWithoutPaymentIntentInput = {
    where?: Prisma.PurchaseWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutPaymentIntentInput, Prisma.PurchaseUncheckedUpdateWithoutPaymentIntentInput>;
};
export type PurchaseUpdateWithoutPaymentIntentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutPurchasesNestedInput;
    ledgerEntries?: Prisma.CreditLedgerUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutPaymentIntentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseCreateWithoutLedgerEntriesInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutPurchasesInput;
    paymentIntent?: Prisma.PaymentIntentCreateNestedOneWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string;
    userId: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput;
    boost?: Prisma.BoostUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutLedgerEntriesInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutLedgerEntriesInput, Prisma.PurchaseUncheckedCreateWithoutLedgerEntriesInput>;
};
export type PurchaseUpsertWithoutLedgerEntriesInput = {
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutLedgerEntriesInput, Prisma.PurchaseUncheckedUpdateWithoutLedgerEntriesInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutLedgerEntriesInput, Prisma.PurchaseUncheckedCreateWithoutLedgerEntriesInput>;
    where?: Prisma.PurchaseWhereInput;
};
export type PurchaseUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: Prisma.PurchaseWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutLedgerEntriesInput, Prisma.PurchaseUncheckedUpdateWithoutLedgerEntriesInput>;
};
export type PurchaseUpdateWithoutLedgerEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutPurchasesNestedInput;
    paymentIntent?: Prisma.PaymentIntentUpdateOneWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseCreateWithoutSubscriptionInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutPurchasesInput;
    paymentIntent?: Prisma.PaymentIntentCreateNestedOneWithoutPurchaseInput;
    ledgerEntries?: Prisma.CreditLedgerCreateNestedManyWithoutPurchaseInput;
    boost?: Prisma.BoostCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    userId: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput;
    boost?: Prisma.BoostUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutSubscriptionInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutSubscriptionInput, Prisma.PurchaseUncheckedCreateWithoutSubscriptionInput>;
};
export type PurchaseUpsertWithoutSubscriptionInput = {
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutSubscriptionInput, Prisma.PurchaseUncheckedUpdateWithoutSubscriptionInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutSubscriptionInput, Prisma.PurchaseUncheckedCreateWithoutSubscriptionInput>;
    where?: Prisma.PurchaseWhereInput;
};
export type PurchaseUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: Prisma.PurchaseWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutSubscriptionInput, Prisma.PurchaseUncheckedUpdateWithoutSubscriptionInput>;
};
export type PurchaseUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutPurchasesNestedInput;
    paymentIntent?: Prisma.PaymentIntentUpdateOneWithoutPurchaseNestedInput;
    ledgerEntries?: Prisma.CreditLedgerUpdateManyWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseCreateWithoutBoostInput = {
    id?: string;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPurchasesInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    currency: Prisma.CurrencyCreateNestedOneWithoutPurchasesInput;
    paymentIntent?: Prisma.PaymentIntentCreateNestedOneWithoutPurchaseInput;
    ledgerEntries?: Prisma.CreditLedgerCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseUncheckedCreateWithoutBoostInput = {
    id?: string;
    userId: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutPurchaseInput;
};
export type PurchaseCreateOrConnectWithoutBoostInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutBoostInput, Prisma.PurchaseUncheckedCreateWithoutBoostInput>;
};
export type PurchaseUpsertWithoutBoostInput = {
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutBoostInput, Prisma.PurchaseUncheckedUpdateWithoutBoostInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutBoostInput, Prisma.PurchaseUncheckedCreateWithoutBoostInput>;
    where?: Prisma.PurchaseWhereInput;
};
export type PurchaseUpdateToOneWithWhereWithoutBoostInput = {
    where?: Prisma.PurchaseWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutBoostInput, Prisma.PurchaseUncheckedUpdateWithoutBoostInput>;
};
export type PurchaseUpdateWithoutBoostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutPurchasesNestedInput;
    paymentIntent?: Prisma.PaymentIntentUpdateOneWithoutPurchaseNestedInput;
    ledgerEntries?: Prisma.CreditLedgerUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutBoostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseCreateManyUserInput = {
    id?: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutPurchasesNestedInput;
    paymentIntent?: Prisma.PaymentIntentUpdateOneWithoutPurchaseNestedInput;
    ledgerEntries?: Prisma.CreditLedgerUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseCreateManyCurrencyInput = {
    id?: string;
    userId: string;
    productId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateWithoutCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    paymentIntent?: Prisma.PaymentIntentUpdateOneWithoutPurchaseNestedInput;
    ledgerEntries?: Prisma.CreditLedgerUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateManyWithoutCurrencyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseCreateManyProductInput = {
    id?: string;
    userId: string;
    paymentIntentId?: string | null;
    provider: $Enums.PaymentProviderKind;
    amount: number;
    currencyCode: string;
    creditsGranted?: number;
    storeReceipt?: string | null;
    storeTransactionId?: string | null;
    refundedAt?: Date | string | null;
    refundReason?: string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
    currency?: Prisma.CurrencyUpdateOneRequiredWithoutPurchasesNestedInput;
    paymentIntent?: Prisma.PaymentIntentUpdateOneWithoutPurchaseNestedInput;
    ledgerEntries?: Prisma.CreditLedgerUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledgerEntries?: Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutPurchaseNestedInput;
    boost?: Prisma.BoostUncheckedUpdateOneWithoutPurchaseNestedInput;
};
export type PurchaseUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentIntentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumPaymentProviderKindFieldUpdateOperationsInput | $Enums.PaymentProviderKind;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    currencyCode?: Prisma.StringFieldUpdateOperationsInput | string;
    creditsGranted?: Prisma.IntFieldUpdateOperationsInput | number;
    storeReceipt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    storeTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refundReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseCountOutputType = {
    ledgerEntries: number;
};
export type PurchaseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledgerEntries?: boolean | PurchaseCountOutputTypeCountLedgerEntriesArgs;
};
export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseCountOutputTypeSelect<ExtArgs> | null;
};
export type PurchaseCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditLedgerWhereInput;
};
export type PurchaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    paymentIntentId?: boolean;
    provider?: boolean;
    amount?: boolean;
    currencyCode?: boolean;
    creditsGranted?: boolean;
    storeReceipt?: boolean;
    storeTransactionId?: boolean;
    refundedAt?: boolean;
    refundReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
    paymentIntent?: boolean | Prisma.Purchase$paymentIntentArgs<ExtArgs>;
    ledgerEntries?: boolean | Prisma.Purchase$ledgerEntriesArgs<ExtArgs>;
    subscription?: boolean | Prisma.Purchase$subscriptionArgs<ExtArgs>;
    boost?: boolean | Prisma.Purchase$boostArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    paymentIntentId?: boolean;
    provider?: boolean;
    amount?: boolean;
    currencyCode?: boolean;
    creditsGranted?: boolean;
    storeReceipt?: boolean;
    storeTransactionId?: boolean;
    refundedAt?: boolean;
    refundReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
    paymentIntent?: boolean | Prisma.Purchase$paymentIntentArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    paymentIntentId?: boolean;
    provider?: boolean;
    amount?: boolean;
    currencyCode?: boolean;
    creditsGranted?: boolean;
    storeReceipt?: boolean;
    storeTransactionId?: boolean;
    refundedAt?: boolean;
    refundReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
    paymentIntent?: boolean | Prisma.Purchase$paymentIntentArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectScalar = {
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    paymentIntentId?: boolean;
    provider?: boolean;
    amount?: boolean;
    currencyCode?: boolean;
    creditsGranted?: boolean;
    storeReceipt?: boolean;
    storeTransactionId?: boolean;
    refundedAt?: boolean;
    refundReason?: boolean;
    createdAt?: boolean;
};
export type PurchaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "productId" | "paymentIntentId" | "provider" | "amount" | "currencyCode" | "creditsGranted" | "storeReceipt" | "storeTransactionId" | "refundedAt" | "refundReason" | "createdAt", ExtArgs["result"]["purchase"]>;
export type PurchaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
    paymentIntent?: boolean | Prisma.Purchase$paymentIntentArgs<ExtArgs>;
    ledgerEntries?: boolean | Prisma.Purchase$ledgerEntriesArgs<ExtArgs>;
    subscription?: boolean | Prisma.Purchase$subscriptionArgs<ExtArgs>;
    boost?: boolean | Prisma.Purchase$boostArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
    paymentIntent?: boolean | Prisma.Purchase$paymentIntentArgs<ExtArgs>;
};
export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    currency?: boolean | Prisma.CurrencyDefaultArgs<ExtArgs>;
    paymentIntent?: boolean | Prisma.Purchase$paymentIntentArgs<ExtArgs>;
};
export type $PurchasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchase";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
        currency: Prisma.$CurrencyPayload<ExtArgs>;
        paymentIntent: Prisma.$PaymentIntentPayload<ExtArgs> | null;
        ledgerEntries: Prisma.$CreditLedgerPayload<ExtArgs>[];
        subscription: Prisma.$SubscriptionPayload<ExtArgs> | null;
        boost: Prisma.$BoostPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        productId: string;
        paymentIntentId: string | null;
        provider: $Enums.PaymentProviderKind;
        amount: number;
        currencyCode: string;
        creditsGranted: number;
        storeReceipt: string | null;
        storeTransactionId: string | null;
        refundedAt: Date | null;
        refundReason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["purchase"]>;
    composites: {};
};
export type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchasePayload, S>;
export type PurchaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseCountAggregateInputType | true;
};
export interface PurchaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchase'];
        meta: {
            name: 'Purchase';
        };
    };
    findUnique<T extends PurchaseFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseCreateArgs>(args: Prisma.SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseCountArgs>(args?: Prisma.Subset<T, PurchaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseAggregateArgs>(args: Prisma.Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>;
    groupBy<T extends PurchaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseFieldRefs;
}
export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    currency<T extends Prisma.CurrencyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CurrencyDefaultArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    paymentIntent<T extends Prisma.Purchase$paymentIntentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchase$paymentIntentArgs<ExtArgs>>): Prisma.Prisma__PaymentIntentClient<runtime.Types.Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ledgerEntries<T extends Prisma.Purchase$ledgerEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchase$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subscription<T extends Prisma.Purchase$subscriptionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchase$subscriptionArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    boost<T extends Prisma.Purchase$boostArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchase$boostArgs<ExtArgs>>): Prisma.Prisma__BoostClient<runtime.Types.Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseFieldRefs {
    readonly id: Prisma.FieldRef<"Purchase", 'String'>;
    readonly userId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly productId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly paymentIntentId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly provider: Prisma.FieldRef<"Purchase", 'PaymentProviderKind'>;
    readonly amount: Prisma.FieldRef<"Purchase", 'Int'>;
    readonly currencyCode: Prisma.FieldRef<"Purchase", 'String'>;
    readonly creditsGranted: Prisma.FieldRef<"Purchase", 'Int'>;
    readonly storeReceipt: Prisma.FieldRef<"Purchase", 'String'>;
    readonly storeTransactionId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly refundedAt: Prisma.FieldRef<"Purchase", 'DateTime'>;
    readonly refundReason: Prisma.FieldRef<"Purchase", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Purchase", 'DateTime'>;
}
export type PurchaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
};
export type PurchaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
    include?: Prisma.PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
};
export type PurchaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type Purchase$paymentIntentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentIntentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentIntentOmit<ExtArgs> | null;
    include?: Prisma.PaymentIntentInclude<ExtArgs> | null;
    where?: Prisma.PaymentIntentWhereInput;
};
export type Purchase$ledgerEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
    where?: Prisma.CreditLedgerWhereInput;
    orderBy?: Prisma.CreditLedgerOrderByWithRelationInput | Prisma.CreditLedgerOrderByWithRelationInput[];
    cursor?: Prisma.CreditLedgerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreditLedgerScalarFieldEnum | Prisma.CreditLedgerScalarFieldEnum[];
};
export type Purchase$subscriptionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
};
export type Purchase$boostArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoostSelect<ExtArgs> | null;
    omit?: Prisma.BoostOmit<ExtArgs> | null;
    include?: Prisma.BoostInclude<ExtArgs> | null;
    where?: Prisma.BoostWhereInput;
};
export type PurchaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
};
