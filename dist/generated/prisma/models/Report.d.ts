import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReportModel = runtime.Types.Result.DefaultSelection<Prisma.$ReportPayload>;
export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null;
    _min: ReportMinAggregateOutputType | null;
    _max: ReportMaxAggregateOutputType | null;
};
export type ReportMinAggregateOutputType = {
    id: string | null;
    reporterId: string | null;
    reportedUserId: string | null;
    reason: $Enums.ReportReason | null;
    details: string | null;
    messageId: string | null;
    status: $Enums.ReportStatus | null;
    resolvedById: string | null;
    decision: $Enums.ModerationDecision | null;
    resolutionNote: string | null;
    createdAt: Date | null;
    resolvedAt: Date | null;
};
export type ReportMaxAggregateOutputType = {
    id: string | null;
    reporterId: string | null;
    reportedUserId: string | null;
    reason: $Enums.ReportReason | null;
    details: string | null;
    messageId: string | null;
    status: $Enums.ReportStatus | null;
    resolvedById: string | null;
    decision: $Enums.ModerationDecision | null;
    resolutionNote: string | null;
    createdAt: Date | null;
    resolvedAt: Date | null;
};
export type ReportCountAggregateOutputType = {
    id: number;
    reporterId: number;
    reportedUserId: number;
    reason: number;
    details: number;
    messageId: number;
    evidenceKeys: number;
    status: number;
    resolvedById: number;
    decision: number;
    resolutionNote: number;
    createdAt: number;
    resolvedAt: number;
    _all: number;
};
export type ReportMinAggregateInputType = {
    id?: true;
    reporterId?: true;
    reportedUserId?: true;
    reason?: true;
    details?: true;
    messageId?: true;
    status?: true;
    resolvedById?: true;
    decision?: true;
    resolutionNote?: true;
    createdAt?: true;
    resolvedAt?: true;
};
export type ReportMaxAggregateInputType = {
    id?: true;
    reporterId?: true;
    reportedUserId?: true;
    reason?: true;
    details?: true;
    messageId?: true;
    status?: true;
    resolvedById?: true;
    decision?: true;
    resolutionNote?: true;
    createdAt?: true;
    resolvedAt?: true;
};
export type ReportCountAggregateInputType = {
    id?: true;
    reporterId?: true;
    reportedUserId?: true;
    reason?: true;
    details?: true;
    messageId?: true;
    evidenceKeys?: true;
    status?: true;
    resolvedById?: true;
    decision?: true;
    resolutionNote?: true;
    createdAt?: true;
    resolvedAt?: true;
    _all?: true;
};
export type ReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReportCountAggregateInputType;
    _min?: ReportMinAggregateInputType;
    _max?: ReportMaxAggregateInputType;
};
export type GetReportAggregateType<T extends ReportAggregateArgs> = {
    [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReport[P]> : Prisma.GetScalarType<T[P], AggregateReport[P]>;
};
export type ReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithAggregationInput | Prisma.ReportOrderByWithAggregationInput[];
    by: Prisma.ReportScalarFieldEnum[] | Prisma.ReportScalarFieldEnum;
    having?: Prisma.ReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReportCountAggregateInputType | true;
    _min?: ReportMinAggregateInputType;
    _max?: ReportMaxAggregateInputType;
};
export type ReportGroupByOutputType = {
    id: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details: string | null;
    messageId: string | null;
    evidenceKeys: string[];
    status: $Enums.ReportStatus;
    resolvedById: string | null;
    decision: $Enums.ModerationDecision | null;
    resolutionNote: string | null;
    createdAt: Date;
    resolvedAt: Date | null;
    _count: ReportCountAggregateOutputType | null;
    _min: ReportMinAggregateOutputType | null;
    _max: ReportMaxAggregateOutputType | null;
};
export type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReportGroupByOutputType[P]>;
}>>;
export type ReportWhereInput = {
    AND?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    OR?: Prisma.ReportWhereInput[];
    NOT?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    id?: Prisma.UuidFilter<"Report"> | string;
    reporterId?: Prisma.UuidFilter<"Report"> | string;
    reportedUserId?: Prisma.UuidFilter<"Report"> | string;
    reason?: Prisma.EnumReportReasonFilter<"Report"> | $Enums.ReportReason;
    details?: Prisma.StringNullableFilter<"Report"> | string | null;
    messageId?: Prisma.UuidNullableFilter<"Report"> | string | null;
    evidenceKeys?: Prisma.StringNullableListFilter<"Report">;
    status?: Prisma.EnumReportStatusFilter<"Report"> | $Enums.ReportStatus;
    resolvedById?: Prisma.UuidNullableFilter<"Report"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableFilter<"Report"> | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.StringNullableFilter<"Report"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Report"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Report"> | Date | string | null;
    reporter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reportedUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    message?: Prisma.XOR<Prisma.MessageNullableScalarRelationFilter, Prisma.MessageWhereInput> | null;
    moderationTasks?: Prisma.ModerationTaskListRelationFilter;
};
export type ReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    reportedUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    messageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    evidenceKeys?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    decision?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reporter?: Prisma.UserOrderByWithRelationInput;
    reportedUser?: Prisma.UserOrderByWithRelationInput;
    resolvedBy?: Prisma.UserOrderByWithRelationInput;
    message?: Prisma.MessageOrderByWithRelationInput;
    moderationTasks?: Prisma.ModerationTaskOrderByRelationAggregateInput;
};
export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    OR?: Prisma.ReportWhereInput[];
    NOT?: Prisma.ReportWhereInput | Prisma.ReportWhereInput[];
    reporterId?: Prisma.UuidFilter<"Report"> | string;
    reportedUserId?: Prisma.UuidFilter<"Report"> | string;
    reason?: Prisma.EnumReportReasonFilter<"Report"> | $Enums.ReportReason;
    details?: Prisma.StringNullableFilter<"Report"> | string | null;
    messageId?: Prisma.UuidNullableFilter<"Report"> | string | null;
    evidenceKeys?: Prisma.StringNullableListFilter<"Report">;
    status?: Prisma.EnumReportStatusFilter<"Report"> | $Enums.ReportStatus;
    resolvedById?: Prisma.UuidNullableFilter<"Report"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableFilter<"Report"> | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.StringNullableFilter<"Report"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Report"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Report"> | Date | string | null;
    reporter?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reportedUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    message?: Prisma.XOR<Prisma.MessageNullableScalarRelationFilter, Prisma.MessageWhereInput> | null;
    moderationTasks?: Prisma.ModerationTaskListRelationFilter;
}, "id">;
export type ReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    reportedUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    messageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    evidenceKeys?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    decision?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ReportCountOrderByAggregateInput;
    _max?: Prisma.ReportMaxOrderByAggregateInput;
    _min?: Prisma.ReportMinOrderByAggregateInput;
};
export type ReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReportScalarWhereWithAggregatesInput | Prisma.ReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReportScalarWhereWithAggregatesInput | Prisma.ReportScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Report"> | string;
    reporterId?: Prisma.UuidWithAggregatesFilter<"Report"> | string;
    reportedUserId?: Prisma.UuidWithAggregatesFilter<"Report"> | string;
    reason?: Prisma.EnumReportReasonWithAggregatesFilter<"Report"> | $Enums.ReportReason;
    details?: Prisma.StringNullableWithAggregatesFilter<"Report"> | string | null;
    messageId?: Prisma.UuidNullableWithAggregatesFilter<"Report"> | string | null;
    evidenceKeys?: Prisma.StringNullableListFilter<"Report">;
    status?: Prisma.EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus;
    resolvedById?: Prisma.UuidNullableWithAggregatesFilter<"Report"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableWithAggregatesFilter<"Report"> | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.StringNullableWithAggregatesFilter<"Report"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Report"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null;
};
export type ReportCreateInput = {
    id?: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    reporter: Prisma.UserCreateNestedOneWithoutReportsMadeInput;
    reportedUser: Prisma.UserCreateNestedOneWithoutReportsReceivedInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutReportsResolvedInput;
    message?: Prisma.MessageCreateNestedOneWithoutReportsInput;
    moderationTasks?: Prisma.ModerationTaskCreateNestedManyWithoutReportInput;
};
export type ReportUncheckedCreateInput = {
    id?: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedCreateNestedManyWithoutReportInput;
};
export type ReportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reporter?: Prisma.UserUpdateOneRequiredWithoutReportsMadeNestedInput;
    reportedUser?: Prisma.UserUpdateOneRequiredWithoutReportsReceivedNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutReportsResolvedNestedInput;
    message?: Prisma.MessageUpdateOneWithoutReportsNestedInput;
    moderationTasks?: Prisma.ModerationTaskUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedUpdateManyWithoutReportNestedInput;
};
export type ReportCreateManyInput = {
    id?: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type ReportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReportListRelationFilter = {
    every?: Prisma.ReportWhereInput;
    some?: Prisma.ReportWhereInput;
    none?: Prisma.ReportWhereInput;
};
export type ReportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    reportedUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    evidenceKeys?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type ReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    reportedUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type ReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reporterId?: Prisma.SortOrder;
    reportedUserId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedById?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    resolutionNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type ReportNullableScalarRelationFilter = {
    is?: Prisma.ReportWhereInput | null;
    isNot?: Prisma.ReportWhereInput | null;
};
export type ReportCreateNestedManyWithoutReporterInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReporterInput, Prisma.ReportUncheckedCreateWithoutReporterInput> | Prisma.ReportCreateWithoutReporterInput[] | Prisma.ReportUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReporterInput | Prisma.ReportCreateOrConnectWithoutReporterInput[];
    createMany?: Prisma.ReportCreateManyReporterInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportCreateNestedManyWithoutReportedUserInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReportedUserInput, Prisma.ReportUncheckedCreateWithoutReportedUserInput> | Prisma.ReportCreateWithoutReportedUserInput[] | Prisma.ReportUncheckedCreateWithoutReportedUserInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReportedUserInput | Prisma.ReportCreateOrConnectWithoutReportedUserInput[];
    createMany?: Prisma.ReportCreateManyReportedUserInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportCreateNestedManyWithoutResolvedByInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutResolvedByInput, Prisma.ReportUncheckedCreateWithoutResolvedByInput> | Prisma.ReportCreateWithoutResolvedByInput[] | Prisma.ReportUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutResolvedByInput | Prisma.ReportCreateOrConnectWithoutResolvedByInput[];
    createMany?: Prisma.ReportCreateManyResolvedByInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUncheckedCreateNestedManyWithoutReporterInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReporterInput, Prisma.ReportUncheckedCreateWithoutReporterInput> | Prisma.ReportCreateWithoutReporterInput[] | Prisma.ReportUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReporterInput | Prisma.ReportCreateOrConnectWithoutReporterInput[];
    createMany?: Prisma.ReportCreateManyReporterInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUncheckedCreateNestedManyWithoutReportedUserInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReportedUserInput, Prisma.ReportUncheckedCreateWithoutReportedUserInput> | Prisma.ReportCreateWithoutReportedUserInput[] | Prisma.ReportUncheckedCreateWithoutReportedUserInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReportedUserInput | Prisma.ReportCreateOrConnectWithoutReportedUserInput[];
    createMany?: Prisma.ReportCreateManyReportedUserInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUncheckedCreateNestedManyWithoutResolvedByInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutResolvedByInput, Prisma.ReportUncheckedCreateWithoutResolvedByInput> | Prisma.ReportCreateWithoutResolvedByInput[] | Prisma.ReportUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutResolvedByInput | Prisma.ReportCreateOrConnectWithoutResolvedByInput[];
    createMany?: Prisma.ReportCreateManyResolvedByInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUpdateManyWithoutReporterNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReporterInput, Prisma.ReportUncheckedCreateWithoutReporterInput> | Prisma.ReportCreateWithoutReporterInput[] | Prisma.ReportUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReporterInput | Prisma.ReportCreateOrConnectWithoutReporterInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutReporterInput | Prisma.ReportUpsertWithWhereUniqueWithoutReporterInput[];
    createMany?: Prisma.ReportCreateManyReporterInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutReporterInput | Prisma.ReportUpdateWithWhereUniqueWithoutReporterInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutReporterInput | Prisma.ReportUpdateManyWithWhereWithoutReporterInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUpdateManyWithoutReportedUserNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReportedUserInput, Prisma.ReportUncheckedCreateWithoutReportedUserInput> | Prisma.ReportCreateWithoutReportedUserInput[] | Prisma.ReportUncheckedCreateWithoutReportedUserInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReportedUserInput | Prisma.ReportCreateOrConnectWithoutReportedUserInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutReportedUserInput | Prisma.ReportUpsertWithWhereUniqueWithoutReportedUserInput[];
    createMany?: Prisma.ReportCreateManyReportedUserInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutReportedUserInput | Prisma.ReportUpdateWithWhereUniqueWithoutReportedUserInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutReportedUserInput | Prisma.ReportUpdateManyWithWhereWithoutReportedUserInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUpdateManyWithoutResolvedByNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutResolvedByInput, Prisma.ReportUncheckedCreateWithoutResolvedByInput> | Prisma.ReportCreateWithoutResolvedByInput[] | Prisma.ReportUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutResolvedByInput | Prisma.ReportCreateOrConnectWithoutResolvedByInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutResolvedByInput | Prisma.ReportUpsertWithWhereUniqueWithoutResolvedByInput[];
    createMany?: Prisma.ReportCreateManyResolvedByInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutResolvedByInput | Prisma.ReportUpdateWithWhereUniqueWithoutResolvedByInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutResolvedByInput | Prisma.ReportUpdateManyWithWhereWithoutResolvedByInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReporterInput, Prisma.ReportUncheckedCreateWithoutReporterInput> | Prisma.ReportCreateWithoutReporterInput[] | Prisma.ReportUncheckedCreateWithoutReporterInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReporterInput | Prisma.ReportCreateOrConnectWithoutReporterInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutReporterInput | Prisma.ReportUpsertWithWhereUniqueWithoutReporterInput[];
    createMany?: Prisma.ReportCreateManyReporterInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutReporterInput | Prisma.ReportUpdateWithWhereUniqueWithoutReporterInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutReporterInput | Prisma.ReportUpdateManyWithWhereWithoutReporterInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUncheckedUpdateManyWithoutReportedUserNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutReportedUserInput, Prisma.ReportUncheckedCreateWithoutReportedUserInput> | Prisma.ReportCreateWithoutReportedUserInput[] | Prisma.ReportUncheckedCreateWithoutReportedUserInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutReportedUserInput | Prisma.ReportCreateOrConnectWithoutReportedUserInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutReportedUserInput | Prisma.ReportUpsertWithWhereUniqueWithoutReportedUserInput[];
    createMany?: Prisma.ReportCreateManyReportedUserInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutReportedUserInput | Prisma.ReportUpdateWithWhereUniqueWithoutReportedUserInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutReportedUserInput | Prisma.ReportUpdateManyWithWhereWithoutReportedUserInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUncheckedUpdateManyWithoutResolvedByNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutResolvedByInput, Prisma.ReportUncheckedCreateWithoutResolvedByInput> | Prisma.ReportCreateWithoutResolvedByInput[] | Prisma.ReportUncheckedCreateWithoutResolvedByInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutResolvedByInput | Prisma.ReportCreateOrConnectWithoutResolvedByInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutResolvedByInput | Prisma.ReportUpsertWithWhereUniqueWithoutResolvedByInput[];
    createMany?: Prisma.ReportCreateManyResolvedByInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutResolvedByInput | Prisma.ReportUpdateWithWhereUniqueWithoutResolvedByInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutResolvedByInput | Prisma.ReportUpdateManyWithWhereWithoutResolvedByInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutMessageInput, Prisma.ReportUncheckedCreateWithoutMessageInput> | Prisma.ReportCreateWithoutMessageInput[] | Prisma.ReportUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutMessageInput | Prisma.ReportCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.ReportCreateManyMessageInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUncheckedCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutMessageInput, Prisma.ReportUncheckedCreateWithoutMessageInput> | Prisma.ReportCreateWithoutMessageInput[] | Prisma.ReportUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutMessageInput | Prisma.ReportCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.ReportCreateManyMessageInputEnvelope;
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
};
export type ReportUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutMessageInput, Prisma.ReportUncheckedCreateWithoutMessageInput> | Prisma.ReportCreateWithoutMessageInput[] | Prisma.ReportUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutMessageInput | Prisma.ReportCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutMessageInput | Prisma.ReportUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.ReportCreateManyMessageInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutMessageInput | Prisma.ReportUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutMessageInput | Prisma.ReportUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutMessageInput, Prisma.ReportUncheckedCreateWithoutMessageInput> | Prisma.ReportCreateWithoutMessageInput[] | Prisma.ReportUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutMessageInput | Prisma.ReportCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.ReportUpsertWithWhereUniqueWithoutMessageInput | Prisma.ReportUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.ReportCreateManyMessageInputEnvelope;
    set?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    disconnect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    delete?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    connect?: Prisma.ReportWhereUniqueInput | Prisma.ReportWhereUniqueInput[];
    update?: Prisma.ReportUpdateWithWhereUniqueWithoutMessageInput | Prisma.ReportUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.ReportUpdateManyWithWhereWithoutMessageInput | Prisma.ReportUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
};
export type ReportCreateevidenceKeysInput = {
    set: string[];
};
export type EnumReportReasonFieldUpdateOperationsInput = {
    set?: $Enums.ReportReason;
};
export type ReportUpdateevidenceKeysInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus;
};
export type NullableEnumModerationDecisionFieldUpdateOperationsInput = {
    set?: $Enums.ModerationDecision | null;
};
export type ReportCreateNestedOneWithoutModerationTasksInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutModerationTasksInput, Prisma.ReportUncheckedCreateWithoutModerationTasksInput>;
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutModerationTasksInput;
    connect?: Prisma.ReportWhereUniqueInput;
};
export type ReportUpdateOneWithoutModerationTasksNestedInput = {
    create?: Prisma.XOR<Prisma.ReportCreateWithoutModerationTasksInput, Prisma.ReportUncheckedCreateWithoutModerationTasksInput>;
    connectOrCreate?: Prisma.ReportCreateOrConnectWithoutModerationTasksInput;
    upsert?: Prisma.ReportUpsertWithoutModerationTasksInput;
    disconnect?: Prisma.ReportWhereInput | boolean;
    delete?: Prisma.ReportWhereInput | boolean;
    connect?: Prisma.ReportWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReportUpdateToOneWithWhereWithoutModerationTasksInput, Prisma.ReportUpdateWithoutModerationTasksInput>, Prisma.ReportUncheckedUpdateWithoutModerationTasksInput>;
};
export type ReportCreateWithoutReporterInput = {
    id?: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    reportedUser: Prisma.UserCreateNestedOneWithoutReportsReceivedInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutReportsResolvedInput;
    message?: Prisma.MessageCreateNestedOneWithoutReportsInput;
    moderationTasks?: Prisma.ModerationTaskCreateNestedManyWithoutReportInput;
};
export type ReportUncheckedCreateWithoutReporterInput = {
    id?: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedCreateNestedManyWithoutReportInput;
};
export type ReportCreateOrConnectWithoutReporterInput = {
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateWithoutReporterInput, Prisma.ReportUncheckedCreateWithoutReporterInput>;
};
export type ReportCreateManyReporterInputEnvelope = {
    data: Prisma.ReportCreateManyReporterInput | Prisma.ReportCreateManyReporterInput[];
    skipDuplicates?: boolean;
};
export type ReportCreateWithoutReportedUserInput = {
    id?: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    reporter: Prisma.UserCreateNestedOneWithoutReportsMadeInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutReportsResolvedInput;
    message?: Prisma.MessageCreateNestedOneWithoutReportsInput;
    moderationTasks?: Prisma.ModerationTaskCreateNestedManyWithoutReportInput;
};
export type ReportUncheckedCreateWithoutReportedUserInput = {
    id?: string;
    reporterId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedCreateNestedManyWithoutReportInput;
};
export type ReportCreateOrConnectWithoutReportedUserInput = {
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateWithoutReportedUserInput, Prisma.ReportUncheckedCreateWithoutReportedUserInput>;
};
export type ReportCreateManyReportedUserInputEnvelope = {
    data: Prisma.ReportCreateManyReportedUserInput | Prisma.ReportCreateManyReportedUserInput[];
    skipDuplicates?: boolean;
};
export type ReportCreateWithoutResolvedByInput = {
    id?: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    reporter: Prisma.UserCreateNestedOneWithoutReportsMadeInput;
    reportedUser: Prisma.UserCreateNestedOneWithoutReportsReceivedInput;
    message?: Prisma.MessageCreateNestedOneWithoutReportsInput;
    moderationTasks?: Prisma.ModerationTaskCreateNestedManyWithoutReportInput;
};
export type ReportUncheckedCreateWithoutResolvedByInput = {
    id?: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedCreateNestedManyWithoutReportInput;
};
export type ReportCreateOrConnectWithoutResolvedByInput = {
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateWithoutResolvedByInput, Prisma.ReportUncheckedCreateWithoutResolvedByInput>;
};
export type ReportCreateManyResolvedByInputEnvelope = {
    data: Prisma.ReportCreateManyResolvedByInput | Prisma.ReportCreateManyResolvedByInput[];
    skipDuplicates?: boolean;
};
export type ReportUpsertWithWhereUniqueWithoutReporterInput = {
    where: Prisma.ReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportUpdateWithoutReporterInput, Prisma.ReportUncheckedUpdateWithoutReporterInput>;
    create: Prisma.XOR<Prisma.ReportCreateWithoutReporterInput, Prisma.ReportUncheckedCreateWithoutReporterInput>;
};
export type ReportUpdateWithWhereUniqueWithoutReporterInput = {
    where: Prisma.ReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportUpdateWithoutReporterInput, Prisma.ReportUncheckedUpdateWithoutReporterInput>;
};
export type ReportUpdateManyWithWhereWithoutReporterInput = {
    where: Prisma.ReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyWithoutReporterInput>;
};
export type ReportScalarWhereInput = {
    AND?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
    OR?: Prisma.ReportScalarWhereInput[];
    NOT?: Prisma.ReportScalarWhereInput | Prisma.ReportScalarWhereInput[];
    id?: Prisma.UuidFilter<"Report"> | string;
    reporterId?: Prisma.UuidFilter<"Report"> | string;
    reportedUserId?: Prisma.UuidFilter<"Report"> | string;
    reason?: Prisma.EnumReportReasonFilter<"Report"> | $Enums.ReportReason;
    details?: Prisma.StringNullableFilter<"Report"> | string | null;
    messageId?: Prisma.UuidNullableFilter<"Report"> | string | null;
    evidenceKeys?: Prisma.StringNullableListFilter<"Report">;
    status?: Prisma.EnumReportStatusFilter<"Report"> | $Enums.ReportStatus;
    resolvedById?: Prisma.UuidNullableFilter<"Report"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableFilter<"Report"> | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.StringNullableFilter<"Report"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Report"> | Date | string;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Report"> | Date | string | null;
};
export type ReportUpsertWithWhereUniqueWithoutReportedUserInput = {
    where: Prisma.ReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportUpdateWithoutReportedUserInput, Prisma.ReportUncheckedUpdateWithoutReportedUserInput>;
    create: Prisma.XOR<Prisma.ReportCreateWithoutReportedUserInput, Prisma.ReportUncheckedCreateWithoutReportedUserInput>;
};
export type ReportUpdateWithWhereUniqueWithoutReportedUserInput = {
    where: Prisma.ReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportUpdateWithoutReportedUserInput, Prisma.ReportUncheckedUpdateWithoutReportedUserInput>;
};
export type ReportUpdateManyWithWhereWithoutReportedUserInput = {
    where: Prisma.ReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyWithoutReportedUserInput>;
};
export type ReportUpsertWithWhereUniqueWithoutResolvedByInput = {
    where: Prisma.ReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportUpdateWithoutResolvedByInput, Prisma.ReportUncheckedUpdateWithoutResolvedByInput>;
    create: Prisma.XOR<Prisma.ReportCreateWithoutResolvedByInput, Prisma.ReportUncheckedCreateWithoutResolvedByInput>;
};
export type ReportUpdateWithWhereUniqueWithoutResolvedByInput = {
    where: Prisma.ReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportUpdateWithoutResolvedByInput, Prisma.ReportUncheckedUpdateWithoutResolvedByInput>;
};
export type ReportUpdateManyWithWhereWithoutResolvedByInput = {
    where: Prisma.ReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyWithoutResolvedByInput>;
};
export type ReportCreateWithoutMessageInput = {
    id?: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    reporter: Prisma.UserCreateNestedOneWithoutReportsMadeInput;
    reportedUser: Prisma.UserCreateNestedOneWithoutReportsReceivedInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutReportsResolvedInput;
    moderationTasks?: Prisma.ModerationTaskCreateNestedManyWithoutReportInput;
};
export type ReportUncheckedCreateWithoutMessageInput = {
    id?: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedCreateNestedManyWithoutReportInput;
};
export type ReportCreateOrConnectWithoutMessageInput = {
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateWithoutMessageInput, Prisma.ReportUncheckedCreateWithoutMessageInput>;
};
export type ReportCreateManyMessageInputEnvelope = {
    data: Prisma.ReportCreateManyMessageInput | Prisma.ReportCreateManyMessageInput[];
    skipDuplicates?: boolean;
};
export type ReportUpsertWithWhereUniqueWithoutMessageInput = {
    where: Prisma.ReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReportUpdateWithoutMessageInput, Prisma.ReportUncheckedUpdateWithoutMessageInput>;
    create: Prisma.XOR<Prisma.ReportCreateWithoutMessageInput, Prisma.ReportUncheckedCreateWithoutMessageInput>;
};
export type ReportUpdateWithWhereUniqueWithoutMessageInput = {
    where: Prisma.ReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReportUpdateWithoutMessageInput, Prisma.ReportUncheckedUpdateWithoutMessageInput>;
};
export type ReportUpdateManyWithWhereWithoutMessageInput = {
    where: Prisma.ReportScalarWhereInput;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyWithoutMessageInput>;
};
export type ReportCreateWithoutModerationTasksInput = {
    id?: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
    reporter: Prisma.UserCreateNestedOneWithoutReportsMadeInput;
    reportedUser: Prisma.UserCreateNestedOneWithoutReportsReceivedInput;
    resolvedBy?: Prisma.UserCreateNestedOneWithoutReportsResolvedInput;
    message?: Prisma.MessageCreateNestedOneWithoutReportsInput;
};
export type ReportUncheckedCreateWithoutModerationTasksInput = {
    id?: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type ReportCreateOrConnectWithoutModerationTasksInput = {
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateWithoutModerationTasksInput, Prisma.ReportUncheckedCreateWithoutModerationTasksInput>;
};
export type ReportUpsertWithoutModerationTasksInput = {
    update: Prisma.XOR<Prisma.ReportUpdateWithoutModerationTasksInput, Prisma.ReportUncheckedUpdateWithoutModerationTasksInput>;
    create: Prisma.XOR<Prisma.ReportCreateWithoutModerationTasksInput, Prisma.ReportUncheckedCreateWithoutModerationTasksInput>;
    where?: Prisma.ReportWhereInput;
};
export type ReportUpdateToOneWithWhereWithoutModerationTasksInput = {
    where?: Prisma.ReportWhereInput;
    data: Prisma.XOR<Prisma.ReportUpdateWithoutModerationTasksInput, Prisma.ReportUncheckedUpdateWithoutModerationTasksInput>;
};
export type ReportUpdateWithoutModerationTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reporter?: Prisma.UserUpdateOneRequiredWithoutReportsMadeNestedInput;
    reportedUser?: Prisma.UserUpdateOneRequiredWithoutReportsReceivedNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutReportsResolvedNestedInput;
    message?: Prisma.MessageUpdateOneWithoutReportsNestedInput;
};
export type ReportUncheckedUpdateWithoutModerationTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReportCreateManyReporterInput = {
    id?: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type ReportCreateManyReportedUserInput = {
    id?: string;
    reporterId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type ReportCreateManyResolvedByInput = {
    id?: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    messageId?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type ReportUpdateWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reportedUser?: Prisma.UserUpdateOneRequiredWithoutReportsReceivedNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutReportsResolvedNestedInput;
    message?: Prisma.MessageUpdateOneWithoutReportsNestedInput;
    moderationTasks?: Prisma.ModerationTaskUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateManyWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReportUpdateWithoutReportedUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reporter?: Prisma.UserUpdateOneRequiredWithoutReportsMadeNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutReportsResolvedNestedInput;
    message?: Prisma.MessageUpdateOneWithoutReportsNestedInput;
    moderationTasks?: Prisma.ModerationTaskUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateWithoutReportedUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateManyWithoutReportedUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReportUpdateWithoutResolvedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reporter?: Prisma.UserUpdateOneRequiredWithoutReportsMadeNestedInput;
    reportedUser?: Prisma.UserUpdateOneRequiredWithoutReportsReceivedNestedInput;
    message?: Prisma.MessageUpdateOneWithoutReportsNestedInput;
    moderationTasks?: Prisma.ModerationTaskUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateWithoutResolvedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateManyWithoutResolvedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReportCreateManyMessageInput = {
    id?: string;
    reporterId: string;
    reportedUserId: string;
    reason: $Enums.ReportReason;
    details?: string | null;
    evidenceKeys?: Prisma.ReportCreateevidenceKeysInput | string[];
    status?: $Enums.ReportStatus;
    resolvedById?: string | null;
    decision?: $Enums.ModerationDecision | null;
    resolutionNote?: string | null;
    createdAt?: Date | string;
    resolvedAt?: Date | string | null;
};
export type ReportUpdateWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reporter?: Prisma.UserUpdateOneRequiredWithoutReportsMadeNestedInput;
    reportedUser?: Prisma.UserUpdateOneRequiredWithoutReportsReceivedNestedInput;
    resolvedBy?: Prisma.UserUpdateOneWithoutReportsResolvedNestedInput;
    moderationTasks?: Prisma.ModerationTaskUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    moderationTasks?: Prisma.ModerationTaskUncheckedUpdateManyWithoutReportNestedInput;
};
export type ReportUncheckedUpdateManyWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reportedUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumReportReasonFieldUpdateOperationsInput | $Enums.ReportReason;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evidenceKeys?: Prisma.ReportUpdateevidenceKeysInput | string[];
    status?: Prisma.EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus;
    resolvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    resolutionNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ReportCountOutputType = {
    moderationTasks: number;
};
export type ReportCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moderationTasks?: boolean | ReportCountOutputTypeCountModerationTasksArgs;
};
export type ReportCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportCountOutputTypeSelect<ExtArgs> | null;
};
export type ReportCountOutputTypeCountModerationTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModerationTaskWhereInput;
};
export type ReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reporterId?: boolean;
    reportedUserId?: boolean;
    reason?: boolean;
    details?: boolean;
    messageId?: boolean;
    evidenceKeys?: boolean;
    status?: boolean;
    resolvedById?: boolean;
    decision?: boolean;
    resolutionNote?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reportedUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Report$resolvedByArgs<ExtArgs>;
    message?: boolean | Prisma.Report$messageArgs<ExtArgs>;
    moderationTasks?: boolean | Prisma.Report$moderationTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.ReportCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["report"]>;
export type ReportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reporterId?: boolean;
    reportedUserId?: boolean;
    reason?: boolean;
    details?: boolean;
    messageId?: boolean;
    evidenceKeys?: boolean;
    status?: boolean;
    resolvedById?: boolean;
    decision?: boolean;
    resolutionNote?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reportedUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Report$resolvedByArgs<ExtArgs>;
    message?: boolean | Prisma.Report$messageArgs<ExtArgs>;
}, ExtArgs["result"]["report"]>;
export type ReportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reporterId?: boolean;
    reportedUserId?: boolean;
    reason?: boolean;
    details?: boolean;
    messageId?: boolean;
    evidenceKeys?: boolean;
    status?: boolean;
    resolvedById?: boolean;
    decision?: boolean;
    resolutionNote?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reportedUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Report$resolvedByArgs<ExtArgs>;
    message?: boolean | Prisma.Report$messageArgs<ExtArgs>;
}, ExtArgs["result"]["report"]>;
export type ReportSelectScalar = {
    id?: boolean;
    reporterId?: boolean;
    reportedUserId?: boolean;
    reason?: boolean;
    details?: boolean;
    messageId?: boolean;
    evidenceKeys?: boolean;
    status?: boolean;
    resolvedById?: boolean;
    decision?: boolean;
    resolutionNote?: boolean;
    createdAt?: boolean;
    resolvedAt?: boolean;
};
export type ReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reporterId" | "reportedUserId" | "reason" | "details" | "messageId" | "evidenceKeys" | "status" | "resolvedById" | "decision" | "resolutionNote" | "createdAt" | "resolvedAt", ExtArgs["result"]["report"]>;
export type ReportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reportedUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Report$resolvedByArgs<ExtArgs>;
    message?: boolean | Prisma.Report$messageArgs<ExtArgs>;
    moderationTasks?: boolean | Prisma.Report$moderationTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.ReportCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reportedUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Report$resolvedByArgs<ExtArgs>;
    message?: boolean | Prisma.Report$messageArgs<ExtArgs>;
};
export type ReportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reporter?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reportedUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedBy?: boolean | Prisma.Report$resolvedByArgs<ExtArgs>;
    message?: boolean | Prisma.Report$messageArgs<ExtArgs>;
};
export type $ReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Report";
    objects: {
        reporter: Prisma.$UserPayload<ExtArgs>;
        reportedUser: Prisma.$UserPayload<ExtArgs>;
        resolvedBy: Prisma.$UserPayload<ExtArgs> | null;
        message: Prisma.$MessagePayload<ExtArgs> | null;
        moderationTasks: Prisma.$ModerationTaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reporterId: string;
        reportedUserId: string;
        reason: $Enums.ReportReason;
        details: string | null;
        messageId: string | null;
        evidenceKeys: string[];
        status: $Enums.ReportStatus;
        resolvedById: string | null;
        decision: $Enums.ModerationDecision | null;
        resolutionNote: string | null;
        createdAt: Date;
        resolvedAt: Date | null;
    }, ExtArgs["result"]["report"]>;
    composites: {};
};
export type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReportPayload, S>;
export type ReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReportCountAggregateInputType | true;
};
export interface ReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Report'];
        meta: {
            name: 'Report';
        };
    };
    findUnique<T extends ReportFindUniqueArgs>(args: Prisma.SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReportFindFirstArgs>(args?: Prisma.SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReportFindManyArgs>(args?: Prisma.SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReportCreateArgs>(args: Prisma.SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReportCreateManyArgs>(args?: Prisma.SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReportDeleteArgs>(args: Prisma.SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReportUpdateArgs>(args: Prisma.SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReportUpdateManyArgs>(args: Prisma.SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReportUpsertArgs>(args: Prisma.SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReportCountArgs>(args?: Prisma.Subset<T, ReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReportCountAggregateOutputType> : number>;
    aggregate<T extends ReportAggregateArgs>(args: Prisma.Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>;
    groupBy<T extends ReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReportGroupByArgs['orderBy'];
    } : {
        orderBy?: ReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReportFieldRefs;
}
export interface Prisma__ReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reporter<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reportedUser<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    resolvedBy<T extends Prisma.Report$resolvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Report$resolvedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    message<T extends Prisma.Report$messageArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Report$messageArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    moderationTasks<T extends Prisma.Report$moderationTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Report$moderationTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReportFieldRefs {
    readonly id: Prisma.FieldRef<"Report", 'String'>;
    readonly reporterId: Prisma.FieldRef<"Report", 'String'>;
    readonly reportedUserId: Prisma.FieldRef<"Report", 'String'>;
    readonly reason: Prisma.FieldRef<"Report", 'ReportReason'>;
    readonly details: Prisma.FieldRef<"Report", 'String'>;
    readonly messageId: Prisma.FieldRef<"Report", 'String'>;
    readonly evidenceKeys: Prisma.FieldRef<"Report", 'String[]'>;
    readonly status: Prisma.FieldRef<"Report", 'ReportStatus'>;
    readonly resolvedById: Prisma.FieldRef<"Report", 'String'>;
    readonly decision: Prisma.FieldRef<"Report", 'ModerationDecision'>;
    readonly resolutionNote: Prisma.FieldRef<"Report", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Report", 'DateTime'>;
    readonly resolvedAt: Prisma.FieldRef<"Report", 'DateTime'>;
}
export type ReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportScalarFieldEnum | Prisma.ReportScalarFieldEnum[];
};
export type ReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportScalarFieldEnum | Prisma.ReportScalarFieldEnum[];
};
export type ReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportScalarFieldEnum | Prisma.ReportScalarFieldEnum[];
};
export type ReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportCreateInput, Prisma.ReportUncheckedCreateInput>;
};
export type ReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReportCreateManyInput | Prisma.ReportCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    data: Prisma.ReportCreateManyInput | Prisma.ReportCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReportIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportUpdateInput, Prisma.ReportUncheckedUpdateInput>;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyInput>;
    where?: Prisma.ReportWhereInput;
    limit?: number;
};
export type ReportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReportUpdateManyMutationInput, Prisma.ReportUncheckedUpdateManyInput>;
    where?: Prisma.ReportWhereInput;
    limit?: number;
    include?: Prisma.ReportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReportCreateInput, Prisma.ReportUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReportUpdateInput, Prisma.ReportUncheckedUpdateInput>;
};
export type ReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where: Prisma.ReportWhereUniqueInput;
};
export type ReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
    limit?: number;
};
export type Report$resolvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Report$messageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
};
export type Report$moderationTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    where?: Prisma.ModerationTaskWhereInput;
    orderBy?: Prisma.ModerationTaskOrderByWithRelationInput | Prisma.ModerationTaskOrderByWithRelationInput[];
    cursor?: Prisma.ModerationTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModerationTaskScalarFieldEnum | Prisma.ModerationTaskScalarFieldEnum[];
};
export type ReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
};
