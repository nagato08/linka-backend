import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CurrencyModel = runtime.Types.Result.DefaultSelection<Prisma.$CurrencyPayload>;
export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null;
    _avg: CurrencyAvgAggregateOutputType | null;
    _sum: CurrencySumAggregateOutputType | null;
    _min: CurrencyMinAggregateOutputType | null;
    _max: CurrencyMaxAggregateOutputType | null;
};
export type CurrencyAvgAggregateOutputType = {
    minorUnitScale: number | null;
};
export type CurrencySumAggregateOutputType = {
    minorUnitScale: number | null;
};
export type CurrencyMinAggregateOutputType = {
    code: string | null;
    name: string | null;
    symbol: string | null;
    minorUnitScale: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type CurrencyMaxAggregateOutputType = {
    code: string | null;
    name: string | null;
    symbol: string | null;
    minorUnitScale: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type CurrencyCountAggregateOutputType = {
    code: number;
    name: number;
    symbol: number;
    minorUnitScale: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type CurrencyAvgAggregateInputType = {
    minorUnitScale?: true;
};
export type CurrencySumAggregateInputType = {
    minorUnitScale?: true;
};
export type CurrencyMinAggregateInputType = {
    code?: true;
    name?: true;
    symbol?: true;
    minorUnitScale?: true;
    isActive?: true;
    createdAt?: true;
};
export type CurrencyMaxAggregateInputType = {
    code?: true;
    name?: true;
    symbol?: true;
    minorUnitScale?: true;
    isActive?: true;
    createdAt?: true;
};
export type CurrencyCountAggregateInputType = {
    code?: true;
    name?: true;
    symbol?: true;
    minorUnitScale?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type CurrencyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CurrencyCountAggregateInputType;
    _avg?: CurrencyAvgAggregateInputType;
    _sum?: CurrencySumAggregateInputType;
    _min?: CurrencyMinAggregateInputType;
    _max?: CurrencyMaxAggregateInputType;
};
export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
    [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCurrency[P]> : Prisma.GetScalarType<T[P], AggregateCurrency[P]>;
};
export type CurrencyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithAggregationInput | Prisma.CurrencyOrderByWithAggregationInput[];
    by: Prisma.CurrencyScalarFieldEnum[] | Prisma.CurrencyScalarFieldEnum;
    having?: Prisma.CurrencyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CurrencyCountAggregateInputType | true;
    _avg?: CurrencyAvgAggregateInputType;
    _sum?: CurrencySumAggregateInputType;
    _min?: CurrencyMinAggregateInputType;
    _max?: CurrencyMaxAggregateInputType;
};
export type CurrencyGroupByOutputType = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale: number;
    isActive: boolean;
    createdAt: Date;
    _count: CurrencyCountAggregateOutputType | null;
    _avg: CurrencyAvgAggregateOutputType | null;
    _sum: CurrencySumAggregateOutputType | null;
    _min: CurrencyMinAggregateOutputType | null;
    _max: CurrencyMaxAggregateOutputType | null;
};
export type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CurrencyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CurrencyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CurrencyGroupByOutputType[P]>;
}>>;
export type CurrencyWhereInput = {
    AND?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    OR?: Prisma.CurrencyWhereInput[];
    NOT?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    code?: Prisma.StringFilter<"Currency"> | string;
    name?: Prisma.StringFilter<"Currency"> | string;
    symbol?: Prisma.StringFilter<"Currency"> | string;
    minorUnitScale?: Prisma.IntFilter<"Currency"> | number;
    isActive?: Prisma.BoolFilter<"Currency"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Currency"> | Date | string;
    products?: Prisma.ProductListRelationFilter;
    paymentIntents?: Prisma.PaymentIntentListRelationFilter;
    purchases?: Prisma.PurchaseListRelationFilter;
    events?: Prisma.EventListRelationFilter;
};
export type CurrencyOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    minorUnitScale?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    paymentIntents?: Prisma.PaymentIntentOrderByRelationAggregateInput;
    purchases?: Prisma.PurchaseOrderByRelationAggregateInput;
    events?: Prisma.EventOrderByRelationAggregateInput;
};
export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    OR?: Prisma.CurrencyWhereInput[];
    NOT?: Prisma.CurrencyWhereInput | Prisma.CurrencyWhereInput[];
    name?: Prisma.StringFilter<"Currency"> | string;
    symbol?: Prisma.StringFilter<"Currency"> | string;
    minorUnitScale?: Prisma.IntFilter<"Currency"> | number;
    isActive?: Prisma.BoolFilter<"Currency"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Currency"> | Date | string;
    products?: Prisma.ProductListRelationFilter;
    paymentIntents?: Prisma.PaymentIntentListRelationFilter;
    purchases?: Prisma.PurchaseListRelationFilter;
    events?: Prisma.EventListRelationFilter;
}, "code">;
export type CurrencyOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    minorUnitScale?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CurrencyCountOrderByAggregateInput;
    _avg?: Prisma.CurrencyAvgOrderByAggregateInput;
    _max?: Prisma.CurrencyMaxOrderByAggregateInput;
    _min?: Prisma.CurrencyMinOrderByAggregateInput;
    _sum?: Prisma.CurrencySumOrderByAggregateInput;
};
export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: Prisma.CurrencyScalarWhereWithAggregatesInput | Prisma.CurrencyScalarWhereWithAggregatesInput[];
    OR?: Prisma.CurrencyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CurrencyScalarWhereWithAggregatesInput | Prisma.CurrencyScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"Currency"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Currency"> | string;
    symbol?: Prisma.StringWithAggregatesFilter<"Currency"> | string;
    minorUnitScale?: Prisma.IntWithAggregatesFilter<"Currency"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"Currency"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Currency"> | Date | string;
};
export type CurrencyCreateInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutCurrencyInput;
    paymentIntents?: Prisma.PaymentIntentCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyUncheckedCreateInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutCurrencyInput;
    paymentIntents?: Prisma.PaymentIntentUncheckedCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutCurrencyNestedInput;
    paymentIntents?: Prisma.PaymentIntentUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutCurrencyNestedInput;
    paymentIntents?: Prisma.PaymentIntentUncheckedUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyCreateManyInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type CurrencyUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurrencyUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CurrencyCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    minorUnitScale?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CurrencyAvgOrderByAggregateInput = {
    minorUnitScale?: Prisma.SortOrder;
};
export type CurrencyMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    minorUnitScale?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CurrencyMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    symbol?: Prisma.SortOrder;
    minorUnitScale?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CurrencySumOrderByAggregateInput = {
    minorUnitScale?: Prisma.SortOrder;
};
export type CurrencyNullableScalarRelationFilter = {
    is?: Prisma.CurrencyWhereInput | null;
    isNot?: Prisma.CurrencyWhereInput | null;
};
export type CurrencyScalarRelationFilter = {
    is?: Prisma.CurrencyWhereInput;
    isNot?: Prisma.CurrencyWhereInput;
};
export type CurrencyCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutProductsInput, Prisma.CurrencyUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutProductsInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutProductsInput, Prisma.CurrencyUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.CurrencyUpsertWithoutProductsInput;
    disconnect?: Prisma.CurrencyWhereInput | boolean;
    delete?: Prisma.CurrencyWhereInput | boolean;
    connect?: Prisma.CurrencyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurrencyUpdateToOneWithWhereWithoutProductsInput, Prisma.CurrencyUpdateWithoutProductsInput>, Prisma.CurrencyUncheckedUpdateWithoutProductsInput>;
};
export type CurrencyCreateNestedOneWithoutPaymentIntentsInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutPaymentIntentsInput, Prisma.CurrencyUncheckedCreateWithoutPaymentIntentsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutPaymentIntentsInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyUpdateOneRequiredWithoutPaymentIntentsNestedInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutPaymentIntentsInput, Prisma.CurrencyUncheckedCreateWithoutPaymentIntentsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutPaymentIntentsInput;
    upsert?: Prisma.CurrencyUpsertWithoutPaymentIntentsInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurrencyUpdateToOneWithWhereWithoutPaymentIntentsInput, Prisma.CurrencyUpdateWithoutPaymentIntentsInput>, Prisma.CurrencyUncheckedUpdateWithoutPaymentIntentsInput>;
};
export type CurrencyCreateNestedOneWithoutPurchasesInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutPurchasesInput, Prisma.CurrencyUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutPurchasesInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutPurchasesInput, Prisma.CurrencyUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutPurchasesInput;
    upsert?: Prisma.CurrencyUpsertWithoutPurchasesInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurrencyUpdateToOneWithWhereWithoutPurchasesInput, Prisma.CurrencyUpdateWithoutPurchasesInput>, Prisma.CurrencyUncheckedUpdateWithoutPurchasesInput>;
};
export type CurrencyCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutEventsInput, Prisma.CurrencyUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutEventsInput;
    connect?: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyUpdateOneWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.CurrencyCreateWithoutEventsInput, Prisma.CurrencyUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.CurrencyCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.CurrencyUpsertWithoutEventsInput;
    disconnect?: Prisma.CurrencyWhereInput | boolean;
    delete?: Prisma.CurrencyWhereInput | boolean;
    connect?: Prisma.CurrencyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CurrencyUpdateToOneWithWhereWithoutEventsInput, Prisma.CurrencyUpdateWithoutEventsInput>, Prisma.CurrencyUncheckedUpdateWithoutEventsInput>;
};
export type CurrencyCreateWithoutProductsInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    paymentIntents?: Prisma.PaymentIntentCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyUncheckedCreateWithoutProductsInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    paymentIntents?: Prisma.PaymentIntentUncheckedCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyCreateOrConnectWithoutProductsInput = {
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutProductsInput, Prisma.CurrencyUncheckedCreateWithoutProductsInput>;
};
export type CurrencyUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.CurrencyUpdateWithoutProductsInput, Prisma.CurrencyUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutProductsInput, Prisma.CurrencyUncheckedCreateWithoutProductsInput>;
    where?: Prisma.CurrencyWhereInput;
};
export type CurrencyUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.CurrencyWhereInput;
    data: Prisma.XOR<Prisma.CurrencyUpdateWithoutProductsInput, Prisma.CurrencyUncheckedUpdateWithoutProductsInput>;
};
export type CurrencyUpdateWithoutProductsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentIntents?: Prisma.PaymentIntentUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateWithoutProductsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentIntents?: Prisma.PaymentIntentUncheckedUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyCreateWithoutPaymentIntentsInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyUncheckedCreateWithoutPaymentIntentsInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyCreateOrConnectWithoutPaymentIntentsInput = {
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutPaymentIntentsInput, Prisma.CurrencyUncheckedCreateWithoutPaymentIntentsInput>;
};
export type CurrencyUpsertWithoutPaymentIntentsInput = {
    update: Prisma.XOR<Prisma.CurrencyUpdateWithoutPaymentIntentsInput, Prisma.CurrencyUncheckedUpdateWithoutPaymentIntentsInput>;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutPaymentIntentsInput, Prisma.CurrencyUncheckedCreateWithoutPaymentIntentsInput>;
    where?: Prisma.CurrencyWhereInput;
};
export type CurrencyUpdateToOneWithWhereWithoutPaymentIntentsInput = {
    where?: Prisma.CurrencyWhereInput;
    data: Prisma.XOR<Prisma.CurrencyUpdateWithoutPaymentIntentsInput, Prisma.CurrencyUncheckedUpdateWithoutPaymentIntentsInput>;
};
export type CurrencyUpdateWithoutPaymentIntentsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateWithoutPaymentIntentsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyCreateWithoutPurchasesInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutCurrencyInput;
    paymentIntents?: Prisma.PaymentIntentCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyUncheckedCreateWithoutPurchasesInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutCurrencyInput;
    paymentIntents?: Prisma.PaymentIntentUncheckedCreateNestedManyWithoutCurrencyInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyCreateOrConnectWithoutPurchasesInput = {
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutPurchasesInput, Prisma.CurrencyUncheckedCreateWithoutPurchasesInput>;
};
export type CurrencyUpsertWithoutPurchasesInput = {
    update: Prisma.XOR<Prisma.CurrencyUpdateWithoutPurchasesInput, Prisma.CurrencyUncheckedUpdateWithoutPurchasesInput>;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutPurchasesInput, Prisma.CurrencyUncheckedCreateWithoutPurchasesInput>;
    where?: Prisma.CurrencyWhereInput;
};
export type CurrencyUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: Prisma.CurrencyWhereInput;
    data: Prisma.XOR<Prisma.CurrencyUpdateWithoutPurchasesInput, Prisma.CurrencyUncheckedUpdateWithoutPurchasesInput>;
};
export type CurrencyUpdateWithoutPurchasesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutCurrencyNestedInput;
    paymentIntents?: Prisma.PaymentIntentUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateWithoutPurchasesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutCurrencyNestedInput;
    paymentIntents?: Prisma.PaymentIntentUncheckedUpdateManyWithoutCurrencyNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyCreateWithoutEventsInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutCurrencyInput;
    paymentIntents?: Prisma.PaymentIntentCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyUncheckedCreateWithoutEventsInput = {
    code: string;
    name: string;
    symbol: string;
    minorUnitScale?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutCurrencyInput;
    paymentIntents?: Prisma.PaymentIntentUncheckedCreateNestedManyWithoutCurrencyInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutCurrencyInput;
};
export type CurrencyCreateOrConnectWithoutEventsInput = {
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutEventsInput, Prisma.CurrencyUncheckedCreateWithoutEventsInput>;
};
export type CurrencyUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.CurrencyUpdateWithoutEventsInput, Prisma.CurrencyUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.CurrencyCreateWithoutEventsInput, Prisma.CurrencyUncheckedCreateWithoutEventsInput>;
    where?: Prisma.CurrencyWhereInput;
};
export type CurrencyUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.CurrencyWhereInput;
    data: Prisma.XOR<Prisma.CurrencyUpdateWithoutEventsInput, Prisma.CurrencyUncheckedUpdateWithoutEventsInput>;
};
export type CurrencyUpdateWithoutEventsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutCurrencyNestedInput;
    paymentIntents?: Prisma.PaymentIntentUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyUncheckedUpdateWithoutEventsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    symbol?: Prisma.StringFieldUpdateOperationsInput | string;
    minorUnitScale?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutCurrencyNestedInput;
    paymentIntents?: Prisma.PaymentIntentUncheckedUpdateManyWithoutCurrencyNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutCurrencyNestedInput;
};
export type CurrencyCountOutputType = {
    products: number;
    paymentIntents: number;
    purchases: number;
    events: number;
};
export type CurrencyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | CurrencyCountOutputTypeCountProductsArgs;
    paymentIntents?: boolean | CurrencyCountOutputTypeCountPaymentIntentsArgs;
    purchases?: boolean | CurrencyCountOutputTypeCountPurchasesArgs;
    events?: boolean | CurrencyCountOutputTypeCountEventsArgs;
};
export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencyCountOutputTypeSelect<ExtArgs> | null;
};
export type CurrencyCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type CurrencyCountOutputTypeCountPaymentIntentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentIntentWhereInput;
};
export type CurrencyCountOutputTypeCountPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
};
export type CurrencyCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
export type CurrencySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    symbol?: boolean;
    minorUnitScale?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    products?: boolean | Prisma.Currency$productsArgs<ExtArgs>;
    paymentIntents?: boolean | Prisma.Currency$paymentIntentsArgs<ExtArgs>;
    purchases?: boolean | Prisma.Currency$purchasesArgs<ExtArgs>;
    events?: boolean | Prisma.Currency$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.CurrencyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["currency"]>;
export type CurrencySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    symbol?: boolean;
    minorUnitScale?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["currency"]>;
export type CurrencySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    name?: boolean;
    symbol?: boolean;
    minorUnitScale?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["currency"]>;
export type CurrencySelectScalar = {
    code?: boolean;
    name?: boolean;
    symbol?: boolean;
    minorUnitScale?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type CurrencyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "name" | "symbol" | "minorUnitScale" | "isActive" | "createdAt", ExtArgs["result"]["currency"]>;
export type CurrencyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.Currency$productsArgs<ExtArgs>;
    paymentIntents?: boolean | Prisma.Currency$paymentIntentsArgs<ExtArgs>;
    purchases?: boolean | Prisma.Currency$purchasesArgs<ExtArgs>;
    events?: boolean | Prisma.Currency$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.CurrencyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CurrencyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CurrencyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Currency";
    objects: {
        products: Prisma.$ProductPayload<ExtArgs>[];
        paymentIntents: Prisma.$PaymentIntentPayload<ExtArgs>[];
        purchases: Prisma.$PurchasePayload<ExtArgs>[];
        events: Prisma.$EventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        name: string;
        symbol: string;
        minorUnitScale: number;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["currency"]>;
    composites: {};
};
export type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CurrencyPayload, S>;
export type CurrencyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CurrencyCountAggregateInputType | true;
};
export interface CurrencyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Currency'];
        meta: {
            name: 'Currency';
        };
    };
    findUnique<T extends CurrencyFindUniqueArgs>(args: Prisma.SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CurrencyFindFirstArgs>(args?: Prisma.SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CurrencyFindManyArgs>(args?: Prisma.SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CurrencyCreateArgs>(args: Prisma.SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CurrencyCreateManyArgs>(args?: Prisma.SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CurrencyDeleteArgs>(args: Prisma.SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CurrencyUpdateArgs>(args: Prisma.SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: Prisma.SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CurrencyUpdateManyArgs>(args: Prisma.SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CurrencyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CurrencyUpsertArgs>(args: Prisma.SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma.Prisma__CurrencyClient<runtime.Types.Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CurrencyCountArgs>(args?: Prisma.Subset<T, CurrencyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CurrencyCountAggregateOutputType> : number>;
    aggregate<T extends CurrencyAggregateArgs>(args: Prisma.Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>;
    groupBy<T extends CurrencyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CurrencyGroupByArgs['orderBy'];
    } : {
        orderBy?: CurrencyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CurrencyFieldRefs;
}
export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.Currency$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Currency$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    paymentIntents<T extends Prisma.Currency$paymentIntentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Currency$paymentIntentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchases<T extends Prisma.Currency$purchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Currency$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.Currency$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Currency$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CurrencyFieldRefs {
    readonly code: Prisma.FieldRef<"Currency", 'String'>;
    readonly name: Prisma.FieldRef<"Currency", 'String'>;
    readonly symbol: Prisma.FieldRef<"Currency", 'String'>;
    readonly minorUnitScale: Prisma.FieldRef<"Currency", 'Int'>;
    readonly isActive: Prisma.FieldRef<"Currency", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Currency", 'DateTime'>;
}
export type CurrencyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurrencyScalarFieldEnum | Prisma.CurrencyScalarFieldEnum[];
};
export type CurrencyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurrencyScalarFieldEnum | Prisma.CurrencyScalarFieldEnum[];
};
export type CurrencyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where?: Prisma.CurrencyWhereInput;
    orderBy?: Prisma.CurrencyOrderByWithRelationInput | Prisma.CurrencyOrderByWithRelationInput[];
    cursor?: Prisma.CurrencyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CurrencyScalarFieldEnum | Prisma.CurrencyScalarFieldEnum[];
};
export type CurrencyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurrencyCreateInput, Prisma.CurrencyUncheckedCreateInput>;
};
export type CurrencyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CurrencyCreateManyInput | Prisma.CurrencyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CurrencyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    data: Prisma.CurrencyCreateManyInput | Prisma.CurrencyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CurrencyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurrencyUpdateInput, Prisma.CurrencyUncheckedUpdateInput>;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CurrencyUpdateManyMutationInput, Prisma.CurrencyUncheckedUpdateManyInput>;
    where?: Prisma.CurrencyWhereInput;
    limit?: number;
};
export type CurrencyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CurrencyUpdateManyMutationInput, Prisma.CurrencyUncheckedUpdateManyInput>;
    where?: Prisma.CurrencyWhereInput;
    limit?: number;
};
export type CurrencyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CurrencyCreateInput, Prisma.CurrencyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CurrencyUpdateInput, Prisma.CurrencyUncheckedUpdateInput>;
};
export type CurrencyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
    where: Prisma.CurrencyWhereUniqueInput;
};
export type CurrencyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CurrencyWhereInput;
    limit?: number;
};
export type Currency$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Currency$paymentIntentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentIntentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentIntentOmit<ExtArgs> | null;
    include?: Prisma.PaymentIntentInclude<ExtArgs> | null;
    where?: Prisma.PaymentIntentWhereInput;
    orderBy?: Prisma.PaymentIntentOrderByWithRelationInput | Prisma.PaymentIntentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentIntentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentIntentScalarFieldEnum | Prisma.PaymentIntentScalarFieldEnum[];
};
export type Currency$purchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type Currency$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type CurrencyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CurrencySelect<ExtArgs> | null;
    omit?: Prisma.CurrencyOmit<ExtArgs> | null;
    include?: Prisma.CurrencyInclude<ExtArgs> | null;
};
