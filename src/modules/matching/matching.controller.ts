import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SwipeAction } from '../../generated/prisma/enums';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { CursorPaginationDto } from '../../common/dto/pagination.dto';
import { MatchService } from './match.service';
import { SwipeService } from './swipe.service';
import { SwipeDto, SwipeResultResponse } from './dto/matching.dto';

@ApiTags('matching')
@ApiBearerAuth()
@Controller()
export class MatchingController {
  constructor(
    private readonly swipes: SwipeService,
    private readonly matches: MatchService,
  ) {}

  @Post('swipes/like')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Liker un profil' })
  like(
    @CurrentUser('sub') userId: string,
    @Body() dto: SwipeDto,
  ): Promise<SwipeResultResponse> {
    return this.swipes.swipe(
      userId,
      dto.targetId,
      SwipeAction.LIKE,
      dto.source,
    );
  }

  @Post('swipes/pass')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Passer un profil' })
  pass(
    @CurrentUser('sub') userId: string,
    @Body() dto: SwipeDto,
  ): Promise<SwipeResultResponse> {
    return this.swipes.swipe(
      userId,
      dto.targetId,
      SwipeAction.PASS,
      dto.source,
    );
  }

  @Post('swipes/superlike')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Super liker un profil' })
  superlike(
    @CurrentUser('sub') userId: string,
    @Body() dto: SwipeDto,
  ): Promise<SwipeResultResponse> {
    return this.swipes.swipe(
      userId,
      dto.targetId,
      SwipeAction.SUPERLIKE,
      dto.source,
    );
  }

  @Post('swipes/rewind')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Annuler le dernier swipe',
    description: 'Dix gratuits au total, puis illimité avec un abonnement.',
  })
  rewind(@CurrentUser('sub') userId: string) {
    return this.matches.rewind(userId);
  }

  @Get('matches')
  @ApiOperation({ summary: 'Lister ses matchs' })
  list(
    @CurrentUser('sub') userId: string,
    @Query() query: CursorPaginationDto,
  ) {
    return this.matches.list(userId, query.cursor, query.limit);
  }

  @Get('matches/likes-received')
  @ApiOperation({
    summary: 'Voir qui vous a liké',
    description: 'Gratuit — c’est ce qui fait revenir les utilisateurs.',
  })
  likesReceived(
    @CurrentUser('sub') userId: string,
    @Query() query: CursorPaginationDto,
  ) {
    return this.matches.likesReceived(userId, query.cursor, query.limit);
  }

  @Delete('matches/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Défaire un match' })
  unmatch(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) matchId: string,
  ): Promise<void> {
    return this.matches.unmatch(userId, matchId);
  }
}
