import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type UuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider;
};
export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type EnumAppLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.AppLocale | Prisma.EnumAppLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppLocaleFilter<$PrismaModel> | $Enums.AppLocale;
};
export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
};
export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type EnumAppLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppLocale | Prisma.EnumAppLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppLocaleWithAggregatesFilter<$PrismaModel> | $Enums.AppLocale;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAppLocaleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAppLocaleFilter<$PrismaModel>;
};
export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumDevicePlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | Prisma.EnumDevicePlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDevicePlatformFilter<$PrismaModel> | $Enums.DevicePlatform;
};
export type EnumIntegrityVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrityVerdict | Prisma.EnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntegrityVerdictFilter<$PrismaModel> | $Enums.IntegrityVerdict;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type EnumDevicePlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | Prisma.EnumDevicePlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDevicePlatformWithAggregatesFilter<$PrismaModel> | $Enums.DevicePlatform;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDevicePlatformFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDevicePlatformFilter<$PrismaModel>;
};
export type EnumIntegrityVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrityVerdict | Prisma.EnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntegrityVerdictWithAggregatesFilter<$PrismaModel> | $Enums.IntegrityVerdict;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIntegrityVerdictFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIntegrityVerdictFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumOtpChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpChannel | Prisma.EnumOtpChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpChannelFilter<$PrismaModel> | $Enums.OtpChannel;
};
export type EnumOtpPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | Prisma.EnumOtpPurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpPurposeFilter<$PrismaModel> | $Enums.OtpPurpose;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumOtpChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpChannel | Prisma.EnumOtpChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpChannelWithAggregatesFilter<$PrismaModel> | $Enums.OtpChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOtpChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOtpChannelFilter<$PrismaModel>;
};
export type EnumOtpPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | Prisma.EnumOtpPurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel> | $Enums.OtpPurpose;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOtpPurposeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOtpPurposeFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumReferralStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | Prisma.EnumReferralStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReferralStatusFilter<$PrismaModel> | $Enums.ReferralStatus;
};
export type EnumReferralStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | Prisma.EnumReferralStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReferralStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReferralStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReferralStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReferralStatusFilter<$PrismaModel>;
};
export type EnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | Prisma.EnumProductTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumBoostTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBoostTierNullableFilter<$PrismaModel> | $Enums.BoostTier | null;
};
export type EnumSubscriptionTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSubscriptionTierNullableFilter<$PrismaModel> | $Enums.SubscriptionTier | null;
};
export type EnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | Prisma.EnumProductTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProductTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProductTypeFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumBoostTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBoostTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.BoostTier | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBoostTierNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBoostTierNullableFilter<$PrismaModel>;
};
export type EnumSubscriptionTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSubscriptionTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionTierNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionTierNullableFilter<$PrismaModel>;
};
export type EnumPaymentProviderKindFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviderKind | Prisma.EnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentProviderKindFilter<$PrismaModel> | $Enums.PaymentProviderKind;
};
export type EnumMobileMoneyOperatorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MobileMoneyOperator | Prisma.EnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMobileMoneyOperatorNullableFilter<$PrismaModel> | $Enums.MobileMoneyOperator | null;
};
export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type EnumPaymentProviderKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviderKind | Prisma.EnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentProviderKindWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProviderKind;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentProviderKindFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentProviderKindFilter<$PrismaModel>;
};
export type EnumMobileMoneyOperatorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MobileMoneyOperator | Prisma.EnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMobileMoneyOperatorNullableWithAggregatesFilter<$PrismaModel> | $Enums.MobileMoneyOperator | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMobileMoneyOperatorNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMobileMoneyOperatorNullableFilter<$PrismaModel>;
};
export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type EnumLedgerReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | Prisma.EnumLedgerReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerReasonFilter<$PrismaModel> | $Enums.LedgerReason;
};
export type EnumLedgerReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | Prisma.EnumLedgerReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerReasonWithAggregatesFilter<$PrismaModel> | $Enums.LedgerReason;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerReasonFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerReasonFilter<$PrismaModel>;
};
export type EnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier;
};
export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus;
};
export type EnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionTierFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionTierFilter<$PrismaModel>;
};
export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
};
export type EnumEntitlementKeyFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementKey | Prisma.EnumEntitlementKeyFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementKeyFilter<$PrismaModel> | $Enums.EntitlementKey;
};
export type EnumEntitlementSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementSource | Prisma.EnumEntitlementSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementSourceFilter<$PrismaModel> | $Enums.EntitlementSource;
};
export type EnumEntitlementKeyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementKey | Prisma.EnumEntitlementKeyFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementKeyWithAggregatesFilter<$PrismaModel> | $Enums.EntitlementKey;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEntitlementKeyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEntitlementKeyFilter<$PrismaModel>;
};
export type EnumEntitlementSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementSource | Prisma.EnumEntitlementSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementSourceWithAggregatesFilter<$PrismaModel> | $Enums.EntitlementSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEntitlementSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEntitlementSourceFilter<$PrismaModel>;
};
export type EnumBoostTierFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostTierFilter<$PrismaModel> | $Enums.BoostTier;
};
export type EnumBoostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostStatus | Prisma.EnumBoostStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostStatusFilter<$PrismaModel> | $Enums.BoostStatus;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type EnumBoostTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostTierWithAggregatesFilter<$PrismaModel> | $Enums.BoostTier;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBoostTierFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBoostTierFilter<$PrismaModel>;
};
export type EnumBoostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostStatus | Prisma.EnumBoostStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostStatusWithAggregatesFilter<$PrismaModel> | $Enums.BoostStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBoostStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBoostStatusFilter<$PrismaModel>;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumConversationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | Prisma.EnumConversationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationTypeFilter<$PrismaModel> | $Enums.ConversationType;
};
export type EnumConversationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationStatus | Prisma.EnumConversationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationStatusFilter<$PrismaModel> | $Enums.ConversationStatus;
};
export type EnumConversationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | Prisma.EnumConversationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConversationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumConversationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumConversationTypeFilter<$PrismaModel>;
};
export type EnumConversationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationStatus | Prisma.EnumConversationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConversationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumConversationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumConversationStatusFilter<$PrismaModel>;
};
export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType;
};
export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | Prisma.EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus;
};
export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
};
export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | Prisma.EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageStatusFilter<$PrismaModel>;
};
export type EnumSwipeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | Prisma.EnumSwipeActionFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeActionFilter<$PrismaModel> | $Enums.SwipeAction;
};
export type EnumSwipeSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeSource | Prisma.EnumSwipeSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeSourceFilter<$PrismaModel> | $Enums.SwipeSource;
};
export type EnumSwipeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | Prisma.EnumSwipeActionFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSwipeActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSwipeActionFilter<$PrismaModel>;
};
export type EnumSwipeSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeSource | Prisma.EnumSwipeSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeSourceWithAggregatesFilter<$PrismaModel> | $Enums.SwipeSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSwipeSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSwipeSourceFilter<$PrismaModel>;
};
export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus;
};
export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
};
export type EnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | Prisma.EnumEventCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory;
};
export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
};
export type EnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | Prisma.EnumEventCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventCategoryFilter<$PrismaModel>;
};
export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
};
export type EnumEventRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventRequestStatus | Prisma.EnumEventRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventRequestStatusFilter<$PrismaModel> | $Enums.EventRequestStatus;
};
export type EnumEventRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventRequestStatus | Prisma.EnumEventRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventRequestStatusFilter<$PrismaModel>;
};
export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender;
};
export type EnumMatchingBucketFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchingBucket | Prisma.EnumMatchingBucketFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchingBucketFilter<$PrismaModel> | $Enums.MatchingBucket;
};
export type EnumIntentionFilter<$PrismaModel = never> = {
    equals?: $Enums.Intention | Prisma.EnumIntentionFieldRefInput<$PrismaModel>;
    in?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntentionFilter<$PrismaModel> | $Enums.Intention;
};
export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type EnumReligionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | Prisma.EnumReligionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReligionNullableFilter<$PrismaModel> | $Enums.Religion | null;
};
export type EnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | Prisma.EnumEducationLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null;
};
export type EnumFrequencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFrequencyNullableFilter<$PrismaModel> | $Enums.Frequency | null;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
};
export type EnumMatchingBucketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchingBucket | Prisma.EnumMatchingBucketFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchingBucketWithAggregatesFilter<$PrismaModel> | $Enums.MatchingBucket;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMatchingBucketFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMatchingBucketFilter<$PrismaModel>;
};
export type EnumIntentionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intention | Prisma.EnumIntentionFieldRefInput<$PrismaModel>;
    in?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntentionWithAggregatesFilter<$PrismaModel> | $Enums.Intention;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIntentionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIntentionFilter<$PrismaModel>;
};
export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
export type EnumReligionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | Prisma.EnumReligionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReligionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Religion | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReligionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReligionNullableFilter<$PrismaModel>;
};
export type EnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | Prisma.EnumEducationLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEducationLevelNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEducationLevelNullableFilter<$PrismaModel>;
};
export type EnumFrequencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFrequencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Frequency | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFrequencyNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFrequencyNullableFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type EnumPhotoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoStatus | Prisma.EnumPhotoStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPhotoStatusFilter<$PrismaModel> | $Enums.PhotoStatus;
};
export type EnumPhotoRejectionReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoRejectionReason | Prisma.EnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhotoRejectionReasonNullableFilter<$PrismaModel> | $Enums.PhotoRejectionReason | null;
};
export type EnumPhotoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoStatus | Prisma.EnumPhotoStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPhotoStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhotoStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPhotoStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPhotoStatusFilter<$PrismaModel>;
};
export type EnumPhotoRejectionReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoRejectionReason | Prisma.EnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhotoRejectionReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhotoRejectionReason | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPhotoRejectionReasonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPhotoRejectionReasonNullableFilter<$PrismaModel>;
};
export type EnumReportReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportReason | Prisma.EnumReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportReasonFilter<$PrismaModel> | $Enums.ReportReason;
};
export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | Prisma.EnumReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus;
};
export type EnumModerationDecisionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationDecision | Prisma.EnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModerationDecisionNullableFilter<$PrismaModel> | $Enums.ModerationDecision | null;
};
export type EnumReportReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportReason | Prisma.EnumReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportReasonWithAggregatesFilter<$PrismaModel> | $Enums.ReportReason;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReportReasonFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReportReasonFilter<$PrismaModel>;
};
export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | Prisma.EnumReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReportStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReportStatusFilter<$PrismaModel>;
};
export type EnumModerationDecisionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationDecision | Prisma.EnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModerationDecisionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModerationDecision | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModerationDecisionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModerationDecisionNullableFilter<$PrismaModel>;
};
export type EnumModerationTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskType | Prisma.EnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskTypeFilter<$PrismaModel> | $Enums.ModerationTaskType;
};
export type EnumModerationTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskStatus | Prisma.EnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskStatusFilter<$PrismaModel> | $Enums.ModerationTaskStatus;
};
export type EnumModerationTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskType | Prisma.EnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModerationTaskType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModerationTaskTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModerationTaskTypeFilter<$PrismaModel>;
};
export type EnumModerationTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskStatus | Prisma.EnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationTaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModerationTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModerationTaskStatusFilter<$PrismaModel>;
};
export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
};
export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
};
export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType;
};
export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel;
};
export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
};
export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
};
export type EnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | Prisma.EnumActorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType;
};
export type EnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | Prisma.EnumActorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActorTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActorTypeFilter<$PrismaModel>;
};
export type EnumVerificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | Prisma.EnumVerificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationTypeFilter<$PrismaModel> | $Enums.VerificationType;
};
export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | Prisma.EnumVerificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus;
};
export type EnumVerificationFailureReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationFailureReason | Prisma.EnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVerificationFailureReasonNullableFilter<$PrismaModel> | $Enums.VerificationFailureReason | null;
};
export type EnumVerificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | Prisma.EnumVerificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVerificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVerificationTypeFilter<$PrismaModel>;
};
export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | Prisma.EnumVerificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVerificationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVerificationStatusFilter<$PrismaModel>;
};
export type EnumVerificationFailureReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationFailureReason | Prisma.EnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVerificationFailureReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.VerificationFailureReason | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVerificationFailureReasonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVerificationFailureReasonNullableFilter<$PrismaModel>;
};
export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider;
};
export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedEnumAppLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.AppLocale | Prisma.EnumAppLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppLocaleFilter<$PrismaModel> | $Enums.AppLocale;
};
export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
};
export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedEnumAppLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppLocale | Prisma.EnumAppLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppLocale[] | Prisma.ListEnumAppLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppLocaleWithAggregatesFilter<$PrismaModel> | $Enums.AppLocale;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAppLocaleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAppLocaleFilter<$PrismaModel>;
};
export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumDevicePlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | Prisma.EnumDevicePlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDevicePlatformFilter<$PrismaModel> | $Enums.DevicePlatform;
};
export type NestedEnumIntegrityVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrityVerdict | Prisma.EnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntegrityVerdictFilter<$PrismaModel> | $Enums.IntegrityVerdict;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumDevicePlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | Prisma.EnumDevicePlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DevicePlatform[] | Prisma.ListEnumDevicePlatformFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDevicePlatformWithAggregatesFilter<$PrismaModel> | $Enums.DevicePlatform;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDevicePlatformFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDevicePlatformFilter<$PrismaModel>;
};
export type NestedEnumIntegrityVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrityVerdict | Prisma.EnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.IntegrityVerdict[] | Prisma.ListEnumIntegrityVerdictFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntegrityVerdictWithAggregatesFilter<$PrismaModel> | $Enums.IntegrityVerdict;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIntegrityVerdictFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIntegrityVerdictFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumOtpChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpChannel | Prisma.EnumOtpChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpChannelFilter<$PrismaModel> | $Enums.OtpChannel;
};
export type NestedEnumOtpPurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | Prisma.EnumOtpPurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpPurposeFilter<$PrismaModel> | $Enums.OtpPurpose;
};
export type NestedEnumOtpChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpChannel | Prisma.EnumOtpChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpChannel[] | Prisma.ListEnumOtpChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpChannelWithAggregatesFilter<$PrismaModel> | $Enums.OtpChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOtpChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOtpChannelFilter<$PrismaModel>;
};
export type NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpPurpose | Prisma.EnumOtpPurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OtpPurpose[] | Prisma.ListEnumOtpPurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOtpPurposeWithAggregatesFilter<$PrismaModel> | $Enums.OtpPurpose;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOtpPurposeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOtpPurposeFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumReferralStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | Prisma.EnumReferralStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReferralStatusFilter<$PrismaModel> | $Enums.ReferralStatus;
};
export type NestedEnumReferralStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | Prisma.EnumReferralStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReferralStatus[] | Prisma.ListEnumReferralStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReferralStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReferralStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReferralStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReferralStatusFilter<$PrismaModel>;
};
export type NestedEnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | Prisma.EnumProductTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType;
};
export type NestedEnumBoostTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBoostTierNullableFilter<$PrismaModel> | $Enums.BoostTier | null;
};
export type NestedEnumSubscriptionTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSubscriptionTierNullableFilter<$PrismaModel> | $Enums.SubscriptionTier | null;
};
export type NestedEnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | Prisma.EnumProductTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProductType[] | Prisma.ListEnumProductTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProductTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProductTypeFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumBoostTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBoostTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.BoostTier | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBoostTierNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBoostTierNullableFilter<$PrismaModel>;
};
export type NestedEnumSubscriptionTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSubscriptionTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionTierNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionTierNullableFilter<$PrismaModel>;
};
export type NestedEnumPaymentProviderKindFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviderKind | Prisma.EnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentProviderKindFilter<$PrismaModel> | $Enums.PaymentProviderKind;
};
export type NestedEnumMobileMoneyOperatorNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MobileMoneyOperator | Prisma.EnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMobileMoneyOperatorNullableFilter<$PrismaModel> | $Enums.MobileMoneyOperator | null;
};
export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type NestedEnumPaymentProviderKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProviderKind | Prisma.EnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentProviderKind[] | Prisma.ListEnumPaymentProviderKindFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentProviderKindWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProviderKind;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentProviderKindFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentProviderKindFilter<$PrismaModel>;
};
export type NestedEnumMobileMoneyOperatorNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MobileMoneyOperator | Prisma.EnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MobileMoneyOperator[] | Prisma.ListEnumMobileMoneyOperatorFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMobileMoneyOperatorNullableWithAggregatesFilter<$PrismaModel> | $Enums.MobileMoneyOperator | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMobileMoneyOperatorNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMobileMoneyOperatorNullableFilter<$PrismaModel>;
};
export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type NestedEnumLedgerReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | Prisma.EnumLedgerReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerReasonFilter<$PrismaModel> | $Enums.LedgerReason;
};
export type NestedEnumLedgerReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | Prisma.EnumLedgerReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerReason[] | Prisma.ListEnumLedgerReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerReasonWithAggregatesFilter<$PrismaModel> | $Enums.LedgerReason;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerReasonFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerReasonFilter<$PrismaModel>;
};
export type NestedEnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier;
};
export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus;
};
export type NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | Prisma.EnumSubscriptionTierFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionTier[] | Prisma.ListEnumSubscriptionTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionTierFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionTierFilter<$PrismaModel>;
};
export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
};
export type NestedEnumEntitlementKeyFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementKey | Prisma.EnumEntitlementKeyFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementKeyFilter<$PrismaModel> | $Enums.EntitlementKey;
};
export type NestedEnumEntitlementSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementSource | Prisma.EnumEntitlementSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementSourceFilter<$PrismaModel> | $Enums.EntitlementSource;
};
export type NestedEnumEntitlementKeyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementKey | Prisma.EnumEntitlementKeyFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementKey[] | Prisma.ListEnumEntitlementKeyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementKeyWithAggregatesFilter<$PrismaModel> | $Enums.EntitlementKey;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEntitlementKeyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEntitlementKeyFilter<$PrismaModel>;
};
export type NestedEnumEntitlementSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntitlementSource | Prisma.EnumEntitlementSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EntitlementSource[] | Prisma.ListEnumEntitlementSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEntitlementSourceWithAggregatesFilter<$PrismaModel> | $Enums.EntitlementSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEntitlementSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEntitlementSourceFilter<$PrismaModel>;
};
export type NestedEnumBoostTierFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostTierFilter<$PrismaModel> | $Enums.BoostTier;
};
export type NestedEnumBoostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostStatus | Prisma.EnumBoostStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostStatusFilter<$PrismaModel> | $Enums.BoostStatus;
};
export type NestedEnumBoostTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostTier | Prisma.EnumBoostTierFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostTier[] | Prisma.ListEnumBoostTierFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostTierWithAggregatesFilter<$PrismaModel> | $Enums.BoostTier;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBoostTierFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBoostTierFilter<$PrismaModel>;
};
export type NestedEnumBoostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoostStatus | Prisma.EnumBoostStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoostStatus[] | Prisma.ListEnumBoostStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBoostStatusWithAggregatesFilter<$PrismaModel> | $Enums.BoostStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBoostStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBoostStatusFilter<$PrismaModel>;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumConversationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | Prisma.EnumConversationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationTypeFilter<$PrismaModel> | $Enums.ConversationType;
};
export type NestedEnumConversationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationStatus | Prisma.EnumConversationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationStatusFilter<$PrismaModel> | $Enums.ConversationStatus;
};
export type NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | Prisma.EnumConversationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationType[] | Prisma.ListEnumConversationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConversationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumConversationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumConversationTypeFilter<$PrismaModel>;
};
export type NestedEnumConversationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationStatus | Prisma.EnumConversationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ConversationStatus[] | Prisma.ListEnumConversationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumConversationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConversationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumConversationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumConversationStatusFilter<$PrismaModel>;
};
export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType;
};
export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | Prisma.EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus;
};
export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
};
export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | Prisma.EnumMessageStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageStatus[] | Prisma.ListEnumMessageStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageStatusFilter<$PrismaModel>;
};
export type NestedEnumSwipeActionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | Prisma.EnumSwipeActionFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeActionFilter<$PrismaModel> | $Enums.SwipeAction;
};
export type NestedEnumSwipeSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeSource | Prisma.EnumSwipeSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeSourceFilter<$PrismaModel> | $Enums.SwipeSource;
};
export type NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeAction | Prisma.EnumSwipeActionFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeAction[] | Prisma.ListEnumSwipeActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeActionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSwipeActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSwipeActionFilter<$PrismaModel>;
};
export type NestedEnumSwipeSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeSource | Prisma.EnumSwipeSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SwipeSource[] | Prisma.ListEnumSwipeSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSwipeSourceWithAggregatesFilter<$PrismaModel> | $Enums.SwipeSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSwipeSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSwipeSourceFilter<$PrismaModel>;
};
export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus;
};
export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | Prisma.EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchStatus[] | Prisma.ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMatchStatusFilter<$PrismaModel>;
};
export type NestedEnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | Prisma.EnumEventCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory;
};
export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
};
export type NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | Prisma.EnumEventCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventCategory[] | Prisma.ListEnumEventCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventCategoryFilter<$PrismaModel>;
};
export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
};
export type NestedEnumEventRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventRequestStatus | Prisma.EnumEventRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventRequestStatusFilter<$PrismaModel> | $Enums.EventRequestStatus;
};
export type NestedEnumEventRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventRequestStatus | Prisma.EnumEventRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventRequestStatus[] | Prisma.ListEnumEventRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventRequestStatusFilter<$PrismaModel>;
};
export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender;
};
export type NestedEnumMatchingBucketFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchingBucket | Prisma.EnumMatchingBucketFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchingBucketFilter<$PrismaModel> | $Enums.MatchingBucket;
};
export type NestedEnumIntentionFilter<$PrismaModel = never> = {
    equals?: $Enums.Intention | Prisma.EnumIntentionFieldRefInput<$PrismaModel>;
    in?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntentionFilter<$PrismaModel> | $Enums.Intention;
};
export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type NestedEnumReligionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | Prisma.EnumReligionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReligionNullableFilter<$PrismaModel> | $Enums.Religion | null;
};
export type NestedEnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | Prisma.EnumEducationLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null;
};
export type NestedEnumFrequencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFrequencyNullableFilter<$PrismaModel> | $Enums.Frequency | null;
};
export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
};
export type NestedEnumMatchingBucketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchingBucket | Prisma.EnumMatchingBucketFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchingBucket[] | Prisma.ListEnumMatchingBucketFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMatchingBucketWithAggregatesFilter<$PrismaModel> | $Enums.MatchingBucket;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMatchingBucketFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMatchingBucketFilter<$PrismaModel>;
};
export type NestedEnumIntentionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intention | Prisma.EnumIntentionFieldRefInput<$PrismaModel>;
    in?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumIntentionWithAggregatesFilter<$PrismaModel> | $Enums.Intention;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumIntentionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumIntentionFilter<$PrismaModel>;
};
export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
export type NestedEnumReligionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | Prisma.EnumReligionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReligionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Religion | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReligionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReligionNullableFilter<$PrismaModel>;
};
export type NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | Prisma.EnumEducationLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EducationLevel[] | Prisma.ListEnumEducationLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEducationLevelNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEducationLevelNullableFilter<$PrismaModel>;
};
export type NestedEnumFrequencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFrequencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Frequency | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFrequencyNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFrequencyNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedEnumPhotoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoStatus | Prisma.EnumPhotoStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPhotoStatusFilter<$PrismaModel> | $Enums.PhotoStatus;
};
export type NestedEnumPhotoRejectionReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoRejectionReason | Prisma.EnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhotoRejectionReasonNullableFilter<$PrismaModel> | $Enums.PhotoRejectionReason | null;
};
export type NestedEnumPhotoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoStatus | Prisma.EnumPhotoStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PhotoStatus[] | Prisma.ListEnumPhotoStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPhotoStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhotoStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPhotoStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPhotoStatusFilter<$PrismaModel>;
};
export type NestedEnumPhotoRejectionReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhotoRejectionReason | Prisma.EnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhotoRejectionReason[] | Prisma.ListEnumPhotoRejectionReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhotoRejectionReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhotoRejectionReason | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPhotoRejectionReasonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPhotoRejectionReasonNullableFilter<$PrismaModel>;
};
export type NestedEnumReportReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportReason | Prisma.EnumReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportReasonFilter<$PrismaModel> | $Enums.ReportReason;
};
export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | Prisma.EnumReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus;
};
export type NestedEnumModerationDecisionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationDecision | Prisma.EnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModerationDecisionNullableFilter<$PrismaModel> | $Enums.ModerationDecision | null;
};
export type NestedEnumReportReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportReason | Prisma.EnumReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportReason[] | Prisma.ListEnumReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportReasonWithAggregatesFilter<$PrismaModel> | $Enums.ReportReason;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReportReasonFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReportReasonFilter<$PrismaModel>;
};
export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | Prisma.EnumReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReportStatus[] | Prisma.ListEnumReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReportStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReportStatusFilter<$PrismaModel>;
};
export type NestedEnumModerationDecisionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationDecision | Prisma.EnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ModerationDecision[] | Prisma.ListEnumModerationDecisionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumModerationDecisionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModerationDecision | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModerationDecisionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModerationDecisionNullableFilter<$PrismaModel>;
};
export type NestedEnumModerationTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskType | Prisma.EnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskTypeFilter<$PrismaModel> | $Enums.ModerationTaskType;
};
export type NestedEnumModerationTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskStatus | Prisma.EnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskStatusFilter<$PrismaModel> | $Enums.ModerationTaskStatus;
};
export type NestedEnumModerationTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskType | Prisma.EnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskType[] | Prisma.ListEnumModerationTaskTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModerationTaskType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModerationTaskTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModerationTaskTypeFilter<$PrismaModel>;
};
export type NestedEnumModerationTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationTaskStatus | Prisma.EnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ModerationTaskStatus[] | Prisma.ListEnumModerationTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumModerationTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationTaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModerationTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModerationTaskStatusFilter<$PrismaModel>;
};
export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
};
export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | Prisma.EnumRiskLevelFieldRefInput<$PrismaModel>;
    in?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RiskLevel[] | Prisma.ListEnumRiskLevelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRiskLevelFilter<$PrismaModel>;
};
export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType;
};
export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel;
};
export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
};
export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | Prisma.EnumNotificationChannelFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationChannel[] | Prisma.ListEnumNotificationChannelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationChannelFilter<$PrismaModel>;
};
export type NestedEnumActorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | Prisma.EnumActorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActorTypeFilter<$PrismaModel> | $Enums.ActorType;
};
export type NestedEnumActorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActorType | Prisma.EnumActorTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActorType[] | Prisma.ListEnumActorTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActorType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActorTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActorTypeFilter<$PrismaModel>;
};
export type NestedEnumVerificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | Prisma.EnumVerificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationTypeFilter<$PrismaModel> | $Enums.VerificationType;
};
export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | Prisma.EnumVerificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus;
};
export type NestedEnumVerificationFailureReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationFailureReason | Prisma.EnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVerificationFailureReasonNullableFilter<$PrismaModel> | $Enums.VerificationFailureReason | null;
};
export type NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | Prisma.EnumVerificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationType[] | Prisma.ListEnumVerificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVerificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVerificationTypeFilter<$PrismaModel>;
};
export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | Prisma.EnumVerificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VerificationStatus[] | Prisma.ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVerificationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVerificationStatusFilter<$PrismaModel>;
};
export type NestedEnumVerificationFailureReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationFailureReason | Prisma.EnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VerificationFailureReason[] | Prisma.ListEnumVerificationFailureReasonFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVerificationFailureReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.VerificationFailureReason | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVerificationFailureReasonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVerificationFailureReasonNullableFilter<$PrismaModel>;
};
