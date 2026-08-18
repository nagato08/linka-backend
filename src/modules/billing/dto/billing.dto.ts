import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { ProductType } from '../../../generated/prisma/enums';

export class InitiatePaymentDto {
  @ApiProperty({ example: 'coins_3000' })
  @IsString()
  @Length(2, 60)
  sku: string;

  @ApiProperty({
    description: 'Numéro mobile money. MTN ou Orange uniquement.',
    example: '670000001',
  })
  @IsString()
  @Length(9, 20)
  payerPhone: string;

  @ApiProperty({
    description:
      'Clé fournie par le client. Empêche le double débit quand le réseau coupe entre l’envoi et la réponse.',
  })
  @IsString()
  @Length(8, 64)
  idempotencyKey: string;
}

export class PurchaseWithCreditsDto {
  @ApiProperty({ example: 'superlikes_5' })
  @IsString()
  @Length(2, 60)
  sku: string;
}

export class ProductQueryDto {
  @ApiPropertyOptional({ enum: ProductType })
  @IsOptional()
  @IsEnum(ProductType)
  type?: ProductType;
}

export class ActivateBoostDto {
  @ApiProperty({ example: 'boost_1h' })
  @IsString()
  @Length(2, 60)
  sku: string;
}
