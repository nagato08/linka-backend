import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SwipeModel = runtime.Types.Result.DefaultSelection<Prisma.$SwipePayload>;
export type AggregateSwipe = {
    _count: SwipeCountAggregateOutputType | null;
    _min: SwipeMinAggregateOutputType | null;
    _max: SwipeMaxAggregateOutputType | null;
};
export type SwipeMinAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    targetId: string | null;
    action: $Enums.SwipeAction | null;
    source: $Enums.SwipeSource | null;
    isRewound: boolean | null;
    createdAt: Date | null;
};
export type SwipeMaxAggregateOutputType = {
    id: string | null;
    actorId: string | null;
    targetId: string | null;
    action: $Enums.SwipeAction | null;
    source: $Enums.SwipeSource | null;
    isRewound: boolean | null;
    createdAt: Date | null;
};
export type SwipeCountAggregateOutputType = {
    id: number;
    actorId: number;
    targetId: number;
    action: number;
    source: number;
    isRewound: number;
    createdAt: number;
    _all: number;
};
export type SwipeMinAggregateInputType = {
    id?: true;
    actorId?: true;
    targetId?: true;
    action?: true;
    source?: true;
    isRewound?: true;
    createdAt?: true;
};
export type SwipeMaxAggregateInputType = {
    id?: true;
    actorId?: true;
    targetId?: true;
    action?: true;
    source?: true;
    isRewound?: true;
    createdAt?: true;
};
export type SwipeCountAggregateInputType = {
    id?: true;
    actorId?: true;
    targetId?: true;
    action?: true;
    source?: true;
    isRewound?: true;
    createdAt?: true;
    _all?: true;
};
export type SwipeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SwipeWhereInput;
    orderBy?: Prisma.SwipeOrderByWithRelationInput | Prisma.SwipeOrderByWithRelationInput[];
    cursor?: Prisma.SwipeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SwipeCountAggregateInputType;
    _min?: SwipeMinAggregateInputType;
    _max?: SwipeMaxAggregateInputType;
};
export type GetSwipeAggregateType<T extends SwipeAggregateArgs> = {
    [P in keyof T & keyof AggregateSwipe]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSwipe[P]> : Prisma.GetScalarType<T[P], AggregateSwipe[P]>;
};
export type SwipeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SwipeWhereInput;
    orderBy?: Prisma.SwipeOrderByWithAggregationInput | Prisma.SwipeOrderByWithAggregationInput[];
    by: Prisma.SwipeScalarFieldEnum[] | Prisma.SwipeScalarFieldEnum;
    having?: Prisma.SwipeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SwipeCountAggregateInputType | true;
    _min?: SwipeMinAggregateInputType;
    _max?: SwipeMaxAggregateInputType;
};
export type SwipeGroupByOutputType = {
    id: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source: $Enums.SwipeSource;
    isRewound: boolean;
    createdAt: Date;
    _count: SwipeCountAggregateOutputType | null;
    _min: SwipeMinAggregateOutputType | null;
    _max: SwipeMaxAggregateOutputType | null;
};
export type GetSwipeGroupByPayload<T extends SwipeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SwipeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SwipeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SwipeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SwipeGroupByOutputType[P]>;
}>>;
export type SwipeWhereInput = {
    AND?: Prisma.SwipeWhereInput | Prisma.SwipeWhereInput[];
    OR?: Prisma.SwipeWhereInput[];
    NOT?: Prisma.SwipeWhereInput | Prisma.SwipeWhereInput[];
    id?: Prisma.UuidFilter<"Swipe"> | string;
    actorId?: Prisma.UuidFilter<"Swipe"> | string;
    targetId?: Prisma.UuidFilter<"Swipe"> | string;
    action?: Prisma.EnumSwipeActionFilter<"Swipe"> | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFilter<"Swipe"> | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFilter<"Swipe"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Swipe"> | Date | string;
    actor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    target?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    rewind?: Prisma.XOR<Prisma.RewindNullableScalarRelationFilter, Prisma.RewindWhereInput> | null;
};
export type SwipeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    actor?: Prisma.UserOrderByWithRelationInput;
    target?: Prisma.UserOrderByWithRelationInput;
    rewind?: Prisma.RewindOrderByWithRelationInput;
};
export type SwipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    actorId_targetId?: Prisma.SwipeActorIdTargetIdCompoundUniqueInput;
    AND?: Prisma.SwipeWhereInput | Prisma.SwipeWhereInput[];
    OR?: Prisma.SwipeWhereInput[];
    NOT?: Prisma.SwipeWhereInput | Prisma.SwipeWhereInput[];
    actorId?: Prisma.UuidFilter<"Swipe"> | string;
    targetId?: Prisma.UuidFilter<"Swipe"> | string;
    action?: Prisma.EnumSwipeActionFilter<"Swipe"> | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFilter<"Swipe"> | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFilter<"Swipe"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Swipe"> | Date | string;
    actor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    target?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    rewind?: Prisma.XOR<Prisma.RewindNullableScalarRelationFilter, Prisma.RewindWhereInput> | null;
}, "id" | "actorId_targetId">;
export type SwipeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SwipeCountOrderByAggregateInput;
    _max?: Prisma.SwipeMaxOrderByAggregateInput;
    _min?: Prisma.SwipeMinOrderByAggregateInput;
};
export type SwipeScalarWhereWithAggregatesInput = {
    AND?: Prisma.SwipeScalarWhereWithAggregatesInput | Prisma.SwipeScalarWhereWithAggregatesInput[];
    OR?: Prisma.SwipeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SwipeScalarWhereWithAggregatesInput | Prisma.SwipeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Swipe"> | string;
    actorId?: Prisma.UuidWithAggregatesFilter<"Swipe"> | string;
    targetId?: Prisma.UuidWithAggregatesFilter<"Swipe"> | string;
    action?: Prisma.EnumSwipeActionWithAggregatesFilter<"Swipe"> | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceWithAggregatesFilter<"Swipe"> | $Enums.SwipeSource;
    isRewound?: Prisma.BoolWithAggregatesFilter<"Swipe"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Swipe"> | Date | string;
};
export type SwipeCreateInput = {
    id?: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
    actor: Prisma.UserCreateNestedOneWithoutSwipesGivenInput;
    target: Prisma.UserCreateNestedOneWithoutSwipesReceivedInput;
    rewind?: Prisma.RewindCreateNestedOneWithoutSwipeInput;
};
export type SwipeUncheckedCreateInput = {
    id?: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
    rewind?: Prisma.RewindUncheckedCreateNestedOneWithoutSwipeInput;
};
export type SwipeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneRequiredWithoutSwipesGivenNestedInput;
    target?: Prisma.UserUpdateOneRequiredWithoutSwipesReceivedNestedInput;
    rewind?: Prisma.RewindUpdateOneWithoutSwipeNestedInput;
};
export type SwipeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rewind?: Prisma.RewindUncheckedUpdateOneWithoutSwipeNestedInput;
};
export type SwipeCreateManyInput = {
    id?: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
};
export type SwipeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeListRelationFilter = {
    every?: Prisma.SwipeWhereInput;
    some?: Prisma.SwipeWhereInput;
    none?: Prisma.SwipeWhereInput;
};
export type SwipeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SwipeActorIdTargetIdCompoundUniqueInput = {
    actorId: string;
    targetId: string;
};
export type SwipeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SwipeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SwipeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    isRewound?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SwipeScalarRelationFilter = {
    is?: Prisma.SwipeWhereInput;
    isNot?: Prisma.SwipeWhereInput;
};
export type SwipeCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutActorInput, Prisma.SwipeUncheckedCreateWithoutActorInput> | Prisma.SwipeCreateWithoutActorInput[] | Prisma.SwipeUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutActorInput | Prisma.SwipeCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.SwipeCreateManyActorInputEnvelope;
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
};
export type SwipeCreateNestedManyWithoutTargetInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutTargetInput, Prisma.SwipeUncheckedCreateWithoutTargetInput> | Prisma.SwipeCreateWithoutTargetInput[] | Prisma.SwipeUncheckedCreateWithoutTargetInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutTargetInput | Prisma.SwipeCreateOrConnectWithoutTargetInput[];
    createMany?: Prisma.SwipeCreateManyTargetInputEnvelope;
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
};
export type SwipeUncheckedCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutActorInput, Prisma.SwipeUncheckedCreateWithoutActorInput> | Prisma.SwipeCreateWithoutActorInput[] | Prisma.SwipeUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutActorInput | Prisma.SwipeCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.SwipeCreateManyActorInputEnvelope;
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
};
export type SwipeUncheckedCreateNestedManyWithoutTargetInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutTargetInput, Prisma.SwipeUncheckedCreateWithoutTargetInput> | Prisma.SwipeCreateWithoutTargetInput[] | Prisma.SwipeUncheckedCreateWithoutTargetInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutTargetInput | Prisma.SwipeCreateOrConnectWithoutTargetInput[];
    createMany?: Prisma.SwipeCreateManyTargetInputEnvelope;
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
};
export type SwipeUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutActorInput, Prisma.SwipeUncheckedCreateWithoutActorInput> | Prisma.SwipeCreateWithoutActorInput[] | Prisma.SwipeUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutActorInput | Prisma.SwipeCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.SwipeUpsertWithWhereUniqueWithoutActorInput | Prisma.SwipeUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.SwipeCreateManyActorInputEnvelope;
    set?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    disconnect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    delete?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    update?: Prisma.SwipeUpdateWithWhereUniqueWithoutActorInput | Prisma.SwipeUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.SwipeUpdateManyWithWhereWithoutActorInput | Prisma.SwipeUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.SwipeScalarWhereInput | Prisma.SwipeScalarWhereInput[];
};
export type SwipeUpdateManyWithoutTargetNestedInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutTargetInput, Prisma.SwipeUncheckedCreateWithoutTargetInput> | Prisma.SwipeCreateWithoutTargetInput[] | Prisma.SwipeUncheckedCreateWithoutTargetInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutTargetInput | Prisma.SwipeCreateOrConnectWithoutTargetInput[];
    upsert?: Prisma.SwipeUpsertWithWhereUniqueWithoutTargetInput | Prisma.SwipeUpsertWithWhereUniqueWithoutTargetInput[];
    createMany?: Prisma.SwipeCreateManyTargetInputEnvelope;
    set?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    disconnect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    delete?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    update?: Prisma.SwipeUpdateWithWhereUniqueWithoutTargetInput | Prisma.SwipeUpdateWithWhereUniqueWithoutTargetInput[];
    updateMany?: Prisma.SwipeUpdateManyWithWhereWithoutTargetInput | Prisma.SwipeUpdateManyWithWhereWithoutTargetInput[];
    deleteMany?: Prisma.SwipeScalarWhereInput | Prisma.SwipeScalarWhereInput[];
};
export type SwipeUncheckedUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutActorInput, Prisma.SwipeUncheckedCreateWithoutActorInput> | Prisma.SwipeCreateWithoutActorInput[] | Prisma.SwipeUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutActorInput | Prisma.SwipeCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.SwipeUpsertWithWhereUniqueWithoutActorInput | Prisma.SwipeUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.SwipeCreateManyActorInputEnvelope;
    set?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    disconnect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    delete?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    update?: Prisma.SwipeUpdateWithWhereUniqueWithoutActorInput | Prisma.SwipeUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.SwipeUpdateManyWithWhereWithoutActorInput | Prisma.SwipeUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.SwipeScalarWhereInput | Prisma.SwipeScalarWhereInput[];
};
export type SwipeUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutTargetInput, Prisma.SwipeUncheckedCreateWithoutTargetInput> | Prisma.SwipeCreateWithoutTargetInput[] | Prisma.SwipeUncheckedCreateWithoutTargetInput[];
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutTargetInput | Prisma.SwipeCreateOrConnectWithoutTargetInput[];
    upsert?: Prisma.SwipeUpsertWithWhereUniqueWithoutTargetInput | Prisma.SwipeUpsertWithWhereUniqueWithoutTargetInput[];
    createMany?: Prisma.SwipeCreateManyTargetInputEnvelope;
    set?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    disconnect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    delete?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    connect?: Prisma.SwipeWhereUniqueInput | Prisma.SwipeWhereUniqueInput[];
    update?: Prisma.SwipeUpdateWithWhereUniqueWithoutTargetInput | Prisma.SwipeUpdateWithWhereUniqueWithoutTargetInput[];
    updateMany?: Prisma.SwipeUpdateManyWithWhereWithoutTargetInput | Prisma.SwipeUpdateManyWithWhereWithoutTargetInput[];
    deleteMany?: Prisma.SwipeScalarWhereInput | Prisma.SwipeScalarWhereInput[];
};
export type EnumSwipeActionFieldUpdateOperationsInput = {
    set?: $Enums.SwipeAction;
};
export type EnumSwipeSourceFieldUpdateOperationsInput = {
    set?: $Enums.SwipeSource;
};
export type SwipeCreateNestedOneWithoutRewindInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutRewindInput, Prisma.SwipeUncheckedCreateWithoutRewindInput>;
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutRewindInput;
    connect?: Prisma.SwipeWhereUniqueInput;
};
export type SwipeUpdateOneRequiredWithoutRewindNestedInput = {
    create?: Prisma.XOR<Prisma.SwipeCreateWithoutRewindInput, Prisma.SwipeUncheckedCreateWithoutRewindInput>;
    connectOrCreate?: Prisma.SwipeCreateOrConnectWithoutRewindInput;
    upsert?: Prisma.SwipeUpsertWithoutRewindInput;
    connect?: Prisma.SwipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SwipeUpdateToOneWithWhereWithoutRewindInput, Prisma.SwipeUpdateWithoutRewindInput>, Prisma.SwipeUncheckedUpdateWithoutRewindInput>;
};
export type SwipeCreateWithoutActorInput = {
    id?: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
    target: Prisma.UserCreateNestedOneWithoutSwipesReceivedInput;
    rewind?: Prisma.RewindCreateNestedOneWithoutSwipeInput;
};
export type SwipeUncheckedCreateWithoutActorInput = {
    id?: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
    rewind?: Prisma.RewindUncheckedCreateNestedOneWithoutSwipeInput;
};
export type SwipeCreateOrConnectWithoutActorInput = {
    where: Prisma.SwipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SwipeCreateWithoutActorInput, Prisma.SwipeUncheckedCreateWithoutActorInput>;
};
export type SwipeCreateManyActorInputEnvelope = {
    data: Prisma.SwipeCreateManyActorInput | Prisma.SwipeCreateManyActorInput[];
    skipDuplicates?: boolean;
};
export type SwipeCreateWithoutTargetInput = {
    id?: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
    actor: Prisma.UserCreateNestedOneWithoutSwipesGivenInput;
    rewind?: Prisma.RewindCreateNestedOneWithoutSwipeInput;
};
export type SwipeUncheckedCreateWithoutTargetInput = {
    id?: string;
    actorId: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
    rewind?: Prisma.RewindUncheckedCreateNestedOneWithoutSwipeInput;
};
export type SwipeCreateOrConnectWithoutTargetInput = {
    where: Prisma.SwipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SwipeCreateWithoutTargetInput, Prisma.SwipeUncheckedCreateWithoutTargetInput>;
};
export type SwipeCreateManyTargetInputEnvelope = {
    data: Prisma.SwipeCreateManyTargetInput | Prisma.SwipeCreateManyTargetInput[];
    skipDuplicates?: boolean;
};
export type SwipeUpsertWithWhereUniqueWithoutActorInput = {
    where: Prisma.SwipeWhereUniqueInput;
    update: Prisma.XOR<Prisma.SwipeUpdateWithoutActorInput, Prisma.SwipeUncheckedUpdateWithoutActorInput>;
    create: Prisma.XOR<Prisma.SwipeCreateWithoutActorInput, Prisma.SwipeUncheckedCreateWithoutActorInput>;
};
export type SwipeUpdateWithWhereUniqueWithoutActorInput = {
    where: Prisma.SwipeWhereUniqueInput;
    data: Prisma.XOR<Prisma.SwipeUpdateWithoutActorInput, Prisma.SwipeUncheckedUpdateWithoutActorInput>;
};
export type SwipeUpdateManyWithWhereWithoutActorInput = {
    where: Prisma.SwipeScalarWhereInput;
    data: Prisma.XOR<Prisma.SwipeUpdateManyMutationInput, Prisma.SwipeUncheckedUpdateManyWithoutActorInput>;
};
export type SwipeScalarWhereInput = {
    AND?: Prisma.SwipeScalarWhereInput | Prisma.SwipeScalarWhereInput[];
    OR?: Prisma.SwipeScalarWhereInput[];
    NOT?: Prisma.SwipeScalarWhereInput | Prisma.SwipeScalarWhereInput[];
    id?: Prisma.UuidFilter<"Swipe"> | string;
    actorId?: Prisma.UuidFilter<"Swipe"> | string;
    targetId?: Prisma.UuidFilter<"Swipe"> | string;
    action?: Prisma.EnumSwipeActionFilter<"Swipe"> | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFilter<"Swipe"> | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFilter<"Swipe"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Swipe"> | Date | string;
};
export type SwipeUpsertWithWhereUniqueWithoutTargetInput = {
    where: Prisma.SwipeWhereUniqueInput;
    update: Prisma.XOR<Prisma.SwipeUpdateWithoutTargetInput, Prisma.SwipeUncheckedUpdateWithoutTargetInput>;
    create: Prisma.XOR<Prisma.SwipeCreateWithoutTargetInput, Prisma.SwipeUncheckedCreateWithoutTargetInput>;
};
export type SwipeUpdateWithWhereUniqueWithoutTargetInput = {
    where: Prisma.SwipeWhereUniqueInput;
    data: Prisma.XOR<Prisma.SwipeUpdateWithoutTargetInput, Prisma.SwipeUncheckedUpdateWithoutTargetInput>;
};
export type SwipeUpdateManyWithWhereWithoutTargetInput = {
    where: Prisma.SwipeScalarWhereInput;
    data: Prisma.XOR<Prisma.SwipeUpdateManyMutationInput, Prisma.SwipeUncheckedUpdateManyWithoutTargetInput>;
};
export type SwipeCreateWithoutRewindInput = {
    id?: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
    actor: Prisma.UserCreateNestedOneWithoutSwipesGivenInput;
    target: Prisma.UserCreateNestedOneWithoutSwipesReceivedInput;
};
export type SwipeUncheckedCreateWithoutRewindInput = {
    id?: string;
    actorId: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
};
export type SwipeCreateOrConnectWithoutRewindInput = {
    where: Prisma.SwipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SwipeCreateWithoutRewindInput, Prisma.SwipeUncheckedCreateWithoutRewindInput>;
};
export type SwipeUpsertWithoutRewindInput = {
    update: Prisma.XOR<Prisma.SwipeUpdateWithoutRewindInput, Prisma.SwipeUncheckedUpdateWithoutRewindInput>;
    create: Prisma.XOR<Prisma.SwipeCreateWithoutRewindInput, Prisma.SwipeUncheckedCreateWithoutRewindInput>;
    where?: Prisma.SwipeWhereInput;
};
export type SwipeUpdateToOneWithWhereWithoutRewindInput = {
    where?: Prisma.SwipeWhereInput;
    data: Prisma.XOR<Prisma.SwipeUpdateWithoutRewindInput, Prisma.SwipeUncheckedUpdateWithoutRewindInput>;
};
export type SwipeUpdateWithoutRewindInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneRequiredWithoutSwipesGivenNestedInput;
    target?: Prisma.UserUpdateOneRequiredWithoutSwipesReceivedNestedInput;
};
export type SwipeUncheckedUpdateWithoutRewindInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeCreateManyActorInput = {
    id?: string;
    targetId: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
};
export type SwipeCreateManyTargetInput = {
    id?: string;
    actorId: string;
    action: $Enums.SwipeAction;
    source?: $Enums.SwipeSource;
    isRewound?: boolean;
    createdAt?: Date | string;
};
export type SwipeUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    target?: Prisma.UserUpdateOneRequiredWithoutSwipesReceivedNestedInput;
    rewind?: Prisma.RewindUpdateOneWithoutSwipeNestedInput;
};
export type SwipeUncheckedUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rewind?: Prisma.RewindUncheckedUpdateOneWithoutSwipeNestedInput;
};
export type SwipeUncheckedUpdateManyWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    targetId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeUpdateWithoutTargetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneRequiredWithoutSwipesGivenNestedInput;
    rewind?: Prisma.RewindUpdateOneWithoutSwipeNestedInput;
};
export type SwipeUncheckedUpdateWithoutTargetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rewind?: Prisma.RewindUncheckedUpdateOneWithoutSwipeNestedInput;
};
export type SwipeUncheckedUpdateManyWithoutTargetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumSwipeActionFieldUpdateOperationsInput | $Enums.SwipeAction;
    source?: Prisma.EnumSwipeSourceFieldUpdateOperationsInput | $Enums.SwipeSource;
    isRewound?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SwipeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    target?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rewind?: boolean | Prisma.Swipe$rewindArgs<ExtArgs>;
}, ExtArgs["result"]["swipe"]>;
export type SwipeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    target?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["swipe"]>;
export type SwipeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    target?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["swipe"]>;
export type SwipeSelectScalar = {
    id?: boolean;
    actorId?: boolean;
    targetId?: boolean;
    action?: boolean;
    source?: boolean;
    isRewound?: boolean;
    createdAt?: boolean;
};
export type SwipeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "actorId" | "targetId" | "action" | "source" | "isRewound" | "createdAt", ExtArgs["result"]["swipe"]>;
export type SwipeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    target?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rewind?: boolean | Prisma.Swipe$rewindArgs<ExtArgs>;
};
export type SwipeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    target?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SwipeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    target?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SwipePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Swipe";
    objects: {
        actor: Prisma.$UserPayload<ExtArgs>;
        target: Prisma.$UserPayload<ExtArgs>;
        rewind: Prisma.$RewindPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        actorId: string;
        targetId: string;
        action: $Enums.SwipeAction;
        source: $Enums.SwipeSource;
        isRewound: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["swipe"]>;
    composites: {};
};
export type SwipeGetPayload<S extends boolean | null | undefined | SwipeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SwipePayload, S>;
export type SwipeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SwipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SwipeCountAggregateInputType | true;
};
export interface SwipeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Swipe'];
        meta: {
            name: 'Swipe';
        };
    };
    findUnique<T extends SwipeFindUniqueArgs>(args: Prisma.SelectSubset<T, SwipeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SwipeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SwipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SwipeFindFirstArgs>(args?: Prisma.SelectSubset<T, SwipeFindFirstArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SwipeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SwipeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SwipeFindManyArgs>(args?: Prisma.SelectSubset<T, SwipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SwipeCreateArgs>(args: Prisma.SelectSubset<T, SwipeCreateArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SwipeCreateManyArgs>(args?: Prisma.SelectSubset<T, SwipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SwipeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SwipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SwipeDeleteArgs>(args: Prisma.SelectSubset<T, SwipeDeleteArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SwipeUpdateArgs>(args: Prisma.SelectSubset<T, SwipeUpdateArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SwipeDeleteManyArgs>(args?: Prisma.SelectSubset<T, SwipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SwipeUpdateManyArgs>(args: Prisma.SelectSubset<T, SwipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SwipeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SwipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SwipeUpsertArgs>(args: Prisma.SelectSubset<T, SwipeUpsertArgs<ExtArgs>>): Prisma.Prisma__SwipeClient<runtime.Types.Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SwipeCountArgs>(args?: Prisma.Subset<T, SwipeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SwipeCountAggregateOutputType> : number>;
    aggregate<T extends SwipeAggregateArgs>(args: Prisma.Subset<T, SwipeAggregateArgs>): Prisma.PrismaPromise<GetSwipeAggregateType<T>>;
    groupBy<T extends SwipeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SwipeGroupByArgs['orderBy'];
    } : {
        orderBy?: SwipeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SwipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SwipeFieldRefs;
}
export interface Prisma__SwipeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    target<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rewind<T extends Prisma.Swipe$rewindArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Swipe$rewindArgs<ExtArgs>>): Prisma.Prisma__RewindClient<runtime.Types.Result.GetResult<Prisma.$RewindPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SwipeFieldRefs {
    readonly id: Prisma.FieldRef<"Swipe", 'String'>;
    readonly actorId: Prisma.FieldRef<"Swipe", 'String'>;
    readonly targetId: Prisma.FieldRef<"Swipe", 'String'>;
    readonly action: Prisma.FieldRef<"Swipe", 'SwipeAction'>;
    readonly source: Prisma.FieldRef<"Swipe", 'SwipeSource'>;
    readonly isRewound: Prisma.FieldRef<"Swipe", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Swipe", 'DateTime'>;
}
export type SwipeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    where: Prisma.SwipeWhereUniqueInput;
};
export type SwipeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    where: Prisma.SwipeWhereUniqueInput;
};
export type SwipeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    where?: Prisma.SwipeWhereInput;
    orderBy?: Prisma.SwipeOrderByWithRelationInput | Prisma.SwipeOrderByWithRelationInput[];
    cursor?: Prisma.SwipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SwipeScalarFieldEnum | Prisma.SwipeScalarFieldEnum[];
};
export type SwipeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    where?: Prisma.SwipeWhereInput;
    orderBy?: Prisma.SwipeOrderByWithRelationInput | Prisma.SwipeOrderByWithRelationInput[];
    cursor?: Prisma.SwipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SwipeScalarFieldEnum | Prisma.SwipeScalarFieldEnum[];
};
export type SwipeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    where?: Prisma.SwipeWhereInput;
    orderBy?: Prisma.SwipeOrderByWithRelationInput | Prisma.SwipeOrderByWithRelationInput[];
    cursor?: Prisma.SwipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SwipeScalarFieldEnum | Prisma.SwipeScalarFieldEnum[];
};
export type SwipeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SwipeCreateInput, Prisma.SwipeUncheckedCreateInput>;
};
export type SwipeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SwipeCreateManyInput | Prisma.SwipeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SwipeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    data: Prisma.SwipeCreateManyInput | Prisma.SwipeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SwipeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SwipeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SwipeUpdateInput, Prisma.SwipeUncheckedUpdateInput>;
    where: Prisma.SwipeWhereUniqueInput;
};
export type SwipeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SwipeUpdateManyMutationInput, Prisma.SwipeUncheckedUpdateManyInput>;
    where?: Prisma.SwipeWhereInput;
    limit?: number;
};
export type SwipeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SwipeUpdateManyMutationInput, Prisma.SwipeUncheckedUpdateManyInput>;
    where?: Prisma.SwipeWhereInput;
    limit?: number;
    include?: Prisma.SwipeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SwipeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    where: Prisma.SwipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SwipeCreateInput, Prisma.SwipeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SwipeUpdateInput, Prisma.SwipeUncheckedUpdateInput>;
};
export type SwipeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
    where: Prisma.SwipeWhereUniqueInput;
};
export type SwipeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SwipeWhereInput;
    limit?: number;
};
export type Swipe$rewindArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewindSelect<ExtArgs> | null;
    omit?: Prisma.RewindOmit<ExtArgs> | null;
    include?: Prisma.RewindInclude<ExtArgs> | null;
    where?: Prisma.RewindWhereInput;
};
export type SwipeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SwipeSelect<ExtArgs> | null;
    omit?: Prisma.SwipeOmit<ExtArgs> | null;
    include?: Prisma.SwipeInclude<ExtArgs> | null;
};
