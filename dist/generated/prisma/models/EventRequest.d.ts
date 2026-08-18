import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EventRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$EventRequestPayload>;
export type AggregateEventRequest = {
    _count: EventRequestCountAggregateOutputType | null;
    _min: EventRequestMinAggregateOutputType | null;
    _max: EventRequestMaxAggregateOutputType | null;
};
export type EventRequestMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    status: $Enums.EventRequestStatus | null;
    message: string | null;
    createdAt: Date | null;
    respondedAt: Date | null;
};
export type EventRequestMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    status: $Enums.EventRequestStatus | null;
    message: string | null;
    createdAt: Date | null;
    respondedAt: Date | null;
};
export type EventRequestCountAggregateOutputType = {
    id: number;
    eventId: number;
    userId: number;
    status: number;
    message: number;
    createdAt: number;
    respondedAt: number;
    _all: number;
};
export type EventRequestMinAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    status?: true;
    message?: true;
    createdAt?: true;
    respondedAt?: true;
};
export type EventRequestMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    status?: true;
    message?: true;
    createdAt?: true;
    respondedAt?: true;
};
export type EventRequestCountAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    status?: true;
    message?: true;
    createdAt?: true;
    respondedAt?: true;
    _all?: true;
};
export type EventRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRequestWhereInput;
    orderBy?: Prisma.EventRequestOrderByWithRelationInput | Prisma.EventRequestOrderByWithRelationInput[];
    cursor?: Prisma.EventRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventRequestCountAggregateInputType;
    _min?: EventRequestMinAggregateInputType;
    _max?: EventRequestMaxAggregateInputType;
};
export type GetEventRequestAggregateType<T extends EventRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateEventRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventRequest[P]> : Prisma.GetScalarType<T[P], AggregateEventRequest[P]>;
};
export type EventRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRequestWhereInput;
    orderBy?: Prisma.EventRequestOrderByWithAggregationInput | Prisma.EventRequestOrderByWithAggregationInput[];
    by: Prisma.EventRequestScalarFieldEnum[] | Prisma.EventRequestScalarFieldEnum;
    having?: Prisma.EventRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventRequestCountAggregateInputType | true;
    _min?: EventRequestMinAggregateInputType;
    _max?: EventRequestMaxAggregateInputType;
};
export type EventRequestGroupByOutputType = {
    id: string;
    eventId: string;
    userId: string;
    status: $Enums.EventRequestStatus;
    message: string | null;
    createdAt: Date;
    respondedAt: Date | null;
    _count: EventRequestCountAggregateOutputType | null;
    _min: EventRequestMinAggregateOutputType | null;
    _max: EventRequestMaxAggregateOutputType | null;
};
export type GetEventRequestGroupByPayload<T extends EventRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventRequestGroupByOutputType[P]>;
}>>;
export type EventRequestWhereInput = {
    AND?: Prisma.EventRequestWhereInput | Prisma.EventRequestWhereInput[];
    OR?: Prisma.EventRequestWhereInput[];
    NOT?: Prisma.EventRequestWhereInput | Prisma.EventRequestWhereInput[];
    id?: Prisma.UuidFilter<"EventRequest"> | string;
    eventId?: Prisma.UuidFilter<"EventRequest"> | string;
    userId?: Prisma.UuidFilter<"EventRequest"> | string;
    status?: Prisma.EnumEventRequestStatusFilter<"EventRequest"> | $Enums.EventRequestStatus;
    message?: Prisma.StringNullableFilter<"EventRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EventRequest"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableFilter<"EventRequest"> | Date | string | null;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type EventRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type EventRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId_userId?: Prisma.EventRequestEventIdUserIdCompoundUniqueInput;
    AND?: Prisma.EventRequestWhereInput | Prisma.EventRequestWhereInput[];
    OR?: Prisma.EventRequestWhereInput[];
    NOT?: Prisma.EventRequestWhereInput | Prisma.EventRequestWhereInput[];
    eventId?: Prisma.UuidFilter<"EventRequest"> | string;
    userId?: Prisma.UuidFilter<"EventRequest"> | string;
    status?: Prisma.EnumEventRequestStatusFilter<"EventRequest"> | $Enums.EventRequestStatus;
    message?: Prisma.StringNullableFilter<"EventRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EventRequest"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableFilter<"EventRequest"> | Date | string | null;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "eventId_userId">;
export type EventRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EventRequestCountOrderByAggregateInput;
    _max?: Prisma.EventRequestMaxOrderByAggregateInput;
    _min?: Prisma.EventRequestMinOrderByAggregateInput;
};
export type EventRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventRequestScalarWhereWithAggregatesInput | Prisma.EventRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventRequestScalarWhereWithAggregatesInput | Prisma.EventRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EventRequest"> | string;
    eventId?: Prisma.UuidWithAggregatesFilter<"EventRequest"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"EventRequest"> | string;
    status?: Prisma.EnumEventRequestStatusWithAggregatesFilter<"EventRequest"> | $Enums.EventRequestStatus;
    message?: Prisma.StringNullableWithAggregatesFilter<"EventRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventRequest"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EventRequest"> | Date | string | null;
};
export type EventRequestCreateInput = {
    id?: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutRequestsInput;
    user: Prisma.UserCreateNestedOneWithoutEventRequestsInput;
};
export type EventRequestUncheckedCreateInput = {
    id?: string;
    eventId: string;
    userId: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
};
export type EventRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutRequestsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutEventRequestsNestedInput;
};
export type EventRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRequestCreateManyInput = {
    id?: string;
    eventId: string;
    userId: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
};
export type EventRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRequestListRelationFilter = {
    every?: Prisma.EventRequestWhereInput;
    some?: Prisma.EventRequestWhereInput;
    none?: Prisma.EventRequestWhereInput;
};
export type EventRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventRequestEventIdUserIdCompoundUniqueInput = {
    eventId: string;
    userId: string;
};
export type EventRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
};
export type EventRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
};
export type EventRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
};
export type EventRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutUserInput, Prisma.EventRequestUncheckedCreateWithoutUserInput> | Prisma.EventRequestCreateWithoutUserInput[] | Prisma.EventRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutUserInput | Prisma.EventRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventRequestCreateManyUserInputEnvelope;
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
};
export type EventRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutUserInput, Prisma.EventRequestUncheckedCreateWithoutUserInput> | Prisma.EventRequestCreateWithoutUserInput[] | Prisma.EventRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutUserInput | Prisma.EventRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventRequestCreateManyUserInputEnvelope;
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
};
export type EventRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutUserInput, Prisma.EventRequestUncheckedCreateWithoutUserInput> | Prisma.EventRequestCreateWithoutUserInput[] | Prisma.EventRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutUserInput | Prisma.EventRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.EventRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventRequestCreateManyUserInputEnvelope;
    set?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    disconnect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    delete?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    update?: Prisma.EventRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.EventRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventRequestUpdateManyWithWhereWithoutUserInput | Prisma.EventRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventRequestScalarWhereInput | Prisma.EventRequestScalarWhereInput[];
};
export type EventRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutUserInput, Prisma.EventRequestUncheckedCreateWithoutUserInput> | Prisma.EventRequestCreateWithoutUserInput[] | Prisma.EventRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutUserInput | Prisma.EventRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.EventRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventRequestCreateManyUserInputEnvelope;
    set?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    disconnect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    delete?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    update?: Prisma.EventRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.EventRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventRequestUpdateManyWithWhereWithoutUserInput | Prisma.EventRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventRequestScalarWhereInput | Prisma.EventRequestScalarWhereInput[];
};
export type EventRequestCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutEventInput, Prisma.EventRequestUncheckedCreateWithoutEventInput> | Prisma.EventRequestCreateWithoutEventInput[] | Prisma.EventRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutEventInput | Prisma.EventRequestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventRequestCreateManyEventInputEnvelope;
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
};
export type EventRequestUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutEventInput, Prisma.EventRequestUncheckedCreateWithoutEventInput> | Prisma.EventRequestCreateWithoutEventInput[] | Prisma.EventRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutEventInput | Prisma.EventRequestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventRequestCreateManyEventInputEnvelope;
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
};
export type EventRequestUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutEventInput, Prisma.EventRequestUncheckedCreateWithoutEventInput> | Prisma.EventRequestCreateWithoutEventInput[] | Prisma.EventRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutEventInput | Prisma.EventRequestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventRequestUpsertWithWhereUniqueWithoutEventInput | Prisma.EventRequestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventRequestCreateManyEventInputEnvelope;
    set?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    disconnect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    delete?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    update?: Prisma.EventRequestUpdateWithWhereUniqueWithoutEventInput | Prisma.EventRequestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventRequestUpdateManyWithWhereWithoutEventInput | Prisma.EventRequestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventRequestScalarWhereInput | Prisma.EventRequestScalarWhereInput[];
};
export type EventRequestUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventRequestCreateWithoutEventInput, Prisma.EventRequestUncheckedCreateWithoutEventInput> | Prisma.EventRequestCreateWithoutEventInput[] | Prisma.EventRequestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRequestCreateOrConnectWithoutEventInput | Prisma.EventRequestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventRequestUpsertWithWhereUniqueWithoutEventInput | Prisma.EventRequestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventRequestCreateManyEventInputEnvelope;
    set?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    disconnect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    delete?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    connect?: Prisma.EventRequestWhereUniqueInput | Prisma.EventRequestWhereUniqueInput[];
    update?: Prisma.EventRequestUpdateWithWhereUniqueWithoutEventInput | Prisma.EventRequestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventRequestUpdateManyWithWhereWithoutEventInput | Prisma.EventRequestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventRequestScalarWhereInput | Prisma.EventRequestScalarWhereInput[];
};
export type EnumEventRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventRequestStatus;
};
export type EventRequestCreateWithoutUserInput = {
    id?: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutRequestsInput;
};
export type EventRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    eventId: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
};
export type EventRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.EventRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventRequestCreateWithoutUserInput, Prisma.EventRequestUncheckedCreateWithoutUserInput>;
};
export type EventRequestCreateManyUserInputEnvelope = {
    data: Prisma.EventRequestCreateManyUserInput | Prisma.EventRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type EventRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventRequestUpdateWithoutUserInput, Prisma.EventRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EventRequestCreateWithoutUserInput, Prisma.EventRequestUncheckedCreateWithoutUserInput>;
};
export type EventRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventRequestUpdateWithoutUserInput, Prisma.EventRequestUncheckedUpdateWithoutUserInput>;
};
export type EventRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.EventRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EventRequestUpdateManyMutationInput, Prisma.EventRequestUncheckedUpdateManyWithoutUserInput>;
};
export type EventRequestScalarWhereInput = {
    AND?: Prisma.EventRequestScalarWhereInput | Prisma.EventRequestScalarWhereInput[];
    OR?: Prisma.EventRequestScalarWhereInput[];
    NOT?: Prisma.EventRequestScalarWhereInput | Prisma.EventRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"EventRequest"> | string;
    eventId?: Prisma.UuidFilter<"EventRequest"> | string;
    userId?: Prisma.UuidFilter<"EventRequest"> | string;
    status?: Prisma.EnumEventRequestStatusFilter<"EventRequest"> | $Enums.EventRequestStatus;
    message?: Prisma.StringNullableFilter<"EventRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EventRequest"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableFilter<"EventRequest"> | Date | string | null;
};
export type EventRequestCreateWithoutEventInput = {
    id?: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutEventRequestsInput;
};
export type EventRequestUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
};
export type EventRequestCreateOrConnectWithoutEventInput = {
    where: Prisma.EventRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventRequestCreateWithoutEventInput, Prisma.EventRequestUncheckedCreateWithoutEventInput>;
};
export type EventRequestCreateManyEventInputEnvelope = {
    data: Prisma.EventRequestCreateManyEventInput | Prisma.EventRequestCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventRequestUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventRequestUpdateWithoutEventInput, Prisma.EventRequestUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventRequestCreateWithoutEventInput, Prisma.EventRequestUncheckedCreateWithoutEventInput>;
};
export type EventRequestUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventRequestUpdateWithoutEventInput, Prisma.EventRequestUncheckedUpdateWithoutEventInput>;
};
export type EventRequestUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EventRequestUpdateManyMutationInput, Prisma.EventRequestUncheckedUpdateManyWithoutEventInput>;
};
export type EventRequestCreateManyUserInput = {
    id?: string;
    eventId: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
};
export type EventRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutRequestsNestedInput;
};
export type EventRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRequestCreateManyEventInput = {
    id?: string;
    userId: string;
    status?: $Enums.EventRequestStatus;
    message?: string | null;
    createdAt?: Date | string;
    respondedAt?: Date | string | null;
};
export type EventRequestUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutEventRequestsNestedInput;
};
export type EventRequestUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRequestUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEventRequestStatusFieldUpdateOperationsInput | $Enums.EventRequestStatus;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    status?: boolean;
    message?: boolean;
    createdAt?: boolean;
    respondedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRequest"]>;
export type EventRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    status?: boolean;
    message?: boolean;
    createdAt?: boolean;
    respondedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRequest"]>;
export type EventRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    status?: boolean;
    message?: boolean;
    createdAt?: boolean;
    respondedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRequest"]>;
export type EventRequestSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    status?: boolean;
    message?: boolean;
    createdAt?: boolean;
    respondedAt?: boolean;
};
export type EventRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "userId" | "status" | "message" | "createdAt" | "respondedAt", ExtArgs["result"]["eventRequest"]>;
export type EventRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EventRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventRequest";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        userId: string;
        status: $Enums.EventRequestStatus;
        message: string | null;
        createdAt: Date;
        respondedAt: Date | null;
    }, ExtArgs["result"]["eventRequest"]>;
    composites: {};
};
export type EventRequestGetPayload<S extends boolean | null | undefined | EventRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventRequestPayload, S>;
export type EventRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventRequestCountAggregateInputType | true;
};
export interface EventRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventRequest'];
        meta: {
            name: 'EventRequest';
        };
    };
    findUnique<T extends EventRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, EventRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, EventRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventRequestFindManyArgs>(args?: Prisma.SelectSubset<T, EventRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventRequestCreateArgs>(args: Prisma.SelectSubset<T, EventRequestCreateArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, EventRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EventRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EventRequestDeleteArgs>(args: Prisma.SelectSubset<T, EventRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventRequestUpdateArgs>(args: Prisma.SelectSubset<T, EventRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, EventRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EventRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EventRequestUpsertArgs>(args: Prisma.SelectSubset<T, EventRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__EventRequestClient<runtime.Types.Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventRequestCountArgs>(args?: Prisma.Subset<T, EventRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventRequestCountAggregateOutputType> : number>;
    aggregate<T extends EventRequestAggregateArgs>(args: Prisma.Subset<T, EventRequestAggregateArgs>): Prisma.PrismaPromise<GetEventRequestAggregateType<T>>;
    groupBy<T extends EventRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: EventRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventRequestFieldRefs;
}
export interface Prisma__EventRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventRequestFieldRefs {
    readonly id: Prisma.FieldRef<"EventRequest", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventRequest", 'String'>;
    readonly userId: Prisma.FieldRef<"EventRequest", 'String'>;
    readonly status: Prisma.FieldRef<"EventRequest", 'EventRequestStatus'>;
    readonly message: Prisma.FieldRef<"EventRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EventRequest", 'DateTime'>;
    readonly respondedAt: Prisma.FieldRef<"EventRequest", 'DateTime'>;
}
export type EventRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    where: Prisma.EventRequestWhereUniqueInput;
};
export type EventRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    where: Prisma.EventRequestWhereUniqueInput;
};
export type EventRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    where?: Prisma.EventRequestWhereInput;
    orderBy?: Prisma.EventRequestOrderByWithRelationInput | Prisma.EventRequestOrderByWithRelationInput[];
    cursor?: Prisma.EventRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventRequestScalarFieldEnum | Prisma.EventRequestScalarFieldEnum[];
};
export type EventRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    where?: Prisma.EventRequestWhereInput;
    orderBy?: Prisma.EventRequestOrderByWithRelationInput | Prisma.EventRequestOrderByWithRelationInput[];
    cursor?: Prisma.EventRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventRequestScalarFieldEnum | Prisma.EventRequestScalarFieldEnum[];
};
export type EventRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    where?: Prisma.EventRequestWhereInput;
    orderBy?: Prisma.EventRequestOrderByWithRelationInput | Prisma.EventRequestOrderByWithRelationInput[];
    cursor?: Prisma.EventRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventRequestScalarFieldEnum | Prisma.EventRequestScalarFieldEnum[];
};
export type EventRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventRequestCreateInput, Prisma.EventRequestUncheckedCreateInput>;
};
export type EventRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventRequestCreateManyInput | Prisma.EventRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    data: Prisma.EventRequestCreateManyInput | Prisma.EventRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EventRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EventRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventRequestUpdateInput, Prisma.EventRequestUncheckedUpdateInput>;
    where: Prisma.EventRequestWhereUniqueInput;
};
export type EventRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventRequestUpdateManyMutationInput, Prisma.EventRequestUncheckedUpdateManyInput>;
    where?: Prisma.EventRequestWhereInput;
    limit?: number;
};
export type EventRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventRequestUpdateManyMutationInput, Prisma.EventRequestUncheckedUpdateManyInput>;
    where?: Prisma.EventRequestWhereInput;
    limit?: number;
    include?: Prisma.EventRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EventRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    where: Prisma.EventRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventRequestCreateInput, Prisma.EventRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventRequestUpdateInput, Prisma.EventRequestUncheckedUpdateInput>;
};
export type EventRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
    where: Prisma.EventRequestWhereUniqueInput;
};
export type EventRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRequestWhereInput;
    limit?: number;
};
export type EventRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventRequestSelect<ExtArgs> | null;
    omit?: Prisma.EventRequestOmit<ExtArgs> | null;
    include?: Prisma.EventRequestInclude<ExtArgs> | null;
};
