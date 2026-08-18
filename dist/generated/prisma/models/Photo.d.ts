import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PhotoModel = runtime.Types.Result.DefaultSelection<Prisma.$PhotoPayload>;
export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null;
    _avg: PhotoAvgAggregateOutputType | null;
    _sum: PhotoSumAggregateOutputType | null;
    _min: PhotoMinAggregateOutputType | null;
    _max: PhotoMaxAggregateOutputType | null;
};
export type PhotoAvgAggregateOutputType = {
    position: number | null;
    width: number | null;
    height: number | null;
    bytes: number | null;
};
export type PhotoSumAggregateOutputType = {
    position: number | null;
    width: number | null;
    height: number | null;
    bytes: number | null;
};
export type PhotoMinAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    storageKey: string | null;
    position: number | null;
    status: $Enums.PhotoStatus | null;
    rejectionReason: $Enums.PhotoRejectionReason | null;
    phash: string | null;
    width: number | null;
    height: number | null;
    bytes: number | null;
    moderatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type PhotoMaxAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    storageKey: string | null;
    position: number | null;
    status: $Enums.PhotoStatus | null;
    rejectionReason: $Enums.PhotoRejectionReason | null;
    phash: string | null;
    width: number | null;
    height: number | null;
    bytes: number | null;
    moderatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type PhotoCountAggregateOutputType = {
    id: number;
    profileId: number;
    storageKey: number;
    position: number;
    status: number;
    rejectionReason: number;
    phash: number;
    width: number;
    height: number;
    bytes: number;
    moderationScores: number;
    moderatedAt: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type PhotoAvgAggregateInputType = {
    position?: true;
    width?: true;
    height?: true;
    bytes?: true;
};
export type PhotoSumAggregateInputType = {
    position?: true;
    width?: true;
    height?: true;
    bytes?: true;
};
export type PhotoMinAggregateInputType = {
    id?: true;
    profileId?: true;
    storageKey?: true;
    position?: true;
    status?: true;
    rejectionReason?: true;
    phash?: true;
    width?: true;
    height?: true;
    bytes?: true;
    moderatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type PhotoMaxAggregateInputType = {
    id?: true;
    profileId?: true;
    storageKey?: true;
    position?: true;
    status?: true;
    rejectionReason?: true;
    phash?: true;
    width?: true;
    height?: true;
    bytes?: true;
    moderatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type PhotoCountAggregateInputType = {
    id?: true;
    profileId?: true;
    storageKey?: true;
    position?: true;
    status?: true;
    rejectionReason?: true;
    phash?: true;
    width?: true;
    height?: true;
    bytes?: true;
    moderationScores?: true;
    moderatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type PhotoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PhotoWhereInput;
    orderBy?: Prisma.PhotoOrderByWithRelationInput | Prisma.PhotoOrderByWithRelationInput[];
    cursor?: Prisma.PhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PhotoCountAggregateInputType;
    _avg?: PhotoAvgAggregateInputType;
    _sum?: PhotoSumAggregateInputType;
    _min?: PhotoMinAggregateInputType;
    _max?: PhotoMaxAggregateInputType;
};
export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
    [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePhoto[P]> : Prisma.GetScalarType<T[P], AggregatePhoto[P]>;
};
export type PhotoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PhotoWhereInput;
    orderBy?: Prisma.PhotoOrderByWithAggregationInput | Prisma.PhotoOrderByWithAggregationInput[];
    by: Prisma.PhotoScalarFieldEnum[] | Prisma.PhotoScalarFieldEnum;
    having?: Prisma.PhotoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PhotoCountAggregateInputType | true;
    _avg?: PhotoAvgAggregateInputType;
    _sum?: PhotoSumAggregateInputType;
    _min?: PhotoMinAggregateInputType;
    _max?: PhotoMaxAggregateInputType;
};
export type PhotoGroupByOutputType = {
    id: string;
    profileId: string;
    storageKey: string;
    position: number;
    status: $Enums.PhotoStatus;
    rejectionReason: $Enums.PhotoRejectionReason | null;
    phash: string | null;
    width: number | null;
    height: number | null;
    bytes: number | null;
    moderationScores: runtime.JsonValue | null;
    moderatedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: PhotoCountAggregateOutputType | null;
    _avg: PhotoAvgAggregateOutputType | null;
    _sum: PhotoSumAggregateOutputType | null;
    _min: PhotoMinAggregateOutputType | null;
    _max: PhotoMaxAggregateOutputType | null;
};
export type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PhotoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PhotoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PhotoGroupByOutputType[P]>;
}>>;
export type PhotoWhereInput = {
    AND?: Prisma.PhotoWhereInput | Prisma.PhotoWhereInput[];
    OR?: Prisma.PhotoWhereInput[];
    NOT?: Prisma.PhotoWhereInput | Prisma.PhotoWhereInput[];
    id?: Prisma.UuidFilter<"Photo"> | string;
    profileId?: Prisma.UuidFilter<"Photo"> | string;
    storageKey?: Prisma.StringFilter<"Photo"> | string;
    position?: Prisma.IntFilter<"Photo"> | number;
    status?: Prisma.EnumPhotoStatusFilter<"Photo"> | $Enums.PhotoStatus;
    rejectionReason?: Prisma.EnumPhotoRejectionReasonNullableFilter<"Photo"> | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.StringNullableFilter<"Photo"> | string | null;
    width?: Prisma.IntNullableFilter<"Photo"> | number | null;
    height?: Prisma.IntNullableFilter<"Photo"> | number | null;
    bytes?: Prisma.IntNullableFilter<"Photo"> | number | null;
    moderationScores?: Prisma.JsonNullableFilter<"Photo">;
    moderatedAt?: Prisma.DateTimeNullableFilter<"Photo"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Photo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Photo"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Photo"> | Date | string | null;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    moderationTasks?: Prisma.ModerationTaskListRelationFilter;
};
export type PhotoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    phash?: Prisma.SortOrderInput | Prisma.SortOrder;
    width?: Prisma.SortOrderInput | Prisma.SortOrder;
    height?: Prisma.SortOrderInput | Prisma.SortOrder;
    bytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    moderationScores?: Prisma.SortOrderInput | Prisma.SortOrder;
    moderatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    moderationTasks?: Prisma.ModerationTaskOrderByRelationAggregateInput;
};
export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profileId_position?: Prisma.PhotoProfileIdPositionCompoundUniqueInput;
    AND?: Prisma.PhotoWhereInput | Prisma.PhotoWhereInput[];
    OR?: Prisma.PhotoWhereInput[];
    NOT?: Prisma.PhotoWhereInput | Prisma.PhotoWhereInput[];
    profileId?: Prisma.UuidFilter<"Photo"> | string;
    storageKey?: Prisma.StringFilter<"Photo"> | string;
    position?: Prisma.IntFilter<"Photo"> | number;
    status?: Prisma.EnumPhotoStatusFilter<"Photo"> | $Enums.PhotoStatus;
    rejectionReason?: Prisma.EnumPhotoRejectionReasonNullableFilter<"Photo"> | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.StringNullableFilter<"Photo"> | string | null;
    width?: Prisma.IntNullableFilter<"Photo"> | number | null;
    height?: Prisma.IntNullableFilter<"Photo"> | number | null;
    bytes?: Prisma.IntNullableFilter<"Photo"> | number | null;
    moderationScores?: Prisma.JsonNullableFilter<"Photo">;
    moderatedAt?: Prisma.DateTimeNullableFilter<"Photo"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Photo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Photo"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Photo"> | Date | string | null;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    moderationTasks?: Prisma.ModerationTaskListRelationFilter;
}, "id" | "profileId_position">;
export type PhotoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    phash?: Prisma.SortOrderInput | Prisma.SortOrder;
    width?: Prisma.SortOrderInput | Prisma.SortOrder;
    height?: Prisma.SortOrderInput | Prisma.SortOrder;
    bytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    moderationScores?: Prisma.SortOrderInput | Prisma.SortOrder;
    moderatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PhotoCountOrderByAggregateInput;
    _avg?: Prisma.PhotoAvgOrderByAggregateInput;
    _max?: Prisma.PhotoMaxOrderByAggregateInput;
    _min?: Prisma.PhotoMinOrderByAggregateInput;
    _sum?: Prisma.PhotoSumOrderByAggregateInput;
};
export type PhotoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PhotoScalarWhereWithAggregatesInput | Prisma.PhotoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PhotoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PhotoScalarWhereWithAggregatesInput | Prisma.PhotoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Photo"> | string;
    profileId?: Prisma.UuidWithAggregatesFilter<"Photo"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"Photo"> | string;
    position?: Prisma.IntWithAggregatesFilter<"Photo"> | number;
    status?: Prisma.EnumPhotoStatusWithAggregatesFilter<"Photo"> | $Enums.PhotoStatus;
    rejectionReason?: Prisma.EnumPhotoRejectionReasonNullableWithAggregatesFilter<"Photo"> | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.StringNullableWithAggregatesFilter<"Photo"> | string | null;
    width?: Prisma.IntNullableWithAggregatesFilter<"Photo"> | number | null;
    height?: Prisma.IntNullableWithAggregatesFilter<"Photo"> | number | null;
    bytes?: Prisma.IntNullableWithAggregatesFilter<"Photo"> | number | null;
    moderationScores?: Prisma.JsonNullableWithAggregatesFilter<"Photo">;
    moderatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Photo"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Photo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Photo"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Photo"> | Date | string | null;
};
export type PhotoCreateInput = {
    id?: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    profile: Prisma.ProfileCreateNestedOneWithoutPhotosInput;
    moderationTasks?: Prisma.ModerationTaskCreateNestedManyWithoutPhotoInput;
};
export type PhotoUncheckedCreateInput = {
    id?: string;
    profileId: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedCreateNestedManyWithoutPhotoInput;
};
export type PhotoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutPhotosNestedInput;
    moderationTasks?: Prisma.ModerationTaskUpdateManyWithoutPhotoNestedInput;
};
export type PhotoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedUpdateManyWithoutPhotoNestedInput;
};
export type PhotoCreateManyInput = {
    id?: string;
    profileId: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PhotoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PhotoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PhotoListRelationFilter = {
    every?: Prisma.PhotoWhereInput;
    some?: Prisma.PhotoWhereInput;
    none?: Prisma.PhotoWhereInput;
};
export type PhotoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PhotoProfileIdPositionCompoundUniqueInput = {
    profileId: string;
    position: number;
};
export type PhotoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    phash?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    bytes?: Prisma.SortOrder;
    moderationScores?: Prisma.SortOrder;
    moderatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PhotoAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    bytes?: Prisma.SortOrder;
};
export type PhotoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    phash?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    bytes?: Prisma.SortOrder;
    moderatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PhotoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    phash?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    bytes?: Prisma.SortOrder;
    moderatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PhotoSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    bytes?: Prisma.SortOrder;
};
export type PhotoNullableScalarRelationFilter = {
    is?: Prisma.PhotoWhereInput | null;
    isNot?: Prisma.PhotoWhereInput | null;
};
export type PhotoCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PhotoCreateWithoutProfileInput, Prisma.PhotoUncheckedCreateWithoutProfileInput> | Prisma.PhotoCreateWithoutProfileInput[] | Prisma.PhotoUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PhotoCreateOrConnectWithoutProfileInput | Prisma.PhotoCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PhotoCreateManyProfileInputEnvelope;
    connect?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
};
export type PhotoUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.PhotoCreateWithoutProfileInput, Prisma.PhotoUncheckedCreateWithoutProfileInput> | Prisma.PhotoCreateWithoutProfileInput[] | Prisma.PhotoUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PhotoCreateOrConnectWithoutProfileInput | Prisma.PhotoCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.PhotoCreateManyProfileInputEnvelope;
    connect?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
};
export type PhotoUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PhotoCreateWithoutProfileInput, Prisma.PhotoUncheckedCreateWithoutProfileInput> | Prisma.PhotoCreateWithoutProfileInput[] | Prisma.PhotoUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PhotoCreateOrConnectWithoutProfileInput | Prisma.PhotoCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PhotoUpsertWithWhereUniqueWithoutProfileInput | Prisma.PhotoUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PhotoCreateManyProfileInputEnvelope;
    set?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    disconnect?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    delete?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    connect?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    update?: Prisma.PhotoUpdateWithWhereUniqueWithoutProfileInput | Prisma.PhotoUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PhotoUpdateManyWithWhereWithoutProfileInput | Prisma.PhotoUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PhotoScalarWhereInput | Prisma.PhotoScalarWhereInput[];
};
export type PhotoUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PhotoCreateWithoutProfileInput, Prisma.PhotoUncheckedCreateWithoutProfileInput> | Prisma.PhotoCreateWithoutProfileInput[] | Prisma.PhotoUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.PhotoCreateOrConnectWithoutProfileInput | Prisma.PhotoCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.PhotoUpsertWithWhereUniqueWithoutProfileInput | Prisma.PhotoUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.PhotoCreateManyProfileInputEnvelope;
    set?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    disconnect?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    delete?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    connect?: Prisma.PhotoWhereUniqueInput | Prisma.PhotoWhereUniqueInput[];
    update?: Prisma.PhotoUpdateWithWhereUniqueWithoutProfileInput | Prisma.PhotoUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.PhotoUpdateManyWithWhereWithoutProfileInput | Prisma.PhotoUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.PhotoScalarWhereInput | Prisma.PhotoScalarWhereInput[];
};
export type EnumPhotoStatusFieldUpdateOperationsInput = {
    set?: $Enums.PhotoStatus;
};
export type NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput = {
    set?: $Enums.PhotoRejectionReason | null;
};
export type PhotoCreateNestedOneWithoutModerationTasksInput = {
    create?: Prisma.XOR<Prisma.PhotoCreateWithoutModerationTasksInput, Prisma.PhotoUncheckedCreateWithoutModerationTasksInput>;
    connectOrCreate?: Prisma.PhotoCreateOrConnectWithoutModerationTasksInput;
    connect?: Prisma.PhotoWhereUniqueInput;
};
export type PhotoUpdateOneWithoutModerationTasksNestedInput = {
    create?: Prisma.XOR<Prisma.PhotoCreateWithoutModerationTasksInput, Prisma.PhotoUncheckedCreateWithoutModerationTasksInput>;
    connectOrCreate?: Prisma.PhotoCreateOrConnectWithoutModerationTasksInput;
    upsert?: Prisma.PhotoUpsertWithoutModerationTasksInput;
    disconnect?: Prisma.PhotoWhereInput | boolean;
    delete?: Prisma.PhotoWhereInput | boolean;
    connect?: Prisma.PhotoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PhotoUpdateToOneWithWhereWithoutModerationTasksInput, Prisma.PhotoUpdateWithoutModerationTasksInput>, Prisma.PhotoUncheckedUpdateWithoutModerationTasksInput>;
};
export type PhotoCreateWithoutProfileInput = {
    id?: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskCreateNestedManyWithoutPhotoInput;
};
export type PhotoUncheckedCreateWithoutProfileInput = {
    id?: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedCreateNestedManyWithoutPhotoInput;
};
export type PhotoCreateOrConnectWithoutProfileInput = {
    where: Prisma.PhotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PhotoCreateWithoutProfileInput, Prisma.PhotoUncheckedCreateWithoutProfileInput>;
};
export type PhotoCreateManyProfileInputEnvelope = {
    data: Prisma.PhotoCreateManyProfileInput | Prisma.PhotoCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type PhotoUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PhotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PhotoUpdateWithoutProfileInput, Prisma.PhotoUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.PhotoCreateWithoutProfileInput, Prisma.PhotoUncheckedCreateWithoutProfileInput>;
};
export type PhotoUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.PhotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PhotoUpdateWithoutProfileInput, Prisma.PhotoUncheckedUpdateWithoutProfileInput>;
};
export type PhotoUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.PhotoScalarWhereInput;
    data: Prisma.XOR<Prisma.PhotoUpdateManyMutationInput, Prisma.PhotoUncheckedUpdateManyWithoutProfileInput>;
};
export type PhotoScalarWhereInput = {
    AND?: Prisma.PhotoScalarWhereInput | Prisma.PhotoScalarWhereInput[];
    OR?: Prisma.PhotoScalarWhereInput[];
    NOT?: Prisma.PhotoScalarWhereInput | Prisma.PhotoScalarWhereInput[];
    id?: Prisma.UuidFilter<"Photo"> | string;
    profileId?: Prisma.UuidFilter<"Photo"> | string;
    storageKey?: Prisma.StringFilter<"Photo"> | string;
    position?: Prisma.IntFilter<"Photo"> | number;
    status?: Prisma.EnumPhotoStatusFilter<"Photo"> | $Enums.PhotoStatus;
    rejectionReason?: Prisma.EnumPhotoRejectionReasonNullableFilter<"Photo"> | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.StringNullableFilter<"Photo"> | string | null;
    width?: Prisma.IntNullableFilter<"Photo"> | number | null;
    height?: Prisma.IntNullableFilter<"Photo"> | number | null;
    bytes?: Prisma.IntNullableFilter<"Photo"> | number | null;
    moderationScores?: Prisma.JsonNullableFilter<"Photo">;
    moderatedAt?: Prisma.DateTimeNullableFilter<"Photo"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Photo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Photo"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Photo"> | Date | string | null;
};
export type PhotoCreateWithoutModerationTasksInput = {
    id?: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    profile: Prisma.ProfileCreateNestedOneWithoutPhotosInput;
};
export type PhotoUncheckedCreateWithoutModerationTasksInput = {
    id?: string;
    profileId: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PhotoCreateOrConnectWithoutModerationTasksInput = {
    where: Prisma.PhotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PhotoCreateWithoutModerationTasksInput, Prisma.PhotoUncheckedCreateWithoutModerationTasksInput>;
};
export type PhotoUpsertWithoutModerationTasksInput = {
    update: Prisma.XOR<Prisma.PhotoUpdateWithoutModerationTasksInput, Prisma.PhotoUncheckedUpdateWithoutModerationTasksInput>;
    create: Prisma.XOR<Prisma.PhotoCreateWithoutModerationTasksInput, Prisma.PhotoUncheckedCreateWithoutModerationTasksInput>;
    where?: Prisma.PhotoWhereInput;
};
export type PhotoUpdateToOneWithWhereWithoutModerationTasksInput = {
    where?: Prisma.PhotoWhereInput;
    data: Prisma.XOR<Prisma.PhotoUpdateWithoutModerationTasksInput, Prisma.PhotoUncheckedUpdateWithoutModerationTasksInput>;
};
export type PhotoUpdateWithoutModerationTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutPhotosNestedInput;
};
export type PhotoUncheckedUpdateWithoutModerationTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PhotoCreateManyProfileInput = {
    id?: string;
    storageKey: string;
    position: number;
    status?: $Enums.PhotoStatus;
    rejectionReason?: $Enums.PhotoRejectionReason | null;
    phash?: string | null;
    width?: number | null;
    height?: number | null;
    bytes?: number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PhotoUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUpdateManyWithoutPhotoNestedInput;
};
export type PhotoUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedUpdateManyWithoutPhotoNestedInput;
};
export type PhotoUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPhotoStatusFieldUpdateOperationsInput | $Enums.PhotoStatus;
    rejectionReason?: Prisma.NullableEnumPhotoRejectionReasonFieldUpdateOperationsInput | $Enums.PhotoRejectionReason | null;
    phash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    moderationScores?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    moderatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PhotoCountOutputType = {
    moderationTasks: number;
};
export type PhotoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moderationTasks?: boolean | PhotoCountOutputTypeCountModerationTasksArgs;
};
export type PhotoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoCountOutputTypeSelect<ExtArgs> | null;
};
export type PhotoCountOutputTypeCountModerationTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModerationTaskWhereInput;
};
export type PhotoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    storageKey?: boolean;
    position?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    phash?: boolean;
    width?: boolean;
    height?: boolean;
    bytes?: boolean;
    moderationScores?: boolean;
    moderatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    moderationTasks?: boolean | Prisma.Photo$moderationTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.PhotoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["photo"]>;
export type PhotoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    storageKey?: boolean;
    position?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    phash?: boolean;
    width?: boolean;
    height?: boolean;
    bytes?: boolean;
    moderationScores?: boolean;
    moderatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["photo"]>;
export type PhotoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    storageKey?: boolean;
    position?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    phash?: boolean;
    width?: boolean;
    height?: boolean;
    bytes?: boolean;
    moderationScores?: boolean;
    moderatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["photo"]>;
export type PhotoSelectScalar = {
    id?: boolean;
    profileId?: boolean;
    storageKey?: boolean;
    position?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    phash?: boolean;
    width?: boolean;
    height?: boolean;
    bytes?: boolean;
    moderationScores?: boolean;
    moderatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type PhotoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profileId" | "storageKey" | "position" | "status" | "rejectionReason" | "phash" | "width" | "height" | "bytes" | "moderationScores" | "moderatedAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["photo"]>;
export type PhotoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    moderationTasks?: boolean | Prisma.Photo$moderationTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.PhotoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PhotoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $PhotoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Photo";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
        moderationTasks: Prisma.$ModerationTaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profileId: string;
        storageKey: string;
        position: number;
        status: $Enums.PhotoStatus;
        rejectionReason: $Enums.PhotoRejectionReason | null;
        phash: string | null;
        width: number | null;
        height: number | null;
        bytes: number | null;
        moderationScores: runtime.JsonValue | null;
        moderatedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["photo"]>;
    composites: {};
};
export type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PhotoPayload, S>;
export type PhotoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PhotoCountAggregateInputType | true;
};
export interface PhotoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Photo'];
        meta: {
            name: 'Photo';
        };
    };
    findUnique<T extends PhotoFindUniqueArgs>(args: Prisma.SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PhotoFindFirstArgs>(args?: Prisma.SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PhotoFindManyArgs>(args?: Prisma.SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PhotoCreateArgs>(args: Prisma.SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PhotoCreateManyArgs>(args?: Prisma.SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PhotoDeleteArgs>(args: Prisma.SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PhotoUpdateArgs>(args: Prisma.SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PhotoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PhotoUpdateManyArgs>(args: Prisma.SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PhotoUpsertArgs>(args: Prisma.SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PhotoCountArgs>(args?: Prisma.Subset<T, PhotoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PhotoCountAggregateOutputType> : number>;
    aggregate<T extends PhotoAggregateArgs>(args: Prisma.Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>;
    groupBy<T extends PhotoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PhotoGroupByArgs['orderBy'];
    } : {
        orderBy?: PhotoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PhotoFieldRefs;
}
export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    moderationTasks<T extends Prisma.Photo$moderationTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Photo$moderationTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PhotoFieldRefs {
    readonly id: Prisma.FieldRef<"Photo", 'String'>;
    readonly profileId: Prisma.FieldRef<"Photo", 'String'>;
    readonly storageKey: Prisma.FieldRef<"Photo", 'String'>;
    readonly position: Prisma.FieldRef<"Photo", 'Int'>;
    readonly status: Prisma.FieldRef<"Photo", 'PhotoStatus'>;
    readonly rejectionReason: Prisma.FieldRef<"Photo", 'PhotoRejectionReason'>;
    readonly phash: Prisma.FieldRef<"Photo", 'String'>;
    readonly width: Prisma.FieldRef<"Photo", 'Int'>;
    readonly height: Prisma.FieldRef<"Photo", 'Int'>;
    readonly bytes: Prisma.FieldRef<"Photo", 'Int'>;
    readonly moderationScores: Prisma.FieldRef<"Photo", 'Json'>;
    readonly moderatedAt: Prisma.FieldRef<"Photo", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Photo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Photo", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Photo", 'DateTime'>;
}
export type PhotoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where: Prisma.PhotoWhereUniqueInput;
};
export type PhotoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where: Prisma.PhotoWhereUniqueInput;
};
export type PhotoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where?: Prisma.PhotoWhereInput;
    orderBy?: Prisma.PhotoOrderByWithRelationInput | Prisma.PhotoOrderByWithRelationInput[];
    cursor?: Prisma.PhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PhotoScalarFieldEnum | Prisma.PhotoScalarFieldEnum[];
};
export type PhotoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where?: Prisma.PhotoWhereInput;
    orderBy?: Prisma.PhotoOrderByWithRelationInput | Prisma.PhotoOrderByWithRelationInput[];
    cursor?: Prisma.PhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PhotoScalarFieldEnum | Prisma.PhotoScalarFieldEnum[];
};
export type PhotoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where?: Prisma.PhotoWhereInput;
    orderBy?: Prisma.PhotoOrderByWithRelationInput | Prisma.PhotoOrderByWithRelationInput[];
    cursor?: Prisma.PhotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PhotoScalarFieldEnum | Prisma.PhotoScalarFieldEnum[];
};
export type PhotoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PhotoCreateInput, Prisma.PhotoUncheckedCreateInput>;
};
export type PhotoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PhotoCreateManyInput | Prisma.PhotoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PhotoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    data: Prisma.PhotoCreateManyInput | Prisma.PhotoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PhotoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PhotoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PhotoUpdateInput, Prisma.PhotoUncheckedUpdateInput>;
    where: Prisma.PhotoWhereUniqueInput;
};
export type PhotoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PhotoUpdateManyMutationInput, Prisma.PhotoUncheckedUpdateManyInput>;
    where?: Prisma.PhotoWhereInput;
    limit?: number;
};
export type PhotoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PhotoUpdateManyMutationInput, Prisma.PhotoUncheckedUpdateManyInput>;
    where?: Prisma.PhotoWhereInput;
    limit?: number;
    include?: Prisma.PhotoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PhotoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where: Prisma.PhotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PhotoCreateInput, Prisma.PhotoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PhotoUpdateInput, Prisma.PhotoUncheckedUpdateInput>;
};
export type PhotoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where: Prisma.PhotoWhereUniqueInput;
};
export type PhotoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PhotoWhereInput;
    limit?: number;
};
export type Photo$moderationTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    where?: Prisma.ModerationTaskWhereInput;
    orderBy?: Prisma.ModerationTaskOrderByWithRelationInput | Prisma.ModerationTaskOrderByWithRelationInput[];
    cursor?: Prisma.ModerationTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModerationTaskScalarFieldEnum | Prisma.ModerationTaskScalarFieldEnum[];
};
export type PhotoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
};
