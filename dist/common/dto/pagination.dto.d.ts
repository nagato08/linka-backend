export declare class CursorPaginationDto {
    cursor?: string;
    limit: number;
}
export declare class PageInfo {
    nextCursor: string | null;
    hasMore: boolean;
}
export declare class CursorPage<T> {
    data: T[];
    pageInfo: PageInfo;
}
export declare function buildCursorPage<T extends {
    id: string;
}>(rows: T[], limit: number): CursorPage<T>;
