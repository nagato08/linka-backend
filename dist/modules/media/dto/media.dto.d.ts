export declare class CreateUploadDto {
    contentType: string;
    contentLength: number;
}
export declare class ReorderPhotosDto {
    photoIds: string[];
}
export declare class UploadTicketResponse {
    photoId: string;
    uploadUrl: string;
    expiresIn: number;
}
