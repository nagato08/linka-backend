import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PushTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$PushTokenPayload>;
export type AggregatePushToken = {
    _count: PushTokenCountAggregateOutputType | null;
    _min: PushTokenMinAggregateOutputType | null;
    _max: PushTokenMaxAggregateOutputType | null;
};
export type PushTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    deviceId: string | null;
    token: string | null;
    platform: $Enums.DevicePlatform | null;
    isActive: boolean | null;
    lastUsedAt: Date | null;
    createdAt: Date | null;
};
export type PushTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    deviceId: string | null;
    token: string | null;
    platform: $Enums.DevicePlatform | null;
    isActive: boolean | null;
    lastUsedAt: Date | null;
    createdAt: Date | null;
};
export type PushTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    deviceId: number;
    token: number;
    platform: number;
    isActive: number;
    lastUsedAt: number;
    createdAt: number;
    _all: number;
};
export type PushTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    token?: true;
    platform?: true;
    isActive?: true;
    lastUsedAt?: true;
    createdAt?: true;
};
export type PushTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    token?: true;
    platform?: true;
    isActive?: true;
    lastUsedAt?: true;
    createdAt?: true;
};
export type PushTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    deviceId?: true;
    token?: true;
    platform?: true;
    isActive?: true;
    lastUsedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type PushTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PushTokenWhereInput;
    orderBy?: Prisma.PushTokenOrderByWithRelationInput | Prisma.PushTokenOrderByWithRelationInput[];
    cursor?: Prisma.PushTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PushTokenCountAggregateInputType;
    _min?: PushTokenMinAggregateInputType;
    _max?: PushTokenMaxAggregateInputType;
};
export type GetPushTokenAggregateType<T extends PushTokenAggregateArgs> = {
    [P in keyof T & keyof AggregatePushToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePushToken[P]> : Prisma.GetScalarType<T[P], AggregatePushToken[P]>;
};
export type PushTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PushTokenWhereInput;
    orderBy?: Prisma.PushTokenOrderByWithAggregationInput | Prisma.PushTokenOrderByWithAggregationInput[];
    by: Prisma.PushTokenScalarFieldEnum[] | Prisma.PushTokenScalarFieldEnum;
    having?: Prisma.PushTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PushTokenCountAggregateInputType | true;
    _min?: PushTokenMinAggregateInputType;
    _max?: PushTokenMaxAggregateInputType;
};
export type PushTokenGroupByOutputType = {
    id: string;
    userId: string;
    deviceId: string | null;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive: boolean;
    lastUsedAt: Date | null;
    createdAt: Date;
    _count: PushTokenCountAggregateOutputType | null;
    _min: PushTokenMinAggregateOutputType | null;
    _max: PushTokenMaxAggregateOutputType | null;
};
export type GetPushTokenGroupByPayload<T extends PushTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PushTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PushTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PushTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PushTokenGroupByOutputType[P]>;
}>>;
export type PushTokenWhereInput = {
    AND?: Prisma.PushTokenWhereInput | Prisma.PushTokenWhereInput[];
    OR?: Prisma.PushTokenWhereInput[];
    NOT?: Prisma.PushTokenWhereInput | Prisma.PushTokenWhereInput[];
    id?: Prisma.UuidFilter<"PushToken"> | string;
    userId?: Prisma.UuidFilter<"PushToken"> | string;
    deviceId?: Prisma.UuidNullableFilter<"PushToken"> | string | null;
    token?: Prisma.StringFilter<"PushToken"> | string;
    platform?: Prisma.EnumDevicePlatformFilter<"PushToken"> | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFilter<"PushToken"> | boolean;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"PushToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PushToken"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    device?: Prisma.XOR<Prisma.DeviceNullableScalarRelationFilter, Prisma.DeviceWhereInput> | null;
};
export type PushTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    device?: Prisma.DeviceOrderByWithRelationInput;
};
export type PushTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.PushTokenWhereInput | Prisma.PushTokenWhereInput[];
    OR?: Prisma.PushTokenWhereInput[];
    NOT?: Prisma.PushTokenWhereInput | Prisma.PushTokenWhereInput[];
    userId?: Prisma.UuidFilter<"PushToken"> | string;
    deviceId?: Prisma.UuidNullableFilter<"PushToken"> | string | null;
    platform?: Prisma.EnumDevicePlatformFilter<"PushToken"> | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFilter<"PushToken"> | boolean;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"PushToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PushToken"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    device?: Prisma.XOR<Prisma.DeviceNullableScalarRelationFilter, Prisma.DeviceWhereInput> | null;
}, "id" | "token">;
export type PushTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PushTokenCountOrderByAggregateInput;
    _max?: Prisma.PushTokenMaxOrderByAggregateInput;
    _min?: Prisma.PushTokenMinOrderByAggregateInput;
};
export type PushTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.PushTokenScalarWhereWithAggregatesInput | Prisma.PushTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.PushTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PushTokenScalarWhereWithAggregatesInput | Prisma.PushTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PushToken"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"PushToken"> | string;
    deviceId?: Prisma.UuidNullableWithAggregatesFilter<"PushToken"> | string | null;
    token?: Prisma.StringWithAggregatesFilter<"PushToken"> | string;
    platform?: Prisma.EnumDevicePlatformWithAggregatesFilter<"PushToken"> | $Enums.DevicePlatform;
    isActive?: Prisma.BoolWithAggregatesFilter<"PushToken"> | boolean;
    lastUsedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PushToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PushToken"> | Date | string;
};
export type PushTokenCreateInput = {
    id?: string;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPushTokensInput;
    device?: Prisma.DeviceCreateNestedOneWithoutPushTokensInput;
};
export type PushTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    deviceId?: string | null;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PushTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPushTokensNestedInput;
    device?: Prisma.DeviceUpdateOneWithoutPushTokensNestedInput;
};
export type PushTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PushTokenCreateManyInput = {
    id?: string;
    userId: string;
    deviceId?: string | null;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PushTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PushTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PushTokenListRelationFilter = {
    every?: Prisma.PushTokenWhereInput;
    some?: Prisma.PushTokenWhereInput;
    none?: Prisma.PushTokenWhereInput;
};
export type PushTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PushTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PushTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PushTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PushTokenCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutUserInput, Prisma.PushTokenUncheckedCreateWithoutUserInput> | Prisma.PushTokenCreateWithoutUserInput[] | Prisma.PushTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutUserInput | Prisma.PushTokenCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PushTokenCreateManyUserInputEnvelope;
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
};
export type PushTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutUserInput, Prisma.PushTokenUncheckedCreateWithoutUserInput> | Prisma.PushTokenCreateWithoutUserInput[] | Prisma.PushTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutUserInput | Prisma.PushTokenCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PushTokenCreateManyUserInputEnvelope;
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
};
export type PushTokenUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutUserInput, Prisma.PushTokenUncheckedCreateWithoutUserInput> | Prisma.PushTokenCreateWithoutUserInput[] | Prisma.PushTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutUserInput | Prisma.PushTokenCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PushTokenUpsertWithWhereUniqueWithoutUserInput | Prisma.PushTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PushTokenCreateManyUserInputEnvelope;
    set?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    disconnect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    delete?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    update?: Prisma.PushTokenUpdateWithWhereUniqueWithoutUserInput | Prisma.PushTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PushTokenUpdateManyWithWhereWithoutUserInput | Prisma.PushTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PushTokenScalarWhereInput | Prisma.PushTokenScalarWhereInput[];
};
export type PushTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutUserInput, Prisma.PushTokenUncheckedCreateWithoutUserInput> | Prisma.PushTokenCreateWithoutUserInput[] | Prisma.PushTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutUserInput | Prisma.PushTokenCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PushTokenUpsertWithWhereUniqueWithoutUserInput | Prisma.PushTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PushTokenCreateManyUserInputEnvelope;
    set?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    disconnect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    delete?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    update?: Prisma.PushTokenUpdateWithWhereUniqueWithoutUserInput | Prisma.PushTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PushTokenUpdateManyWithWhereWithoutUserInput | Prisma.PushTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PushTokenScalarWhereInput | Prisma.PushTokenScalarWhereInput[];
};
export type PushTokenCreateNestedManyWithoutDeviceInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutDeviceInput, Prisma.PushTokenUncheckedCreateWithoutDeviceInput> | Prisma.PushTokenCreateWithoutDeviceInput[] | Prisma.PushTokenUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutDeviceInput | Prisma.PushTokenCreateOrConnectWithoutDeviceInput[];
    createMany?: Prisma.PushTokenCreateManyDeviceInputEnvelope;
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
};
export type PushTokenUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutDeviceInput, Prisma.PushTokenUncheckedCreateWithoutDeviceInput> | Prisma.PushTokenCreateWithoutDeviceInput[] | Prisma.PushTokenUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutDeviceInput | Prisma.PushTokenCreateOrConnectWithoutDeviceInput[];
    createMany?: Prisma.PushTokenCreateManyDeviceInputEnvelope;
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
};
export type PushTokenUpdateManyWithoutDeviceNestedInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutDeviceInput, Prisma.PushTokenUncheckedCreateWithoutDeviceInput> | Prisma.PushTokenCreateWithoutDeviceInput[] | Prisma.PushTokenUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutDeviceInput | Prisma.PushTokenCreateOrConnectWithoutDeviceInput[];
    upsert?: Prisma.PushTokenUpsertWithWhereUniqueWithoutDeviceInput | Prisma.PushTokenUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: Prisma.PushTokenCreateManyDeviceInputEnvelope;
    set?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    disconnect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    delete?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    update?: Prisma.PushTokenUpdateWithWhereUniqueWithoutDeviceInput | Prisma.PushTokenUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: Prisma.PushTokenUpdateManyWithWhereWithoutDeviceInput | Prisma.PushTokenUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: Prisma.PushTokenScalarWhereInput | Prisma.PushTokenScalarWhereInput[];
};
export type PushTokenUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: Prisma.XOR<Prisma.PushTokenCreateWithoutDeviceInput, Prisma.PushTokenUncheckedCreateWithoutDeviceInput> | Prisma.PushTokenCreateWithoutDeviceInput[] | Prisma.PushTokenUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: Prisma.PushTokenCreateOrConnectWithoutDeviceInput | Prisma.PushTokenCreateOrConnectWithoutDeviceInput[];
    upsert?: Prisma.PushTokenUpsertWithWhereUniqueWithoutDeviceInput | Prisma.PushTokenUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: Prisma.PushTokenCreateManyDeviceInputEnvelope;
    set?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    disconnect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    delete?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    connect?: Prisma.PushTokenWhereUniqueInput | Prisma.PushTokenWhereUniqueInput[];
    update?: Prisma.PushTokenUpdateWithWhereUniqueWithoutDeviceInput | Prisma.PushTokenUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: Prisma.PushTokenUpdateManyWithWhereWithoutDeviceInput | Prisma.PushTokenUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: Prisma.PushTokenScalarWhereInput | Prisma.PushTokenScalarWhereInput[];
};
export type PushTokenCreateWithoutUserInput = {
    id?: string;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    device?: Prisma.DeviceCreateNestedOneWithoutPushTokensInput;
};
export type PushTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    deviceId?: string | null;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PushTokenCreateOrConnectWithoutUserInput = {
    where: Prisma.PushTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.PushTokenCreateWithoutUserInput, Prisma.PushTokenUncheckedCreateWithoutUserInput>;
};
export type PushTokenCreateManyUserInputEnvelope = {
    data: Prisma.PushTokenCreateManyUserInput | Prisma.PushTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PushTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PushTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.PushTokenUpdateWithoutUserInput, Prisma.PushTokenUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PushTokenCreateWithoutUserInput, Prisma.PushTokenUncheckedCreateWithoutUserInput>;
};
export type PushTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PushTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.PushTokenUpdateWithoutUserInput, Prisma.PushTokenUncheckedUpdateWithoutUserInput>;
};
export type PushTokenUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PushTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.PushTokenUpdateManyMutationInput, Prisma.PushTokenUncheckedUpdateManyWithoutUserInput>;
};
export type PushTokenScalarWhereInput = {
    AND?: Prisma.PushTokenScalarWhereInput | Prisma.PushTokenScalarWhereInput[];
    OR?: Prisma.PushTokenScalarWhereInput[];
    NOT?: Prisma.PushTokenScalarWhereInput | Prisma.PushTokenScalarWhereInput[];
    id?: Prisma.UuidFilter<"PushToken"> | string;
    userId?: Prisma.UuidFilter<"PushToken"> | string;
    deviceId?: Prisma.UuidNullableFilter<"PushToken"> | string | null;
    token?: Prisma.StringFilter<"PushToken"> | string;
    platform?: Prisma.EnumDevicePlatformFilter<"PushToken"> | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFilter<"PushToken"> | boolean;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"PushToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PushToken"> | Date | string;
};
export type PushTokenCreateWithoutDeviceInput = {
    id?: string;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPushTokensInput;
};
export type PushTokenUncheckedCreateWithoutDeviceInput = {
    id?: string;
    userId: string;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PushTokenCreateOrConnectWithoutDeviceInput = {
    where: Prisma.PushTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.PushTokenCreateWithoutDeviceInput, Prisma.PushTokenUncheckedCreateWithoutDeviceInput>;
};
export type PushTokenCreateManyDeviceInputEnvelope = {
    data: Prisma.PushTokenCreateManyDeviceInput | Prisma.PushTokenCreateManyDeviceInput[];
    skipDuplicates?: boolean;
};
export type PushTokenUpsertWithWhereUniqueWithoutDeviceInput = {
    where: Prisma.PushTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.PushTokenUpdateWithoutDeviceInput, Prisma.PushTokenUncheckedUpdateWithoutDeviceInput>;
    create: Prisma.XOR<Prisma.PushTokenCreateWithoutDeviceInput, Prisma.PushTokenUncheckedCreateWithoutDeviceInput>;
};
export type PushTokenUpdateWithWhereUniqueWithoutDeviceInput = {
    where: Prisma.PushTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.PushTokenUpdateWithoutDeviceInput, Prisma.PushTokenUncheckedUpdateWithoutDeviceInput>;
};
export type PushTokenUpdateManyWithWhereWithoutDeviceInput = {
    where: Prisma.PushTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.PushTokenUpdateManyMutationInput, Prisma.PushTokenUncheckedUpdateManyWithoutDeviceInput>;
};
export type PushTokenCreateManyUserInput = {
    id?: string;
    deviceId?: string | null;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PushTokenUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    device?: Prisma.DeviceUpdateOneWithoutPushTokensNestedInput;
};
export type PushTokenUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PushTokenUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PushTokenCreateManyDeviceInput = {
    id?: string;
    userId: string;
    token: string;
    platform: $Enums.DevicePlatform;
    isActive?: boolean;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PushTokenUpdateWithoutDeviceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPushTokensNestedInput;
};
export type PushTokenUncheckedUpdateWithoutDeviceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PushTokenUncheckedUpdateManyWithoutDeviceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PushTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    token?: boolean;
    platform?: boolean;
    isActive?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    device?: boolean | Prisma.PushToken$deviceArgs<ExtArgs>;
}, ExtArgs["result"]["pushToken"]>;
export type PushTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    token?: boolean;
    platform?: boolean;
    isActive?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    device?: boolean | Prisma.PushToken$deviceArgs<ExtArgs>;
}, ExtArgs["result"]["pushToken"]>;
export type PushTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    token?: boolean;
    platform?: boolean;
    isActive?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    device?: boolean | Prisma.PushToken$deviceArgs<ExtArgs>;
}, ExtArgs["result"]["pushToken"]>;
export type PushTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    deviceId?: boolean;
    token?: boolean;
    platform?: boolean;
    isActive?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
};
export type PushTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "deviceId" | "token" | "platform" | "isActive" | "lastUsedAt" | "createdAt", ExtArgs["result"]["pushToken"]>;
export type PushTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    device?: boolean | Prisma.PushToken$deviceArgs<ExtArgs>;
};
export type PushTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    device?: boolean | Prisma.PushToken$deviceArgs<ExtArgs>;
};
export type PushTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    device?: boolean | Prisma.PushToken$deviceArgs<ExtArgs>;
};
export type $PushTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PushToken";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        device: Prisma.$DevicePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        deviceId: string | null;
        token: string;
        platform: $Enums.DevicePlatform;
        isActive: boolean;
        lastUsedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["pushToken"]>;
    composites: {};
};
export type PushTokenGetPayload<S extends boolean | null | undefined | PushTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PushTokenPayload, S>;
export type PushTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PushTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PushTokenCountAggregateInputType | true;
};
export interface PushTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PushToken'];
        meta: {
            name: 'PushToken';
        };
    };
    findUnique<T extends PushTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, PushTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PushTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PushTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PushTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, PushTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PushTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PushTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PushTokenFindManyArgs>(args?: Prisma.SelectSubset<T, PushTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PushTokenCreateArgs>(args: Prisma.SelectSubset<T, PushTokenCreateArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PushTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, PushTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PushTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PushTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PushTokenDeleteArgs>(args: Prisma.SelectSubset<T, PushTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PushTokenUpdateArgs>(args: Prisma.SelectSubset<T, PushTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PushTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, PushTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PushTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, PushTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PushTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PushTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PushTokenUpsertArgs>(args: Prisma.SelectSubset<T, PushTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__PushTokenClient<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PushTokenCountArgs>(args?: Prisma.Subset<T, PushTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PushTokenCountAggregateOutputType> : number>;
    aggregate<T extends PushTokenAggregateArgs>(args: Prisma.Subset<T, PushTokenAggregateArgs>): Prisma.PrismaPromise<GetPushTokenAggregateType<T>>;
    groupBy<T extends PushTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PushTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: PushTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PushTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PushTokenFieldRefs;
}
export interface Prisma__PushTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    device<T extends Prisma.PushToken$deviceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PushToken$deviceArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PushTokenFieldRefs {
    readonly id: Prisma.FieldRef<"PushToken", 'String'>;
    readonly userId: Prisma.FieldRef<"PushToken", 'String'>;
    readonly deviceId: Prisma.FieldRef<"PushToken", 'String'>;
    readonly token: Prisma.FieldRef<"PushToken", 'String'>;
    readonly platform: Prisma.FieldRef<"PushToken", 'DevicePlatform'>;
    readonly isActive: Prisma.FieldRef<"PushToken", 'Boolean'>;
    readonly lastUsedAt: Prisma.FieldRef<"PushToken", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PushToken", 'DateTime'>;
}
export type PushTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    where: Prisma.PushTokenWhereUniqueInput;
};
export type PushTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    where: Prisma.PushTokenWhereUniqueInput;
};
export type PushTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    where?: Prisma.PushTokenWhereInput;
    orderBy?: Prisma.PushTokenOrderByWithRelationInput | Prisma.PushTokenOrderByWithRelationInput[];
    cursor?: Prisma.PushTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PushTokenScalarFieldEnum | Prisma.PushTokenScalarFieldEnum[];
};
export type PushTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    where?: Prisma.PushTokenWhereInput;
    orderBy?: Prisma.PushTokenOrderByWithRelationInput | Prisma.PushTokenOrderByWithRelationInput[];
    cursor?: Prisma.PushTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PushTokenScalarFieldEnum | Prisma.PushTokenScalarFieldEnum[];
};
export type PushTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    where?: Prisma.PushTokenWhereInput;
    orderBy?: Prisma.PushTokenOrderByWithRelationInput | Prisma.PushTokenOrderByWithRelationInput[];
    cursor?: Prisma.PushTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PushTokenScalarFieldEnum | Prisma.PushTokenScalarFieldEnum[];
};
export type PushTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PushTokenCreateInput, Prisma.PushTokenUncheckedCreateInput>;
};
export type PushTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PushTokenCreateManyInput | Prisma.PushTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PushTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    data: Prisma.PushTokenCreateManyInput | Prisma.PushTokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PushTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PushTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PushTokenUpdateInput, Prisma.PushTokenUncheckedUpdateInput>;
    where: Prisma.PushTokenWhereUniqueInput;
};
export type PushTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PushTokenUpdateManyMutationInput, Prisma.PushTokenUncheckedUpdateManyInput>;
    where?: Prisma.PushTokenWhereInput;
    limit?: number;
};
export type PushTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PushTokenUpdateManyMutationInput, Prisma.PushTokenUncheckedUpdateManyInput>;
    where?: Prisma.PushTokenWhereInput;
    limit?: number;
    include?: Prisma.PushTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PushTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    where: Prisma.PushTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.PushTokenCreateInput, Prisma.PushTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PushTokenUpdateInput, Prisma.PushTokenUncheckedUpdateInput>;
};
export type PushTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
    where: Prisma.PushTokenWhereUniqueInput;
};
export type PushTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PushTokenWhereInput;
    limit?: number;
};
export type PushToken$deviceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
};
export type PushTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PushTokenSelect<ExtArgs> | null;
    omit?: Prisma.PushTokenOmit<ExtArgs> | null;
    include?: Prisma.PushTokenInclude<ExtArgs> | null;
};
