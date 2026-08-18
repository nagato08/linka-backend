import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FaceEmbeddingModel = runtime.Types.Result.DefaultSelection<Prisma.$FaceEmbeddingPayload>;
export type AggregateFaceEmbedding = {
    _count: FaceEmbeddingCountAggregateOutputType | null;
    _avg: FaceEmbeddingAvgAggregateOutputType | null;
    _sum: FaceEmbeddingSumAggregateOutputType | null;
    _min: FaceEmbeddingMinAggregateOutputType | null;
    _max: FaceEmbeddingMaxAggregateOutputType | null;
};
export type FaceEmbeddingAvgAggregateOutputType = {
    dimension: number | null;
    duplicateDistance: number | null;
};
export type FaceEmbeddingSumAggregateOutputType = {
    dimension: number | null;
    duplicateDistance: number | null;
};
export type FaceEmbeddingMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    verificationId: string | null;
    model: string | null;
    dimension: number | null;
    duplicateOfUserId: string | null;
    duplicateDistance: number | null;
    createdAt: Date | null;
};
export type FaceEmbeddingMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    verificationId: string | null;
    model: string | null;
    dimension: number | null;
    duplicateOfUserId: string | null;
    duplicateDistance: number | null;
    createdAt: Date | null;
};
export type FaceEmbeddingCountAggregateOutputType = {
    id: number;
    userId: number;
    verificationId: number;
    model: number;
    dimension: number;
    duplicateOfUserId: number;
    duplicateDistance: number;
    createdAt: number;
    _all: number;
};
export type FaceEmbeddingAvgAggregateInputType = {
    dimension?: true;
    duplicateDistance?: true;
};
export type FaceEmbeddingSumAggregateInputType = {
    dimension?: true;
    duplicateDistance?: true;
};
export type FaceEmbeddingMinAggregateInputType = {
    id?: true;
    userId?: true;
    verificationId?: true;
    model?: true;
    dimension?: true;
    duplicateOfUserId?: true;
    duplicateDistance?: true;
    createdAt?: true;
};
export type FaceEmbeddingMaxAggregateInputType = {
    id?: true;
    userId?: true;
    verificationId?: true;
    model?: true;
    dimension?: true;
    duplicateOfUserId?: true;
    duplicateDistance?: true;
    createdAt?: true;
};
export type FaceEmbeddingCountAggregateInputType = {
    id?: true;
    userId?: true;
    verificationId?: true;
    model?: true;
    dimension?: true;
    duplicateOfUserId?: true;
    duplicateDistance?: true;
    createdAt?: true;
    _all?: true;
};
export type FaceEmbeddingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaceEmbeddingWhereInput;
    orderBy?: Prisma.FaceEmbeddingOrderByWithRelationInput | Prisma.FaceEmbeddingOrderByWithRelationInput[];
    cursor?: Prisma.FaceEmbeddingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FaceEmbeddingCountAggregateInputType;
    _avg?: FaceEmbeddingAvgAggregateInputType;
    _sum?: FaceEmbeddingSumAggregateInputType;
    _min?: FaceEmbeddingMinAggregateInputType;
    _max?: FaceEmbeddingMaxAggregateInputType;
};
export type GetFaceEmbeddingAggregateType<T extends FaceEmbeddingAggregateArgs> = {
    [P in keyof T & keyof AggregateFaceEmbedding]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFaceEmbedding[P]> : Prisma.GetScalarType<T[P], AggregateFaceEmbedding[P]>;
};
export type FaceEmbeddingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaceEmbeddingWhereInput;
    orderBy?: Prisma.FaceEmbeddingOrderByWithAggregationInput | Prisma.FaceEmbeddingOrderByWithAggregationInput[];
    by: Prisma.FaceEmbeddingScalarFieldEnum[] | Prisma.FaceEmbeddingScalarFieldEnum;
    having?: Prisma.FaceEmbeddingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FaceEmbeddingCountAggregateInputType | true;
    _avg?: FaceEmbeddingAvgAggregateInputType;
    _sum?: FaceEmbeddingSumAggregateInputType;
    _min?: FaceEmbeddingMinAggregateInputType;
    _max?: FaceEmbeddingMaxAggregateInputType;
};
export type FaceEmbeddingGroupByOutputType = {
    id: string;
    userId: string;
    verificationId: string;
    model: string;
    dimension: number;
    duplicateOfUserId: string | null;
    duplicateDistance: number | null;
    createdAt: Date;
    _count: FaceEmbeddingCountAggregateOutputType | null;
    _avg: FaceEmbeddingAvgAggregateOutputType | null;
    _sum: FaceEmbeddingSumAggregateOutputType | null;
    _min: FaceEmbeddingMinAggregateOutputType | null;
    _max: FaceEmbeddingMaxAggregateOutputType | null;
};
export type GetFaceEmbeddingGroupByPayload<T extends FaceEmbeddingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FaceEmbeddingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FaceEmbeddingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FaceEmbeddingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FaceEmbeddingGroupByOutputType[P]>;
}>>;
export type FaceEmbeddingWhereInput = {
    AND?: Prisma.FaceEmbeddingWhereInput | Prisma.FaceEmbeddingWhereInput[];
    OR?: Prisma.FaceEmbeddingWhereInput[];
    NOT?: Prisma.FaceEmbeddingWhereInput | Prisma.FaceEmbeddingWhereInput[];
    id?: Prisma.UuidFilter<"FaceEmbedding"> | string;
    userId?: Prisma.UuidFilter<"FaceEmbedding"> | string;
    verificationId?: Prisma.UuidFilter<"FaceEmbedding"> | string;
    model?: Prisma.StringFilter<"FaceEmbedding"> | string;
    dimension?: Prisma.IntFilter<"FaceEmbedding"> | number;
    duplicateOfUserId?: Prisma.UuidNullableFilter<"FaceEmbedding"> | string | null;
    duplicateDistance?: Prisma.FloatNullableFilter<"FaceEmbedding"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"FaceEmbedding"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    verification?: Prisma.XOR<Prisma.VerificationScalarRelationFilter, Prisma.VerificationWhereInput>;
};
export type FaceEmbeddingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    dimension?: Prisma.SortOrder;
    duplicateOfUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    duplicateDistance?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    verification?: Prisma.VerificationOrderByWithRelationInput;
};
export type FaceEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    verificationId?: string;
    AND?: Prisma.FaceEmbeddingWhereInput | Prisma.FaceEmbeddingWhereInput[];
    OR?: Prisma.FaceEmbeddingWhereInput[];
    NOT?: Prisma.FaceEmbeddingWhereInput | Prisma.FaceEmbeddingWhereInput[];
    userId?: Prisma.UuidFilter<"FaceEmbedding"> | string;
    model?: Prisma.StringFilter<"FaceEmbedding"> | string;
    dimension?: Prisma.IntFilter<"FaceEmbedding"> | number;
    duplicateOfUserId?: Prisma.UuidNullableFilter<"FaceEmbedding"> | string | null;
    duplicateDistance?: Prisma.FloatNullableFilter<"FaceEmbedding"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"FaceEmbedding"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    verification?: Prisma.XOR<Prisma.VerificationScalarRelationFilter, Prisma.VerificationWhereInput>;
}, "id" | "verificationId">;
export type FaceEmbeddingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    dimension?: Prisma.SortOrder;
    duplicateOfUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    duplicateDistance?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FaceEmbeddingCountOrderByAggregateInput;
    _avg?: Prisma.FaceEmbeddingAvgOrderByAggregateInput;
    _max?: Prisma.FaceEmbeddingMaxOrderByAggregateInput;
    _min?: Prisma.FaceEmbeddingMinOrderByAggregateInput;
    _sum?: Prisma.FaceEmbeddingSumOrderByAggregateInput;
};
export type FaceEmbeddingScalarWhereWithAggregatesInput = {
    AND?: Prisma.FaceEmbeddingScalarWhereWithAggregatesInput | Prisma.FaceEmbeddingScalarWhereWithAggregatesInput[];
    OR?: Prisma.FaceEmbeddingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FaceEmbeddingScalarWhereWithAggregatesInput | Prisma.FaceEmbeddingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"FaceEmbedding"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"FaceEmbedding"> | string;
    verificationId?: Prisma.UuidWithAggregatesFilter<"FaceEmbedding"> | string;
    model?: Prisma.StringWithAggregatesFilter<"FaceEmbedding"> | string;
    dimension?: Prisma.IntWithAggregatesFilter<"FaceEmbedding"> | number;
    duplicateOfUserId?: Prisma.UuidNullableWithAggregatesFilter<"FaceEmbedding"> | string | null;
    duplicateDistance?: Prisma.FloatNullableWithAggregatesFilter<"FaceEmbedding"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FaceEmbedding"> | Date | string;
};
export type FaceEmbeddingCreateInput = {
    id?: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFaceEmbeddingsInput;
    verification: Prisma.VerificationCreateNestedOneWithoutEmbeddingInput;
};
export type FaceEmbeddingUncheckedCreateInput = {
    id?: string;
    userId: string;
    verificationId: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
};
export type FaceEmbeddingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFaceEmbeddingsNestedInput;
    verification?: Prisma.VerificationUpdateOneRequiredWithoutEmbeddingNestedInput;
};
export type FaceEmbeddingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationId?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaceEmbeddingCreateManyInput = {
    id?: string;
    userId: string;
    verificationId: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
};
export type FaceEmbeddingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaceEmbeddingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationId?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaceEmbeddingListRelationFilter = {
    every?: Prisma.FaceEmbeddingWhereInput;
    some?: Prisma.FaceEmbeddingWhereInput;
    none?: Prisma.FaceEmbeddingWhereInput;
};
export type FaceEmbeddingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FaceEmbeddingNullableScalarRelationFilter = {
    is?: Prisma.FaceEmbeddingWhereInput | null;
    isNot?: Prisma.FaceEmbeddingWhereInput | null;
};
export type FaceEmbeddingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    dimension?: Prisma.SortOrder;
    duplicateOfUserId?: Prisma.SortOrder;
    duplicateDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FaceEmbeddingAvgOrderByAggregateInput = {
    dimension?: Prisma.SortOrder;
    duplicateDistance?: Prisma.SortOrder;
};
export type FaceEmbeddingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    dimension?: Prisma.SortOrder;
    duplicateOfUserId?: Prisma.SortOrder;
    duplicateDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FaceEmbeddingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    dimension?: Prisma.SortOrder;
    duplicateOfUserId?: Prisma.SortOrder;
    duplicateDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FaceEmbeddingSumOrderByAggregateInput = {
    dimension?: Prisma.SortOrder;
    duplicateDistance?: Prisma.SortOrder;
};
export type FaceEmbeddingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutUserInput, Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput> | Prisma.FaceEmbeddingCreateWithoutUserInput[] | Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput | Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FaceEmbeddingCreateManyUserInputEnvelope;
    connect?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
};
export type FaceEmbeddingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutUserInput, Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput> | Prisma.FaceEmbeddingCreateWithoutUserInput[] | Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput | Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FaceEmbeddingCreateManyUserInputEnvelope;
    connect?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
};
export type FaceEmbeddingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutUserInput, Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput> | Prisma.FaceEmbeddingCreateWithoutUserInput[] | Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput | Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FaceEmbeddingUpsertWithWhereUniqueWithoutUserInput | Prisma.FaceEmbeddingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FaceEmbeddingCreateManyUserInputEnvelope;
    set?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    disconnect?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    delete?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    connect?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    update?: Prisma.FaceEmbeddingUpdateWithWhereUniqueWithoutUserInput | Prisma.FaceEmbeddingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FaceEmbeddingUpdateManyWithWhereWithoutUserInput | Prisma.FaceEmbeddingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FaceEmbeddingScalarWhereInput | Prisma.FaceEmbeddingScalarWhereInput[];
};
export type FaceEmbeddingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutUserInput, Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput> | Prisma.FaceEmbeddingCreateWithoutUserInput[] | Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput | Prisma.FaceEmbeddingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FaceEmbeddingUpsertWithWhereUniqueWithoutUserInput | Prisma.FaceEmbeddingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FaceEmbeddingCreateManyUserInputEnvelope;
    set?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    disconnect?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    delete?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    connect?: Prisma.FaceEmbeddingWhereUniqueInput | Prisma.FaceEmbeddingWhereUniqueInput[];
    update?: Prisma.FaceEmbeddingUpdateWithWhereUniqueWithoutUserInput | Prisma.FaceEmbeddingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FaceEmbeddingUpdateManyWithWhereWithoutUserInput | Prisma.FaceEmbeddingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FaceEmbeddingScalarWhereInput | Prisma.FaceEmbeddingScalarWhereInput[];
};
export type FaceEmbeddingCreateNestedOneWithoutVerificationInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedCreateWithoutVerificationInput>;
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutVerificationInput;
    connect?: Prisma.FaceEmbeddingWhereUniqueInput;
};
export type FaceEmbeddingUncheckedCreateNestedOneWithoutVerificationInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedCreateWithoutVerificationInput>;
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutVerificationInput;
    connect?: Prisma.FaceEmbeddingWhereUniqueInput;
};
export type FaceEmbeddingUpdateOneWithoutVerificationNestedInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedCreateWithoutVerificationInput>;
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutVerificationInput;
    upsert?: Prisma.FaceEmbeddingUpsertWithoutVerificationInput;
    disconnect?: Prisma.FaceEmbeddingWhereInput | boolean;
    delete?: Prisma.FaceEmbeddingWhereInput | boolean;
    connect?: Prisma.FaceEmbeddingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FaceEmbeddingUpdateToOneWithWhereWithoutVerificationInput, Prisma.FaceEmbeddingUpdateWithoutVerificationInput>, Prisma.FaceEmbeddingUncheckedUpdateWithoutVerificationInput>;
};
export type FaceEmbeddingUncheckedUpdateOneWithoutVerificationNestedInput = {
    create?: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedCreateWithoutVerificationInput>;
    connectOrCreate?: Prisma.FaceEmbeddingCreateOrConnectWithoutVerificationInput;
    upsert?: Prisma.FaceEmbeddingUpsertWithoutVerificationInput;
    disconnect?: Prisma.FaceEmbeddingWhereInput | boolean;
    delete?: Prisma.FaceEmbeddingWhereInput | boolean;
    connect?: Prisma.FaceEmbeddingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FaceEmbeddingUpdateToOneWithWhereWithoutVerificationInput, Prisma.FaceEmbeddingUpdateWithoutVerificationInput>, Prisma.FaceEmbeddingUncheckedUpdateWithoutVerificationInput>;
};
export type FaceEmbeddingCreateWithoutUserInput = {
    id?: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
    verification: Prisma.VerificationCreateNestedOneWithoutEmbeddingInput;
};
export type FaceEmbeddingUncheckedCreateWithoutUserInput = {
    id?: string;
    verificationId: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
};
export type FaceEmbeddingCreateOrConnectWithoutUserInput = {
    where: Prisma.FaceEmbeddingWhereUniqueInput;
    create: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutUserInput, Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput>;
};
export type FaceEmbeddingCreateManyUserInputEnvelope = {
    data: Prisma.FaceEmbeddingCreateManyUserInput | Prisma.FaceEmbeddingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FaceEmbeddingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FaceEmbeddingWhereUniqueInput;
    update: Prisma.XOR<Prisma.FaceEmbeddingUpdateWithoutUserInput, Prisma.FaceEmbeddingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutUserInput, Prisma.FaceEmbeddingUncheckedCreateWithoutUserInput>;
};
export type FaceEmbeddingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FaceEmbeddingWhereUniqueInput;
    data: Prisma.XOR<Prisma.FaceEmbeddingUpdateWithoutUserInput, Prisma.FaceEmbeddingUncheckedUpdateWithoutUserInput>;
};
export type FaceEmbeddingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FaceEmbeddingScalarWhereInput;
    data: Prisma.XOR<Prisma.FaceEmbeddingUpdateManyMutationInput, Prisma.FaceEmbeddingUncheckedUpdateManyWithoutUserInput>;
};
export type FaceEmbeddingScalarWhereInput = {
    AND?: Prisma.FaceEmbeddingScalarWhereInput | Prisma.FaceEmbeddingScalarWhereInput[];
    OR?: Prisma.FaceEmbeddingScalarWhereInput[];
    NOT?: Prisma.FaceEmbeddingScalarWhereInput | Prisma.FaceEmbeddingScalarWhereInput[];
    id?: Prisma.UuidFilter<"FaceEmbedding"> | string;
    userId?: Prisma.UuidFilter<"FaceEmbedding"> | string;
    verificationId?: Prisma.UuidFilter<"FaceEmbedding"> | string;
    model?: Prisma.StringFilter<"FaceEmbedding"> | string;
    dimension?: Prisma.IntFilter<"FaceEmbedding"> | number;
    duplicateOfUserId?: Prisma.UuidNullableFilter<"FaceEmbedding"> | string | null;
    duplicateDistance?: Prisma.FloatNullableFilter<"FaceEmbedding"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"FaceEmbedding"> | Date | string;
};
export type FaceEmbeddingCreateWithoutVerificationInput = {
    id?: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFaceEmbeddingsInput;
};
export type FaceEmbeddingUncheckedCreateWithoutVerificationInput = {
    id?: string;
    userId: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
};
export type FaceEmbeddingCreateOrConnectWithoutVerificationInput = {
    where: Prisma.FaceEmbeddingWhereUniqueInput;
    create: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedCreateWithoutVerificationInput>;
};
export type FaceEmbeddingUpsertWithoutVerificationInput = {
    update: Prisma.XOR<Prisma.FaceEmbeddingUpdateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedUpdateWithoutVerificationInput>;
    create: Prisma.XOR<Prisma.FaceEmbeddingCreateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedCreateWithoutVerificationInput>;
    where?: Prisma.FaceEmbeddingWhereInput;
};
export type FaceEmbeddingUpdateToOneWithWhereWithoutVerificationInput = {
    where?: Prisma.FaceEmbeddingWhereInput;
    data: Prisma.XOR<Prisma.FaceEmbeddingUpdateWithoutVerificationInput, Prisma.FaceEmbeddingUncheckedUpdateWithoutVerificationInput>;
};
export type FaceEmbeddingUpdateWithoutVerificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFaceEmbeddingsNestedInput;
};
export type FaceEmbeddingUncheckedUpdateWithoutVerificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaceEmbeddingCreateManyUserInput = {
    id?: string;
    verificationId: string;
    model: string;
    dimension?: number;
    duplicateOfUserId?: string | null;
    duplicateDistance?: number | null;
    createdAt?: Date | string;
};
export type FaceEmbeddingUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    verification?: Prisma.VerificationUpdateOneRequiredWithoutEmbeddingNestedInput;
};
export type FaceEmbeddingUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationId?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaceEmbeddingUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationId?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    dimension?: Prisma.IntFieldUpdateOperationsInput | number;
    duplicateOfUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duplicateDistance?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaceEmbeddingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    verificationId?: boolean;
    model?: boolean;
    dimension?: boolean;
    duplicateOfUserId?: boolean;
    duplicateDistance?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    verification?: boolean | Prisma.VerificationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["faceEmbedding"]>;
export type FaceEmbeddingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    verificationId?: boolean;
    model?: boolean;
    dimension?: boolean;
    duplicateOfUserId?: boolean;
    duplicateDistance?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    verification?: boolean | Prisma.VerificationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["faceEmbedding"]>;
export type FaceEmbeddingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    verificationId?: boolean;
    model?: boolean;
    dimension?: boolean;
    duplicateOfUserId?: boolean;
    duplicateDistance?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    verification?: boolean | Prisma.VerificationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["faceEmbedding"]>;
export type FaceEmbeddingSelectScalar = {
    id?: boolean;
    userId?: boolean;
    verificationId?: boolean;
    model?: boolean;
    dimension?: boolean;
    duplicateOfUserId?: boolean;
    duplicateDistance?: boolean;
    createdAt?: boolean;
};
export type FaceEmbeddingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "verificationId" | "model" | "dimension" | "duplicateOfUserId" | "duplicateDistance" | "createdAt", ExtArgs["result"]["faceEmbedding"]>;
export type FaceEmbeddingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    verification?: boolean | Prisma.VerificationDefaultArgs<ExtArgs>;
};
export type FaceEmbeddingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    verification?: boolean | Prisma.VerificationDefaultArgs<ExtArgs>;
};
export type FaceEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    verification?: boolean | Prisma.VerificationDefaultArgs<ExtArgs>;
};
export type $FaceEmbeddingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FaceEmbedding";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        verification: Prisma.$VerificationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        verificationId: string;
        model: string;
        dimension: number;
        duplicateOfUserId: string | null;
        duplicateDistance: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["faceEmbedding"]>;
    composites: {};
};
export type FaceEmbeddingGetPayload<S extends boolean | null | undefined | FaceEmbeddingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload, S>;
export type FaceEmbeddingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FaceEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FaceEmbeddingCountAggregateInputType | true;
};
export interface FaceEmbeddingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FaceEmbedding'];
        meta: {
            name: 'FaceEmbedding';
        };
    };
    findUnique<T extends FaceEmbeddingFindUniqueArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FaceEmbeddingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FaceEmbeddingFindFirstArgs>(args?: Prisma.SelectSubset<T, FaceEmbeddingFindFirstArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FaceEmbeddingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FaceEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FaceEmbeddingFindManyArgs>(args?: Prisma.SelectSubset<T, FaceEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FaceEmbeddingCreateArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingCreateArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FaceEmbeddingCreateManyArgs>(args?: Prisma.SelectSubset<T, FaceEmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FaceEmbeddingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FaceEmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FaceEmbeddingDeleteArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingDeleteArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FaceEmbeddingUpdateArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingUpdateArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FaceEmbeddingDeleteManyArgs>(args?: Prisma.SelectSubset<T, FaceEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FaceEmbeddingUpdateManyArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FaceEmbeddingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FaceEmbeddingUpsertArgs>(args: Prisma.SelectSubset<T, FaceEmbeddingUpsertArgs<ExtArgs>>): Prisma.Prisma__FaceEmbeddingClient<runtime.Types.Result.GetResult<Prisma.$FaceEmbeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FaceEmbeddingCountArgs>(args?: Prisma.Subset<T, FaceEmbeddingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FaceEmbeddingCountAggregateOutputType> : number>;
    aggregate<T extends FaceEmbeddingAggregateArgs>(args: Prisma.Subset<T, FaceEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetFaceEmbeddingAggregateType<T>>;
    groupBy<T extends FaceEmbeddingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FaceEmbeddingGroupByArgs['orderBy'];
    } : {
        orderBy?: FaceEmbeddingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FaceEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaceEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FaceEmbeddingFieldRefs;
}
export interface Prisma__FaceEmbeddingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    verification<T extends Prisma.VerificationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VerificationDefaultArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FaceEmbeddingFieldRefs {
    readonly id: Prisma.FieldRef<"FaceEmbedding", 'String'>;
    readonly userId: Prisma.FieldRef<"FaceEmbedding", 'String'>;
    readonly verificationId: Prisma.FieldRef<"FaceEmbedding", 'String'>;
    readonly model: Prisma.FieldRef<"FaceEmbedding", 'String'>;
    readonly dimension: Prisma.FieldRef<"FaceEmbedding", 'Int'>;
    readonly duplicateOfUserId: Prisma.FieldRef<"FaceEmbedding", 'String'>;
    readonly duplicateDistance: Prisma.FieldRef<"FaceEmbedding", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"FaceEmbedding", 'DateTime'>;
}
export type FaceEmbeddingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    where: Prisma.FaceEmbeddingWhereUniqueInput;
};
export type FaceEmbeddingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    where: Prisma.FaceEmbeddingWhereUniqueInput;
};
export type FaceEmbeddingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    where?: Prisma.FaceEmbeddingWhereInput;
    orderBy?: Prisma.FaceEmbeddingOrderByWithRelationInput | Prisma.FaceEmbeddingOrderByWithRelationInput[];
    cursor?: Prisma.FaceEmbeddingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaceEmbeddingScalarFieldEnum | Prisma.FaceEmbeddingScalarFieldEnum[];
};
export type FaceEmbeddingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    where?: Prisma.FaceEmbeddingWhereInput;
    orderBy?: Prisma.FaceEmbeddingOrderByWithRelationInput | Prisma.FaceEmbeddingOrderByWithRelationInput[];
    cursor?: Prisma.FaceEmbeddingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaceEmbeddingScalarFieldEnum | Prisma.FaceEmbeddingScalarFieldEnum[];
};
export type FaceEmbeddingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    where?: Prisma.FaceEmbeddingWhereInput;
    orderBy?: Prisma.FaceEmbeddingOrderByWithRelationInput | Prisma.FaceEmbeddingOrderByWithRelationInput[];
    cursor?: Prisma.FaceEmbeddingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaceEmbeddingScalarFieldEnum | Prisma.FaceEmbeddingScalarFieldEnum[];
};
export type FaceEmbeddingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaceEmbeddingCreateInput, Prisma.FaceEmbeddingUncheckedCreateInput>;
};
export type FaceEmbeddingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FaceEmbeddingCreateManyInput | Prisma.FaceEmbeddingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FaceEmbeddingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    data: Prisma.FaceEmbeddingCreateManyInput | Prisma.FaceEmbeddingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FaceEmbeddingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FaceEmbeddingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaceEmbeddingUpdateInput, Prisma.FaceEmbeddingUncheckedUpdateInput>;
    where: Prisma.FaceEmbeddingWhereUniqueInput;
};
export type FaceEmbeddingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FaceEmbeddingUpdateManyMutationInput, Prisma.FaceEmbeddingUncheckedUpdateManyInput>;
    where?: Prisma.FaceEmbeddingWhereInput;
    limit?: number;
};
export type FaceEmbeddingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaceEmbeddingUpdateManyMutationInput, Prisma.FaceEmbeddingUncheckedUpdateManyInput>;
    where?: Prisma.FaceEmbeddingWhereInput;
    limit?: number;
    include?: Prisma.FaceEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FaceEmbeddingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    where: Prisma.FaceEmbeddingWhereUniqueInput;
    create: Prisma.XOR<Prisma.FaceEmbeddingCreateInput, Prisma.FaceEmbeddingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FaceEmbeddingUpdateInput, Prisma.FaceEmbeddingUncheckedUpdateInput>;
};
export type FaceEmbeddingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
    where: Prisma.FaceEmbeddingWhereUniqueInput;
};
export type FaceEmbeddingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaceEmbeddingWhereInput;
    limit?: number;
};
export type FaceEmbeddingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaceEmbeddingSelect<ExtArgs> | null;
    omit?: Prisma.FaceEmbeddingOmit<ExtArgs> | null;
    include?: Prisma.FaceEmbeddingInclude<ExtArgs> | null;
};
