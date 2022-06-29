import React, { useState } from 'react';
import { Select } from 'antd';

type ShopFiltersProps = {
  totalProducts?: number;
};

export const ShopFilters = (props: ShopFiltersProps) => {
  const { totalProducts } = props;

  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className='shop_toolbar_wrapper d-flex justify-content-between align-items-center'>
      <div className='page_amount'>
        <p>
          <span>{totalProducts}</span> Products Found
        </p>
      </div>
      <div className=' sorting_by d-flex align-items-center'>
        <span style={{ marginInlineEnd: 15 }}>SORT BY :</span>
        <form className='select_option' action='#'>
          <Select id='short' style={{ minWidth: 170 }} defaultValue={'popularity'}>
            <Select.Option value='popularity'>Popularity</Select.Option>
            <Select.Option value='price-asc'>Price: Low to High</Select.Option>
            <Select.Option value='price-desc'>Price: High to Low</Select.Option>
          </Select>
        </form>
      </div>
      <div className='toolbar_btn_wrapper d-flex align-items-center'>
        <div className='view_btn'>
          <a className='view' href='#'>
            VIEW
          </a>
        </div>
        <div className='shop_toolbar_btn'>
          <ul className='d-flex align-items-center'>
            <li>
              <a onClick={() => setIsGrid(true)} className={`btn-grid-3 ${isGrid && ' active'}`}>
                <i className='ion-grid' />
              </a>
            </li>
            <li>
              <a onClick={() => setIsGrid(false)} className={`btn-list ${!isGrid && ' active'}`}>
                <i className='ion-navicon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
