import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DeviceModel = runtime.Types.Result.DefaultSelection<Prisma.$DevicePayload>;
export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
export type DeviceMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    platform: $Enums.DevicePlatform | null;
    fingerprint: string | null;
    model: string | null;
    osVersion: string | null;
    appVersion: string | null;
    integrityVerdict: $Enums.IntegrityVerdict | null;
    integrityCheckedAt: Date | null;
    isTrusted: boolean | null;
    firstSeenAt: Date | null;
    lastSeenAt: Date | null;
};
export type DeviceMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    platform: $Enums.DevicePlatform | null;
    fingerprint: string | null;
    model: string | null;
    osVersion: string | null;
    appVersion: string | null;
    integrityVerdict: $Enums.IntegrityVerdict | null;
    integrityCheckedAt: Date | null;
    isTrusted: boolean | null;
    firstSeenAt: Date | null;
    lastSeenAt: Date | null;
};
export type DeviceCountAggregateOutputType = {
    id: number;
    userId: number;
    platform: number;
    fingerprint: number;
    model: number;
    osVersion: number;
    appVersion: number;
    integrityVerdict: number;
    integrityCheckedAt: number;
    integrityPayload: number;
    isTrusted: number;
    firstSeenAt: number;
    lastSeenAt: number;
    _all: number;
};
export type DeviceMinAggregateInputType = {
    id?: true;
    userId?: true;
    platform?: true;
    fingerprint?: true;
    model?: true;
    osVersion?: true;
    appVersion?: true;
    integrityVerdict?: true;
    integrityCheckedAt?: true;
    isTrusted?: true;
    firstSeenAt?: true;
    lastSeenAt?: true;
};
export type DeviceMaxAggregateInputType = {
    id?: true;
    userId?: true;
    platform?: true;
    fingerprint?: true;
    model?: true;
    osVersion?: true;
    appVersion?: true;
    integrityVerdict?: true;
    integrityCheckedAt?: true;
    isTrusted?: true;
    firstSeenAt?: true;
    lastSeenAt?: true;
};
export type DeviceCountAggregateInputType = {
    id?: true;
    userId?: true;
    platform?: true;
    fingerprint?: true;
    model?: true;
    osVersion?: true;
    appVersion?: true;
    integrityVerdict?: true;
    integrityCheckedAt?: true;
    integrityPayload?: true;
    isTrusted?: true;
    firstSeenAt?: true;
    lastSeenAt?: true;
    _all?: true;
};
export type DeviceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeviceCountAggregateInputType;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
};
export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
    [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDevice[P]> : Prisma.GetScalarType<T[P], AggregateDevice[P]>;
};
export type DeviceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithAggregationInput | Prisma.DeviceOrderByWithAggregationInput[];
    by: Prisma.DeviceScalarFieldEnum[] | Prisma.DeviceScalarFieldEnum;
    having?: Prisma.DeviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceCountAggregateInputType | true;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
};
export type DeviceGroupByOutputType = {
    id: string;
    userId: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model: string | null;
    osVersion: string | null;
    appVersion: string | null;
    integrityVerdict: $Enums.IntegrityVerdict;
    integrityCheckedAt: Date | null;
    integrityPayload: runtime.JsonValue | null;
    isTrusted: boolean;
    firstSeenAt: Date;
    lastSeenAt: Date;
    _count: DeviceCountAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
};
export type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeviceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeviceGroupByOutputType[P]>;
}>>;
export type DeviceWhereInput = {
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    id?: Prisma.UuidFilter<"Device"> | string;
    userId?: Prisma.UuidFilter<"Device"> | string;
    platform?: Prisma.EnumDevicePlatformFilter<"Device"> | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFilter<"Device"> | string;
    model?: Prisma.StringNullableFilter<"Device"> | string | null;
    osVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    appVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFilter<"Device"> | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    integrityPayload?: Prisma.JsonNullableFilter<"Device">;
    isTrusted?: Prisma.BoolFilter<"Device"> | boolean;
    firstSeenAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sessions?: Prisma.SessionListRelationFilter;
    pushTokens?: Prisma.PushTokenListRelationFilter;
};
export type DeviceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    osVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    appVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    integrityVerdict?: Prisma.SortOrder;
    integrityCheckedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    integrityPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    isTrusted?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    pushTokens?: Prisma.PushTokenOrderByRelationAggregateInput;
};
export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_fingerprint?: Prisma.DeviceUserIdFingerprintCompoundUniqueInput;
    AND?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    OR?: Prisma.DeviceWhereInput[];
    NOT?: Prisma.DeviceWhereInput | Prisma.DeviceWhereInput[];
    userId?: Prisma.UuidFilter<"Device"> | string;
    platform?: Prisma.EnumDevicePlatformFilter<"Device"> | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFilter<"Device"> | string;
    model?: Prisma.StringNullableFilter<"Device"> | string | null;
    osVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    appVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFilter<"Device"> | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    integrityPayload?: Prisma.JsonNullableFilter<"Device">;
    isTrusted?: Prisma.BoolFilter<"Device"> | boolean;
    firstSeenAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sessions?: Prisma.SessionListRelationFilter;
    pushTokens?: Prisma.PushTokenListRelationFilter;
}, "id" | "userId_fingerprint">;
export type DeviceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    osVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    appVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    integrityVerdict?: Prisma.SortOrder;
    integrityCheckedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    integrityPayload?: Prisma.SortOrderInput | Prisma.SortOrder;
    isTrusted?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    _count?: Prisma.DeviceCountOrderByAggregateInput;
    _max?: Prisma.DeviceMaxOrderByAggregateInput;
    _min?: Prisma.DeviceMinOrderByAggregateInput;
};
export type DeviceScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeviceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeviceScalarWhereWithAggregatesInput | Prisma.DeviceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Device"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Device"> | string;
    platform?: Prisma.EnumDevicePlatformWithAggregatesFilter<"Device"> | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringWithAggregatesFilter<"Device"> | string;
    model?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    osVersion?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    appVersion?: Prisma.StringNullableWithAggregatesFilter<"Device"> | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictWithAggregatesFilter<"Device"> | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null;
    integrityPayload?: Prisma.JsonNullableWithAggregatesFilter<"Device">;
    isTrusted?: Prisma.BoolWithAggregatesFilter<"Device"> | boolean;
    firstSeenAt?: Prisma.DateTimeWithAggregatesFilter<"Device"> | Date | string;
    lastSeenAt?: Prisma.DateTimeWithAggregatesFilter<"Device"> | Date | string;
};
export type DeviceCreateInput = {
    id?: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDevicesInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutDeviceInput;
    pushTokens?: Prisma.PushTokenCreateNestedManyWithoutDeviceInput;
};
export type DeviceUncheckedCreateInput = {
    id?: string;
    userId: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutDeviceInput;
    pushTokens?: Prisma.PushTokenUncheckedCreateNestedManyWithoutDeviceInput;
};
export type DeviceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDevicesNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutDeviceNestedInput;
    pushTokens?: Prisma.PushTokenUpdateManyWithoutDeviceNestedInput;
};
export type DeviceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutDeviceNestedInput;
    pushTokens?: Prisma.PushTokenUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type DeviceCreateManyInput = {
    id?: string;
    userId: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
};
export type DeviceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceListRelationFilter = {
    every?: Prisma.DeviceWhereInput;
    some?: Prisma.DeviceWhereInput;
    none?: Prisma.DeviceWhereInput;
};
export type DeviceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeviceNullableScalarRelationFilter = {
    is?: Prisma.DeviceWhereInput | null;
    isNot?: Prisma.DeviceWhereInput | null;
};
export type DeviceUserIdFingerprintCompoundUniqueInput = {
    userId: string;
    fingerprint: string;
};
export type DeviceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    osVersion?: Prisma.SortOrder;
    appVersion?: Prisma.SortOrder;
    integrityVerdict?: Prisma.SortOrder;
    integrityCheckedAt?: Prisma.SortOrder;
    integrityPayload?: Prisma.SortOrder;
    isTrusted?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type DeviceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    osVersion?: Prisma.SortOrder;
    appVersion?: Prisma.SortOrder;
    integrityVerdict?: Prisma.SortOrder;
    integrityCheckedAt?: Prisma.SortOrder;
    isTrusted?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type DeviceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    fingerprint?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    osVersion?: Prisma.SortOrder;
    appVersion?: Prisma.SortOrder;
    integrityVerdict?: Prisma.SortOrder;
    integrityCheckedAt?: Prisma.SortOrder;
    isTrusted?: Prisma.SortOrder;
    firstSeenAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type DeviceCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
};
export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
};
export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput | Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    set?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    disconnect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    delete?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    update?: Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput | Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DeviceUpdateManyWithWhereWithoutUserInput | Prisma.DeviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
};
export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput> | Prisma.DeviceCreateWithoutUserInput[] | Prisma.DeviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutUserInput | Prisma.DeviceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput | Prisma.DeviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DeviceCreateManyUserInputEnvelope;
    set?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    disconnect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    delete?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    connect?: Prisma.DeviceWhereUniqueInput | Prisma.DeviceWhereUniqueInput[];
    update?: Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput | Prisma.DeviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DeviceUpdateManyWithWhereWithoutUserInput | Prisma.DeviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
};
export type DeviceCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutSessionsInput, Prisma.DeviceUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.DeviceWhereUniqueInput;
};
export type DeviceUpdateOneWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutSessionsInput, Prisma.DeviceUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.DeviceUpsertWithoutSessionsInput;
    disconnect?: Prisma.DeviceWhereInput | boolean;
    delete?: Prisma.DeviceWhereInput | boolean;
    connect?: Prisma.DeviceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DeviceUpdateToOneWithWhereWithoutSessionsInput, Prisma.DeviceUpdateWithoutSessionsInput>, Prisma.DeviceUncheckedUpdateWithoutSessionsInput>;
};
export type EnumDevicePlatformFieldUpdateOperationsInput = {
    set?: $Enums.DevicePlatform;
};
export type EnumIntegrityVerdictFieldUpdateOperationsInput = {
    set?: $Enums.IntegrityVerdict;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DeviceCreateNestedOneWithoutPushTokensInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutPushTokensInput, Prisma.DeviceUncheckedCreateWithoutPushTokensInput>;
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutPushTokensInput;
    connect?: Prisma.DeviceWhereUniqueInput;
};
export type DeviceUpdateOneWithoutPushTokensNestedInput = {
    create?: Prisma.XOR<Prisma.DeviceCreateWithoutPushTokensInput, Prisma.DeviceUncheckedCreateWithoutPushTokensInput>;
    connectOrCreate?: Prisma.DeviceCreateOrConnectWithoutPushTokensInput;
    upsert?: Prisma.DeviceUpsertWithoutPushTokensInput;
    disconnect?: Prisma.DeviceWhereInput | boolean;
    delete?: Prisma.DeviceWhereInput | boolean;
    connect?: Prisma.DeviceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DeviceUpdateToOneWithWhereWithoutPushTokensInput, Prisma.DeviceUpdateWithoutPushTokensInput>, Prisma.DeviceUncheckedUpdateWithoutPushTokensInput>;
};
export type DeviceCreateWithoutUserInput = {
    id?: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutDeviceInput;
    pushTokens?: Prisma.PushTokenCreateNestedManyWithoutDeviceInput;
};
export type DeviceUncheckedCreateWithoutUserInput = {
    id?: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutDeviceInput;
    pushTokens?: Prisma.PushTokenUncheckedCreateNestedManyWithoutDeviceInput;
};
export type DeviceCreateOrConnectWithoutUserInput = {
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput>;
};
export type DeviceCreateManyUserInputEnvelope = {
    data: Prisma.DeviceCreateManyUserInput | Prisma.DeviceCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.DeviceWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeviceUpdateWithoutUserInput, Prisma.DeviceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutUserInput, Prisma.DeviceUncheckedCreateWithoutUserInput>;
};
export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.DeviceWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeviceUpdateWithoutUserInput, Prisma.DeviceUncheckedUpdateWithoutUserInput>;
};
export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.DeviceScalarWhereInput;
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyWithoutUserInput>;
};
export type DeviceScalarWhereInput = {
    AND?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
    OR?: Prisma.DeviceScalarWhereInput[];
    NOT?: Prisma.DeviceScalarWhereInput | Prisma.DeviceScalarWhereInput[];
    id?: Prisma.UuidFilter<"Device"> | string;
    userId?: Prisma.UuidFilter<"Device"> | string;
    platform?: Prisma.EnumDevicePlatformFilter<"Device"> | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFilter<"Device"> | string;
    model?: Prisma.StringNullableFilter<"Device"> | string | null;
    osVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    appVersion?: Prisma.StringNullableFilter<"Device"> | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFilter<"Device"> | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.DateTimeNullableFilter<"Device"> | Date | string | null;
    integrityPayload?: Prisma.JsonNullableFilter<"Device">;
    isTrusted?: Prisma.BoolFilter<"Device"> | boolean;
    firstSeenAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Device"> | Date | string;
};
export type DeviceCreateWithoutSessionsInput = {
    id?: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDevicesInput;
    pushTokens?: Prisma.PushTokenCreateNestedManyWithoutDeviceInput;
};
export type DeviceUncheckedCreateWithoutSessionsInput = {
    id?: string;
    userId: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    pushTokens?: Prisma.PushTokenUncheckedCreateNestedManyWithoutDeviceInput;
};
export type DeviceCreateOrConnectWithoutSessionsInput = {
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutSessionsInput, Prisma.DeviceUncheckedCreateWithoutSessionsInput>;
};
export type DeviceUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.DeviceUpdateWithoutSessionsInput, Prisma.DeviceUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutSessionsInput, Prisma.DeviceUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.DeviceWhereInput;
};
export type DeviceUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.DeviceWhereInput;
    data: Prisma.XOR<Prisma.DeviceUpdateWithoutSessionsInput, Prisma.DeviceUncheckedUpdateWithoutSessionsInput>;
};
export type DeviceUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDevicesNestedInput;
    pushTokens?: Prisma.PushTokenUpdateManyWithoutDeviceNestedInput;
};
export type DeviceUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pushTokens?: Prisma.PushTokenUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type DeviceCreateWithoutPushTokensInput = {
    id?: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDevicesInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutDeviceInput;
};
export type DeviceUncheckedCreateWithoutPushTokensInput = {
    id?: string;
    userId: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutDeviceInput;
};
export type DeviceCreateOrConnectWithoutPushTokensInput = {
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutPushTokensInput, Prisma.DeviceUncheckedCreateWithoutPushTokensInput>;
};
export type DeviceUpsertWithoutPushTokensInput = {
    update: Prisma.XOR<Prisma.DeviceUpdateWithoutPushTokensInput, Prisma.DeviceUncheckedUpdateWithoutPushTokensInput>;
    create: Prisma.XOR<Prisma.DeviceCreateWithoutPushTokensInput, Prisma.DeviceUncheckedCreateWithoutPushTokensInput>;
    where?: Prisma.DeviceWhereInput;
};
export type DeviceUpdateToOneWithWhereWithoutPushTokensInput = {
    where?: Prisma.DeviceWhereInput;
    data: Prisma.XOR<Prisma.DeviceUpdateWithoutPushTokensInput, Prisma.DeviceUncheckedUpdateWithoutPushTokensInput>;
};
export type DeviceUpdateWithoutPushTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDevicesNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutDeviceNestedInput;
};
export type DeviceUncheckedUpdateWithoutPushTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type DeviceCreateManyUserInput = {
    id?: string;
    platform: $Enums.DevicePlatform;
    fingerprint: string;
    model?: string | null;
    osVersion?: string | null;
    appVersion?: string | null;
    integrityVerdict?: $Enums.IntegrityVerdict;
    integrityCheckedAt?: Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: boolean;
    firstSeenAt?: Date | string;
    lastSeenAt?: Date | string;
};
export type DeviceUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutDeviceNestedInput;
    pushTokens?: Prisma.PushTokenUpdateManyWithoutDeviceNestedInput;
};
export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutDeviceNestedInput;
    pushTokens?: Prisma.PushTokenUncheckedUpdateManyWithoutDeviceNestedInput;
};
export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform;
    fingerprint?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    osVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    integrityVerdict?: Prisma.EnumIntegrityVerdictFieldUpdateOperationsInput | $Enums.IntegrityVerdict;
    integrityCheckedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    integrityPayload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isTrusted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeviceCountOutputType = {
    sessions: number;
    pushTokens: number;
};
export type DeviceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | DeviceCountOutputTypeCountSessionsArgs;
    pushTokens?: boolean | DeviceCountOutputTypeCountPushTokensArgs;
};
export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceCountOutputTypeSelect<ExtArgs> | null;
};
export type DeviceCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type DeviceCountOutputTypeCountPushTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PushTokenWhereInput;
};
export type DeviceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    platform?: boolean;
    fingerprint?: boolean;
    model?: boolean;
    osVersion?: boolean;
    appVersion?: boolean;
    integrityVerdict?: boolean;
    integrityCheckedAt?: boolean;
    integrityPayload?: boolean;
    isTrusted?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.Device$sessionsArgs<ExtArgs>;
    pushTokens?: boolean | Prisma.Device$pushTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.DeviceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    platform?: boolean;
    fingerprint?: boolean;
    model?: boolean;
    osVersion?: boolean;
    appVersion?: boolean;
    integrityVerdict?: boolean;
    integrityCheckedAt?: boolean;
    integrityPayload?: boolean;
    isTrusted?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    platform?: boolean;
    fingerprint?: boolean;
    model?: boolean;
    osVersion?: boolean;
    appVersion?: boolean;
    integrityVerdict?: boolean;
    integrityCheckedAt?: boolean;
    integrityPayload?: boolean;
    isTrusted?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["device"]>;
export type DeviceSelectScalar = {
    id?: boolean;
    userId?: boolean;
    platform?: boolean;
    fingerprint?: boolean;
    model?: boolean;
    osVersion?: boolean;
    appVersion?: boolean;
    integrityVerdict?: boolean;
    integrityCheckedAt?: boolean;
    integrityPayload?: boolean;
    isTrusted?: boolean;
    firstSeenAt?: boolean;
    lastSeenAt?: boolean;
};
export type DeviceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "platform" | "fingerprint" | "model" | "osVersion" | "appVersion" | "integrityVerdict" | "integrityCheckedAt" | "integrityPayload" | "isTrusted" | "firstSeenAt" | "lastSeenAt", ExtArgs["result"]["device"]>;
export type DeviceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.Device$sessionsArgs<ExtArgs>;
    pushTokens?: boolean | Prisma.Device$pushTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.DeviceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DeviceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DevicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Device";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        pushTokens: Prisma.$PushTokenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        platform: $Enums.DevicePlatform;
        fingerprint: string;
        model: string | null;
        osVersion: string | null;
        appVersion: string | null;
        integrityVerdict: $Enums.IntegrityVerdict;
        integrityCheckedAt: Date | null;
        integrityPayload: runtime.JsonValue | null;
        isTrusted: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }, ExtArgs["result"]["device"]>;
    composites: {};
};
export type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DevicePayload, S>;
export type DeviceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeviceCountAggregateInputType | true;
};
export interface DeviceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Device'];
        meta: {
            name: 'Device';
        };
    };
    findUnique<T extends DeviceFindUniqueArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeviceFindFirstArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeviceFindManyArgs>(args?: Prisma.SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeviceCreateArgs>(args: Prisma.SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeviceCreateManyArgs>(args?: Prisma.SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DeviceDeleteArgs>(args: Prisma.SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeviceUpdateArgs>(args: Prisma.SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeviceDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeviceUpdateManyArgs>(args: Prisma.SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DeviceUpsertArgs>(args: Prisma.SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma.Prisma__DeviceClient<runtime.Types.Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeviceCountArgs>(args?: Prisma.Subset<T, DeviceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeviceCountAggregateOutputType> : number>;
    aggregate<T extends DeviceAggregateArgs>(args: Prisma.Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>;
    groupBy<T extends DeviceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeviceGroupByArgs['orderBy'];
    } : {
        orderBy?: DeviceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeviceFieldRefs;
}
export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.Device$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Device$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pushTokens<T extends Prisma.Device$pushTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Device$pushTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeviceFieldRefs {
    readonly id: Prisma.FieldRef<"Device", 'String'>;
    readonly userId: Prisma.FieldRef<"Device", 'String'>;
    readonly platform: Prisma.FieldRef<"Device", 'DevicePlatform'>;
    readonly fingerprint: Prisma.FieldRef<"Device", 'String'>;
    readonly model: Prisma.FieldRef<"Device", 'String'>;
    readonly osVersion: Prisma.FieldRef<"Device", 'String'>;
    readonly appVersion: Prisma.FieldRef<"Device", 'String'>;
    readonly integrityVerdict: Prisma.FieldRef<"Device", 'IntegrityVerdict'>;
    readonly integrityCheckedAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly integrityPayload: Prisma.FieldRef<"Device", 'Json'>;
    readonly isTrusted: Prisma.FieldRef<"Device", 'Boolean'>;
    readonly firstSeenAt: Prisma.FieldRef<"Device", 'DateTime'>;
    readonly lastSeenAt: Prisma.FieldRef<"Device", 'DateTime'>;
}
export type DeviceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
export type DeviceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
export type DeviceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where?: Prisma.DeviceWhereInput;
    orderBy?: Prisma.DeviceOrderByWithRelationInput | Prisma.DeviceOrderByWithRelationInput[];
    cursor?: Prisma.DeviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceScalarFieldEnum | Prisma.DeviceScalarFieldEnum[];
};
export type DeviceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
};
export type DeviceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeviceCreateManyInput | Prisma.DeviceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeviceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    data: Prisma.DeviceCreateManyInput | Prisma.DeviceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DeviceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DeviceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyInput>;
    where?: Prisma.DeviceWhereInput;
    limit?: number;
};
export type DeviceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeviceUpdateManyMutationInput, Prisma.DeviceUncheckedUpdateManyInput>;
    where?: Prisma.DeviceWhereInput;
    limit?: number;
    include?: Prisma.DeviceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DeviceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeviceCreateInput, Prisma.DeviceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeviceUpdateInput, Prisma.DeviceUncheckedUpdateInput>;
};
export type DeviceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
    where: Prisma.DeviceWhereUniqueInput;
};
export type DeviceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceWhereInput;
    limit?: number;
};
export type Device$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type Device$pushTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DeviceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceSelect<ExtArgs> | null;
    omit?: Prisma.DeviceOmit<ExtArgs> | null;
    include?: Prisma.DeviceInclude<ExtArgs> | null;
};
