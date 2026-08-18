import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EntitlementModel = runtime.Types.Result.DefaultSelection<Prisma.$EntitlementPayload>;
export type AggregateEntitlement = {
    _count: EntitlementCountAggregateOutputType | null;
    _avg: EntitlementAvgAggregateOutputType | null;
    _sum: EntitlementSumAggregateOutputType | null;
    _min: EntitlementMinAggregateOutputType | null;
    _max: EntitlementMaxAggregateOutputType | null;
};
export type EntitlementAvgAggregateOutputType = {
    remaining: number | null;
};
export type EntitlementSumAggregateOutputType = {
    remaining: number | null;
};
export type EntitlementMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    key: $Enums.EntitlementKey | null;
    source: $Enums.EntitlementSource | null;
    remaining: number | null;
    grantedAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    refType: string | null;
    refId: string | null;
};
export type EntitlementMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    key: $Enums.EntitlementKey | null;
    source: $Enums.EntitlementSource | null;
    remaining: number | null;
    grantedAt: Date | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    refType: string | null;
    refId: string | null;
};
export type EntitlementCountAggregateOutputType = {
    id: number;
    userId: number;
    key: number;
    source: number;
    remaining: number;
    grantedAt: number;
    expiresAt: number;
    revokedAt: number;
    refType: number;
    refId: number;
    _all: number;
};
export type EntitlementAvgAggregateInputType = {
    remaining?: true;
};
export type EntitlementSumAggregateInputType = {
    remaining?: true;
};
export type EntitlementMinAggregateInputType = {
    id?: true;
    userId?: true;
    key?: true;
    source?: true;
    remaining?: true;
    grantedAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    refType?: true;
    refId?: true;
};
export type EntitlementMaxAggregateInputType = {
    id?: true;
    userId?: true;
    key?: true;
    source?: true;
    remaining?: true;
    grantedAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    refType?: true;
    refId?: true;
};
export type EntitlementCountAggregateInputType = {
    id?: true;
    userId?: true;
    key?: true;
    source?: true;
    remaining?: true;
    grantedAt?: true;
    expiresAt?: true;
    revokedAt?: true;
    refType?: true;
    refId?: true;
    _all?: true;
};
export type EntitlementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntitlementWhereInput;
    orderBy?: Prisma.EntitlementOrderByWithRelationInput | Prisma.EntitlementOrderByWithRelationInput[];
    cursor?: Prisma.EntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EntitlementCountAggregateInputType;
    _avg?: EntitlementAvgAggregateInputType;
    _sum?: EntitlementSumAggregateInputType;
    _min?: EntitlementMinAggregateInputType;
    _max?: EntitlementMaxAggregateInputType;
};
export type GetEntitlementAggregateType<T extends EntitlementAggregateArgs> = {
    [P in keyof T & keyof AggregateEntitlement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEntitlement[P]> : Prisma.GetScalarType<T[P], AggregateEntitlement[P]>;
};
export type EntitlementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntitlementWhereInput;
    orderBy?: Prisma.EntitlementOrderByWithAggregationInput | Prisma.EntitlementOrderByWithAggregationInput[];
    by: Prisma.EntitlementScalarFieldEnum[] | Prisma.EntitlementScalarFieldEnum;
    having?: Prisma.EntitlementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EntitlementCountAggregateInputType | true;
    _avg?: EntitlementAvgAggregateInputType;
    _sum?: EntitlementSumAggregateInputType;
    _min?: EntitlementMinAggregateInputType;
    _max?: EntitlementMaxAggregateInputType;
};
export type EntitlementGroupByOutputType = {
    id: string;
    userId: string;
    key: $Enums.EntitlementKey;
    source: $Enums.EntitlementSource;
    remaining: number | null;
    grantedAt: Date;
    expiresAt: Date | null;
    revokedAt: Date | null;
    refType: string | null;
    refId: string | null;
    _count: EntitlementCountAggregateOutputType | null;
    _avg: EntitlementAvgAggregateOutputType | null;
    _sum: EntitlementSumAggregateOutputType | null;
    _min: EntitlementMinAggregateOutputType | null;
    _max: EntitlementMaxAggregateOutputType | null;
};
export type GetEntitlementGroupByPayload<T extends EntitlementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EntitlementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EntitlementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EntitlementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EntitlementGroupByOutputType[P]>;
}>>;
export type EntitlementWhereInput = {
    AND?: Prisma.EntitlementWhereInput | Prisma.EntitlementWhereInput[];
    OR?: Prisma.EntitlementWhereInput[];
    NOT?: Prisma.EntitlementWhereInput | Prisma.EntitlementWhereInput[];
    id?: Prisma.UuidFilter<"Entitlement"> | string;
    userId?: Prisma.UuidFilter<"Entitlement"> | string;
    key?: Prisma.EnumEntitlementKeyFilter<"Entitlement"> | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFilter<"Entitlement"> | $Enums.EntitlementSource;
    remaining?: Prisma.IntNullableFilter<"Entitlement"> | number | null;
    grantedAt?: Prisma.DateTimeFilter<"Entitlement"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"Entitlement"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Entitlement"> | Date | string | null;
    refType?: Prisma.StringNullableFilter<"Entitlement"> | string | null;
    refId?: Prisma.UuidNullableFilter<"Entitlement"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type EntitlementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    remaining?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    refType?: Prisma.SortOrderInput | Prisma.SortOrder;
    refId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type EntitlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EntitlementWhereInput | Prisma.EntitlementWhereInput[];
    OR?: Prisma.EntitlementWhereInput[];
    NOT?: Prisma.EntitlementWhereInput | Prisma.EntitlementWhereInput[];
    userId?: Prisma.UuidFilter<"Entitlement"> | string;
    key?: Prisma.EnumEntitlementKeyFilter<"Entitlement"> | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFilter<"Entitlement"> | $Enums.EntitlementSource;
    remaining?: Prisma.IntNullableFilter<"Entitlement"> | number | null;
    grantedAt?: Prisma.DateTimeFilter<"Entitlement"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"Entitlement"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Entitlement"> | Date | string | null;
    refType?: Prisma.StringNullableFilter<"Entitlement"> | string | null;
    refId?: Prisma.UuidNullableFilter<"Entitlement"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type EntitlementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    remaining?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    refType?: Prisma.SortOrderInput | Prisma.SortOrder;
    refId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EntitlementCountOrderByAggregateInput;
    _avg?: Prisma.EntitlementAvgOrderByAggregateInput;
    _max?: Prisma.EntitlementMaxOrderByAggregateInput;
    _min?: Prisma.EntitlementMinOrderByAggregateInput;
    _sum?: Prisma.EntitlementSumOrderByAggregateInput;
};
export type EntitlementScalarWhereWithAggregatesInput = {
    AND?: Prisma.EntitlementScalarWhereWithAggregatesInput | Prisma.EntitlementScalarWhereWithAggregatesInput[];
    OR?: Prisma.EntitlementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EntitlementScalarWhereWithAggregatesInput | Prisma.EntitlementScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Entitlement"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Entitlement"> | string;
    key?: Prisma.EnumEntitlementKeyWithAggregatesFilter<"Entitlement"> | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceWithAggregatesFilter<"Entitlement"> | $Enums.EntitlementSource;
    remaining?: Prisma.IntNullableWithAggregatesFilter<"Entitlement"> | number | null;
    grantedAt?: Prisma.DateTimeWithAggregatesFilter<"Entitlement"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Entitlement"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Entitlement"> | Date | string | null;
    refType?: Prisma.StringNullableWithAggregatesFilter<"Entitlement"> | string | null;
    refId?: Prisma.UuidNullableWithAggregatesFilter<"Entitlement"> | string | null;
};
export type EntitlementCreateInput = {
    id?: string;
    key: $Enums.EntitlementKey;
    source: $Enums.EntitlementSource;
    remaining?: number | null;
    grantedAt?: Date | string;
    expiresAt?: Date | string | null;
    revokedAt?: Date | string | null;
    refType?: string | null;
    refId?: string | null;
    user: Prisma.UserCreateNestedOneWithoutEntitlementsInput;
};
export type EntitlementUncheckedCreateInput = {
    id?: string;
    userId: string;
    key: $Enums.EntitlementKey;
    source: $Enums.EntitlementSource;
    remaining?: number | null;
    grantedAt?: Date | string;
    expiresAt?: Date | string | null;
    revokedAt?: Date | string | null;
    refType?: string | null;
    refId?: string | null;
};
export type EntitlementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.EnumEntitlementKeyFieldUpdateOperationsInput | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFieldUpdateOperationsInput | $Enums.EntitlementSource;
    remaining?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutEntitlementsNestedInput;
};
export type EntitlementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.EnumEntitlementKeyFieldUpdateOperationsInput | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFieldUpdateOperationsInput | $Enums.EntitlementSource;
    remaining?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntitlementCreateManyInput = {
    id?: string;
    userId: string;
    key: $Enums.EntitlementKey;
    source: $Enums.EntitlementSource;
    remaining?: number | null;
    grantedAt?: Date | string;
    expiresAt?: Date | string | null;
    revokedAt?: Date | string | null;
    refType?: string | null;
    refId?: string | null;
};
export type EntitlementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.EnumEntitlementKeyFieldUpdateOperationsInput | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFieldUpdateOperationsInput | $Enums.EntitlementSource;
    remaining?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntitlementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.EnumEntitlementKeyFieldUpdateOperationsInput | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFieldUpdateOperationsInput | $Enums.EntitlementSource;
    remaining?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntitlementListRelationFilter = {
    every?: Prisma.EntitlementWhereInput;
    some?: Prisma.EntitlementWhereInput;
    none?: Prisma.EntitlementWhereInput;
};
export type EntitlementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EntitlementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    remaining?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    refType?: Prisma.SortOrder;
    refId?: Prisma.SortOrder;
};
export type EntitlementAvgOrderByAggregateInput = {
    remaining?: Prisma.SortOrder;
};
export type EntitlementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    remaining?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    refType?: Prisma.SortOrder;
    refId?: Prisma.SortOrder;
};
export type EntitlementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    remaining?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    refType?: Prisma.SortOrder;
    refId?: Prisma.SortOrder;
};
export type EntitlementSumOrderByAggregateInput = {
    remaining?: Prisma.SortOrder;
};
export type EntitlementCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EntitlementCreateWithoutUserInput, Prisma.EntitlementUncheckedCreateWithoutUserInput> | Prisma.EntitlementCreateWithoutUserInput[] | Prisma.EntitlementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EntitlementCreateOrConnectWithoutUserInput | Prisma.EntitlementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EntitlementCreateManyUserInputEnvelope;
    connect?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
};
export type EntitlementUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EntitlementCreateWithoutUserInput, Prisma.EntitlementUncheckedCreateWithoutUserInput> | Prisma.EntitlementCreateWithoutUserInput[] | Prisma.EntitlementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EntitlementCreateOrConnectWithoutUserInput | Prisma.EntitlementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EntitlementCreateManyUserInputEnvelope;
    connect?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
};
export type EntitlementUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EntitlementCreateWithoutUserInput, Prisma.EntitlementUncheckedCreateWithoutUserInput> | Prisma.EntitlementCreateWithoutUserInput[] | Prisma.EntitlementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EntitlementCreateOrConnectWithoutUserInput | Prisma.EntitlementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EntitlementUpsertWithWhereUniqueWithoutUserInput | Prisma.EntitlementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EntitlementCreateManyUserInputEnvelope;
    set?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    disconnect?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    delete?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    connect?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    update?: Prisma.EntitlementUpdateWithWhereUniqueWithoutUserInput | Prisma.EntitlementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EntitlementUpdateManyWithWhereWithoutUserInput | Prisma.EntitlementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EntitlementScalarWhereInput | Prisma.EntitlementScalarWhereInput[];
};
export type EntitlementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EntitlementCreateWithoutUserInput, Prisma.EntitlementUncheckedCreateWithoutUserInput> | Prisma.EntitlementCreateWithoutUserInput[] | Prisma.EntitlementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EntitlementCreateOrConnectWithoutUserInput | Prisma.EntitlementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EntitlementUpsertWithWhereUniqueWithoutUserInput | Prisma.EntitlementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EntitlementCreateManyUserInputEnvelope;
    set?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    disconnect?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    delete?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    connect?: Prisma.EntitlementWhereUniqueInput | Prisma.EntitlementWhereUniqueInput[];
    update?: Prisma.EntitlementUpdateWithWhereUniqueWithoutUserInput | Prisma.EntitlementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EntitlementUpdateManyWithWhereWithoutUserInput | Prisma.EntitlementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EntitlementScalarWhereInput | Prisma.EntitlementScalarWhereInput[];
};
export type EnumEntitlementKeyFieldUpdateOperationsInput = {
    set?: $Enums.EntitlementKey;
};
export type EnumEntitlementSourceFieldUpdateOperationsInput = {
    set?: $Enums.EntitlementSource;
};
export type EntitlementCreateWithoutUserInput = {
    id?: string;
    key: $Enums.EntitlementKey;
    source: $Enums.EntitlementSource;
    remaining?: number | null;
    grantedAt?: Date | string;
    expiresAt?: Date | string | null;
    revokedAt?: Date | string | null;
    refType?: string | null;
    refId?: string | null;
};
export type EntitlementUncheckedCreateWithoutUserInput = {
    id?: string;
    key: $Enums.EntitlementKey;
    source: $Enums.EntitlementSource;
    remaining?: number | null;
    grantedAt?: Date | string;
    expiresAt?: Date | string | null;
    revokedAt?: Date | string | null;
    refType?: string | null;
    refId?: string | null;
};
export type EntitlementCreateOrConnectWithoutUserInput = {
    where: Prisma.EntitlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntitlementCreateWithoutUserInput, Prisma.EntitlementUncheckedCreateWithoutUserInput>;
};
export type EntitlementCreateManyUserInputEnvelope = {
    data: Prisma.EntitlementCreateManyUserInput | Prisma.EntitlementCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type EntitlementUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.EntitlementWhereUniqueInput;
    update: Prisma.XOR<Prisma.EntitlementUpdateWithoutUserInput, Prisma.EntitlementUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EntitlementCreateWithoutUserInput, Prisma.EntitlementUncheckedCreateWithoutUserInput>;
};
export type EntitlementUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.EntitlementWhereUniqueInput;
    data: Prisma.XOR<Prisma.EntitlementUpdateWithoutUserInput, Prisma.EntitlementUncheckedUpdateWithoutUserInput>;
};
export type EntitlementUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.EntitlementScalarWhereInput;
    data: Prisma.XOR<Prisma.EntitlementUpdateManyMutationInput, Prisma.EntitlementUncheckedUpdateManyWithoutUserInput>;
};
export type EntitlementScalarWhereInput = {
    AND?: Prisma.EntitlementScalarWhereInput | Prisma.EntitlementScalarWhereInput[];
    OR?: Prisma.EntitlementScalarWhereInput[];
    NOT?: Prisma.EntitlementScalarWhereInput | Prisma.EntitlementScalarWhereInput[];
    id?: Prisma.UuidFilter<"Entitlement"> | string;
    userId?: Prisma.UuidFilter<"Entitlement"> | string;
    key?: Prisma.EnumEntitlementKeyFilter<"Entitlement"> | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFilter<"Entitlement"> | $Enums.EntitlementSource;
    remaining?: Prisma.IntNullableFilter<"Entitlement"> | number | null;
    grantedAt?: Prisma.DateTimeFilter<"Entitlement"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"Entitlement"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Entitlement"> | Date | string | null;
    refType?: Prisma.StringNullableFilter<"Entitlement"> | string | null;
    refId?: Prisma.UuidNullableFilter<"Entitlement"> | string | null;
};
export type EntitlementCreateManyUserInput = {
    id?: string;
    key: $Enums.EntitlementKey;
    source: $Enums.EntitlementSource;
    remaining?: number | null;
    grantedAt?: Date | string;
    expiresAt?: Date | string | null;
    revokedAt?: Date | string | null;
    refType?: string | null;
    refId?: string | null;
};
export type EntitlementUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.EnumEntitlementKeyFieldUpdateOperationsInput | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFieldUpdateOperationsInput | $Enums.EntitlementSource;
    remaining?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntitlementUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.EnumEntitlementKeyFieldUpdateOperationsInput | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFieldUpdateOperationsInput | $Enums.EntitlementSource;
    remaining?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntitlementUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.EnumEntitlementKeyFieldUpdateOperationsInput | $Enums.EntitlementKey;
    source?: Prisma.EnumEntitlementSourceFieldUpdateOperationsInput | $Enums.EntitlementSource;
    remaining?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntitlementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    key?: boolean;
    source?: boolean;
    remaining?: boolean;
    grantedAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    refType?: boolean;
    refId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["entitlement"]>;
export type EntitlementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    key?: boolean;
    source?: boolean;
    remaining?: boolean;
    grantedAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    refType?: boolean;
    refId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["entitlement"]>;
export type EntitlementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    key?: boolean;
    source?: boolean;
    remaining?: boolean;
    grantedAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    refType?: boolean;
    refId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["entitlement"]>;
export type EntitlementSelectScalar = {
    id?: boolean;
    userId?: boolean;
    key?: boolean;
    source?: boolean;
    remaining?: boolean;
    grantedAt?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    refType?: boolean;
    refId?: boolean;
};
export type EntitlementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "key" | "source" | "remaining" | "grantedAt" | "expiresAt" | "revokedAt" | "refType" | "refId", ExtArgs["result"]["entitlement"]>;
export type EntitlementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EntitlementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EntitlementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EntitlementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Entitlement";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        key: $Enums.EntitlementKey;
        source: $Enums.EntitlementSource;
        remaining: number | null;
        grantedAt: Date;
        expiresAt: Date | null;
        revokedAt: Date | null;
        refType: string | null;
        refId: string | null;
    }, ExtArgs["result"]["entitlement"]>;
    composites: {};
};
export type EntitlementGetPayload<S extends boolean | null | undefined | EntitlementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EntitlementPayload, S>;
export type EntitlementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EntitlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EntitlementCountAggregateInputType | true;
};
export interface EntitlementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Entitlement'];
        meta: {
            name: 'Entitlement';
        };
    };
    findUnique<T extends EntitlementFindUniqueArgs>(args: Prisma.SelectSubset<T, EntitlementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EntitlementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EntitlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EntitlementFindFirstArgs>(args?: Prisma.SelectSubset<T, EntitlementFindFirstArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EntitlementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EntitlementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EntitlementFindManyArgs>(args?: Prisma.SelectSubset<T, EntitlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EntitlementCreateArgs>(args: Prisma.SelectSubset<T, EntitlementCreateArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EntitlementCreateManyArgs>(args?: Prisma.SelectSubset<T, EntitlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EntitlementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EntitlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EntitlementDeleteArgs>(args: Prisma.SelectSubset<T, EntitlementDeleteArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EntitlementUpdateArgs>(args: Prisma.SelectSubset<T, EntitlementUpdateArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EntitlementDeleteManyArgs>(args?: Prisma.SelectSubset<T, EntitlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EntitlementUpdateManyArgs>(args: Prisma.SelectSubset<T, EntitlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EntitlementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EntitlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EntitlementUpsertArgs>(args: Prisma.SelectSubset<T, EntitlementUpsertArgs<ExtArgs>>): Prisma.Prisma__EntitlementClient<runtime.Types.Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EntitlementCountArgs>(args?: Prisma.Subset<T, EntitlementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EntitlementCountAggregateOutputType> : number>;
    aggregate<T extends EntitlementAggregateArgs>(args: Prisma.Subset<T, EntitlementAggregateArgs>): Prisma.PrismaPromise<GetEntitlementAggregateType<T>>;
    groupBy<T extends EntitlementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EntitlementGroupByArgs['orderBy'];
    } : {
        orderBy?: EntitlementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EntitlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntitlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EntitlementFieldRefs;
}
export interface Prisma__EntitlementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EntitlementFieldRefs {
    readonly id: Prisma.FieldRef<"Entitlement", 'String'>;
    readonly userId: Prisma.FieldRef<"Entitlement", 'String'>;
    readonly key: Prisma.FieldRef<"Entitlement", 'EntitlementKey'>;
    readonly source: Prisma.FieldRef<"Entitlement", 'EntitlementSource'>;
    readonly remaining: Prisma.FieldRef<"Entitlement", 'Int'>;
    readonly grantedAt: Prisma.FieldRef<"Entitlement", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"Entitlement", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"Entitlement", 'DateTime'>;
    readonly refType: Prisma.FieldRef<"Entitlement", 'String'>;
    readonly refId: Prisma.FieldRef<"Entitlement", 'String'>;
}
export type EntitlementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    where: Prisma.EntitlementWhereUniqueInput;
};
export type EntitlementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    where: Prisma.EntitlementWhereUniqueInput;
};
export type EntitlementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    where?: Prisma.EntitlementWhereInput;
    orderBy?: Prisma.EntitlementOrderByWithRelationInput | Prisma.EntitlementOrderByWithRelationInput[];
    cursor?: Prisma.EntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntitlementScalarFieldEnum | Prisma.EntitlementScalarFieldEnum[];
};
export type EntitlementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    where?: Prisma.EntitlementWhereInput;
    orderBy?: Prisma.EntitlementOrderByWithRelationInput | Prisma.EntitlementOrderByWithRelationInput[];
    cursor?: Prisma.EntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntitlementScalarFieldEnum | Prisma.EntitlementScalarFieldEnum[];
};
export type EntitlementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    where?: Prisma.EntitlementWhereInput;
    orderBy?: Prisma.EntitlementOrderByWithRelationInput | Prisma.EntitlementOrderByWithRelationInput[];
    cursor?: Prisma.EntitlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntitlementScalarFieldEnum | Prisma.EntitlementScalarFieldEnum[];
};
export type EntitlementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EntitlementCreateInput, Prisma.EntitlementUncheckedCreateInput>;
};
export type EntitlementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EntitlementCreateManyInput | Prisma.EntitlementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EntitlementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    data: Prisma.EntitlementCreateManyInput | Prisma.EntitlementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EntitlementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EntitlementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EntitlementUpdateInput, Prisma.EntitlementUncheckedUpdateInput>;
    where: Prisma.EntitlementWhereUniqueInput;
};
export type EntitlementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EntitlementUpdateManyMutationInput, Prisma.EntitlementUncheckedUpdateManyInput>;
    where?: Prisma.EntitlementWhereInput;
    limit?: number;
};
export type EntitlementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EntitlementUpdateManyMutationInput, Prisma.EntitlementUncheckedUpdateManyInput>;
    where?: Prisma.EntitlementWhereInput;
    limit?: number;
    include?: Prisma.EntitlementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EntitlementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    where: Prisma.EntitlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntitlementCreateInput, Prisma.EntitlementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EntitlementUpdateInput, Prisma.EntitlementUncheckedUpdateInput>;
};
export type EntitlementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
    where: Prisma.EntitlementWhereUniqueInput;
};
export type EntitlementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntitlementWhereInput;
    limit?: number;
};
export type EntitlementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitlementSelect<ExtArgs> | null;
    omit?: Prisma.EntitlementOmit<ExtArgs> | null;
    include?: Prisma.EntitlementInclude<ExtArgs> | null;
};
