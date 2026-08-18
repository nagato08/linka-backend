import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PromptModel = runtime.Types.Result.DefaultSelection<Prisma.$PromptPayload>;
export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null;
    _avg: PromptAvgAggregateOutputType | null;
    _sum: PromptSumAggregateOutputType | null;
    _min: PromptMinAggregateOutputType | null;
    _max: PromptMaxAggregateOutputType | null;
};
export type PromptAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PromptSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PromptMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    textFr: string | null;
    textEn: string | null;
    category: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
};
export type PromptMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    textFr: string | null;
    textEn: string | null;
    category: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
};
export type PromptCountAggregateOutputType = {
    id: number;
    slug: number;
    textFr: number;
    textEn: number;
    category: number;
    isActive: number;
    sortOrder: number;
    _all: number;
};
export type PromptAvgAggregateInputType = {
    sortOrder?: true;
};
export type PromptSumAggregateInputType = {
    sortOrder?: true;
};
export type PromptMinAggregateInputType = {
    id?: true;
    slug?: true;
    textFr?: true;
    textEn?: true;
    category?: true;
    isActive?: true;
    sortOrder?: true;
};
export type PromptMaxAggregateInputType = {
    id?: true;
    slug?: true;
    textFr?: true;
    textEn?: true;
    category?: true;
    isActive?: true;
    sortOrder?: true;
};
export type PromptCountAggregateInputType = {
    id?: true;
    slug?: true;
    textFr?: true;
    textEn?: true;
    category?: true;
    isActive?: true;
    sortOrder?: true;
    _all?: true;
};
export type PromptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromptWhereInput;
    orderBy?: Prisma.PromptOrderByWithRelationInput | Prisma.PromptOrderByWithRelationInput[];
    cursor?: Prisma.PromptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PromptCountAggregateInputType;
    _avg?: PromptAvgAggregateInputType;
    _sum?: PromptSumAggregateInputType;
    _min?: PromptMinAggregateInputType;
    _max?: PromptMaxAggregateInputType;
};
export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
    [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrompt[P]> : Prisma.GetScalarType<T[P], AggregatePrompt[P]>;
};
export type PromptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromptWhereInput;
    orderBy?: Prisma.PromptOrderByWithAggregationInput | Prisma.PromptOrderByWithAggregationInput[];
    by: Prisma.PromptScalarFieldEnum[] | Prisma.PromptScalarFieldEnum;
    having?: Prisma.PromptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PromptCountAggregateInputType | true;
    _avg?: PromptAvgAggregateInputType;
    _sum?: PromptSumAggregateInputType;
    _min?: PromptMinAggregateInputType;
    _max?: PromptMaxAggregateInputType;
};
export type PromptGroupByOutputType = {
    id: string;
    slug: string;
    textFr: string;
    textEn: string;
    category: string | null;
    isActive: boolean;
    sortOrder: number;
    _count: PromptCountAggregateOutputType | null;
    _avg: PromptAvgAggregateOutputType | null;
    _sum: PromptSumAggregateOutputType | null;
    _min: PromptMinAggregateOutputType | null;
    _max: PromptMaxAggregateOutputType | null;
};
export type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PromptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PromptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PromptGroupByOutputType[P]>;
}>>;
export type PromptWhereInput = {
    AND?: Prisma.PromptWhereInput | Prisma.PromptWhereInput[];
    OR?: Prisma.PromptWhereInput[];
    NOT?: Prisma.PromptWhereInput | Prisma.PromptWhereInput[];
    id?: Prisma.UuidFilter<"Prompt"> | string;
    slug?: Prisma.StringFilter<"Prompt"> | string;
    textFr?: Prisma.StringFilter<"Prompt"> | string;
    textEn?: Prisma.StringFilter<"Prompt"> | string;
    category?: Prisma.StringNullableFilter<"Prompt"> | string | null;
    isActive?: Prisma.BoolFilter<"Prompt"> | boolean;
    sortOrder?: Prisma.IntFilter<"Prompt"> | number;
    answers?: Prisma.ProfilePromptListRelationFilter;
};
export type PromptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    textFr?: Prisma.SortOrder;
    textEn?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    answers?: Prisma.ProfilePromptOrderByRelationAggregateInput;
};
export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.PromptWhereInput | Prisma.PromptWhereInput[];
    OR?: Prisma.PromptWhereInput[];
    NOT?: Prisma.PromptWhereInput | Prisma.PromptWhereInput[];
    textFr?: Prisma.StringFilter<"Prompt"> | string;
    textEn?: Prisma.StringFilter<"Prompt"> | string;
    category?: Prisma.StringNullableFilter<"Prompt"> | string | null;
    isActive?: Prisma.BoolFilter<"Prompt"> | boolean;
    sortOrder?: Prisma.IntFilter<"Prompt"> | number;
    answers?: Prisma.ProfilePromptListRelationFilter;
}, "id" | "slug">;
export type PromptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    textFr?: Prisma.SortOrder;
    textEn?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.PromptCountOrderByAggregateInput;
    _avg?: Prisma.PromptAvgOrderByAggregateInput;
    _max?: Prisma.PromptMaxOrderByAggregateInput;
    _min?: Prisma.PromptMinOrderByAggregateInput;
    _sum?: Prisma.PromptSumOrderByAggregateInput;
};
export type PromptScalarWhereWithAggregatesInput = {
    AND?: Prisma.PromptScalarWhereWithAggregatesInput | Prisma.PromptScalarWhereWithAggregatesInput[];
    OR?: Prisma.PromptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PromptScalarWhereWithAggregatesInput | Prisma.PromptScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Prompt"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Prompt"> | string;
    textFr?: Prisma.StringWithAggregatesFilter<"Prompt"> | string;
    textEn?: Prisma.StringWithAggregatesFilter<"Prompt"> | string;
    category?: Prisma.StringNullableWithAggregatesFilter<"Prompt"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Prompt"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Prompt"> | number;
};
export type PromptCreateInput = {
    id?: string;
    slug: string;
    textFr: string;
    textEn: string;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    answers?: Prisma.ProfilePromptCreateNestedManyWithoutPromptInput;
};
export type PromptUncheckedCreateInput = {
    id?: string;
    slug: string;
    textFr: string;
    textEn: string;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    answers?: Prisma.ProfilePromptUncheckedCreateNestedManyWithoutPromptInput;
};
export type PromptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    textFr?: Prisma.StringFieldUpdateOperationsInput | string;
    textEn?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    answers?: Prisma.ProfilePromptUpdateManyWithoutPromptNestedInput;
};
export type PromptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    textFr?: Prisma.StringFieldUpdateOperationsInput | string;
    textEn?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    answers?: Prisma.ProfilePromptUncheckedUpdateManyWithoutPromptNestedInput;
};
export type PromptCreateManyInput = {
    id?: string;
    slug: string;
    textFr: string;
    textEn: string;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
};
export type PromptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    textFr?: Prisma.StringFieldUpdateOperationsInput | string;
    textEn?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PromptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    textFr?: Prisma.StringFieldUpdateOperationsInput | string;
    textEn?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PromptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    textFr?: Prisma.SortOrder;
    textEn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PromptAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PromptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    textFr?: Prisma.SortOrder;
    textEn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PromptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    textFr?: Prisma.SortOrder;
    textEn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PromptSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PromptScalarRelationFilter = {
    is?: Prisma.PromptWhereInput;
    isNot?: Prisma.PromptWhereInput;
};
export type PromptCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.PromptCreateWithoutAnswersInput, Prisma.PromptUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.PromptCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.PromptWhereUniqueInput;
};
export type PromptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.PromptCreateWithoutAnswersInput, Prisma.PromptUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.PromptCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.PromptUpsertWithoutAnswersInput;
    connect?: Prisma.PromptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PromptUpdateToOneWithWhereWithoutAnswersInput, Prisma.PromptUpdateWithoutAnswersInput>, Prisma.PromptUncheckedUpdateWithoutAnswersInput>;
};
export type PromptCreateWithoutAnswersInput = {
    id?: string;
    slug: string;
    textFr: string;
    textEn: string;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
};
export type PromptUncheckedCreateWithoutAnswersInput = {
    id?: string;
    slug: string;
    textFr: string;
    textEn: string;
    category?: string | null;
    isActive?: boolean;
    sortOrder?: number;
};
export type PromptCreateOrConnectWithoutAnswersInput = {
    where: Prisma.PromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PromptCreateWithoutAnswersInput, Prisma.PromptUncheckedCreateWithoutAnswersInput>;
};
export type PromptUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.PromptUpdateWithoutAnswersInput, Prisma.PromptUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.PromptCreateWithoutAnswersInput, Prisma.PromptUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.PromptWhereInput;
};
export type PromptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.PromptWhereInput;
    data: Prisma.XOR<Prisma.PromptUpdateWithoutAnswersInput, Prisma.PromptUncheckedUpdateWithoutAnswersInput>;
};
export type PromptUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    textFr?: Prisma.StringFieldUpdateOperationsInput | string;
    textEn?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PromptUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    textFr?: Prisma.StringFieldUpdateOperationsInput | string;
    textEn?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PromptCountOutputType = {
    answers: number;
};
export type PromptCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | PromptCountOutputTypeCountAnswersArgs;
};
export type PromptCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptCountOutputTypeSelect<ExtArgs> | null;
};
export type PromptCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfilePromptWhereInput;
};
export type PromptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    textFr?: boolean;
    textEn?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    answers?: boolean | Prisma.Prompt$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.PromptCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prompt"]>;
export type PromptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    textFr?: boolean;
    textEn?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
}, ExtArgs["result"]["prompt"]>;
export type PromptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    textFr?: boolean;
    textEn?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
}, ExtArgs["result"]["prompt"]>;
export type PromptSelectScalar = {
    id?: boolean;
    slug?: boolean;
    textFr?: boolean;
    textEn?: boolean;
    category?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
};
export type PromptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "textFr" | "textEn" | "category" | "isActive" | "sortOrder", ExtArgs["result"]["prompt"]>;
export type PromptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | Prisma.Prompt$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.PromptCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PromptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PromptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PromptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Prompt";
    objects: {
        answers: Prisma.$ProfilePromptPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        textFr: string;
        textEn: string;
        category: string | null;
        isActive: boolean;
        sortOrder: number;
    }, ExtArgs["result"]["prompt"]>;
    composites: {};
};
export type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PromptPayload, S>;
export type PromptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PromptCountAggregateInputType | true;
};
export interface PromptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Prompt'];
        meta: {
            name: 'Prompt';
        };
    };
    findUnique<T extends PromptFindUniqueArgs>(args: Prisma.SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PromptFindFirstArgs>(args?: Prisma.SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PromptFindManyArgs>(args?: Prisma.SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PromptCreateArgs>(args: Prisma.SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PromptCreateManyArgs>(args?: Prisma.SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PromptDeleteArgs>(args: Prisma.SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PromptUpdateArgs>(args: Prisma.SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PromptDeleteManyArgs>(args?: Prisma.SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PromptUpdateManyArgs>(args: Prisma.SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PromptUpsertArgs>(args: Prisma.SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma.Prisma__PromptClient<runtime.Types.Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PromptCountArgs>(args?: Prisma.Subset<T, PromptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PromptCountAggregateOutputType> : number>;
    aggregate<T extends PromptAggregateArgs>(args: Prisma.Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>;
    groupBy<T extends PromptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PromptGroupByArgs['orderBy'];
    } : {
        orderBy?: PromptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PromptFieldRefs;
}
export interface Prisma__PromptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    answers<T extends Prisma.Prompt$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Prompt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PromptFieldRefs {
    readonly id: Prisma.FieldRef<"Prompt", 'String'>;
    readonly slug: Prisma.FieldRef<"Prompt", 'String'>;
    readonly textFr: Prisma.FieldRef<"Prompt", 'String'>;
    readonly textEn: Prisma.FieldRef<"Prompt", 'String'>;
    readonly category: Prisma.FieldRef<"Prompt", 'String'>;
    readonly isActive: Prisma.FieldRef<"Prompt", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"Prompt", 'Int'>;
}
export type PromptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    where: Prisma.PromptWhereUniqueInput;
};
export type PromptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    where: Prisma.PromptWhereUniqueInput;
};
export type PromptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    where?: Prisma.PromptWhereInput;
    orderBy?: Prisma.PromptOrderByWithRelationInput | Prisma.PromptOrderByWithRelationInput[];
    cursor?: Prisma.PromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromptScalarFieldEnum | Prisma.PromptScalarFieldEnum[];
};
export type PromptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    where?: Prisma.PromptWhereInput;
    orderBy?: Prisma.PromptOrderByWithRelationInput | Prisma.PromptOrderByWithRelationInput[];
    cursor?: Prisma.PromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromptScalarFieldEnum | Prisma.PromptScalarFieldEnum[];
};
export type PromptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    where?: Prisma.PromptWhereInput;
    orderBy?: Prisma.PromptOrderByWithRelationInput | Prisma.PromptOrderByWithRelationInput[];
    cursor?: Prisma.PromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromptScalarFieldEnum | Prisma.PromptScalarFieldEnum[];
};
export type PromptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PromptCreateInput, Prisma.PromptUncheckedCreateInput>;
};
export type PromptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PromptCreateManyInput | Prisma.PromptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PromptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    data: Prisma.PromptCreateManyInput | Prisma.PromptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PromptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PromptUpdateInput, Prisma.PromptUncheckedUpdateInput>;
    where: Prisma.PromptWhereUniqueInput;
};
export type PromptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PromptUpdateManyMutationInput, Prisma.PromptUncheckedUpdateManyInput>;
    where?: Prisma.PromptWhereInput;
    limit?: number;
};
export type PromptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PromptUpdateManyMutationInput, Prisma.PromptUncheckedUpdateManyInput>;
    where?: Prisma.PromptWhereInput;
    limit?: number;
};
export type PromptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    where: Prisma.PromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PromptCreateInput, Prisma.PromptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PromptUpdateInput, Prisma.PromptUncheckedUpdateInput>;
};
export type PromptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
    where: Prisma.PromptWhereUniqueInput;
};
export type PromptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromptWhereInput;
    limit?: number;
};
export type Prompt$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PromptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromptSelect<ExtArgs> | null;
    omit?: Prisma.PromptOmit<ExtArgs> | null;
    include?: Prisma.PromptInclude<ExtArgs> | null;
};
