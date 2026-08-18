import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TravelSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$TravelSessionPayload>;
export type AggregateTravelSession = {
    _count: TravelSessionCountAggregateOutputType | null;
    _avg: TravelSessionAvgAggregateOutputType | null;
    _sum: TravelSessionSumAggregateOutputType | null;
    _min: TravelSessionMinAggregateOutputType | null;
    _max: TravelSessionMaxAggregateOutputType | null;
};
export type TravelSessionAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type TravelSessionSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type TravelSessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    cityId: string | null;
    locationLabel: string | null;
    wasFree: boolean | null;
    startedAt: Date | null;
    endedAt: Date | null;
};
export type TravelSessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    latitude: number | null;
    longitude: number | null;
    cityId: string | null;
    locationLabel: string | null;
    wasFree: boolean | null;
    startedAt: Date | null;
    endedAt: Date | null;
};
export type TravelSessionCountAggregateOutputType = {
    id: number;
    userId: number;
    latitude: number;
    longitude: number;
    cityId: number;
    locationLabel: number;
    wasFree: number;
    startedAt: number;
    endedAt: number;
    _all: number;
};
export type TravelSessionAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type TravelSessionSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type TravelSessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    cityId?: true;
    locationLabel?: true;
    wasFree?: true;
    startedAt?: true;
    endedAt?: true;
};
export type TravelSessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    cityId?: true;
    locationLabel?: true;
    wasFree?: true;
    startedAt?: true;
    endedAt?: true;
};
export type TravelSessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    latitude?: true;
    longitude?: true;
    cityId?: true;
    locationLabel?: true;
    wasFree?: true;
    startedAt?: true;
    endedAt?: true;
    _all?: true;
};
export type TravelSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TravelSessionWhereInput;
    orderBy?: Prisma.TravelSessionOrderByWithRelationInput | Prisma.TravelSessionOrderByWithRelationInput[];
    cursor?: Prisma.TravelSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TravelSessionCountAggregateInputType;
    _avg?: TravelSessionAvgAggregateInputType;
    _sum?: TravelSessionSumAggregateInputType;
    _min?: TravelSessionMinAggregateInputType;
    _max?: TravelSessionMaxAggregateInputType;
};
export type GetTravelSessionAggregateType<T extends TravelSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateTravelSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTravelSession[P]> : Prisma.GetScalarType<T[P], AggregateTravelSession[P]>;
};
export type TravelSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TravelSessionWhereInput;
    orderBy?: Prisma.TravelSessionOrderByWithAggregationInput | Prisma.TravelSessionOrderByWithAggregationInput[];
    by: Prisma.TravelSessionScalarFieldEnum[] | Prisma.TravelSessionScalarFieldEnum;
    having?: Prisma.TravelSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TravelSessionCountAggregateInputType | true;
    _avg?: TravelSessionAvgAggregateInputType;
    _sum?: TravelSessionSumAggregateInputType;
    _min?: TravelSessionMinAggregateInputType;
    _max?: TravelSessionMaxAggregateInputType;
};
export type TravelSessionGroupByOutputType = {
    id: string;
    userId: string;
    latitude: number;
    longitude: number;
    cityId: string | null;
    locationLabel: string;
    wasFree: boolean;
    startedAt: Date;
    endedAt: Date | null;
    _count: TravelSessionCountAggregateOutputType | null;
    _avg: TravelSessionAvgAggregateOutputType | null;
    _sum: TravelSessionSumAggregateOutputType | null;
    _min: TravelSessionMinAggregateOutputType | null;
    _max: TravelSessionMaxAggregateOutputType | null;
};
export type GetTravelSessionGroupByPayload<T extends TravelSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TravelSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TravelSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TravelSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TravelSessionGroupByOutputType[P]>;
}>>;
export type TravelSessionWhereInput = {
    AND?: Prisma.TravelSessionWhereInput | Prisma.TravelSessionWhereInput[];
    OR?: Prisma.TravelSessionWhereInput[];
    NOT?: Prisma.TravelSessionWhereInput | Prisma.TravelSessionWhereInput[];
    id?: Prisma.UuidFilter<"TravelSession"> | string;
    userId?: Prisma.UuidFilter<"TravelSession"> | string;
    latitude?: Prisma.FloatFilter<"TravelSession"> | number;
    longitude?: Prisma.FloatFilter<"TravelSession"> | number;
    cityId?: Prisma.UuidNullableFilter<"TravelSession"> | string | null;
    locationLabel?: Prisma.StringFilter<"TravelSession"> | string;
    wasFree?: Prisma.BoolFilter<"TravelSession"> | boolean;
    startedAt?: Prisma.DateTimeFilter<"TravelSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"TravelSession"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    city?: Prisma.XOR<Prisma.CityNullableScalarRelationFilter, Prisma.CityWhereInput> | null;
};
export type TravelSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    cityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationLabel?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    city?: Prisma.CityOrderByWithRelationInput;
};
export type TravelSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TravelSessionWhereInput | Prisma.TravelSessionWhereInput[];
    OR?: Prisma.TravelSessionWhereInput[];
    NOT?: Prisma.TravelSessionWhereInput | Prisma.TravelSessionWhereInput[];
    userId?: Prisma.UuidFilter<"TravelSession"> | string;
    latitude?: Prisma.FloatFilter<"TravelSession"> | number;
    longitude?: Prisma.FloatFilter<"TravelSession"> | number;
    cityId?: Prisma.UuidNullableFilter<"TravelSession"> | string | null;
    locationLabel?: Prisma.StringFilter<"TravelSession"> | string;
    wasFree?: Prisma.BoolFilter<"TravelSession"> | boolean;
    startedAt?: Prisma.DateTimeFilter<"TravelSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"TravelSession"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    city?: Prisma.XOR<Prisma.CityNullableScalarRelationFilter, Prisma.CityWhereInput> | null;
}, "id">;
export type TravelSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    cityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationLabel?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TravelSessionCountOrderByAggregateInput;
    _avg?: Prisma.TravelSessionAvgOrderByAggregateInput;
    _max?: Prisma.TravelSessionMaxOrderByAggregateInput;
    _min?: Prisma.TravelSessionMinOrderByAggregateInput;
    _sum?: Prisma.TravelSessionSumOrderByAggregateInput;
};
export type TravelSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TravelSessionScalarWhereWithAggregatesInput | Prisma.TravelSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TravelSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TravelSessionScalarWhereWithAggregatesInput | Prisma.TravelSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TravelSession"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"TravelSession"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"TravelSession"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"TravelSession"> | number;
    cityId?: Prisma.UuidNullableWithAggregatesFilter<"TravelSession"> | string | null;
    locationLabel?: Prisma.StringWithAggregatesFilter<"TravelSession"> | string;
    wasFree?: Prisma.BoolWithAggregatesFilter<"TravelSession"> | boolean;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"TravelSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TravelSession"> | Date | string | null;
};
export type TravelSessionCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutTravelSessionsInput;
    city?: Prisma.CityCreateNestedOneWithoutTravelSessionsInput;
};
export type TravelSessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    cityId?: string | null;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type TravelSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTravelSessionsNestedInput;
    city?: Prisma.CityUpdateOneWithoutTravelSessionsNestedInput;
};
export type TravelSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    cityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TravelSessionCreateManyInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    cityId?: string | null;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type TravelSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TravelSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    cityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TravelSessionListRelationFilter = {
    every?: Prisma.TravelSessionWhereInput;
    some?: Prisma.TravelSessionWhereInput;
    none?: Prisma.TravelSessionWhereInput;
};
export type TravelSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TravelSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    locationLabel?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
};
export type TravelSessionAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type TravelSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    locationLabel?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
};
export type TravelSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    cityId?: Prisma.SortOrder;
    locationLabel?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
};
export type TravelSessionSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type TravelSessionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutUserInput, Prisma.TravelSessionUncheckedCreateWithoutUserInput> | Prisma.TravelSessionCreateWithoutUserInput[] | Prisma.TravelSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutUserInput | Prisma.TravelSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TravelSessionCreateManyUserInputEnvelope;
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
};
export type TravelSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutUserInput, Prisma.TravelSessionUncheckedCreateWithoutUserInput> | Prisma.TravelSessionCreateWithoutUserInput[] | Prisma.TravelSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutUserInput | Prisma.TravelSessionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TravelSessionCreateManyUserInputEnvelope;
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
};
export type TravelSessionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutUserInput, Prisma.TravelSessionUncheckedCreateWithoutUserInput> | Prisma.TravelSessionCreateWithoutUserInput[] | Prisma.TravelSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutUserInput | Prisma.TravelSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TravelSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.TravelSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TravelSessionCreateManyUserInputEnvelope;
    set?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    disconnect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    delete?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    update?: Prisma.TravelSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.TravelSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TravelSessionUpdateManyWithWhereWithoutUserInput | Prisma.TravelSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TravelSessionScalarWhereInput | Prisma.TravelSessionScalarWhereInput[];
};
export type TravelSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutUserInput, Prisma.TravelSessionUncheckedCreateWithoutUserInput> | Prisma.TravelSessionCreateWithoutUserInput[] | Prisma.TravelSessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutUserInput | Prisma.TravelSessionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TravelSessionUpsertWithWhereUniqueWithoutUserInput | Prisma.TravelSessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TravelSessionCreateManyUserInputEnvelope;
    set?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    disconnect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    delete?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    update?: Prisma.TravelSessionUpdateWithWhereUniqueWithoutUserInput | Prisma.TravelSessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TravelSessionUpdateManyWithWhereWithoutUserInput | Prisma.TravelSessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TravelSessionScalarWhereInput | Prisma.TravelSessionScalarWhereInput[];
};
export type TravelSessionCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutCityInput, Prisma.TravelSessionUncheckedCreateWithoutCityInput> | Prisma.TravelSessionCreateWithoutCityInput[] | Prisma.TravelSessionUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutCityInput | Prisma.TravelSessionCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.TravelSessionCreateManyCityInputEnvelope;
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
};
export type TravelSessionUncheckedCreateNestedManyWithoutCityInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutCityInput, Prisma.TravelSessionUncheckedCreateWithoutCityInput> | Prisma.TravelSessionCreateWithoutCityInput[] | Prisma.TravelSessionUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutCityInput | Prisma.TravelSessionCreateOrConnectWithoutCityInput[];
    createMany?: Prisma.TravelSessionCreateManyCityInputEnvelope;
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
};
export type TravelSessionUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutCityInput, Prisma.TravelSessionUncheckedCreateWithoutCityInput> | Prisma.TravelSessionCreateWithoutCityInput[] | Prisma.TravelSessionUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutCityInput | Prisma.TravelSessionCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.TravelSessionUpsertWithWhereUniqueWithoutCityInput | Prisma.TravelSessionUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.TravelSessionCreateManyCityInputEnvelope;
    set?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    disconnect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    delete?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    update?: Prisma.TravelSessionUpdateWithWhereUniqueWithoutCityInput | Prisma.TravelSessionUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.TravelSessionUpdateManyWithWhereWithoutCityInput | Prisma.TravelSessionUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.TravelSessionScalarWhereInput | Prisma.TravelSessionScalarWhereInput[];
};
export type TravelSessionUncheckedUpdateManyWithoutCityNestedInput = {
    create?: Prisma.XOR<Prisma.TravelSessionCreateWithoutCityInput, Prisma.TravelSessionUncheckedCreateWithoutCityInput> | Prisma.TravelSessionCreateWithoutCityInput[] | Prisma.TravelSessionUncheckedCreateWithoutCityInput[];
    connectOrCreate?: Prisma.TravelSessionCreateOrConnectWithoutCityInput | Prisma.TravelSessionCreateOrConnectWithoutCityInput[];
    upsert?: Prisma.TravelSessionUpsertWithWhereUniqueWithoutCityInput | Prisma.TravelSessionUpsertWithWhereUniqueWithoutCityInput[];
    createMany?: Prisma.TravelSessionCreateManyCityInputEnvelope;
    set?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    disconnect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    delete?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    connect?: Prisma.TravelSessionWhereUniqueInput | Prisma.TravelSessionWhereUniqueInput[];
    update?: Prisma.TravelSessionUpdateWithWhereUniqueWithoutCityInput | Prisma.TravelSessionUpdateWithWhereUniqueWithoutCityInput[];
    updateMany?: Prisma.TravelSessionUpdateManyWithWhereWithoutCityInput | Prisma.TravelSessionUpdateManyWithWhereWithoutCityInput[];
    deleteMany?: Prisma.TravelSessionScalarWhereInput | Prisma.TravelSessionScalarWhereInput[];
};
export type TravelSessionCreateWithoutUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    city?: Prisma.CityCreateNestedOneWithoutTravelSessionsInput;
};
export type TravelSessionUncheckedCreateWithoutUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    cityId?: string | null;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type TravelSessionCreateOrConnectWithoutUserInput = {
    where: Prisma.TravelSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TravelSessionCreateWithoutUserInput, Prisma.TravelSessionUncheckedCreateWithoutUserInput>;
};
export type TravelSessionCreateManyUserInputEnvelope = {
    data: Prisma.TravelSessionCreateManyUserInput | Prisma.TravelSessionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TravelSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TravelSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TravelSessionUpdateWithoutUserInput, Prisma.TravelSessionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TravelSessionCreateWithoutUserInput, Prisma.TravelSessionUncheckedCreateWithoutUserInput>;
};
export type TravelSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TravelSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TravelSessionUpdateWithoutUserInput, Prisma.TravelSessionUncheckedUpdateWithoutUserInput>;
};
export type TravelSessionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TravelSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.TravelSessionUpdateManyMutationInput, Prisma.TravelSessionUncheckedUpdateManyWithoutUserInput>;
};
export type TravelSessionScalarWhereInput = {
    AND?: Prisma.TravelSessionScalarWhereInput | Prisma.TravelSessionScalarWhereInput[];
    OR?: Prisma.TravelSessionScalarWhereInput[];
    NOT?: Prisma.TravelSessionScalarWhereInput | Prisma.TravelSessionScalarWhereInput[];
    id?: Prisma.UuidFilter<"TravelSession"> | string;
    userId?: Prisma.UuidFilter<"TravelSession"> | string;
    latitude?: Prisma.FloatFilter<"TravelSession"> | number;
    longitude?: Prisma.FloatFilter<"TravelSession"> | number;
    cityId?: Prisma.UuidNullableFilter<"TravelSession"> | string | null;
    locationLabel?: Prisma.StringFilter<"TravelSession"> | string;
    wasFree?: Prisma.BoolFilter<"TravelSession"> | boolean;
    startedAt?: Prisma.DateTimeFilter<"TravelSession"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"TravelSession"> | Date | string | null;
};
export type TravelSessionCreateWithoutCityInput = {
    id?: string;
    latitude: number;
    longitude: number;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutTravelSessionsInput;
};
export type TravelSessionUncheckedCreateWithoutCityInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type TravelSessionCreateOrConnectWithoutCityInput = {
    where: Prisma.TravelSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TravelSessionCreateWithoutCityInput, Prisma.TravelSessionUncheckedCreateWithoutCityInput>;
};
export type TravelSessionCreateManyCityInputEnvelope = {
    data: Prisma.TravelSessionCreateManyCityInput | Prisma.TravelSessionCreateManyCityInput[];
    skipDuplicates?: boolean;
};
export type TravelSessionUpsertWithWhereUniqueWithoutCityInput = {
    where: Prisma.TravelSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TravelSessionUpdateWithoutCityInput, Prisma.TravelSessionUncheckedUpdateWithoutCityInput>;
    create: Prisma.XOR<Prisma.TravelSessionCreateWithoutCityInput, Prisma.TravelSessionUncheckedCreateWithoutCityInput>;
};
export type TravelSessionUpdateWithWhereUniqueWithoutCityInput = {
    where: Prisma.TravelSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TravelSessionUpdateWithoutCityInput, Prisma.TravelSessionUncheckedUpdateWithoutCityInput>;
};
export type TravelSessionUpdateManyWithWhereWithoutCityInput = {
    where: Prisma.TravelSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.TravelSessionUpdateManyMutationInput, Prisma.TravelSessionUncheckedUpdateManyWithoutCityInput>;
};
export type TravelSessionCreateManyUserInput = {
    id?: string;
    latitude: number;
    longitude: number;
    cityId?: string | null;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type TravelSessionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    city?: Prisma.CityUpdateOneWithoutTravelSessionsNestedInput;
};
export type TravelSessionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    cityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TravelSessionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    cityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TravelSessionCreateManyCityInput = {
    id?: string;
    userId: string;
    latitude: number;
    longitude: number;
    locationLabel: string;
    wasFree?: boolean;
    startedAt?: Date | string;
    endedAt?: Date | string | null;
};
export type TravelSessionUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTravelSessionsNestedInput;
};
export type TravelSessionUncheckedUpdateWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TravelSessionUncheckedUpdateManyWithoutCityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    locationLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TravelSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    cityId?: boolean;
    locationLabel?: boolean;
    wasFree?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.TravelSession$cityArgs<ExtArgs>;
}, ExtArgs["result"]["travelSession"]>;
export type TravelSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    cityId?: boolean;
    locationLabel?: boolean;
    wasFree?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.TravelSession$cityArgs<ExtArgs>;
}, ExtArgs["result"]["travelSession"]>;
export type TravelSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    cityId?: boolean;
    locationLabel?: boolean;
    wasFree?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.TravelSession$cityArgs<ExtArgs>;
}, ExtArgs["result"]["travelSession"]>;
export type TravelSessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    cityId?: boolean;
    locationLabel?: boolean;
    wasFree?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
};
export type TravelSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "latitude" | "longitude" | "cityId" | "locationLabel" | "wasFree" | "startedAt" | "endedAt", ExtArgs["result"]["travelSession"]>;
export type TravelSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.TravelSession$cityArgs<ExtArgs>;
};
export type TravelSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.TravelSession$cityArgs<ExtArgs>;
};
export type TravelSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    city?: boolean | Prisma.TravelSession$cityArgs<ExtArgs>;
};
export type $TravelSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TravelSession";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        city: Prisma.$CityPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        latitude: number;
        longitude: number;
        cityId: string | null;
        locationLabel: string;
        wasFree: boolean;
        startedAt: Date;
        endedAt: Date | null;
    }, ExtArgs["result"]["travelSession"]>;
    composites: {};
};
export type TravelSessionGetPayload<S extends boolean | null | undefined | TravelSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload, S>;
export type TravelSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TravelSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TravelSessionCountAggregateInputType | true;
};
export interface TravelSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TravelSession'];
        meta: {
            name: 'TravelSession';
        };
    };
    findUnique<T extends TravelSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, TravelSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TravelSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TravelSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TravelSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, TravelSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TravelSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TravelSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TravelSessionFindManyArgs>(args?: Prisma.SelectSubset<T, TravelSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TravelSessionCreateArgs>(args: Prisma.SelectSubset<T, TravelSessionCreateArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TravelSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, TravelSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TravelSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TravelSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TravelSessionDeleteArgs>(args: Prisma.SelectSubset<T, TravelSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TravelSessionUpdateArgs>(args: Prisma.SelectSubset<T, TravelSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TravelSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TravelSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TravelSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, TravelSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TravelSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TravelSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TravelSessionUpsertArgs>(args: Prisma.SelectSubset<T, TravelSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__TravelSessionClient<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TravelSessionCountArgs>(args?: Prisma.Subset<T, TravelSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TravelSessionCountAggregateOutputType> : number>;
    aggregate<T extends TravelSessionAggregateArgs>(args: Prisma.Subset<T, TravelSessionAggregateArgs>): Prisma.PrismaPromise<GetTravelSessionAggregateType<T>>;
    groupBy<T extends TravelSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TravelSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: TravelSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TravelSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TravelSessionFieldRefs;
}
export interface Prisma__TravelSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    city<T extends Prisma.TravelSession$cityArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TravelSession$cityArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TravelSessionFieldRefs {
    readonly id: Prisma.FieldRef<"TravelSession", 'String'>;
    readonly userId: Prisma.FieldRef<"TravelSession", 'String'>;
    readonly latitude: Prisma.FieldRef<"TravelSession", 'Float'>;
    readonly longitude: Prisma.FieldRef<"TravelSession", 'Float'>;
    readonly cityId: Prisma.FieldRef<"TravelSession", 'String'>;
    readonly locationLabel: Prisma.FieldRef<"TravelSession", 'String'>;
    readonly wasFree: Prisma.FieldRef<"TravelSession", 'Boolean'>;
    readonly startedAt: Prisma.FieldRef<"TravelSession", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"TravelSession", 'DateTime'>;
}
export type TravelSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    where: Prisma.TravelSessionWhereUniqueInput;
};
export type TravelSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    where: Prisma.TravelSessionWhereUniqueInput;
};
export type TravelSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    where?: Prisma.TravelSessionWhereInput;
    orderBy?: Prisma.TravelSessionOrderByWithRelationInput | Prisma.TravelSessionOrderByWithRelationInput[];
    cursor?: Prisma.TravelSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TravelSessionScalarFieldEnum | Prisma.TravelSessionScalarFieldEnum[];
};
export type TravelSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    where?: Prisma.TravelSessionWhereInput;
    orderBy?: Prisma.TravelSessionOrderByWithRelationInput | Prisma.TravelSessionOrderByWithRelationInput[];
    cursor?: Prisma.TravelSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TravelSessionScalarFieldEnum | Prisma.TravelSessionScalarFieldEnum[];
};
export type TravelSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    where?: Prisma.TravelSessionWhereInput;
    orderBy?: Prisma.TravelSessionOrderByWithRelationInput | Prisma.TravelSessionOrderByWithRelationInput[];
    cursor?: Prisma.TravelSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TravelSessionScalarFieldEnum | Prisma.TravelSessionScalarFieldEnum[];
};
export type TravelSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TravelSessionCreateInput, Prisma.TravelSessionUncheckedCreateInput>;
};
export type TravelSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TravelSessionCreateManyInput | Prisma.TravelSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TravelSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    data: Prisma.TravelSessionCreateManyInput | Prisma.TravelSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TravelSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TravelSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TravelSessionUpdateInput, Prisma.TravelSessionUncheckedUpdateInput>;
    where: Prisma.TravelSessionWhereUniqueInput;
};
export type TravelSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TravelSessionUpdateManyMutationInput, Prisma.TravelSessionUncheckedUpdateManyInput>;
    where?: Prisma.TravelSessionWhereInput;
    limit?: number;
};
export type TravelSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TravelSessionUpdateManyMutationInput, Prisma.TravelSessionUncheckedUpdateManyInput>;
    where?: Prisma.TravelSessionWhereInput;
    limit?: number;
    include?: Prisma.TravelSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TravelSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    where: Prisma.TravelSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TravelSessionCreateInput, Prisma.TravelSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TravelSessionUpdateInput, Prisma.TravelSessionUncheckedUpdateInput>;
};
export type TravelSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
    where: Prisma.TravelSessionWhereUniqueInput;
};
export type TravelSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TravelSessionWhereInput;
    limit?: number;
};
export type TravelSession$cityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where?: Prisma.CityWhereInput;
};
export type TravelSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TravelSessionSelect<ExtArgs> | null;
    omit?: Prisma.TravelSessionOmit<ExtArgs> | null;
    include?: Prisma.TravelSessionInclude<ExtArgs> | null;
};
