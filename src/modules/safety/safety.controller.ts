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
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { BlockService } from './block.service';
import { ReportService } from './report.service';
import {
  BlockContactsDto,
  BlockUserDto,
  ReportUserDto,
} from './dto/safety.dto';

@ApiTags('safety')
@ApiBearerAuth()
@Controller('safety')
export class SafetyController {
  constructor(
    private readonly reports: ReportService,
    private readonly blocks: BlockService,
  ) {}

  @Post('report')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Signaler un profil',
    description:
      'Le blocage est automatique : personne ne signale quelqu’un dont il souhaite continuer à recevoir des messages.',
  })
  report(@CurrentUser('sub') userId: string, @Body() dto: ReportUserDto) {
    return this.reports.report(userId, dto);
  }

  @Get('reports')
  @ApiOperation({ summary: 'Suivi de ses propres signalements' })
  listReports(@CurrentUser('sub') userId: string) {
    return this.reports.listMine(userId);
  }

  @Post('block')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Bloquer un profil',
    description:
      'Effet mutuel et immédiat : disparition des deux piles, match défait, conversation fermée.',
  })
  block(
    @CurrentUser('sub') userId: string,
    @Body() dto: BlockUserDto,
  ): Promise<void> {
    return this.blocks.block(userId, dto.userId, dto.reason);
  }

  @Delete('block/:userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Débloquer',
    description: 'Le match n’est pas rétabli.',
  })
  unblock(
    @CurrentUser('sub') userId: string,
    @Param('userId', ParseUUIDPipe) blockedId: string,
  ): Promise<void> {
    return this.blocks.unblock(userId, blockedId);
  }

  @Get('blocks')
  @ApiOperation({ summary: 'Lister les profils bloqués' })
  listBlocks(@CurrentUser('sub') userId: string) {
    return this.blocks.list(userId);
  }

  @Post('block-contacts')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Bloquer ses contacts',
    description:
      'Gratuit. Seuls des condensats sont conservés — le carnet d’adresses n’est jamais stocké. Évite de croiser sa famille ou ses collègues.',
  })
  blockContacts(
    @CurrentUser('sub') userId: string,
    @Body() dto: BlockContactsDto,
  ) {
    return this.blocks.blockContacts(userId, dto.phoneNumbers);
  }

  @Get('block-contacts/count')
  @ApiOperation({ summary: 'Nombre de contacts bloqués' })
  async countContacts(@CurrentUser('sub') userId: string) {
    return { count: await this.blocks.countContactBlocks(userId) };
  }

  @Delete('block-contacts')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Effacer les contacts bloqués' })
  clearContacts(@CurrentUser('sub') userId: string): Promise<void> {
    return this.blocks.clearContactBlocks(userId);
  }
}
