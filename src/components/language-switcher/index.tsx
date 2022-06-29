import { constants } from '../../utils/constants';
import { trans } from '../../utils/trans';
import React from 'react';
import { useRouter } from 'next/router';

export const LanguageSwitcher = (props: { className?: string }) => {
  const { className = 'dropdown_language' } = props;
  const router = useRouter();
  const { pathname } = router;

  return (
    <ul className={className}>
      {Object.entries(constants?.languages)?.map(([key, val], index) => {
        return (
          <li key={index}>
            <a>
              <span
                onClick={() => {
                  window.location.href = `/${key + pathname}`;
                }}
              >
                {trans(val)}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
