import React, { RefObject } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { constants } from '../../utils/constants';

type GoogleRecaptchaProps = {
  siteKey: string;
  onChange?: (value?: string) => void;
  reference?: RefObject<null>;
};
export const GoogleRecaptcha = (props: GoogleRecaptchaProps) => {
  const { siteKey, onChange, reference } = props;

  if (!constants?.recaptcha?.siteKey) {
    return null;
  }

  return <ReCAPTCHA sitekey={siteKey} onChange={onChange} ref={reference} />;
};
