import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PreferenceModel = runtime.Types.Result.DefaultSelection<Prisma.$PreferencePayload>;
export type AggregatePreference = {
    _count: PreferenceCountAggregateOutputType | null;
    _avg: PreferenceAvgAggregateOutputType | null;
    _sum: PreferenceSumAggregateOutputType | null;
    _min: PreferenceMinAggregateOutputType | null;
    _max: PreferenceMaxAggregateOutputType | null;
};
export type PreferenceAvgAggregateOutputType = {
    minAge: number | null;
    maxAge: number | null;
    maxDistanceKm: number | null;
    minHeightCm: number | null;
    maxHeightCm: number | null;
};
export type PreferenceSumAggregateOutputType = {
    minAge: number | null;
    maxAge: number | null;
    maxDistanceKm: number | null;
    minHeightCm: number | null;
    maxHeightCm: number | null;
};
export type PreferenceMinAggregateOutputType = {
    userId: string | null;
    minAge: number | null;
    maxAge: number | null;
    maxDistanceKm: number | null;
    minHeightCm: number | null;
    maxHeightCm: number | null;
    hasChildren: boolean | null;
    verifiedOnly: boolean | null;
    allowRadiusExpansion: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PreferenceMaxAggregateOutputType = {
    userId: string | null;
    minAge: number | null;
    maxAge: number | null;
    maxDistanceKm: number | null;
    minHeightCm: number | null;
    maxHeightCm: number | null;
    hasChildren: boolean | null;
    verifiedOnly: boolean | null;
    allowRadiusExpansion: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PreferenceCountAggregateOutputType = {
    userId: number;
    minAge: number;
    maxAge: number;
    maxDistanceKm: number;
    intentionFilter: number;
    religionFilter: number;
    minHeightCm: number;
    maxHeightCm: number;
    hasChildren: number;
    smokingFilter: number;
    drinkingFilter: number;
    languagesFilter: number;
    verifiedOnly: number;
    allowRadiusExpansion: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PreferenceAvgAggregateInputType = {
    minAge?: true;
    maxAge?: true;
    maxDistanceKm?: true;
    minHeightCm?: true;
    maxHeightCm?: true;
};
export type PreferenceSumAggregateInputType = {
    minAge?: true;
    maxAge?: true;
    maxDistanceKm?: true;
    minHeightCm?: true;
    maxHeightCm?: true;
};
export type PreferenceMinAggregateInputType = {
    userId?: true;
    minAge?: true;
    maxAge?: true;
    maxDistanceKm?: true;
    minHeightCm?: true;
    maxHeightCm?: true;
    hasChildren?: true;
    verifiedOnly?: true;
    allowRadiusExpansion?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PreferenceMaxAggregateInputType = {
    userId?: true;
    minAge?: true;
    maxAge?: true;
    maxDistanceKm?: true;
    minHeightCm?: true;
    maxHeightCm?: true;
    hasChildren?: true;
    verifiedOnly?: true;
    allowRadiusExpansion?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PreferenceCountAggregateInputType = {
    userId?: true;
    minAge?: true;
    maxAge?: true;
    maxDistanceKm?: true;
    intentionFilter?: true;
    religionFilter?: true;
    minHeightCm?: true;
    maxHeightCm?: true;
    hasChildren?: true;
    smokingFilter?: true;
    drinkingFilter?: true;
    languagesFilter?: true;
    verifiedOnly?: true;
    allowRadiusExpansion?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PreferenceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferenceWhereInput;
    orderBy?: Prisma.PreferenceOrderByWithRelationInput | Prisma.PreferenceOrderByWithRelationInput[];
    cursor?: Prisma.PreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PreferenceCountAggregateInputType;
    _avg?: PreferenceAvgAggregateInputType;
    _sum?: PreferenceSumAggregateInputType;
    _min?: PreferenceMinAggregateInputType;
    _max?: PreferenceMaxAggregateInputType;
};
export type GetPreferenceAggregateType<T extends PreferenceAggregateArgs> = {
    [P in keyof T & keyof AggregatePreference]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePreference[P]> : Prisma.GetScalarType<T[P], AggregatePreference[P]>;
};
export type PreferenceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferenceWhereInput;
    orderBy?: Prisma.PreferenceOrderByWithAggregationInput | Prisma.PreferenceOrderByWithAggregationInput[];
    by: Prisma.PreferenceScalarFieldEnum[] | Prisma.PreferenceScalarFieldEnum;
    having?: Prisma.PreferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PreferenceCountAggregateInputType | true;
    _avg?: PreferenceAvgAggregateInputType;
    _sum?: PreferenceSumAggregateInputType;
    _min?: PreferenceMinAggregateInputType;
    _max?: PreferenceMaxAggregateInputType;
};
export type PreferenceGroupByOutputType = {
    userId: string;
    minAge: number;
    maxAge: number;
    maxDistanceKm: number;
    intentionFilter: $Enums.Intention[];
    religionFilter: $Enums.Religion[];
    minHeightCm: number | null;
    maxHeightCm: number | null;
    hasChildren: boolean | null;
    smokingFilter: $Enums.Frequency[];
    drinkingFilter: $Enums.Frequency[];
    languagesFilter: string[];
    verifiedOnly: boolean;
    allowRadiusExpansion: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PreferenceCountAggregateOutputType | null;
    _avg: PreferenceAvgAggregateOutputType | null;
    _sum: PreferenceSumAggregateOutputType | null;
    _min: PreferenceMinAggregateOutputType | null;
    _max: PreferenceMaxAggregateOutputType | null;
};
export type GetPreferenceGroupByPayload<T extends PreferenceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PreferenceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PreferenceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PreferenceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PreferenceGroupByOutputType[P]>;
}>>;
export type PreferenceWhereInput = {
    AND?: Prisma.PreferenceWhereInput | Prisma.PreferenceWhereInput[];
    OR?: Prisma.PreferenceWhereInput[];
    NOT?: Prisma.PreferenceWhereInput | Prisma.PreferenceWhereInput[];
    userId?: Prisma.UuidFilter<"Preference"> | string;
    minAge?: Prisma.IntFilter<"Preference"> | number;
    maxAge?: Prisma.IntFilter<"Preference"> | number;
    maxDistanceKm?: Prisma.IntFilter<"Preference"> | number;
    intentionFilter?: Prisma.EnumIntentionNullableListFilter<"Preference">;
    religionFilter?: Prisma.EnumReligionNullableListFilter<"Preference">;
    minHeightCm?: Prisma.IntNullableFilter<"Preference"> | number | null;
    maxHeightCm?: Prisma.IntNullableFilter<"Preference"> | number | null;
    hasChildren?: Prisma.BoolNullableFilter<"Preference"> | boolean | null;
    smokingFilter?: Prisma.EnumFrequencyNullableListFilter<"Preference">;
    drinkingFilter?: Prisma.EnumFrequencyNullableListFilter<"Preference">;
    languagesFilter?: Prisma.StringNullableListFilter<"Preference">;
    verifiedOnly?: Prisma.BoolFilter<"Preference"> | boolean;
    allowRadiusExpansion?: Prisma.BoolFilter<"Preference"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Preference"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Preference"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PreferenceOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    minAge?: Prisma.SortOrder;
    maxAge?: Prisma.SortOrder;
    maxDistanceKm?: Prisma.SortOrder;
    intentionFilter?: Prisma.SortOrder;
    religionFilter?: Prisma.SortOrder;
    minHeightCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxHeightCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasChildren?: Prisma.SortOrderInput | Prisma.SortOrder;
    smokingFilter?: Prisma.SortOrder;
    drinkingFilter?: Prisma.SortOrder;
    languagesFilter?: Prisma.SortOrder;
    verifiedOnly?: Prisma.SortOrder;
    allowRadiusExpansion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PreferenceWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.PreferenceWhereInput | Prisma.PreferenceWhereInput[];
    OR?: Prisma.PreferenceWhereInput[];
    NOT?: Prisma.PreferenceWhereInput | Prisma.PreferenceWhereInput[];
    minAge?: Prisma.IntFilter<"Preference"> | number;
    maxAge?: Prisma.IntFilter<"Preference"> | number;
    maxDistanceKm?: Prisma.IntFilter<"Preference"> | number;
    intentionFilter?: Prisma.EnumIntentionNullableListFilter<"Preference">;
    religionFilter?: Prisma.EnumReligionNullableListFilter<"Preference">;
    minHeightCm?: Prisma.IntNullableFilter<"Preference"> | number | null;
    maxHeightCm?: Prisma.IntNullableFilter<"Preference"> | number | null;
    hasChildren?: Prisma.BoolNullableFilter<"Preference"> | boolean | null;
    smokingFilter?: Prisma.EnumFrequencyNullableListFilter<"Preference">;
    drinkingFilter?: Prisma.EnumFrequencyNullableListFilter<"Preference">;
    languagesFilter?: Prisma.StringNullableListFilter<"Preference">;
    verifiedOnly?: Prisma.BoolFilter<"Preference"> | boolean;
    allowRadiusExpansion?: Prisma.BoolFilter<"Preference"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Preference"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Preference"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId">;
export type PreferenceOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    minAge?: Prisma.SortOrder;
    maxAge?: Prisma.SortOrder;
    maxDistanceKm?: Prisma.SortOrder;
    intentionFilter?: Prisma.SortOrder;
    religionFilter?: Prisma.SortOrder;
    minHeightCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxHeightCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasChildren?: Prisma.SortOrderInput | Prisma.SortOrder;
    smokingFilter?: Prisma.SortOrder;
    drinkingFilter?: Prisma.SortOrder;
    languagesFilter?: Prisma.SortOrder;
    verifiedOnly?: Prisma.SortOrder;
    allowRadiusExpansion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PreferenceCountOrderByAggregateInput;
    _avg?: Prisma.PreferenceAvgOrderByAggregateInput;
    _max?: Prisma.PreferenceMaxOrderByAggregateInput;
    _min?: Prisma.PreferenceMinOrderByAggregateInput;
    _sum?: Prisma.PreferenceSumOrderByAggregateInput;
};
export type PreferenceScalarWhereWithAggregatesInput = {
    AND?: Prisma.PreferenceScalarWhereWithAggregatesInput | Prisma.PreferenceScalarWhereWithAggregatesInput[];
    OR?: Prisma.PreferenceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PreferenceScalarWhereWithAggregatesInput | Prisma.PreferenceScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"Preference"> | string;
    minAge?: Prisma.IntWithAggregatesFilter<"Preference"> | number;
    maxAge?: Prisma.IntWithAggregatesFilter<"Preference"> | number;
    maxDistanceKm?: Prisma.IntWithAggregatesFilter<"Preference"> | number;
    intentionFilter?: Prisma.EnumIntentionNullableListFilter<"Preference">;
    religionFilter?: Prisma.EnumReligionNullableListFilter<"Preference">;
    minHeightCm?: Prisma.IntNullableWithAggregatesFilter<"Preference"> | number | null;
    maxHeightCm?: Prisma.IntNullableWithAggregatesFilter<"Preference"> | number | null;
    hasChildren?: Prisma.BoolNullableWithAggregatesFilter<"Preference"> | boolean | null;
    smokingFilter?: Prisma.EnumFrequencyNullableListFilter<"Preference">;
    drinkingFilter?: Prisma.EnumFrequencyNullableListFilter<"Preference">;
    languagesFilter?: Prisma.StringNullableListFilter<"Preference">;
    verifiedOnly?: Prisma.BoolWithAggregatesFilter<"Preference"> | boolean;
    allowRadiusExpansion?: Prisma.BoolWithAggregatesFilter<"Preference"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Preference"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Preference"> | Date | string;
};
export type PreferenceCreateInput = {
    minAge?: number;
    maxAge?: number;
    maxDistanceKm?: number;
    intentionFilter?: Prisma.PreferenceCreateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceCreatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: number | null;
    maxHeightCm?: number | null;
    hasChildren?: boolean | null;
    smokingFilter?: Prisma.PreferenceCreatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceCreatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceCreatelanguagesFilterInput | string[];
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPreferenceInput;
};
export type PreferenceUncheckedCreateInput = {
    userId: string;
    minAge?: number;
    maxAge?: number;
    maxDistanceKm?: number;
    intentionFilter?: Prisma.PreferenceCreateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceCreatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: number | null;
    maxHeightCm?: number | null;
    hasChildren?: boolean | null;
    smokingFilter?: Prisma.PreferenceCreatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceCreatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceCreatelanguagesFilterInput | string[];
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceUpdateInput = {
    minAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxDistanceKm?: Prisma.IntFieldUpdateOperationsInput | number;
    intentionFilter?: Prisma.PreferenceUpdateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceUpdatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    maxHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasChildren?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    smokingFilter?: Prisma.PreferenceUpdatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceUpdatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceUpdatelanguagesFilterInput | string[];
    verifiedOnly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allowRadiusExpansion?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPreferenceNestedInput;
};
export type PreferenceUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    minAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxDistanceKm?: Prisma.IntFieldUpdateOperationsInput | number;
    intentionFilter?: Prisma.PreferenceUpdateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceUpdatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    maxHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasChildren?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    smokingFilter?: Prisma.PreferenceUpdatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceUpdatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceUpdatelanguagesFilterInput | string[];
    verifiedOnly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allowRadiusExpansion?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceCreateManyInput = {
    userId: string;
    minAge?: number;
    maxAge?: number;
    maxDistanceKm?: number;
    intentionFilter?: Prisma.PreferenceCreateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceCreatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: number | null;
    maxHeightCm?: number | null;
    hasChildren?: boolean | null;
    smokingFilter?: Prisma.PreferenceCreatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceCreatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceCreatelanguagesFilterInput | string[];
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceUpdateManyMutationInput = {
    minAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxDistanceKm?: Prisma.IntFieldUpdateOperationsInput | number;
    intentionFilter?: Prisma.PreferenceUpdateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceUpdatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    maxHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasChildren?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    smokingFilter?: Prisma.PreferenceUpdatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceUpdatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceUpdatelanguagesFilterInput | string[];
    verifiedOnly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allowRadiusExpansion?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    minAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxDistanceKm?: Prisma.IntFieldUpdateOperationsInput | number;
    intentionFilter?: Prisma.PreferenceUpdateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceUpdatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    maxHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasChildren?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    smokingFilter?: Prisma.PreferenceUpdatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceUpdatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceUpdatelanguagesFilterInput | string[];
    verifiedOnly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allowRadiusExpansion?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceNullableScalarRelationFilter = {
    is?: Prisma.PreferenceWhereInput | null;
    isNot?: Prisma.PreferenceWhereInput | null;
};
export type EnumIntentionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Intention | Prisma.EnumIntentionFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Intention[] | Prisma.ListEnumIntentionFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type EnumReligionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Religion | Prisma.EnumReligionFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Religion[] | Prisma.ListEnumReligionFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type EnumFrequencyNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type PreferenceCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    minAge?: Prisma.SortOrder;
    maxAge?: Prisma.SortOrder;
    maxDistanceKm?: Prisma.SortOrder;
    intentionFilter?: Prisma.SortOrder;
    religionFilter?: Prisma.SortOrder;
    minHeightCm?: Prisma.SortOrder;
    maxHeightCm?: Prisma.SortOrder;
    hasChildren?: Prisma.SortOrder;
    smokingFilter?: Prisma.SortOrder;
    drinkingFilter?: Prisma.SortOrder;
    languagesFilter?: Prisma.SortOrder;
    verifiedOnly?: Prisma.SortOrder;
    allowRadiusExpansion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferenceAvgOrderByAggregateInput = {
    minAge?: Prisma.SortOrder;
    maxAge?: Prisma.SortOrder;
    maxDistanceKm?: Prisma.SortOrder;
    minHeightCm?: Prisma.SortOrder;
    maxHeightCm?: Prisma.SortOrder;
};
export type PreferenceMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    minAge?: Prisma.SortOrder;
    maxAge?: Prisma.SortOrder;
    maxDistanceKm?: Prisma.SortOrder;
    minHeightCm?: Prisma.SortOrder;
    maxHeightCm?: Prisma.SortOrder;
    hasChildren?: Prisma.SortOrder;
    verifiedOnly?: Prisma.SortOrder;
    allowRadiusExpansion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferenceMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    minAge?: Prisma.SortOrder;
    maxAge?: Prisma.SortOrder;
    maxDistanceKm?: Prisma.SortOrder;
    minHeightCm?: Prisma.SortOrder;
    maxHeightCm?: Prisma.SortOrder;
    hasChildren?: Prisma.SortOrder;
    verifiedOnly?: Prisma.SortOrder;
    allowRadiusExpansion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PreferenceSumOrderByAggregateInput = {
    minAge?: Prisma.SortOrder;
    maxAge?: Prisma.SortOrder;
    maxDistanceKm?: Prisma.SortOrder;
    minHeightCm?: Prisma.SortOrder;
    maxHeightCm?: Prisma.SortOrder;
};
export type PreferenceCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PreferenceCreateWithoutUserInput, Prisma.PreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PreferenceCreateOrConnectWithoutUserInput;
    connect?: Prisma.PreferenceWhereUniqueInput;
};
export type PreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PreferenceCreateWithoutUserInput, Prisma.PreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PreferenceCreateOrConnectWithoutUserInput;
    connect?: Prisma.PreferenceWhereUniqueInput;
};
export type PreferenceUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PreferenceCreateWithoutUserInput, Prisma.PreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PreferenceCreateOrConnectWithoutUserInput;
    upsert?: Prisma.PreferenceUpsertWithoutUserInput;
    disconnect?: Prisma.PreferenceWhereInput | boolean;
    delete?: Prisma.PreferenceWhereInput | boolean;
    connect?: Prisma.PreferenceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PreferenceUpdateToOneWithWhereWithoutUserInput, Prisma.PreferenceUpdateWithoutUserInput>, Prisma.PreferenceUncheckedUpdateWithoutUserInput>;
};
export type PreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PreferenceCreateWithoutUserInput, Prisma.PreferenceUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PreferenceCreateOrConnectWithoutUserInput;
    upsert?: Prisma.PreferenceUpsertWithoutUserInput;
    disconnect?: Prisma.PreferenceWhereInput | boolean;
    delete?: Prisma.PreferenceWhereInput | boolean;
    connect?: Prisma.PreferenceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PreferenceUpdateToOneWithWhereWithoutUserInput, Prisma.PreferenceUpdateWithoutUserInput>, Prisma.PreferenceUncheckedUpdateWithoutUserInput>;
};
export type PreferenceCreateintentionFilterInput = {
    set: $Enums.Intention[];
};
export type PreferenceCreatereligionFilterInput = {
    set: $Enums.Religion[];
};
export type PreferenceCreatesmokingFilterInput = {
    set: $Enums.Frequency[];
};
export type PreferenceCreatedrinkingFilterInput = {
    set: $Enums.Frequency[];
};
export type PreferenceCreatelanguagesFilterInput = {
    set: string[];
};
export type PreferenceUpdateintentionFilterInput = {
    set?: $Enums.Intention[];
    push?: $Enums.Intention | $Enums.Intention[];
};
export type PreferenceUpdatereligionFilterInput = {
    set?: $Enums.Religion[];
    push?: $Enums.Religion | $Enums.Religion[];
};
export type PreferenceUpdatesmokingFilterInput = {
    set?: $Enums.Frequency[];
    push?: $Enums.Frequency | $Enums.Frequency[];
};
export type PreferenceUpdatedrinkingFilterInput = {
    set?: $Enums.Frequency[];
    push?: $Enums.Frequency | $Enums.Frequency[];
};
export type PreferenceUpdatelanguagesFilterInput = {
    set?: string[];
    push?: string | string[];
};
export type PreferenceCreateWithoutUserInput = {
    minAge?: number;
    maxAge?: number;
    maxDistanceKm?: number;
    intentionFilter?: Prisma.PreferenceCreateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceCreatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: number | null;
    maxHeightCm?: number | null;
    hasChildren?: boolean | null;
    smokingFilter?: Prisma.PreferenceCreatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceCreatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceCreatelanguagesFilterInput | string[];
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceUncheckedCreateWithoutUserInput = {
    minAge?: number;
    maxAge?: number;
    maxDistanceKm?: number;
    intentionFilter?: Prisma.PreferenceCreateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceCreatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: number | null;
    maxHeightCm?: number | null;
    hasChildren?: boolean | null;
    smokingFilter?: Prisma.PreferenceCreatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceCreatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceCreatelanguagesFilterInput | string[];
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PreferenceCreateOrConnectWithoutUserInput = {
    where: Prisma.PreferenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreferenceCreateWithoutUserInput, Prisma.PreferenceUncheckedCreateWithoutUserInput>;
};
export type PreferenceUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.PreferenceUpdateWithoutUserInput, Prisma.PreferenceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PreferenceCreateWithoutUserInput, Prisma.PreferenceUncheckedCreateWithoutUserInput>;
    where?: Prisma.PreferenceWhereInput;
};
export type PreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.PreferenceWhereInput;
    data: Prisma.XOR<Prisma.PreferenceUpdateWithoutUserInput, Prisma.PreferenceUncheckedUpdateWithoutUserInput>;
};
export type PreferenceUpdateWithoutUserInput = {
    minAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxDistanceKm?: Prisma.IntFieldUpdateOperationsInput | number;
    intentionFilter?: Prisma.PreferenceUpdateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceUpdatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    maxHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasChildren?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    smokingFilter?: Prisma.PreferenceUpdatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceUpdatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceUpdatelanguagesFilterInput | string[];
    verifiedOnly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allowRadiusExpansion?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceUncheckedUpdateWithoutUserInput = {
    minAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxAge?: Prisma.IntFieldUpdateOperationsInput | number;
    maxDistanceKm?: Prisma.IntFieldUpdateOperationsInput | number;
    intentionFilter?: Prisma.PreferenceUpdateintentionFilterInput | $Enums.Intention[];
    religionFilter?: Prisma.PreferenceUpdatereligionFilterInput | $Enums.Religion[];
    minHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    maxHeightCm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hasChildren?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    smokingFilter?: Prisma.PreferenceUpdatesmokingFilterInput | $Enums.Frequency[];
    drinkingFilter?: Prisma.PreferenceUpdatedrinkingFilterInput | $Enums.Frequency[];
    languagesFilter?: Prisma.PreferenceUpdatelanguagesFilterInput | string[];
    verifiedOnly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allowRadiusExpansion?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PreferenceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    minAge?: boolean;
    maxAge?: boolean;
    maxDistanceKm?: boolean;
    intentionFilter?: boolean;
    religionFilter?: boolean;
    minHeightCm?: boolean;
    maxHeightCm?: boolean;
    hasChildren?: boolean;
    smokingFilter?: boolean;
    drinkingFilter?: boolean;
    languagesFilter?: boolean;
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preference"]>;
export type PreferenceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    minAge?: boolean;
    maxAge?: boolean;
    maxDistanceKm?: boolean;
    intentionFilter?: boolean;
    religionFilter?: boolean;
    minHeightCm?: boolean;
    maxHeightCm?: boolean;
    hasChildren?: boolean;
    smokingFilter?: boolean;
    drinkingFilter?: boolean;
    languagesFilter?: boolean;
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preference"]>;
export type PreferenceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    minAge?: boolean;
    maxAge?: boolean;
    maxDistanceKm?: boolean;
    intentionFilter?: boolean;
    religionFilter?: boolean;
    minHeightCm?: boolean;
    maxHeightCm?: boolean;
    hasChildren?: boolean;
    smokingFilter?: boolean;
    drinkingFilter?: boolean;
    languagesFilter?: boolean;
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["preference"]>;
export type PreferenceSelectScalar = {
    userId?: boolean;
    minAge?: boolean;
    maxAge?: boolean;
    maxDistanceKm?: boolean;
    intentionFilter?: boolean;
    religionFilter?: boolean;
    minHeightCm?: boolean;
    maxHeightCm?: boolean;
    hasChildren?: boolean;
    smokingFilter?: boolean;
    drinkingFilter?: boolean;
    languagesFilter?: boolean;
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PreferenceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "minAge" | "maxAge" | "maxDistanceKm" | "intentionFilter" | "religionFilter" | "minHeightCm" | "maxHeightCm" | "hasChildren" | "smokingFilter" | "drinkingFilter" | "languagesFilter" | "verifiedOnly" | "allowRadiusExpansion" | "createdAt" | "updatedAt", ExtArgs["result"]["preference"]>;
export type PreferenceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PreferenceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PreferenceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PreferencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Preference";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        minAge: number;
        maxAge: number;
        maxDistanceKm: number;
        intentionFilter: $Enums.Intention[];
        religionFilter: $Enums.Religion[];
        minHeightCm: number | null;
        maxHeightCm: number | null;
        hasChildren: boolean | null;
        smokingFilter: $Enums.Frequency[];
        drinkingFilter: $Enums.Frequency[];
        languagesFilter: string[];
        verifiedOnly: boolean;
        allowRadiusExpansion: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["preference"]>;
    composites: {};
};
export type PreferenceGetPayload<S extends boolean | null | undefined | PreferenceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PreferencePayload, S>;
export type PreferenceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PreferenceCountAggregateInputType | true;
};
export interface PreferenceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Preference'];
        meta: {
            name: 'Preference';
        };
    };
    findUnique<T extends PreferenceFindUniqueArgs>(args: Prisma.SelectSubset<T, PreferenceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PreferenceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PreferenceFindFirstArgs>(args?: Prisma.SelectSubset<T, PreferenceFindFirstArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PreferenceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PreferenceFindManyArgs>(args?: Prisma.SelectSubset<T, PreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PreferenceCreateArgs>(args: Prisma.SelectSubset<T, PreferenceCreateArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PreferenceCreateManyArgs>(args?: Prisma.SelectSubset<T, PreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PreferenceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PreferenceDeleteArgs>(args: Prisma.SelectSubset<T, PreferenceDeleteArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PreferenceUpdateArgs>(args: Prisma.SelectSubset<T, PreferenceUpdateArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PreferenceDeleteManyArgs>(args?: Prisma.SelectSubset<T, PreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PreferenceUpdateManyArgs>(args: Prisma.SelectSubset<T, PreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PreferenceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PreferenceUpsertArgs>(args: Prisma.SelectSubset<T, PreferenceUpsertArgs<ExtArgs>>): Prisma.Prisma__PreferenceClient<runtime.Types.Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PreferenceCountArgs>(args?: Prisma.Subset<T, PreferenceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PreferenceCountAggregateOutputType> : number>;
    aggregate<T extends PreferenceAggregateArgs>(args: Prisma.Subset<T, PreferenceAggregateArgs>): Prisma.PrismaPromise<GetPreferenceAggregateType<T>>;
    groupBy<T extends PreferenceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PreferenceGroupByArgs['orderBy'];
    } : {
        orderBy?: PreferenceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PreferenceFieldRefs;
}
export interface Prisma__PreferenceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PreferenceFieldRefs {
    readonly userId: Prisma.FieldRef<"Preference", 'String'>;
    readonly minAge: Prisma.FieldRef<"Preference", 'Int'>;
    readonly maxAge: Prisma.FieldRef<"Preference", 'Int'>;
    readonly maxDistanceKm: Prisma.FieldRef<"Preference", 'Int'>;
    readonly intentionFilter: Prisma.FieldRef<"Preference", 'Intention[]'>;
    readonly religionFilter: Prisma.FieldRef<"Preference", 'Religion[]'>;
    readonly minHeightCm: Prisma.FieldRef<"Preference", 'Int'>;
    readonly maxHeightCm: Prisma.FieldRef<"Preference", 'Int'>;
    readonly hasChildren: Prisma.FieldRef<"Preference", 'Boolean'>;
    readonly smokingFilter: Prisma.FieldRef<"Preference", 'Frequency[]'>;
    readonly drinkingFilter: Prisma.FieldRef<"Preference", 'Frequency[]'>;
    readonly languagesFilter: Prisma.FieldRef<"Preference", 'String[]'>;
    readonly verifiedOnly: Prisma.FieldRef<"Preference", 'Boolean'>;
    readonly allowRadiusExpansion: Prisma.FieldRef<"Preference", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Preference", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Preference", 'DateTime'>;
}
export type PreferenceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    where: Prisma.PreferenceWhereUniqueInput;
};
export type PreferenceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    where: Prisma.PreferenceWhereUniqueInput;
};
export type PreferenceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    where?: Prisma.PreferenceWhereInput;
    orderBy?: Prisma.PreferenceOrderByWithRelationInput | Prisma.PreferenceOrderByWithRelationInput[];
    cursor?: Prisma.PreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreferenceScalarFieldEnum | Prisma.PreferenceScalarFieldEnum[];
};
export type PreferenceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    where?: Prisma.PreferenceWhereInput;
    orderBy?: Prisma.PreferenceOrderByWithRelationInput | Prisma.PreferenceOrderByWithRelationInput[];
    cursor?: Prisma.PreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreferenceScalarFieldEnum | Prisma.PreferenceScalarFieldEnum[];
};
export type PreferenceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    where?: Prisma.PreferenceWhereInput;
    orderBy?: Prisma.PreferenceOrderByWithRelationInput | Prisma.PreferenceOrderByWithRelationInput[];
    cursor?: Prisma.PreferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PreferenceScalarFieldEnum | Prisma.PreferenceScalarFieldEnum[];
};
export type PreferenceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreferenceCreateInput, Prisma.PreferenceUncheckedCreateInput>;
};
export type PreferenceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PreferenceCreateManyInput | Prisma.PreferenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PreferenceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    data: Prisma.PreferenceCreateManyInput | Prisma.PreferenceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PreferenceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PreferenceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreferenceUpdateInput, Prisma.PreferenceUncheckedUpdateInput>;
    where: Prisma.PreferenceWhereUniqueInput;
};
export type PreferenceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PreferenceUpdateManyMutationInput, Prisma.PreferenceUncheckedUpdateManyInput>;
    where?: Prisma.PreferenceWhereInput;
    limit?: number;
};
export type PreferenceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PreferenceUpdateManyMutationInput, Prisma.PreferenceUncheckedUpdateManyInput>;
    where?: Prisma.PreferenceWhereInput;
    limit?: number;
    include?: Prisma.PreferenceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PreferenceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    where: Prisma.PreferenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.PreferenceCreateInput, Prisma.PreferenceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PreferenceUpdateInput, Prisma.PreferenceUncheckedUpdateInput>;
};
export type PreferenceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
    where: Prisma.PreferenceWhereUniqueInput;
};
export type PreferenceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PreferenceWhereInput;
    limit?: number;
};
export type PreferenceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PreferenceSelect<ExtArgs> | null;
    omit?: Prisma.PreferenceOmit<ExtArgs> | null;
    include?: Prisma.PreferenceInclude<ExtArgs> | null;
};
