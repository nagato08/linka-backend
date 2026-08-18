import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConversationModel = runtime.Types.Result.DefaultSelection<Prisma.$ConversationPayload>;
export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
};
export type ConversationMinAggregateOutputType = {
    id: string | null;
    type: $Enums.ConversationType | null;
    status: $Enums.ConversationStatus | null;
    matchId: string | null;
    eventId: string | null;
    lastMessageAt: Date | null;
    lastMessagePreview: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    closedAt: Date | null;
};
export type ConversationMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.ConversationType | null;
    status: $Enums.ConversationStatus | null;
    matchId: string | null;
    eventId: string | null;
    lastMessageAt: Date | null;
    lastMessagePreview: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    closedAt: Date | null;
};
export type ConversationCountAggregateOutputType = {
    id: number;
    type: number;
    status: number;
    matchId: number;
    eventId: number;
    lastMessageAt: number;
    lastMessagePreview: number;
    createdAt: number;
    updatedAt: number;
    closedAt: number;
    _all: number;
};
export type ConversationMinAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    matchId?: true;
    eventId?: true;
    lastMessageAt?: true;
    lastMessagePreview?: true;
    createdAt?: true;
    updatedAt?: true;
    closedAt?: true;
};
export type ConversationMaxAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    matchId?: true;
    eventId?: true;
    lastMessageAt?: true;
    lastMessagePreview?: true;
    createdAt?: true;
    updatedAt?: true;
    closedAt?: true;
};
export type ConversationCountAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    matchId?: true;
    eventId?: true;
    lastMessageAt?: true;
    lastMessagePreview?: true;
    createdAt?: true;
    updatedAt?: true;
    closedAt?: true;
    _all?: true;
};
export type ConversationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConversationCountAggregateInputType;
    _min?: ConversationMinAggregateInputType;
    _max?: ConversationMaxAggregateInputType;
};
export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
    [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversation[P]> : Prisma.GetScalarType<T[P], AggregateConversation[P]>;
};
export type ConversationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithAggregationInput | Prisma.ConversationOrderByWithAggregationInput[];
    by: Prisma.ConversationScalarFieldEnum[] | Prisma.ConversationScalarFieldEnum;
    having?: Prisma.ConversationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversationCountAggregateInputType | true;
    _min?: ConversationMinAggregateInputType;
    _max?: ConversationMaxAggregateInputType;
};
export type ConversationGroupByOutputType = {
    id: string;
    type: $Enums.ConversationType;
    status: $Enums.ConversationStatus;
    matchId: string | null;
    eventId: string | null;
    lastMessageAt: Date | null;
    lastMessagePreview: string | null;
    createdAt: Date;
    updatedAt: Date;
    closedAt: Date | null;
    _count: ConversationCountAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
};
export type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConversationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConversationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConversationGroupByOutputType[P]>;
}>>;
export type ConversationWhereInput = {
    AND?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    OR?: Prisma.ConversationWhereInput[];
    NOT?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    id?: Prisma.UuidFilter<"Conversation"> | string;
    type?: Prisma.EnumConversationTypeFilter<"Conversation"> | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFilter<"Conversation"> | $Enums.ConversationStatus;
    matchId?: Prisma.UuidNullableFilter<"Conversation"> | string | null;
    eventId?: Prisma.UuidNullableFilter<"Conversation"> | string | null;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    lastMessagePreview?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    match?: Prisma.XOR<Prisma.MatchNullableScalarRelationFilter, Prisma.MatchWhereInput> | null;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    participants?: Prisma.ConversationParticipantListRelationFilter;
    messages?: Prisma.MessageListRelationFilter;
};
export type ConversationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    match?: Prisma.MatchOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    participants?: Prisma.ConversationParticipantOrderByRelationAggregateInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
};
export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    matchId?: string;
    eventId?: string;
    AND?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    OR?: Prisma.ConversationWhereInput[];
    NOT?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    type?: Prisma.EnumConversationTypeFilter<"Conversation"> | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFilter<"Conversation"> | $Enums.ConversationStatus;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    lastMessagePreview?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    match?: Prisma.XOR<Prisma.MatchNullableScalarRelationFilter, Prisma.MatchWhereInput> | null;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
    participants?: Prisma.ConversationParticipantListRelationFilter;
    messages?: Prisma.MessageListRelationFilter;
}, "id" | "matchId" | "eventId">;
export type ConversationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ConversationCountOrderByAggregateInput;
    _max?: Prisma.ConversationMaxOrderByAggregateInput;
    _min?: Prisma.ConversationMinOrderByAggregateInput;
};
export type ConversationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConversationScalarWhereWithAggregatesInput | Prisma.ConversationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConversationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConversationScalarWhereWithAggregatesInput | Prisma.ConversationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Conversation"> | string;
    type?: Prisma.EnumConversationTypeWithAggregatesFilter<"Conversation"> | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusWithAggregatesFilter<"Conversation"> | $Enums.ConversationStatus;
    matchId?: Prisma.UuidNullableWithAggregatesFilter<"Conversation"> | string | null;
    eventId?: Prisma.UuidNullableWithAggregatesFilter<"Conversation"> | string | null;
    lastMessageAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null;
    lastMessagePreview?: Prisma.StringNullableWithAggregatesFilter<"Conversation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Conversation"> | Date | string;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null;
};
export type ConversationCreateInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    match?: Prisma.MatchCreateNestedOneWithoutConversationInput;
    event?: Prisma.EventCreateNestedOneWithoutConversationInput;
    participants?: Prisma.ConversationParticipantCreateNestedManyWithoutConversationInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    matchId?: string | null;
    eventId?: string | null;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutConversationInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    match?: Prisma.MatchUpdateOneWithoutConversationNestedInput;
    event?: Prisma.EventUpdateOneWithoutConversationNestedInput;
    participants?: Prisma.ConversationParticipantUpdateManyWithoutConversationNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    matchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutConversationNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationCreateManyInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    matchId?: string | null;
    eventId?: string | null;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
};
export type ConversationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ConversationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    matchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ConversationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
};
export type ConversationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
};
export type ConversationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    lastMessagePreview?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
};
export type ConversationScalarRelationFilter = {
    is?: Prisma.ConversationWhereInput;
    isNot?: Prisma.ConversationWhereInput;
};
export type ConversationNullableScalarRelationFilter = {
    is?: Prisma.ConversationWhereInput | null;
    isNot?: Prisma.ConversationWhereInput | null;
};
export type EnumConversationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConversationType;
};
export type EnumConversationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConversationStatus;
};
export type ConversationCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutParticipantsInput, Prisma.ConversationUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutParticipantsInput, Prisma.ConversationUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.ConversationUpsertWithoutParticipantsInput;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutParticipantsInput, Prisma.ConversationUpdateWithoutParticipantsInput>, Prisma.ConversationUncheckedUpdateWithoutParticipantsInput>;
};
export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.ConversationUpsertWithoutMessagesInput;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutMessagesInput, Prisma.ConversationUpdateWithoutMessagesInput>, Prisma.ConversationUncheckedUpdateWithoutMessagesInput>;
};
export type ConversationCreateNestedOneWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMatchInput, Prisma.ConversationUncheckedCreateWithoutMatchInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMatchInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUncheckedCreateNestedOneWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMatchInput, Prisma.ConversationUncheckedCreateWithoutMatchInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMatchInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateOneWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMatchInput, Prisma.ConversationUncheckedCreateWithoutMatchInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMatchInput;
    upsert?: Prisma.ConversationUpsertWithoutMatchInput;
    disconnect?: Prisma.ConversationWhereInput | boolean;
    delete?: Prisma.ConversationWhereInput | boolean;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutMatchInput, Prisma.ConversationUpdateWithoutMatchInput>, Prisma.ConversationUncheckedUpdateWithoutMatchInput>;
};
export type ConversationUncheckedUpdateOneWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMatchInput, Prisma.ConversationUncheckedCreateWithoutMatchInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMatchInput;
    upsert?: Prisma.ConversationUpsertWithoutMatchInput;
    disconnect?: Prisma.ConversationWhereInput | boolean;
    delete?: Prisma.ConversationWhereInput | boolean;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutMatchInput, Prisma.ConversationUpdateWithoutMatchInput>, Prisma.ConversationUncheckedUpdateWithoutMatchInput>;
};
export type ConversationCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutEventInput, Prisma.ConversationUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutEventInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUncheckedCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutEventInput, Prisma.ConversationUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutEventInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutEventInput, Prisma.ConversationUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutEventInput;
    upsert?: Prisma.ConversationUpsertWithoutEventInput;
    disconnect?: Prisma.ConversationWhereInput | boolean;
    delete?: Prisma.ConversationWhereInput | boolean;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutEventInput, Prisma.ConversationUpdateWithoutEventInput>, Prisma.ConversationUncheckedUpdateWithoutEventInput>;
};
export type ConversationUncheckedUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutEventInput, Prisma.ConversationUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutEventInput;
    upsert?: Prisma.ConversationUpsertWithoutEventInput;
    disconnect?: Prisma.ConversationWhereInput | boolean;
    delete?: Prisma.ConversationWhereInput | boolean;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutEventInput, Prisma.ConversationUpdateWithoutEventInput>, Prisma.ConversationUncheckedUpdateWithoutEventInput>;
};
export type ConversationCreateWithoutParticipantsInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    match?: Prisma.MatchCreateNestedOneWithoutConversationInput;
    event?: Prisma.EventCreateNestedOneWithoutConversationInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutParticipantsInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    matchId?: string | null;
    eventId?: string | null;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutParticipantsInput, Prisma.ConversationUncheckedCreateWithoutParticipantsInput>;
};
export type ConversationUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutParticipantsInput, Prisma.ConversationUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutParticipantsInput, Prisma.ConversationUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.ConversationWhereInput;
};
export type ConversationUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.ConversationWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutParticipantsInput, Prisma.ConversationUncheckedUpdateWithoutParticipantsInput>;
};
export type ConversationUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    match?: Prisma.MatchUpdateOneWithoutConversationNestedInput;
    event?: Prisma.EventUpdateOneWithoutConversationNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    matchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationCreateWithoutMessagesInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    match?: Prisma.MatchCreateNestedOneWithoutConversationInput;
    event?: Prisma.EventCreateNestedOneWithoutConversationInput;
    participants?: Prisma.ConversationParticipantCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    matchId?: string | null;
    eventId?: string | null;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
};
export type ConversationUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutMessagesInput, Prisma.ConversationUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.ConversationWhereInput;
};
export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.ConversationWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutMessagesInput, Prisma.ConversationUncheckedUpdateWithoutMessagesInput>;
};
export type ConversationUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    match?: Prisma.MatchUpdateOneWithoutConversationNestedInput;
    event?: Prisma.EventUpdateOneWithoutConversationNestedInput;
    participants?: Prisma.ConversationParticipantUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    matchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationCreateWithoutMatchInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    event?: Prisma.EventCreateNestedOneWithoutConversationInput;
    participants?: Prisma.ConversationParticipantCreateNestedManyWithoutConversationInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutMatchInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    eventId?: string | null;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutConversationInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutMatchInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutMatchInput, Prisma.ConversationUncheckedCreateWithoutMatchInput>;
};
export type ConversationUpsertWithoutMatchInput = {
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutMatchInput, Prisma.ConversationUncheckedUpdateWithoutMatchInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutMatchInput, Prisma.ConversationUncheckedCreateWithoutMatchInput>;
    where?: Prisma.ConversationWhereInput;
};
export type ConversationUpdateToOneWithWhereWithoutMatchInput = {
    where?: Prisma.ConversationWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutMatchInput, Prisma.ConversationUncheckedUpdateWithoutMatchInput>;
};
export type ConversationUpdateWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneWithoutConversationNestedInput;
    participants?: Prisma.ConversationParticipantUpdateManyWithoutConversationNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutConversationNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationCreateWithoutEventInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    match?: Prisma.MatchCreateNestedOneWithoutConversationInput;
    participants?: Prisma.ConversationParticipantCreateNestedManyWithoutConversationInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutEventInput = {
    id?: string;
    type: $Enums.ConversationType;
    status?: $Enums.ConversationStatus;
    matchId?: string | null;
    lastMessageAt?: Date | string | null;
    lastMessagePreview?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutConversationInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutEventInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutEventInput, Prisma.ConversationUncheckedCreateWithoutEventInput>;
};
export type ConversationUpsertWithoutEventInput = {
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutEventInput, Prisma.ConversationUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutEventInput, Prisma.ConversationUncheckedCreateWithoutEventInput>;
    where?: Prisma.ConversationWhereInput;
};
export type ConversationUpdateToOneWithWhereWithoutEventInput = {
    where?: Prisma.ConversationWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutEventInput, Prisma.ConversationUncheckedUpdateWithoutEventInput>;
};
export type ConversationUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    match?: Prisma.MatchUpdateOneWithoutConversationNestedInput;
    participants?: Prisma.ConversationParticipantUpdateManyWithoutConversationNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    matchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastMessagePreview?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participants?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutConversationNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationCountOutputType = {
    participants: number;
    messages: number;
};
export type ConversationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | ConversationCountOutputTypeCountParticipantsArgs;
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs;
};
export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationCountOutputTypeSelect<ExtArgs> | null;
};
export type ConversationCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationParticipantWhereInput;
};
export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type ConversationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    matchId?: boolean;
    eventId?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
    match?: boolean | Prisma.Conversation$matchArgs<ExtArgs>;
    event?: boolean | Prisma.Conversation$eventArgs<ExtArgs>;
    participants?: boolean | Prisma.Conversation$participantsArgs<ExtArgs>;
    messages?: boolean | Prisma.Conversation$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    matchId?: boolean;
    eventId?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
    match?: boolean | Prisma.Conversation$matchArgs<ExtArgs>;
    event?: boolean | Prisma.Conversation$eventArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    matchId?: boolean;
    eventId?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
    match?: boolean | Prisma.Conversation$matchArgs<ExtArgs>;
    event?: boolean | Prisma.Conversation$eventArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectScalar = {
    id?: boolean;
    type?: boolean;
    status?: boolean;
    matchId?: boolean;
    eventId?: boolean;
    lastMessageAt?: boolean;
    lastMessagePreview?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
};
export type ConversationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "status" | "matchId" | "eventId" | "lastMessageAt" | "lastMessagePreview" | "createdAt" | "updatedAt" | "closedAt", ExtArgs["result"]["conversation"]>;
export type ConversationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.Conversation$matchArgs<ExtArgs>;
    event?: boolean | Prisma.Conversation$eventArgs<ExtArgs>;
    participants?: boolean | Prisma.Conversation$participantsArgs<ExtArgs>;
    messages?: boolean | Prisma.Conversation$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ConversationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.Conversation$matchArgs<ExtArgs>;
    event?: boolean | Prisma.Conversation$eventArgs<ExtArgs>;
};
export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.Conversation$matchArgs<ExtArgs>;
    event?: boolean | Prisma.Conversation$eventArgs<ExtArgs>;
};
export type $ConversationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Conversation";
    objects: {
        match: Prisma.$MatchPayload<ExtArgs> | null;
        event: Prisma.$EventPayload<ExtArgs> | null;
        participants: Prisma.$ConversationParticipantPayload<ExtArgs>[];
        messages: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.ConversationType;
        status: $Enums.ConversationStatus;
        matchId: string | null;
        eventId: string | null;
        lastMessageAt: Date | null;
        lastMessagePreview: string | null;
        createdAt: Date;
        updatedAt: Date;
        closedAt: Date | null;
    }, ExtArgs["result"]["conversation"]>;
    composites: {};
};
export type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConversationPayload, S>;
export type ConversationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversationCountAggregateInputType | true;
};
export interface ConversationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Conversation'];
        meta: {
            name: 'Conversation';
        };
    };
    findUnique<T extends ConversationFindUniqueArgs>(args: Prisma.SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConversationFindFirstArgs>(args?: Prisma.SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConversationFindManyArgs>(args?: Prisma.SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConversationCreateArgs>(args: Prisma.SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConversationCreateManyArgs>(args?: Prisma.SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConversationDeleteArgs>(args: Prisma.SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConversationUpdateArgs>(args: Prisma.SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConversationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConversationUpdateManyArgs>(args: Prisma.SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConversationUpsertArgs>(args: Prisma.SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConversationCountArgs>(args?: Prisma.Subset<T, ConversationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConversationCountAggregateOutputType> : number>;
    aggregate<T extends ConversationAggregateArgs>(args: Prisma.Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>;
    groupBy<T extends ConversationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConversationGroupByArgs['orderBy'];
    } : {
        orderBy?: ConversationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConversationFieldRefs;
}
export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    match<T extends Prisma.Conversation$matchArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversation$matchArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.Conversation$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversation$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    participants<T extends Prisma.Conversation$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversation$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    messages<T extends Prisma.Conversation$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConversationFieldRefs {
    readonly id: Prisma.FieldRef<"Conversation", 'String'>;
    readonly type: Prisma.FieldRef<"Conversation", 'ConversationType'>;
    readonly status: Prisma.FieldRef<"Conversation", 'ConversationStatus'>;
    readonly matchId: Prisma.FieldRef<"Conversation", 'String'>;
    readonly eventId: Prisma.FieldRef<"Conversation", 'String'>;
    readonly lastMessageAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
    readonly lastMessagePreview: Prisma.FieldRef<"Conversation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
    readonly closedAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
}
export type ConversationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationCreateInput, Prisma.ConversationUncheckedCreateInput>;
};
export type ConversationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConversationCreateManyInput | Prisma.ConversationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConversationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    data: Prisma.ConversationCreateManyInput | Prisma.ConversationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConversationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConversationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationUpdateInput, Prisma.ConversationUncheckedUpdateInput>;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyInput>;
    where?: Prisma.ConversationWhereInput;
    limit?: number;
};
export type ConversationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyInput>;
    where?: Prisma.ConversationWhereInput;
    limit?: number;
    include?: Prisma.ConversationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConversationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateInput, Prisma.ConversationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConversationUpdateInput, Prisma.ConversationUncheckedUpdateInput>;
};
export type ConversationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    limit?: number;
};
export type Conversation$matchArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
};
export type Conversation$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
export type Conversation$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ConversationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ConversationParticipantInclude<ExtArgs> | null;
    where?: Prisma.ConversationParticipantWhereInput;
    orderBy?: Prisma.ConversationParticipantOrderByWithRelationInput | Prisma.ConversationParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ConversationParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationParticipantScalarFieldEnum | Prisma.ConversationParticipantScalarFieldEnum[];
};
export type Conversation$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type ConversationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
};
