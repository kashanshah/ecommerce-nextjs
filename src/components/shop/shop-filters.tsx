import React from 'react';
import { Select } from 'antd';
import { Skeleton } from '../skeleton';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateConfig } from '../../redux/common-slice';
import { toast } from 'react-toastify';
import update = toast.update;

type ShopFiltersProps = {
  totalProducts?: number;
  isLoading?: boolean;
};

export const ShopFilters = (props: ShopFiltersProps) => {
  const { totalProducts, isLoading } = props;
  const dispatch = useDispatch();

  const { orderBy, isGridListing } = useSelector((state: RootState) => state.common);

  return (
    <div className='shop_toolbar_wrapper d-flex justify-content-between align-items-center'>
      <div className='page_amount'>
        {isLoading ? (
          <div>
            <Skeleton style={{ margin: 0, width: 170 }} />
          </div>
        ) : (
          <p>
            <span>{totalProducts}</span> Products Found
          </p>
        )}
      </div>
      <div className=' sorting_by d-flex align-items-center'>
        <span style={{ marginInlineEnd: 15 }}>SORT BY :</span>
        <form className='select_option' action='#'>
          <Select
            id='short'
            style={{ minWidth: 170 }}
            value={orderBy.join(',')}
            onChange={(val) => {
              dispatch(updateConfig({ orderBy: val.split(',') }));
            }}
          >
            <Select.Option value={'popularity,desc'}>Popularity</Select.Option>
            <Select.Option value={'price,desc'}>Price: High to Low</Select.Option>
            <Select.Option value={'price,asc'}>Price: Low to High</Select.Option>
            <Select.Option value={'rating,desc'}>Rating: High to Low</Select.Option>
            <Select.Option value={'rating,asc'}>Rating: Low to High</Select.Option>
            <Select.Option value={'date,desc'}>Date</Select.Option>
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
              <a
                onClick={() => dispatch(updateConfig({ isGridListing: true }))}
                className={`btn-grid-3 ${isGridListing && ' active'}`}
              >
                <i className='ion-grid' />
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(updateConfig({ isGridListing: false }))}
                className={`btn-list ${!isGridListing && ' active'}`}
              >
                <i className='ion-navicon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
