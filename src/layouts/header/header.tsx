import React, { useState } from 'react';
import NextHead from 'next/head';
import { constants } from '../../utils/constants';
import { trans } from '../../utils/trans';
import { useRouter } from 'next/router';
import { MiniCart } from '../../components/mini-cart';
import { useDispatch } from 'react-redux';
import { updateConfig, updateIsSearchOpen } from '../../redux/common-slice';
import Link from 'next/link';
import { Image } from 'antd';
import { MobileHeader } from './mobile-header';

type HeaderProps = {
  [key: string]: any;
  children?: React.ReactElement;
};

export const Header = (props: HeaderProps) => {
  const { title, description, keywords, robots, language, author } = props;
  const { pathname, locale } = useRouter();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NextHead>
        <title>{title || trans(constants?.seo?.title)}</title>
        <meta name='title' content={title || trans(constants?.seo?.title)} />
        <meta name='description' content={description || trans(constants?.seo?.description)} />
        <meta name='keywords' content={keywords || trans(constants?.seo?.keywords)} />
        <meta name='robots' content={robots || trans(constants?.seo?.robots)} />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content={language || locale} />
        <meta name='author' content={author || trans(constants?.seo?.author)} />

        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:locale' content={locale} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title || trans(constants?.seo?.title)} />
        <meta property='og:url' content={pathname} />
        <meta property='og:site_name' content={trans(constants?.seo?.title)} />
        <meta property='og:image' content='#' />
        <meta property='og:description' content={description || trans(constants?.seo?.description)} />
      </NextHead>

      <MiniCart />

      <header className='xts-header xts-with-shadow xts-scroll-stick xts-sticky-real'>
        <div className='xts-header-main xts-header-inner'>
          <div className='xts-header-row xts-general-header xts-sticky-on xts-without-bg xts-layout-equal-sides'>
            <div className='container'>
              <div className='xts-header-row-inner'>
                <div className='xts-header-col xts-start xts-desktop'>
                  <div className='xts-header-nav-wrapper xts-nav-wrapper xts-textalign-left'>
                    <ul
                      id='menu-main-menu-simple'
                      className='menu xts-nav xts-nav-main xts-direction-h xts-style-default xts-gap-m'
                    >
                      <li
                        id='menu-item-4274'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4274 item-level-0 xts-item-mega-menu xts-event-hover'
                      >
                        <Link href='/shop' className='xts-nav-link'>
                          <a>
                            <span className='xts-nav-text'>Shop</span>
                          </a>
                        </Link>
                      </li>
                      <li
                        id='menu-item-4353'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4353 item-level-0 xts-event-hover'
                      >
                        <Link href='/about' className='xts-nav-link'>
                          <a>
                            <span className='xts-nav-text'>About</span>
                          </a>
                        </Link>
                      </li>
                      <li
                        id='menu-item-4247'
                        className='menu-item menu-item-type-post_type menu-item-object-page menu-item-4247 item-level-0 xts-event-hover'
                      >
                        <Link href='/contact' className='xts-nav-link'>
                          <a>
                            <span className='xts-nav-text'>Contacts</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='xts-header-col xts-center xts-desktop'>
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

                <div className='xts-header-col xts-end xts-desktop'>
                  <div className='xts-header-my-account xts-header-el xts-style-icon xts-opener'>
                    <a href='/my-account/'>
                      <span className='xts-header-el-icon'></span>

                      <span className='xts-header-el-label'>Login / Register </span>
                    </a>
                  </div>

                  <div className='xts-header-wishlist xts-header-el xts-style-icon xts-design-count-text'>
                    <a href='/wishlist/'>
                      <span className='xts-header-el-icon xts-icon-default'>
                        <span className='xts-wishlist-count'>0 </span>
                      </span>

                      <span className='xts-header-el-label'>Wishlist </span>
                    </a>
                  </div>

                  <div className='xts-header-compare xts-header-el xts-style-icon xts-design-count-text'>
                    <Link href='/compare'>
                      <>
                        <span className='xts-header-el-icon xts-icon-default'>
                          <span className='xts-compare-count'>0 </span>
                        </span>
                        <span className='xts-header-el-label'>Compare </span>
                      </>
                    </Link>
                  </div>

                  <div className='xts-header-cart xts-header-el xts-design-default xts-style-icon-text xts-opener'>
                    <a href='#' onClick={() => dispatch(updateConfig({ isMiniCartActive: true }))}>
                      <span className='xts-header-el-icon xts-icon-cart'></span>

                      <span className='xts-header-el-label'>
                        <span className='xts-cart-count'>
                          1<span>item </span>
                        </span>

                        <span className='xts-cart-divider'>/</span>
                        <span className='xts-cart-subtotal'>
                          <span className='woocommerce-Price-amount amount'>
                            <bdi>
                              <span className='woocommerce-Price-currencySymbol'>&#8360;</span>&nbsp;119
                            </bdi>
                          </span>{' '}
                        </span>
                      </span>
                    </a>
                  </div>

                  <div className='xts-header-search xts-header-el xts-display-full-screen xts-style-icon'>
                    <a href='#' onClick={() => dispatch(updateIsSearchOpen(true))}>
                      <span className='xts-header-el-icon'></span>

                      <span className='xts-header-el-label'>Search </span>
                    </a>
                  </div>
                </div>

                <MobileHeader />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
