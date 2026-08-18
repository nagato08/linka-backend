import {
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import type { Request } from 'express';
import { Public } from '../auth/decorators/auth.decorators';
import { NotchPayProvider } from './providers/notchpay.provider';
import { PurchaseService } from './purchase.service';

interface RawBodyRequest extends Request {
  rawBody?: Buffer;
}

/**
 * Rappels de paiement.
 *
 * Route publique — le prestataire n'a pas de jeton — mais la signature est
 * vérifiée avant toute lecture du contenu. Sans elle, n'importe qui pourrait
 * poster un « paiement réussi » et se créditer gratuitement.
 *
 * La vérification porte sur le corps BRUT : reparser puis re-sérialiser le
 * JSON change l'ordre des clés et l'espacement, ce qui invalide la signature.
 */
@ApiExcludeController()
@Controller('billing/webhooks')
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  constructor(
    private readonly notchpay: NotchPayProvider,
    private readonly purchases: PurchaseService,
  ) {}

  @Public()
  @Post('notchpay')
  @HttpCode(HttpStatus.OK)
  async notchpayWebhook(
    @Req() request: RawBodyRequest,
    @Headers('x-notch-signature') signature?: string,
  ) {
    const rawBody = request.rawBody?.toString('utf8');

    if (!rawBody) {
      throw new UnauthorizedException('Corps de requête absent');
    }

    const event = this.notchpay.parseWebhook(rawBody, signature);

    if (!event) {
      // 401 plutôt que 400 : la requête est bien formée, c'est son
      // authenticité qui manque.
      throw new UnauthorizedException('Signature invalide');
    }

    await this.purchases.settlePayment(
      event.reference,
      event.status,
      event.raw,
    );

    // Toujours 200 après traitement : un code d'erreur ferait rejouer le
    // webhook en boucle par le prestataire, alors que l'événement a bien été
    // pris en compte.
    return { received: true };
  }
}
