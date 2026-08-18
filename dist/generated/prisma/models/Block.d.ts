import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlockModel = runtime.Types.Result.DefaultSelection<Prisma.$BlockPayload>;
export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null;
    _min: BlockMinAggregateOutputType | null;
    _max: BlockMaxAggregateOutputType | null;
};
export type BlockMinAggregateOutputType = {
    blockerId: string | null;
    blockedId: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type BlockMaxAggregateOutputType = {
    blockerId: string | null;
    blockedId: string | null;
    reason: string | null;
    createdAt: Date | null;
};
export type BlockCountAggregateOutputType = {
    blockerId: number;
    blockedId: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type BlockMinAggregateInputType = {
    blockerId?: true;
    blockedId?: true;
    reason?: true;
    createdAt?: true;
};
export type BlockMaxAggregateInputType = {
    blockerId?: true;
    blockedId?: true;
    reason?: true;
    createdAt?: true;
};
export type BlockCountAggregateInputType = {
    blockerId?: true;
    blockedId?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type BlockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockWhereInput;
    orderBy?: Prisma.BlockOrderByWithRelationInput | Prisma.BlockOrderByWithRelationInput[];
    cursor?: Prisma.BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlockCountAggregateInputType;
    _min?: BlockMinAggregateInputType;
    _max?: BlockMaxAggregateInputType;
};
export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
    [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlock[P]> : Prisma.GetScalarType<T[P], AggregateBlock[P]>;
};
export type BlockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockWhereInput;
    orderBy?: Prisma.BlockOrderByWithAggregationInput | Prisma.BlockOrderByWithAggregationInput[];
    by: Prisma.BlockScalarFieldEnum[] | Prisma.BlockScalarFieldEnum;
    having?: Prisma.BlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlockCountAggregateInputType | true;
    _min?: BlockMinAggregateInputType;
    _max?: BlockMaxAggregateInputType;
};
export type BlockGroupByOutputType = {
    blockerId: string;
    blockedId: string;
    reason: string | null;
    createdAt: Date;
    _count: BlockCountAggregateOutputType | null;
    _min: BlockMinAggregateOutputType | null;
    _max: BlockMaxAggregateOutputType | null;
};
export type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlockGroupByOutputType[P]>;
}>>;
export type BlockWhereInput = {
    AND?: Prisma.BlockWhereInput | Prisma.BlockWhereInput[];
    OR?: Prisma.BlockWhereInput[];
    NOT?: Prisma.BlockWhereInput | Prisma.BlockWhereInput[];
    blockerId?: Prisma.UuidFilter<"Block"> | string;
    blockedId?: Prisma.UuidFilter<"Block"> | string;
    reason?: Prisma.StringNullableFilter<"Block"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Block"> | Date | string;
    blocker?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    blocked?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BlockOrderByWithRelationInput = {
    blockerId?: Prisma.SortOrder;
    blockedId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    blocker?: Prisma.UserOrderByWithRelationInput;
    blocked?: Prisma.UserOrderByWithRelationInput;
};
export type BlockWhereUniqueInput = Prisma.AtLeast<{
    blockerId_blockedId?: Prisma.BlockBlockerIdBlockedIdCompoundUniqueInput;
    AND?: Prisma.BlockWhereInput | Prisma.BlockWhereInput[];
    OR?: Prisma.BlockWhereInput[];
    NOT?: Prisma.BlockWhereInput | Prisma.BlockWhereInput[];
    blockerId?: Prisma.UuidFilter<"Block"> | string;
    blockedId?: Prisma.UuidFilter<"Block"> | string;
    reason?: Prisma.StringNullableFilter<"Block"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Block"> | Date | string;
    blocker?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    blocked?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "blockerId_blockedId">;
export type BlockOrderByWithAggregationInput = {
    blockerId?: Prisma.SortOrder;
    blockedId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BlockCountOrderByAggregateInput;
    _max?: Prisma.BlockMaxOrderByAggregateInput;
    _min?: Prisma.BlockMinOrderByAggregateInput;
};
export type BlockScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlockScalarWhereWithAggregatesInput | Prisma.BlockScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlockScalarWhereWithAggregatesInput | Prisma.BlockScalarWhereWithAggregatesInput[];
    blockerId?: Prisma.UuidWithAggregatesFilter<"Block"> | string;
    blockedId?: Prisma.UuidWithAggregatesFilter<"Block"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"Block"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Block"> | Date | string;
};
export type BlockCreateInput = {
    reason?: string | null;
    createdAt?: Date | string;
    blocker: Prisma.UserCreateNestedOneWithoutBlocksMadeInput;
    blocked: Prisma.UserCreateNestedOneWithoutBlocksReceivedInput;
};
export type BlockUncheckedCreateInput = {
    blockerId: string;
    blockedId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type BlockUpdateInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blocker?: Prisma.UserUpdateOneRequiredWithoutBlocksMadeNestedInput;
    blocked?: Prisma.UserUpdateOneRequiredWithoutBlocksReceivedNestedInput;
};
export type BlockUncheckedUpdateInput = {
    blockerId?: Prisma.StringFieldUpdateOperationsInput | string;
    blockedId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockCreateManyInput = {
    blockerId: string;
    blockedId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type BlockUpdateManyMutationInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockUncheckedUpdateManyInput = {
    blockerId?: Prisma.StringFieldUpdateOperationsInput | string;
    blockedId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockListRelationFilter = {
    every?: Prisma.BlockWhereInput;
    some?: Prisma.BlockWhereInput;
    none?: Prisma.BlockWhereInput;
};
export type BlockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BlockBlockerIdBlockedIdCompoundUniqueInput = {
    blockerId: string;
    blockedId: string;
};
export type BlockCountOrderByAggregateInput = {
    blockerId?: Prisma.SortOrder;
    blockedId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlockMaxOrderByAggregateInput = {
    blockerId?: Prisma.SortOrder;
    blockedId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlockMinOrderByAggregateInput = {
    blockerId?: Prisma.SortOrder;
    blockedId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlockCreateNestedManyWithoutBlockerInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockerInput, Prisma.BlockUncheckedCreateWithoutBlockerInput> | Prisma.BlockCreateWithoutBlockerInput[] | Prisma.BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockerInput | Prisma.BlockCreateOrConnectWithoutBlockerInput[];
    createMany?: Prisma.BlockCreateManyBlockerInputEnvelope;
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
};
export type BlockCreateNestedManyWithoutBlockedInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockedInput, Prisma.BlockUncheckedCreateWithoutBlockedInput> | Prisma.BlockCreateWithoutBlockedInput[] | Prisma.BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockedInput | Prisma.BlockCreateOrConnectWithoutBlockedInput[];
    createMany?: Prisma.BlockCreateManyBlockedInputEnvelope;
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
};
export type BlockUncheckedCreateNestedManyWithoutBlockerInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockerInput, Prisma.BlockUncheckedCreateWithoutBlockerInput> | Prisma.BlockCreateWithoutBlockerInput[] | Prisma.BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockerInput | Prisma.BlockCreateOrConnectWithoutBlockerInput[];
    createMany?: Prisma.BlockCreateManyBlockerInputEnvelope;
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
};
export type BlockUncheckedCreateNestedManyWithoutBlockedInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockedInput, Prisma.BlockUncheckedCreateWithoutBlockedInput> | Prisma.BlockCreateWithoutBlockedInput[] | Prisma.BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockedInput | Prisma.BlockCreateOrConnectWithoutBlockedInput[];
    createMany?: Prisma.BlockCreateManyBlockedInputEnvelope;
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
};
export type BlockUpdateManyWithoutBlockerNestedInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockerInput, Prisma.BlockUncheckedCreateWithoutBlockerInput> | Prisma.BlockCreateWithoutBlockerInput[] | Prisma.BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockerInput | Prisma.BlockCreateOrConnectWithoutBlockerInput[];
    upsert?: Prisma.BlockUpsertWithWhereUniqueWithoutBlockerInput | Prisma.BlockUpsertWithWhereUniqueWithoutBlockerInput[];
    createMany?: Prisma.BlockCreateManyBlockerInputEnvelope;
    set?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    disconnect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    delete?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    update?: Prisma.BlockUpdateWithWhereUniqueWithoutBlockerInput | Prisma.BlockUpdateWithWhereUniqueWithoutBlockerInput[];
    updateMany?: Prisma.BlockUpdateManyWithWhereWithoutBlockerInput | Prisma.BlockUpdateManyWithWhereWithoutBlockerInput[];
    deleteMany?: Prisma.BlockScalarWhereInput | Prisma.BlockScalarWhereInput[];
};
export type BlockUpdateManyWithoutBlockedNestedInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockedInput, Prisma.BlockUncheckedCreateWithoutBlockedInput> | Prisma.BlockCreateWithoutBlockedInput[] | Prisma.BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockedInput | Prisma.BlockCreateOrConnectWithoutBlockedInput[];
    upsert?: Prisma.BlockUpsertWithWhereUniqueWithoutBlockedInput | Prisma.BlockUpsertWithWhereUniqueWithoutBlockedInput[];
    createMany?: Prisma.BlockCreateManyBlockedInputEnvelope;
    set?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    disconnect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    delete?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    update?: Prisma.BlockUpdateWithWhereUniqueWithoutBlockedInput | Prisma.BlockUpdateWithWhereUniqueWithoutBlockedInput[];
    updateMany?: Prisma.BlockUpdateManyWithWhereWithoutBlockedInput | Prisma.BlockUpdateManyWithWhereWithoutBlockedInput[];
    deleteMany?: Prisma.BlockScalarWhereInput | Prisma.BlockScalarWhereInput[];
};
export type BlockUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockerInput, Prisma.BlockUncheckedCreateWithoutBlockerInput> | Prisma.BlockCreateWithoutBlockerInput[] | Prisma.BlockUncheckedCreateWithoutBlockerInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockerInput | Prisma.BlockCreateOrConnectWithoutBlockerInput[];
    upsert?: Prisma.BlockUpsertWithWhereUniqueWithoutBlockerInput | Prisma.BlockUpsertWithWhereUniqueWithoutBlockerInput[];
    createMany?: Prisma.BlockCreateManyBlockerInputEnvelope;
    set?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    disconnect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    delete?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    update?: Prisma.BlockUpdateWithWhereUniqueWithoutBlockerInput | Prisma.BlockUpdateWithWhereUniqueWithoutBlockerInput[];
    updateMany?: Prisma.BlockUpdateManyWithWhereWithoutBlockerInput | Prisma.BlockUpdateManyWithWhereWithoutBlockerInput[];
    deleteMany?: Prisma.BlockScalarWhereInput | Prisma.BlockScalarWhereInput[];
};
export type BlockUncheckedUpdateManyWithoutBlockedNestedInput = {
    create?: Prisma.XOR<Prisma.BlockCreateWithoutBlockedInput, Prisma.BlockUncheckedCreateWithoutBlockedInput> | Prisma.BlockCreateWithoutBlockedInput[] | Prisma.BlockUncheckedCreateWithoutBlockedInput[];
    connectOrCreate?: Prisma.BlockCreateOrConnectWithoutBlockedInput | Prisma.BlockCreateOrConnectWithoutBlockedInput[];
    upsert?: Prisma.BlockUpsertWithWhereUniqueWithoutBlockedInput | Prisma.BlockUpsertWithWhereUniqueWithoutBlockedInput[];
    createMany?: Prisma.BlockCreateManyBlockedInputEnvelope;
    set?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    disconnect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    delete?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    connect?: Prisma.BlockWhereUniqueInput | Prisma.BlockWhereUniqueInput[];
    update?: Prisma.BlockUpdateWithWhereUniqueWithoutBlockedInput | Prisma.BlockUpdateWithWhereUniqueWithoutBlockedInput[];
    updateMany?: Prisma.BlockUpdateManyWithWhereWithoutBlockedInput | Prisma.BlockUpdateManyWithWhereWithoutBlockedInput[];
    deleteMany?: Prisma.BlockScalarWhereInput | Prisma.BlockScalarWhereInput[];
};
export type BlockCreateWithoutBlockerInput = {
    reason?: string | null;
    createdAt?: Date | string;
    blocked: Prisma.UserCreateNestedOneWithoutBlocksReceivedInput;
};
export type BlockUncheckedCreateWithoutBlockerInput = {
    blockedId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type BlockCreateOrConnectWithoutBlockerInput = {
    where: Prisma.BlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlockCreateWithoutBlockerInput, Prisma.BlockUncheckedCreateWithoutBlockerInput>;
};
export type BlockCreateManyBlockerInputEnvelope = {
    data: Prisma.BlockCreateManyBlockerInput | Prisma.BlockCreateManyBlockerInput[];
    skipDuplicates?: boolean;
};
export type BlockCreateWithoutBlockedInput = {
    reason?: string | null;
    createdAt?: Date | string;
    blocker: Prisma.UserCreateNestedOneWithoutBlocksMadeInput;
};
export type BlockUncheckedCreateWithoutBlockedInput = {
    blockerId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type BlockCreateOrConnectWithoutBlockedInput = {
    where: Prisma.BlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlockCreateWithoutBlockedInput, Prisma.BlockUncheckedCreateWithoutBlockedInput>;
};
export type BlockCreateManyBlockedInputEnvelope = {
    data: Prisma.BlockCreateManyBlockedInput | Prisma.BlockCreateManyBlockedInput[];
    skipDuplicates?: boolean;
};
export type BlockUpsertWithWhereUniqueWithoutBlockerInput = {
    where: Prisma.BlockWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlockUpdateWithoutBlockerInput, Prisma.BlockUncheckedUpdateWithoutBlockerInput>;
    create: Prisma.XOR<Prisma.BlockCreateWithoutBlockerInput, Prisma.BlockUncheckedCreateWithoutBlockerInput>;
};
export type BlockUpdateWithWhereUniqueWithoutBlockerInput = {
    where: Prisma.BlockWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlockUpdateWithoutBlockerInput, Prisma.BlockUncheckedUpdateWithoutBlockerInput>;
};
export type BlockUpdateManyWithWhereWithoutBlockerInput = {
    where: Prisma.BlockScalarWhereInput;
    data: Prisma.XOR<Prisma.BlockUpdateManyMutationInput, Prisma.BlockUncheckedUpdateManyWithoutBlockerInput>;
};
export type BlockScalarWhereInput = {
    AND?: Prisma.BlockScalarWhereInput | Prisma.BlockScalarWhereInput[];
    OR?: Prisma.BlockScalarWhereInput[];
    NOT?: Prisma.BlockScalarWhereInput | Prisma.BlockScalarWhereInput[];
    blockerId?: Prisma.UuidFilter<"Block"> | string;
    blockedId?: Prisma.UuidFilter<"Block"> | string;
    reason?: Prisma.StringNullableFilter<"Block"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Block"> | Date | string;
};
export type BlockUpsertWithWhereUniqueWithoutBlockedInput = {
    where: Prisma.BlockWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlockUpdateWithoutBlockedInput, Prisma.BlockUncheckedUpdateWithoutBlockedInput>;
    create: Prisma.XOR<Prisma.BlockCreateWithoutBlockedInput, Prisma.BlockUncheckedCreateWithoutBlockedInput>;
};
export type BlockUpdateWithWhereUniqueWithoutBlockedInput = {
    where: Prisma.BlockWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlockUpdateWithoutBlockedInput, Prisma.BlockUncheckedUpdateWithoutBlockedInput>;
};
export type BlockUpdateManyWithWhereWithoutBlockedInput = {
    where: Prisma.BlockScalarWhereInput;
    data: Prisma.XOR<Prisma.BlockUpdateManyMutationInput, Prisma.BlockUncheckedUpdateManyWithoutBlockedInput>;
};
export type BlockCreateManyBlockerInput = {
    blockedId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type BlockCreateManyBlockedInput = {
    blockerId: string;
    reason?: string | null;
    createdAt?: Date | string;
};
export type BlockUpdateWithoutBlockerInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blocked?: Prisma.UserUpdateOneRequiredWithoutBlocksReceivedNestedInput;
};
export type BlockUncheckedUpdateWithoutBlockerInput = {
    blockedId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockUncheckedUpdateManyWithoutBlockerInput = {
    blockedId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockUpdateWithoutBlockedInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    blocker?: Prisma.UserUpdateOneRequiredWithoutBlocksMadeNestedInput;
};
export type BlockUncheckedUpdateWithoutBlockedInput = {
    blockerId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockUncheckedUpdateManyWithoutBlockedInput = {
    blockerId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    blockerId?: boolean;
    blockedId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    blocker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["block"]>;
export type BlockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    blockerId?: boolean;
    blockedId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    blocker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["block"]>;
export type BlockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    blockerId?: boolean;
    blockedId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    blocker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["block"]>;
export type BlockSelectScalar = {
    blockerId?: boolean;
    blockedId?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type BlockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"blockerId" | "blockedId" | "reason" | "createdAt", ExtArgs["result"]["block"]>;
export type BlockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    blocker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BlockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    blocker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BlockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    blocker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    blocked?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BlockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Block";
    objects: {
        blocker: Prisma.$UserPayload<ExtArgs>;
        blocked: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        blockerId: string;
        blockedId: string;
        reason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["block"]>;
    composites: {};
};
export type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlockPayload, S>;
export type BlockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlockCountAggregateInputType | true;
};
export interface BlockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Block'];
        meta: {
            name: 'Block';
        };
    };
    findUnique<T extends BlockFindUniqueArgs>(args: Prisma.SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlockFindFirstArgs>(args?: Prisma.SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlockFindManyArgs>(args?: Prisma.SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlockCreateArgs>(args: Prisma.SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlockCreateManyArgs>(args?: Prisma.SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BlockDeleteArgs>(args: Prisma.SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlockUpdateArgs>(args: Prisma.SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlockDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlockUpdateManyArgs>(args: Prisma.SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BlockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BlockUpsertArgs>(args: Prisma.SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma.Prisma__BlockClient<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlockCountArgs>(args?: Prisma.Subset<T, BlockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlockCountAggregateOutputType> : number>;
    aggregate<T extends BlockAggregateArgs>(args: Prisma.Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>;
    groupBy<T extends BlockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlockGroupByArgs['orderBy'];
    } : {
        orderBy?: BlockGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlockFieldRefs;
}
export interface Prisma__BlockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    blocker<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    blocked<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlockFieldRefs {
    readonly blockerId: Prisma.FieldRef<"Block", 'String'>;
    readonly blockedId: Prisma.FieldRef<"Block", 'String'>;
    readonly reason: Prisma.FieldRef<"Block", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Block", 'DateTime'>;
}
export type BlockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where: Prisma.BlockWhereUniqueInput;
};
export type BlockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where: Prisma.BlockWhereUniqueInput;
};
export type BlockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where?: Prisma.BlockWhereInput;
    orderBy?: Prisma.BlockOrderByWithRelationInput | Prisma.BlockOrderByWithRelationInput[];
    cursor?: Prisma.BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockScalarFieldEnum | Prisma.BlockScalarFieldEnum[];
};
export type BlockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where?: Prisma.BlockWhereInput;
    orderBy?: Prisma.BlockOrderByWithRelationInput | Prisma.BlockOrderByWithRelationInput[];
    cursor?: Prisma.BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockScalarFieldEnum | Prisma.BlockScalarFieldEnum[];
};
export type BlockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where?: Prisma.BlockWhereInput;
    orderBy?: Prisma.BlockOrderByWithRelationInput | Prisma.BlockOrderByWithRelationInput[];
    cursor?: Prisma.BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockScalarFieldEnum | Prisma.BlockScalarFieldEnum[];
};
export type BlockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlockCreateInput, Prisma.BlockUncheckedCreateInput>;
};
export type BlockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlockCreateManyInput | Prisma.BlockCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    data: Prisma.BlockCreateManyInput | Prisma.BlockCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BlockIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BlockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlockUpdateInput, Prisma.BlockUncheckedUpdateInput>;
    where: Prisma.BlockWhereUniqueInput;
};
export type BlockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlockUpdateManyMutationInput, Prisma.BlockUncheckedUpdateManyInput>;
    where?: Prisma.BlockWhereInput;
    limit?: number;
};
export type BlockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlockUpdateManyMutationInput, Prisma.BlockUncheckedUpdateManyInput>;
    where?: Prisma.BlockWhereInput;
    limit?: number;
    include?: Prisma.BlockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BlockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where: Prisma.BlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlockCreateInput, Prisma.BlockUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlockUpdateInput, Prisma.BlockUncheckedUpdateInput>;
};
export type BlockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where: Prisma.BlockWhereUniqueInput;
};
export type BlockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockWhereInput;
    limit?: number;
};
export type BlockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockSelect<ExtArgs> | null;
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    include?: Prisma.BlockInclude<ExtArgs> | null;
};
