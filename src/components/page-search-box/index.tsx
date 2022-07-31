import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateIsSearchOpen } from '../../redux/common-slice';
import { SearchForm } from './search-form';

export const PageSearchBox = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state: RootState) => state.common.isSearchOpen);
  const closeSearch = () => {
    dispatch(updateIsSearchOpen(false));
  };

  return (
    <>
      <div className={`xts-search-wrapper xts-search-full-screen ${isSearchOpen ? 'xts-opened' : ''}`}>
        <div className='container'>
          <div className='xts-search-close xts-action-btn xts-style-inline' onClick={closeSearch}>
            <a href='#'>Close </a>
          </div>

          <div className='xts-search-info'>Start typing to see products you are looking for. </div>

          <SearchForm className={'searchform xts-style-icon-alt xts-ajax-search'} />

          <div className='xts-search-results-wrapper xts-scroll'>
            <div className='xts-search-results xts-scroll-content' />
          </div>
        </div>
      </div>
      <div className={`xts-close-side xts-fill ${isSearchOpen ? 'xts-opened' : ''}`} onClick={closeSearch} />
    </>
  );
};
