import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfilePromptModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfilePromptPayload>;
export type AggregateProfilePrompt = {
    _count: ProfilePromptCountAggregateOutputType | null;
    _avg: ProfilePromptAvgAggregateOutputType | null;
    _sum: ProfilePromptSumAggregateOutputType | null;
    _min: ProfilePromptMinAggregateOutputType | null;
    _max: ProfilePromptMaxAggregateOutputType | null;
};
export type ProfilePromptAvgAggregateOutputType = {
    position: number | null;
};
export type ProfilePromptSumAggregateOutputType = {
    position: number | null;
};
export type ProfilePromptMinAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    promptId: string | null;
    answer: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfilePromptMaxAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    promptId: string | null;
    answer: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfilePromptCountAggregateOutputType = {
    id: number;
    profileId: number;
    promptId: number;
    answer: number;
    position: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProfilePromptAvgAggregateInputType = {
    position?: true;
};
export type ProfilePromptSumAggregateInputType = {
    position?: true;
};
export type ProfilePromptMinAggregateInputType = {
    id?: true;
    profileId?: true;
    promptId?: true;
    answer?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfilePromptMaxAggregateInputType = {
    id?: true;
    profileId?: true;
    promptId?: true;
    answer?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfilePromptCountAggregateInputType = {
    id?: true;
    profileId?: true;
    promptId?: true;
    answer?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProfilePromptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfilePromptWhereInput;
    orderBy?: Prisma.ProfilePromptOrderByWithRelationInput | Prisma.ProfilePromptOrderByWithRelationInput[];
    cursor?: Prisma.ProfilePromptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfilePromptCountAggregateInputType;
    _avg?: ProfilePromptAvgAggregateInputType;
    _sum?: ProfilePromptSumAggregateInputType;
    _min?: ProfilePromptMinAggregateInputType;
    _max?: ProfilePromptMaxAggregateInputType;
};
export type GetProfilePromptAggregateType<T extends ProfilePromptAggregateArgs> = {
    [P in keyof T & keyof AggregateProfilePrompt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfilePrompt[P]> : Prisma.GetScalarType<T[P], AggregateProfilePrompt[P]>;
};
export type ProfilePromptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfilePromptWhereInput;
    orderBy?: Prisma.ProfilePromptOrderByWithAggregationInput | Prisma.ProfilePromptOrderByWithAggregationInput[];
    by: Prisma.ProfilePromptScalarFieldEnum[] | Prisma.ProfilePromptScalarFieldEnum;
    having?: Prisma.ProfilePromptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfilePromptCountAggregateInputType | true;
    _avg?: ProfilePromptAvgAggregateInputType;
    _sum?: ProfilePromptSumAggregateInputType;
    _min?: ProfilePromptMinAggregateInputType;
    _max?: ProfilePromptMaxAggregateInputType;
};
export type ProfilePromptGroupByOutputType = {
    id: string;
    profileId: string;
    promptId: string;
    answer: string;
    position: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProfilePromptCountAggregateOutputType | null;
    _avg: ProfilePromptAvgAggregateOutputType | null;
    _sum: ProfilePromptSumAggregateOutputType | null;
    _min: ProfilePromptMinAggregateOutputType | null;
    _max: ProfilePromptMaxAggregateOutputType | null;
};
export type GetProfilePromptGroupByPayload<T extends ProfilePromptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfilePromptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfilePromptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfilePromptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfilePromptGroupByOutputType[P]>;
}>>;
export type ProfilePromptWhereInput = {
    AND?: Prisma.ProfilePromptWhereInput | Prisma.ProfilePromptWhereInput[];
    OR?: Prisma.ProfilePromptWhereInput[];
    NOT?: Prisma.ProfilePromptWhereInput | Prisma.ProfilePromptWhereInput[];
    id?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    profileId?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    promptId?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    answer?: Prisma.StringFilter<"ProfilePrompt"> | string;
    position?: Prisma.IntFilter<"ProfilePrompt"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProfilePrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProfilePrompt"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    prompt?: Prisma.XOR<Prisma.PromptScalarRelationFilter, Prisma.PromptWhereInput>;
};
export type ProfilePromptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    promptId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    prompt?: Prisma.PromptOrderByWithRelationInput;
};
export type ProfilePromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profileId_promptId?: Prisma.ProfilePromptProfileIdPromptIdCompoundUniqueInput;
    profileId_position?: Prisma.ProfilePromptProfileIdPositionCompoundUniqueInput;
    AND?: Prisma.ProfilePromptWhereInput | Prisma.ProfilePromptWhereInput[];
    OR?: Prisma.ProfilePromptWhereInput[];
    NOT?: Prisma.ProfilePromptWhereInput | Prisma.ProfilePromptWhereInput[];
    profileId?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    promptId?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    answer?: Prisma.StringFilter<"ProfilePrompt"> | string;
    position?: Prisma.IntFilter<"ProfilePrompt"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProfilePrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProfilePrompt"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    prompt?: Prisma.XOR<Prisma.PromptScalarRelationFilter, Prisma.PromptWhereInput>;
}, "id" | "profileId_promptId" | "profileId_position">;
export type ProfilePromptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    promptId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProfilePromptCountOrderByAggregateInput;
    _avg?: Prisma.ProfilePromptAvgOrderByAggregateInput;
    _max?: Prisma.ProfilePromptMaxOrderByAggregateInput;
    _min?: Prisma.ProfilePromptMinOrderByAggregateInput;
    _sum?: Prisma.ProfilePromptSumOrderByAggregateInput;
};
export type ProfilePromptScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfilePromptScalarWhereWithAggregatesInput | Prisma.ProfilePromptScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfilePromptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfilePromptScalarWhereWithAggregatesInput | Prisma.ProfilePromptScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ProfilePrompt"> | string;
    profileId?: Prisma.UuidWithAggregatesFilter<"ProfilePrompt"> | string;
    promptId?: Prisma.UuidWithAggregatesFilter<"ProfilePrompt"> | string;
    answer?: Prisma.StringWithAggregatesFilter<"ProfilePrompt"> | string;
    position?: Prisma.IntWithAggregatesFilter<"ProfilePrompt"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProfilePrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProfilePrompt"> | Date | string;
};
export type ProfilePromptCreateInput = {
    id?: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutPromptsInput;
    prompt: Prisma.PromptCreateNestedOneWithoutAnswersInput;
};
export type ProfilePromptUncheckedCreateInput = {
    id?: string;
    profileId: string;
    promptId: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfilePromptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutPromptsNestedInput;
    prompt?: Prisma.PromptUpdateOneRequiredWithoutAnswersNestedInput;
};
export type ProfilePromptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    promptId?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfilePromptCreateManyInput = {
    id?: string;
    profileId: string;
    promptId: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfilePromptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfilePromptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    promptId?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfilePromptListRelationFilter = {
    every?: Prisma.ProfilePromptWhereInput;
    some?: Prisma.ProfilePromptWhereInput;
    none?: Prisma.ProfilePromptWhereInput;
};
export type ProfilePromptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfilePromptProfileIdPromptIdCompoundUniqueInput = {
    profileId: string;
    promptId: string;
};
export type ProfilePromptProfileIdPositionCompoundUniqueInput = {
    profileId: string;
    position: number;
};
export type ProfilePromptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    promptId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfilePromptAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type ProfilePromptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    promptId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfilePromptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    promptId?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfilePromptSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
};
export type ProfilePromptCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutProfileInput, Prisma.ProfilePromptUncheckedCreateWithoutProfileInput> | Prisma.ProfilePromptCreateWithoutProfileInput[] | Prisma.ProfilePromptUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutProfileInput | Prisma.ProfilePromptCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfilePromptCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
};
export type ProfilePromptUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutProfileInput, Prisma.ProfilePromptUncheckedCreateWithoutProfileInput> | Prisma.ProfilePromptCreateWithoutProfileInput[] | Prisma.ProfilePromptUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutProfileInput | Prisma.ProfilePromptCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfilePromptCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
};
export type ProfilePromptUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutProfileInput, Prisma.ProfilePromptUncheckedCreateWithoutProfileInput> | Prisma.ProfilePromptCreateWithoutProfileInput[] | Prisma.ProfilePromptUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutProfileInput | Prisma.ProfilePromptCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfilePromptUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfilePromptUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfilePromptCreateManyProfileInputEnvelope;
    set?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    disconnect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    delete?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    update?: Prisma.ProfilePromptUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfilePromptUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfilePromptUpdateManyWithWhereWithoutProfileInput | Prisma.ProfilePromptUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfilePromptScalarWhereInput | Prisma.ProfilePromptScalarWhereInput[];
};
export type ProfilePromptUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutProfileInput, Prisma.ProfilePromptUncheckedCreateWithoutProfileInput> | Prisma.ProfilePromptCreateWithoutProfileInput[] | Prisma.ProfilePromptUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutProfileInput | Prisma.ProfilePromptCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfilePromptUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfilePromptUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfilePromptCreateManyProfileInputEnvelope;
    set?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    disconnect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    delete?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    update?: Prisma.ProfilePromptUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfilePromptUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfilePromptUpdateManyWithWhereWithoutProfileInput | Prisma.ProfilePromptUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfilePromptScalarWhereInput | Prisma.ProfilePromptScalarWhereInput[];
};
export type ProfilePromptCreateNestedManyWithoutPromptInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutPromptInput, Prisma.ProfilePromptUncheckedCreateWithoutPromptInput> | Prisma.ProfilePromptCreateWithoutPromptInput[] | Prisma.ProfilePromptUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutPromptInput | Prisma.ProfilePromptCreateOrConnectWithoutPromptInput[];
    createMany?: Prisma.ProfilePromptCreateManyPromptInputEnvelope;
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
};
export type ProfilePromptUncheckedCreateNestedManyWithoutPromptInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutPromptInput, Prisma.ProfilePromptUncheckedCreateWithoutPromptInput> | Prisma.ProfilePromptCreateWithoutPromptInput[] | Prisma.ProfilePromptUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutPromptInput | Prisma.ProfilePromptCreateOrConnectWithoutPromptInput[];
    createMany?: Prisma.ProfilePromptCreateManyPromptInputEnvelope;
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
};
export type ProfilePromptUpdateManyWithoutPromptNestedInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutPromptInput, Prisma.ProfilePromptUncheckedCreateWithoutPromptInput> | Prisma.ProfilePromptCreateWithoutPromptInput[] | Prisma.ProfilePromptUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutPromptInput | Prisma.ProfilePromptCreateOrConnectWithoutPromptInput[];
    upsert?: Prisma.ProfilePromptUpsertWithWhereUniqueWithoutPromptInput | Prisma.ProfilePromptUpsertWithWhereUniqueWithoutPromptInput[];
    createMany?: Prisma.ProfilePromptCreateManyPromptInputEnvelope;
    set?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    disconnect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    delete?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    update?: Prisma.ProfilePromptUpdateWithWhereUniqueWithoutPromptInput | Prisma.ProfilePromptUpdateWithWhereUniqueWithoutPromptInput[];
    updateMany?: Prisma.ProfilePromptUpdateManyWithWhereWithoutPromptInput | Prisma.ProfilePromptUpdateManyWithWhereWithoutPromptInput[];
    deleteMany?: Prisma.ProfilePromptScalarWhereInput | Prisma.ProfilePromptScalarWhereInput[];
};
export type ProfilePromptUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: Prisma.XOR<Prisma.ProfilePromptCreateWithoutPromptInput, Prisma.ProfilePromptUncheckedCreateWithoutPromptInput> | Prisma.ProfilePromptCreateWithoutPromptInput[] | Prisma.ProfilePromptUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: Prisma.ProfilePromptCreateOrConnectWithoutPromptInput | Prisma.ProfilePromptCreateOrConnectWithoutPromptInput[];
    upsert?: Prisma.ProfilePromptUpsertWithWhereUniqueWithoutPromptInput | Prisma.ProfilePromptUpsertWithWhereUniqueWithoutPromptInput[];
    createMany?: Prisma.ProfilePromptCreateManyPromptInputEnvelope;
    set?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    disconnect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    delete?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    connect?: Prisma.ProfilePromptWhereUniqueInput | Prisma.ProfilePromptWhereUniqueInput[];
    update?: Prisma.ProfilePromptUpdateWithWhereUniqueWithoutPromptInput | Prisma.ProfilePromptUpdateWithWhereUniqueWithoutPromptInput[];
    updateMany?: Prisma.ProfilePromptUpdateManyWithWhereWithoutPromptInput | Prisma.ProfilePromptUpdateManyWithWhereWithoutPromptInput[];
    deleteMany?: Prisma.ProfilePromptScalarWhereInput | Prisma.ProfilePromptScalarWhereInput[];
};
export type ProfilePromptCreateWithoutProfileInput = {
    id?: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prompt: Prisma.PromptCreateNestedOneWithoutAnswersInput;
};
export type ProfilePromptUncheckedCreateWithoutProfileInput = {
    id?: string;
    promptId: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfilePromptCreateOrConnectWithoutProfileInput = {
    where: Prisma.ProfilePromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfilePromptCreateWithoutProfileInput, Prisma.ProfilePromptUncheckedCreateWithoutProfileInput>;
};
export type ProfilePromptCreateManyProfileInputEnvelope = {
    data: Prisma.ProfilePromptCreateManyProfileInput | Prisma.ProfilePromptCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ProfilePromptUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfilePromptWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfilePromptUpdateWithoutProfileInput, Prisma.ProfilePromptUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ProfilePromptCreateWithoutProfileInput, Prisma.ProfilePromptUncheckedCreateWithoutProfileInput>;
};
export type ProfilePromptUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfilePromptWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfilePromptUpdateWithoutProfileInput, Prisma.ProfilePromptUncheckedUpdateWithoutProfileInput>;
};
export type ProfilePromptUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ProfilePromptScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfilePromptUpdateManyMutationInput, Prisma.ProfilePromptUncheckedUpdateManyWithoutProfileInput>;
};
export type ProfilePromptScalarWhereInput = {
    AND?: Prisma.ProfilePromptScalarWhereInput | Prisma.ProfilePromptScalarWhereInput[];
    OR?: Prisma.ProfilePromptScalarWhereInput[];
    NOT?: Prisma.ProfilePromptScalarWhereInput | Prisma.ProfilePromptScalarWhereInput[];
    id?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    profileId?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    promptId?: Prisma.UuidFilter<"ProfilePrompt"> | string;
    answer?: Prisma.StringFilter<"ProfilePrompt"> | string;
    position?: Prisma.IntFilter<"ProfilePrompt"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProfilePrompt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProfilePrompt"> | Date | string;
};
export type ProfilePromptCreateWithoutPromptInput = {
    id?: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutPromptsInput;
};
export type ProfilePromptUncheckedCreateWithoutPromptInput = {
    id?: string;
    profileId: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfilePromptCreateOrConnectWithoutPromptInput = {
    where: Prisma.ProfilePromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfilePromptCreateWithoutPromptInput, Prisma.ProfilePromptUncheckedCreateWithoutPromptInput>;
};
export type ProfilePromptCreateManyPromptInputEnvelope = {
    data: Prisma.ProfilePromptCreateManyPromptInput | Prisma.ProfilePromptCreateManyPromptInput[];
    skipDuplicates?: boolean;
};
export type ProfilePromptUpsertWithWhereUniqueWithoutPromptInput = {
    where: Prisma.ProfilePromptWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfilePromptUpdateWithoutPromptInput, Prisma.ProfilePromptUncheckedUpdateWithoutPromptInput>;
    create: Prisma.XOR<Prisma.ProfilePromptCreateWithoutPromptInput, Prisma.ProfilePromptUncheckedCreateWithoutPromptInput>;
};
export type ProfilePromptUpdateWithWhereUniqueWithoutPromptInput = {
    where: Prisma.ProfilePromptWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfilePromptUpdateWithoutPromptInput, Prisma.ProfilePromptUncheckedUpdateWithoutPromptInput>;
};
export type ProfilePromptUpdateManyWithWhereWithoutPromptInput = {
    where: Prisma.ProfilePromptScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfilePromptUpdateManyMutationInput, Prisma.ProfilePromptUncheckedUpdateManyWithoutPromptInput>;
};
export type ProfilePromptCreateManyProfileInput = {
    id?: string;
    promptId: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfilePromptUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prompt?: Prisma.PromptUpdateOneRequiredWithoutAnswersNestedInput;
};
export type ProfilePromptUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promptId?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfilePromptUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promptId?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfilePromptCreateManyPromptInput = {
    id?: string;
    profileId: string;
    answer: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfilePromptUpdateWithoutPromptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutPromptsNestedInput;
};
export type ProfilePromptUncheckedUpdateWithoutPromptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfilePromptUncheckedUpdateManyWithoutPromptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfilePromptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    promptId?: boolean;
    answer?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    prompt?: boolean | Prisma.PromptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profilePrompt"]>;
export type ProfilePromptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    promptId?: boolean;
    answer?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    prompt?: boolean | Prisma.PromptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profilePrompt"]>;
export type ProfilePromptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    promptId?: boolean;
    answer?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    prompt?: boolean | Prisma.PromptDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profilePrompt"]>;
export type ProfilePromptSelectScalar = {
    id?: boolean;
    profileId?: boolean;
    promptId?: boolean;
    answer?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProfilePromptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profileId" | "promptId" | "answer" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["profilePrompt"]>;
export type ProfilePromptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    prompt?: boolean | Prisma.PromptDefaultArgs<ExtArgs>;
};
export type ProfilePromptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    prompt?: boolean | Prisma.PromptDefaultArgs<ExtArgs>;
};
export type ProfilePromptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    prompt?: boolean | Prisma.PromptDefaultArgs<ExtArgs>;
};
export type $ProfilePromptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfilePrompt";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
        prompt: Prisma.$PromptPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profileId: string;
        promptId: string;
        answer: string;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["profilePrompt"]>;
    composites: {};
};
export type ProfilePromptGetPayload<S extends boolean | null | undefined | ProfilePromptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload, S>;
export type ProfilePromptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfilePromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfilePromptCountAggregateInputType | true;
};
export interface ProfilePromptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfilePrompt'];
        meta: {
            name: 'ProfilePrompt';
        };
    };
    findUnique<T extends ProfilePromptFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfilePromptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfilePromptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfilePromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfilePromptFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfilePromptFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfilePromptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfilePromptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfilePromptFindManyArgs>(args?: Prisma.SelectSubset<T, ProfilePromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfilePromptCreateArgs>(args: Prisma.SelectSubset<T, ProfilePromptCreateArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfilePromptCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfilePromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfilePromptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfilePromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfilePromptDeleteArgs>(args: Prisma.SelectSubset<T, ProfilePromptDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfilePromptUpdateArgs>(args: Prisma.SelectSubset<T, ProfilePromptUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfilePromptDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfilePromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfilePromptUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfilePromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfilePromptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfilePromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfilePromptUpsertArgs>(args: Prisma.SelectSubset<T, ProfilePromptUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfilePromptClient<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfilePromptCountArgs>(args?: Prisma.Subset<T, ProfilePromptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfilePromptCountAggregateOutputType> : number>;
    aggregate<T extends ProfilePromptAggregateArgs>(args: Prisma.Subset<T, ProfilePromptAggregateArgs>): Prisma.PrismaPromise<GetProfilePromptAggregateType<T>>;
    groupBy<T extends ProfilePromptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfilePromptGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfilePromptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfilePromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilePromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfilePromptFieldRefs;
}
export interface Prisma__ProfilePromptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    prompt<T extends Prisma.PromptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PromptDefaultArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfilePromptFieldRefs {
    readonly id: Prisma.FieldRef<"ProfilePrompt", 'String'>;
    readonly profileId: Prisma.FieldRef<"ProfilePrompt", 'String'>;
    readonly promptId: Prisma.FieldRef<"ProfilePrompt", 'String'>;
    readonly answer: Prisma.FieldRef<"ProfilePrompt", 'String'>;
    readonly position: Prisma.FieldRef<"ProfilePrompt", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ProfilePrompt", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProfilePrompt", 'DateTime'>;
}
export type ProfilePromptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    where: Prisma.ProfilePromptWhereUniqueInput;
};
export type ProfilePromptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    where: Prisma.ProfilePromptWhereUniqueInput;
};
export type ProfilePromptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    where?: Prisma.ProfilePromptWhereInput;
    orderBy?: Prisma.ProfilePromptOrderByWithRelationInput | Prisma.ProfilePromptOrderByWithRelationInput[];
    cursor?: Prisma.ProfilePromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfilePromptScalarFieldEnum | Prisma.ProfilePromptScalarFieldEnum[];
};
export type ProfilePromptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    where?: Prisma.ProfilePromptWhereInput;
    orderBy?: Prisma.ProfilePromptOrderByWithRelationInput | Prisma.ProfilePromptOrderByWithRelationInput[];
    cursor?: Prisma.ProfilePromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfilePromptScalarFieldEnum | Prisma.ProfilePromptScalarFieldEnum[];
};
export type ProfilePromptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    where?: Prisma.ProfilePromptWhereInput;
    orderBy?: Prisma.ProfilePromptOrderByWithRelationInput | Prisma.ProfilePromptOrderByWithRelationInput[];
    cursor?: Prisma.ProfilePromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfilePromptScalarFieldEnum | Prisma.ProfilePromptScalarFieldEnum[];
};
export type ProfilePromptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfilePromptCreateInput, Prisma.ProfilePromptUncheckedCreateInput>;
};
export type ProfilePromptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfilePromptCreateManyInput | Prisma.ProfilePromptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfilePromptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    data: Prisma.ProfilePromptCreateManyInput | Prisma.ProfilePromptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProfilePromptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfilePromptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfilePromptUpdateInput, Prisma.ProfilePromptUncheckedUpdateInput>;
    where: Prisma.ProfilePromptWhereUniqueInput;
};
export type ProfilePromptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfilePromptUpdateManyMutationInput, Prisma.ProfilePromptUncheckedUpdateManyInput>;
    where?: Prisma.ProfilePromptWhereInput;
    limit?: number;
};
export type ProfilePromptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfilePromptUpdateManyMutationInput, Prisma.ProfilePromptUncheckedUpdateManyInput>;
    where?: Prisma.ProfilePromptWhereInput;
    limit?: number;
    include?: Prisma.ProfilePromptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfilePromptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    where: Prisma.ProfilePromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfilePromptCreateInput, Prisma.ProfilePromptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfilePromptUpdateInput, Prisma.ProfilePromptUncheckedUpdateInput>;
};
export type ProfilePromptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
    where: Prisma.ProfilePromptWhereUniqueInput;
};
export type ProfilePromptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfilePromptWhereInput;
    limit?: number;
};
export type ProfilePromptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfilePromptSelect<ExtArgs> | null;
    omit?: Prisma.ProfilePromptOmit<ExtArgs> | null;
    include?: Prisma.ProfilePromptInclude<ExtArgs> | null;
};
