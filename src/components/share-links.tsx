import React from 'react';
import ShareUrl from 'share-url';

export const ShareLinks = (props: { url: string; text?: string; className?: string }) => {
  const { url, text = '', ...rest } = props;
  return (
    <ul {...rest}>
      <li>
        <a target='_blank' href={ShareUrl.twitter({ text: text, url: url })} rel='noreferrer'>
          <i className='ion-social-twitter' />
        </a>
      </li>
      <li>
        <a target='_blank' href={ShareUrl.facebook({ u: url })} rel='noreferrer'>
          <i className='ion-social-facebook' />
        </a>
      </li>
      <li>
        <a target='_blank' href={ShareUrl.email({ subject: text, body: url, to: '' })} rel='noreferrer'>
          <i className='ion-ios-email' />
        </a>
      </li>
      <li>
        <a target='_blank' href={ShareUrl.pinterest({ description: text, url: url })} rel='noreferrer'>
          <i className='ion-social-pinterest' />
        </a>
      </li>
      <li>
        <a target='_blank' href={ShareUrl.linkedin({ url: url })} rel='noreferrer'>
          <i className='ion-social-linkedin' />
        </a>
      </li>
      <li>
        <a target='_blank' href={ShareUrl.reddit({ title: text, url: url })} rel='noreferrer'>
          <i className='ion-social-reddit' />
        </a>
      </li>
    </ul>
  );
};
