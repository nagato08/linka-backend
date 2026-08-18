import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CityModel = runtime.Types.Result.DefaultSelection<Prisma.$CityPayload>;
export type AggregateCity = {
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
};
export type CityAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    radiusKm: number | null;
    activeUserCount: number | null;
    boostSlots: number | null;
};
export type CitySumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    radiusKm: number | null;
    activeUserCount: number | null;
    boostSlots: number | null;
};
export type CityMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    region: string | null;
    country: string | null;
    latitude: number | null;
    longitude: number | null;
    radiusKm: number | null;
    activeUserCount: number | null;
    boostSlots: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CityMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    region: string | null;
    country: string | null;
    latitude: number | null;
    longitude: number | null;
    radiusKm: number | null;
    activeUserCount: number | null;
    boostSlots: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CityCountAggregateOutputType = {
    id: number;
    name: number;
    region: number;
    country: number;
    latitude: number;
    longitude: number;
    radiusKm: number;
    activeUserCount: number;
    boostSlots: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CityAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    radiusKm?: true;
    activeUserCount?: true;
    boostSlots?: true;
};
export type CitySumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    radiusKm?: true;
    activeUserCount?: true;
    boostSlots?: true;
};
export type CityMinAggregateInputType = {
    id?: true;
    name?: true;
    region?: true;
    country?: true;
    latitude?: true;
    longitude?: true;
    radiusKm?: true;
    activeUserCount?: true;
    boostSlots?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CityMaxAggregateInputType = {
    id?: true;
    name?: true;
    region?: true;
    country?: true;
    latitude?: true;
    longitude?: true;
    radiusKm?: true;
    activeUserCount?: true;
    boostSlots?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CityCountAggregateInputType = {
    id?: true;
    name?: true;
    region?: true;
    country?: true;
    latitude?: true;
    longitude?: true;
    radiusKm?: true;
    activeUserCount?: true;
    boostSlots?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput | Prisma.CityOrderByWithRelationInput[];
    cursor?: Prisma.CityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CityCountAggregateInputType;
    _avg?: CityAvgAggregateInputType;
    _sum?: CitySumAggregateInputType;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
};
export type GetCityAggregateType<T extends CityAggregateArgs> = {
    [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCity[P]> : Prisma.GetScalarType<T[P], AggregateCity[P]>;
};
export type CityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithAggregationInput | Prisma.CityOrderByWithAggregationInput[];
    by: Prisma.CityScalarFieldEnum[] | Prisma.CityScalarFieldEnum;
    having?: Prisma.CityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CityCountAggregateInputType | true;
    _avg?: CityAvgAggregateInputType;
    _sum?: CitySumAggregateInputType;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
};
export type CityGroupByOutputType = {
    id: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm: number;
    activeUserCount: number;
    boostSlots: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
};
export type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CityGroupByOutputType[P]>;
}>>;
export type CityWhereInput = {
    AND?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    OR?: Prisma.CityWhereInput[];
    NOT?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    id?: Prisma.UuidFilter<"City"> | string;
    name?: Prisma.StringFilter<"City"> | string;
    region?: Prisma.StringFilter<"City"> | string;
    country?: Prisma.StringFilter<"City"> | string;
    latitude?: Prisma.FloatFilter<"City"> | number;
    longitude?: Prisma.FloatFilter<"City"> | number;
    radiusKm?: Prisma.IntFilter<"City"> | number;
    activeUserCount?: Prisma.IntFilter<"City"> | number;
    boostSlots?: Prisma.IntFilter<"City"> | number;
    isActive?: Prisma.BoolFilter<"City"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    profiles?: Prisma.ProfileListRelationFilter;
    boosts?: Prisma.BoostListRelationFilter;
    events?: Prisma.EventListRelationFilter;
    travelSessions?: Prisma.TravelSessionListRelationFilter;
};
export type CityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    radiusKm?: Prisma.SortOrder;
    activeUserCount?: Prisma.SortOrder;
    boostSlots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profiles?: Prisma.ProfileOrderByRelationAggregateInput;
    boosts?: Prisma.BoostOrderByRelationAggregateInput;
    events?: Prisma.EventOrderByRelationAggregateInput;
    travelSessions?: Prisma.TravelSessionOrderByRelationAggregateInput;
};
export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    country_region_name?: Prisma.CityCountryRegionNameCompoundUniqueInput;
    AND?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    OR?: Prisma.CityWhereInput[];
    NOT?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    name?: Prisma.StringFilter<"City"> | string;
    region?: Prisma.StringFilter<"City"> | string;
    country?: Prisma.StringFilter<"City"> | string;
    latitude?: Prisma.FloatFilter<"City"> | number;
    longitude?: Prisma.FloatFilter<"City"> | number;
    radiusKm?: Prisma.IntFilter<"City"> | number;
    activeUserCount?: Prisma.IntFilter<"City"> | number;
    boostSlots?: Prisma.IntFilter<"City"> | number;
    isActive?: Prisma.BoolFilter<"City"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    profiles?: Prisma.ProfileListRelationFilter;
    boosts?: Prisma.BoostListRelationFilter;
    events?: Prisma.EventListRelationFilter;
    travelSessions?: Prisma.TravelSessionListRelationFilter;
}, "id" | "country_region_name">;
export type CityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    radiusKm?: Prisma.SortOrder;
    activeUserCount?: Prisma.SortOrder;
    boostSlots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CityCountOrderByAggregateInput;
    _avg?: Prisma.CityAvgOrderByAggregateInput;
    _max?: Prisma.CityMaxOrderByAggregateInput;
    _min?: Prisma.CityMinOrderByAggregateInput;
    _sum?: Prisma.CitySumOrderByAggregateInput;
};
export type CityScalarWhereWithAggregatesInput = {
    AND?: Prisma.CityScalarWhereWithAggregatesInput | Prisma.CityScalarWhereWithAggregatesInput[];
    OR?: Prisma.CityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CityScalarWhereWithAggregatesInput | Prisma.CityScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"City"> | string;
    name?: Prisma.StringWithAggregatesFilter<"City"> | string;
    region?: Prisma.StringWithAggregatesFilter<"City"> | string;
    country?: Prisma.StringWithAggregatesFilter<"City"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"City"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"City"> | number;
    radiusKm?: Prisma.IntWithAggregatesFilter<"City"> | number;
    activeUserCount?: Prisma.IntWithAggregatesFilter<"City"> | number;
    boostSlots?: Prisma.IntWithAggregatesFilter<"City"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"City"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"City"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"City"> | Date | string;
};
export type CityCreateInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileCreateNestedManyWithoutCityInput;
    boosts?: Prisma.BoostCreateNestedManyWithoutCityInput;
    events?: Prisma.EventCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionCreateNestedManyWithoutCityInput;
};
export type CityUncheckedCreateInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutCityInput;
    boosts?: Prisma.BoostUncheckedCreateNestedManyWithoutCityInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionUncheckedCreateNestedManyWithoutCityInput;
};
export type CityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUpdateManyWithoutCityNestedInput;
    boosts?: Prisma.BoostUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUncheckedUpdateManyWithoutCityNestedInput;
    boosts?: Prisma.BoostUncheckedUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUncheckedUpdateManyWithoutCityNestedInput;
};
export type CityCreateManyInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityNullableScalarRelationFilter = {
    is?: Prisma.CityWhereInput | null;
    isNot?: Prisma.CityWhereInput | null;
};
export type CityCountryRegionNameCompoundUniqueInput = {
    country: string;
    region: string;
    name: string;
};
export type CityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    radiusKm?: Prisma.SortOrder;
    activeUserCount?: Prisma.SortOrder;
    boostSlots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CityAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    radiusKm?: Prisma.SortOrder;
    activeUserCount?: Prisma.SortOrder;
    boostSlots?: Prisma.SortOrder;
};
export type CityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    radiusKm?: Prisma.SortOrder;
    activeUserCount?: Prisma.SortOrder;
    boostSlots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    radiusKm?: Prisma.SortOrder;
    activeUserCount?: Prisma.SortOrder;
    boostSlots?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CitySumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    radiusKm?: Prisma.SortOrder;
    activeUserCount?: Prisma.SortOrder;
    boostSlots?: Prisma.SortOrder;
};
export type CityCreateNestedOneWithoutBoostsInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutBoostsInput, Prisma.CityUncheckedCreateWithoutBoostsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutBoostsInput;
    connect?: Prisma.CityWhereUniqueInput;
};
export type CityUpdateOneWithoutBoostsNestedInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutBoostsInput, Prisma.CityUncheckedCreateWithoutBoostsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutBoostsInput;
    upsert?: Prisma.CityUpsertWithoutBoostsInput;
    disconnect?: Prisma.CityWhereInput | boolean;
    delete?: Prisma.CityWhereInput | boolean;
    connect?: Prisma.CityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CityUpdateToOneWithWhereWithoutBoostsInput, Prisma.CityUpdateWithoutBoostsInput>, Prisma.CityUncheckedUpdateWithoutBoostsInput>;
};
export type CityCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutEventsInput, Prisma.CityUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutEventsInput;
    connect?: Prisma.CityWhereUniqueInput;
};
export type CityUpdateOneWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutEventsInput, Prisma.CityUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.CityUpsertWithoutEventsInput;
    disconnect?: Prisma.CityWhereInput | boolean;
    delete?: Prisma.CityWhereInput | boolean;
    connect?: Prisma.CityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CityUpdateToOneWithWhereWithoutEventsInput, Prisma.CityUpdateWithoutEventsInput>, Prisma.CityUncheckedUpdateWithoutEventsInput>;
};
export type CityCreateNestedOneWithoutProfilesInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutProfilesInput, Prisma.CityUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutProfilesInput;
    connect?: Prisma.CityWhereUniqueInput;
};
export type CityUpdateOneWithoutProfilesNestedInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutProfilesInput, Prisma.CityUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutProfilesInput;
    upsert?: Prisma.CityUpsertWithoutProfilesInput;
    disconnect?: Prisma.CityWhereInput | boolean;
    delete?: Prisma.CityWhereInput | boolean;
    connect?: Prisma.CityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CityUpdateToOneWithWhereWithoutProfilesInput, Prisma.CityUpdateWithoutProfilesInput>, Prisma.CityUncheckedUpdateWithoutProfilesInput>;
};
export type CityCreateNestedOneWithoutTravelSessionsInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutTravelSessionsInput, Prisma.CityUncheckedCreateWithoutTravelSessionsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutTravelSessionsInput;
    connect?: Prisma.CityWhereUniqueInput;
};
export type CityUpdateOneWithoutTravelSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutTravelSessionsInput, Prisma.CityUncheckedCreateWithoutTravelSessionsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutTravelSessionsInput;
    upsert?: Prisma.CityUpsertWithoutTravelSessionsInput;
    disconnect?: Prisma.CityWhereInput | boolean;
    delete?: Prisma.CityWhereInput | boolean;
    connect?: Prisma.CityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CityUpdateToOneWithWhereWithoutTravelSessionsInput, Prisma.CityUpdateWithoutTravelSessionsInput>, Prisma.CityUncheckedUpdateWithoutTravelSessionsInput>;
};
export type CityCreateWithoutBoostsInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileCreateNestedManyWithoutCityInput;
    events?: Prisma.EventCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionCreateNestedManyWithoutCityInput;
};
export type CityUncheckedCreateWithoutBoostsInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutCityInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionUncheckedCreateNestedManyWithoutCityInput;
};
export type CityCreateOrConnectWithoutBoostsInput = {
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateWithoutBoostsInput, Prisma.CityUncheckedCreateWithoutBoostsInput>;
};
export type CityUpsertWithoutBoostsInput = {
    update: Prisma.XOR<Prisma.CityUpdateWithoutBoostsInput, Prisma.CityUncheckedUpdateWithoutBoostsInput>;
    create: Prisma.XOR<Prisma.CityCreateWithoutBoostsInput, Prisma.CityUncheckedCreateWithoutBoostsInput>;
    where?: Prisma.CityWhereInput;
};
export type CityUpdateToOneWithWhereWithoutBoostsInput = {
    where?: Prisma.CityWhereInput;
    data: Prisma.XOR<Prisma.CityUpdateWithoutBoostsInput, Prisma.CityUncheckedUpdateWithoutBoostsInput>;
};
export type CityUpdateWithoutBoostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateWithoutBoostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUncheckedUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUncheckedUpdateManyWithoutCityNestedInput;
};
export type CityCreateWithoutEventsInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileCreateNestedManyWithoutCityInput;
    boosts?: Prisma.BoostCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionCreateNestedManyWithoutCityInput;
};
export type CityUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutCityInput;
    boosts?: Prisma.BoostUncheckedCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionUncheckedCreateNestedManyWithoutCityInput;
};
export type CityCreateOrConnectWithoutEventsInput = {
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateWithoutEventsInput, Prisma.CityUncheckedCreateWithoutEventsInput>;
};
export type CityUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.CityUpdateWithoutEventsInput, Prisma.CityUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.CityCreateWithoutEventsInput, Prisma.CityUncheckedCreateWithoutEventsInput>;
    where?: Prisma.CityWhereInput;
};
export type CityUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.CityWhereInput;
    data: Prisma.XOR<Prisma.CityUpdateWithoutEventsInput, Prisma.CityUncheckedUpdateWithoutEventsInput>;
};
export type CityUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUpdateManyWithoutCityNestedInput;
    boosts?: Prisma.BoostUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUncheckedUpdateManyWithoutCityNestedInput;
    boosts?: Prisma.BoostUncheckedUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUncheckedUpdateManyWithoutCityNestedInput;
};
export type CityCreateWithoutProfilesInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boosts?: Prisma.BoostCreateNestedManyWithoutCityInput;
    events?: Prisma.EventCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionCreateNestedManyWithoutCityInput;
};
export type CityUncheckedCreateWithoutProfilesInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boosts?: Prisma.BoostUncheckedCreateNestedManyWithoutCityInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCityInput;
    travelSessions?: Prisma.TravelSessionUncheckedCreateNestedManyWithoutCityInput;
};
export type CityCreateOrConnectWithoutProfilesInput = {
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateWithoutProfilesInput, Prisma.CityUncheckedCreateWithoutProfilesInput>;
};
export type CityUpsertWithoutProfilesInput = {
    update: Prisma.XOR<Prisma.CityUpdateWithoutProfilesInput, Prisma.CityUncheckedUpdateWithoutProfilesInput>;
    create: Prisma.XOR<Prisma.CityCreateWithoutProfilesInput, Prisma.CityUncheckedCreateWithoutProfilesInput>;
    where?: Prisma.CityWhereInput;
};
export type CityUpdateToOneWithWhereWithoutProfilesInput = {
    where?: Prisma.CityWhereInput;
    data: Prisma.XOR<Prisma.CityUpdateWithoutProfilesInput, Prisma.CityUncheckedUpdateWithoutProfilesInput>;
};
export type CityUpdateWithoutProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boosts?: Prisma.BoostUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateWithoutProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boosts?: Prisma.BoostUncheckedUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCityNestedInput;
    travelSessions?: Prisma.TravelSessionUncheckedUpdateManyWithoutCityNestedInput;
};
export type CityCreateWithoutTravelSessionsInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileCreateNestedManyWithoutCityInput;
    boosts?: Prisma.BoostCreateNestedManyWithoutCityInput;
    events?: Prisma.EventCreateNestedManyWithoutCityInput;
};
export type CityUncheckedCreateWithoutTravelSessionsInput = {
    id?: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    radiusKm?: number;
    activeUserCount?: number;
    boostSlots?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutCityInput;
    boosts?: Prisma.BoostUncheckedCreateNestedManyWithoutCityInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCityInput;
};
export type CityCreateOrConnectWithoutTravelSessionsInput = {
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateWithoutTravelSessionsInput, Prisma.CityUncheckedCreateWithoutTravelSessionsInput>;
};
export type CityUpsertWithoutTravelSessionsInput = {
    update: Prisma.XOR<Prisma.CityUpdateWithoutTravelSessionsInput, Prisma.CityUncheckedUpdateWithoutTravelSessionsInput>;
    create: Prisma.XOR<Prisma.CityCreateWithoutTravelSessionsInput, Prisma.CityUncheckedCreateWithoutTravelSessionsInput>;
    where?: Prisma.CityWhereInput;
};
export type CityUpdateToOneWithWhereWithoutTravelSessionsInput = {
    where?: Prisma.CityWhereInput;
    data: Prisma.XOR<Prisma.CityUpdateWithoutTravelSessionsInput, Prisma.CityUncheckedUpdateWithoutTravelSessionsInput>;
};
export type CityUpdateWithoutTravelSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUpdateManyWithoutCityNestedInput;
    boosts?: Prisma.BoostUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateWithoutTravelSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusKm?: Prisma.IntFieldUpdateOperationsInput | number;
    activeUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    boostSlots?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.ProfileUncheckedUpdateManyWithoutCityNestedInput;
    boosts?: Prisma.BoostUncheckedUpdateManyWithoutCityNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCityNestedInput;
};
export type CityCountOutputType = {
    profiles: number;
    boosts: number;
    events: number;
    travelSessions: number;
};
export type CityCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles?: boolean | CityCountOutputTypeCountProfilesArgs;
    boosts?: boolean | CityCountOutputTypeCountBoostsArgs;
    events?: boolean | CityCountOutputTypeCountEventsArgs;
    travelSessions?: boolean | CityCountOutputTypeCountTravelSessionsArgs;
};
export type CityCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CityCountOutputTypeSelect<ExtArgs> | null;
};
export type CityCountOutputTypeCountProfilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
};
export type CityCountOutputTypeCountBoostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoostWhereInput;
};
export type CityCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
export type CityCountOutputTypeCountTravelSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TravelSessionWhereInput;
};
export type CitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    region?: boolean;
    country?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    radiusKm?: boolean;
    activeUserCount?: boolean;
    boostSlots?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profiles?: boolean | Prisma.City$profilesArgs<ExtArgs>;
    boosts?: boolean | Prisma.City$boostsArgs<ExtArgs>;
    events?: boolean | Prisma.City$eventsArgs<ExtArgs>;
    travelSessions?: boolean | Prisma.City$travelSessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CityCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["city"]>;
export type CitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    region?: boolean;
    country?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    radiusKm?: boolean;
    activeUserCount?: boolean;
    boostSlots?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["city"]>;
export type CitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    region?: boolean;
    country?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    radiusKm?: boolean;
    activeUserCount?: boolean;
    boostSlots?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["city"]>;
export type CitySelectScalar = {
    id?: boolean;
    name?: boolean;
    region?: boolean;
    country?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    radiusKm?: boolean;
    activeUserCount?: boolean;
    boostSlots?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "region" | "country" | "latitude" | "longitude" | "radiusKm" | "activeUserCount" | "boostSlots" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["city"]>;
export type CityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles?: boolean | Prisma.City$profilesArgs<ExtArgs>;
    boosts?: boolean | Prisma.City$boostsArgs<ExtArgs>;
    events?: boolean | Prisma.City$eventsArgs<ExtArgs>;
    travelSessions?: boolean | Prisma.City$travelSessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CityCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "City";
    objects: {
        profiles: Prisma.$ProfilePayload<ExtArgs>[];
        boosts: Prisma.$BoostPayload<ExtArgs>[];
        events: Prisma.$EventPayload<ExtArgs>[];
        travelSessions: Prisma.$TravelSessionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        region: string;
        country: string;
        latitude: number;
        longitude: number;
        radiusKm: number;
        activeUserCount: number;
        boostSlots: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["city"]>;
    composites: {};
};
export type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CityPayload, S>;
export type CityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CityCountAggregateInputType | true;
};
export interface CityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['City'];
        meta: {
            name: 'City';
        };
    };
    findUnique<T extends CityFindUniqueArgs>(args: Prisma.SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CityFindFirstArgs>(args?: Prisma.SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CityFindManyArgs>(args?: Prisma.SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CityCreateArgs>(args: Prisma.SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CityCreateManyArgs>(args?: Prisma.SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CityDeleteArgs>(args: Prisma.SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CityUpdateArgs>(args: Prisma.SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CityDeleteManyArgs>(args?: Prisma.SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CityUpdateManyArgs>(args: Prisma.SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CityUpsertArgs>(args: Prisma.SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CityCountArgs>(args?: Prisma.Subset<T, CityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CityCountAggregateOutputType> : number>;
    aggregate<T extends CityAggregateArgs>(args: Prisma.Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>;
    groupBy<T extends CityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CityGroupByArgs['orderBy'];
    } : {
        orderBy?: CityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CityFieldRefs;
}
export interface Prisma__CityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profiles<T extends Prisma.City$profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.City$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    boosts<T extends Prisma.City$boostsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.City$boostsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.City$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.City$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    travelSessions<T extends Prisma.City$travelSessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.City$travelSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TravelSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CityFieldRefs {
    readonly id: Prisma.FieldRef<"City", 'String'>;
    readonly name: Prisma.FieldRef<"City", 'String'>;
    readonly region: Prisma.FieldRef<"City", 'String'>;
    readonly country: Prisma.FieldRef<"City", 'String'>;
    readonly latitude: Prisma.FieldRef<"City", 'Float'>;
    readonly longitude: Prisma.FieldRef<"City", 'Float'>;
    readonly radiusKm: Prisma.FieldRef<"City", 'Int'>;
    readonly activeUserCount: Prisma.FieldRef<"City", 'Int'>;
    readonly boostSlots: Prisma.FieldRef<"City", 'Int'>;
    readonly isActive: Prisma.FieldRef<"City", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"City", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"City", 'DateTime'>;
}
export type CityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
};
export type CityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
};
export type CityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput | Prisma.CityOrderByWithRelationInput[];
    cursor?: Prisma.CityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
export type CityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput | Prisma.CityOrderByWithRelationInput[];
    cursor?: Prisma.CityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
export type CityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput | Prisma.CityOrderByWithRelationInput[];
    cursor?: Prisma.CityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
export type CityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CityCreateInput, Prisma.CityUncheckedCreateInput>;
};
export type CityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CityCreateManyInput | Prisma.CityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    data: Prisma.CityCreateManyInput | Prisma.CityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CityUpdateInput, Prisma.CityUncheckedUpdateInput>;
    where: Prisma.CityWhereUniqueInput;
};
export type CityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CityUpdateManyMutationInput, Prisma.CityUncheckedUpdateManyInput>;
    where?: Prisma.CityWhereInput;
    limit?: number;
};
export type CityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CityUpdateManyMutationInput, Prisma.CityUncheckedUpdateManyInput>;
    where?: Prisma.CityWhereInput;
    limit?: number;
};
export type CityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateInput, Prisma.CityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CityUpdateInput, Prisma.CityUncheckedUpdateInput>;
};
export type CityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
};
export type CityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
    limit?: number;
};
export type City$profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type City$boostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoostSelect<ExtArgs> | null;
    omit?: Prisma.BoostOmit<ExtArgs> | null;
    include?: Prisma.BoostInclude<ExtArgs> | null;
    where?: Prisma.BoostWhereInput;
    orderBy?: Prisma.BoostOrderByWithRelationInput | Prisma.BoostOrderByWithRelationInput[];
    cursor?: Prisma.BoostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoostScalarFieldEnum | Prisma.BoostScalarFieldEnum[];
};
export type City$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type City$travelSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
};
