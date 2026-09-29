'use client';

import {
  ApplicationFormShell,
  type ApplicationFormProps
} from '@/components/application/application-form-shell';
import { INTERNATIONAL_STEPS } from './steps';

/**
 * The international student application form. The applicant fills it in from
 * the course page and an agent fills it in from the portal - both render this,
 * so there is only ever one international form.
 */
export function InternationalApplicationForm(props: ApplicationFormProps) {
  return (
    <ApplicationFormShell
      variant="international"
      steps={INTERNATIONAL_STEPS}
      {...props}
    />
  );
}

export default InternationalApplicationForm;
