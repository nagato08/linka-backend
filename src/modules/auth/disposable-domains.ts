/**
 * Domaines d'adresses jetables refusés à l'inscription.
 *
 * Depuis le passage à l'authentification par e-mail, c'est la seule chose qui
 * empêche la création de comptes en masse au niveau de l'identifiant : ces
 * services fournissent une boîte fonctionnelle en une seconde, sans
 * inscription et sans limite.
 *
 * Liste volontairement courte et maintenue à la main. Les listes exhaustives
 * comptent des dizaines de milliers d'entrées, se périment vite et finissent
 * par bloquer des adresses légitimes. Celle-ci couvre les services les plus
 * utilisés ; le vrai rempart reste l'attestation d'intégrité de l'appareil.
 */
export const DISPOSABLE_EMAIL_DOMAINS = new Set([
  '0-mail.com',
  '10minutemail.com',
  '10minutemail.net',
  '20minutemail.com',
  '33mail.com',
  'anonbox.net',
  'byom.de',
  'dispostable.com',
  'emailondeck.com',
  'fakeinbox.com',
  'getairmail.com',
  'getnada.com',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'inboxbear.com',
  'incognitomail.com',
  'jetable.org',
  'mailcatch.com',
  'maildrop.cc',
  'mailinator.com',
  'mailnesia.com',
  'mailsac.com',
  'mintemail.com',
  'mohmal.com',
  'moakt.com',
  'mytemp.email',
  'nowmymail.com',
  'sharklasers.com',
  'spam4.me',
  'spamgourmet.com',
  'tempail.com',
  'temp-mail.io',
  'temp-mail.org',
  'tempinbox.com',
  'tempmail.com',
  'tempmail.net',
  'tempmailo.com',
  'throwawaymail.com',
  'trashmail.com',
  'trashmail.de',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
]);
