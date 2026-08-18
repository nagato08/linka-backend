import { Global, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { BillingController } from './billing.controller';
import { BoostService } from './boost.service';
import { CreditLedgerService } from './credit-ledger.service';
import { EntitlementService } from './entitlement.service';
import { PurchaseService } from './purchase.service';
import { WebhookController } from './webhook.controller';
import { NotchPayProvider } from './providers/notchpay.provider';

/**
 * Facturation.
 *
 * Global : le parrainage, les swipes, le chat et les événements consomment ou
 * créditent des pièces. Les faire tous importer un module dédié n'apporterait
 * rien qu'un enchevêtrement d'imports.
 */
@Global()
@Module({
  imports: [AuthModule],
  controllers: [BillingController, WebhookController],
  providers: [
    CreditLedgerService,
    EntitlementService,
    PurchaseService,
    BoostService,
    NotchPayProvider,
  ],
  exports: [
    CreditLedgerService,
    EntitlementService,
    PurchaseService,
    BoostService,
  ],
})
export class BillingModule {}
