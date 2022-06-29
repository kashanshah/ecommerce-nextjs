import React from 'react';
import { constants } from '../../utils/constants';

type SocialLinksProps = {
  className?: string;
};

export const SocialLinks = (props: SocialLinksProps) => {
  const { className } = props;

  return (
    <ul className={`d-flex ${className}`}>
      <li>
        <a target='_blank' href={constants?.socialLinks.facebook.link} rel='noreferrer'>
          <i className='icon-social-facebook icons' />
        </a>
      </li>
      <li>
        <a target='_blank' href={constants?.socialLinks.instagram.link} rel='noreferrer'>
          <i className='icon-social-instagram icons' />
        </a>
      </li>
    </ul>
  );
};
