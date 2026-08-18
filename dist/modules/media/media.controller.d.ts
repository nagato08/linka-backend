import { MediaService } from './media.service';
import { CreateUploadDto, ReorderPhotosDto, UploadTicketResponse } from './dto/media.dto';
export declare class MediaController {
    private readonly media;
    constructor(media: MediaService);
    list(userId: string): Promise<{
        id: string;
        position: number;
        status: import("../../generated/prisma/enums").PhotoStatus;
        rejectionReason: string | null;
        width: number | null;
        height: number | null;
        urls: {
            [k: string]: string;
        } | null;
    }[]>;
    createUploadUrl(userId: string, dto: CreateUploadDto): Promise<UploadTicketResponse>;
    confirm(userId: string, photoId: string): Promise<{
        status: import("../../generated/prisma/enums").PhotoStatus;
    }>;
    reorder(userId: string, dto: ReorderPhotosDto): Promise<void>;
    remove(userId: string, photoId: string): Promise<void>;
}
