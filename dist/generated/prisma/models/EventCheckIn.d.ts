import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EventCheckInModel = runtime.Types.Result.DefaultSelection<Prisma.$EventCheckInPayload>;
export type AggregateEventCheckIn = {
    _count: EventCheckInCountAggregateOutputType | null;
    _avg: EventCheckInAvgAggregateOutputType | null;
    _sum: EventCheckInSumAggregateOutputType | null;
    _min: EventCheckInMinAggregateOutputType | null;
    _max: EventCheckInMaxAggregateOutputType | null;
};
export type EventCheckInAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    distanceM: number | null;
};
export type EventCheckInSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    distanceM: number | null;
};
export type EventCheckInMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    distanceM: number | null;
    checkedInAt: Date | null;
};
export type EventCheckInMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    distanceM: number | null;
    checkedInAt: Date | null;
};
export type EventCheckInCountAggregateOutputType = {
    id: number;
    eventId: number;
    userId: number;
    latitude: number;
    longitude: number;
    distanceM: number;
    checkedInAt: number;
    _all: number;
};
export type EventCheckInAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    distanceM?: true;
};
export type EventCheckInSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    distanceM?: true;
};
export type EventCheckInMinAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    distanceM?: true;
    checkedInAt?: true;
};
export type EventCheckInMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    distanceM?: true;
    checkedInAt?: true;
};
export type EventCheckInCountAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    distanceM?: true;
    checkedInAt?: true;
    _all?: true;
};
export type EventCheckInAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventCheckInWhereInput;
    orderBy?: Prisma.EventCheckInOrderByWithRelationInput | Prisma.EventCheckInOrderByWithRelationInput[];
    cursor?: Prisma.EventCheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventCheckInCountAggregateInputType;
    _avg?: EventCheckInAvgAggregateInputType;
    _sum?: EventCheckInSumAggregateInputType;
    _min?: EventCheckInMinAggregateInputType;
    _max?: EventCheckInMaxAggregateInputType;
};
export type GetEventCheckInAggregateType<T extends EventCheckInAggregateArgs> = {
    [P in keyof T & keyof AggregateEventCheckIn]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventCheckIn[P]> : Prisma.GetScalarType<T[P], AggregateEventCheckIn[P]>;
};
export type EventCheckInGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventCheckInWhereInput;
    orderBy?: Prisma.EventCheckInOrderByWithAggregationInput | Prisma.EventCheckInOrderByWithAggregationInput[];
    by: Prisma.EventCheckInScalarFieldEnum[] | Prisma.EventCheckInScalarFieldEnum;
    having?: Prisma.EventCheckInScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCheckInCountAggregateInputType | true;
    _avg?: EventCheckInAvgAggregateInputType;
    _sum?: EventCheckInSumAggregateInputType;
    _min?: EventCheckInMinAggregateInputType;
    _max?: EventCheckInMaxAggregateInputType;
};
export type EventCheckInGroupByOutputType = {
    id: string;
    eventId: string;
    userId: string;
    latitude: number;
    longitude: number;
    distanceM: number | null;
    checkedInAt: Date;
    _count: EventCheckInCountAggregateOutputType | null;
    _avg: EventCheckInAvgAggregateOutputType | null;
    _sum: EventCheckInSumAggregateOutputType | null;
    _min: EventCheckInMinAggregateOutputType | null;
    _max: EventCheckInMaxAggregateOutputType | null;
};
export type GetEventCheckInGroupByPayload<T extends EventCheckInGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventCheckInGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventCheckInGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventCheckInGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventCheckInGroupByOutputType[P]>;
}>>;
export type EventCheckInWhereInput = {
    AND?: Prisma.EventCheckInWhereInput | Prisma.EventCheckInWhereInput[];
    OR?: Prisma.EventCheckInWhereInput[];
    NOT?: Prisma.EventCheckInWhereInput | Prisma.EventCheckInWhereInput[];
    id?: Prisma.UuidFilter<"EventCheckIn"> | string;
    eventId?: Prisma.UuidFilter<"EventCheckIn"> | string;
    userId?: Prisma.UuidFilter<"EventCheckIn"> | string;
    latitude?: Prisma.FloatFilter<"EventCheckIn"> | number;
    longitude?: Prisma.FloatFilter<"EventCheckIn"> | number;
    distanceM?: Prisma.IntNullableFilter<"EventCheckIn"> | number | null;
    checkedInAt?: Prisma.DateTimeFilter<"EventCheckIn"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type EventCheckInOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distanceM?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type EventCheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId_userId?: Prisma.EventCheckInEventIdUserIdCompoundUniqueInput;
    AND?: Prisma.EventCheckInWhereInput | Prisma.EventCheckInWhereInput[];
    OR?: Prisma.EventCheckInWhereInput[];
    NOT?: Prisma.EventCheckInWhereInput | Prisma.EventCheckInWhereInput[];
    eventId?: Prisma.UuidFilter<"EventCheckIn"> | string;
    userId?: Prisma.UuidFilter<"EventCheckIn"> | string;
    latitude?: Prisma.FloatFilter<"EventCheckIn"> | number;
    longitude?: Prisma.FloatFilter<"EventCheckIn"> | number;
    distanceM?: Prisma.IntNullableFilter<"EventCheckIn"> | number | null;
    checkedInAt?: Prisma.DateTimeFilter<"EventCheckIn"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "eventId_userId">;
export type EventCheckInOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distanceM?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    _count?: Prisma.EventCheckInCountOrderByAggregateInput;
    _avg?: Prisma.EventCheckInAvgOrderByAggregateInput;
    _max?: Prisma.EventCheckInMaxOrderByAggregateInput;
    _min?: Prisma.EventCheckInMinOrderByAggregateInput;
    _sum?: Prisma.EventCheckInSumOrderByAggregateInput;
};
export type EventCheckInScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventCheckInScalarWhereWithAggregatesInput | Prisma.EventCheckInScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventCheckInScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventCheckInScalarWhereWithAggregatesInput | Prisma.EventCheckInScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EventCheckIn"> | string;
    eventId?: Prisma.UuidWithAggregatesFilter<"EventCheckIn"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"EventCheckIn"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"EventCheckIn"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"EventCheckIn"> | number;
    distanceM?: Prisma.IntNullableWithAggregatesFilter<"EventCheckIn"> | number | null;
    checkedInAt?: Prisma.DateTimeWithAggregatesFilter<"EventCheckIn"> | Date | string;
};
export type EventCheckInCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutCheckInsInput;
    user: Prisma.UserCreateNestedOneWithoutEventCheckInsInput;
};
export type EventCheckInUncheckedCreateInput = {
    id?: string;
    eventId: string;
    userId: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
};
export type EventCheckInUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutCheckInsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutEventCheckInsNestedInput;
};
export type EventCheckInUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCheckInCreateManyInput = {
    id?: string;
    eventId: string;
    userId: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
};
export type EventCheckInUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCheckInUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCheckInListRelationFilter = {
    every?: Prisma.EventCheckInWhereInput;
    some?: Prisma.EventCheckInWhereInput;
    none?: Prisma.EventCheckInWhereInput;
};
export type EventCheckInOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventCheckInEventIdUserIdCompoundUniqueInput = {
    eventId: string;
    userId: string;
};
export type EventCheckInCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distanceM?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type EventCheckInAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distanceM?: Prisma.SortOrder;
};
export type EventCheckInMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distanceM?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type EventCheckInMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distanceM?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type EventCheckInSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    distanceM?: Prisma.SortOrder;
};
export type EventCheckInCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutUserInput, Prisma.EventCheckInUncheckedCreateWithoutUserInput> | Prisma.EventCheckInCreateWithoutUserInput[] | Prisma.EventCheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutUserInput | Prisma.EventCheckInCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventCheckInCreateManyUserInputEnvelope;
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
};
export type EventCheckInUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutUserInput, Prisma.EventCheckInUncheckedCreateWithoutUserInput> | Prisma.EventCheckInCreateWithoutUserInput[] | Prisma.EventCheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutUserInput | Prisma.EventCheckInCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventCheckInCreateManyUserInputEnvelope;
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
};
export type EventCheckInUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutUserInput, Prisma.EventCheckInUncheckedCreateWithoutUserInput> | Prisma.EventCheckInCreateWithoutUserInput[] | Prisma.EventCheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutUserInput | Prisma.EventCheckInCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventCheckInUpsertWithWhereUniqueWithoutUserInput | Prisma.EventCheckInUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventCheckInCreateManyUserInputEnvelope;
    set?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    disconnect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    delete?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    update?: Prisma.EventCheckInUpdateWithWhereUniqueWithoutUserInput | Prisma.EventCheckInUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventCheckInUpdateManyWithWhereWithoutUserInput | Prisma.EventCheckInUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventCheckInScalarWhereInput | Prisma.EventCheckInScalarWhereInput[];
};
export type EventCheckInUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutUserInput, Prisma.EventCheckInUncheckedCreateWithoutUserInput> | Prisma.EventCheckInCreateWithoutUserInput[] | Prisma.EventCheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutUserInput | Prisma.EventCheckInCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventCheckInUpsertWithWhereUniqueWithoutUserInput | Prisma.EventCheckInUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventCheckInCreateManyUserInputEnvelope;
    set?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    disconnect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    delete?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    update?: Prisma.EventCheckInUpdateWithWhereUniqueWithoutUserInput | Prisma.EventCheckInUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventCheckInUpdateManyWithWhereWithoutUserInput | Prisma.EventCheckInUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventCheckInScalarWhereInput | Prisma.EventCheckInScalarWhereInput[];
};
export type EventCheckInCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutEventInput, Prisma.EventCheckInUncheckedCreateWithoutEventInput> | Prisma.EventCheckInCreateWithoutEventInput[] | Prisma.EventCheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutEventInput | Prisma.EventCheckInCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventCheckInCreateManyEventInputEnvelope;
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
};
export type EventCheckInUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutEventInput, Prisma.EventCheckInUncheckedCreateWithoutEventInput> | Prisma.EventCheckInCreateWithoutEventInput[] | Prisma.EventCheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutEventInput | Prisma.EventCheckInCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventCheckInCreateManyEventInputEnvelope;
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
};
export type EventCheckInUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutEventInput, Prisma.EventCheckInUncheckedCreateWithoutEventInput> | Prisma.EventCheckInCreateWithoutEventInput[] | Prisma.EventCheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutEventInput | Prisma.EventCheckInCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventCheckInUpsertWithWhereUniqueWithoutEventInput | Prisma.EventCheckInUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventCheckInCreateManyEventInputEnvelope;
    set?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    disconnect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    delete?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    update?: Prisma.EventCheckInUpdateWithWhereUniqueWithoutEventInput | Prisma.EventCheckInUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventCheckInUpdateManyWithWhereWithoutEventInput | Prisma.EventCheckInUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventCheckInScalarWhereInput | Prisma.EventCheckInScalarWhereInput[];
};
export type EventCheckInUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventCheckInCreateWithoutEventInput, Prisma.EventCheckInUncheckedCreateWithoutEventInput> | Prisma.EventCheckInCreateWithoutEventInput[] | Prisma.EventCheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventCheckInCreateOrConnectWithoutEventInput | Prisma.EventCheckInCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventCheckInUpsertWithWhereUniqueWithoutEventInput | Prisma.EventCheckInUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventCheckInCreateManyEventInputEnvelope;
    set?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    disconnect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    delete?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    connect?: Prisma.EventCheckInWhereUniqueInput | Prisma.EventCheckInWhereUniqueInput[];
    update?: Prisma.EventCheckInUpdateWithWhereUniqueWithoutEventInput | Prisma.EventCheckInUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventCheckInUpdateManyWithWhereWithoutEventInput | Prisma.EventCheckInUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventCheckInScalarWhereInput | Prisma.EventCheckInScalarWhereInput[];
};
export type EventCheckInCreateWithoutUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutCheckInsInput;
};
export type EventCheckInUncheckedCreateWithoutUserInput = {
    id?: string;
    eventId: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
};
export type EventCheckInCreateOrConnectWithoutUserInput = {
    where: Prisma.EventCheckInWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCheckInCreateWithoutUserInput, Prisma.EventCheckInUncheckedCreateWithoutUserInput>;
};
export type EventCheckInCreateManyUserInputEnvelope = {
    data: Prisma.EventCheckInCreateManyUserInput | Prisma.EventCheckInCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type EventCheckInUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventCheckInWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventCheckInUpdateWithoutUserInput, Prisma.EventCheckInUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EventCheckInCreateWithoutUserInput, Prisma.EventCheckInUncheckedCreateWithoutUserInput>;
};
export type EventCheckInUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventCheckInWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventCheckInUpdateWithoutUserInput, Prisma.EventCheckInUncheckedUpdateWithoutUserInput>;
};
export type EventCheckInUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.EventCheckInScalarWhereInput;
    data: Prisma.XOR<Prisma.EventCheckInUpdateManyMutationInput, Prisma.EventCheckInUncheckedUpdateManyWithoutUserInput>;
};
export type EventCheckInScalarWhereInput = {
    AND?: Prisma.EventCheckInScalarWhereInput | Prisma.EventCheckInScalarWhereInput[];
    OR?: Prisma.EventCheckInScalarWhereInput[];
    NOT?: Prisma.EventCheckInScalarWhereInput | Prisma.EventCheckInScalarWhereInput[];
    id?: Prisma.UuidFilter<"EventCheckIn"> | string;
    eventId?: Prisma.UuidFilter<"EventCheckIn"> | string;
    userId?: Prisma.UuidFilter<"EventCheckIn"> | string;
    latitude?: Prisma.FloatFilter<"EventCheckIn"> | number;
    longitude?: Prisma.FloatFilter<"EventCheckIn"> | number;
    distanceM?: Prisma.IntNullableFilter<"EventCheckIn"> | number | null;
    checkedInAt?: Prisma.DateTimeFilter<"EventCheckIn"> | Date | string;
};
export type EventCheckInCreateWithoutEventInput = {
    id?: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEventCheckInsInput;
};
export type EventCheckInUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
};
export type EventCheckInCreateOrConnectWithoutEventInput = {
    where: Prisma.EventCheckInWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCheckInCreateWithoutEventInput, Prisma.EventCheckInUncheckedCreateWithoutEventInput>;
};
export type EventCheckInCreateManyEventInputEnvelope = {
    data: Prisma.EventCheckInCreateManyEventInput | Prisma.EventCheckInCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventCheckInUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventCheckInWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventCheckInUpdateWithoutEventInput, Prisma.EventCheckInUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventCheckInCreateWithoutEventInput, Prisma.EventCheckInUncheckedCreateWithoutEventInput>;
};
export type EventCheckInUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventCheckInWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventCheckInUpdateWithoutEventInput, Prisma.EventCheckInUncheckedUpdateWithoutEventInput>;
};
export type EventCheckInUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventCheckInScalarWhereInput;
    data: Prisma.XOR<Prisma.EventCheckInUpdateManyMutationInput, Prisma.EventCheckInUncheckedUpdateManyWithoutEventInput>;
};
export type EventCheckInCreateManyUserInput = {
    id?: string;
    eventId: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
};
export type EventCheckInUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutCheckInsNestedInput;
};
export type EventCheckInUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCheckInUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCheckInCreateManyEventInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    distanceM?: number | null;
    checkedInAt?: Date | string;
};
export type EventCheckInUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEventCheckInsNestedInput;
};
export type EventCheckInUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCheckInUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    distanceM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCheckInSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distanceM?: boolean;
    checkedInAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventCheckIn"]>;
export type EventCheckInSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distanceM?: boolean;
    checkedInAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventCheckIn"]>;
export type EventCheckInSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distanceM?: boolean;
    checkedInAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventCheckIn"]>;
export type EventCheckInSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    distanceM?: boolean;
    checkedInAt?: boolean;
};
export type EventCheckInOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "userId" | "latitude" | "longitude" | "distanceM" | "checkedInAt", ExtArgs["result"]["eventCheckIn"]>;
export type EventCheckInInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventCheckInIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type EventCheckInIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EventCheckInPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventCheckIn";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        userId: string;
        latitude: number;
        longitude: number;
        distanceM: number | null;
        checkedInAt: Date;
    }, ExtArgs["result"]["eventCheckIn"]>;
    composites: {};
};
export type EventCheckInGetPayload<S extends boolean | null | undefined | EventCheckInDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload, S>;
export type EventCheckInCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventCheckInFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventCheckInCountAggregateInputType | true;
};
export interface EventCheckInDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventCheckIn'];
        meta: {
            name: 'EventCheckIn';
        };
    };
    findUnique<T extends EventCheckInFindUniqueArgs>(args: Prisma.SelectSubset<T, EventCheckInFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventCheckInFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventCheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventCheckInFindFirstArgs>(args?: Prisma.SelectSubset<T, EventCheckInFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventCheckInFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventCheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventCheckInFindManyArgs>(args?: Prisma.SelectSubset<T, EventCheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventCheckInCreateArgs>(args: Prisma.SelectSubset<T, EventCheckInCreateArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventCheckInCreateManyArgs>(args?: Prisma.SelectSubset<T, EventCheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EventCheckInCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventCheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EventCheckInDeleteArgs>(args: Prisma.SelectSubset<T, EventCheckInDeleteArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventCheckInUpdateArgs>(args: Prisma.SelectSubset<T, EventCheckInUpdateArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventCheckInDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventCheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventCheckInUpdateManyArgs>(args: Prisma.SelectSubset<T, EventCheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EventCheckInUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventCheckInUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EventCheckInUpsertArgs>(args: Prisma.SelectSubset<T, EventCheckInUpsertArgs<ExtArgs>>): Prisma.Prisma__EventCheckInClient<runtime.Types.Result.GetResult<Prisma.$EventCheckInPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventCheckInCountArgs>(args?: Prisma.Subset<T, EventCheckInCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventCheckInCountAggregateOutputType> : number>;
    aggregate<T extends EventCheckInAggregateArgs>(args: Prisma.Subset<T, EventCheckInAggregateArgs>): Prisma.PrismaPromise<GetEventCheckInAggregateType<T>>;
    groupBy<T extends EventCheckInGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventCheckInGroupByArgs['orderBy'];
    } : {
        orderBy?: EventCheckInGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventCheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventCheckInFieldRefs;
}
export interface Prisma__EventCheckInClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventCheckInFieldRefs {
    readonly id: Prisma.FieldRef<"EventCheckIn", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventCheckIn", 'String'>;
    readonly userId: Prisma.FieldRef<"EventCheckIn", 'String'>;
    readonly latitude: Prisma.FieldRef<"EventCheckIn", 'Float'>;
    readonly longitude: Prisma.FieldRef<"EventCheckIn", 'Float'>;
    readonly distanceM: Prisma.FieldRef<"EventCheckIn", 'Int'>;
    readonly checkedInAt: Prisma.FieldRef<"EventCheckIn", 'DateTime'>;
}
export type EventCheckInFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    where: Prisma.EventCheckInWhereUniqueInput;
};
export type EventCheckInFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    where: Prisma.EventCheckInWhereUniqueInput;
};
export type EventCheckInFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    where?: Prisma.EventCheckInWhereInput;
    orderBy?: Prisma.EventCheckInOrderByWithRelationInput | Prisma.EventCheckInOrderByWithRelationInput[];
    cursor?: Prisma.EventCheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventCheckInScalarFieldEnum | Prisma.EventCheckInScalarFieldEnum[];
};
export type EventCheckInFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    where?: Prisma.EventCheckInWhereInput;
    orderBy?: Prisma.EventCheckInOrderByWithRelationInput | Prisma.EventCheckInOrderByWithRelationInput[];
    cursor?: Prisma.EventCheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventCheckInScalarFieldEnum | Prisma.EventCheckInScalarFieldEnum[];
};
export type EventCheckInFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    where?: Prisma.EventCheckInWhereInput;
    orderBy?: Prisma.EventCheckInOrderByWithRelationInput | Prisma.EventCheckInOrderByWithRelationInput[];
    cursor?: Prisma.EventCheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventCheckInScalarFieldEnum | Prisma.EventCheckInScalarFieldEnum[];
};
export type EventCheckInCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventCheckInCreateInput, Prisma.EventCheckInUncheckedCreateInput>;
};
export type EventCheckInCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventCheckInCreateManyInput | Prisma.EventCheckInCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventCheckInCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    data: Prisma.EventCheckInCreateManyInput | Prisma.EventCheckInCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EventCheckInIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EventCheckInUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventCheckInUpdateInput, Prisma.EventCheckInUncheckedUpdateInput>;
    where: Prisma.EventCheckInWhereUniqueInput;
};
export type EventCheckInUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventCheckInUpdateManyMutationInput, Prisma.EventCheckInUncheckedUpdateManyInput>;
    where?: Prisma.EventCheckInWhereInput;
    limit?: number;
};
export type EventCheckInUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventCheckInUpdateManyMutationInput, Prisma.EventCheckInUncheckedUpdateManyInput>;
    where?: Prisma.EventCheckInWhereInput;
    limit?: number;
    include?: Prisma.EventCheckInIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EventCheckInUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    where: Prisma.EventCheckInWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCheckInCreateInput, Prisma.EventCheckInUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventCheckInUpdateInput, Prisma.EventCheckInUncheckedUpdateInput>;
};
export type EventCheckInDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
    where: Prisma.EventCheckInWhereUniqueInput;
};
export type EventCheckInDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventCheckInWhereInput;
    limit?: number;
};
export type EventCheckInDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCheckInSelect<ExtArgs> | null;
    omit?: Prisma.EventCheckInOmit<ExtArgs> | null;
    include?: Prisma.EventCheckInInclude<ExtArgs> | null;
};
