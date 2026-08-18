import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CreditLedgerModel = runtime.Types.Result.DefaultSelection<Prisma.$CreditLedgerPayload>;
export type AggregateCreditLedger = {
    _count: CreditLedgerCountAggregateOutputType | null;
    _avg: CreditLedgerAvgAggregateOutputType | null;
    _sum: CreditLedgerSumAggregateOutputType | null;
    _min: CreditLedgerMinAggregateOutputType | null;
    _max: CreditLedgerMaxAggregateOutputType | null;
};
export type CreditLedgerAvgAggregateOutputType = {
    delta: number | null;
    balanceAfter: number | null;
};
export type CreditLedgerSumAggregateOutputType = {
    delta: number | null;
    balanceAfter: number | null;
};
export type CreditLedgerMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    delta: number | null;
    balanceAfter: number | null;
    reason: $Enums.LedgerReason | null;
    refType: string | null;
    refId: string | null;
    purchaseId: string | null;
    idempotencyKey: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type CreditLedgerMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    delta: number | null;
    balanceAfter: number | null;
    reason: $Enums.LedgerReason | null;
    refType: string | null;
    refId: string | null;
    purchaseId: string | null;
    idempotencyKey: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type CreditLedgerCountAggregateOutputType = {
    id: number;
    userId: number;
    delta: number;
    balanceAfter: number;
    reason: number;
    refType: number;
    refId: number;
    purchaseId: number;
    idempotencyKey: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type CreditLedgerAvgAggregateInputType = {
    delta?: true;
    balanceAfter?: true;
};
export type CreditLedgerSumAggregateInputType = {
    delta?: true;
    balanceAfter?: true;
};
export type CreditLedgerMinAggregateInputType = {
    id?: true;
    userId?: true;
    delta?: true;
    balanceAfter?: true;
    reason?: true;
    refType?: true;
    refId?: true;
    purchaseId?: true;
    idempotencyKey?: true;
    note?: true;
    createdAt?: true;
};
export type CreditLedgerMaxAggregateInputType = {
    id?: true;
    userId?: true;
    delta?: true;
    balanceAfter?: true;
    reason?: true;
    refType?: true;
    refId?: true;
    purchaseId?: true;
    idempotencyKey?: true;
    note?: true;
    createdAt?: true;
};
export type CreditLedgerCountAggregateInputType = {
    id?: true;
    userId?: true;
    delta?: true;
    balanceAfter?: true;
    reason?: true;
    refType?: true;
    refId?: true;
    purchaseId?: true;
    idempotencyKey?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type CreditLedgerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditLedgerWhereInput;
    orderBy?: Prisma.CreditLedgerOrderByWithRelationInput | Prisma.CreditLedgerOrderByWithRelationInput[];
    cursor?: Prisma.CreditLedgerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CreditLedgerCountAggregateInputType;
    _avg?: CreditLedgerAvgAggregateInputType;
    _sum?: CreditLedgerSumAggregateInputType;
    _min?: CreditLedgerMinAggregateInputType;
    _max?: CreditLedgerMaxAggregateInputType;
};
export type GetCreditLedgerAggregateType<T extends CreditLedgerAggregateArgs> = {
    [P in keyof T & keyof AggregateCreditLedger]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCreditLedger[P]> : Prisma.GetScalarType<T[P], AggregateCreditLedger[P]>;
};
export type CreditLedgerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditLedgerWhereInput;
    orderBy?: Prisma.CreditLedgerOrderByWithAggregationInput | Prisma.CreditLedgerOrderByWithAggregationInput[];
    by: Prisma.CreditLedgerScalarFieldEnum[] | Prisma.CreditLedgerScalarFieldEnum;
    having?: Prisma.CreditLedgerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CreditLedgerCountAggregateInputType | true;
    _avg?: CreditLedgerAvgAggregateInputType;
    _sum?: CreditLedgerSumAggregateInputType;
    _min?: CreditLedgerMinAggregateInputType;
    _max?: CreditLedgerMaxAggregateInputType;
};
export type CreditLedgerGroupByOutputType = {
    id: string;
    userId: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType: string | null;
    refId: string | null;
    purchaseId: string | null;
    idempotencyKey: string | null;
    note: string | null;
    createdAt: Date;
    _count: CreditLedgerCountAggregateOutputType | null;
    _avg: CreditLedgerAvgAggregateOutputType | null;
    _sum: CreditLedgerSumAggregateOutputType | null;
    _min: CreditLedgerMinAggregateOutputType | null;
    _max: CreditLedgerMaxAggregateOutputType | null;
};
export type GetCreditLedgerGroupByPayload<T extends CreditLedgerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CreditLedgerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CreditLedgerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CreditLedgerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CreditLedgerGroupByOutputType[P]>;
}>>;
export type CreditLedgerWhereInput = {
    AND?: Prisma.CreditLedgerWhereInput | Prisma.CreditLedgerWhereInput[];
    OR?: Prisma.CreditLedgerWhereInput[];
    NOT?: Prisma.CreditLedgerWhereInput | Prisma.CreditLedgerWhereInput[];
    id?: Prisma.UuidFilter<"CreditLedger"> | string;
    userId?: Prisma.UuidFilter<"CreditLedger"> | string;
    delta?: Prisma.IntFilter<"CreditLedger"> | number;
    balanceAfter?: Prisma.IntFilter<"CreditLedger"> | number;
    reason?: Prisma.EnumLedgerReasonFilter<"CreditLedger"> | $Enums.LedgerReason;
    refType?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    refId?: Prisma.UuidNullableFilter<"CreditLedger"> | string | null;
    purchaseId?: Prisma.UuidNullableFilter<"CreditLedger"> | string | null;
    idempotencyKey?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    note?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreditLedger"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    purchase?: Prisma.XOR<Prisma.PurchaseNullableScalarRelationFilter, Prisma.PurchaseWhereInput> | null;
};
export type CreditLedgerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    delta?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refType?: Prisma.SortOrderInput | Prisma.SortOrder;
    refId?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    purchase?: Prisma.PurchaseOrderByWithRelationInput;
};
export type CreditLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idempotencyKey?: string;
    AND?: Prisma.CreditLedgerWhereInput | Prisma.CreditLedgerWhereInput[];
    OR?: Prisma.CreditLedgerWhereInput[];
    NOT?: Prisma.CreditLedgerWhereInput | Prisma.CreditLedgerWhereInput[];
    userId?: Prisma.UuidFilter<"CreditLedger"> | string;
    delta?: Prisma.IntFilter<"CreditLedger"> | number;
    balanceAfter?: Prisma.IntFilter<"CreditLedger"> | number;
    reason?: Prisma.EnumLedgerReasonFilter<"CreditLedger"> | $Enums.LedgerReason;
    refType?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    refId?: Prisma.UuidNullableFilter<"CreditLedger"> | string | null;
    purchaseId?: Prisma.UuidNullableFilter<"CreditLedger"> | string | null;
    note?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreditLedger"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    purchase?: Prisma.XOR<Prisma.PurchaseNullableScalarRelationFilter, Prisma.PurchaseWhereInput> | null;
}, "id" | "idempotencyKey">;
export type CreditLedgerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    delta?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refType?: Prisma.SortOrderInput | Prisma.SortOrder;
    refId?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CreditLedgerCountOrderByAggregateInput;
    _avg?: Prisma.CreditLedgerAvgOrderByAggregateInput;
    _max?: Prisma.CreditLedgerMaxOrderByAggregateInput;
    _min?: Prisma.CreditLedgerMinOrderByAggregateInput;
    _sum?: Prisma.CreditLedgerSumOrderByAggregateInput;
};
export type CreditLedgerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CreditLedgerScalarWhereWithAggregatesInput | Prisma.CreditLedgerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CreditLedgerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CreditLedgerScalarWhereWithAggregatesInput | Prisma.CreditLedgerScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CreditLedger"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"CreditLedger"> | string;
    delta?: Prisma.IntWithAggregatesFilter<"CreditLedger"> | number;
    balanceAfter?: Prisma.IntWithAggregatesFilter<"CreditLedger"> | number;
    reason?: Prisma.EnumLedgerReasonWithAggregatesFilter<"CreditLedger"> | $Enums.LedgerReason;
    refType?: Prisma.StringNullableWithAggregatesFilter<"CreditLedger"> | string | null;
    refId?: Prisma.UuidNullableWithAggregatesFilter<"CreditLedger"> | string | null;
    purchaseId?: Prisma.UuidNullableWithAggregatesFilter<"CreditLedger"> | string | null;
    idempotencyKey?: Prisma.StringNullableWithAggregatesFilter<"CreditLedger"> | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"CreditLedger"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CreditLedger"> | Date | string;
};
export type CreditLedgerCreateInput = {
    id?: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCreditEntriesInput;
    purchase?: Prisma.PurchaseCreateNestedOneWithoutLedgerEntriesInput;
};
export type CreditLedgerUncheckedCreateInput = {
    id?: string;
    userId: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    purchaseId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditLedgerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCreditEntriesNestedInput;
    purchase?: Prisma.PurchaseUpdateOneWithoutLedgerEntriesNestedInput;
};
export type CreditLedgerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditLedgerCreateManyInput = {
    id?: string;
    userId: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    purchaseId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditLedgerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditLedgerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditLedgerListRelationFilter = {
    every?: Prisma.CreditLedgerWhereInput;
    some?: Prisma.CreditLedgerWhereInput;
    none?: Prisma.CreditLedgerWhereInput;
};
export type CreditLedgerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CreditLedgerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    delta?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refType?: Prisma.SortOrder;
    refId?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CreditLedgerAvgOrderByAggregateInput = {
    delta?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
};
export type CreditLedgerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    delta?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refType?: Prisma.SortOrder;
    refId?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CreditLedgerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    delta?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refType?: Prisma.SortOrder;
    refId?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CreditLedgerSumOrderByAggregateInput = {
    delta?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
};
export type CreditLedgerCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutUserInput, Prisma.CreditLedgerUncheckedCreateWithoutUserInput> | Prisma.CreditLedgerCreateWithoutUserInput[] | Prisma.CreditLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutUserInput | Prisma.CreditLedgerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CreditLedgerCreateManyUserInputEnvelope;
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
};
export type CreditLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutUserInput, Prisma.CreditLedgerUncheckedCreateWithoutUserInput> | Prisma.CreditLedgerCreateWithoutUserInput[] | Prisma.CreditLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutUserInput | Prisma.CreditLedgerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CreditLedgerCreateManyUserInputEnvelope;
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
};
export type CreditLedgerUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutUserInput, Prisma.CreditLedgerUncheckedCreateWithoutUserInput> | Prisma.CreditLedgerCreateWithoutUserInput[] | Prisma.CreditLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutUserInput | Prisma.CreditLedgerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CreditLedgerUpsertWithWhereUniqueWithoutUserInput | Prisma.CreditLedgerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CreditLedgerCreateManyUserInputEnvelope;
    set?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    delete?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    update?: Prisma.CreditLedgerUpdateWithWhereUniqueWithoutUserInput | Prisma.CreditLedgerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CreditLedgerUpdateManyWithWhereWithoutUserInput | Prisma.CreditLedgerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CreditLedgerScalarWhereInput | Prisma.CreditLedgerScalarWhereInput[];
};
export type CreditLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutUserInput, Prisma.CreditLedgerUncheckedCreateWithoutUserInput> | Prisma.CreditLedgerCreateWithoutUserInput[] | Prisma.CreditLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutUserInput | Prisma.CreditLedgerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CreditLedgerUpsertWithWhereUniqueWithoutUserInput | Prisma.CreditLedgerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CreditLedgerCreateManyUserInputEnvelope;
    set?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    delete?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    update?: Prisma.CreditLedgerUpdateWithWhereUniqueWithoutUserInput | Prisma.CreditLedgerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CreditLedgerUpdateManyWithWhereWithoutUserInput | Prisma.CreditLedgerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CreditLedgerScalarWhereInput | Prisma.CreditLedgerScalarWhereInput[];
};
export type CreditLedgerCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput> | Prisma.CreditLedgerCreateWithoutPurchaseInput[] | Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput | Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.CreditLedgerCreateManyPurchaseInputEnvelope;
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
};
export type CreditLedgerUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput> | Prisma.CreditLedgerCreateWithoutPurchaseInput[] | Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput | Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.CreditLedgerCreateManyPurchaseInputEnvelope;
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
};
export type CreditLedgerUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput> | Prisma.CreditLedgerCreateWithoutPurchaseInput[] | Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput | Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.CreditLedgerUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.CreditLedgerUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.CreditLedgerCreateManyPurchaseInputEnvelope;
    set?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    delete?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    update?: Prisma.CreditLedgerUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.CreditLedgerUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.CreditLedgerUpdateManyWithWhereWithoutPurchaseInput | Prisma.CreditLedgerUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.CreditLedgerScalarWhereInput | Prisma.CreditLedgerScalarWhereInput[];
};
export type CreditLedgerUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.CreditLedgerCreateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput> | Prisma.CreditLedgerCreateWithoutPurchaseInput[] | Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput | Prisma.CreditLedgerCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.CreditLedgerUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.CreditLedgerUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.CreditLedgerCreateManyPurchaseInputEnvelope;
    set?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    delete?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    connect?: Prisma.CreditLedgerWhereUniqueInput | Prisma.CreditLedgerWhereUniqueInput[];
    update?: Prisma.CreditLedgerUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.CreditLedgerUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.CreditLedgerUpdateManyWithWhereWithoutPurchaseInput | Prisma.CreditLedgerUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.CreditLedgerScalarWhereInput | Prisma.CreditLedgerScalarWhereInput[];
};
export type EnumLedgerReasonFieldUpdateOperationsInput = {
    set?: $Enums.LedgerReason;
};
export type CreditLedgerCreateWithoutUserInput = {
    id?: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    purchase?: Prisma.PurchaseCreateNestedOneWithoutLedgerEntriesInput;
};
export type CreditLedgerUncheckedCreateWithoutUserInput = {
    id?: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    purchaseId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditLedgerCreateOrConnectWithoutUserInput = {
    where: Prisma.CreditLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditLedgerCreateWithoutUserInput, Prisma.CreditLedgerUncheckedCreateWithoutUserInput>;
};
export type CreditLedgerCreateManyUserInputEnvelope = {
    data: Prisma.CreditLedgerCreateManyUserInput | Prisma.CreditLedgerCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CreditLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CreditLedgerWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreditLedgerUpdateWithoutUserInput, Prisma.CreditLedgerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CreditLedgerCreateWithoutUserInput, Prisma.CreditLedgerUncheckedCreateWithoutUserInput>;
};
export type CreditLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CreditLedgerWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreditLedgerUpdateWithoutUserInput, Prisma.CreditLedgerUncheckedUpdateWithoutUserInput>;
};
export type CreditLedgerUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CreditLedgerScalarWhereInput;
    data: Prisma.XOR<Prisma.CreditLedgerUpdateManyMutationInput, Prisma.CreditLedgerUncheckedUpdateManyWithoutUserInput>;
};
export type CreditLedgerScalarWhereInput = {
    AND?: Prisma.CreditLedgerScalarWhereInput | Prisma.CreditLedgerScalarWhereInput[];
    OR?: Prisma.CreditLedgerScalarWhereInput[];
    NOT?: Prisma.CreditLedgerScalarWhereInput | Prisma.CreditLedgerScalarWhereInput[];
    id?: Prisma.UuidFilter<"CreditLedger"> | string;
    userId?: Prisma.UuidFilter<"CreditLedger"> | string;
    delta?: Prisma.IntFilter<"CreditLedger"> | number;
    balanceAfter?: Prisma.IntFilter<"CreditLedger"> | number;
    reason?: Prisma.EnumLedgerReasonFilter<"CreditLedger"> | $Enums.LedgerReason;
    refType?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    refId?: Prisma.UuidNullableFilter<"CreditLedger"> | string | null;
    purchaseId?: Prisma.UuidNullableFilter<"CreditLedger"> | string | null;
    idempotencyKey?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    note?: Prisma.StringNullableFilter<"CreditLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreditLedger"> | Date | string;
};
export type CreditLedgerCreateWithoutPurchaseInput = {
    id?: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCreditEntriesInput;
};
export type CreditLedgerUncheckedCreateWithoutPurchaseInput = {
    id?: string;
    userId: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditLedgerCreateOrConnectWithoutPurchaseInput = {
    where: Prisma.CreditLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditLedgerCreateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput>;
};
export type CreditLedgerCreateManyPurchaseInputEnvelope = {
    data: Prisma.CreditLedgerCreateManyPurchaseInput | Prisma.CreditLedgerCreateManyPurchaseInput[];
    skipDuplicates?: boolean;
};
export type CreditLedgerUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.CreditLedgerWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreditLedgerUpdateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedUpdateWithoutPurchaseInput>;
    create: Prisma.XOR<Prisma.CreditLedgerCreateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedCreateWithoutPurchaseInput>;
};
export type CreditLedgerUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.CreditLedgerWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreditLedgerUpdateWithoutPurchaseInput, Prisma.CreditLedgerUncheckedUpdateWithoutPurchaseInput>;
};
export type CreditLedgerUpdateManyWithWhereWithoutPurchaseInput = {
    where: Prisma.CreditLedgerScalarWhereInput;
    data: Prisma.XOR<Prisma.CreditLedgerUpdateManyMutationInput, Prisma.CreditLedgerUncheckedUpdateManyWithoutPurchaseInput>;
};
export type CreditLedgerCreateManyUserInput = {
    id?: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    purchaseId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditLedgerUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase?: Prisma.PurchaseUpdateOneWithoutLedgerEntriesNestedInput;
};
export type CreditLedgerUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditLedgerCreateManyPurchaseInput = {
    id?: string;
    userId: string;
    delta: number;
    balanceAfter: number;
    reason: $Enums.LedgerReason;
    refType?: string | null;
    refId?: string | null;
    idempotencyKey?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type CreditLedgerUpdateWithoutPurchaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCreditEntriesNestedInput;
};
export type CreditLedgerUncheckedUpdateWithoutPurchaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditLedgerUncheckedUpdateManyWithoutPurchaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    delta?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreditLedgerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    delta?: boolean;
    balanceAfter?: boolean;
    reason?: boolean;
    refType?: boolean;
    refId?: boolean;
    purchaseId?: boolean;
    idempotencyKey?: boolean;
    note?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.CreditLedger$purchaseArgs<ExtArgs>;
}, ExtArgs["result"]["creditLedger"]>;
export type CreditLedgerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    delta?: boolean;
    balanceAfter?: boolean;
    reason?: boolean;
    refType?: boolean;
    refId?: boolean;
    purchaseId?: boolean;
    idempotencyKey?: boolean;
    note?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.CreditLedger$purchaseArgs<ExtArgs>;
}, ExtArgs["result"]["creditLedger"]>;
export type CreditLedgerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    delta?: boolean;
    balanceAfter?: boolean;
    reason?: boolean;
    refType?: boolean;
    refId?: boolean;
    purchaseId?: boolean;
    idempotencyKey?: boolean;
    note?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.CreditLedger$purchaseArgs<ExtArgs>;
}, ExtArgs["result"]["creditLedger"]>;
export type CreditLedgerSelectScalar = {
    id?: boolean;
    userId?: boolean;
    delta?: boolean;
    balanceAfter?: boolean;
    reason?: boolean;
    refType?: boolean;
    refId?: boolean;
    purchaseId?: boolean;
    idempotencyKey?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type CreditLedgerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "delta" | "balanceAfter" | "reason" | "refType" | "refId" | "purchaseId" | "idempotencyKey" | "note" | "createdAt", ExtArgs["result"]["creditLedger"]>;
export type CreditLedgerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.CreditLedger$purchaseArgs<ExtArgs>;
};
export type CreditLedgerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.CreditLedger$purchaseArgs<ExtArgs>;
};
export type CreditLedgerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.CreditLedger$purchaseArgs<ExtArgs>;
};
export type $CreditLedgerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CreditLedger";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        purchase: Prisma.$PurchasePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        delta: number;
        balanceAfter: number;
        reason: $Enums.LedgerReason;
        refType: string | null;
        refId: string | null;
        purchaseId: string | null;
        idempotencyKey: string | null;
        note: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["creditLedger"]>;
    composites: {};
};
export type CreditLedgerGetPayload<S extends boolean | null | undefined | CreditLedgerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload, S>;
export type CreditLedgerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CreditLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CreditLedgerCountAggregateInputType | true;
};
export interface CreditLedgerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CreditLedger'];
        meta: {
            name: 'CreditLedger';
        };
    };
    findUnique<T extends CreditLedgerFindUniqueArgs>(args: Prisma.SelectSubset<T, CreditLedgerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CreditLedgerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CreditLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CreditLedgerFindFirstArgs>(args?: Prisma.SelectSubset<T, CreditLedgerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CreditLedgerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CreditLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CreditLedgerFindManyArgs>(args?: Prisma.SelectSubset<T, CreditLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CreditLedgerCreateArgs>(args: Prisma.SelectSubset<T, CreditLedgerCreateArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CreditLedgerCreateManyArgs>(args?: Prisma.SelectSubset<T, CreditLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CreditLedgerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CreditLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CreditLedgerDeleteArgs>(args: Prisma.SelectSubset<T, CreditLedgerDeleteArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CreditLedgerUpdateArgs>(args: Prisma.SelectSubset<T, CreditLedgerUpdateArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CreditLedgerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CreditLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CreditLedgerUpdateManyArgs>(args: Prisma.SelectSubset<T, CreditLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CreditLedgerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CreditLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CreditLedgerUpsertArgs>(args: Prisma.SelectSubset<T, CreditLedgerUpsertArgs<ExtArgs>>): Prisma.Prisma__CreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$CreditLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CreditLedgerCountArgs>(args?: Prisma.Subset<T, CreditLedgerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CreditLedgerCountAggregateOutputType> : number>;
    aggregate<T extends CreditLedgerAggregateArgs>(args: Prisma.Subset<T, CreditLedgerAggregateArgs>): Prisma.PrismaPromise<GetCreditLedgerAggregateType<T>>;
    groupBy<T extends CreditLedgerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CreditLedgerGroupByArgs['orderBy'];
    } : {
        orderBy?: CreditLedgerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CreditLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CreditLedgerFieldRefs;
}
export interface Prisma__CreditLedgerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchase<T extends Prisma.CreditLedger$purchaseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CreditLedger$purchaseArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CreditLedgerFieldRefs {
    readonly id: Prisma.FieldRef<"CreditLedger", 'String'>;
    readonly userId: Prisma.FieldRef<"CreditLedger", 'String'>;
    readonly delta: Prisma.FieldRef<"CreditLedger", 'Int'>;
    readonly balanceAfter: Prisma.FieldRef<"CreditLedger", 'Int'>;
    readonly reason: Prisma.FieldRef<"CreditLedger", 'LedgerReason'>;
    readonly refType: Prisma.FieldRef<"CreditLedger", 'String'>;
    readonly refId: Prisma.FieldRef<"CreditLedger", 'String'>;
    readonly purchaseId: Prisma.FieldRef<"CreditLedger", 'String'>;
    readonly idempotencyKey: Prisma.FieldRef<"CreditLedger", 'String'>;
    readonly note: Prisma.FieldRef<"CreditLedger", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CreditLedger", 'DateTime'>;
}
export type CreditLedgerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
    where: Prisma.CreditLedgerWhereUniqueInput;
};
export type CreditLedgerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
    where: Prisma.CreditLedgerWhereUniqueInput;
};
export type CreditLedgerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreditLedgerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreditLedgerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreditLedgerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditLedgerCreateInput, Prisma.CreditLedgerUncheckedCreateInput>;
};
export type CreditLedgerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CreditLedgerCreateManyInput | Prisma.CreditLedgerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CreditLedgerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    data: Prisma.CreditLedgerCreateManyInput | Prisma.CreditLedgerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CreditLedgerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CreditLedgerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditLedgerUpdateInput, Prisma.CreditLedgerUncheckedUpdateInput>;
    where: Prisma.CreditLedgerWhereUniqueInput;
};
export type CreditLedgerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CreditLedgerUpdateManyMutationInput, Prisma.CreditLedgerUncheckedUpdateManyInput>;
    where?: Prisma.CreditLedgerWhereInput;
    limit?: number;
};
export type CreditLedgerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreditLedgerUpdateManyMutationInput, Prisma.CreditLedgerUncheckedUpdateManyInput>;
    where?: Prisma.CreditLedgerWhereInput;
    limit?: number;
    include?: Prisma.CreditLedgerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CreditLedgerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
    where: Prisma.CreditLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreditLedgerCreateInput, Prisma.CreditLedgerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CreditLedgerUpdateInput, Prisma.CreditLedgerUncheckedUpdateInput>;
};
export type CreditLedgerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
    where: Prisma.CreditLedgerWhereUniqueInput;
};
export type CreditLedgerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreditLedgerWhereInput;
    limit?: number;
};
export type CreditLedger$purchaseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
};
export type CreditLedgerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.CreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.CreditLedgerInclude<ExtArgs> | null;
};
