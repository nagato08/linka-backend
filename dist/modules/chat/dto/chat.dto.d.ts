import { MessageType } from '../../../generated/prisma/enums';
export declare class SendMessageDto {
    clientKey: string;
    type?: MessageType;
    body?: string;
    mediaKey?: string;
    mediaMimeType?: string;
    mediaBytes?: number;
    mediaDuration?: number;
    replyToId?: string;
}
export declare class HistoryQueryDto {
    before?: string;
    after?: string;
    limit: number;
}
export declare class MarkReadDto {
    upToMessageId?: string;
}
export declare class ChatMediaUploadDto {
    contentType: string;
    contentLength: number;
}
export declare class MuteDto {
    until?: string;
}
