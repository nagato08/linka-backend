import { AppLocale, NotificationType } from '../../generated/prisma/enums';

export interface NotificationTemplate {
  title: string;
  body: string;
}

type TemplateBuilder = (vars: Record<string, string>) => NotificationTemplate;

/**
 * Libellés des notifications, en français et en anglais.
 *
 * Écrits en dur plutôt que lus en base : ils sont rendus au moment de l'envoi,
 * dans la langue de la personne, et un aller-retour vers `translation_keys`
 * pour chaque notification n'apporterait qu'une latence. La table reste utile
 * aux contenus que le produit fait évoluer sans redéploiement.
 *
 * Deux règles de rédaction :
 *
 *   - le prénom figure toujours dans le titre — une notification anonyme
 *     n'est jamais ouverte ;
 *   - le contenu du message n'est jamais repris. Un aperçu de conversation
 *     s'affiche sur un écran verrouillé, et sur ce produit ce qui s'y écrit
 *     peut être intime.
 */
const TEMPLATES: Partial<
  Record<NotificationType, Record<AppLocale, TemplateBuilder>>
> = {
  NEW_MATCH: {
    FR: (v) => ({
      title: `Nouveau match avec ${v.firstName} 🎉`,
      body: 'Lancez la conversation avant que l’élan ne retombe.',
    }),
    EN: (v) => ({
      title: `You matched with ${v.firstName} 🎉`,
      body: 'Start the conversation while the moment lasts.',
    }),
  },

  NEW_MESSAGE: {
    FR: (v) => ({
      title: `${v.firstName} vous a écrit`,
      body: 'Appuyez pour lire le message.',
    }),
    EN: (v) => ({
      title: `${v.firstName} sent you a message`,
      body: 'Tap to read it.',
    }),
  },

  NEW_LIKE: {
    FR: () => ({
      title: 'Quelqu’un vous a liké 👀',
      body: 'Découvrez qui, c’est gratuit.',
    }),
    EN: () => ({
      title: 'Someone liked you 👀',
      body: 'See who — it’s free.',
    }),
  },

  EVENT_REQUEST: {
    FR: (v) => ({
      title: `${v.firstName} veut rejoindre « ${v.eventTitle} »`,
      body: 'Consultez son profil et répondez.',
    }),
    EN: (v) => ({
      title: `${v.firstName} wants to join “${v.eventTitle}”`,
      body: 'Check their profile and reply.',
    }),
  },

  EVENT_ACCEPTED: {
    FR: (v) => ({
      title: `Vous participez à « ${v.eventTitle} » ✅`,
      body: 'Le lieu et le groupe sont maintenant accessibles.',
    }),
    EN: (v) => ({
      title: `You're in for “${v.eventTitle}” ✅`,
      body: 'The location and group chat are now available.',
    }),
  },

  EVENT_REMINDER: {
    FR: (v) => ({
      title: `« ${v.eventTitle} », c’est bientôt`,
      body: `Rendez-vous ${v.when} à ${v.place}.`,
    }),
    EN: (v) => ({
      title: `“${v.eventTitle}” is coming up`,
      body: `See you ${v.when} at ${v.place}.`,
    }),
  },

  VERIFICATION_RESULT: {
    FR: (v) =>
      v.approved === 'true'
        ? {
            title: 'Profil vérifié ✓',
            body: 'Votre badge est actif. Vous apparaissez désormais en priorité.',
          }
        : {
            title: 'Vérification refusée',
            body: 'Réessayez en suivant bien la pose demandée.',
          },
    EN: (v) =>
      v.approved === 'true'
        ? {
            title: 'Profile verified ✓',
            body: 'Your badge is active. You now appear with priority.',
          }
        : {
            title: 'Verification failed',
            body: 'Try again, following the requested pose closely.',
          },
  },

  /**
   * Un paiement ne livre pas toujours des pièces : un abonnement n'en accorde
   * aucune, et annoncer « 0 pièces ajoutées » à quelqu'un qui vient de payer
   * son abonnement passerait pour un débit sans contrepartie.
   */
  PAYMENT_RESULT: {
    FR: (v) =>
      v.success === 'true'
        ? {
            title: 'Paiement confirmé',
            body:
              v.credits && v.credits !== '0'
                ? `${v.credits} pièces ont été ajoutées à votre solde.`
                : `${v.item ?? 'Votre achat'} est actif sur votre compte.`,
          }
        : {
            title: 'Paiement non abouti',
            body: 'Aucun montant n’a été débité. Vous pouvez réessayer.',
          },
    EN: (v) =>
      v.success === 'true'
        ? {
            title: 'Payment confirmed',
            body:
              v.credits && v.credits !== '0'
                ? `${v.credits} coins were added to your balance.`
                : `${v.itemEn ?? v.item ?? 'Your purchase'} is now active on your account.`,
          }
        : {
            title: 'Payment failed',
            body: 'Nothing was charged. You can try again.',
          },
  },

  BOOST_ENDED: {
    FR: (v) => ({
      title: 'Votre boost est terminé',
      body: `${v.impressions} vues et ${v.likes} likes obtenus.`,
    }),
    EN: (v) => ({
      title: 'Your boost has ended',
      body: `${v.impressions} views and ${v.likes} likes.`,
    }),
  },

  MODERATION: {
    FR: (v) => ({
      title: 'Message de la modération',
      body: v.message ?? 'Consultez l’application pour plus de détails.',
    }),
    EN: (v) => ({
      title: 'Message from moderation',
      body: v.message ?? 'Open the app for details.',
    }),
  },
};

/**
 * Rend le libellé dans la langue voulue.
 *
 * Repli sur le français quand un type n'a pas de modèle : mieux vaut une
 * notification générique qu'aucune notification, et l'absence se voit
 * immédiatement dans les journaux.
 */
export function renderTemplate(
  type: NotificationType,
  locale: AppLocale,
  vars: Record<string, string> = {},
): NotificationTemplate {
  const builder = TEMPLATES[type]?.[locale] ?? TEMPLATES[type]?.FR;

  if (!builder) {
    return {
      title: 'Linka',
      body: 'Vous avez une nouvelle notification.',
    };
  }

  return builder(vars);
}
