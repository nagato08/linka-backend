import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { SwipeSource } from '../../../generated/prisma/enums';

export class SwipeDto {
  @ApiProperty({ description: 'Identifiant du profil swipé' })
  @IsUUID()
  targetId: string;

  @ApiPropertyOptional({
    enum: SwipeSource,
    description:
      'Origine du swipe : pile, écran des likes reçus, ou profil ouvert',
  })
  @IsOptional()
  @IsEnum(SwipeSource)
  source?: SwipeSource;
}

export class SwipeResultResponse {
  @ApiProperty({ description: 'Vrai si le like était réciproque' })
  matched: boolean;

  @ApiProperty({ nullable: true })
  matchId: string | null;

  @ApiProperty({
    nullable: true,
    description: 'Conversation ouverte en même temps que le match',
  })
  conversationId: string | null;
}
