import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RewindModel = runtime.Types.Result.DefaultSelection<Prisma.$RewindPayload>;
export type AggregateRewind = {
    _count: RewindCountAggregateOutputType | null;
    _min: RewindMinAggregateOutputType | null;
    _max: RewindMaxAggregateOutputType | null;
};
export type RewindMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    swipeId: string | null;
    wasFree: boolean | null;
    createdAt: Date | null;
};
export type RewindMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    swipeId: string | null;
    wasFree: boolean | null;
    createdAt: Date | null;
};
export type RewindCountAggregateOutputType = {
    id: number;
    userId: number;
    swipeId: number;
    wasFree: number;
    createdAt: number;
    _all: number;
};
export type RewindMinAggregateInputType = {
    id?: true;
    userId?: true;
    swipeId?: true;
    wasFree?: true;
    createdAt?: true;
};
export type RewindMaxAggregateInputType = {
    id?: true;
    userId?: true;
    swipeId?: true;
    wasFree?: true;
    createdAt?: true;
};
export type RewindCountAggregateInputType = {
    id?: true;
    userId?: true;
    swipeId?: true;
    wasFree?: true;
    createdAt?: true;
    _all?: true;
};
export type RewindAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewindWhereInput;
    orderBy?: Prisma.RewindOrderByWithRelationInput | Prisma.RewindOrderByWithRelationInput[];
    cursor?: Prisma.RewindWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RewindCountAggregateInputType;
    _min?: RewindMinAggregateInputType;
    _max?: RewindMaxAggregateInputType;
};
export type GetRewindAggregateType<T extends RewindAggregateArgs> = {
    [P in keyof T & keyof AggregateRewind]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRewind[P]> : Prisma.GetScalarType<T[P], AggregateRewind[P]>;
};
export type RewindGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewindWhereInput;
    orderBy?: Prisma.RewindOrderByWithAggregationInput | Prisma.RewindOrderByWithAggregationInput[];
    by: Prisma.RewindScalarFieldEnum[] | Prisma.RewindScalarFieldEnum;
    having?: Prisma.RewindScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RewindCountAggregateInputType | true;
    _min?: RewindMinAggregateInputType;
    _max?: RewindMaxAggregateInputType;
};
export type RewindGroupByOutputType = {
    id: string;
    userId: string;
    swipeId: string;
    wasFree: boolean;
    createdAt: Date;
    _count: RewindCountAggregateOutputType | null;
    _min: RewindMinAggregateOutputType | null;
    _max: RewindMaxAggregateOutputType | null;
};
export type GetRewindGroupByPayload<T extends RewindGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RewindGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RewindGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RewindGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RewindGroupByOutputType[P]>;
}>>;
export type RewindWhereInput = {
    AND?: Prisma.RewindWhereInput | Prisma.RewindWhereInput[];
    OR?: Prisma.RewindWhereInput[];
    NOT?: Prisma.RewindWhereInput | Prisma.RewindWhereInput[];
    id?: Prisma.UuidFilter<"Rewind"> | string;
    userId?: Prisma.UuidFilter<"Rewind"> | string;
    swipeId?: Prisma.UuidFilter<"Rewind"> | string;
    wasFree?: Prisma.BoolFilter<"Rewind"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Rewind"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    swipe?: Prisma.XOR<Prisma.SwipeScalarRelationFilter, Prisma.SwipeWhereInput>;
};
export type RewindOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    swipeId?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    swipe?: Prisma.SwipeOrderByWithRelationInput;
};
export type RewindWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    swipeId?: string;
    AND?: Prisma.RewindWhereInput | Prisma.RewindWhereInput[];
    OR?: Prisma.RewindWhereInput[];
    NOT?: Prisma.RewindWhereInput | Prisma.RewindWhereInput[];
    userId?: Prisma.UuidFilter<"Rewind"> | string;
    wasFree?: Prisma.BoolFilter<"Rewind"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Rewind"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    swipe?: Prisma.XOR<Prisma.SwipeScalarRelationFilter, Prisma.SwipeWhereInput>;
}, "id" | "swipeId">;
export type RewindOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    swipeId?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RewindCountOrderByAggregateInput;
    _max?: Prisma.RewindMaxOrderByAggregateInput;
    _min?: Prisma.RewindMinOrderByAggregateInput;
};
export type RewindScalarWhereWithAggregatesInput = {
    AND?: Prisma.RewindScalarWhereWithAggregatesInput | Prisma.RewindScalarWhereWithAggregatesInput[];
    OR?: Prisma.RewindScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RewindScalarWhereWithAggregatesInput | Prisma.RewindScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Rewind"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Rewind"> | string;
    swipeId?: Prisma.UuidWithAggregatesFilter<"Rewind"> | string;
    wasFree?: Prisma.BoolWithAggregatesFilter<"Rewind"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Rewind"> | Date | string;
};
export type RewindCreateInput = {
    id?: string;
    wasFree?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRewindsInput;
    swipe: Prisma.SwipeCreateNestedOneWithoutRewindInput;
};
export type RewindUncheckedCreateInput = {
    id?: string;
    userId: string;
    swipeId: string;
    wasFree?: boolean;
    createdAt?: Date | string;
};
export type RewindUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRewindsNestedInput;
    swipe?: Prisma.SwipeUpdateOneRequiredWithoutRewindNestedInput;
};
export type RewindUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    swipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewindCreateManyInput = {
    id?: string;
    userId: string;
    swipeId: string;
    wasFree?: boolean;
    createdAt?: Date | string;
};
export type RewindUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewindUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    swipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewindListRelationFilter = {
    every?: Prisma.RewindWhereInput;
    some?: Prisma.RewindWhereInput;
    none?: Prisma.RewindWhereInput;
};
export type RewindOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RewindNullableScalarRelationFilter = {
    is?: Prisma.RewindWhereInput | null;
    isNot?: Prisma.RewindWhereInput | null;
};
export type RewindCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    swipeId?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RewindMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    swipeId?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RewindMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    swipeId?: Prisma.SortOrder;
    wasFree?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RewindCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutUserInput, Prisma.RewindUncheckedCreateWithoutUserInput> | Prisma.RewindCreateWithoutUserInput[] | Prisma.RewindUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutUserInput | Prisma.RewindCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RewindCreateManyUserInputEnvelope;
    connect?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
};
export type RewindUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutUserInput, Prisma.RewindUncheckedCreateWithoutUserInput> | Prisma.RewindCreateWithoutUserInput[] | Prisma.RewindUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutUserInput | Prisma.RewindCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RewindCreateManyUserInputEnvelope;
    connect?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
};
export type RewindUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutUserInput, Prisma.RewindUncheckedCreateWithoutUserInput> | Prisma.RewindCreateWithoutUserInput[] | Prisma.RewindUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutUserInput | Prisma.RewindCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RewindUpsertWithWhereUniqueWithoutUserInput | Prisma.RewindUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RewindCreateManyUserInputEnvelope;
    set?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    disconnect?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    delete?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    connect?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    update?: Prisma.RewindUpdateWithWhereUniqueWithoutUserInput | Prisma.RewindUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RewindUpdateManyWithWhereWithoutUserInput | Prisma.RewindUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RewindScalarWhereInput | Prisma.RewindScalarWhereInput[];
};
export type RewindUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutUserInput, Prisma.RewindUncheckedCreateWithoutUserInput> | Prisma.RewindCreateWithoutUserInput[] | Prisma.RewindUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutUserInput | Prisma.RewindCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RewindUpsertWithWhereUniqueWithoutUserInput | Prisma.RewindUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RewindCreateManyUserInputEnvelope;
    set?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    disconnect?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    delete?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    connect?: Prisma.RewindWhereUniqueInput | Prisma.RewindWhereUniqueInput[];
    update?: Prisma.RewindUpdateWithWhereUniqueWithoutUserInput | Prisma.RewindUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RewindUpdateManyWithWhereWithoutUserInput | Prisma.RewindUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RewindScalarWhereInput | Prisma.RewindScalarWhereInput[];
};
export type RewindCreateNestedOneWithoutSwipeInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutSwipeInput, Prisma.RewindUncheckedCreateWithoutSwipeInput>;
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutSwipeInput;
    connect?: Prisma.RewindWhereUniqueInput;
};
export type RewindUncheckedCreateNestedOneWithoutSwipeInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutSwipeInput, Prisma.RewindUncheckedCreateWithoutSwipeInput>;
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutSwipeInput;
    connect?: Prisma.RewindWhereUniqueInput;
};
export type RewindUpdateOneWithoutSwipeNestedInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutSwipeInput, Prisma.RewindUncheckedCreateWithoutSwipeInput>;
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutSwipeInput;
    upsert?: Prisma.RewindUpsertWithoutSwipeInput;
    disconnect?: Prisma.RewindWhereInput | boolean;
    delete?: Prisma.RewindWhereInput | boolean;
    connect?: Prisma.RewindWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RewindUpdateToOneWithWhereWithoutSwipeInput, Prisma.RewindUpdateWithoutSwipeInput>, Prisma.RewindUncheckedUpdateWithoutSwipeInput>;
};
export type RewindUncheckedUpdateOneWithoutSwipeNestedInput = {
    create?: Prisma.XOR<Prisma.RewindCreateWithoutSwipeInput, Prisma.RewindUncheckedCreateWithoutSwipeInput>;
    connectOrCreate?: Prisma.RewindCreateOrConnectWithoutSwipeInput;
    upsert?: Prisma.RewindUpsertWithoutSwipeInput;
    disconnect?: Prisma.RewindWhereInput | boolean;
    delete?: Prisma.RewindWhereInput | boolean;
    connect?: Prisma.RewindWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RewindUpdateToOneWithWhereWithoutSwipeInput, Prisma.RewindUpdateWithoutSwipeInput>, Prisma.RewindUncheckedUpdateWithoutSwipeInput>;
};
export type RewindCreateWithoutUserInput = {
    id?: string;
    wasFree?: boolean;
    createdAt?: Date | string;
    swipe: Prisma.SwipeCreateNestedOneWithoutRewindInput;
};
export type RewindUncheckedCreateWithoutUserInput = {
    id?: string;
    swipeId: string;
    wasFree?: boolean;
    createdAt?: Date | string;
};
export type RewindCreateOrConnectWithoutUserInput = {
    where: Prisma.RewindWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewindCreateWithoutUserInput, Prisma.RewindUncheckedCreateWithoutUserInput>;
};
export type RewindCreateManyUserInputEnvelope = {
    data: Prisma.RewindCreateManyUserInput | Prisma.RewindCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RewindUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RewindWhereUniqueInput;
    update: Prisma.XOR<Prisma.RewindUpdateWithoutUserInput, Prisma.RewindUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RewindCreateWithoutUserInput, Prisma.RewindUncheckedCreateWithoutUserInput>;
};
export type RewindUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RewindWhereUniqueInput;
    data: Prisma.XOR<Prisma.RewindUpdateWithoutUserInput, Prisma.RewindUncheckedUpdateWithoutUserInput>;
};
export type RewindUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RewindScalarWhereInput;
    data: Prisma.XOR<Prisma.RewindUpdateManyMutationInput, Prisma.RewindUncheckedUpdateManyWithoutUserInput>;
};
export type RewindScalarWhereInput = {
    AND?: Prisma.RewindScalarWhereInput | Prisma.RewindScalarWhereInput[];
    OR?: Prisma.RewindScalarWhereInput[];
    NOT?: Prisma.RewindScalarWhereInput | Prisma.RewindScalarWhereInput[];
    id?: Prisma.UuidFilter<"Rewind"> | string;
    userId?: Prisma.UuidFilter<"Rewind"> | string;
    swipeId?: Prisma.UuidFilter<"Rewind"> | string;
    wasFree?: Prisma.BoolFilter<"Rewind"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Rewind"> | Date | string;
};
export type RewindCreateWithoutSwipeInput = {
    id?: string;
    wasFree?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRewindsInput;
};
export type RewindUncheckedCreateWithoutSwipeInput = {
    id?: string;
    userId: string;
    wasFree?: boolean;
    createdAt?: Date | string;
};
export type RewindCreateOrConnectWithoutSwipeInput = {
    where: Prisma.RewindWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewindCreateWithoutSwipeInput, Prisma.RewindUncheckedCreateWithoutSwipeInput>;
};
export type RewindUpsertWithoutSwipeInput = {
    update: Prisma.XOR<Prisma.RewindUpdateWithoutSwipeInput, Prisma.RewindUncheckedUpdateWithoutSwipeInput>;
    create: Prisma.XOR<Prisma.RewindCreateWithoutSwipeInput, Prisma.RewindUncheckedCreateWithoutSwipeInput>;
    where?: Prisma.RewindWhereInput;
};
export type RewindUpdateToOneWithWhereWithoutSwipeInput = {
    where?: Prisma.RewindWhereInput;
    data: Prisma.XOR<Prisma.RewindUpdateWithoutSwipeInput, Prisma.RewindUncheckedUpdateWithoutSwipeInput>;
};
export type RewindUpdateWithoutSwipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRewindsNestedInput;
};
export type RewindUncheckedUpdateWithoutSwipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewindCreateManyUserInput = {
    id?: string;
    swipeId: string;
    wasFree?: boolean;
    createdAt?: Date | string;
};
export type RewindUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    swipe?: Prisma.SwipeUpdateOneRequiredWithoutRewindNestedInput;
};
export type RewindUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    swipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewindUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    swipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    wasFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewindSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    swipeId?: boolean;
    wasFree?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    swipe?: boolean | Prisma.SwipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewind"]>;
export type RewindSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    swipeId?: boolean;
    wasFree?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    swipe?: boolean | Prisma.SwipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewind"]>;
export type RewindSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    swipeId?: boolean;
    wasFree?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    swipe?: boolean | Prisma.SwipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewind"]>;
export type RewindSelectScalar = {
    id?: boolean;
    userId?: boolean;
    swipeId?: boolean;
    wasFree?: boolean;
    createdAt?: boolean;
};
export type RewindOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "swipeId" | "wasFree" | "createdAt", ExtArgs["result"]["rewind"]>;
export type RewindInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    swipe?: boolean | Prisma.SwipeDefaultArgs<ExtArgs>;
};
export type RewindIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    swipe?: boolean | Prisma.SwipeDefaultArgs<ExtArgs>;
};
export type RewindIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    swipe?: boolean | Prisma.SwipeDefaultArgs<ExtArgs>;
};
export type $RewindPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rewind";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        swipe: Prisma.$SwipePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        swipeId: string;
        wasFree: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["rewind"]>;
    composites: {};
};
export type RewindGetPayload<S extends boolean | null | undefined | RewindDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RewindPayload, S>;
export type RewindCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RewindFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RewindCountAggregateInputType | true;
};
export interface RewindDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rewind'];
        meta: {
            name: 'Rewind';
        };
    };
    findUnique<T extends RewindFindUniqueArgs>(args: Prisma.SelectSubset<T, RewindFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RewindFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RewindFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RewindFindFirstArgs>(args?: Prisma.SelectSubset<T, RewindFindFirstArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RewindFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RewindFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RewindFindManyArgs>(args?: Prisma.SelectSubset<T, RewindFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RewindCreateArgs>(args: Prisma.SelectSubset<T, RewindCreateArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RewindCreateManyArgs>(args?: Prisma.SelectSubset<T, RewindCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RewindCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RewindCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RewindDeleteArgs>(args: Prisma.SelectSubset<T, RewindDeleteArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RewindUpdateArgs>(args: Prisma.SelectSubset<T, RewindUpdateArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RewindDeleteManyArgs>(args?: Prisma.SelectSubset<T, RewindDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RewindUpdateManyArgs>(args: Prisma.SelectSubset<T, RewindUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RewindUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RewindUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RewindUpsertArgs>(args: Prisma.SelectSubset<T, RewindUpsertArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RewindCountArgs>(args?: Prisma.Subset<T, RewindCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RewindCountAggregateOutputType> : number>;
    aggregate<T extends RewindAggregateArgs>(args: Prisma.Subset<T, RewindAggregateArgs>): Prisma.PrismaPromise<GetRewindAggregateType<T>>;
    groupBy<T extends RewindGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RewindGroupByArgs['orderBy'];
    } : {
        orderBy?: RewindGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RewindGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewindGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RewindFieldRefs;
}
export interface Prisma__RewindClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    swipe<T extends Prisma.SwipeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SwipeDefaultArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RewindFieldRefs {
    readonly id: Prisma.FieldRef<"Rewind", 'String'>;
    readonly userId: Prisma.FieldRef<"Rewind", 'String'>;
    readonly swipeId: Prisma.FieldRef<"Rewind", 'String'>;
    readonly wasFree: Prisma.FieldRef<"Rewind", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Rewind", 'DateTime'>;
}
export type RewindFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where: Prisma.RewindWhereUniqueInput;
};
export type RewindFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where: Prisma.RewindWhereUniqueInput;
};
export type RewindFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where?: Prisma.RewindWhereInput;
    orderBy?: Prisma.RewindOrderByWithRelationInput | Prisma.RewindOrderByWithRelationInput[];
    cursor?: Prisma.RewindWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewindScalarFieldEnum | Prisma.RewindScalarFieldEnum[];
};
export type RewindFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where?: Prisma.RewindWhereInput;
    orderBy?: Prisma.RewindOrderByWithRelationInput | Prisma.RewindOrderByWithRelationInput[];
    cursor?: Prisma.RewindWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewindScalarFieldEnum | Prisma.RewindScalarFieldEnum[];
};
export type RewindFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where?: Prisma.RewindWhereInput;
    orderBy?: Prisma.RewindOrderByWithRelationInput | Prisma.RewindOrderByWithRelationInput[];
    cursor?: Prisma.RewindWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewindScalarFieldEnum | Prisma.RewindScalarFieldEnum[];
};
export type RewindCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewindCreateInput, Prisma.RewindUncheckedCreateInput>;
};
export type RewindCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RewindCreateManyInput | Prisma.RewindCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewindCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    data: Prisma.RewindCreateManyInput | Prisma.RewindCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RewindIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RewindUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewindUpdateInput, Prisma.RewindUncheckedUpdateInput>;
    where: Prisma.RewindWhereUniqueInput;
};
export type RewindUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RewindUpdateManyMutationInput, Prisma.RewindUncheckedUpdateManyInput>;
    where?: Prisma.RewindWhereInput;
    limit?: number;
};
export type RewindUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewindUpdateManyMutationInput, Prisma.RewindUncheckedUpdateManyInput>;
    where?: Prisma.RewindWhereInput;
    limit?: number;
    include?: Prisma.RewindIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RewindUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where: Prisma.RewindWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewindCreateInput, Prisma.RewindUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RewindUpdateInput, Prisma.RewindUncheckedUpdateInput>;
};
export type RewindDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where: Prisma.RewindWhereUniqueInput;
};
export type RewindDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewindWhereInput;
    limit?: number;
};
export type RewindDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
};
