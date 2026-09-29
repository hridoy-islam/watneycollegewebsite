'use client';

import {
  ApplicationFormShell,
  type ApplicationFormProps
} from '@/components/application/application-form-shell';
import { HOME_STEPS } from './steps';

/**
 * The home student application form. The applicant fills it in from the course
 * page and an agent fills it in from the portal - both render this, so there
 * is only ever one home form.
 */
export function HomeApplicationForm(props: ApplicationFormProps) {
  return (
    <ApplicationFormShell variant="home" steps={HOME_STEPS} {...props} />
  );
}

export default HomeApplicationForm;
