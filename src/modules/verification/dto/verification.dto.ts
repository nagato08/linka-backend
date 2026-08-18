import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class VerificationUploadDto {
  @ApiProperty({ example: 'video/mp4' })
  @IsString()
  contentType: string;

  @ApiProperty({ example: 2400000 })
  @IsInt()
  @Min(1)
  @Max(15728640)
  contentLength: number;
}

export class StartVerificationResponse {
  @ApiProperty()
  verificationId: string;

  @ApiProperty({
    description:
      'Pose tirée au sort. L’aléa est ce qui empêche de rejouer une vidéo enregistrée à l’avance.',
    example: 'TURN_HEAD_LEFT',
  })
  pose: string;

  @ApiProperty()
  expiresAt: Date;
}
