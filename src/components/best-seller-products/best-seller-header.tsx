import Link from 'next/link';
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
    <div className='product_tab_btn d-flex'>
      <ul className='nav' id='myTab' role='tablist'>
        {categories?.map((category, index) => {
          return (
            <li key={`${category.id}-${index}`}>
              <a
                data-bs-toggle='tab'
                onClick={() => onChange(category.id)}
                role='tab'
                aria-controls={category.id}
                aria-selected='false'
                className={activeTabId === category.id && ' active'}
              >
                {category.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='all_product'>
        <Link href='/shop'>All Product</Link>
      </div>
    </div>
  );
};
