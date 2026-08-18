import { SwipeSource } from '../../../generated/prisma/enums';
export declare class SwipeDto {
    targetId: string;
    source?: SwipeSource;
}
export declare class SwipeResultResponse {
    matched: boolean;
    matchId: string | null;
    conversationId: string | null;
}
