import React from 'react';
import Link from 'next/link';
import { constants } from '../../utils/constants';
import { trans } from '../../utils/trans';

type FooterProps = {
  [key: string]: any;
  children?: React.ReactElement;
};

export const Footer = (props: FooterProps) => {
  return (
    <footer className='xts-footer xts-scheme-dark xts-with-widgets'>
      <div className='container'>
        <div className='row row-spacing-bottom-30 xts-footer-widgets'>
          <div className='xts-footer-col col-12 col-sm-6 col-lg-3'>
            <div id='xts-widget-image-16' className='widget xts-footer-widget xts-widget-image xts-widget-collapse'>
              <div className='xts-image-single xts-textalign-left'>
                <figure className='xts-image'>
                  <Link href='/home' className='xts-image-inner'>
                    <a>
                      <img
                        width='750'
                        height='314'
                        src='/wp-content/uploads/2022/07/56654e7e-7918-402d-823f-d9b25b6c466c.png'
                        className='attachment-full size-full'
                        alt=''
                        loading='lazy'
                        srcSet='/wp-content/uploads/2022/07/56654e7e-7918-402d-823f-d9b25b6c466c.png 750w, /wp-content/uploads/2022/07/56654e7e-7918-402d-823f-d9b25b6c466c-400x167.png 400w, /wp-content/uploads/2022/07/56654e7e-7918-402d-823f-d9b25b6c466c-460x193.png 460w, /wp-content/uploads/2022/07/56654e7e-7918-402d-823f-d9b25b6c466c-300x126.png 300w'
                        sizes='(max-width: 750px) 100vw, 750px'
                      />
                    </a>
                  </Link>
                </figure>
              </div>
            </div>
            <div id='text-17' className='widget xts-footer-widget widget_text xts-widget-collapse'>
              <div className='textwidget'>
                <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections.</p>
                <p>111 Wall Stree, USA, New York</p>
                <p>+1 (234) 567 8900</p>
              </div>
            </div>
          </div>
          <div className='xts-footer-col col-12 col-sm-6 col-lg-3'>
            <div id='nav_menu-19' className='widget xts-footer-widget widget_nav_menu xts-widget-collapse'>
              <span className='widget-title title'>
                <span>Information</span>
              </span>
              <div className='menu-information-container'>
                <ul id='menu-information' className='menu'>
                  <li
                    id='menu-item-4257'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-4257'
                  >
                    <a href='#'>Shop</a>
                  </li>
                  <li
                    id='menu-item-4231'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4231'
                  >
                    <a href='https://hurf.pk/contact-us/'>Contact Us</a>
                  </li>
                  <li
                    id='menu-item-4232'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4232'
                  >
                    <a href='https://hurf.pk/about-us/'>About Us</a>
                  </li>
                  <li
                    id='menu-item-4233'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4233'
                  >
                    <a href='https://hurf.pk/privacy-policy/'>Privacy Policy</a>
                  </li>
                  <li
                    id='menu-item-4234'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-4234'
                  >
                    <a href='#'>FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='xts-footer-col col-12 col-sm-6 col-lg-3'>
            <div id='nav_menu-18' className='widget xts-footer-widget widget_nav_menu xts-widget-collapse'>
              <span className='widget-title title'>
                <span>Useful Links</span>
              </span>
              <div className='menu-useful-links-container'>
                <ul id='menu-useful-links' className='menu'>
                  <li
                    id='menu-item-4227'
                    className='menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-4227'
                  >
                    <a href='https://hurf.pk/blog/'>Blog</a>
                  </li>
                  <li
                    id='menu-item-4256'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-4256'
                  >
                    <a href='#'>My Account</a>
                  </li>
                  <li
                    id='menu-item-4228'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4228'
                  >
                    <a href='https://hurf.pk/wishlist/'>Wishlist</a>
                  </li>
                  <li
                    id='menu-item-4229'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4229'
                  >
                    <a href='https://hurf.pk/terms-and-conditions/'>Terms of Service</a>
                  </li>
                  <li
                    id='menu-item-4230'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-4230'
                  >
                    <a href='#'>Purchase Theme</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='xts-footer-col col-12 col-sm-6 col-lg-3'>
            <div id='nav_menu-20' className='widget xts-footer-widget widget_nav_menu xts-widget-collapse'>
              <span className='widget-title title'>
                <span>Categories</span>
              </span>
              <div className='menu-categories-container'>
                <ul id='menu-categories' className='menu'>
                  <li
                    id='menu-item-4238'
                    className='menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-4238'
                  >
                    <a href='https://hurf.pk/product-category/accessories/'>Accessories</a>
                  </li>
                  <li
                    id='menu-item-4237'
                    className='menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-4237'
                  >
                    <a href='https://hurf.pk/product-category/man/'>Man</a>
                  </li>
                  <li
                    id='menu-item-4235'
                    className='menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-4235'
                  >
                    <a href='https://hurf.pk/product-category/woman/'>Woman</a>
                  </li>
                  <li
                    id='menu-item-4236'
                    className='menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-4236'
                  >
                    <a href='https://hurf.pk/product-category/clothing/'>Clothing</a>
                  </li>
                  <li
                    id='menu-item-4239'
                    className='menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-4239'
                  >
                    <Link href='/product-category/kids'>
                      <a>Kids</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='xts-copyrights-wrapper'>
        <div className='container'>
          <div className='row row-spacing-bottom-20 xts-copyrights xts-layout-two_columns'>
            <div className='col-left col-12 col-lg-6'>
              <div id='text-24' className='widget widget_text'>
                <div className='textwidget'>
                  <p>{trans(constants?.copyright)}</p>
                </div>
              </div>
            </div>

            <div className='col-right col-12 col-lg-6'>
              <div id='xts-widget-mega-menu-25' className='widget xts-widget-mega-menu'>
                <div className='xts-mega-menu xts-nav-wrapper xts-textalign-right'>
                  <ul
                    id='menu-copyright-menu'
                    className='menu xts-nav xts-nav-mega  xts-style-default xts-design-horizontal xts-gap-s xts-direction-h'
                  >
                    <li
                      id='menu-item-4226'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4226 item-level-0 xts-event-hover'
                    >
                      <Link href='/contact' className='xts-nav-link'>
                        <a className='xts-nav-text'>Contact Us</a>
                      </Link>
                    </li>
                    <li
                      id='menu-item-4224'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4224 item-level-0 xts-event-hover'
                    >
                      <Link href='/privacy-policy' className='xts-nav-link'>
                        <a className='xts-nav-text'>Privacy Policy</a>
                      </Link>
                    </li>
                    <li
                      id='menu-item-4225'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4225 item-level-0 xts-event-hover'
                    >
                      <Link href='/terms-and-conditions' className='xts-nav-link'>
                        <a className='xts-nav-text'>Terms and Conditions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
