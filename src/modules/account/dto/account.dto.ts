import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class DeleteAccountDto {
  @ApiPropertyOptional({
    description: 'Motif facultatif, utile pour comprendre les départs',
    maxLength: 500,
  })
  @IsOptional()
  @IsString()
  @Length(1, 500)
  reason?: string;
}
