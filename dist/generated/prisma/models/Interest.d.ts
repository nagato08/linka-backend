import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterestModel = runtime.Types.Result.DefaultSelection<Prisma.$InterestPayload>;
export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null;
    _avg: InterestAvgAggregateOutputType | null;
    _sum: InterestSumAggregateOutputType | null;
    _min: InterestMinAggregateOutputType | null;
    _max: InterestMaxAggregateOutputType | null;
};
export type InterestAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type InterestSumAggregateOutputType = {
    sortOrder: number | null;
};
export type InterestMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    labelFr: string | null;
    labelEn: string | null;
    emoji: string | null;
    category: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
};
export type InterestMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    labelFr: string | null;
    labelEn: string | null;
    emoji: string | null;
    category: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
};
export type InterestCountAggregateOutputType = {
    id: number;
    slug: number;
    labelFr: number;
    labelEn: number;
    emoji: number;
    category: number;
    isActive: number;
    sortOrder: number;
    _all: number;
};
export type InterestAvgAggregateInputType = {
    sortOrder?: true;
};
export type InterestSumAggregateInputType = {
    sortOrder?: true;
};
export type InterestMinAggregateInputType = {
    id?: true;
    slug?: true;
    labelFr?: true;
    labelEn?: true;
    emoji?: true;
    category?: true;
    isActive?: true;
    sortOrder?: true;
};
export type InterestMaxAggregateInputType = {
    id?: true;
    slug?: true;
    labelFr?: true;
    labelEn?: true;
    emoji?: true;
    category?: true;
    isActive?: true;
    sortOrder?: true;
};
export type InterestCountAggregateInputType = {
    id?: true;
    slug?: true;
    labelFr?: true;
    labelEn?: true;
    emoji?: true;
    category?: true;
    isActive?: true;
    sortOrder?: true;
    _all?: true;
};
export type InterestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterestWhereInput;
    orderBy?: Prisma.InterestOrderByWithRelationInput | Prisma.InterestOrderByWithRelationInput[];
    cursor?: Prisma.InterestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterestCountAggregateInputType;
    _avg?: InterestAvgAggregateInputType;
    _sum?: InterestSumAggregateInputType;
    _min?: InterestMinAggregateInputType;
    _max?: InterestMaxAggregateInputType;
};
export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
    [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterest[P]> : Prisma.GetScalarType<T[P], AggregateInterest[P]>;
};
export type InterestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterestWhereInput;
    orderBy?: Prisma.InterestOrderByWithAggregationInput | Prisma.InterestOrderByWithAggregationInput[];
    by: Prisma.InterestScalarFieldEnum[] | Prisma.InterestScalarFieldEnum;
    having?: Prisma.InterestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterestCountAggregateInputType | true;
    _avg?: InterestAvgAggregateInputType;
    _sum?: InterestSumAggregateInputType;
    _min?: InterestMinAggregateInputType;
    _max?: InterestMaxAggregateInputType;
};
export type InterestGroupByOutputType = {
    id: string;
    slug: string;
    labelFr: string;
    labelEn: string;
    emoji: string | null;
    category: string | null;
    isActive: boolean;
    sortOrder: number;
    _count: InterestCountAggregateOutputType | null;
    _avg: InterestAvgAggregateOutputType | null;
    _sum: InterestSumAggregateOutputType | null;
    _min: InterestMinAggregateOutputType | null;
    _max: InterestMaxAggregateOutputType | null;
};
export type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterestGroupByOutputType[P]>;
}>>;
export type InterestWhereInput = {
    AND?: Prisma.InterestWhereInput | Prisma.InterestWhereInput[];
    OR?: Prisma.InterestWhereInput[];
    NOT?: Prisma.InterestWhereInput | Prisma.InterestWhereInput[];
    id?: Prisma.UuidFilter<"Interest"> | string;
    slug?: Prisma.StringFilter<"Interest"> | string;
    labelFr?: Prisma.StringFilter<"Interest"> | string;
    labelEn?: Prisma.StringFilter<"Interest"> | string;
    emoji?: Prisma.StringNullableFilter<"Interest"> | string | null;
    category?: Prisma.StringNullableFilter<"Interest"> | string | null;
    isActive?: Prisma.BoolFilter<"Interest"> | boolean;
    sortOrder?: Prisma.IntFilter<"Interest"> | number;
    profiles?: Prisma.ProfileInterestListRelationFilter;
};
export type InterestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    labelFr?: Prisma.SortOrder;
    labelEn?: Prisma.SortOrder;
    emoji?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    profiles?: Prisma.ProfileInterestOrderByRelationAggregateInput;
};
export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.InterestWhereInput | Prisma.InterestWhereInput[];
    OR?: Prisma.InterestWhereInput[];
    NOT?: Prisma.InterestWhereInput | Prisma.InterestWhereInput[];
    labelFr?: Prisma.StringFilter<"Interest"> | string;
    labelEn?: Prisma.StringFilter<"Interest"> | string;
    emoji?: Prisma.StringNullableFilter<"Interest"> | string | null;
    category?: Prisma.StringNullableFilter<"Interest"> | string | null;
    isActive?: Prisma.BoolFilter<"Interest"> | boolean;
    sortOrder?: Prisma.IntFilter<"Interest"> | number;
    profiles?: Prisma.ProfileInterestListRelationFilter;
}, "id" | "slug">;
export type InterestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    labelFr?: Prisma.SortOrder;
    labelEn?: Prisma.SortOrder;
    emoji?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.InterestCountOrderByAggregateInput;
    _avg?: Prisma.InterestAvgOrderByAggregateInput;
    _max?: Prisma.InterestMaxOrderByAggregateInput;
    _min?: Prisma.InterestMinOrderByAggregateInput;
    _sum?: Prisma.InterestSumOrderByAggregateInput;
};
export type InterestScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterestScalarWhereWithAggregatesInput | Prisma.InterestScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterestScalarWhereWithAggregatesInput | Prisma.InterestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Interest"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Interest"> | string;
    labelFr?: Prisma.StringWithAggregatesFilter<"Interest"> | string;
    labelEn?: Prisma.StringWithAggregatesFilter<"Interest"> | string;
    emoji?: Prisma.StringNullableWithAggregatesFilter<"Interest"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"Interest"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Interest"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Interest"> | number;
};
export type InterestCreateInput = {
    id?: string;
    slug: string;
    labelFr: string;
    labelEn: string;
    emoji?: string | null;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    profiles?: Prisma.ProfileInterestCreateNestedManyWithoutInterestInput;
};
export type InterestUncheckedCreateInput = {
    id?: string;
    slug: string;
    labelFr: string;
    labelEn: string;
    emoji?: string | null;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    profiles?: Prisma.ProfileInterestUncheckedCreateNestedManyWithoutInterestInput;
};
export type InterestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    labelFr?: Prisma.StringFieldUpdateOperationsInput | string;
    labelEn?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    profiles?: Prisma.ProfileInterestUpdateManyWithoutInterestNestedInput;
};
export type InterestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    labelFr?: Prisma.StringFieldUpdateOperationsInput | string;
    labelEn?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    profiles?: Prisma.ProfileInterestUncheckedUpdateManyWithoutInterestNestedInput;
};
export type InterestCreateManyInput = {
    id?: string;
    slug: string;
    labelFr: string;
    labelEn: string;
    emoji?: string | null;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
};
export type InterestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    labelFr?: Prisma.StringFieldUpdateOperationsInput | string;
    labelEn?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InterestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    labelFr?: Prisma.StringFieldUpdateOperationsInput | string;
    labelEn?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InterestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    labelFr?: Prisma.SortOrder;
    labelEn?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type InterestAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type InterestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    labelFr?: Prisma.SortOrder;
    labelEn?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type InterestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    labelFr?: Prisma.SortOrder;
    labelEn?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type InterestSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type InterestScalarRelationFilter = {
    is?: Prisma.InterestWhereInput;
    isNot?: Prisma.InterestWhereInput;
};
export type InterestCreateNestedOneWithoutProfilesInput = {
    create?: Prisma.XOR<Prisma.InterestCreateWithoutProfilesInput, Prisma.InterestUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.InterestCreateOrConnectWithoutProfilesInput;
    connect?: Prisma.InterestWhereUniqueInput;
};
export type InterestUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: Prisma.XOR<Prisma.InterestCreateWithoutProfilesInput, Prisma.InterestUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.InterestCreateOrConnectWithoutProfilesInput;
    upsert?: Prisma.InterestUpsertWithoutProfilesInput;
    connect?: Prisma.InterestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InterestUpdateToOneWithWhereWithoutProfilesInput, Prisma.InterestUpdateWithoutProfilesInput>, Prisma.InterestUncheckedUpdateWithoutProfilesInput>;
};
export type InterestCreateWithoutProfilesInput = {
    id?: string;
    slug: string;
    labelFr: string;
    labelEn: string;
    emoji?: string | null;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
};
export type InterestUncheckedCreateWithoutProfilesInput = {
    id?: string;
    slug: string;
    labelFr: string;
    labelEn: string;
    emoji?: string | null;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
};
export type InterestCreateOrConnectWithoutProfilesInput = {
    where: Prisma.InterestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterestCreateWithoutProfilesInput, Prisma.InterestUncheckedCreateWithoutProfilesInput>;
};
export type InterestUpsertWithoutProfilesInput = {
    update: Prisma.XOR<Prisma.InterestUpdateWithoutProfilesInput, Prisma.InterestUncheckedUpdateWithoutProfilesInput>;
    create: Prisma.XOR<Prisma.InterestCreateWithoutProfilesInput, Prisma.InterestUncheckedCreateWithoutProfilesInput>;
    where?: Prisma.InterestWhereInput;
};
export type InterestUpdateToOneWithWhereWithoutProfilesInput = {
    where?: Prisma.InterestWhereInput;
    data: Prisma.XOR<Prisma.InterestUpdateWithoutProfilesInput, Prisma.InterestUncheckedUpdateWithoutProfilesInput>;
};
export type InterestUpdateWithoutProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    labelFr?: Prisma.StringFieldUpdateOperationsInput | string;
    labelEn?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InterestUncheckedUpdateWithoutProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    labelFr?: Prisma.StringFieldUpdateOperationsInput | string;
    labelEn?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type InterestCountOutputType = {
    profiles: number;
};
export type InterestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles?: boolean | InterestCountOutputTypeCountProfilesArgs;
};
export type InterestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestCountOutputTypeSelect<ExtArgs> | null;
};
export type InterestCountOutputTypeCountProfilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileInterestWhereInput;
};
export type InterestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    labelFr?: boolean;
    labelEn?: boolean;
    emoji?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    profiles?: boolean | Prisma.Interest$profilesArgs<ExtArgs>;
    _count?: boolean | Prisma.InterestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interest"]>;
export type InterestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    labelFr?: boolean;
    labelEn?: boolean;
    emoji?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
}, ExtArgs["result"]["interest"]>;
export type InterestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    labelFr?: boolean;
    labelEn?: boolean;
    emoji?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
}, ExtArgs["result"]["interest"]>;
export type InterestSelectScalar = {
    id?: boolean;
    slug?: boolean;
    labelFr?: boolean;
    labelEn?: boolean;
    emoji?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
};
export type InterestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "labelFr" | "labelEn" | "emoji" | "category" | "isActive" | "sortOrder", ExtArgs["result"]["interest"]>;
export type InterestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles?: boolean | Prisma.Interest$profilesArgs<ExtArgs>;
    _count?: boolean | Prisma.InterestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InterestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type InterestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $InterestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Interest";
    objects: {
        profiles: Prisma.$ProfileInterestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        labelFr: string;
        labelEn: string;
        emoji: string | null;
        category: string | null;
        isActive: boolean;
        sortOrder: number;
    }, ExtArgs["result"]["interest"]>;
    composites: {};
};
export type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterestPayload, S>;
export type InterestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterestCountAggregateInputType | true;
};
export interface InterestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Interest'];
        meta: {
            name: 'Interest';
        };
    };
    findUnique<T extends InterestFindUniqueArgs>(args: Prisma.SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterestFindFirstArgs>(args?: Prisma.SelectSubset<T, InterestFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterestFindManyArgs>(args?: Prisma.SelectSubset<T, InterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterestCreateArgs>(args: Prisma.SelectSubset<T, InterestCreateArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterestCreateManyArgs>(args?: Prisma.SelectSubset<T, InterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InterestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InterestDeleteArgs>(args: Prisma.SelectSubset<T, InterestDeleteArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterestUpdateArgs>(args: Prisma.SelectSubset<T, InterestUpdateArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterestDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterestUpdateManyArgs>(args: Prisma.SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InterestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InterestUpsertArgs>(args: Prisma.SelectSubset<T, InterestUpsertArgs<ExtArgs>>): Prisma.Prisma__InterestClient<runtime.Types.Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterestCountArgs>(args?: Prisma.Subset<T, InterestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterestCountAggregateOutputType> : number>;
    aggregate<T extends InterestAggregateArgs>(args: Prisma.Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>;
    groupBy<T extends InterestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterestGroupByArgs['orderBy'];
    } : {
        orderBy?: InterestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterestFieldRefs;
}
export interface Prisma__InterestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profiles<T extends Prisma.Interest$profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Interest$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterestFieldRefs {
    readonly id: Prisma.FieldRef<"Interest", 'String'>;
    readonly slug: Prisma.FieldRef<"Interest", 'String'>;
    readonly labelFr: Prisma.FieldRef<"Interest", 'String'>;
    readonly labelEn: Prisma.FieldRef<"Interest", 'String'>;
    readonly emoji: Prisma.FieldRef<"Interest", 'String'>;
    readonly category: Prisma.FieldRef<"Interest", 'String'>;
    readonly isActive: Prisma.FieldRef<"Interest", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"Interest", 'Int'>;
}
export type InterestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    where: Prisma.InterestWhereUniqueInput;
};
export type InterestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    where: Prisma.InterestWhereUniqueInput;
};
export type InterestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    where?: Prisma.InterestWhereInput;
    orderBy?: Prisma.InterestOrderByWithRelationInput | Prisma.InterestOrderByWithRelationInput[];
    cursor?: Prisma.InterestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterestScalarFieldEnum | Prisma.InterestScalarFieldEnum[];
};
export type InterestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    where?: Prisma.InterestWhereInput;
    orderBy?: Prisma.InterestOrderByWithRelationInput | Prisma.InterestOrderByWithRelationInput[];
    cursor?: Prisma.InterestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterestScalarFieldEnum | Prisma.InterestScalarFieldEnum[];
};
export type InterestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    where?: Prisma.InterestWhereInput;
    orderBy?: Prisma.InterestOrderByWithRelationInput | Prisma.InterestOrderByWithRelationInput[];
    cursor?: Prisma.InterestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterestScalarFieldEnum | Prisma.InterestScalarFieldEnum[];
};
export type InterestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterestCreateInput, Prisma.InterestUncheckedCreateInput>;
};
export type InterestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterestCreateManyInput | Prisma.InterestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    data: Prisma.InterestCreateManyInput | Prisma.InterestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterestUpdateInput, Prisma.InterestUncheckedUpdateInput>;
    where: Prisma.InterestWhereUniqueInput;
};
export type InterestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterestUpdateManyMutationInput, Prisma.InterestUncheckedUpdateManyInput>;
    where?: Prisma.InterestWhereInput;
    limit?: number;
};
export type InterestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterestUpdateManyMutationInput, Prisma.InterestUncheckedUpdateManyInput>;
    where?: Prisma.InterestWhereInput;
    limit?: number;
};
export type InterestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    where: Prisma.InterestWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterestCreateInput, Prisma.InterestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterestUpdateInput, Prisma.InterestUncheckedUpdateInput>;
};
export type InterestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
    where: Prisma.InterestWhereUniqueInput;
};
export type InterestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterestWhereInput;
    limit?: number;
};
export type Interest$profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterestSelect<ExtArgs> | null;
    omit?: Prisma.InterestOmit<ExtArgs> | null;
    include?: Prisma.InterestInclude<ExtArgs> | null;
};
