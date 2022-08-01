import React from 'react';
import { Skeleton } from '../skeleton';

type BestSellerHeaderProps = {
  categories: any[];
  isLoading?: boolean;
  activeTabId?: string;
  onChange: (id: string) => void;
};

export const BestSellerHeader = (props: BestSellerHeaderProps) => {
  const { categories, isLoading, onChange, activeTabId } = props;

  if (isLoading) {
    return (
      <div className='product_tab_btn d-flex'>
        <ul className='nav' id='myTab' role='tablist'>
          <li>
            <Skeleton style={{ width: 30 }} />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className='xts-nav-wrapper xts-nav-tabs-wrapper xts-mb-action-swipe'>
        <ul className='xts-nav xts-nav-tabs xts-style-underline xts-icon-left'>
          {categories?.map((category, index) => {
            return (
              <li
                key={`${category.id}-${index}`}
                className={`xts-products-tab-title ${activeTabId === category.id ? 'xts-active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <a onClick={() => onChange(category.id)} className='xts-nav-link'>
                  <span className='xts-nav-text'>{category?.name}</span>
                </a>
              </li>
            );
          })}
          <li className='xts-products-tab-title xts-active'>
            <a className='xts-nav-link' href='/shop'>
              <span className='xts-nav-text'>All Product</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='xts-tabs-loader' />
    </>
  );
};
