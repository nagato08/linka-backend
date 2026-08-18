import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContactBlockModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactBlockPayload>;
export type AggregateContactBlock = {
    _count: ContactBlockCountAggregateOutputType | null;
    _min: ContactBlockMinAggregateOutputType | null;
    _max: ContactBlockMaxAggregateOutputType | null;
};
export type ContactBlockMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    phoneHash: string | null;
    createdAt: Date | null;
};
export type ContactBlockMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    phoneHash: string | null;
    createdAt: Date | null;
};
export type ContactBlockCountAggregateOutputType = {
    id: number;
    userId: number;
    phoneHash: number;
    createdAt: number;
    _all: number;
};
export type ContactBlockMinAggregateInputType = {
    id?: true;
    userId?: true;
    phoneHash?: true;
    createdAt?: true;
};
export type ContactBlockMaxAggregateInputType = {
    id?: true;
    userId?: true;
    phoneHash?: true;
    createdAt?: true;
};
export type ContactBlockCountAggregateInputType = {
    id?: true;
    userId?: true;
    phoneHash?: true;
    createdAt?: true;
    _all?: true;
};
export type ContactBlockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactBlockWhereInput;
    orderBy?: Prisma.ContactBlockOrderByWithRelationInput | Prisma.ContactBlockOrderByWithRelationInput[];
    cursor?: Prisma.ContactBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactBlockCountAggregateInputType;
    _min?: ContactBlockMinAggregateInputType;
    _max?: ContactBlockMaxAggregateInputType;
};
export type GetContactBlockAggregateType<T extends ContactBlockAggregateArgs> = {
    [P in keyof T & keyof AggregateContactBlock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContactBlock[P]> : Prisma.GetScalarType<T[P], AggregateContactBlock[P]>;
};
export type ContactBlockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactBlockWhereInput;
    orderBy?: Prisma.ContactBlockOrderByWithAggregationInput | Prisma.ContactBlockOrderByWithAggregationInput[];
    by: Prisma.ContactBlockScalarFieldEnum[] | Prisma.ContactBlockScalarFieldEnum;
    having?: Prisma.ContactBlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactBlockCountAggregateInputType | true;
    _min?: ContactBlockMinAggregateInputType;
    _max?: ContactBlockMaxAggregateInputType;
};
export type ContactBlockGroupByOutputType = {
    id: string;
    userId: string;
    phoneHash: string;
    createdAt: Date;
    _count: ContactBlockCountAggregateOutputType | null;
    _min: ContactBlockMinAggregateOutputType | null;
    _max: ContactBlockMaxAggregateOutputType | null;
};
export type GetContactBlockGroupByPayload<T extends ContactBlockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactBlockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactBlockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactBlockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactBlockGroupByOutputType[P]>;
}>>;
export type ContactBlockWhereInput = {
    AND?: Prisma.ContactBlockWhereInput | Prisma.ContactBlockWhereInput[];
    OR?: Prisma.ContactBlockWhereInput[];
    NOT?: Prisma.ContactBlockWhereInput | Prisma.ContactBlockWhereInput[];
    id?: Prisma.UuidFilter<"ContactBlock"> | string;
    userId?: Prisma.UuidFilter<"ContactBlock"> | string;
    phoneHash?: Prisma.StringFilter<"ContactBlock"> | string;
    createdAt?: Prisma.DateTimeFilter<"ContactBlock"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ContactBlockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phoneHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ContactBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_phoneHash?: Prisma.ContactBlockUserIdPhoneHashCompoundUniqueInput;
    AND?: Prisma.ContactBlockWhereInput | Prisma.ContactBlockWhereInput[];
    OR?: Prisma.ContactBlockWhereInput[];
    NOT?: Prisma.ContactBlockWhereInput | Prisma.ContactBlockWhereInput[];
    userId?: Prisma.UuidFilter<"ContactBlock"> | string;
    phoneHash?: Prisma.StringFilter<"ContactBlock"> | string;
    createdAt?: Prisma.DateTimeFilter<"ContactBlock"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_phoneHash">;
export type ContactBlockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phoneHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ContactBlockCountOrderByAggregateInput;
    _max?: Prisma.ContactBlockMaxOrderByAggregateInput;
    _min?: Prisma.ContactBlockMinOrderByAggregateInput;
};
export type ContactBlockScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactBlockScalarWhereWithAggregatesInput | Prisma.ContactBlockScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactBlockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactBlockScalarWhereWithAggregatesInput | Prisma.ContactBlockScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ContactBlock"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"ContactBlock"> | string;
    phoneHash?: Prisma.StringWithAggregatesFilter<"ContactBlock"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContactBlock"> | Date | string;
};
export type ContactBlockCreateInput = {
    id?: string;
    phoneHash: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutContactBlocksInput;
};
export type ContactBlockUncheckedCreateInput = {
    id?: string;
    userId: string;
    phoneHash: string;
    createdAt?: Date | string;
};
export type ContactBlockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutContactBlocksNestedInput;
};
export type ContactBlockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactBlockCreateManyInput = {
    id?: string;
    userId: string;
    phoneHash: string;
    createdAt?: Date | string;
};
export type ContactBlockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactBlockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactBlockListRelationFilter = {
    every?: Prisma.ContactBlockWhereInput;
    some?: Prisma.ContactBlockWhereInput;
    none?: Prisma.ContactBlockWhereInput;
};
export type ContactBlockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContactBlockUserIdPhoneHashCompoundUniqueInput = {
    userId: string;
    phoneHash: string;
};
export type ContactBlockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phoneHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContactBlockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phoneHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContactBlockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    phoneHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContactBlockCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContactBlockCreateWithoutUserInput, Prisma.ContactBlockUncheckedCreateWithoutUserInput> | Prisma.ContactBlockCreateWithoutUserInput[] | Prisma.ContactBlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactBlockCreateOrConnectWithoutUserInput | Prisma.ContactBlockCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ContactBlockCreateManyUserInputEnvelope;
    connect?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
};
export type ContactBlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContactBlockCreateWithoutUserInput, Prisma.ContactBlockUncheckedCreateWithoutUserInput> | Prisma.ContactBlockCreateWithoutUserInput[] | Prisma.ContactBlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactBlockCreateOrConnectWithoutUserInput | Prisma.ContactBlockCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ContactBlockCreateManyUserInputEnvelope;
    connect?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
};
export type ContactBlockUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContactBlockCreateWithoutUserInput, Prisma.ContactBlockUncheckedCreateWithoutUserInput> | Prisma.ContactBlockCreateWithoutUserInput[] | Prisma.ContactBlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactBlockCreateOrConnectWithoutUserInput | Prisma.ContactBlockCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ContactBlockUpsertWithWhereUniqueWithoutUserInput | Prisma.ContactBlockUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ContactBlockCreateManyUserInputEnvelope;
    set?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    disconnect?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    delete?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    connect?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    update?: Prisma.ContactBlockUpdateWithWhereUniqueWithoutUserInput | Prisma.ContactBlockUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ContactBlockUpdateManyWithWhereWithoutUserInput | Prisma.ContactBlockUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ContactBlockScalarWhereInput | Prisma.ContactBlockScalarWhereInput[];
};
export type ContactBlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContactBlockCreateWithoutUserInput, Prisma.ContactBlockUncheckedCreateWithoutUserInput> | Prisma.ContactBlockCreateWithoutUserInput[] | Prisma.ContactBlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ContactBlockCreateOrConnectWithoutUserInput | Prisma.ContactBlockCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ContactBlockUpsertWithWhereUniqueWithoutUserInput | Prisma.ContactBlockUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ContactBlockCreateManyUserInputEnvelope;
    set?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    disconnect?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    delete?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    connect?: Prisma.ContactBlockWhereUniqueInput | Prisma.ContactBlockWhereUniqueInput[];
    update?: Prisma.ContactBlockUpdateWithWhereUniqueWithoutUserInput | Prisma.ContactBlockUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ContactBlockUpdateManyWithWhereWithoutUserInput | Prisma.ContactBlockUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ContactBlockScalarWhereInput | Prisma.ContactBlockScalarWhereInput[];
};
export type ContactBlockCreateWithoutUserInput = {
    id?: string;
    phoneHash: string;
    createdAt?: Date | string;
};
export type ContactBlockUncheckedCreateWithoutUserInput = {
    id?: string;
    phoneHash: string;
    createdAt?: Date | string;
};
export type ContactBlockCreateOrConnectWithoutUserInput = {
    where: Prisma.ContactBlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactBlockCreateWithoutUserInput, Prisma.ContactBlockUncheckedCreateWithoutUserInput>;
};
export type ContactBlockCreateManyUserInputEnvelope = {
    data: Prisma.ContactBlockCreateManyUserInput | Prisma.ContactBlockCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ContactBlockUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ContactBlockWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContactBlockUpdateWithoutUserInput, Prisma.ContactBlockUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ContactBlockCreateWithoutUserInput, Prisma.ContactBlockUncheckedCreateWithoutUserInput>;
};
export type ContactBlockUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ContactBlockWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContactBlockUpdateWithoutUserInput, Prisma.ContactBlockUncheckedUpdateWithoutUserInput>;
};
export type ContactBlockUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ContactBlockScalarWhereInput;
    data: Prisma.XOR<Prisma.ContactBlockUpdateManyMutationInput, Prisma.ContactBlockUncheckedUpdateManyWithoutUserInput>;
};
export type ContactBlockScalarWhereInput = {
    AND?: Prisma.ContactBlockScalarWhereInput | Prisma.ContactBlockScalarWhereInput[];
    OR?: Prisma.ContactBlockScalarWhereInput[];
    NOT?: Prisma.ContactBlockScalarWhereInput | Prisma.ContactBlockScalarWhereInput[];
    id?: Prisma.UuidFilter<"ContactBlock"> | string;
    userId?: Prisma.UuidFilter<"ContactBlock"> | string;
    phoneHash?: Prisma.StringFilter<"ContactBlock"> | string;
    createdAt?: Prisma.DateTimeFilter<"ContactBlock"> | Date | string;
};
export type ContactBlockCreateManyUserInput = {
    id?: string;
    phoneHash: string;
    createdAt?: Date | string;
};
export type ContactBlockUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactBlockUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactBlockUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactBlockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    phoneHash?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contactBlock"]>;
export type ContactBlockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    phoneHash?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contactBlock"]>;
export type ContactBlockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    phoneHash?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contactBlock"]>;
export type ContactBlockSelectScalar = {
    id?: boolean;
    userId?: boolean;
    phoneHash?: boolean;
    createdAt?: boolean;
};
export type ContactBlockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "phoneHash" | "createdAt", ExtArgs["result"]["contactBlock"]>;
export type ContactBlockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ContactBlockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ContactBlockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ContactBlockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContactBlock";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        phoneHash: string;
        createdAt: Date;
    }, ExtArgs["result"]["contactBlock"]>;
    composites: {};
};
export type ContactBlockGetPayload<S extends boolean | null | undefined | ContactBlockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload, S>;
export type ContactBlockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactBlockCountAggregateInputType | true;
};
export interface ContactBlockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContactBlock'];
        meta: {
            name: 'ContactBlock';
        };
    };
    findUnique<T extends ContactBlockFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactBlockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactBlockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactBlockFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactBlockFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactBlockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactBlockFindManyArgs>(args?: Prisma.SelectSubset<T, ContactBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactBlockCreateArgs>(args: Prisma.SelectSubset<T, ContactBlockCreateArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactBlockCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContactBlockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContactBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContactBlockDeleteArgs>(args: Prisma.SelectSubset<T, ContactBlockDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactBlockUpdateArgs>(args: Prisma.SelectSubset<T, ContactBlockUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactBlockDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactBlockUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContactBlockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContactBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContactBlockUpsertArgs>(args: Prisma.SelectSubset<T, ContactBlockUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactBlockClient<runtime.Types.Result.GetResult<Prisma.$ContactBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactBlockCountArgs>(args?: Prisma.Subset<T, ContactBlockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactBlockCountAggregateOutputType> : number>;
    aggregate<T extends ContactBlockAggregateArgs>(args: Prisma.Subset<T, ContactBlockAggregateArgs>): Prisma.PrismaPromise<GetContactBlockAggregateType<T>>;
    groupBy<T extends ContactBlockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactBlockGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactBlockGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactBlockFieldRefs;
}
export interface Prisma__ContactBlockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactBlockFieldRefs {
    readonly id: Prisma.FieldRef<"ContactBlock", 'String'>;
    readonly userId: Prisma.FieldRef<"ContactBlock", 'String'>;
    readonly phoneHash: Prisma.FieldRef<"ContactBlock", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ContactBlock", 'DateTime'>;
}
export type ContactBlockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    where: Prisma.ContactBlockWhereUniqueInput;
};
export type ContactBlockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    where: Prisma.ContactBlockWhereUniqueInput;
};
export type ContactBlockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    where?: Prisma.ContactBlockWhereInput;
    orderBy?: Prisma.ContactBlockOrderByWithRelationInput | Prisma.ContactBlockOrderByWithRelationInput[];
    cursor?: Prisma.ContactBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactBlockScalarFieldEnum | Prisma.ContactBlockScalarFieldEnum[];
};
export type ContactBlockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    where?: Prisma.ContactBlockWhereInput;
    orderBy?: Prisma.ContactBlockOrderByWithRelationInput | Prisma.ContactBlockOrderByWithRelationInput[];
    cursor?: Prisma.ContactBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactBlockScalarFieldEnum | Prisma.ContactBlockScalarFieldEnum[];
};
export type ContactBlockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    where?: Prisma.ContactBlockWhereInput;
    orderBy?: Prisma.ContactBlockOrderByWithRelationInput | Prisma.ContactBlockOrderByWithRelationInput[];
    cursor?: Prisma.ContactBlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactBlockScalarFieldEnum | Prisma.ContactBlockScalarFieldEnum[];
};
export type ContactBlockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactBlockCreateInput, Prisma.ContactBlockUncheckedCreateInput>;
};
export type ContactBlockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactBlockCreateManyInput | Prisma.ContactBlockCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactBlockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    data: Prisma.ContactBlockCreateManyInput | Prisma.ContactBlockCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContactBlockIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContactBlockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactBlockUpdateInput, Prisma.ContactBlockUncheckedUpdateInput>;
    where: Prisma.ContactBlockWhereUniqueInput;
};
export type ContactBlockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactBlockUpdateManyMutationInput, Prisma.ContactBlockUncheckedUpdateManyInput>;
    where?: Prisma.ContactBlockWhereInput;
    limit?: number;
};
export type ContactBlockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactBlockUpdateManyMutationInput, Prisma.ContactBlockUncheckedUpdateManyInput>;
    where?: Prisma.ContactBlockWhereInput;
    limit?: number;
    include?: Prisma.ContactBlockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContactBlockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    where: Prisma.ContactBlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactBlockCreateInput, Prisma.ContactBlockUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactBlockUpdateInput, Prisma.ContactBlockUncheckedUpdateInput>;
};
export type ContactBlockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
    where: Prisma.ContactBlockWhereUniqueInput;
};
export type ContactBlockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactBlockWhereInput;
    limit?: number;
};
export type ContactBlockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactBlockSelect<ExtArgs> | null;
    omit?: Prisma.ContactBlockOmit<ExtArgs> | null;
    include?: Prisma.ContactBlockInclude<ExtArgs> | null;
};
