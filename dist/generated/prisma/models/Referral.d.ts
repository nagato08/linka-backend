import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReferralModel = runtime.Types.Result.DefaultSelection<Prisma.$ReferralPayload>;
export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null;
    _avg: ReferralAvgAggregateOutputType | null;
    _sum: ReferralSumAggregateOutputType | null;
    _min: ReferralMinAggregateOutputType | null;
    _max: ReferralMaxAggregateOutputType | null;
};
export type ReferralAvgAggregateOutputType = {
    rewardCredits: number | null;
};
export type ReferralSumAggregateOutputType = {
    rewardCredits: number | null;
};
export type ReferralMinAggregateOutputType = {
    id: string | null;
    referrerId: string | null;
    refereeId: string | null;
    code: string | null;
    status: $Enums.ReferralStatus | null;
    rewardCredits: number | null;
    qualifiedAt: Date | null;
    rewardedAt: Date | null;
    revokedAt: Date | null;
    revokedReason: string | null;
    createdAt: Date | null;
};
export type ReferralMaxAggregateOutputType = {
    id: string | null;
    referrerId: string | null;
    refereeId: string | null;
    code: string | null;
    status: $Enums.ReferralStatus | null;
    rewardCredits: number | null;
    qualifiedAt: Date | null;
    rewardedAt: Date | null;
    revokedAt: Date | null;
    revokedReason: string | null;
    createdAt: Date | null;
};
export type ReferralCountAggregateOutputType = {
    id: number;
    referrerId: number;
    refereeId: number;
    code: number;
    status: number;
    rewardCredits: number;
    qualifiedAt: number;
    rewardedAt: number;
    revokedAt: number;
    revokedReason: number;
    createdAt: number;
    _all: number;
};
export type ReferralAvgAggregateInputType = {
    rewardCredits?: true;
};
export type ReferralSumAggregateInputType = {
    rewardCredits?: true;
};
export type ReferralMinAggregateInputType = {
    id?: true;
    referrerId?: true;
    refereeId?: true;
    code?: true;
    status?: true;
    rewardCredits?: true;
    qualifiedAt?: true;
    rewardedAt?: true;
    revokedAt?: true;
    revokedReason?: true;
    createdAt?: true;
};
export type ReferralMaxAggregateInputType = {
    id?: true;
    referrerId?: true;
    refereeId?: true;
    code?: true;
    status?: true;
    rewardCredits?: true;
    qualifiedAt?: true;
    rewardedAt?: true;
    revokedAt?: true;
    revokedReason?: true;
    createdAt?: true;
};
export type ReferralCountAggregateInputType = {
    id?: true;
    referrerId?: true;
    refereeId?: true;
    code?: true;
    status?: true;
    rewardCredits?: true;
    qualifiedAt?: true;
    rewardedAt?: true;
    revokedAt?: true;
    revokedReason?: true;
    createdAt?: true;
    _all?: true;
};
export type ReferralAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReferralCountAggregateInputType;
    _avg?: ReferralAvgAggregateInputType;
    _sum?: ReferralSumAggregateInputType;
    _min?: ReferralMinAggregateInputType;
    _max?: ReferralMaxAggregateInputType;
};
export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
    [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReferral[P]> : Prisma.GetScalarType<T[P], AggregateReferral[P]>;
};
export type ReferralGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithAggregationInput | Prisma.ReferralOrderByWithAggregationInput[];
    by: Prisma.ReferralScalarFieldEnum[] | Prisma.ReferralScalarFieldEnum;
    having?: Prisma.ReferralScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReferralCountAggregateInputType | true;
    _avg?: ReferralAvgAggregateInputType;
    _sum?: ReferralSumAggregateInputType;
    _min?: ReferralMinAggregateInputType;
    _max?: ReferralMaxAggregateInputType;
};
export type ReferralGroupByOutputType = {
    id: string;
    referrerId: string;
    refereeId: string;
    code: string;
    status: $Enums.ReferralStatus;
    rewardCredits: number;
    qualifiedAt: Date | null;
    rewardedAt: Date | null;
    revokedAt: Date | null;
    revokedReason: string | null;
    createdAt: Date;
    _count: ReferralCountAggregateOutputType | null;
    _avg: ReferralAvgAggregateOutputType | null;
    _sum: ReferralSumAggregateOutputType | null;
    _min: ReferralMinAggregateOutputType | null;
    _max: ReferralMaxAggregateOutputType | null;
};
export type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReferralGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReferralGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReferralGroupByOutputType[P]>;
}>>;
export type ReferralWhereInput = {
    AND?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    OR?: Prisma.ReferralWhereInput[];
    NOT?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    id?: Prisma.UuidFilter<"Referral"> | string;
    referrerId?: Prisma.UuidFilter<"Referral"> | string;
    refereeId?: Prisma.UuidFilter<"Referral"> | string;
    code?: Prisma.StringFilter<"Referral"> | string;
    status?: Prisma.EnumReferralStatusFilter<"Referral"> | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFilter<"Referral"> | number;
    qualifiedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    rewardedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    revokedReason?: Prisma.StringNullableFilter<"Referral"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Referral"> | Date | string;
    referrer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    referee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ReferralOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    referrerId?: Prisma.SortOrder;
    refereeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rewardCredits?: Prisma.SortOrder;
    qualifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rewardedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    referrer?: Prisma.UserOrderByWithRelationInput;
    referee?: Prisma.UserOrderByWithRelationInput;
};
export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    refereeId?: string;
    AND?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    OR?: Prisma.ReferralWhereInput[];
    NOT?: Prisma.ReferralWhereInput | Prisma.ReferralWhereInput[];
    referrerId?: Prisma.UuidFilter<"Referral"> | string;
    code?: Prisma.StringFilter<"Referral"> | string;
    status?: Prisma.EnumReferralStatusFilter<"Referral"> | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFilter<"Referral"> | number;
    qualifiedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    rewardedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    revokedReason?: Prisma.StringNullableFilter<"Referral"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Referral"> | Date | string;
    referrer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    referee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "refereeId">;
export type ReferralOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    referrerId?: Prisma.SortOrder;
    refereeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rewardCredits?: Prisma.SortOrder;
    qualifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rewardedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReferralCountOrderByAggregateInput;
    _avg?: Prisma.ReferralAvgOrderByAggregateInput;
    _max?: Prisma.ReferralMaxOrderByAggregateInput;
    _min?: Prisma.ReferralMinOrderByAggregateInput;
    _sum?: Prisma.ReferralSumOrderByAggregateInput;
};
export type ReferralScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReferralScalarWhereWithAggregatesInput | Prisma.ReferralScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReferralScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReferralScalarWhereWithAggregatesInput | Prisma.ReferralScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Referral"> | string;
    referrerId?: Prisma.UuidWithAggregatesFilter<"Referral"> | string;
    refereeId?: Prisma.UuidWithAggregatesFilter<"Referral"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Referral"> | string;
    status?: Prisma.EnumReferralStatusWithAggregatesFilter<"Referral"> | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntWithAggregatesFilter<"Referral"> | number;
    qualifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Referral"> | Date | string | null;
    rewardedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Referral"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Referral"> | Date | string | null;
    revokedReason?: Prisma.StringNullableWithAggregatesFilter<"Referral"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Referral"> | Date | string;
};
export type ReferralCreateInput = {
    id?: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
    referrer: Prisma.UserCreateNestedOneWithoutReferralsGivenInput;
    referee: Prisma.UserCreateNestedOneWithoutReferralReceivedInput;
};
export type ReferralUncheckedCreateInput = {
    id?: string;
    referrerId: string;
    refereeId: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
};
export type ReferralUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: Prisma.UserUpdateOneRequiredWithoutReferralsGivenNestedInput;
    referee?: Prisma.UserUpdateOneRequiredWithoutReferralReceivedNestedInput;
};
export type ReferralUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrerId?: Prisma.StringFieldUpdateOperationsInput | string;
    refereeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCreateManyInput = {
    id?: string;
    referrerId: string;
    refereeId: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
};
export type ReferralUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrerId?: Prisma.StringFieldUpdateOperationsInput | string;
    refereeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralListRelationFilter = {
    every?: Prisma.ReferralWhereInput;
    some?: Prisma.ReferralWhereInput;
    none?: Prisma.ReferralWhereInput;
};
export type ReferralNullableScalarRelationFilter = {
    is?: Prisma.ReferralWhereInput | null;
    isNot?: Prisma.ReferralWhereInput | null;
};
export type ReferralOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReferralCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referrerId?: Prisma.SortOrder;
    refereeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rewardCredits?: Prisma.SortOrder;
    qualifiedAt?: Prisma.SortOrder;
    rewardedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReferralAvgOrderByAggregateInput = {
    rewardCredits?: Prisma.SortOrder;
};
export type ReferralMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referrerId?: Prisma.SortOrder;
    refereeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rewardCredits?: Prisma.SortOrder;
    qualifiedAt?: Prisma.SortOrder;
    rewardedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReferralMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referrerId?: Prisma.SortOrder;
    refereeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rewardCredits?: Prisma.SortOrder;
    qualifiedAt?: Prisma.SortOrder;
    rewardedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReferralSumOrderByAggregateInput = {
    rewardCredits?: Prisma.SortOrder;
};
export type ReferralCreateNestedManyWithoutReferrerInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReferrerInput, Prisma.ReferralUncheckedCreateWithoutReferrerInput> | Prisma.ReferralCreateWithoutReferrerInput[] | Prisma.ReferralUncheckedCreateWithoutReferrerInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReferrerInput | Prisma.ReferralCreateOrConnectWithoutReferrerInput[];
    createMany?: Prisma.ReferralCreateManyReferrerInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralCreateNestedOneWithoutRefereeInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutRefereeInput, Prisma.ReferralUncheckedCreateWithoutRefereeInput>;
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutRefereeInput;
    connect?: Prisma.ReferralWhereUniqueInput;
};
export type ReferralUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReferrerInput, Prisma.ReferralUncheckedCreateWithoutReferrerInput> | Prisma.ReferralCreateWithoutReferrerInput[] | Prisma.ReferralUncheckedCreateWithoutReferrerInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReferrerInput | Prisma.ReferralCreateOrConnectWithoutReferrerInput[];
    createMany?: Prisma.ReferralCreateManyReferrerInputEnvelope;
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
};
export type ReferralUncheckedCreateNestedOneWithoutRefereeInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutRefereeInput, Prisma.ReferralUncheckedCreateWithoutRefereeInput>;
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutRefereeInput;
    connect?: Prisma.ReferralWhereUniqueInput;
};
export type ReferralUpdateManyWithoutReferrerNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReferrerInput, Prisma.ReferralUncheckedCreateWithoutReferrerInput> | Prisma.ReferralCreateWithoutReferrerInput[] | Prisma.ReferralUncheckedCreateWithoutReferrerInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReferrerInput | Prisma.ReferralCreateOrConnectWithoutReferrerInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutReferrerInput | Prisma.ReferralUpsertWithWhereUniqueWithoutReferrerInput[];
    createMany?: Prisma.ReferralCreateManyReferrerInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutReferrerInput | Prisma.ReferralUpdateWithWhereUniqueWithoutReferrerInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutReferrerInput | Prisma.ReferralUpdateManyWithWhereWithoutReferrerInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type ReferralUpdateOneWithoutRefereeNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutRefereeInput, Prisma.ReferralUncheckedCreateWithoutRefereeInput>;
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutRefereeInput;
    upsert?: Prisma.ReferralUpsertWithoutRefereeInput;
    disconnect?: Prisma.ReferralWhereInput | boolean;
    delete?: Prisma.ReferralWhereInput | boolean;
    connect?: Prisma.ReferralWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReferralUpdateToOneWithWhereWithoutRefereeInput, Prisma.ReferralUpdateWithoutRefereeInput>, Prisma.ReferralUncheckedUpdateWithoutRefereeInput>;
};
export type ReferralUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutReferrerInput, Prisma.ReferralUncheckedCreateWithoutReferrerInput> | Prisma.ReferralCreateWithoutReferrerInput[] | Prisma.ReferralUncheckedCreateWithoutReferrerInput[];
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutReferrerInput | Prisma.ReferralCreateOrConnectWithoutReferrerInput[];
    upsert?: Prisma.ReferralUpsertWithWhereUniqueWithoutReferrerInput | Prisma.ReferralUpsertWithWhereUniqueWithoutReferrerInput[];
    createMany?: Prisma.ReferralCreateManyReferrerInputEnvelope;
    set?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    disconnect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    delete?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    connect?: Prisma.ReferralWhereUniqueInput | Prisma.ReferralWhereUniqueInput[];
    update?: Prisma.ReferralUpdateWithWhereUniqueWithoutReferrerInput | Prisma.ReferralUpdateWithWhereUniqueWithoutReferrerInput[];
    updateMany?: Prisma.ReferralUpdateManyWithWhereWithoutReferrerInput | Prisma.ReferralUpdateManyWithWhereWithoutReferrerInput[];
    deleteMany?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
};
export type ReferralUncheckedUpdateOneWithoutRefereeNestedInput = {
    create?: Prisma.XOR<Prisma.ReferralCreateWithoutRefereeInput, Prisma.ReferralUncheckedCreateWithoutRefereeInput>;
    connectOrCreate?: Prisma.ReferralCreateOrConnectWithoutRefereeInput;
    upsert?: Prisma.ReferralUpsertWithoutRefereeInput;
    disconnect?: Prisma.ReferralWhereInput | boolean;
    delete?: Prisma.ReferralWhereInput | boolean;
    connect?: Prisma.ReferralWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReferralUpdateToOneWithWhereWithoutRefereeInput, Prisma.ReferralUpdateWithoutRefereeInput>, Prisma.ReferralUncheckedUpdateWithoutRefereeInput>;
};
export type EnumReferralStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReferralStatus;
};
export type ReferralCreateWithoutReferrerInput = {
    id?: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
    referee: Prisma.UserCreateNestedOneWithoutReferralReceivedInput;
};
export type ReferralUncheckedCreateWithoutReferrerInput = {
    id?: string;
    refereeId: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
};
export type ReferralCreateOrConnectWithoutReferrerInput = {
    where: Prisma.ReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutReferrerInput, Prisma.ReferralUncheckedCreateWithoutReferrerInput>;
};
export type ReferralCreateManyReferrerInputEnvelope = {
    data: Prisma.ReferralCreateManyReferrerInput | Prisma.ReferralCreateManyReferrerInput[];
    skipDuplicates?: boolean;
};
export type ReferralCreateWithoutRefereeInput = {
    id?: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
    referrer: Prisma.UserCreateNestedOneWithoutReferralsGivenInput;
};
export type ReferralUncheckedCreateWithoutRefereeInput = {
    id?: string;
    referrerId: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
};
export type ReferralCreateOrConnectWithoutRefereeInput = {
    where: Prisma.ReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutRefereeInput, Prisma.ReferralUncheckedCreateWithoutRefereeInput>;
};
export type ReferralUpsertWithWhereUniqueWithoutReferrerInput = {
    where: Prisma.ReferralWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReferralUpdateWithoutReferrerInput, Prisma.ReferralUncheckedUpdateWithoutReferrerInput>;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutReferrerInput, Prisma.ReferralUncheckedCreateWithoutReferrerInput>;
};
export type ReferralUpdateWithWhereUniqueWithoutReferrerInput = {
    where: Prisma.ReferralWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReferralUpdateWithoutReferrerInput, Prisma.ReferralUncheckedUpdateWithoutReferrerInput>;
};
export type ReferralUpdateManyWithWhereWithoutReferrerInput = {
    where: Prisma.ReferralScalarWhereInput;
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyWithoutReferrerInput>;
};
export type ReferralScalarWhereInput = {
    AND?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
    OR?: Prisma.ReferralScalarWhereInput[];
    NOT?: Prisma.ReferralScalarWhereInput | Prisma.ReferralScalarWhereInput[];
    id?: Prisma.UuidFilter<"Referral"> | string;
    referrerId?: Prisma.UuidFilter<"Referral"> | string;
    refereeId?: Prisma.UuidFilter<"Referral"> | string;
    code?: Prisma.StringFilter<"Referral"> | string;
    status?: Prisma.EnumReferralStatusFilter<"Referral"> | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFilter<"Referral"> | number;
    qualifiedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    rewardedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Referral"> | Date | string | null;
    revokedReason?: Prisma.StringNullableFilter<"Referral"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Referral"> | Date | string;
};
export type ReferralUpsertWithoutRefereeInput = {
    update: Prisma.XOR<Prisma.ReferralUpdateWithoutRefereeInput, Prisma.ReferralUncheckedUpdateWithoutRefereeInput>;
    create: Prisma.XOR<Prisma.ReferralCreateWithoutRefereeInput, Prisma.ReferralUncheckedCreateWithoutRefereeInput>;
    where?: Prisma.ReferralWhereInput;
};
export type ReferralUpdateToOneWithWhereWithoutRefereeInput = {
    where?: Prisma.ReferralWhereInput;
    data: Prisma.XOR<Prisma.ReferralUpdateWithoutRefereeInput, Prisma.ReferralUncheckedUpdateWithoutRefereeInput>;
};
export type ReferralUpdateWithoutRefereeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referrer?: Prisma.UserUpdateOneRequiredWithoutReferralsGivenNestedInput;
};
export type ReferralUncheckedUpdateWithoutRefereeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrerId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralCreateManyReferrerInput = {
    id?: string;
    refereeId: string;
    code: string;
    status?: $Enums.ReferralStatus;
    rewardCredits?: number;
    qualifiedAt?: Date | string | null;
    rewardedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    revokedReason?: string | null;
    createdAt?: Date | string;
};
export type ReferralUpdateWithoutReferrerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referee?: Prisma.UserUpdateOneRequiredWithoutReferralReceivedNestedInput;
};
export type ReferralUncheckedUpdateWithoutReferrerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refereeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralUncheckedUpdateManyWithoutReferrerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refereeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus;
    rewardCredits?: Prisma.IntFieldUpdateOperationsInput | number;
    qualifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rewardedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReferralSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referrerId?: boolean;
    refereeId?: boolean;
    code?: boolean;
    status?: boolean;
    rewardCredits?: boolean;
    qualifiedAt?: boolean;
    rewardedAt?: boolean;
    revokedAt?: boolean;
    revokedReason?: boolean;
    createdAt?: boolean;
    referrer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    referee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral"]>;
export type ReferralSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referrerId?: boolean;
    refereeId?: boolean;
    code?: boolean;
    status?: boolean;
    rewardCredits?: boolean;
    qualifiedAt?: boolean;
    rewardedAt?: boolean;
    revokedAt?: boolean;
    revokedReason?: boolean;
    createdAt?: boolean;
    referrer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    referee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral"]>;
export type ReferralSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referrerId?: boolean;
    refereeId?: boolean;
    code?: boolean;
    status?: boolean;
    rewardCredits?: boolean;
    qualifiedAt?: boolean;
    rewardedAt?: boolean;
    revokedAt?: boolean;
    revokedReason?: boolean;
    createdAt?: boolean;
    referrer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    referee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral"]>;
export type ReferralSelectScalar = {
    id?: boolean;
    referrerId?: boolean;
    refereeId?: boolean;
    code?: boolean;
    status?: boolean;
    rewardCredits?: boolean;
    qualifiedAt?: boolean;
    rewardedAt?: boolean;
    revokedAt?: boolean;
    revokedReason?: boolean;
    createdAt?: boolean;
};
export type ReferralOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "referrerId" | "refereeId" | "code" | "status" | "rewardCredits" | "qualifiedAt" | "rewardedAt" | "revokedAt" | "revokedReason" | "createdAt", ExtArgs["result"]["referral"]>;
export type ReferralInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referrer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    referee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ReferralIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referrer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    referee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referrer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    referee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ReferralPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Referral";
    objects: {
        referrer: Prisma.$UserPayload<ExtArgs>;
        referee: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        referrerId: string;
        refereeId: string;
        code: string;
        status: $Enums.ReferralStatus;
        rewardCredits: number;
        qualifiedAt: Date | null;
        rewardedAt: Date | null;
        revokedAt: Date | null;
        revokedReason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["referral"]>;
    composites: {};
};
export type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReferralPayload, S>;
export type ReferralCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReferralCountAggregateInputType | true;
};
export interface ReferralDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Referral'];
        meta: {
            name: 'Referral';
        };
    };
    findUnique<T extends ReferralFindUniqueArgs>(args: Prisma.SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReferralFindFirstArgs>(args?: Prisma.SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReferralFindManyArgs>(args?: Prisma.SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReferralCreateArgs>(args: Prisma.SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReferralCreateManyArgs>(args?: Prisma.SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReferralDeleteArgs>(args: Prisma.SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReferralUpdateArgs>(args: Prisma.SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReferralDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReferralUpdateManyArgs>(args: Prisma.SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReferralUpsertArgs>(args: Prisma.SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma.Prisma__ReferralClient<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReferralCountArgs>(args?: Prisma.Subset<T, ReferralCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReferralCountAggregateOutputType> : number>;
    aggregate<T extends ReferralAggregateArgs>(args: Prisma.Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>;
    groupBy<T extends ReferralGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReferralGroupByArgs['orderBy'];
    } : {
        orderBy?: ReferralGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReferralFieldRefs;
}
export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    referrer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    referee<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReferralFieldRefs {
    readonly id: Prisma.FieldRef<"Referral", 'String'>;
    readonly referrerId: Prisma.FieldRef<"Referral", 'String'>;
    readonly refereeId: Prisma.FieldRef<"Referral", 'String'>;
    readonly code: Prisma.FieldRef<"Referral", 'String'>;
    readonly status: Prisma.FieldRef<"Referral", 'ReferralStatus'>;
    readonly rewardCredits: Prisma.FieldRef<"Referral", 'Int'>;
    readonly qualifiedAt: Prisma.FieldRef<"Referral", 'DateTime'>;
    readonly rewardedAt: Prisma.FieldRef<"Referral", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"Referral", 'DateTime'>;
    readonly revokedReason: Prisma.FieldRef<"Referral", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Referral", 'DateTime'>;
}
export type ReferralFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where: Prisma.ReferralWhereUniqueInput;
};
export type ReferralFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where: Prisma.ReferralWhereUniqueInput;
};
export type ReferralFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
export type ReferralFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
export type ReferralFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
export type ReferralCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralCreateInput, Prisma.ReferralUncheckedCreateInput>;
};
export type ReferralCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReferralCreateManyInput | Prisma.ReferralCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReferralCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    data: Prisma.ReferralCreateManyInput | Prisma.ReferralCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReferralIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReferralUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralUpdateInput, Prisma.ReferralUncheckedUpdateInput>;
    where: Prisma.ReferralWhereUniqueInput;
};
export type ReferralUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyInput>;
    where?: Prisma.ReferralWhereInput;
    limit?: number;
};
export type ReferralUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReferralUpdateManyMutationInput, Prisma.ReferralUncheckedUpdateManyInput>;
    where?: Prisma.ReferralWhereInput;
    limit?: number;
    include?: Prisma.ReferralIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReferralUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where: Prisma.ReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReferralCreateInput, Prisma.ReferralUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReferralUpdateInput, Prisma.ReferralUncheckedUpdateInput>;
};
export type ReferralDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where: Prisma.ReferralWhereUniqueInput;
};
export type ReferralDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
    limit?: number;
};
export type ReferralDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    include?: Prisma.ReferralInclude<ExtArgs> | null;
};
