import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ModerationTaskModel = runtime.Types.Result.DefaultSelection<Prisma.$ModerationTaskPayload>;
export type AggregateModerationTask = {
    _count: ModerationTaskCountAggregateOutputType | null;
    _avg: ModerationTaskAvgAggregateOutputType | null;
    _sum: ModerationTaskSumAggregateOutputType | null;
    _min: ModerationTaskMinAggregateOutputType | null;
    _max: ModerationTaskMaxAggregateOutputType | null;
};
export type ModerationTaskAvgAggregateOutputType = {
    priority: number | null;
};
export type ModerationTaskSumAggregateOutputType = {
    priority: number | null;
};
export type ModerationTaskMinAggregateOutputType = {
    id: string | null;
    type: $Enums.ModerationTaskType | null;
    status: $Enums.ModerationTaskStatus | null;
    priority: number | null;
    subjectUserId: string | null;
    photoId: string | null;
    reportId: string | null;
    verificationId: string | null;
    eventId: string | null;
    assignedToId: string | null;
    decision: $Enums.ModerationDecision | null;
    notes: string | null;
    createdAt: Date | null;
    claimedAt: Date | null;
    resolvedAt: Date | null;
};
export type ModerationTaskMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.ModerationTaskType | null;
    status: $Enums.ModerationTaskStatus | null;
    priority: number | null;
    subjectUserId: string | null;
    photoId: string | null;
    reportId: string | null;
    verificationId: string | null;
    eventId: string | null;
    assignedToId: string | null;
    decision: $Enums.ModerationDecision | null;
    notes: string | null;
    createdAt: Date | null;
    claimedAt: Date | null;
    resolvedAt: Date | null;
};
export type ModerationTaskCountAggregateOutputType = {
    id: number;
    type: number;
    status: number;
    priority: number;
    subjectUserId: number;
    photoId: number;
    reportId: number;
    verificationId: number;
    eventId: number;
    assignedToId: number;
    decision: number;
    notes: number;
    createdAt: number;
    claimedAt: number;
    resolvedAt: number;
    _all: number;
};
export type ModerationTaskAvgAggregateInputType = {
    priority?: true;
};
export type ModerationTaskSumAggregateInputType = {
    priority?: true;
};
export type ModerationTaskMinAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    priority?: true;
    subjectUserId?: true;
    photoId?: true;
    reportId?: true;
    verificationId?: true;
    eventId?: true;
    assignedToId?: true;
    decision?: true;
    notes?: true;
    createdAt?: true;
    claimedAt?: true;
    resolvedAt?: true;
};
export type ModerationTaskMaxAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    priority?: true;
    subjectUserId?: true;
    photoId?: true;
    reportId?: true;
    verificationId?: true;
    eventId?: true;
    assignedToId?: true;
    decision?: true;
    notes?: true;
    createdAt?: true;
    claimedAt?: true;
    resolvedAt?: true;
};
export type ModerationTaskCountAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    priority?: true;
    subjectUserId?: true;
    photoId?: true;
    reportId?: true;
    verificationId?: true;
    eventId?: true;
    assignedToId?: true;
    decision?: true;
    notes?: true;
    createdAt?: true;
    claimedAt?: true;
    resolvedAt?: true;
    _all?: true;
};
export type ModerationTaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModerationTaskWhereInput;
    orderBy?: Prisma.ModerationTaskOrderByWithRelationInput | Prisma.ModerationTaskOrderByWithRelationInput[];
    cursor?: Prisma.ModerationTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ModerationTaskCountAggregateInputType;
    _avg?: ModerationTaskAvgAggregateInputType;
    _sum?: ModerationTaskSumAggregateInputType;
    _min?: ModerationTaskMinAggregateInputType;
    _max?: ModerationTaskMaxAggregateInputType;
};
export type GetModerationTaskAggregateType<T extends ModerationTaskAggregateArgs> = {
    [P in keyof T & keyof AggregateModerationTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModerationTask[P]> : Prisma.GetScalarType<T[P], AggregateModerationTask[P]>;
};
export type ModerationTaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModerationTaskWhereInput;
    orderBy?: Prisma.ModerationTaskOrderByWithAggregationInput | Prisma.ModerationTaskOrderByWithAggregationInput[];
    by: Prisma.ModerationTaskScalarFieldEnum[] | Prisma.ModerationTaskScalarFieldEnum;
    having?: Prisma.ModerationTaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModerationTaskCountAggregateInputType | true;
    _avg?: ModerationTaskAvgAggregateInputType;
    _sum?: ModerationTaskSumAggregateInputType;
    _min?: ModerationTaskMinAggregateInputType;
    _max?: ModerationTaskMaxAggregateInputType;
};
export type ModerationTaskGroupByOutputType = {
    id: string;
    type: $Enums.ModerationTaskType;
    status: $Enums.ModerationTaskStatus;
    priority: number;
    subjectUserId: string | null;
    photoId: string | null;
    reportId: string | null;
    verificationId: string | null;
    eventId: string | null;
    assignedToId: string | null;
    decision: $Enums.ModerationDecision | null;
    notes: string | null;
    createdAt: Date;
    claimedAt: Date | null;
    resolvedAt: Date | null;
    _count: ModerationTaskCountAggregateOutputType | null;
    _avg: ModerationTaskAvgAggregateOutputType | null;
    _sum: ModerationTaskSumAggregateOutputType | null;
    _min: ModerationTaskMinAggregateOutputType | null;
    _max: ModerationTaskMaxAggregateOutputType | null;
};
export type GetModerationTaskGroupByPayload<T extends ModerationTaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModerationTaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModerationTaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModerationTaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModerationTaskGroupByOutputType[P]>;
}>>;
export type ModerationTaskWhereInput = {
    AND?: Prisma.ModerationTaskWhereInput | Prisma.ModerationTaskWhereInput[];
    OR?: Prisma.ModerationTaskWhereInput[];
    NOT?: Prisma.ModerationTaskWhereInput | Prisma.ModerationTaskWhereInput[];
    id?: Prisma.UuidFilter<"ModerationTask"> | string;
    type?: Prisma.EnumModerationTaskTypeFilter<"ModerationTask"> | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFilter<"ModerationTask"> | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFilter<"ModerationTask"> | number;
    subjectUserId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    photoId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    reportId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    verificationId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    eventId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    assignedToId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableFilter<"ModerationTask"> | $Enums.ModerationDecision | null;
    notes?: Prisma.StringNullableFilter<"ModerationTask"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ModerationTask"> | Date | string;
    claimedAt?: Prisma.DateTimeNullableFilter<"ModerationTask"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"ModerationTask"> | Date | string | null;
    subjectUser?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    assignedTo?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    photo?: Prisma.XOR<Prisma.PhotoNullableScalarRelationFilter, Prisma.PhotoWhereInput> | null;
    report?: Prisma.XOR<Prisma.ReportNullableScalarRelationFilter, Prisma.ReportWhereInput> | null;
    verification?: Prisma.XOR<Prisma.VerificationNullableScalarRelationFilter, Prisma.VerificationWhereInput> | null;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
};
export type ModerationTaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    subjectUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportId?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decision?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    subjectUser?: Prisma.UserOrderByWithRelationInput;
    assignedTo?: Prisma.UserOrderByWithRelationInput;
    photo?: Prisma.PhotoOrderByWithRelationInput;
    report?: Prisma.ReportOrderByWithRelationInput;
    verification?: Prisma.VerificationOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
};
export type ModerationTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ModerationTaskWhereInput | Prisma.ModerationTaskWhereInput[];
    OR?: Prisma.ModerationTaskWhereInput[];
    NOT?: Prisma.ModerationTaskWhereInput | Prisma.ModerationTaskWhereInput[];
    type?: Prisma.EnumModerationTaskTypeFilter<"ModerationTask"> | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFilter<"ModerationTask"> | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFilter<"ModerationTask"> | number;
    subjectUserId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    photoId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    reportId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    verificationId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    eventId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    assignedToId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableFilter<"ModerationTask"> | $Enums.ModerationDecision | null;
    notes?: Prisma.StringNullableFilter<"ModerationTask"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ModerationTask"> | Date | string;
    claimedAt?: Prisma.DateTimeNullableFilter<"ModerationTask"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"ModerationTask"> | Date | string | null;
    subjectUser?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    assignedTo?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    photo?: Prisma.XOR<Prisma.PhotoNullableScalarRelationFilter, Prisma.PhotoWhereInput> | null;
    report?: Prisma.XOR<Prisma.ReportNullableScalarRelationFilter, Prisma.ReportWhereInput> | null;
    verification?: Prisma.XOR<Prisma.VerificationNullableScalarRelationFilter, Prisma.VerificationWhereInput> | null;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
}, "id">;
export type ModerationTaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    subjectUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    photoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reportId?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    decision?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ModerationTaskCountOrderByAggregateInput;
    _avg?: Prisma.ModerationTaskAvgOrderByAggregateInput;
    _max?: Prisma.ModerationTaskMaxOrderByAggregateInput;
    _min?: Prisma.ModerationTaskMinOrderByAggregateInput;
    _sum?: Prisma.ModerationTaskSumOrderByAggregateInput;
};
export type ModerationTaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModerationTaskScalarWhereWithAggregatesInput | Prisma.ModerationTaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModerationTaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModerationTaskScalarWhereWithAggregatesInput | Prisma.ModerationTaskScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ModerationTask"> | string;
    type?: Prisma.EnumModerationTaskTypeWithAggregatesFilter<"ModerationTask"> | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusWithAggregatesFilter<"ModerationTask"> | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntWithAggregatesFilter<"ModerationTask"> | number;
    subjectUserId?: Prisma.UuidNullableWithAggregatesFilter<"ModerationTask"> | string | null;
    photoId?: Prisma.UuidNullableWithAggregatesFilter<"ModerationTask"> | string | null;
    reportId?: Prisma.UuidNullableWithAggregatesFilter<"ModerationTask"> | string | null;
    verificationId?: Prisma.UuidNullableWithAggregatesFilter<"ModerationTask"> | string | null;
    eventId?: Prisma.UuidNullableWithAggregatesFilter<"ModerationTask"> | string | null;
    assignedToId?: Prisma.UuidNullableWithAggregatesFilter<"ModerationTask"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableWithAggregatesFilter<"ModerationTask"> | $Enums.ModerationDecision | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"ModerationTask"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ModerationTask"> | Date | string;
    claimedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ModerationTask"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ModerationTask"> | Date | string | null;
};
export type ModerationTaskCreateInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    subjectUser?: Prisma.UserCreateNestedOneWithoutModerationTasksSubjectInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutModerationTasksAssignedInput;
    photo?: Prisma.PhotoCreateNestedOneWithoutModerationTasksInput;
    report?: Prisma.ReportCreateNestedOneWithoutModerationTasksInput;
    verification?: Prisma.VerificationCreateNestedOneWithoutModerationTasksInput;
    event?: Prisma.EventCreateNestedOneWithoutModerationTasksInput;
};
export type ModerationTaskUncheckedCreateInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subjectUser?: Prisma.UserUpdateOneWithoutModerationTasksSubjectNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutModerationTasksAssignedNestedInput;
    photo?: Prisma.PhotoUpdateOneWithoutModerationTasksNestedInput;
    report?: Prisma.ReportUpdateOneWithoutModerationTasksNestedInput;
    verification?: Prisma.VerificationUpdateOneWithoutModerationTasksNestedInput;
    event?: Prisma.EventUpdateOneWithoutModerationTasksNestedInput;
};
export type ModerationTaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskCreateManyInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskListRelationFilter = {
    every?: Prisma.ModerationTaskWhereInput;
    some?: Prisma.ModerationTaskWhereInput;
    none?: Prisma.ModerationTaskWhereInput;
};
export type ModerationTaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ModerationTaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    subjectUserId?: Prisma.SortOrder;
    photoId?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type ModerationTaskAvgOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type ModerationTaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    subjectUserId?: Prisma.SortOrder;
    photoId?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type ModerationTaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    subjectUserId?: Prisma.SortOrder;
    photoId?: Prisma.SortOrder;
    reportId?: Prisma.SortOrder;
    verificationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
};
export type ModerationTaskSumOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type ModerationTaskCreateNestedManyWithoutSubjectUserInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput> | Prisma.ModerationTaskCreateWithoutSubjectUserInput[] | Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput | Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput[];
    createMany?: Prisma.ModerationTaskCreateManySubjectUserInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskCreateNestedManyWithoutAssignedToInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput> | Prisma.ModerationTaskCreateWithoutAssignedToInput[] | Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput | Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput[];
    createMany?: Prisma.ModerationTaskCreateManyAssignedToInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUncheckedCreateNestedManyWithoutSubjectUserInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput> | Prisma.ModerationTaskCreateWithoutSubjectUserInput[] | Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput | Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput[];
    createMany?: Prisma.ModerationTaskCreateManySubjectUserInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput> | Prisma.ModerationTaskCreateWithoutAssignedToInput[] | Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput | Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput[];
    createMany?: Prisma.ModerationTaskCreateManyAssignedToInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUpdateManyWithoutSubjectUserNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput> | Prisma.ModerationTaskCreateWithoutSubjectUserInput[] | Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput | Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutSubjectUserInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutSubjectUserInput[];
    createMany?: Prisma.ModerationTaskCreateManySubjectUserInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutSubjectUserInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutSubjectUserInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutSubjectUserInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutSubjectUserInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskUpdateManyWithoutAssignedToNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput> | Prisma.ModerationTaskCreateWithoutAssignedToInput[] | Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput | Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutAssignedToInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutAssignedToInput[];
    createMany?: Prisma.ModerationTaskCreateManyAssignedToInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutAssignedToInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutAssignedToInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutAssignedToInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutAssignedToInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskUncheckedUpdateManyWithoutSubjectUserNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput> | Prisma.ModerationTaskCreateWithoutSubjectUserInput[] | Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput | Prisma.ModerationTaskCreateOrConnectWithoutSubjectUserInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutSubjectUserInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutSubjectUserInput[];
    createMany?: Prisma.ModerationTaskCreateManySubjectUserInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutSubjectUserInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutSubjectUserInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutSubjectUserInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutSubjectUserInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput> | Prisma.ModerationTaskCreateWithoutAssignedToInput[] | Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput | Prisma.ModerationTaskCreateOrConnectWithoutAssignedToInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutAssignedToInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutAssignedToInput[];
    createMany?: Prisma.ModerationTaskCreateManyAssignedToInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutAssignedToInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutAssignedToInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutAssignedToInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutAssignedToInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutEventInput, Prisma.ModerationTaskUncheckedCreateWithoutEventInput> | Prisma.ModerationTaskCreateWithoutEventInput[] | Prisma.ModerationTaskUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutEventInput | Prisma.ModerationTaskCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.ModerationTaskCreateManyEventInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutEventInput, Prisma.ModerationTaskUncheckedCreateWithoutEventInput> | Prisma.ModerationTaskCreateWithoutEventInput[] | Prisma.ModerationTaskUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutEventInput | Prisma.ModerationTaskCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.ModerationTaskCreateManyEventInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutEventInput, Prisma.ModerationTaskUncheckedCreateWithoutEventInput> | Prisma.ModerationTaskCreateWithoutEventInput[] | Prisma.ModerationTaskUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutEventInput | Prisma.ModerationTaskCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutEventInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.ModerationTaskCreateManyEventInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutEventInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutEventInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutEventInput, Prisma.ModerationTaskUncheckedCreateWithoutEventInput> | Prisma.ModerationTaskCreateWithoutEventInput[] | Prisma.ModerationTaskUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutEventInput | Prisma.ModerationTaskCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutEventInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.ModerationTaskCreateManyEventInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutEventInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutEventInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskCreateNestedManyWithoutPhotoInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutPhotoInput, Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput> | Prisma.ModerationTaskCreateWithoutPhotoInput[] | Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput | Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput[];
    createMany?: Prisma.ModerationTaskCreateManyPhotoInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUncheckedCreateNestedManyWithoutPhotoInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutPhotoInput, Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput> | Prisma.ModerationTaskCreateWithoutPhotoInput[] | Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput | Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput[];
    createMany?: Prisma.ModerationTaskCreateManyPhotoInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUpdateManyWithoutPhotoNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutPhotoInput, Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput> | Prisma.ModerationTaskCreateWithoutPhotoInput[] | Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput | Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutPhotoInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutPhotoInput[];
    createMany?: Prisma.ModerationTaskCreateManyPhotoInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutPhotoInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutPhotoInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutPhotoInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutPhotoInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskUncheckedUpdateManyWithoutPhotoNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutPhotoInput, Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput> | Prisma.ModerationTaskCreateWithoutPhotoInput[] | Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput | Prisma.ModerationTaskCreateOrConnectWithoutPhotoInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutPhotoInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutPhotoInput[];
    createMany?: Prisma.ModerationTaskCreateManyPhotoInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutPhotoInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutPhotoInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutPhotoInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutPhotoInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskCreateNestedManyWithoutReportInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutReportInput, Prisma.ModerationTaskUncheckedCreateWithoutReportInput> | Prisma.ModerationTaskCreateWithoutReportInput[] | Prisma.ModerationTaskUncheckedCreateWithoutReportInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutReportInput | Prisma.ModerationTaskCreateOrConnectWithoutReportInput[];
    createMany?: Prisma.ModerationTaskCreateManyReportInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUncheckedCreateNestedManyWithoutReportInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutReportInput, Prisma.ModerationTaskUncheckedCreateWithoutReportInput> | Prisma.ModerationTaskCreateWithoutReportInput[] | Prisma.ModerationTaskUncheckedCreateWithoutReportInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutReportInput | Prisma.ModerationTaskCreateOrConnectWithoutReportInput[];
    createMany?: Prisma.ModerationTaskCreateManyReportInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUpdateManyWithoutReportNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutReportInput, Prisma.ModerationTaskUncheckedCreateWithoutReportInput> | Prisma.ModerationTaskCreateWithoutReportInput[] | Prisma.ModerationTaskUncheckedCreateWithoutReportInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutReportInput | Prisma.ModerationTaskCreateOrConnectWithoutReportInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutReportInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutReportInput[];
    createMany?: Prisma.ModerationTaskCreateManyReportInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutReportInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutReportInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutReportInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutReportInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskUncheckedUpdateManyWithoutReportNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutReportInput, Prisma.ModerationTaskUncheckedCreateWithoutReportInput> | Prisma.ModerationTaskCreateWithoutReportInput[] | Prisma.ModerationTaskUncheckedCreateWithoutReportInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutReportInput | Prisma.ModerationTaskCreateOrConnectWithoutReportInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutReportInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutReportInput[];
    createMany?: Prisma.ModerationTaskCreateManyReportInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutReportInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutReportInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutReportInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutReportInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type EnumModerationTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.ModerationTaskType;
};
export type EnumModerationTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModerationTaskStatus;
};
export type ModerationTaskCreateNestedManyWithoutVerificationInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutVerificationInput, Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput> | Prisma.ModerationTaskCreateWithoutVerificationInput[] | Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput | Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput[];
    createMany?: Prisma.ModerationTaskCreateManyVerificationInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUncheckedCreateNestedManyWithoutVerificationInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutVerificationInput, Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput> | Prisma.ModerationTaskCreateWithoutVerificationInput[] | Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput | Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput[];
    createMany?: Prisma.ModerationTaskCreateManyVerificationInputEnvelope;
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
};
export type ModerationTaskUpdateManyWithoutVerificationNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutVerificationInput, Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput> | Prisma.ModerationTaskCreateWithoutVerificationInput[] | Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput | Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutVerificationInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutVerificationInput[];
    createMany?: Prisma.ModerationTaskCreateManyVerificationInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutVerificationInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutVerificationInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutVerificationInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutVerificationInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskUncheckedUpdateManyWithoutVerificationNestedInput = {
    create?: Prisma.XOR<Prisma.ModerationTaskCreateWithoutVerificationInput, Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput> | Prisma.ModerationTaskCreateWithoutVerificationInput[] | Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput[];
    connectOrCreate?: Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput | Prisma.ModerationTaskCreateOrConnectWithoutVerificationInput[];
    upsert?: Prisma.ModerationTaskUpsertWithWhereUniqueWithoutVerificationInput | Prisma.ModerationTaskUpsertWithWhereUniqueWithoutVerificationInput[];
    createMany?: Prisma.ModerationTaskCreateManyVerificationInputEnvelope;
    set?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    disconnect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    delete?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    connect?: Prisma.ModerationTaskWhereUniqueInput | Prisma.ModerationTaskWhereUniqueInput[];
    update?: Prisma.ModerationTaskUpdateWithWhereUniqueWithoutVerificationInput | Prisma.ModerationTaskUpdateWithWhereUniqueWithoutVerificationInput[];
    updateMany?: Prisma.ModerationTaskUpdateManyWithWhereWithoutVerificationInput | Prisma.ModerationTaskUpdateManyWithWhereWithoutVerificationInput[];
    deleteMany?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
};
export type ModerationTaskCreateWithoutSubjectUserInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    assignedTo?: Prisma.UserCreateNestedOneWithoutModerationTasksAssignedInput;
    photo?: Prisma.PhotoCreateNestedOneWithoutModerationTasksInput;
    report?: Prisma.ReportCreateNestedOneWithoutModerationTasksInput;
    verification?: Prisma.VerificationCreateNestedOneWithoutModerationTasksInput;
    event?: Prisma.EventCreateNestedOneWithoutModerationTasksInput;
};
export type ModerationTaskUncheckedCreateWithoutSubjectUserInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskCreateOrConnectWithoutSubjectUserInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput>;
};
export type ModerationTaskCreateManySubjectUserInputEnvelope = {
    data: Prisma.ModerationTaskCreateManySubjectUserInput | Prisma.ModerationTaskCreateManySubjectUserInput[];
    skipDuplicates?: boolean;
};
export type ModerationTaskCreateWithoutAssignedToInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    subjectUser?: Prisma.UserCreateNestedOneWithoutModerationTasksSubjectInput;
    photo?: Prisma.PhotoCreateNestedOneWithoutModerationTasksInput;
    report?: Prisma.ReportCreateNestedOneWithoutModerationTasksInput;
    verification?: Prisma.VerificationCreateNestedOneWithoutModerationTasksInput;
    event?: Prisma.EventCreateNestedOneWithoutModerationTasksInput;
};
export type ModerationTaskUncheckedCreateWithoutAssignedToInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskCreateOrConnectWithoutAssignedToInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput>;
};
export type ModerationTaskCreateManyAssignedToInputEnvelope = {
    data: Prisma.ModerationTaskCreateManyAssignedToInput | Prisma.ModerationTaskCreateManyAssignedToInput[];
    skipDuplicates?: boolean;
};
export type ModerationTaskUpsertWithWhereUniqueWithoutSubjectUserInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedUpdateWithoutSubjectUserInput>;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedCreateWithoutSubjectUserInput>;
};
export type ModerationTaskUpdateWithWhereUniqueWithoutSubjectUserInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutSubjectUserInput, Prisma.ModerationTaskUncheckedUpdateWithoutSubjectUserInput>;
};
export type ModerationTaskUpdateManyWithWhereWithoutSubjectUserInput = {
    where: Prisma.ModerationTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyWithoutSubjectUserInput>;
};
export type ModerationTaskScalarWhereInput = {
    AND?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
    OR?: Prisma.ModerationTaskScalarWhereInput[];
    NOT?: Prisma.ModerationTaskScalarWhereInput | Prisma.ModerationTaskScalarWhereInput[];
    id?: Prisma.UuidFilter<"ModerationTask"> | string;
    type?: Prisma.EnumModerationTaskTypeFilter<"ModerationTask"> | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFilter<"ModerationTask"> | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFilter<"ModerationTask"> | number;
    subjectUserId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    photoId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    reportId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    verificationId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    eventId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    assignedToId?: Prisma.UuidNullableFilter<"ModerationTask"> | string | null;
    decision?: Prisma.EnumModerationDecisionNullableFilter<"ModerationTask"> | $Enums.ModerationDecision | null;
    notes?: Prisma.StringNullableFilter<"ModerationTask"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ModerationTask"> | Date | string;
    claimedAt?: Prisma.DateTimeNullableFilter<"ModerationTask"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"ModerationTask"> | Date | string | null;
};
export type ModerationTaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedUpdateWithoutAssignedToInput>;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedCreateWithoutAssignedToInput>;
};
export type ModerationTaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutAssignedToInput, Prisma.ModerationTaskUncheckedUpdateWithoutAssignedToInput>;
};
export type ModerationTaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: Prisma.ModerationTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyWithoutAssignedToInput>;
};
export type ModerationTaskCreateWithoutEventInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    subjectUser?: Prisma.UserCreateNestedOneWithoutModerationTasksSubjectInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutModerationTasksAssignedInput;
    photo?: Prisma.PhotoCreateNestedOneWithoutModerationTasksInput;
    report?: Prisma.ReportCreateNestedOneWithoutModerationTasksInput;
    verification?: Prisma.VerificationCreateNestedOneWithoutModerationTasksInput;
};
export type ModerationTaskUncheckedCreateWithoutEventInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskCreateOrConnectWithoutEventInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutEventInput, Prisma.ModerationTaskUncheckedCreateWithoutEventInput>;
};
export type ModerationTaskCreateManyEventInputEnvelope = {
    data: Prisma.ModerationTaskCreateManyEventInput | Prisma.ModerationTaskCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type ModerationTaskUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutEventInput, Prisma.ModerationTaskUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutEventInput, Prisma.ModerationTaskUncheckedCreateWithoutEventInput>;
};
export type ModerationTaskUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutEventInput, Prisma.ModerationTaskUncheckedUpdateWithoutEventInput>;
};
export type ModerationTaskUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.ModerationTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyWithoutEventInput>;
};
export type ModerationTaskCreateWithoutPhotoInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    subjectUser?: Prisma.UserCreateNestedOneWithoutModerationTasksSubjectInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutModerationTasksAssignedInput;
    report?: Prisma.ReportCreateNestedOneWithoutModerationTasksInput;
    verification?: Prisma.VerificationCreateNestedOneWithoutModerationTasksInput;
    event?: Prisma.EventCreateNestedOneWithoutModerationTasksInput;
};
export type ModerationTaskUncheckedCreateWithoutPhotoInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskCreateOrConnectWithoutPhotoInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutPhotoInput, Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput>;
};
export type ModerationTaskCreateManyPhotoInputEnvelope = {
    data: Prisma.ModerationTaskCreateManyPhotoInput | Prisma.ModerationTaskCreateManyPhotoInput[];
    skipDuplicates?: boolean;
};
export type ModerationTaskUpsertWithWhereUniqueWithoutPhotoInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutPhotoInput, Prisma.ModerationTaskUncheckedUpdateWithoutPhotoInput>;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutPhotoInput, Prisma.ModerationTaskUncheckedCreateWithoutPhotoInput>;
};
export type ModerationTaskUpdateWithWhereUniqueWithoutPhotoInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutPhotoInput, Prisma.ModerationTaskUncheckedUpdateWithoutPhotoInput>;
};
export type ModerationTaskUpdateManyWithWhereWithoutPhotoInput = {
    where: Prisma.ModerationTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyWithoutPhotoInput>;
};
export type ModerationTaskCreateWithoutReportInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    subjectUser?: Prisma.UserCreateNestedOneWithoutModerationTasksSubjectInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutModerationTasksAssignedInput;
    photo?: Prisma.PhotoCreateNestedOneWithoutModerationTasksInput;
    verification?: Prisma.VerificationCreateNestedOneWithoutModerationTasksInput;
    event?: Prisma.EventCreateNestedOneWithoutModerationTasksInput;
};
export type ModerationTaskUncheckedCreateWithoutReportInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskCreateOrConnectWithoutReportInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutReportInput, Prisma.ModerationTaskUncheckedCreateWithoutReportInput>;
};
export type ModerationTaskCreateManyReportInputEnvelope = {
    data: Prisma.ModerationTaskCreateManyReportInput | Prisma.ModerationTaskCreateManyReportInput[];
    skipDuplicates?: boolean;
};
export type ModerationTaskUpsertWithWhereUniqueWithoutReportInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutReportInput, Prisma.ModerationTaskUncheckedUpdateWithoutReportInput>;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutReportInput, Prisma.ModerationTaskUncheckedCreateWithoutReportInput>;
};
export type ModerationTaskUpdateWithWhereUniqueWithoutReportInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutReportInput, Prisma.ModerationTaskUncheckedUpdateWithoutReportInput>;
};
export type ModerationTaskUpdateManyWithWhereWithoutReportInput = {
    where: Prisma.ModerationTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyWithoutReportInput>;
};
export type ModerationTaskCreateWithoutVerificationInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    subjectUser?: Prisma.UserCreateNestedOneWithoutModerationTasksSubjectInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutModerationTasksAssignedInput;
    photo?: Prisma.PhotoCreateNestedOneWithoutModerationTasksInput;
    report?: Prisma.ReportCreateNestedOneWithoutModerationTasksInput;
    event?: Prisma.EventCreateNestedOneWithoutModerationTasksInput;
};
export type ModerationTaskUncheckedCreateWithoutVerificationInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskCreateOrConnectWithoutVerificationInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutVerificationInput, Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput>;
};
export type ModerationTaskCreateManyVerificationInputEnvelope = {
    data: Prisma.ModerationTaskCreateManyVerificationInput | Prisma.ModerationTaskCreateManyVerificationInput[];
    skipDuplicates?: boolean;
};
export type ModerationTaskUpsertWithWhereUniqueWithoutVerificationInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutVerificationInput, Prisma.ModerationTaskUncheckedUpdateWithoutVerificationInput>;
    create: Prisma.XOR<Prisma.ModerationTaskCreateWithoutVerificationInput, Prisma.ModerationTaskUncheckedCreateWithoutVerificationInput>;
};
export type ModerationTaskUpdateWithWhereUniqueWithoutVerificationInput = {
    where: Prisma.ModerationTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateWithoutVerificationInput, Prisma.ModerationTaskUncheckedUpdateWithoutVerificationInput>;
};
export type ModerationTaskUpdateManyWithWhereWithoutVerificationInput = {
    where: Prisma.ModerationTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyWithoutVerificationInput>;
};
export type ModerationTaskCreateManySubjectUserInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskCreateManyAssignedToInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskUpdateWithoutSubjectUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.UserUpdateOneWithoutModerationTasksAssignedNestedInput;
    photo?: Prisma.PhotoUpdateOneWithoutModerationTasksNestedInput;
    report?: Prisma.ReportUpdateOneWithoutModerationTasksNestedInput;
    verification?: Prisma.VerificationUpdateOneWithoutModerationTasksNestedInput;
    event?: Prisma.EventUpdateOneWithoutModerationTasksNestedInput;
};
export type ModerationTaskUncheckedUpdateWithoutSubjectUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUncheckedUpdateManyWithoutSubjectUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUpdateWithoutAssignedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subjectUser?: Prisma.UserUpdateOneWithoutModerationTasksSubjectNestedInput;
    photo?: Prisma.PhotoUpdateOneWithoutModerationTasksNestedInput;
    report?: Prisma.ReportUpdateOneWithoutModerationTasksNestedInput;
    verification?: Prisma.VerificationUpdateOneWithoutModerationTasksNestedInput;
    event?: Prisma.EventUpdateOneWithoutModerationTasksNestedInput;
};
export type ModerationTaskUncheckedUpdateWithoutAssignedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskCreateManyEventInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subjectUser?: Prisma.UserUpdateOneWithoutModerationTasksSubjectNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutModerationTasksAssignedNestedInput;
    photo?: Prisma.PhotoUpdateOneWithoutModerationTasksNestedInput;
    report?: Prisma.ReportUpdateOneWithoutModerationTasksNestedInput;
    verification?: Prisma.VerificationUpdateOneWithoutModerationTasksNestedInput;
};
export type ModerationTaskUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskCreateManyPhotoInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    reportId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskUpdateWithoutPhotoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subjectUser?: Prisma.UserUpdateOneWithoutModerationTasksSubjectNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutModerationTasksAssignedNestedInput;
    report?: Prisma.ReportUpdateOneWithoutModerationTasksNestedInput;
    verification?: Prisma.VerificationUpdateOneWithoutModerationTasksNestedInput;
    event?: Prisma.EventUpdateOneWithoutModerationTasksNestedInput;
};
export type ModerationTaskUncheckedUpdateWithoutPhotoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUncheckedUpdateManyWithoutPhotoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskCreateManyReportInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    verificationId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskUpdateWithoutReportInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subjectUser?: Prisma.UserUpdateOneWithoutModerationTasksSubjectNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutModerationTasksAssignedNestedInput;
    photo?: Prisma.PhotoUpdateOneWithoutModerationTasksNestedInput;
    verification?: Prisma.VerificationUpdateOneWithoutModerationTasksNestedInput;
    event?: Prisma.EventUpdateOneWithoutModerationTasksNestedInput;
};
export type ModerationTaskUncheckedUpdateWithoutReportInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUncheckedUpdateManyWithoutReportInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskCreateManyVerificationInput = {
    id?: string;
    type: $Enums.ModerationTaskType;
    status?: $Enums.ModerationTaskStatus;
    priority?: number;
    subjectUserId?: string | null;
    photoId?: string | null;
    reportId?: string | null;
    eventId?: string | null;
    assignedToId?: string | null;
    decision?: $Enums.ModerationDecision | null;
    notes?: string | null;
    createdAt?: Date | string;
    claimedAt?: Date | string | null;
    resolvedAt?: Date | string | null;
};
export type ModerationTaskUpdateWithoutVerificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subjectUser?: Prisma.UserUpdateOneWithoutModerationTasksSubjectNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutModerationTasksAssignedNestedInput;
    photo?: Prisma.PhotoUpdateOneWithoutModerationTasksNestedInput;
    report?: Prisma.ReportUpdateOneWithoutModerationTasksNestedInput;
    event?: Prisma.EventUpdateOneWithoutModerationTasksNestedInput;
};
export type ModerationTaskUncheckedUpdateWithoutVerificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskUncheckedUpdateManyWithoutVerificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumModerationTaskTypeFieldUpdateOperationsInput | $Enums.ModerationTaskType;
    status?: Prisma.EnumModerationTaskStatusFieldUpdateOperationsInput | $Enums.ModerationTaskStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    subjectUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decision?: Prisma.NullableEnumModerationDecisionFieldUpdateOperationsInput | $Enums.ModerationDecision | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModerationTaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    priority?: boolean;
    subjectUserId?: boolean;
    photoId?: boolean;
    reportId?: boolean;
    verificationId?: boolean;
    eventId?: boolean;
    assignedToId?: boolean;
    decision?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    claimedAt?: boolean;
    resolvedAt?: boolean;
    subjectUser?: boolean | Prisma.ModerationTask$subjectUserArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.ModerationTask$assignedToArgs<ExtArgs>;
    photo?: boolean | Prisma.ModerationTask$photoArgs<ExtArgs>;
    report?: boolean | Prisma.ModerationTask$reportArgs<ExtArgs>;
    verification?: boolean | Prisma.ModerationTask$verificationArgs<ExtArgs>;
    event?: boolean | Prisma.ModerationTask$eventArgs<ExtArgs>;
}, ExtArgs["result"]["moderationTask"]>;
export type ModerationTaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    priority?: boolean;
    subjectUserId?: boolean;
    photoId?: boolean;
    reportId?: boolean;
    verificationId?: boolean;
    eventId?: boolean;
    assignedToId?: boolean;
    decision?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    claimedAt?: boolean;
    resolvedAt?: boolean;
    subjectUser?: boolean | Prisma.ModerationTask$subjectUserArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.ModerationTask$assignedToArgs<ExtArgs>;
    photo?: boolean | Prisma.ModerationTask$photoArgs<ExtArgs>;
    report?: boolean | Prisma.ModerationTask$reportArgs<ExtArgs>;
    verification?: boolean | Prisma.ModerationTask$verificationArgs<ExtArgs>;
    event?: boolean | Prisma.ModerationTask$eventArgs<ExtArgs>;
}, ExtArgs["result"]["moderationTask"]>;
export type ModerationTaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    priority?: boolean;
    subjectUserId?: boolean;
    photoId?: boolean;
    reportId?: boolean;
    verificationId?: boolean;
    eventId?: boolean;
    assignedToId?: boolean;
    decision?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    claimedAt?: boolean;
    resolvedAt?: boolean;
    subjectUser?: boolean | Prisma.ModerationTask$subjectUserArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.ModerationTask$assignedToArgs<ExtArgs>;
    photo?: boolean | Prisma.ModerationTask$photoArgs<ExtArgs>;
    report?: boolean | Prisma.ModerationTask$reportArgs<ExtArgs>;
    verification?: boolean | Prisma.ModerationTask$verificationArgs<ExtArgs>;
    event?: boolean | Prisma.ModerationTask$eventArgs<ExtArgs>;
}, ExtArgs["result"]["moderationTask"]>;
export type ModerationTaskSelectScalar = {
    id?: boolean;
    type?: boolean;
    status?: boolean;
    priority?: boolean;
    subjectUserId?: boolean;
    photoId?: boolean;
    reportId?: boolean;
    verificationId?: boolean;
    eventId?: boolean;
    assignedToId?: boolean;
    decision?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    claimedAt?: boolean;
    resolvedAt?: boolean;
};
export type ModerationTaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "status" | "priority" | "subjectUserId" | "photoId" | "reportId" | "verificationId" | "eventId" | "assignedToId" | "decision" | "notes" | "createdAt" | "claimedAt" | "resolvedAt", ExtArgs["result"]["moderationTask"]>;
export type ModerationTaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subjectUser?: boolean | Prisma.ModerationTask$subjectUserArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.ModerationTask$assignedToArgs<ExtArgs>;
    photo?: boolean | Prisma.ModerationTask$photoArgs<ExtArgs>;
    report?: boolean | Prisma.ModerationTask$reportArgs<ExtArgs>;
    verification?: boolean | Prisma.ModerationTask$verificationArgs<ExtArgs>;
    event?: boolean | Prisma.ModerationTask$eventArgs<ExtArgs>;
};
export type ModerationTaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subjectUser?: boolean | Prisma.ModerationTask$subjectUserArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.ModerationTask$assignedToArgs<ExtArgs>;
    photo?: boolean | Prisma.ModerationTask$photoArgs<ExtArgs>;
    report?: boolean | Prisma.ModerationTask$reportArgs<ExtArgs>;
    verification?: boolean | Prisma.ModerationTask$verificationArgs<ExtArgs>;
    event?: boolean | Prisma.ModerationTask$eventArgs<ExtArgs>;
};
export type ModerationTaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subjectUser?: boolean | Prisma.ModerationTask$subjectUserArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.ModerationTask$assignedToArgs<ExtArgs>;
    photo?: boolean | Prisma.ModerationTask$photoArgs<ExtArgs>;
    report?: boolean | Prisma.ModerationTask$reportArgs<ExtArgs>;
    verification?: boolean | Prisma.ModerationTask$verificationArgs<ExtArgs>;
    event?: boolean | Prisma.ModerationTask$eventArgs<ExtArgs>;
};
export type $ModerationTaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ModerationTask";
    objects: {
        subjectUser: Prisma.$UserPayload<ExtArgs> | null;
        assignedTo: Prisma.$UserPayload<ExtArgs> | null;
        photo: Prisma.$PhotoPayload<ExtArgs> | null;
        report: Prisma.$ReportPayload<ExtArgs> | null;
        verification: Prisma.$VerificationPayload<ExtArgs> | null;
        event: Prisma.$EventPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.ModerationTaskType;
        status: $Enums.ModerationTaskStatus;
        priority: number;
        subjectUserId: string | null;
        photoId: string | null;
        reportId: string | null;
        verificationId: string | null;
        eventId: string | null;
        assignedToId: string | null;
        decision: $Enums.ModerationDecision | null;
        notes: string | null;
        createdAt: Date;
        claimedAt: Date | null;
        resolvedAt: Date | null;
    }, ExtArgs["result"]["moderationTask"]>;
    composites: {};
};
export type ModerationTaskGetPayload<S extends boolean | null | undefined | ModerationTaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload, S>;
export type ModerationTaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModerationTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModerationTaskCountAggregateInputType | true;
};
export interface ModerationTaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ModerationTask'];
        meta: {
            name: 'ModerationTask';
        };
    };
    findUnique<T extends ModerationTaskFindUniqueArgs>(args: Prisma.SelectSubset<T, ModerationTaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ModerationTaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModerationTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ModerationTaskFindFirstArgs>(args?: Prisma.SelectSubset<T, ModerationTaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ModerationTaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModerationTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ModerationTaskFindManyArgs>(args?: Prisma.SelectSubset<T, ModerationTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ModerationTaskCreateArgs>(args: Prisma.SelectSubset<T, ModerationTaskCreateArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ModerationTaskCreateManyArgs>(args?: Prisma.SelectSubset<T, ModerationTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ModerationTaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModerationTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ModerationTaskDeleteArgs>(args: Prisma.SelectSubset<T, ModerationTaskDeleteArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ModerationTaskUpdateArgs>(args: Prisma.SelectSubset<T, ModerationTaskUpdateArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ModerationTaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModerationTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ModerationTaskUpdateManyArgs>(args: Prisma.SelectSubset<T, ModerationTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ModerationTaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModerationTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ModerationTaskUpsertArgs>(args: Prisma.SelectSubset<T, ModerationTaskUpsertArgs<ExtArgs>>): Prisma.Prisma__ModerationTaskClient<runtime.Types.Result.GetResult<Prisma.$ModerationTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ModerationTaskCountArgs>(args?: Prisma.Subset<T, ModerationTaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModerationTaskCountAggregateOutputType> : number>;
    aggregate<T extends ModerationTaskAggregateArgs>(args: Prisma.Subset<T, ModerationTaskAggregateArgs>): Prisma.PrismaPromise<GetModerationTaskAggregateType<T>>;
    groupBy<T extends ModerationTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModerationTaskGroupByArgs['orderBy'];
    } : {
        orderBy?: ModerationTaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModerationTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModerationTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ModerationTaskFieldRefs;
}
export interface Prisma__ModerationTaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subjectUser<T extends Prisma.ModerationTask$subjectUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModerationTask$subjectUserArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    assignedTo<T extends Prisma.ModerationTask$assignedToArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModerationTask$assignedToArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    photo<T extends Prisma.ModerationTask$photoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModerationTask$photoArgs<ExtArgs>>): Prisma.Prisma__PhotoClient<runtime.Types.Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    report<T extends Prisma.ModerationTask$reportArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModerationTask$reportArgs<ExtArgs>>): Prisma.Prisma__ReportClient<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    verification<T extends Prisma.ModerationTask$verificationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModerationTask$verificationArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.ModerationTask$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModerationTask$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ModerationTaskFieldRefs {
    readonly id: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly type: Prisma.FieldRef<"ModerationTask", 'ModerationTaskType'>;
    readonly status: Prisma.FieldRef<"ModerationTask", 'ModerationTaskStatus'>;
    readonly priority: Prisma.FieldRef<"ModerationTask", 'Int'>;
    readonly subjectUserId: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly photoId: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly reportId: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly verificationId: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly eventId: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly assignedToId: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly decision: Prisma.FieldRef<"ModerationTask", 'ModerationDecision'>;
    readonly notes: Prisma.FieldRef<"ModerationTask", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ModerationTask", 'DateTime'>;
    readonly claimedAt: Prisma.FieldRef<"ModerationTask", 'DateTime'>;
    readonly resolvedAt: Prisma.FieldRef<"ModerationTask", 'DateTime'>;
}
export type ModerationTaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    where: Prisma.ModerationTaskWhereUniqueInput;
};
export type ModerationTaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    where: Prisma.ModerationTaskWhereUniqueInput;
};
export type ModerationTaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ModerationTaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ModerationTaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ModerationTaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModerationTaskCreateInput, Prisma.ModerationTaskUncheckedCreateInput>;
};
export type ModerationTaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ModerationTaskCreateManyInput | Prisma.ModerationTaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ModerationTaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    data: Prisma.ModerationTaskCreateManyInput | Prisma.ModerationTaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ModerationTaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ModerationTaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateInput, Prisma.ModerationTaskUncheckedUpdateInput>;
    where: Prisma.ModerationTaskWhereUniqueInput;
};
export type ModerationTaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyInput>;
    where?: Prisma.ModerationTaskWhereInput;
    limit?: number;
};
export type ModerationTaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModerationTaskUpdateManyMutationInput, Prisma.ModerationTaskUncheckedUpdateManyInput>;
    where?: Prisma.ModerationTaskWhereInput;
    limit?: number;
    include?: Prisma.ModerationTaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ModerationTaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    where: Prisma.ModerationTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModerationTaskCreateInput, Prisma.ModerationTaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ModerationTaskUpdateInput, Prisma.ModerationTaskUncheckedUpdateInput>;
};
export type ModerationTaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
    where: Prisma.ModerationTaskWhereUniqueInput;
};
export type ModerationTaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModerationTaskWhereInput;
    limit?: number;
};
export type ModerationTask$subjectUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ModerationTask$assignedToArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ModerationTask$photoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PhotoSelect<ExtArgs> | null;
    omit?: Prisma.PhotoOmit<ExtArgs> | null;
    include?: Prisma.PhotoInclude<ExtArgs> | null;
    where?: Prisma.PhotoWhereInput;
};
export type ModerationTask$reportArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReportSelect<ExtArgs> | null;
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
};
export type ModerationTask$verificationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    include?: Prisma.VerificationInclude<ExtArgs> | null;
    where?: Prisma.VerificationWhereInput;
};
export type ModerationTask$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
export type ModerationTaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModerationTaskSelect<ExtArgs> | null;
    omit?: Prisma.ModerationTaskOmit<ExtArgs> | null;
    include?: Prisma.ModerationTaskInclude<ExtArgs> | null;
};
