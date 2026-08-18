import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfileInterestModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfileInterestPayload>;
export type AggregateProfileInterest = {
    _count: ProfileInterestCountAggregateOutputType | null;
    _min: ProfileInterestMinAggregateOutputType | null;
    _max: ProfileInterestMaxAggregateOutputType | null;
};
export type ProfileInterestMinAggregateOutputType = {
    profileId: string | null;
    interestId: string | null;
    createdAt: Date | null;
};
export type ProfileInterestMaxAggregateOutputType = {
    profileId: string | null;
    interestId: string | null;
    createdAt: Date | null;
};
export type ProfileInterestCountAggregateOutputType = {
    profileId: number;
    interestId: number;
    createdAt: number;
    _all: number;
};
export type ProfileInterestMinAggregateInputType = {
    profileId?: true;
    interestId?: true;
    createdAt?: true;
};
export type ProfileInterestMaxAggregateInputType = {
    profileId?: true;
    interestId?: true;
    createdAt?: true;
};
export type ProfileInterestCountAggregateInputType = {
    profileId?: true;
    interestId?: true;
    createdAt?: true;
    _all?: true;
};
export type ProfileInterestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileInterestWhereInput;
    orderBy?: Prisma.ProfileInterestOrderByWithRelationInput | Prisma.ProfileInterestOrderByWithRelationInput[];
    cursor?: Prisma.ProfileInterestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfileInterestCountAggregateInputType;
    _min?: ProfileInterestMinAggregateInputType;
    _max?: ProfileInterestMaxAggregateInputType;
};
export type GetProfileInterestAggregateType<T extends ProfileInterestAggregateArgs> = {
    [P in keyof T & keyof AggregateProfileInterest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfileInterest[P]> : Prisma.GetScalarType<T[P], AggregateProfileInterest[P]>;
};
export type ProfileInterestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileInterestWhereInput;
    orderBy?: Prisma.ProfileInterestOrderByWithAggregationInput | Prisma.ProfileInterestOrderByWithAggregationInput[];
    by: Prisma.ProfileInterestScalarFieldEnum[] | Prisma.ProfileInterestScalarFieldEnum;
    having?: Prisma.ProfileInterestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileInterestCountAggregateInputType | true;
    _min?: ProfileInterestMinAggregateInputType;
    _max?: ProfileInterestMaxAggregateInputType;
};
export type ProfileInterestGroupByOutputType = {
    profileId: string;
    interestId: string;
    createdAt: Date;
    _count: ProfileInterestCountAggregateOutputType | null;
    _min: ProfileInterestMinAggregateOutputType | null;
    _max: ProfileInterestMaxAggregateOutputType | null;
};
export type GetProfileInterestGroupByPayload<T extends ProfileInterestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileInterestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileInterestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileInterestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileInterestGroupByOutputType[P]>;
}>>;
export type ProfileInterestWhereInput = {
    AND?: Prisma.ProfileInterestWhereInput | Prisma.ProfileInterestWhereInput[];
    OR?: Prisma.ProfileInterestWhereInput[];
    NOT?: Prisma.ProfileInterestWhereInput | Prisma.ProfileInterestWhereInput[];
    profileId?: Prisma.UuidFilter<"ProfileInterest"> | string;
    interestId?: Prisma.UuidFilter<"ProfileInterest"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProfileInterest"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    interest?: Prisma.XOR<Prisma.InterestScalarRelationFilter, Prisma.InterestWhereInput>;
};
export type ProfileInterestOrderByWithRelationInput = {
    profileId?: Prisma.SortOrder;
    interestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    interest?: Prisma.InterestOrderByWithRelationInput;
};
export type ProfileInterestWhereUniqueInput = Prisma.AtLeast<{
    profileId_interestId?: Prisma.ProfileInterestProfileIdInterestIdCompoundUniqueInput;
    AND?: Prisma.ProfileInterestWhereInput | Prisma.ProfileInterestWhereInput[];
    OR?: Prisma.ProfileInterestWhereInput[];
    NOT?: Prisma.ProfileInterestWhereInput | Prisma.ProfileInterestWhereInput[];
    profileId?: Prisma.UuidFilter<"ProfileInterest"> | string;
    interestId?: Prisma.UuidFilter<"ProfileInterest"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProfileInterest"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    interest?: Prisma.XOR<Prisma.InterestScalarRelationFilter, Prisma.InterestWhereInput>;
}, "profileId_interestId">;
export type ProfileInterestOrderByWithAggregationInput = {
    profileId?: Prisma.SortOrder;
    interestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileInterestCountOrderByAggregateInput;
    _max?: Prisma.ProfileInterestMaxOrderByAggregateInput;
    _min?: Prisma.ProfileInterestMinOrderByAggregateInput;
};
export type ProfileInterestScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileInterestScalarWhereWithAggregatesInput | Prisma.ProfileInterestScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileInterestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileInterestScalarWhereWithAggregatesInput | Prisma.ProfileInterestScalarWhereWithAggregatesInput[];
    profileId?: Prisma.UuidWithAggregatesFilter<"ProfileInterest"> | string;
    interestId?: Prisma.UuidWithAggregatesFilter<"ProfileInterest"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProfileInterest"> | Date | string;
};
export type ProfileInterestCreateInput = {
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutInterestsInput;
    interest: Prisma.InterestCreateNestedOneWithoutProfilesInput;
};
export type ProfileInterestUncheckedCreateInput = {
    profileId: string;
    interestId: string;
    createdAt?: Date | string;
};
export type ProfileInterestUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutInterestsNestedInput;
    interest?: Prisma.InterestUpdateOneRequiredWithoutProfilesNestedInput;
};
export type ProfileInterestUncheckedUpdateInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    interestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileInterestCreateManyInput = {
    profileId: string;
    interestId: string;
    createdAt?: Date | string;
};
export type ProfileInterestUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileInterestUncheckedUpdateManyInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    interestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileInterestListRelationFilter = {
    every?: Prisma.ProfileInterestWhereInput;
    some?: Prisma.ProfileInterestWhereInput;
    none?: Prisma.ProfileInterestWhereInput;
};
export type ProfileInterestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfileInterestProfileIdInterestIdCompoundUniqueInput = {
    profileId: string;
    interestId: string;
};
export type ProfileInterestCountOrderByAggregateInput = {
    profileId?: Prisma.SortOrder;
    interestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileInterestMaxOrderByAggregateInput = {
    profileId?: Prisma.SortOrder;
    interestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileInterestMinOrderByAggregateInput = {
    profileId?: Prisma.SortOrder;
    interestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileInterestCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutProfileInput, Prisma.ProfileInterestUncheckedCreateWithoutProfileInput> | Prisma.ProfileInterestCreateWithoutProfileInput[] | Prisma.ProfileInterestUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutProfileInput | Prisma.ProfileInterestCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileInterestCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
};
export type ProfileInterestUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutProfileInput, Prisma.ProfileInterestUncheckedCreateWithoutProfileInput> | Prisma.ProfileInterestCreateWithoutProfileInput[] | Prisma.ProfileInterestUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutProfileInput | Prisma.ProfileInterestCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileInterestCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
};
export type ProfileInterestUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutProfileInput, Prisma.ProfileInterestUncheckedCreateWithoutProfileInput> | Prisma.ProfileInterestCreateWithoutProfileInput[] | Prisma.ProfileInterestUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutProfileInput | Prisma.ProfileInterestCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileInterestUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileInterestUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileInterestCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    disconnect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    delete?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    update?: Prisma.ProfileInterestUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileInterestUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileInterestUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileInterestUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileInterestScalarWhereInput | Prisma.ProfileInterestScalarWhereInput[];
};
export type ProfileInterestUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutProfileInput, Prisma.ProfileInterestUncheckedCreateWithoutProfileInput> | Prisma.ProfileInterestCreateWithoutProfileInput[] | Prisma.ProfileInterestUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutProfileInput | Prisma.ProfileInterestCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileInterestUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileInterestUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileInterestCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    disconnect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    delete?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    update?: Prisma.ProfileInterestUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileInterestUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileInterestUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileInterestUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileInterestScalarWhereInput | Prisma.ProfileInterestScalarWhereInput[];
};
export type ProfileInterestCreateNestedManyWithoutInterestInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutInterestInput, Prisma.ProfileInterestUncheckedCreateWithoutInterestInput> | Prisma.ProfileInterestCreateWithoutInterestInput[] | Prisma.ProfileInterestUncheckedCreateWithoutInterestInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutInterestInput | Prisma.ProfileInterestCreateOrConnectWithoutInterestInput[];
    createMany?: Prisma.ProfileInterestCreateManyInterestInputEnvelope;
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
};
export type ProfileInterestUncheckedCreateNestedManyWithoutInterestInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutInterestInput, Prisma.ProfileInterestUncheckedCreateWithoutInterestInput> | Prisma.ProfileInterestCreateWithoutInterestInput[] | Prisma.ProfileInterestUncheckedCreateWithoutInterestInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutInterestInput | Prisma.ProfileInterestCreateOrConnectWithoutInterestInput[];
    createMany?: Prisma.ProfileInterestCreateManyInterestInputEnvelope;
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
};
export type ProfileInterestUpdateManyWithoutInterestNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutInterestInput, Prisma.ProfileInterestUncheckedCreateWithoutInterestInput> | Prisma.ProfileInterestCreateWithoutInterestInput[] | Prisma.ProfileInterestUncheckedCreateWithoutInterestInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutInterestInput | Prisma.ProfileInterestCreateOrConnectWithoutInterestInput[];
    upsert?: Prisma.ProfileInterestUpsertWithWhereUniqueWithoutInterestInput | Prisma.ProfileInterestUpsertWithWhereUniqueWithoutInterestInput[];
    createMany?: Prisma.ProfileInterestCreateManyInterestInputEnvelope;
    set?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    disconnect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    delete?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    update?: Prisma.ProfileInterestUpdateWithWhereUniqueWithoutInterestInput | Prisma.ProfileInterestUpdateWithWhereUniqueWithoutInterestInput[];
    updateMany?: Prisma.ProfileInterestUpdateManyWithWhereWithoutInterestInput | Prisma.ProfileInterestUpdateManyWithWhereWithoutInterestInput[];
    deleteMany?: Prisma.ProfileInterestScalarWhereInput | Prisma.ProfileInterestScalarWhereInput[];
};
export type ProfileInterestUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileInterestCreateWithoutInterestInput, Prisma.ProfileInterestUncheckedCreateWithoutInterestInput> | Prisma.ProfileInterestCreateWithoutInterestInput[] | Prisma.ProfileInterestUncheckedCreateWithoutInterestInput[];
    connectOrCreate?: Prisma.ProfileInterestCreateOrConnectWithoutInterestInput | Prisma.ProfileInterestCreateOrConnectWithoutInterestInput[];
    upsert?: Prisma.ProfileInterestUpsertWithWhereUniqueWithoutInterestInput | Prisma.ProfileInterestUpsertWithWhereUniqueWithoutInterestInput[];
    createMany?: Prisma.ProfileInterestCreateManyInterestInputEnvelope;
    set?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    disconnect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    delete?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    connect?: Prisma.ProfileInterestWhereUniqueInput | Prisma.ProfileInterestWhereUniqueInput[];
    update?: Prisma.ProfileInterestUpdateWithWhereUniqueWithoutInterestInput | Prisma.ProfileInterestUpdateWithWhereUniqueWithoutInterestInput[];
    updateMany?: Prisma.ProfileInterestUpdateManyWithWhereWithoutInterestInput | Prisma.ProfileInterestUpdateManyWithWhereWithoutInterestInput[];
    deleteMany?: Prisma.ProfileInterestScalarWhereInput | Prisma.ProfileInterestScalarWhereInput[];
};
export type ProfileInterestCreateWithoutProfileInput = {
    createdAt?: Date | string;
    interest: Prisma.InterestCreateNestedOneWithoutProfilesInput;
};
export type ProfileInterestUncheckedCreateWithoutProfileInput = {
    interestId: string;
    createdAt?: Date | string;
};
export type ProfileInterestCreateOrConnectWithoutProfileInput = {
    where: Prisma.ProfileInterestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileInterestCreateWithoutProfileInput, Prisma.ProfileInterestUncheckedCreateWithoutProfileInput>;
};
export type ProfileInterestCreateManyProfileInputEnvelope = {
    data: Prisma.ProfileInterestCreateManyProfileInput | Prisma.ProfileInterestCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ProfileInterestUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileInterestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileInterestUpdateWithoutProfileInput, Prisma.ProfileInterestUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ProfileInterestCreateWithoutProfileInput, Prisma.ProfileInterestUncheckedCreateWithoutProfileInput>;
};
export type ProfileInterestUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileInterestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileInterestUpdateWithoutProfileInput, Prisma.ProfileInterestUncheckedUpdateWithoutProfileInput>;
};
export type ProfileInterestUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ProfileInterestScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileInterestUpdateManyMutationInput, Prisma.ProfileInterestUncheckedUpdateManyWithoutProfileInput>;
};
export type ProfileInterestScalarWhereInput = {
    AND?: Prisma.ProfileInterestScalarWhereInput | Prisma.ProfileInterestScalarWhereInput[];
    OR?: Prisma.ProfileInterestScalarWhereInput[];
    NOT?: Prisma.ProfileInterestScalarWhereInput | Prisma.ProfileInterestScalarWhereInput[];
    profileId?: Prisma.UuidFilter<"ProfileInterest"> | string;
    interestId?: Prisma.UuidFilter<"ProfileInterest"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProfileInterest"> | Date | string;
};
export type ProfileInterestCreateWithoutInterestInput = {
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutInterestsInput;
};
export type ProfileInterestUncheckedCreateWithoutInterestInput = {
    profileId: string;
    createdAt?: Date | string;
};
export type ProfileInterestCreateOrConnectWithoutInterestInput = {
    where: Prisma.ProfileInterestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileInterestCreateWithoutInterestInput, Prisma.ProfileInterestUncheckedCreateWithoutInterestInput>;
};
export type ProfileInterestCreateManyInterestInputEnvelope = {
    data: Prisma.ProfileInterestCreateManyInterestInput | Prisma.ProfileInterestCreateManyInterestInput[];
    skipDuplicates?: boolean;
};
export type ProfileInterestUpsertWithWhereUniqueWithoutInterestInput = {
    where: Prisma.ProfileInterestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileInterestUpdateWithoutInterestInput, Prisma.ProfileInterestUncheckedUpdateWithoutInterestInput>;
    create: Prisma.XOR<Prisma.ProfileInterestCreateWithoutInterestInput, Prisma.ProfileInterestUncheckedCreateWithoutInterestInput>;
};
export type ProfileInterestUpdateWithWhereUniqueWithoutInterestInput = {
    where: Prisma.ProfileInterestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileInterestUpdateWithoutInterestInput, Prisma.ProfileInterestUncheckedUpdateWithoutInterestInput>;
};
export type ProfileInterestUpdateManyWithWhereWithoutInterestInput = {
    where: Prisma.ProfileInterestScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileInterestUpdateManyMutationInput, Prisma.ProfileInterestUncheckedUpdateManyWithoutInterestInput>;
};
export type ProfileInterestCreateManyProfileInput = {
    interestId: string;
    createdAt?: Date | string;
};
export type ProfileInterestUpdateWithoutProfileInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interest?: Prisma.InterestUpdateOneRequiredWithoutProfilesNestedInput;
};
export type ProfileInterestUncheckedUpdateWithoutProfileInput = {
    interestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileInterestUncheckedUpdateManyWithoutProfileInput = {
    interestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileInterestCreateManyInterestInput = {
    profileId: string;
    createdAt?: Date | string;
};
export type ProfileInterestUpdateWithoutInterestInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutInterestsNestedInput;
};
export type ProfileInterestUncheckedUpdateWithoutInterestInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileInterestUncheckedUpdateManyWithoutInterestInput = {
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileInterestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    profileId?: boolean;
    interestId?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    interest?: boolean | Prisma.InterestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileInterest"]>;
export type ProfileInterestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    profileId?: boolean;
    interestId?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    interest?: boolean | Prisma.InterestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileInterest"]>;
export type ProfileInterestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    profileId?: boolean;
    interestId?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    interest?: boolean | Prisma.InterestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileInterest"]>;
export type ProfileInterestSelectScalar = {
    profileId?: boolean;
    interestId?: boolean;
    createdAt?: boolean;
};
export type ProfileInterestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"profileId" | "interestId" | "createdAt", ExtArgs["result"]["profileInterest"]>;
export type ProfileInterestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    interest?: boolean | Prisma.InterestDefaultArgs<ExtArgs>;
};
export type ProfileInterestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    interest?: boolean | Prisma.InterestDefaultArgs<ExtArgs>;
};
export type ProfileInterestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    interest?: boolean | Prisma.InterestDefaultArgs<ExtArgs>;
};
export type $ProfileInterestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfileInterest";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
        interest: Prisma.$InterestPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        profileId: string;
        interestId: string;
        createdAt: Date;
    }, ExtArgs["result"]["profileInterest"]>;
    composites: {};
};
export type ProfileInterestGetPayload<S extends boolean | null | undefined | ProfileInterestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload, S>;
export type ProfileInterestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileInterestCountAggregateInputType | true;
};
export interface ProfileInterestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfileInterest'];
        meta: {
            name: 'ProfileInterest';
        };
    };
    findUnique<T extends ProfileInterestFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileInterestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfileInterestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfileInterestFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileInterestFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfileInterestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfileInterestFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfileInterestCreateArgs>(args: Prisma.SelectSubset<T, ProfileInterestCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfileInterestCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfileInterestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileInterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfileInterestDeleteArgs>(args: Prisma.SelectSubset<T, ProfileInterestDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfileInterestUpdateArgs>(args: Prisma.SelectSubset<T, ProfileInterestUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfileInterestDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfileInterestUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfileInterestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileInterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfileInterestUpsertArgs>(args: Prisma.SelectSubset<T, ProfileInterestUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileInterestClient<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfileInterestCountArgs>(args?: Prisma.Subset<T, ProfileInterestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileInterestCountAggregateOutputType> : number>;
    aggregate<T extends ProfileInterestAggregateArgs>(args: Prisma.Subset<T, ProfileInterestAggregateArgs>): Prisma.PrismaPromise<GetProfileInterestAggregateType<T>>;
    groupBy<T extends ProfileInterestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileInterestGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileInterestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfileInterestFieldRefs;
}
export interface Prisma__ProfileInterestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    interest<T extends Prisma.InterestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterestDefaultArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfileInterestFieldRefs {
    readonly profileId: Prisma.FieldRef<"ProfileInterest", 'String'>;
    readonly interestId: Prisma.FieldRef<"ProfileInterest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProfileInterest", 'DateTime'>;
}
export type ProfileInterestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where: Prisma.ProfileInterestWhereUniqueInput;
};
export type ProfileInterestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where: Prisma.ProfileInterestWhereUniqueInput;
};
export type ProfileInterestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where?: Prisma.ProfileInterestWhereInput;
    orderBy?: Prisma.ProfileInterestOrderByWithRelationInput | Prisma.ProfileInterestOrderByWithRelationInput[];
    cursor?: Prisma.ProfileInterestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileInterestScalarFieldEnum | Prisma.ProfileInterestScalarFieldEnum[];
};
export type ProfileInterestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where?: Prisma.ProfileInterestWhereInput;
    orderBy?: Prisma.ProfileInterestOrderByWithRelationInput | Prisma.ProfileInterestOrderByWithRelationInput[];
    cursor?: Prisma.ProfileInterestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileInterestScalarFieldEnum | Prisma.ProfileInterestScalarFieldEnum[];
};
export type ProfileInterestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where?: Prisma.ProfileInterestWhereInput;
    orderBy?: Prisma.ProfileInterestOrderByWithRelationInput | Prisma.ProfileInterestOrderByWithRelationInput[];
    cursor?: Prisma.ProfileInterestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileInterestScalarFieldEnum | Prisma.ProfileInterestScalarFieldEnum[];
};
export type ProfileInterestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileInterestCreateInput, Prisma.ProfileInterestUncheckedCreateInput>;
};
export type ProfileInterestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfileInterestCreateManyInput | Prisma.ProfileInterestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfileInterestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    data: Prisma.ProfileInterestCreateManyInput | Prisma.ProfileInterestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProfileInterestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfileInterestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileInterestUpdateInput, Prisma.ProfileInterestUncheckedUpdateInput>;
    where: Prisma.ProfileInterestWhereUniqueInput;
};
export type ProfileInterestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfileInterestUpdateManyMutationInput, Prisma.ProfileInterestUncheckedUpdateManyInput>;
    where?: Prisma.ProfileInterestWhereInput;
    limit?: number;
};
export type ProfileInterestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileInterestUpdateManyMutationInput, Prisma.ProfileInterestUncheckedUpdateManyInput>;
    where?: Prisma.ProfileInterestWhereInput;
    limit?: number;
    include?: Prisma.ProfileInterestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfileInterestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where: Prisma.ProfileInterestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileInterestCreateInput, Prisma.ProfileInterestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfileInterestUpdateInput, Prisma.ProfileInterestUncheckedUpdateInput>;
};
export type ProfileInterestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
    where: Prisma.ProfileInterestWhereUniqueInput;
};
export type ProfileInterestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileInterestWhereInput;
    limit?: number;
};
export type ProfileInterestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileInterestSelect<ExtArgs> | null;
    omit?: Prisma.ProfileInterestOmit<ExtArgs> | null;
    include?: Prisma.ProfileInterestInclude<ExtArgs> | null;
};
