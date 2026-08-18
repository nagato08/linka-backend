import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MatchModel = runtime.Types.Result.DefaultSelection<Prisma.$MatchPayload>;
export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
export type MatchMinAggregateOutputType = {
    id: string | null;
    userAId: string | null;
    userBId: string | null;
    status: $Enums.MatchStatus | null;
    fromSuperlike: boolean | null;
    matchedAt: Date | null;
    lastInteractionAt: Date | null;
    expiresAt: Date | null;
    unmatchedAt: Date | null;
    unmatchedById: string | null;
};
export type MatchMaxAggregateOutputType = {
    id: string | null;
    userAId: string | null;
    userBId: string | null;
    status: $Enums.MatchStatus | null;
    fromSuperlike: boolean | null;
    matchedAt: Date | null;
    lastInteractionAt: Date | null;
    expiresAt: Date | null;
    unmatchedAt: Date | null;
    unmatchedById: string | null;
};
export type MatchCountAggregateOutputType = {
    id: number;
    userAId: number;
    userBId: number;
    status: number;
    fromSuperlike: number;
    matchedAt: number;
    lastInteractionAt: number;
    expiresAt: number;
    unmatchedAt: number;
    unmatchedById: number;
    _all: number;
};
export type MatchMinAggregateInputType = {
    id?: true;
    userAId?: true;
    userBId?: true;
    status?: true;
    fromSuperlike?: true;
    matchedAt?: true;
    lastInteractionAt?: true;
    expiresAt?: true;
    unmatchedAt?: true;
    unmatchedById?: true;
};
export type MatchMaxAggregateInputType = {
    id?: true;
    userAId?: true;
    userBId?: true;
    status?: true;
    fromSuperlike?: true;
    matchedAt?: true;
    lastInteractionAt?: true;
    expiresAt?: true;
    unmatchedAt?: true;
    unmatchedById?: true;
};
export type MatchCountAggregateInputType = {
    id?: true;
    userAId?: true;
    userBId?: true;
    status?: true;
    fromSuperlike?: true;
    matchedAt?: true;
    lastInteractionAt?: true;
    expiresAt?: true;
    unmatchedAt?: true;
    unmatchedById?: true;
    _all?: true;
};
export type MatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatchCountAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
    [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatch[P]> : Prisma.GetScalarType<T[P], AggregateMatch[P]>;
};
export type MatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithAggregationInput | Prisma.MatchOrderByWithAggregationInput[];
    by: Prisma.MatchScalarFieldEnum[] | Prisma.MatchScalarFieldEnum;
    having?: Prisma.MatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchCountAggregateInputType | true;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type MatchGroupByOutputType = {
    id: string;
    userAId: string;
    userBId: string;
    status: $Enums.MatchStatus;
    fromSuperlike: boolean;
    matchedAt: Date;
    lastInteractionAt: Date | null;
    expiresAt: Date | null;
    unmatchedAt: Date | null;
    unmatchedById: string | null;
    _count: MatchCountAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
export type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]>;
}>>;
export type MatchWhereInput = {
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    id?: Prisma.UuidFilter<"Match"> | string;
    userAId?: Prisma.UuidFilter<"Match"> | string;
    userBId?: Prisma.UuidFilter<"Match"> | string;
    status?: Prisma.EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFilter<"Match"> | boolean;
    matchedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    lastInteractionAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    unmatchedAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    unmatchedById?: Prisma.UuidNullableFilter<"Match"> | string | null;
    userA?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    userB?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    unmatchedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    conversation?: Prisma.XOR<Prisma.ConversationNullableScalarRelationFilter, Prisma.ConversationWhereInput> | null;
};
export type MatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userAId?: Prisma.SortOrder;
    userBId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fromSuperlike?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    lastInteractionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    unmatchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    unmatchedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    userA?: Prisma.UserOrderByWithRelationInput;
    userB?: Prisma.UserOrderByWithRelationInput;
    unmatchedBy?: Prisma.UserOrderByWithRelationInput;
    conversation?: Prisma.ConversationOrderByWithRelationInput;
};
export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userAId_userBId?: Prisma.MatchUserAIdUserBIdCompoundUniqueInput;
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    userAId?: Prisma.UuidFilter<"Match"> | string;
    userBId?: Prisma.UuidFilter<"Match"> | string;
    status?: Prisma.EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFilter<"Match"> | boolean;
    matchedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    lastInteractionAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    unmatchedAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    unmatchedById?: Prisma.UuidNullableFilter<"Match"> | string | null;
    userA?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    userB?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    unmatchedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    conversation?: Prisma.XOR<Prisma.ConversationNullableScalarRelationFilter, Prisma.ConversationWhereInput> | null;
}, "id" | "userAId_userBId">;
export type MatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userAId?: Prisma.SortOrder;
    userBId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fromSuperlike?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    lastInteractionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    unmatchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    unmatchedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MatchCountOrderByAggregateInput;
    _max?: Prisma.MatchMaxOrderByAggregateInput;
    _min?: Prisma.MatchMinOrderByAggregateInput;
};
export type MatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Match"> | string;
    userAId?: Prisma.UuidWithAggregatesFilter<"Match"> | string;
    userBId?: Prisma.UuidWithAggregatesFilter<"Match"> | string;
    status?: Prisma.EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolWithAggregatesFilter<"Match"> | boolean;
    matchedAt?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
    lastInteractionAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null;
    unmatchedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null;
    unmatchedById?: Prisma.UuidNullableWithAggregatesFilter<"Match"> | string | null;
};
export type MatchCreateInput = {
    id?: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    userA: Prisma.UserCreateNestedOneWithoutMatchesAsAInput;
    userB: Prisma.UserCreateNestedOneWithoutMatchesAsBInput;
    unmatchedBy?: Prisma.UserCreateNestedOneWithoutMatchesUnmatchedInput;
    conversation?: Prisma.ConversationCreateNestedOneWithoutMatchInput;
};
export type MatchUncheckedCreateInput = {
    id?: string;
    userAId: string;
    userBId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    unmatchedById?: string | null;
    conversation?: Prisma.ConversationUncheckedCreateNestedOneWithoutMatchInput;
};
export type MatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userA?: Prisma.UserUpdateOneRequiredWithoutMatchesAsANestedInput;
    userB?: Prisma.UserUpdateOneRequiredWithoutMatchesAsBNestedInput;
    unmatchedBy?: Prisma.UserUpdateOneWithoutMatchesUnmatchedNestedInput;
    conversation?: Prisma.ConversationUpdateOneWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userAId?: Prisma.StringFieldUpdateOperationsInput | string;
    userBId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conversation?: Prisma.ConversationUncheckedUpdateOneWithoutMatchNestedInput;
};
export type MatchCreateManyInput = {
    id?: string;
    userAId: string;
    userBId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    unmatchedById?: string | null;
};
export type MatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userAId?: Prisma.StringFieldUpdateOperationsInput | string;
    userBId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MatchListRelationFilter = {
    every?: Prisma.MatchWhereInput;
    some?: Prisma.MatchWhereInput;
    none?: Prisma.MatchWhereInput;
};
export type MatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatchNullableScalarRelationFilter = {
    is?: Prisma.MatchWhereInput | null;
    isNot?: Prisma.MatchWhereInput | null;
};
export type MatchUserAIdUserBIdCompoundUniqueInput = {
    userAId: string;
    userBId: string;
};
export type MatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAId?: Prisma.SortOrder;
    userBId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fromSuperlike?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    lastInteractionAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    unmatchedAt?: Prisma.SortOrder;
    unmatchedById?: Prisma.SortOrder;
};
export type MatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAId?: Prisma.SortOrder;
    userBId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fromSuperlike?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    lastInteractionAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    unmatchedAt?: Prisma.SortOrder;
    unmatchedById?: Prisma.SortOrder;
};
export type MatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userAId?: Prisma.SortOrder;
    userBId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fromSuperlike?: Prisma.SortOrder;
    matchedAt?: Prisma.SortOrder;
    lastInteractionAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    unmatchedAt?: Prisma.SortOrder;
    unmatchedById?: Prisma.SortOrder;
};
export type MatchCreateNestedManyWithoutUserAInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserAInput, Prisma.MatchUncheckedCreateWithoutUserAInput> | Prisma.MatchCreateWithoutUserAInput[] | Prisma.MatchUncheckedCreateWithoutUserAInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserAInput | Prisma.MatchCreateOrConnectWithoutUserAInput[];
    createMany?: Prisma.MatchCreateManyUserAInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchCreateNestedManyWithoutUserBInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserBInput, Prisma.MatchUncheckedCreateWithoutUserBInput> | Prisma.MatchCreateWithoutUserBInput[] | Prisma.MatchUncheckedCreateWithoutUserBInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserBInput | Prisma.MatchCreateOrConnectWithoutUserBInput[];
    createMany?: Prisma.MatchCreateManyUserBInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchCreateNestedManyWithoutUnmatchedByInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUnmatchedByInput, Prisma.MatchUncheckedCreateWithoutUnmatchedByInput> | Prisma.MatchCreateWithoutUnmatchedByInput[] | Prisma.MatchUncheckedCreateWithoutUnmatchedByInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUnmatchedByInput | Prisma.MatchCreateOrConnectWithoutUnmatchedByInput[];
    createMany?: Prisma.MatchCreateManyUnmatchedByInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutUserAInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserAInput, Prisma.MatchUncheckedCreateWithoutUserAInput> | Prisma.MatchCreateWithoutUserAInput[] | Prisma.MatchUncheckedCreateWithoutUserAInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserAInput | Prisma.MatchCreateOrConnectWithoutUserAInput[];
    createMany?: Prisma.MatchCreateManyUserAInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutUserBInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserBInput, Prisma.MatchUncheckedCreateWithoutUserBInput> | Prisma.MatchCreateWithoutUserBInput[] | Prisma.MatchUncheckedCreateWithoutUserBInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserBInput | Prisma.MatchCreateOrConnectWithoutUserBInput[];
    createMany?: Prisma.MatchCreateManyUserBInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutUnmatchedByInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUnmatchedByInput, Prisma.MatchUncheckedCreateWithoutUnmatchedByInput> | Prisma.MatchCreateWithoutUnmatchedByInput[] | Prisma.MatchUncheckedCreateWithoutUnmatchedByInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUnmatchedByInput | Prisma.MatchCreateOrConnectWithoutUnmatchedByInput[];
    createMany?: Prisma.MatchCreateManyUnmatchedByInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUpdateManyWithoutUserANestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserAInput, Prisma.MatchUncheckedCreateWithoutUserAInput> | Prisma.MatchCreateWithoutUserAInput[] | Prisma.MatchUncheckedCreateWithoutUserAInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserAInput | Prisma.MatchCreateOrConnectWithoutUserAInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutUserAInput | Prisma.MatchUpsertWithWhereUniqueWithoutUserAInput[];
    createMany?: Prisma.MatchCreateManyUserAInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutUserAInput | Prisma.MatchUpdateWithWhereUniqueWithoutUserAInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutUserAInput | Prisma.MatchUpdateManyWithWhereWithoutUserAInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUpdateManyWithoutUserBNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserBInput, Prisma.MatchUncheckedCreateWithoutUserBInput> | Prisma.MatchCreateWithoutUserBInput[] | Prisma.MatchUncheckedCreateWithoutUserBInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserBInput | Prisma.MatchCreateOrConnectWithoutUserBInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutUserBInput | Prisma.MatchUpsertWithWhereUniqueWithoutUserBInput[];
    createMany?: Prisma.MatchCreateManyUserBInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutUserBInput | Prisma.MatchUpdateWithWhereUniqueWithoutUserBInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutUserBInput | Prisma.MatchUpdateManyWithWhereWithoutUserBInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUpdateManyWithoutUnmatchedByNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUnmatchedByInput, Prisma.MatchUncheckedCreateWithoutUnmatchedByInput> | Prisma.MatchCreateWithoutUnmatchedByInput[] | Prisma.MatchUncheckedCreateWithoutUnmatchedByInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUnmatchedByInput | Prisma.MatchCreateOrConnectWithoutUnmatchedByInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutUnmatchedByInput | Prisma.MatchUpsertWithWhereUniqueWithoutUnmatchedByInput[];
    createMany?: Prisma.MatchCreateManyUnmatchedByInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutUnmatchedByInput | Prisma.MatchUpdateWithWhereUniqueWithoutUnmatchedByInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutUnmatchedByInput | Prisma.MatchUpdateManyWithWhereWithoutUnmatchedByInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutUserANestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserAInput, Prisma.MatchUncheckedCreateWithoutUserAInput> | Prisma.MatchCreateWithoutUserAInput[] | Prisma.MatchUncheckedCreateWithoutUserAInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserAInput | Prisma.MatchCreateOrConnectWithoutUserAInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutUserAInput | Prisma.MatchUpsertWithWhereUniqueWithoutUserAInput[];
    createMany?: Prisma.MatchCreateManyUserAInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutUserAInput | Prisma.MatchUpdateWithWhereUniqueWithoutUserAInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutUserAInput | Prisma.MatchUpdateManyWithWhereWithoutUserAInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutUserBNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUserBInput, Prisma.MatchUncheckedCreateWithoutUserBInput> | Prisma.MatchCreateWithoutUserBInput[] | Prisma.MatchUncheckedCreateWithoutUserBInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUserBInput | Prisma.MatchCreateOrConnectWithoutUserBInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutUserBInput | Prisma.MatchUpsertWithWhereUniqueWithoutUserBInput[];
    createMany?: Prisma.MatchCreateManyUserBInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutUserBInput | Prisma.MatchUpdateWithWhereUniqueWithoutUserBInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutUserBInput | Prisma.MatchUpdateManyWithWhereWithoutUserBInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutUnmatchedByNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutUnmatchedByInput, Prisma.MatchUncheckedCreateWithoutUnmatchedByInput> | Prisma.MatchCreateWithoutUnmatchedByInput[] | Prisma.MatchUncheckedCreateWithoutUnmatchedByInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutUnmatchedByInput | Prisma.MatchCreateOrConnectWithoutUnmatchedByInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutUnmatchedByInput | Prisma.MatchUpsertWithWhereUniqueWithoutUnmatchedByInput[];
    createMany?: Prisma.MatchCreateManyUnmatchedByInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutUnmatchedByInput | Prisma.MatchUpdateWithWhereUniqueWithoutUnmatchedByInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutUnmatchedByInput | Prisma.MatchUpdateManyWithWhereWithoutUnmatchedByInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchCreateNestedOneWithoutConversationInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutConversationInput, Prisma.MatchUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutConversationInput;
    connect?: Prisma.MatchWhereUniqueInput;
};
export type MatchUpdateOneWithoutConversationNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutConversationInput, Prisma.MatchUncheckedCreateWithoutConversationInput>;
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutConversationInput;
    upsert?: Prisma.MatchUpsertWithoutConversationInput;
    disconnect?: Prisma.MatchWhereInput | boolean;
    delete?: Prisma.MatchWhereInput | boolean;
    connect?: Prisma.MatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MatchUpdateToOneWithWhereWithoutConversationInput, Prisma.MatchUpdateWithoutConversationInput>, Prisma.MatchUncheckedUpdateWithoutConversationInput>;
};
export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus;
};
export type MatchCreateWithoutUserAInput = {
    id?: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    userB: Prisma.UserCreateNestedOneWithoutMatchesAsBInput;
    unmatchedBy?: Prisma.UserCreateNestedOneWithoutMatchesUnmatchedInput;
    conversation?: Prisma.ConversationCreateNestedOneWithoutMatchInput;
};
export type MatchUncheckedCreateWithoutUserAInput = {
    id?: string;
    userBId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    unmatchedById?: string | null;
    conversation?: Prisma.ConversationUncheckedCreateNestedOneWithoutMatchInput;
};
export type MatchCreateOrConnectWithoutUserAInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutUserAInput, Prisma.MatchUncheckedCreateWithoutUserAInput>;
};
export type MatchCreateManyUserAInputEnvelope = {
    data: Prisma.MatchCreateManyUserAInput | Prisma.MatchCreateManyUserAInput[];
    skipDuplicates?: boolean;
};
export type MatchCreateWithoutUserBInput = {
    id?: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    userA: Prisma.UserCreateNestedOneWithoutMatchesAsAInput;
    unmatchedBy?: Prisma.UserCreateNestedOneWithoutMatchesUnmatchedInput;
    conversation?: Prisma.ConversationCreateNestedOneWithoutMatchInput;
};
export type MatchUncheckedCreateWithoutUserBInput = {
    id?: string;
    userAId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    unmatchedById?: string | null;
    conversation?: Prisma.ConversationUncheckedCreateNestedOneWithoutMatchInput;
};
export type MatchCreateOrConnectWithoutUserBInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutUserBInput, Prisma.MatchUncheckedCreateWithoutUserBInput>;
};
export type MatchCreateManyUserBInputEnvelope = {
    data: Prisma.MatchCreateManyUserBInput | Prisma.MatchCreateManyUserBInput[];
    skipDuplicates?: boolean;
};
export type MatchCreateWithoutUnmatchedByInput = {
    id?: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    userA: Prisma.UserCreateNestedOneWithoutMatchesAsAInput;
    userB: Prisma.UserCreateNestedOneWithoutMatchesAsBInput;
    conversation?: Prisma.ConversationCreateNestedOneWithoutMatchInput;
};
export type MatchUncheckedCreateWithoutUnmatchedByInput = {
    id?: string;
    userAId: string;
    userBId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    conversation?: Prisma.ConversationUncheckedCreateNestedOneWithoutMatchInput;
};
export type MatchCreateOrConnectWithoutUnmatchedByInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutUnmatchedByInput, Prisma.MatchUncheckedCreateWithoutUnmatchedByInput>;
};
export type MatchCreateManyUnmatchedByInputEnvelope = {
    data: Prisma.MatchCreateManyUnmatchedByInput | Prisma.MatchCreateManyUnmatchedByInput[];
    skipDuplicates?: boolean;
};
export type MatchUpsertWithWhereUniqueWithoutUserAInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutUserAInput, Prisma.MatchUncheckedUpdateWithoutUserAInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutUserAInput, Prisma.MatchUncheckedCreateWithoutUserAInput>;
};
export type MatchUpdateWithWhereUniqueWithoutUserAInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutUserAInput, Prisma.MatchUncheckedUpdateWithoutUserAInput>;
};
export type MatchUpdateManyWithWhereWithoutUserAInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutUserAInput>;
};
export type MatchScalarWhereInput = {
    AND?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    OR?: Prisma.MatchScalarWhereInput[];
    NOT?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    id?: Prisma.UuidFilter<"Match"> | string;
    userAId?: Prisma.UuidFilter<"Match"> | string;
    userBId?: Prisma.UuidFilter<"Match"> | string;
    status?: Prisma.EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFilter<"Match"> | boolean;
    matchedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    lastInteractionAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    unmatchedAt?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    unmatchedById?: Prisma.UuidNullableFilter<"Match"> | string | null;
};
export type MatchUpsertWithWhereUniqueWithoutUserBInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutUserBInput, Prisma.MatchUncheckedUpdateWithoutUserBInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutUserBInput, Prisma.MatchUncheckedCreateWithoutUserBInput>;
};
export type MatchUpdateWithWhereUniqueWithoutUserBInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutUserBInput, Prisma.MatchUncheckedUpdateWithoutUserBInput>;
};
export type MatchUpdateManyWithWhereWithoutUserBInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutUserBInput>;
};
export type MatchUpsertWithWhereUniqueWithoutUnmatchedByInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutUnmatchedByInput, Prisma.MatchUncheckedUpdateWithoutUnmatchedByInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutUnmatchedByInput, Prisma.MatchUncheckedCreateWithoutUnmatchedByInput>;
};
export type MatchUpdateWithWhereUniqueWithoutUnmatchedByInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutUnmatchedByInput, Prisma.MatchUncheckedUpdateWithoutUnmatchedByInput>;
};
export type MatchUpdateManyWithWhereWithoutUnmatchedByInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutUnmatchedByInput>;
};
export type MatchCreateWithoutConversationInput = {
    id?: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    userA: Prisma.UserCreateNestedOneWithoutMatchesAsAInput;
    userB: Prisma.UserCreateNestedOneWithoutMatchesAsBInput;
    unmatchedBy?: Prisma.UserCreateNestedOneWithoutMatchesUnmatchedInput;
};
export type MatchUncheckedCreateWithoutConversationInput = {
    id?: string;
    userAId: string;
    userBId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    unmatchedById?: string | null;
};
export type MatchCreateOrConnectWithoutConversationInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutConversationInput, Prisma.MatchUncheckedCreateWithoutConversationInput>;
};
export type MatchUpsertWithoutConversationInput = {
    update: Prisma.XOR<Prisma.MatchUpdateWithoutConversationInput, Prisma.MatchUncheckedUpdateWithoutConversationInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutConversationInput, Prisma.MatchUncheckedCreateWithoutConversationInput>;
    where?: Prisma.MatchWhereInput;
};
export type MatchUpdateToOneWithWhereWithoutConversationInput = {
    where?: Prisma.MatchWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutConversationInput, Prisma.MatchUncheckedUpdateWithoutConversationInput>;
};
export type MatchUpdateWithoutConversationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userA?: Prisma.UserUpdateOneRequiredWithoutMatchesAsANestedInput;
    userB?: Prisma.UserUpdateOneRequiredWithoutMatchesAsBNestedInput;
    unmatchedBy?: Prisma.UserUpdateOneWithoutMatchesUnmatchedNestedInput;
};
export type MatchUncheckedUpdateWithoutConversationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userAId?: Prisma.StringFieldUpdateOperationsInput | string;
    userBId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MatchCreateManyUserAInput = {
    id?: string;
    userBId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    unmatchedById?: string | null;
};
export type MatchCreateManyUserBInput = {
    id?: string;
    userAId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
    unmatchedById?: string | null;
};
export type MatchCreateManyUnmatchedByInput = {
    id?: string;
    userAId: string;
    userBId: string;
    status?: $Enums.MatchStatus;
    fromSuperlike?: boolean;
    matchedAt?: Date | string;
    lastInteractionAt?: Date | string | null;
    expiresAt?: Date | string | null;
    unmatchedAt?: Date | string | null;
};
export type MatchUpdateWithoutUserAInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userB?: Prisma.UserUpdateOneRequiredWithoutMatchesAsBNestedInput;
    unmatchedBy?: Prisma.UserUpdateOneWithoutMatchesUnmatchedNestedInput;
    conversation?: Prisma.ConversationUpdateOneWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateWithoutUserAInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userBId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conversation?: Prisma.ConversationUncheckedUpdateOneWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateManyWithoutUserAInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userBId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MatchUpdateWithoutUserBInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userA?: Prisma.UserUpdateOneRequiredWithoutMatchesAsANestedInput;
    unmatchedBy?: Prisma.UserUpdateOneWithoutMatchesUnmatchedNestedInput;
    conversation?: Prisma.ConversationUpdateOneWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateWithoutUserBInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userAId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conversation?: Prisma.ConversationUncheckedUpdateOneWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateManyWithoutUserBInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userAId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MatchUpdateWithoutUnmatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userA?: Prisma.UserUpdateOneRequiredWithoutMatchesAsANestedInput;
    userB?: Prisma.UserUpdateOneRequiredWithoutMatchesAsBNestedInput;
    conversation?: Prisma.ConversationUpdateOneWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateWithoutUnmatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userAId?: Prisma.StringFieldUpdateOperationsInput | string;
    userBId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conversation?: Prisma.ConversationUncheckedUpdateOneWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateManyWithoutUnmatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userAId?: Prisma.StringFieldUpdateOperationsInput | string;
    userBId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    fromSuperlike?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    matchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastInteractionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unmatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userAId?: boolean;
    userBId?: boolean;
    status?: boolean;
    fromSuperlike?: boolean;
    matchedAt?: boolean;
    lastInteractionAt?: boolean;
    expiresAt?: boolean;
    unmatchedAt?: boolean;
    unmatchedById?: boolean;
    userA?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    userB?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    unmatchedBy?: boolean | Prisma.Match$unmatchedByArgs<ExtArgs>;
    conversation?: boolean | Prisma.Match$conversationArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userAId?: boolean;
    userBId?: boolean;
    status?: boolean;
    fromSuperlike?: boolean;
    matchedAt?: boolean;
    lastInteractionAt?: boolean;
    expiresAt?: boolean;
    unmatchedAt?: boolean;
    unmatchedById?: boolean;
    userA?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    userB?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    unmatchedBy?: boolean | Prisma.Match$unmatchedByArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userAId?: boolean;
    userBId?: boolean;
    status?: boolean;
    fromSuperlike?: boolean;
    matchedAt?: boolean;
    lastInteractionAt?: boolean;
    expiresAt?: boolean;
    unmatchedAt?: boolean;
    unmatchedById?: boolean;
    userA?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    userB?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    unmatchedBy?: boolean | Prisma.Match$unmatchedByArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectScalar = {
    id?: boolean;
    userAId?: boolean;
    userBId?: boolean;
    status?: boolean;
    fromSuperlike?: boolean;
    matchedAt?: boolean;
    lastInteractionAt?: boolean;
    expiresAt?: boolean;
    unmatchedAt?: boolean;
    unmatchedById?: boolean;
};
export type MatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userAId" | "userBId" | "status" | "fromSuperlike" | "matchedAt" | "lastInteractionAt" | "expiresAt" | "unmatchedAt" | "unmatchedById", ExtArgs["result"]["match"]>;
export type MatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userA?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    userB?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    unmatchedBy?: boolean | Prisma.Match$unmatchedByArgs<ExtArgs>;
    conversation?: boolean | Prisma.Match$conversationArgs<ExtArgs>;
};
export type MatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userA?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    userB?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    unmatchedBy?: boolean | Prisma.Match$unmatchedByArgs<ExtArgs>;
};
export type MatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userA?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    userB?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    unmatchedBy?: boolean | Prisma.Match$unmatchedByArgs<ExtArgs>;
};
export type $MatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Match";
    objects: {
        userA: Prisma.$UserPayload<ExtArgs>;
        userB: Prisma.$UserPayload<ExtArgs>;
        unmatchedBy: Prisma.$UserPayload<ExtArgs> | null;
        conversation: Prisma.$ConversationPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userAId: string;
        userBId: string;
        status: $Enums.MatchStatus;
        fromSuperlike: boolean;
        matchedAt: Date;
        lastInteractionAt: Date | null;
        expiresAt: Date | null;
        unmatchedAt: Date | null;
        unmatchedById: string | null;
    }, ExtArgs["result"]["match"]>;
    composites: {};
};
export type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatchPayload, S>;
export type MatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatchCountAggregateInputType | true;
};
export interface MatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Match'];
        meta: {
            name: 'Match';
        };
    };
    findUnique<T extends MatchFindUniqueArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatchFindFirstArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatchFindManyArgs>(args?: Prisma.SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatchCreateArgs>(args: Prisma.SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatchCreateManyArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatchDeleteArgs>(args: Prisma.SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatchUpdateArgs>(args: Prisma.SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatchUpdateManyArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatchUpsertArgs>(args: Prisma.SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatchCountArgs>(args?: Prisma.Subset<T, MatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatchCountAggregateOutputType> : number>;
    aggregate<T extends MatchAggregateArgs>(args: Prisma.Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>;
    groupBy<T extends MatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatchGroupByArgs['orderBy'];
    } : {
        orderBy?: MatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatchFieldRefs;
}
export interface Prisma__MatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userA<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    userB<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    unmatchedBy<T extends Prisma.Match$unmatchedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Match$unmatchedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    conversation<T extends Prisma.Match$conversationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Match$conversationArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatchFieldRefs {
    readonly id: Prisma.FieldRef<"Match", 'String'>;
    readonly userAId: Prisma.FieldRef<"Match", 'String'>;
    readonly userBId: Prisma.FieldRef<"Match", 'String'>;
    readonly status: Prisma.FieldRef<"Match", 'MatchStatus'>;
    readonly fromSuperlike: Prisma.FieldRef<"Match", 'Boolean'>;
    readonly matchedAt: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly lastInteractionAt: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly unmatchedAt: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly unmatchedById: Prisma.FieldRef<"Match", 'String'>;
}
export type MatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type MatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type MatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type MatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
};
export type MatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type MatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
    include?: Prisma.MatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
};
export type MatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type Match$unmatchedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Match$conversationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
};
export type MatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
};
