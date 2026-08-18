import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { AuthService } from './auth.service';
import { ReferralService } from './referral.service';
import { CurrentUser, Public } from './decorators/auth.decorators';
import {
  AuthTokensResponse,
  OtpRequestedResponse,
  RefreshTokenDto,
  RequestOtpDto,
  ValidateReferralDto,
  VerifyOtpDto,
} from './dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly referrals: ReferralService,
  ) {}

  @Public()
  @Post('otp/request')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Envoyer un code de vérification par e-mail',
    description:
      "La réponse est identique que l'adresse corresponde ou non à un compte existant : révéler qu'une personne est inscrite en ferait un outil de harcèlement.",
  })
  @ApiResponse({ status: 200, type: OtpRequestedResponse })
  @ApiResponse({ status: 429, description: 'Plafond de demandes atteint' })
  requestOtp(
    @Body() dto: RequestOtpDto,
    @Req() request: Request,
  ): Promise<OtpRequestedResponse> {
    return this.auth.requestOtp(dto.email, dto.locale, this.contextOf(request));
  }

  @Public()
  @Post('otp/verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Vérifier le code et ouvrir une session',
    description:
      "Crée le compte s'il n'existe pas. Le statut renvoyé indique si le profil reste à compléter.",
  })
  @ApiResponse({ status: 200, type: AuthTokensResponse })
  async verifyOtp(
    @Body() dto: VerifyOtpDto,
    @Req() request: Request,
  ): Promise<AuthTokensResponse> {
    const result = await this.auth.verifyOtp(dto, this.contextOf(request));
    return { ...result, status: result.status };
  }

  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Renouveler les jetons',
    description:
      'Rotation systématique. Un jeton déjà utilisé déclenche la révocation de toutes les sessions du compte.',
  })
  refresh(
    @Body() dto: RefreshTokenDto,
    @Req() request: Request,
  ): Promise<Omit<AuthTokensResponse, 'status' | 'isNewAccount'>> {
    return this.auth.refresh(dto.refreshToken, this.contextOf(request));
  }

  @Public()
  @Post('referral/validate')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Vérifier un code de parrainage avant inscription' })
  validateReferral(@Body() dto: ValidateReferralDto) {
    return this.referrals.validateCode(dto.code);
  }

  @ApiBearerAuth()
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Fermer la session courante' })
  logout(@CurrentUser('sid') sessionId: string): Promise<void> {
    return this.auth.logout(sessionId);
  }

  @ApiBearerAuth()
  @Delete('sessions')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fermer toutes les sessions du compte' })
  logoutAll(@CurrentUser('sub') userId: string) {
    return this.auth.logoutAll(userId);
  }

  @ApiBearerAuth()
  @Get('sessions')
  @ApiOperation({ summary: 'Lister les appareils connectés' })
  listSessions(
    @CurrentUser('sub') userId: string,
    @CurrentUser('sid') sessionId: string,
  ) {
    return this.auth.listSessions(userId, sessionId);
  }

  /**
   * L'application tourne derrière Cloudflare : l'adresse réelle arrive dans
   * `x-forwarded-for`, `request.ip` ne renvoie que l'IP du proxy.
   */
  private contextOf(request: Request) {
    const forwarded = request.headers['x-forwarded-for'];
    const ipAddress =
      (Array.isArray(forwarded) ? forwarded[0] : forwarded)
        ?.split(',')[0]
        ?.trim() ?? request.ip;

    return {
      ipAddress,
      userAgent: request.headers['user-agent'],
    };
  }
}
