import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TranslationKeyModel = runtime.Types.Result.DefaultSelection<Prisma.$TranslationKeyPayload>;
export type AggregateTranslationKey = {
    _count: TranslationKeyCountAggregateOutputType | null;
    _min: TranslationKeyMinAggregateOutputType | null;
    _max: TranslationKeyMaxAggregateOutputType | null;
};
export type TranslationKeyMinAggregateOutputType = {
    id: string | null;
    key: string | null;
    namespace: string | null;
    fr: string | null;
    en: string | null;
    updatedAt: Date | null;
};
export type TranslationKeyMaxAggregateOutputType = {
    id: string | null;
    key: string | null;
    namespace: string | null;
    fr: string | null;
    en: string | null;
    updatedAt: Date | null;
};
export type TranslationKeyCountAggregateOutputType = {
    id: number;
    key: number;
    namespace: number;
    fr: number;
    en: number;
    updatedAt: number;
    _all: number;
};
export type TranslationKeyMinAggregateInputType = {
    id?: true;
    key?: true;
    namespace?: true;
    fr?: true;
    en?: true;
    updatedAt?: true;
};
export type TranslationKeyMaxAggregateInputType = {
    id?: true;
    key?: true;
    namespace?: true;
    fr?: true;
    en?: true;
    updatedAt?: true;
};
export type TranslationKeyCountAggregateInputType = {
    id?: true;
    key?: true;
    namespace?: true;
    fr?: true;
    en?: true;
    updatedAt?: true;
    _all?: true;
};
export type TranslationKeyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranslationKeyWhereInput;
    orderBy?: Prisma.TranslationKeyOrderByWithRelationInput | Prisma.TranslationKeyOrderByWithRelationInput[];
    cursor?: Prisma.TranslationKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TranslationKeyCountAggregateInputType;
    _min?: TranslationKeyMinAggregateInputType;
    _max?: TranslationKeyMaxAggregateInputType;
};
export type GetTranslationKeyAggregateType<T extends TranslationKeyAggregateArgs> = {
    [P in keyof T & keyof AggregateTranslationKey]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTranslationKey[P]> : Prisma.GetScalarType<T[P], AggregateTranslationKey[P]>;
};
export type TranslationKeyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranslationKeyWhereInput;
    orderBy?: Prisma.TranslationKeyOrderByWithAggregationInput | Prisma.TranslationKeyOrderByWithAggregationInput[];
    by: Prisma.TranslationKeyScalarFieldEnum[] | Prisma.TranslationKeyScalarFieldEnum;
    having?: Prisma.TranslationKeyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TranslationKeyCountAggregateInputType | true;
    _min?: TranslationKeyMinAggregateInputType;
    _max?: TranslationKeyMaxAggregateInputType;
};
export type TranslationKeyGroupByOutputType = {
    id: string;
    key: string;
    namespace: string;
    fr: string;
    en: string;
    updatedAt: Date;
    _count: TranslationKeyCountAggregateOutputType | null;
    _min: TranslationKeyMinAggregateOutputType | null;
    _max: TranslationKeyMaxAggregateOutputType | null;
};
export type GetTranslationKeyGroupByPayload<T extends TranslationKeyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TranslationKeyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TranslationKeyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TranslationKeyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TranslationKeyGroupByOutputType[P]>;
}>>;
export type TranslationKeyWhereInput = {
    AND?: Prisma.TranslationKeyWhereInput | Prisma.TranslationKeyWhereInput[];
    OR?: Prisma.TranslationKeyWhereInput[];
    NOT?: Prisma.TranslationKeyWhereInput | Prisma.TranslationKeyWhereInput[];
    id?: Prisma.UuidFilter<"TranslationKey"> | string;
    key?: Prisma.StringFilter<"TranslationKey"> | string;
    namespace?: Prisma.StringFilter<"TranslationKey"> | string;
    fr?: Prisma.StringFilter<"TranslationKey"> | string;
    en?: Prisma.StringFilter<"TranslationKey"> | string;
    updatedAt?: Prisma.DateTimeFilter<"TranslationKey"> | Date | string;
};
export type TranslationKeyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    namespace?: Prisma.SortOrder;
    fr?: Prisma.SortOrder;
    en?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TranslationKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    key?: string;
    AND?: Prisma.TranslationKeyWhereInput | Prisma.TranslationKeyWhereInput[];
    OR?: Prisma.TranslationKeyWhereInput[];
    NOT?: Prisma.TranslationKeyWhereInput | Prisma.TranslationKeyWhereInput[];
    namespace?: Prisma.StringFilter<"TranslationKey"> | string;
    fr?: Prisma.StringFilter<"TranslationKey"> | string;
    en?: Prisma.StringFilter<"TranslationKey"> | string;
    updatedAt?: Prisma.DateTimeFilter<"TranslationKey"> | Date | string;
}, "id" | "key">;
export type TranslationKeyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    namespace?: Prisma.SortOrder;
    fr?: Prisma.SortOrder;
    en?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TranslationKeyCountOrderByAggregateInput;
    _max?: Prisma.TranslationKeyMaxOrderByAggregateInput;
    _min?: Prisma.TranslationKeyMinOrderByAggregateInput;
};
export type TranslationKeyScalarWhereWithAggregatesInput = {
    AND?: Prisma.TranslationKeyScalarWhereWithAggregatesInput | Prisma.TranslationKeyScalarWhereWithAggregatesInput[];
    OR?: Prisma.TranslationKeyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TranslationKeyScalarWhereWithAggregatesInput | Prisma.TranslationKeyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TranslationKey"> | string;
    key?: Prisma.StringWithAggregatesFilter<"TranslationKey"> | string;
    namespace?: Prisma.StringWithAggregatesFilter<"TranslationKey"> | string;
    fr?: Prisma.StringWithAggregatesFilter<"TranslationKey"> | string;
    en?: Prisma.StringWithAggregatesFilter<"TranslationKey"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TranslationKey"> | Date | string;
};
export type TranslationKeyCreateInput = {
    id?: string;
    key: string;
    namespace: string;
    fr: string;
    en: string;
    updatedAt?: Date | string;
};
export type TranslationKeyUncheckedCreateInput = {
    id?: string;
    key: string;
    namespace: string;
    fr: string;
    en: string;
    updatedAt?: Date | string;
};
export type TranslationKeyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    namespace?: Prisma.StringFieldUpdateOperationsInput | string;
    fr?: Prisma.StringFieldUpdateOperationsInput | string;
    en?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranslationKeyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    namespace?: Prisma.StringFieldUpdateOperationsInput | string;
    fr?: Prisma.StringFieldUpdateOperationsInput | string;
    en?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranslationKeyCreateManyInput = {
    id?: string;
    key: string;
    namespace: string;
    fr: string;
    en: string;
    updatedAt?: Date | string;
};
export type TranslationKeyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    namespace?: Prisma.StringFieldUpdateOperationsInput | string;
    fr?: Prisma.StringFieldUpdateOperationsInput | string;
    en?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranslationKeyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    namespace?: Prisma.StringFieldUpdateOperationsInput | string;
    fr?: Prisma.StringFieldUpdateOperationsInput | string;
    en?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranslationKeyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    namespace?: Prisma.SortOrder;
    fr?: Prisma.SortOrder;
    en?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TranslationKeyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    namespace?: Prisma.SortOrder;
    fr?: Prisma.SortOrder;
    en?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TranslationKeyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    namespace?: Prisma.SortOrder;
    fr?: Prisma.SortOrder;
    en?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TranslationKeySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    namespace?: boolean;
    fr?: boolean;
    en?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["translationKey"]>;
export type TranslationKeySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    namespace?: boolean;
    fr?: boolean;
    en?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["translationKey"]>;
export type TranslationKeySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    namespace?: boolean;
    fr?: boolean;
    en?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["translationKey"]>;
export type TranslationKeySelectScalar = {
    id?: boolean;
    key?: boolean;
    namespace?: boolean;
    fr?: boolean;
    en?: boolean;
    updatedAt?: boolean;
};
export type TranslationKeyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "namespace" | "fr" | "en" | "updatedAt", ExtArgs["result"]["translationKey"]>;
export type $TranslationKeyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TranslationKey";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        key: string;
        namespace: string;
        fr: string;
        en: string;
        updatedAt: Date;
    }, ExtArgs["result"]["translationKey"]>;
    composites: {};
};
export type TranslationKeyGetPayload<S extends boolean | null | undefined | TranslationKeyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload, S>;
export type TranslationKeyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TranslationKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TranslationKeyCountAggregateInputType | true;
};
export interface TranslationKeyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TranslationKey'];
        meta: {
            name: 'TranslationKey';
        };
    };
    findUnique<T extends TranslationKeyFindUniqueArgs>(args: Prisma.SelectSubset<T, TranslationKeyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TranslationKeyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TranslationKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TranslationKeyFindFirstArgs>(args?: Prisma.SelectSubset<T, TranslationKeyFindFirstArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TranslationKeyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TranslationKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TranslationKeyFindManyArgs>(args?: Prisma.SelectSubset<T, TranslationKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TranslationKeyCreateArgs>(args: Prisma.SelectSubset<T, TranslationKeyCreateArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TranslationKeyCreateManyArgs>(args?: Prisma.SelectSubset<T, TranslationKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TranslationKeyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TranslationKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TranslationKeyDeleteArgs>(args: Prisma.SelectSubset<T, TranslationKeyDeleteArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TranslationKeyUpdateArgs>(args: Prisma.SelectSubset<T, TranslationKeyUpdateArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TranslationKeyDeleteManyArgs>(args?: Prisma.SelectSubset<T, TranslationKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TranslationKeyUpdateManyArgs>(args: Prisma.SelectSubset<T, TranslationKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TranslationKeyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TranslationKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TranslationKeyUpsertArgs>(args: Prisma.SelectSubset<T, TranslationKeyUpsertArgs<ExtArgs>>): Prisma.Prisma__TranslationKeyClient<runtime.Types.Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TranslationKeyCountArgs>(args?: Prisma.Subset<T, TranslationKeyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TranslationKeyCountAggregateOutputType> : number>;
    aggregate<T extends TranslationKeyAggregateArgs>(args: Prisma.Subset<T, TranslationKeyAggregateArgs>): Prisma.PrismaPromise<GetTranslationKeyAggregateType<T>>;
    groupBy<T extends TranslationKeyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TranslationKeyGroupByArgs['orderBy'];
    } : {
        orderBy?: TranslationKeyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TranslationKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TranslationKeyFieldRefs;
}
export interface Prisma__TranslationKeyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TranslationKeyFieldRefs {
    readonly id: Prisma.FieldRef<"TranslationKey", 'String'>;
    readonly key: Prisma.FieldRef<"TranslationKey", 'String'>;
    readonly namespace: Prisma.FieldRef<"TranslationKey", 'String'>;
    readonly fr: Prisma.FieldRef<"TranslationKey", 'String'>;
    readonly en: Prisma.FieldRef<"TranslationKey", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"TranslationKey", 'DateTime'>;
}
export type TranslationKeyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    where: Prisma.TranslationKeyWhereUniqueInput;
};
export type TranslationKeyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    where: Prisma.TranslationKeyWhereUniqueInput;
};
export type TranslationKeyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    where?: Prisma.TranslationKeyWhereInput;
    orderBy?: Prisma.TranslationKeyOrderByWithRelationInput | Prisma.TranslationKeyOrderByWithRelationInput[];
    cursor?: Prisma.TranslationKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranslationKeyScalarFieldEnum | Prisma.TranslationKeyScalarFieldEnum[];
};
export type TranslationKeyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    where?: Prisma.TranslationKeyWhereInput;
    orderBy?: Prisma.TranslationKeyOrderByWithRelationInput | Prisma.TranslationKeyOrderByWithRelationInput[];
    cursor?: Prisma.TranslationKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranslationKeyScalarFieldEnum | Prisma.TranslationKeyScalarFieldEnum[];
};
export type TranslationKeyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    where?: Prisma.TranslationKeyWhereInput;
    orderBy?: Prisma.TranslationKeyOrderByWithRelationInput | Prisma.TranslationKeyOrderByWithRelationInput[];
    cursor?: Prisma.TranslationKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranslationKeyScalarFieldEnum | Prisma.TranslationKeyScalarFieldEnum[];
};
export type TranslationKeyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranslationKeyCreateInput, Prisma.TranslationKeyUncheckedCreateInput>;
};
export type TranslationKeyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TranslationKeyCreateManyInput | Prisma.TranslationKeyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TranslationKeyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    data: Prisma.TranslationKeyCreateManyInput | Prisma.TranslationKeyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TranslationKeyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranslationKeyUpdateInput, Prisma.TranslationKeyUncheckedUpdateInput>;
    where: Prisma.TranslationKeyWhereUniqueInput;
};
export type TranslationKeyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TranslationKeyUpdateManyMutationInput, Prisma.TranslationKeyUncheckedUpdateManyInput>;
    where?: Prisma.TranslationKeyWhereInput;
    limit?: number;
};
export type TranslationKeyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranslationKeyUpdateManyMutationInput, Prisma.TranslationKeyUncheckedUpdateManyInput>;
    where?: Prisma.TranslationKeyWhereInput;
    limit?: number;
};
export type TranslationKeyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    where: Prisma.TranslationKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.TranslationKeyCreateInput, Prisma.TranslationKeyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TranslationKeyUpdateInput, Prisma.TranslationKeyUncheckedUpdateInput>;
};
export type TranslationKeyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
    where: Prisma.TranslationKeyWhereUniqueInput;
};
export type TranslationKeyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranslationKeyWhereInput;
    limit?: number;
};
export type TranslationKeyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranslationKeySelect<ExtArgs> | null;
    omit?: Prisma.TranslationKeyOmit<ExtArgs> | null;
};
