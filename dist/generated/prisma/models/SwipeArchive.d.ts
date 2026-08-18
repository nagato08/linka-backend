import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SwipeArchiveModel = runtime.Types.Result.DefaultSelection<Prisma.$SwipeArchivePayload>;
export type AggregateSwipeArchive = {
    _count: SwipeArchiveCountAggregateOutputType | null;
    _min: SwipeArchiveMinAggregateOutputType | null;
    _max: SwipeArchiveMaxAggregateOutputType | null;
};
export type SwipeArchiveMinAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    targetId: string | null;
    action: $Enums.SwipeAction | null;
    source: $Enums.SwipeSource | null;
    isRewound: boolean | null;
    createdAt: Date | null;
    archivedAt: Date | null;
};
export type SwipeArchiveMaxAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    targetId: string | null;
    action: $Enums.SwipeAction | null;
    source: $Enums.SwipeSource | null;
    isRewound: boolean | null;
    createdAt: Date | null;
    archivedAt: Date | null;
};
export type SwipeArchiveCountAggregateOutputType = {
    id: number;
    actorId: number;
    targetId: number;
    action: number;
    source: number;
    isRewound: number;
    createdAt: number;
    archivedAt: number;
    _all: number;
};
export type SwipeArchiveMinAggregateInputType = {
    id?: true;
    actorId?: true;
    targetId?: true;
    action?: true;
    source?: true;
    isRewound?: true;
    createdAt?: true;
    archivedAt?: true;
};
export type SwipeArchiveMaxAggregateInputType = {
    id?: true;
    actorId?: true;
    targetId?: true;
    action?: true;
    source?: true;
    isRewound?: true;
    createdAt?: true;
    archivedAt?: true;
};
export type SwipeArchiveCountAggregateInputType = {
    id?: true;
    actorId?: true;
    targetId?: true;
    action?: true;
    source?: true;
    isRewound?: true;
    createdAt?: true;
    archivedAt?: true;
    _all?: true;
};
export type SwipeArchiveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SwipeArchiveWhereInput;
    orderBy?: Prisma.SwipeArchiveOrderByWithRelationInput | Prisma.SwipeArchiveOrderByWithRelationInput[];
    cursor?: Prisma.SwipeArchiveWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SwipeArchiveCountAggregateInputType;
    _min?: SwipeArchiveMinAggregateInputType;
    _max?: SwipeArchiveMaxAggregateInputType;
};
export type GetSwipeArchiveAggregateType<T extends SwipeArchiveAggregateArgs> = {
    [P in keyof T & keyof AggregateSwipeArchive]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSwipeArchive[P]> : Prisma.GetScalarType<T[P], AggregateSwipeArchive[P]>;
};
export type SwipeArchiveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SwipeArchiveWhereInput;
    orderBy?: Prisma.SwipeArchiveOrderByWithAggregationInput | Prisma.SwipeArchiveOrderByWithAggregationInput[];
    by: Prisma.SwipeArchiveScalarFieldEnum[] | Prisma.SwipeArchiveScalarFieldEnum;
    having?: Prisma.SwipeArchiveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SwipeArchiveCountAggregateInputType | true;
    _min?: SwipeArchiveMinAggregateInputType;
    _max?: SwipeArchiveMaxAggregateInputType;
};
export type SwipeArchiveGroupByOutputType = {
    id: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source: $Enums.SwipeSource;
    isRewound: boolean;
    createdAt: Date;
    archivedAt: Date;
    _count: SwipeArchiveCountAggregateOutputType | null;
    _min: SwipeArchiveMinAggregateOutputType | null;
    _max: SwipeArchiveMaxAggregateOutputType | null;
};
export type GetSwipeArchiveGroupByPayload<T extends SwipeArchiveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SwipeArchiveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SwipeArchiveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SwipeArchiveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SwipeArchiveGroupByOutputType[P]>;
}>>;
export type SwipeArchiveWhereInput = {
    AND?: Prisma.SwipeArchiveWhereInput | Prisma.SwipeArchiveWhereInput[];
    OR?: Prisma.SwipeArchiveWhereInput[];
    NOT?: Prisma.SwipeArchiveWhereInput | Prisma.SwipeArchiveWhereInput[];
    id?: Prisma.UuidFilter<"SwipeArchive"> | string;
    actorId?: Prisma.UuidFilter<"SwipeArchive"> | string;
    targetId?: Prisma.UuidFilter<"SwipeArchive"> | string;
    action?: Prisma.EnumSwipeActionFilter<"SwipeArchive"> | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFilter<"SwipeArchive"> | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFilter<"SwipeArchive"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SwipeArchive"> | Date | string;
    archivedAt?: Prisma.DateTimeFilter<"SwipeArchive"> | Date | string;
};
export type SwipeArchiveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
};
export type SwipeArchiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SwipeArchiveWhereInput | Prisma.SwipeArchiveWhereInput[];
    OR?: Prisma.SwipeArchiveWhereInput[];
    NOT?: Prisma.SwipeArchiveWhereInput | Prisma.SwipeArchiveWhereInput[];
    actorId?: Prisma.UuidFilter<"SwipeArchive"> | string;
    targetId?: Prisma.UuidFilter<"SwipeArchive"> | string;
    action?: Prisma.EnumSwipeActionFilter<"SwipeArchive"> | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFilter<"SwipeArchive"> | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFilter<"SwipeArchive"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SwipeArchive"> | Date | string;
    archivedAt?: Prisma.DateTimeFilter<"SwipeArchive"> | Date | string;
}, "id">;
export type SwipeArchiveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
    _count?: Prisma.SwipeArchiveCountOrderByAggregateInput;
    _max?: Prisma.SwipeArchiveMaxOrderByAggregateInput;
    _min?: Prisma.SwipeArchiveMinOrderByAggregateInput;
};
export type SwipeArchiveScalarWhereWithAggregatesInput = {
    AND?: Prisma.SwipeArchiveScalarWhereWithAggregatesInput | Prisma.SwipeArchiveScalarWhereWithAggregatesInput[];
    OR?: Prisma.SwipeArchiveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SwipeArchiveScalarWhereWithAggregatesInput | Prisma.SwipeArchiveScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SwipeArchive"> | string;
    actorId?: Prisma.UuidWithAggregatesFilter<"SwipeArchive"> | string;
    targetId?: Prisma.UuidWithAggregatesFilter<"SwipeArchive"> | string;
    action?: Prisma.EnumSwipeActionWithAggregatesFilter<"SwipeArchive"> | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceWithAggregatesFilter<"SwipeArchive"> | $Enums.SwipeSource;
    isRewound?: Prisma.BoolWithAggregatesFilter<"SwipeArchive"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SwipeArchive"> | Date | string;
    archivedAt?: Prisma.DateTimeWithAggregatesFilter<"SwipeArchive"> | Date | string;
};
export type SwipeArchiveCreateInput = {
    id: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source: $Enums.SwipeSource;
    isRewound: boolean;
    createdAt: Date | string;
    archivedAt?: Date | string;
};
export type SwipeArchiveUncheckedCreateInput = {
    id: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source: $Enums.SwipeSource;
    isRewound: boolean;
    createdAt: Date | string;
    archivedAt?: Date | string;
};
export type SwipeArchiveUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeArchiveUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeArchiveCreateManyInput = {
    id: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source: $Enums.SwipeSource;
    isRewound: boolean;
    createdAt: Date | string;
    archivedAt?: Date | string;
};
export type SwipeArchiveUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeArchiveUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    archivedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeArchiveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
};
export type SwipeArchiveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
};
export type SwipeArchiveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
};
export type SwipeArchiveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
    archivedAt?: boolean;
}, ExtArgs["result"]["swipeArchive"]>;
export type SwipeArchiveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
    archivedAt?: boolean;
}, ExtArgs["result"]["swipeArchive"]>;
export type SwipeArchiveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
    archivedAt?: boolean;
}, ExtArgs["result"]["swipeArchive"]>;
export type SwipeArchiveSelectScalar = {
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
    archivedAt?: boolean;
};
export type SwipeArchiveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "actorId" | "targetId" | "action" | "source" | "isRewound" | "createdAt" | "archivedAt", ExtArgs["result"]["swipeArchive"]>;
export type $SwipeArchivePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SwipeArchive";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        actorId: string;
        targetId: string;
        action: $Enums.SwipeAction;
        source: $Enums.SwipeSource;
        isRewound: boolean;
        createdAt: Date;
        archivedAt: Date;
    }, ExtArgs["result"]["swipeArchive"]>;
    composites: {};
};
export type SwipeArchiveGetPayload<S extends boolean | null | undefined | SwipeArchiveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload, S>;
export type SwipeArchiveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SwipeArchiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SwipeArchiveCountAggregateInputType | true;
};
export interface SwipeArchiveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SwipeArchive'];
        meta: {
            name: 'SwipeArchive';
        };
    };
    findUnique<T extends SwipeArchiveFindUniqueArgs>(args: Prisma.SelectSubset<T, SwipeArchiveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SwipeArchiveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SwipeArchiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SwipeArchiveFindFirstArgs>(args?: Prisma.SelectSubset<T, SwipeArchiveFindFirstArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SwipeArchiveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SwipeArchiveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SwipeArchiveFindManyArgs>(args?: Prisma.SelectSubset<T, SwipeArchiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SwipeArchiveCreateArgs>(args: Prisma.SelectSubset<T, SwipeArchiveCreateArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SwipeArchiveCreateManyArgs>(args?: Prisma.SelectSubset<T, SwipeArchiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SwipeArchiveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SwipeArchiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SwipeArchiveDeleteArgs>(args: Prisma.SelectSubset<T, SwipeArchiveDeleteArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SwipeArchiveUpdateArgs>(args: Prisma.SelectSubset<T, SwipeArchiveUpdateArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SwipeArchiveDeleteManyArgs>(args?: Prisma.SelectSubset<T, SwipeArchiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SwipeArchiveUpdateManyArgs>(args: Prisma.SelectSubset<T, SwipeArchiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SwipeArchiveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SwipeArchiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SwipeArchiveUpsertArgs>(args: Prisma.SelectSubset<T, SwipeArchiveUpsertArgs<ExtArgs>>): Prisma.Prisma__SwipeArchiveClient<runtime.Types.Result.GetResult<Prisma.$SwipeArchivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SwipeArchiveCountArgs>(args?: Prisma.Subset<T, SwipeArchiveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SwipeArchiveCountAggregateOutputType> : number>;
    aggregate<T extends SwipeArchiveAggregateArgs>(args: Prisma.Subset<T, SwipeArchiveAggregateArgs>): Prisma.PrismaPromise<GetSwipeArchiveAggregateType<T>>;
    groupBy<T extends SwipeArchiveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SwipeArchiveGroupByArgs['orderBy'];
    } : {
        orderBy?: SwipeArchiveGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SwipeArchiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwipeArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SwipeArchiveFieldRefs;
}
export interface Prisma__SwipeArchiveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SwipeArchiveFieldRefs {
    readonly id: Prisma.FieldRef<"SwipeArchive", 'String'>;
    readonly actorId: Prisma.FieldRef<"SwipeArchive", 'String'>;
    readonly targetId: Prisma.FieldRef<"SwipeArchive", 'String'>;
    readonly action: Prisma.FieldRef<"SwipeArchive", 'SwipeAction'>;
    readonly source: Prisma.FieldRef<"SwipeArchive", 'SwipeSource'>;
    readonly isRewound: Prisma.FieldRef<"SwipeArchive", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"SwipeArchive", 'DateTime'>;
    readonly archivedAt: Prisma.FieldRef<"SwipeArchive", 'DateTime'>;
}
export type SwipeArchiveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    where: Prisma.SwipeArchiveWhereUniqueInput;
};
export type SwipeArchiveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    where: Prisma.SwipeArchiveWhereUniqueInput;
};
export type SwipeArchiveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    where?: Prisma.SwipeArchiveWhereInput;
    orderBy?: Prisma.SwipeArchiveOrderByWithRelationInput | Prisma.SwipeArchiveOrderByWithRelationInput[];
    cursor?: Prisma.SwipeArchiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SwipeArchiveScalarFieldEnum | Prisma.SwipeArchiveScalarFieldEnum[];
};
export type SwipeArchiveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    where?: Prisma.SwipeArchiveWhereInput;
    orderBy?: Prisma.SwipeArchiveOrderByWithRelationInput | Prisma.SwipeArchiveOrderByWithRelationInput[];
    cursor?: Prisma.SwipeArchiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SwipeArchiveScalarFieldEnum | Prisma.SwipeArchiveScalarFieldEnum[];
};
export type SwipeArchiveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    where?: Prisma.SwipeArchiveWhereInput;
    orderBy?: Prisma.SwipeArchiveOrderByWithRelationInput | Prisma.SwipeArchiveOrderByWithRelationInput[];
    cursor?: Prisma.SwipeArchiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SwipeArchiveScalarFieldEnum | Prisma.SwipeArchiveScalarFieldEnum[];
};
export type SwipeArchiveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SwipeArchiveCreateInput, Prisma.SwipeArchiveUncheckedCreateInput>;
};
export type SwipeArchiveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SwipeArchiveCreateManyInput | Prisma.SwipeArchiveCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SwipeArchiveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    data: Prisma.SwipeArchiveCreateManyInput | Prisma.SwipeArchiveCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SwipeArchiveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SwipeArchiveUpdateInput, Prisma.SwipeArchiveUncheckedUpdateInput>;
    where: Prisma.SwipeArchiveWhereUniqueInput;
};
export type SwipeArchiveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SwipeArchiveUpdateManyMutationInput, Prisma.SwipeArchiveUncheckedUpdateManyInput>;
    where?: Prisma.SwipeArchiveWhereInput;
    limit?: number;
};
export type SwipeArchiveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SwipeArchiveUpdateManyMutationInput, Prisma.SwipeArchiveUncheckedUpdateManyInput>;
    where?: Prisma.SwipeArchiveWhereInput;
    limit?: number;
};
export type SwipeArchiveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    where: Prisma.SwipeArchiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.SwipeArchiveCreateInput, Prisma.SwipeArchiveUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SwipeArchiveUpdateInput, Prisma.SwipeArchiveUncheckedUpdateInput>;
};
export type SwipeArchiveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
    where: Prisma.SwipeArchiveWhereUniqueInput;
};
export type SwipeArchiveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SwipeArchiveWhereInput;
    limit?: number;
};
export type SwipeArchiveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeArchiveSelect<ExtArgs> | null;
    omit?: Prisma.SwipeArchiveOmit<ExtArgs> | null;
};
