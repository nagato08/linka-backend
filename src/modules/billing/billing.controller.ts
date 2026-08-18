import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { BoostService } from './boost.service';
import { CreditLedgerService } from './credit-ledger.service';
import { EntitlementService } from './entitlement.service';
import { PurchaseService } from './purchase.service';
import {
  ActivateBoostDto,
  InitiatePaymentDto,
  ProductQueryDto,
  PurchaseWithCreditsDto,
} from './dto/billing.dto';

@ApiTags('billing')
@ApiBearerAuth()
@Controller('billing')
export class BillingController {
  constructor(
    private readonly purchases: PurchaseService,
    private readonly ledger: CreditLedgerService,
    private readonly entitlements: EntitlementService,
    private readonly boosts: BoostService,
  ) {}

  @Get('products')
  @ApiOperation({ summary: 'Catalogue' })
  products(@Query() query: ProductQueryDto) {
    return this.purchases.listProducts(query.type);
  }

  @Get('balance')
  @ApiOperation({ summary: 'Solde de pièces' })
  async balance(@CurrentUser('sub') userId: string) {
    return { balance: await this.ledger.balanceOf(userId) };
  }

  @Get('ledger')
  @ApiOperation({ summary: 'Historique des mouvements de pièces' })
  history(@CurrentUser('sub') userId: string) {
    return this.ledger.history(userId);
  }

  @Get('entitlements')
  @ApiOperation({ summary: 'Droits actifs' })
  entitlementList(@CurrentUser('sub') userId: string) {
    return this.entitlements.listActive(userId);
  }

  @Get('purchases')
  @ApiOperation({ summary: 'Historique des achats' })
  purchaseHistory(@CurrentUser('sub') userId: string) {
    return this.purchases.listPurchases(userId);
  }

  @Post('payments')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Payer en mobile money',
    description:
      "Packs de pièces et abonnements uniquement. L'utilisateur confirme ensuite avec son code PIN sur son téléphone — ce qui vérifie son numéro au passage.",
  })
  initiatePayment(
    @CurrentUser('sub') userId: string,
    @Body() dto: InitiatePaymentDto,
  ) {
    return this.purchases.initiatePayment(
      userId,
      dto.sku,
      dto.payerPhone,
      dto.idempotencyKey,
    );
  }

  @Post('purchases')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Acheter avec des pièces',
    description:
      'Débit et livraison dans la même transaction : débiter sans livrer vole l’utilisateur, livrer sans débiter vole la plateforme.',
  })
  purchaseWithCredits(
    @CurrentUser('sub') userId: string,
    @Body() dto: PurchaseWithCreditsDto,
  ) {
    return this.purchases.purchaseWithCredits(userId, dto.sku);
  }

  @Post('boosts')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Activer un boost',
    description:
      'Mis en file si la ville a atteint son plafond de boosts simultanés — vendre une visibilité qui n’existe pas obligerait à rembourser.',
  })
  activateBoost(
    @CurrentUser('sub') userId: string,
    @Body() dto: ActivateBoostDto,
  ) {
    return this.boosts.activate(userId, dto.sku);
  }

  @Get('boosts')
  @ApiOperation({ summary: 'Historique des boosts' })
  boostHistory(@CurrentUser('sub') userId: string) {
    return this.boosts.history(userId);
  }

  @Get('boosts/:id')
  @ApiOperation({
    summary: 'Résultats d’un boost',
    description:
      'C’est ce retour chiffré qui déclenche le rachat, bien plus que le boost lui-même.',
  })
  boostStats(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) boostId: string,
  ) {
    return this.boosts.stats(userId, boostId);
  }
}
