import { CursorPaginationDto } from '../../common/dto/pagination.dto';
import { MatchService } from './match.service';
import { SwipeService } from './swipe.service';
import { SwipeDto, SwipeResultResponse } from './dto/matching.dto';
export declare class MatchingController {
    private readonly swipes;
    private readonly matches;
    constructor(swipes: SwipeService, matches: MatchService);
    like(userId: string, dto: SwipeDto): Promise<SwipeResultResponse>;
    pass(userId: string, dto: SwipeDto): Promise<SwipeResultResponse>;
    superlike(userId: string, dto: SwipeDto): Promise<SwipeResultResponse>;
    rewind(userId: string): Promise<{
        targetId: string;
        remainingFree: number;
    }>;
    list(userId: string, query: CursorPaginationDto): Promise<{
        data: {
            matchId: string;
            matchedAt: Date;
            fromSuperlike: boolean;
            conversationId: string | null;
            lastMessageAt: Date | null;
            lastMessagePreview: string | null;
            unreadCount: number;
            profile: import("./match.service").ProfileCard | null;
        }[];
        pageInfo: import("../../common/dto/pagination.dto").PageInfo;
    }>;
    likesReceived(userId: string, query: CursorPaginationDto): Promise<{
        data: {
            id: string;
            likedAt: Date;
            isSuperlike: boolean;
            profile: import("./match.service").ProfileCard | null;
        }[];
        pageInfo: import("../../common/dto/pagination.dto").PageInfo;
    }>;
    unmatch(userId: string, matchId: string): Promise<void>;
}
