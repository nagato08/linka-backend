import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RiskScoreModel = runtime.Types.Result.DefaultSelection<Prisma.$RiskScorePayload>;
export type AggregateRiskScore = {
    _count: RiskScoreCountAggregateOutputType | null;
    _avg: RiskScoreAvgAggregateOutputType | null;
    _sum: RiskScoreSumAggregateOutputType | null;
    _min: RiskScoreMinAggregateOutputType | null;
    _max: RiskScoreMaxAggregateOutputType | null;
};
export type RiskScoreAvgAggregateOutputType = {
    score: number | null;
};
export type RiskScoreSumAggregateOutputType = {
    score: number | null;
};
export type RiskScoreMinAggregateOutputType = {
    userId: string | null;
    score: number | null;
    level: $Enums.RiskLevel | null;
    shadowBannedAt: Date | null;
    reviewedAt: Date | null;
    updatedAt: Date | null;
};
export type RiskScoreMaxAggregateOutputType = {
    userId: string | null;
    score: number | null;
    level: $Enums.RiskLevel | null;
    shadowBannedAt: Date | null;
    reviewedAt: Date | null;
    updatedAt: Date | null;
};
export type RiskScoreCountAggregateOutputType = {
    userId: number;
    score: number;
    level: number;
    signals: number;
    shadowBannedAt: number;
    reviewedAt: number;
    updatedAt: number;
    _all: number;
};
export type RiskScoreAvgAggregateInputType = {
    score?: true;
};
export type RiskScoreSumAggregateInputType = {
    score?: true;
};
export type RiskScoreMinAggregateInputType = {
    userId?: true;
    score?: true;
    level?: true;
    shadowBannedAt?: true;
    reviewedAt?: true;
    updatedAt?: true;
};
export type RiskScoreMaxAggregateInputType = {
    userId?: true;
    score?: true;
    level?: true;
    shadowBannedAt?: true;
    reviewedAt?: true;
    updatedAt?: true;
};
export type RiskScoreCountAggregateInputType = {
    userId?: true;
    score?: true;
    level?: true;
    signals?: true;
    shadowBannedAt?: true;
    reviewedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RiskScoreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskScoreWhereInput;
    orderBy?: Prisma.RiskScoreOrderByWithRelationInput | Prisma.RiskScoreOrderByWithRelationInput[];
    cursor?: Prisma.RiskScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RiskScoreCountAggregateInputType;
    _avg?: RiskScoreAvgAggregateInputType;
    _sum?: RiskScoreSumAggregateInputType;
    _min?: RiskScoreMinAggregateInputType;
    _max?: RiskScoreMaxAggregateInputType;
};
export type GetRiskScoreAggregateType<T extends RiskScoreAggregateArgs> = {
    [P in keyof T & keyof AggregateRiskScore]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRiskScore[P]> : Prisma.GetScalarType<T[P], AggregateRiskScore[P]>;
};
export type RiskScoreGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskScoreWhereInput;
    orderBy?: Prisma.RiskScoreOrderByWithAggregationInput | Prisma.RiskScoreOrderByWithAggregationInput[];
    by: Prisma.RiskScoreScalarFieldEnum[] | Prisma.RiskScoreScalarFieldEnum;
    having?: Prisma.RiskScoreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RiskScoreCountAggregateInputType | true;
    _avg?: RiskScoreAvgAggregateInputType;
    _sum?: RiskScoreSumAggregateInputType;
    _min?: RiskScoreMinAggregateInputType;
    _max?: RiskScoreMaxAggregateInputType;
};
export type RiskScoreGroupByOutputType = {
    userId: string;
    score: number;
    level: $Enums.RiskLevel;
    signals: runtime.JsonValue | null;
    shadowBannedAt: Date | null;
    reviewedAt: Date | null;
    updatedAt: Date;
    _count: RiskScoreCountAggregateOutputType | null;
    _avg: RiskScoreAvgAggregateOutputType | null;
    _sum: RiskScoreSumAggregateOutputType | null;
    _min: RiskScoreMinAggregateOutputType | null;
    _max: RiskScoreMaxAggregateOutputType | null;
};
export type GetRiskScoreGroupByPayload<T extends RiskScoreGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RiskScoreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RiskScoreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RiskScoreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RiskScoreGroupByOutputType[P]>;
}>>;
export type RiskScoreWhereInput = {
    AND?: Prisma.RiskScoreWhereInput | Prisma.RiskScoreWhereInput[];
    OR?: Prisma.RiskScoreWhereInput[];
    NOT?: Prisma.RiskScoreWhereInput | Prisma.RiskScoreWhereInput[];
    userId?: Prisma.UuidFilter<"RiskScore"> | string;
    score?: Prisma.IntFilter<"RiskScore"> | number;
    level?: Prisma.EnumRiskLevelFilter<"RiskScore"> | $Enums.RiskLevel;
    signals?: Prisma.JsonNullableFilter<"RiskScore">;
    shadowBannedAt?: Prisma.DateTimeNullableFilter<"RiskScore"> | Date | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RiskScore"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"RiskScore"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type RiskScoreOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    signals?: Prisma.SortOrderInput | Prisma.SortOrder;
    shadowBannedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type RiskScoreWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.RiskScoreWhereInput | Prisma.RiskScoreWhereInput[];
    OR?: Prisma.RiskScoreWhereInput[];
    NOT?: Prisma.RiskScoreWhereInput | Prisma.RiskScoreWhereInput[];
    score?: Prisma.IntFilter<"RiskScore"> | number;
    level?: Prisma.EnumRiskLevelFilter<"RiskScore"> | $Enums.RiskLevel;
    signals?: Prisma.JsonNullableFilter<"RiskScore">;
    shadowBannedAt?: Prisma.DateTimeNullableFilter<"RiskScore"> | Date | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RiskScore"> | Date | string | null;
    updatedAt?: Prisma.DateTimeFilter<"RiskScore"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId">;
export type RiskScoreOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    signals?: Prisma.SortOrderInput | Prisma.SortOrder;
    shadowBannedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RiskScoreCountOrderByAggregateInput;
    _avg?: Prisma.RiskScoreAvgOrderByAggregateInput;
    _max?: Prisma.RiskScoreMaxOrderByAggregateInput;
    _min?: Prisma.RiskScoreMinOrderByAggregateInput;
    _sum?: Prisma.RiskScoreSumOrderByAggregateInput;
};
export type RiskScoreScalarWhereWithAggregatesInput = {
    AND?: Prisma.RiskScoreScalarWhereWithAggregatesInput | Prisma.RiskScoreScalarWhereWithAggregatesInput[];
    OR?: Prisma.RiskScoreScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RiskScoreScalarWhereWithAggregatesInput | Prisma.RiskScoreScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"RiskScore"> | string;
    score?: Prisma.IntWithAggregatesFilter<"RiskScore"> | number;
    level?: Prisma.EnumRiskLevelWithAggregatesFilter<"RiskScore"> | $Enums.RiskLevel;
    signals?: Prisma.JsonNullableWithAggregatesFilter<"RiskScore">;
    shadowBannedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RiskScore"> | Date | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RiskScore"> | Date | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RiskScore"> | Date | string;
};
export type RiskScoreCreateInput = {
    score?: number;
    level?: $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRiskScoreInput;
};
export type RiskScoreUncheckedCreateInput = {
    userId: string;
    score?: number;
    level?: $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type RiskScoreUpdateInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRiskScoreNestedInput;
};
export type RiskScoreUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskScoreCreateManyInput = {
    userId: string;
    score?: number;
    level?: $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type RiskScoreUpdateManyMutationInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskScoreUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskScoreNullableScalarRelationFilter = {
    is?: Prisma.RiskScoreWhereInput | null;
    isNot?: Prisma.RiskScoreWhereInput | null;
};
export type RiskScoreCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    signals?: Prisma.SortOrder;
    shadowBannedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RiskScoreAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type RiskScoreMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    shadowBannedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RiskScoreMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    shadowBannedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RiskScoreSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type RiskScoreCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RiskScoreCreateWithoutUserInput, Prisma.RiskScoreUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiskScoreCreateOrConnectWithoutUserInput;
    connect?: Prisma.RiskScoreWhereUniqueInput;
};
export type RiskScoreUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RiskScoreCreateWithoutUserInput, Prisma.RiskScoreUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiskScoreCreateOrConnectWithoutUserInput;
    connect?: Prisma.RiskScoreWhereUniqueInput;
};
export type RiskScoreUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RiskScoreCreateWithoutUserInput, Prisma.RiskScoreUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiskScoreCreateOrConnectWithoutUserInput;
    upsert?: Prisma.RiskScoreUpsertWithoutUserInput;
    disconnect?: Prisma.RiskScoreWhereInput | boolean;
    delete?: Prisma.RiskScoreWhereInput | boolean;
    connect?: Prisma.RiskScoreWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RiskScoreUpdateToOneWithWhereWithoutUserInput, Prisma.RiskScoreUpdateWithoutUserInput>, Prisma.RiskScoreUncheckedUpdateWithoutUserInput>;
};
export type RiskScoreUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RiskScoreCreateWithoutUserInput, Prisma.RiskScoreUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.RiskScoreCreateOrConnectWithoutUserInput;
    upsert?: Prisma.RiskScoreUpsertWithoutUserInput;
    disconnect?: Prisma.RiskScoreWhereInput | boolean;
    delete?: Prisma.RiskScoreWhereInput | boolean;
    connect?: Prisma.RiskScoreWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RiskScoreUpdateToOneWithWhereWithoutUserInput, Prisma.RiskScoreUpdateWithoutUserInput>, Prisma.RiskScoreUncheckedUpdateWithoutUserInput>;
};
export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel;
};
export type RiskScoreCreateWithoutUserInput = {
    score?: number;
    level?: $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type RiskScoreUncheckedCreateWithoutUserInput = {
    score?: number;
    level?: $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    updatedAt?: Date | string;
};
export type RiskScoreCreateOrConnectWithoutUserInput = {
    where: Prisma.RiskScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskScoreCreateWithoutUserInput, Prisma.RiskScoreUncheckedCreateWithoutUserInput>;
};
export type RiskScoreUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.RiskScoreUpdateWithoutUserInput, Prisma.RiskScoreUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RiskScoreCreateWithoutUserInput, Prisma.RiskScoreUncheckedCreateWithoutUserInput>;
    where?: Prisma.RiskScoreWhereInput;
};
export type RiskScoreUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.RiskScoreWhereInput;
    data: Prisma.XOR<Prisma.RiskScoreUpdateWithoutUserInput, Prisma.RiskScoreUncheckedUpdateWithoutUserInput>;
};
export type RiskScoreUpdateWithoutUserInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskScoreUncheckedUpdateWithoutUserInput = {
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    level?: Prisma.EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
    signals?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    shadowBannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskScoreSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    score?: boolean;
    level?: boolean;
    signals?: boolean;
    shadowBannedAt?: boolean;
    reviewedAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riskScore"]>;
export type RiskScoreSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    score?: boolean;
    level?: boolean;
    signals?: boolean;
    shadowBannedAt?: boolean;
    reviewedAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riskScore"]>;
export type RiskScoreSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    score?: boolean;
    level?: boolean;
    signals?: boolean;
    shadowBannedAt?: boolean;
    reviewedAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riskScore"]>;
export type RiskScoreSelectScalar = {
    userId?: boolean;
    score?: boolean;
    level?: boolean;
    signals?: boolean;
    shadowBannedAt?: boolean;
    reviewedAt?: boolean;
    updatedAt?: boolean;
};
export type RiskScoreOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "score" | "level" | "signals" | "shadowBannedAt" | "reviewedAt" | "updatedAt", ExtArgs["result"]["riskScore"]>;
export type RiskScoreInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RiskScoreIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RiskScoreIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RiskScorePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RiskScore";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        score: number;
        level: $Enums.RiskLevel;
        signals: runtime.JsonValue | null;
        shadowBannedAt: Date | null;
        reviewedAt: Date | null;
        updatedAt: Date;
    }, ExtArgs["result"]["riskScore"]>;
    composites: {};
};
export type RiskScoreGetPayload<S extends boolean | null | undefined | RiskScoreDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RiskScorePayload, S>;
export type RiskScoreCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RiskScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RiskScoreCountAggregateInputType | true;
};
export interface RiskScoreDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RiskScore'];
        meta: {
            name: 'RiskScore';
        };
    };
    findUnique<T extends RiskScoreFindUniqueArgs>(args: Prisma.SelectSubset<T, RiskScoreFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RiskScoreFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RiskScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RiskScoreFindFirstArgs>(args?: Prisma.SelectSubset<T, RiskScoreFindFirstArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RiskScoreFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RiskScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RiskScoreFindManyArgs>(args?: Prisma.SelectSubset<T, RiskScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RiskScoreCreateArgs>(args: Prisma.SelectSubset<T, RiskScoreCreateArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RiskScoreCreateManyArgs>(args?: Prisma.SelectSubset<T, RiskScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RiskScoreCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RiskScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RiskScoreDeleteArgs>(args: Prisma.SelectSubset<T, RiskScoreDeleteArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RiskScoreUpdateArgs>(args: Prisma.SelectSubset<T, RiskScoreUpdateArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RiskScoreDeleteManyArgs>(args?: Prisma.SelectSubset<T, RiskScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RiskScoreUpdateManyArgs>(args: Prisma.SelectSubset<T, RiskScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RiskScoreUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RiskScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RiskScoreUpsertArgs>(args: Prisma.SelectSubset<T, RiskScoreUpsertArgs<ExtArgs>>): Prisma.Prisma__RiskScoreClient<runtime.Types.Result.GetResult<Prisma.$RiskScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RiskScoreCountArgs>(args?: Prisma.Subset<T, RiskScoreCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RiskScoreCountAggregateOutputType> : number>;
    aggregate<T extends RiskScoreAggregateArgs>(args: Prisma.Subset<T, RiskScoreAggregateArgs>): Prisma.PrismaPromise<GetRiskScoreAggregateType<T>>;
    groupBy<T extends RiskScoreGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RiskScoreGroupByArgs['orderBy'];
    } : {
        orderBy?: RiskScoreGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RiskScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RiskScoreFieldRefs;
}
export interface Prisma__RiskScoreClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RiskScoreFieldRefs {
    readonly userId: Prisma.FieldRef<"RiskScore", 'String'>;
    readonly score: Prisma.FieldRef<"RiskScore", 'Int'>;
    readonly level: Prisma.FieldRef<"RiskScore", 'RiskLevel'>;
    readonly signals: Prisma.FieldRef<"RiskScore", 'Json'>;
    readonly shadowBannedAt: Prisma.FieldRef<"RiskScore", 'DateTime'>;
    readonly reviewedAt: Prisma.FieldRef<"RiskScore", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RiskScore", 'DateTime'>;
}
export type RiskScoreFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    where: Prisma.RiskScoreWhereUniqueInput;
};
export type RiskScoreFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    where: Prisma.RiskScoreWhereUniqueInput;
};
export type RiskScoreFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    where?: Prisma.RiskScoreWhereInput;
    orderBy?: Prisma.RiskScoreOrderByWithRelationInput | Prisma.RiskScoreOrderByWithRelationInput[];
    cursor?: Prisma.RiskScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskScoreScalarFieldEnum | Prisma.RiskScoreScalarFieldEnum[];
};
export type RiskScoreFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    where?: Prisma.RiskScoreWhereInput;
    orderBy?: Prisma.RiskScoreOrderByWithRelationInput | Prisma.RiskScoreOrderByWithRelationInput[];
    cursor?: Prisma.RiskScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskScoreScalarFieldEnum | Prisma.RiskScoreScalarFieldEnum[];
};
export type RiskScoreFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    where?: Prisma.RiskScoreWhereInput;
    orderBy?: Prisma.RiskScoreOrderByWithRelationInput | Prisma.RiskScoreOrderByWithRelationInput[];
    cursor?: Prisma.RiskScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskScoreScalarFieldEnum | Prisma.RiskScoreScalarFieldEnum[];
};
export type RiskScoreCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskScoreCreateInput, Prisma.RiskScoreUncheckedCreateInput>;
};
export type RiskScoreCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RiskScoreCreateManyInput | Prisma.RiskScoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiskScoreCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    data: Prisma.RiskScoreCreateManyInput | Prisma.RiskScoreCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RiskScoreIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RiskScoreUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskScoreUpdateInput, Prisma.RiskScoreUncheckedUpdateInput>;
    where: Prisma.RiskScoreWhereUniqueInput;
};
export type RiskScoreUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RiskScoreUpdateManyMutationInput, Prisma.RiskScoreUncheckedUpdateManyInput>;
    where?: Prisma.RiskScoreWhereInput;
    limit?: number;
};
export type RiskScoreUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskScoreUpdateManyMutationInput, Prisma.RiskScoreUncheckedUpdateManyInput>;
    where?: Prisma.RiskScoreWhereInput;
    limit?: number;
    include?: Prisma.RiskScoreIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RiskScoreUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    where: Prisma.RiskScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskScoreCreateInput, Prisma.RiskScoreUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RiskScoreUpdateInput, Prisma.RiskScoreUncheckedUpdateInput>;
};
export type RiskScoreDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
    where: Prisma.RiskScoreWhereUniqueInput;
};
export type RiskScoreDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskScoreWhereInput;
    limit?: number;
};
export type RiskScoreDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskScoreSelect<ExtArgs> | null;
    omit?: Prisma.RiskScoreOmit<ExtArgs> | null;
    include?: Prisma.RiskScoreInclude<ExtArgs> | null;
};
