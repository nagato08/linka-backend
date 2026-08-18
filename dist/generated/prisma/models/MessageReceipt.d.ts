import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessageReceiptModel = runtime.Types.Result.DefaultSelection<Prisma.$MessageReceiptPayload>;
export type AggregateMessageReceipt = {
    _count: MessageReceiptCountAggregateOutputType | null;
    _min: MessageReceiptMinAggregateOutputType | null;
    _max: MessageReceiptMaxAggregateOutputType | null;
};
export type MessageReceiptMinAggregateOutputType = {
    messageId: string | null;
    userId: string | null;
    deliveredAt: Date | null;
    readAt: Date | null;
};
export type MessageReceiptMaxAggregateOutputType = {
    messageId: string | null;
    userId: string | null;
    deliveredAt: Date | null;
    readAt: Date | null;
};
export type MessageReceiptCountAggregateOutputType = {
    messageId: number;
    userId: number;
    deliveredAt: number;
    readAt: number;
    _all: number;
};
export type MessageReceiptMinAggregateInputType = {
    messageId?: true;
    userId?: true;
    deliveredAt?: true;
    readAt?: true;
};
export type MessageReceiptMaxAggregateInputType = {
    messageId?: true;
    userId?: true;
    deliveredAt?: true;
    readAt?: true;
};
export type MessageReceiptCountAggregateInputType = {
    messageId?: true;
    userId?: true;
    deliveredAt?: true;
    readAt?: true;
    _all?: true;
};
export type MessageReceiptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageReceiptWhereInput;
    orderBy?: Prisma.MessageReceiptOrderByWithRelationInput | Prisma.MessageReceiptOrderByWithRelationInput[];
    cursor?: Prisma.MessageReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessageReceiptCountAggregateInputType;
    _min?: MessageReceiptMinAggregateInputType;
    _max?: MessageReceiptMaxAggregateInputType;
};
export type GetMessageReceiptAggregateType<T extends MessageReceiptAggregateArgs> = {
    [P in keyof T & keyof AggregateMessageReceipt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessageReceipt[P]> : Prisma.GetScalarType<T[P], AggregateMessageReceipt[P]>;
};
export type MessageReceiptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageReceiptWhereInput;
    orderBy?: Prisma.MessageReceiptOrderByWithAggregationInput | Prisma.MessageReceiptOrderByWithAggregationInput[];
    by: Prisma.MessageReceiptScalarFieldEnum[] | Prisma.MessageReceiptScalarFieldEnum;
    having?: Prisma.MessageReceiptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageReceiptCountAggregateInputType | true;
    _min?: MessageReceiptMinAggregateInputType;
    _max?: MessageReceiptMaxAggregateInputType;
};
export type MessageReceiptGroupByOutputType = {
    messageId: string;
    userId: string;
    deliveredAt: Date | null;
    readAt: Date | null;
    _count: MessageReceiptCountAggregateOutputType | null;
    _min: MessageReceiptMinAggregateOutputType | null;
    _max: MessageReceiptMaxAggregateOutputType | null;
};
export type GetMessageReceiptGroupByPayload<T extends MessageReceiptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageReceiptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageReceiptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageReceiptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageReceiptGroupByOutputType[P]>;
}>>;
export type MessageReceiptWhereInput = {
    AND?: Prisma.MessageReceiptWhereInput | Prisma.MessageReceiptWhereInput[];
    OR?: Prisma.MessageReceiptWhereInput[];
    NOT?: Prisma.MessageReceiptWhereInput | Prisma.MessageReceiptWhereInput[];
    messageId?: Prisma.UuidFilter<"MessageReceipt"> | string;
    userId?: Prisma.UuidFilter<"MessageReceipt"> | string;
    deliveredAt?: Prisma.DateTimeNullableFilter<"MessageReceipt"> | Date | string | null;
    readAt?: Prisma.DateTimeNullableFilter<"MessageReceipt"> | Date | string | null;
    message?: Prisma.XOR<Prisma.MessageScalarRelationFilter, Prisma.MessageWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MessageReceiptOrderByWithRelationInput = {
    messageId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    readAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.MessageOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MessageReceiptWhereUniqueInput = Prisma.AtLeast<{
    messageId_userId?: Prisma.MessageReceiptMessageIdUserIdCompoundUniqueInput;
    AND?: Prisma.MessageReceiptWhereInput | Prisma.MessageReceiptWhereInput[];
    OR?: Prisma.MessageReceiptWhereInput[];
    NOT?: Prisma.MessageReceiptWhereInput | Prisma.MessageReceiptWhereInput[];
    messageId?: Prisma.UuidFilter<"MessageReceipt"> | string;
    userId?: Prisma.UuidFilter<"MessageReceipt"> | string;
    deliveredAt?: Prisma.DateTimeNullableFilter<"MessageReceipt"> | Date | string | null;
    readAt?: Prisma.DateTimeNullableFilter<"MessageReceipt"> | Date | string | null;
    message?: Prisma.XOR<Prisma.MessageScalarRelationFilter, Prisma.MessageWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "messageId_userId">;
export type MessageReceiptOrderByWithAggregationInput = {
    messageId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    readAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MessageReceiptCountOrderByAggregateInput;
    _max?: Prisma.MessageReceiptMaxOrderByAggregateInput;
    _min?: Prisma.MessageReceiptMinOrderByAggregateInput;
};
export type MessageReceiptScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageReceiptScalarWhereWithAggregatesInput | Prisma.MessageReceiptScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageReceiptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageReceiptScalarWhereWithAggregatesInput | Prisma.MessageReceiptScalarWhereWithAggregatesInput[];
    messageId?: Prisma.UuidWithAggregatesFilter<"MessageReceipt"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"MessageReceipt"> | string;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MessageReceipt"> | Date | string | null;
    readAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MessageReceipt"> | Date | string | null;
};
export type MessageReceiptCreateInput = {
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
    message: Prisma.MessageCreateNestedOneWithoutReceiptsInput;
    user: Prisma.UserCreateNestedOneWithoutMessageReceiptsInput;
};
export type MessageReceiptUncheckedCreateInput = {
    messageId: string;
    userId: string;
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
};
export type MessageReceiptUpdateInput = {
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: Prisma.MessageUpdateOneRequiredWithoutReceiptsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMessageReceiptsNestedInput;
};
export type MessageReceiptUncheckedUpdateInput = {
    messageId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MessageReceiptCreateManyInput = {
    messageId: string;
    userId: string;
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
};
export type MessageReceiptUpdateManyMutationInput = {
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MessageReceiptUncheckedUpdateManyInput = {
    messageId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MessageReceiptListRelationFilter = {
    every?: Prisma.MessageReceiptWhereInput;
    some?: Prisma.MessageReceiptWhereInput;
    none?: Prisma.MessageReceiptWhereInput;
};
export type MessageReceiptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MessageReceiptMessageIdUserIdCompoundUniqueInput = {
    messageId: string;
    userId: string;
};
export type MessageReceiptCountOrderByAggregateInput = {
    messageId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type MessageReceiptMaxOrderByAggregateInput = {
    messageId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type MessageReceiptMinOrderByAggregateInput = {
    messageId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type MessageReceiptCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutUserInput, Prisma.MessageReceiptUncheckedCreateWithoutUserInput> | Prisma.MessageReceiptCreateWithoutUserInput[] | Prisma.MessageReceiptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutUserInput | Prisma.MessageReceiptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MessageReceiptCreateManyUserInputEnvelope;
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
};
export type MessageReceiptUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutUserInput, Prisma.MessageReceiptUncheckedCreateWithoutUserInput> | Prisma.MessageReceiptCreateWithoutUserInput[] | Prisma.MessageReceiptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutUserInput | Prisma.MessageReceiptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MessageReceiptCreateManyUserInputEnvelope;
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
};
export type MessageReceiptUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutUserInput, Prisma.MessageReceiptUncheckedCreateWithoutUserInput> | Prisma.MessageReceiptCreateWithoutUserInput[] | Prisma.MessageReceiptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutUserInput | Prisma.MessageReceiptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MessageReceiptUpsertWithWhereUniqueWithoutUserInput | Prisma.MessageReceiptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MessageReceiptCreateManyUserInputEnvelope;
    set?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    disconnect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    delete?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    update?: Prisma.MessageReceiptUpdateWithWhereUniqueWithoutUserInput | Prisma.MessageReceiptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MessageReceiptUpdateManyWithWhereWithoutUserInput | Prisma.MessageReceiptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MessageReceiptScalarWhereInput | Prisma.MessageReceiptScalarWhereInput[];
};
export type MessageReceiptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutUserInput, Prisma.MessageReceiptUncheckedCreateWithoutUserInput> | Prisma.MessageReceiptCreateWithoutUserInput[] | Prisma.MessageReceiptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutUserInput | Prisma.MessageReceiptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MessageReceiptUpsertWithWhereUniqueWithoutUserInput | Prisma.MessageReceiptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MessageReceiptCreateManyUserInputEnvelope;
    set?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    disconnect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    delete?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    update?: Prisma.MessageReceiptUpdateWithWhereUniqueWithoutUserInput | Prisma.MessageReceiptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MessageReceiptUpdateManyWithWhereWithoutUserInput | Prisma.MessageReceiptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MessageReceiptScalarWhereInput | Prisma.MessageReceiptScalarWhereInput[];
};
export type MessageReceiptCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutMessageInput, Prisma.MessageReceiptUncheckedCreateWithoutMessageInput> | Prisma.MessageReceiptCreateWithoutMessageInput[] | Prisma.MessageReceiptUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutMessageInput | Prisma.MessageReceiptCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.MessageReceiptCreateManyMessageInputEnvelope;
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
};
export type MessageReceiptUncheckedCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutMessageInput, Prisma.MessageReceiptUncheckedCreateWithoutMessageInput> | Prisma.MessageReceiptCreateWithoutMessageInput[] | Prisma.MessageReceiptUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutMessageInput | Prisma.MessageReceiptCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.MessageReceiptCreateManyMessageInputEnvelope;
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
};
export type MessageReceiptUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutMessageInput, Prisma.MessageReceiptUncheckedCreateWithoutMessageInput> | Prisma.MessageReceiptCreateWithoutMessageInput[] | Prisma.MessageReceiptUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutMessageInput | Prisma.MessageReceiptCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.MessageReceiptUpsertWithWhereUniqueWithoutMessageInput | Prisma.MessageReceiptUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.MessageReceiptCreateManyMessageInputEnvelope;
    set?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    disconnect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    delete?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    update?: Prisma.MessageReceiptUpdateWithWhereUniqueWithoutMessageInput | Prisma.MessageReceiptUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.MessageReceiptUpdateManyWithWhereWithoutMessageInput | Prisma.MessageReceiptUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.MessageReceiptScalarWhereInput | Prisma.MessageReceiptScalarWhereInput[];
};
export type MessageReceiptUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.MessageReceiptCreateWithoutMessageInput, Prisma.MessageReceiptUncheckedCreateWithoutMessageInput> | Prisma.MessageReceiptCreateWithoutMessageInput[] | Prisma.MessageReceiptUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessageReceiptCreateOrConnectWithoutMessageInput | Prisma.MessageReceiptCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.MessageReceiptUpsertWithWhereUniqueWithoutMessageInput | Prisma.MessageReceiptUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.MessageReceiptCreateManyMessageInputEnvelope;
    set?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    disconnect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    delete?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    connect?: Prisma.MessageReceiptWhereUniqueInput | Prisma.MessageReceiptWhereUniqueInput[];
    update?: Prisma.MessageReceiptUpdateWithWhereUniqueWithoutMessageInput | Prisma.MessageReceiptUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.MessageReceiptUpdateManyWithWhereWithoutMessageInput | Prisma.MessageReceiptUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.MessageReceiptScalarWhereInput | Prisma.MessageReceiptScalarWhereInput[];
};
export type MessageReceiptCreateWithoutUserInput = {
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
    message: Prisma.MessageCreateNestedOneWithoutReceiptsInput;
};
export type MessageReceiptUncheckedCreateWithoutUserInput = {
    messageId: string;
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
};
export type MessageReceiptCreateOrConnectWithoutUserInput = {
    where: Prisma.MessageReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageReceiptCreateWithoutUserInput, Prisma.MessageReceiptUncheckedCreateWithoutUserInput>;
};
export type MessageReceiptCreateManyUserInputEnvelope = {
    data: Prisma.MessageReceiptCreateManyUserInput | Prisma.MessageReceiptCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MessageReceiptUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MessageReceiptWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageReceiptUpdateWithoutUserInput, Prisma.MessageReceiptUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MessageReceiptCreateWithoutUserInput, Prisma.MessageReceiptUncheckedCreateWithoutUserInput>;
};
export type MessageReceiptUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MessageReceiptWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageReceiptUpdateWithoutUserInput, Prisma.MessageReceiptUncheckedUpdateWithoutUserInput>;
};
export type MessageReceiptUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MessageReceiptScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageReceiptUpdateManyMutationInput, Prisma.MessageReceiptUncheckedUpdateManyWithoutUserInput>;
};
export type MessageReceiptScalarWhereInput = {
    AND?: Prisma.MessageReceiptScalarWhereInput | Prisma.MessageReceiptScalarWhereInput[];
    OR?: Prisma.MessageReceiptScalarWhereInput[];
    NOT?: Prisma.MessageReceiptScalarWhereInput | Prisma.MessageReceiptScalarWhereInput[];
    messageId?: Prisma.UuidFilter<"MessageReceipt"> | string;
    userId?: Prisma.UuidFilter<"MessageReceipt"> | string;
    deliveredAt?: Prisma.DateTimeNullableFilter<"MessageReceipt"> | Date | string | null;
    readAt?: Prisma.DateTimeNullableFilter<"MessageReceipt"> | Date | string | null;
};
export type MessageReceiptCreateWithoutMessageInput = {
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutMessageReceiptsInput;
};
export type MessageReceiptUncheckedCreateWithoutMessageInput = {
    userId: string;
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
};
export type MessageReceiptCreateOrConnectWithoutMessageInput = {
    where: Prisma.MessageReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageReceiptCreateWithoutMessageInput, Prisma.MessageReceiptUncheckedCreateWithoutMessageInput>;
};
export type MessageReceiptCreateManyMessageInputEnvelope = {
    data: Prisma.MessageReceiptCreateManyMessageInput | Prisma.MessageReceiptCreateManyMessageInput[];
    skipDuplicates?: boolean;
};
export type MessageReceiptUpsertWithWhereUniqueWithoutMessageInput = {
    where: Prisma.MessageReceiptWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageReceiptUpdateWithoutMessageInput, Prisma.MessageReceiptUncheckedUpdateWithoutMessageInput>;
    create: Prisma.XOR<Prisma.MessageReceiptCreateWithoutMessageInput, Prisma.MessageReceiptUncheckedCreateWithoutMessageInput>;
};
export type MessageReceiptUpdateWithWhereUniqueWithoutMessageInput = {
    where: Prisma.MessageReceiptWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageReceiptUpdateWithoutMessageInput, Prisma.MessageReceiptUncheckedUpdateWithoutMessageInput>;
};
export type MessageReceiptUpdateManyWithWhereWithoutMessageInput = {
    where: Prisma.MessageReceiptScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageReceiptUpdateManyMutationInput, Prisma.MessageReceiptUncheckedUpdateManyWithoutMessageInput>;
};
export type MessageReceiptCreateManyUserInput = {
    messageId: string;
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
};
export type MessageReceiptUpdateWithoutUserInput = {
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: Prisma.MessageUpdateOneRequiredWithoutReceiptsNestedInput;
};
export type MessageReceiptUncheckedUpdateWithoutUserInput = {
    messageId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MessageReceiptUncheckedUpdateManyWithoutUserInput = {
    messageId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MessageReceiptCreateManyMessageInput = {
    userId: string;
    deliveredAt?: Date | string | null;
    readAt?: Date | string | null;
};
export type MessageReceiptUpdateWithoutMessageInput = {
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutMessageReceiptsNestedInput;
};
export type MessageReceiptUncheckedUpdateWithoutMessageInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MessageReceiptUncheckedUpdateManyWithoutMessageInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    readAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MessageReceiptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    messageId?: boolean;
    userId?: boolean;
    deliveredAt?: boolean;
    readAt?: boolean;
    message?: boolean | Prisma.MessageDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageReceipt"]>;
export type MessageReceiptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    messageId?: boolean;
    userId?: boolean;
    deliveredAt?: boolean;
    readAt?: boolean;
    message?: boolean | Prisma.MessageDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageReceipt"]>;
export type MessageReceiptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    messageId?: boolean;
    userId?: boolean;
    deliveredAt?: boolean;
    readAt?: boolean;
    message?: boolean | Prisma.MessageDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageReceipt"]>;
export type MessageReceiptSelectScalar = {
    messageId?: boolean;
    userId?: boolean;
    deliveredAt?: boolean;
    readAt?: boolean;
};
export type MessageReceiptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"messageId" | "userId" | "deliveredAt" | "readAt", ExtArgs["result"]["messageReceipt"]>;
export type MessageReceiptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.MessageDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MessageReceiptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.MessageDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MessageReceiptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | Prisma.MessageDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MessageReceiptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MessageReceipt";
    objects: {
        message: Prisma.$MessagePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        messageId: string;
        userId: string;
        deliveredAt: Date | null;
        readAt: Date | null;
    }, ExtArgs["result"]["messageReceipt"]>;
    composites: {};
};
export type MessageReceiptGetPayload<S extends boolean | null | undefined | MessageReceiptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload, S>;
export type MessageReceiptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageReceiptCountAggregateInputType | true;
};
export interface MessageReceiptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MessageReceipt'];
        meta: {
            name: 'MessageReceipt';
        };
    };
    findUnique<T extends MessageReceiptFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageReceiptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessageReceiptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessageReceiptFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageReceiptFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessageReceiptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessageReceiptFindManyArgs>(args?: Prisma.SelectSubset<T, MessageReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessageReceiptCreateArgs>(args: Prisma.SelectSubset<T, MessageReceiptCreateArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessageReceiptCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MessageReceiptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MessageReceiptDeleteArgs>(args: Prisma.SelectSubset<T, MessageReceiptDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessageReceiptUpdateArgs>(args: Prisma.SelectSubset<T, MessageReceiptUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessageReceiptDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessageReceiptUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MessageReceiptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MessageReceiptUpsertArgs>(args: Prisma.SelectSubset<T, MessageReceiptUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageReceiptClient<runtime.Types.Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MessageReceiptCountArgs>(args?: Prisma.Subset<T, MessageReceiptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageReceiptCountAggregateOutputType> : number>;
    aggregate<T extends MessageReceiptAggregateArgs>(args: Prisma.Subset<T, MessageReceiptAggregateArgs>): Prisma.PrismaPromise<GetMessageReceiptAggregateType<T>>;
    groupBy<T extends MessageReceiptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageReceiptGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageReceiptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessageReceiptFieldRefs;
}
export interface Prisma__MessageReceiptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    message<T extends Prisma.MessageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MessageDefaultArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessageReceiptFieldRefs {
    readonly messageId: Prisma.FieldRef<"MessageReceipt", 'String'>;
    readonly userId: Prisma.FieldRef<"MessageReceipt", 'String'>;
    readonly deliveredAt: Prisma.FieldRef<"MessageReceipt", 'DateTime'>;
    readonly readAt: Prisma.FieldRef<"MessageReceipt", 'DateTime'>;
}
export type MessageReceiptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    where: Prisma.MessageReceiptWhereUniqueInput;
};
export type MessageReceiptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    where: Prisma.MessageReceiptWhereUniqueInput;
};
export type MessageReceiptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    where?: Prisma.MessageReceiptWhereInput;
    orderBy?: Prisma.MessageReceiptOrderByWithRelationInput | Prisma.MessageReceiptOrderByWithRelationInput[];
    cursor?: Prisma.MessageReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageReceiptScalarFieldEnum | Prisma.MessageReceiptScalarFieldEnum[];
};
export type MessageReceiptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    where?: Prisma.MessageReceiptWhereInput;
    orderBy?: Prisma.MessageReceiptOrderByWithRelationInput | Prisma.MessageReceiptOrderByWithRelationInput[];
    cursor?: Prisma.MessageReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageReceiptScalarFieldEnum | Prisma.MessageReceiptScalarFieldEnum[];
};
export type MessageReceiptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    where?: Prisma.MessageReceiptWhereInput;
    orderBy?: Prisma.MessageReceiptOrderByWithRelationInput | Prisma.MessageReceiptOrderByWithRelationInput[];
    cursor?: Prisma.MessageReceiptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageReceiptScalarFieldEnum | Prisma.MessageReceiptScalarFieldEnum[];
};
export type MessageReceiptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageReceiptCreateInput, Prisma.MessageReceiptUncheckedCreateInput>;
};
export type MessageReceiptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessageReceiptCreateManyInput | Prisma.MessageReceiptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageReceiptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    data: Prisma.MessageReceiptCreateManyInput | Prisma.MessageReceiptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MessageReceiptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MessageReceiptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageReceiptUpdateInput, Prisma.MessageReceiptUncheckedUpdateInput>;
    where: Prisma.MessageReceiptWhereUniqueInput;
};
export type MessageReceiptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessageReceiptUpdateManyMutationInput, Prisma.MessageReceiptUncheckedUpdateManyInput>;
    where?: Prisma.MessageReceiptWhereInput;
    limit?: number;
};
export type MessageReceiptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageReceiptUpdateManyMutationInput, Prisma.MessageReceiptUncheckedUpdateManyInput>;
    where?: Prisma.MessageReceiptWhereInput;
    limit?: number;
    include?: Prisma.MessageReceiptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MessageReceiptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    where: Prisma.MessageReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageReceiptCreateInput, Prisma.MessageReceiptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessageReceiptUpdateInput, Prisma.MessageReceiptUncheckedUpdateInput>;
};
export type MessageReceiptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
    where: Prisma.MessageReceiptWhereUniqueInput;
};
export type MessageReceiptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageReceiptWhereInput;
    limit?: number;
};
export type MessageReceiptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageReceiptSelect<ExtArgs> | null;
    omit?: Prisma.MessageReceiptOmit<ExtArgs> | null;
    include?: Prisma.MessageReceiptInclude<ExtArgs> | null;
};
