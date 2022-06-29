import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateIsSearchOpen } from '../../redux/common-slice';

export const PageSearchBox = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state: RootState) => state.common.isSearchOpen);

  return (
    <div className={`page_search_box ${isSearchOpen && 'active'}`}>
      <div className='search_close' onClick={() => dispatch(updateIsSearchOpen(false))}>
        <i className='ion-close-round' />
      </div>
      <form className='border-bottom' action='#'>
        <input className='border-0' placeholder='Search products...' type='text' />
        <button type='submit'>
          <span className='icon-magnifier icons' />
        </button>
      </form>
    </div>
  );
};
