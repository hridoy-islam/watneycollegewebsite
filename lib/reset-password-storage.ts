/**
 * The password reset runs across three pages (email -> OTP -> new password),
 * so the little that has to survive a navigation is parked in localStorage
 * under these keys and cleared as soon as the password has been changed.
 */
export const RESET_EMAIL_KEY = 'watney_reset_email';
/** '' for staff/agents (Users), 'applicant' for the applicant collection. */
export const RESET_ROLE_KEY = 'watney_reset_role';
/** The decoded account + reset token handed back by `/auth/validate`. */
export const RESET_ACCOUNT_KEY = 'watney_reset_account';

export const clearResetStorage = () => {
  [RESET_EMAIL_KEY, RESET_ROLE_KEY, RESET_ACCOUNT_KEY].forEach((key) =>
    localStorage.removeItem(key)
  );
};
