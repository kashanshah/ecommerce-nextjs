import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchForm } from '../../components/page-search-box/search-form';
import { updateConfig, updateIsMobileMenuActive } from '../../redux/common-slice';
import Link from 'next/link';
import { Image } from 'antd';

export const MobileHeader = () => {
  const { isMobileMenuActive } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();

  return (
    <>
      <div className='xts-header-col xts-start xts-mobile' onClick={() => dispatch(updateIsMobileMenuActive(true))}>
        <div className='xts-header-mobile-burger xts-header-el xts-style-icon'>
          <a href='#'>
            <span className='xts-header-el-icon'></span>

            <span className='xts-header-el-label'>Menu </span>
          </a>
        </div>
      </div>

      <div className='xts-header-col xts-center xts-mobile'>
        <div className='xts-logo xts-sticky-logo'>
          <Link href='/home' rel='home'>
            <a>
              <Image
                className='xts-logo-main'
                src='/wp-content/uploads/2022/07/56654e7e-7918-402d-823f-d9b25b6c466c-400x167.png'
                alt='Hurf'
                style={{ maxWidth: 150 }}
                preview={false}
              />
              <Image
                className='xts-logo-second'
                src='/wp-content/uploads/2022/07/56654e7e-7918-402d-823f-d9b25b6c466c-400x167.png'
                alt='Hurf'
                style={{ maxWidth: 150 }}
                preview={false}
              />
            </a>
          </Link>
        </div>
      </div>

      <div className='xts-header-col xts-end xts-mobile'>
        <div className='xts-header-cart xts-header-el xts-design-design-1 xts-style-icon xts-opener'>
          <a href='#' onClick={() => dispatch(updateConfig({ isMiniCartActive: true }))}>
            <span className='xts-header-el-icon xts-icon-bag'></span>

            <span className='xts-header-el-label'>
              <span className='xts-cart-divider'>/</span>
              <span className='xts-cart-subtotal'>
                <span className='woocommerce-Price-amount amount'>
                  <bdi>
                    <span className='woocommerce-Price-currencySymbol'>&#8360;</span>&nbsp;119
                  </bdi>
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>

      {/*MOBILE DRAWER STARTS*/}
      <div className={`xts-side-mobile xts-side-hidden xts-side-left ${isMobileMenuActive ? 'xts-opened' : ''}`}>
        <div className='xts-search-wrapper xts-search-form'>
          <SearchForm className='searchform xts-style-icon-alt xts-ajax-search' />

          <div className='xts-search-results-wrapper xts-scroll'>
            <div className='xts-search-results xts-scroll-content' />
          </div>
        </div>
        <ul id='menu-mobile-menu' className='menu xts-nav xts-nav-mobile xts-direction-v xts-mobile-pages xts-active'>
          <li
            id='menu-item-4275'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4275 item-level-0 xts-event-hover'
          >
            <a href='https://hurf.pk/shop/' className='xts-nav-link'>
              <span className='xts-nav-text'>Shop</span>
            </a>
          </li>
          <li
            id='menu-item-4290'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4290 item-level-0 xts-event-hover'
          >
            <a href='https://hurf.pk/about/' className='xts-nav-link'>
              <span className='xts-nav-text'>About</span>
            </a>
          </li>
          <li
            id='menu-item-4291'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4291 item-level-0 xts-event-hover'
          >
            <a href='https://hurf.pk/contact-us/' className='xts-nav-link'>
              <span className='xts-nav-text'>Contact Us</span>
            </a>
          </li>

          <li className='xts-menu-item-wishlist xts-menu-item-with-icon'>
            <a href='https://hurf.pk/wishlist/' className='xts-nav-link'>
              <span className='xts-nav-text'>Wishlist </span>
            </a>
          </li>

          <li className='xts-menu-item-compare xts-menu-item-with-icon'>
            <a href='https://hurf.pk/compare/' className='xts-nav-link'>
              <span className='xts-nav-text'>Compare </span>
            </a>
          </li>

          <li className='xts-menu-item-account xts-menu-item-with-icon xts-opener'>
            <a href='https://hurf.pk/my-account/' className='xts-nav-link'>
              <span className='xts-nav-text'>Login / Register </span>
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`xts-close-side xts-fill  ${isMobileMenuActive ? 'xts-opened' : ''}`}
        onClick={() => dispatch(updateIsMobileMenuActive(false))}
      />
      {/*MOBILE DRAWER ENDS*/}

      {/*BOTTOM STICKY BUTTONS STARTS*/}
      <ul className='xts-sticky-navbar xts-with-text'>
        <li className='xts-navbar-shop'>
          <Link href='/shop'>
            <a>
              <span className='xts-navbar-icon'></span>
              <span className='xts-navbar-text'>Shop </span>
            </a>
          </Link>
        </li>
        <li className='xts-navbar-wishlist'>
          <Link href='/wishlist'>
            <a>
              <span className='xts-navbar-icon'></span>
              <span className='xts-navbar-text'>Wishlist </span>
            </a>
          </Link>
        </li>
        <li className='xts-navbar-compare'>
          <Link href='/compare/'>
            <a>
              <span className='xts-navbar-icon'></span>
              <span className='xts-navbar-text'>Compare </span>
            </a>
          </Link>
        </li>
        <li className='xts-navbar-my-account xts-opener'>
          <Link href='/my-account'>
            <a>
              <span className='xts-navbar-icon'></span>
              <span className='xts-navbar-text'>Account </span>
            </a>
          </Link>
        </li>
      </ul>
      {/*BOTTOM STICKY BUTTONS ENDS*/}
    </>
  );
};
