import React, { useState } from 'react';
import NextHead from 'next/head';
import { constants } from '../../utils/constants';
import { trans } from '../../utils/trans';
import { useRouter } from 'next/router';
import { MiniCart } from '../../components/mini-cart';
import Link from 'next/link';
import { PageSearchBox } from '../../components/page-search-box';
import { useDispatch } from 'react-redux';
import { updateIsSearchOpen } from '../../redux/common-slice';
import { SocialLinks } from '../../components/social-links';
import { LanguageSwitcher } from '../../components/language-switcher';

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

      <header className='header_section'>
        <div className='header_top'>
          <div className='container custom-space'>
            <div className='row'>
              <div className='col-12'>
                <div className='header_top_inner d-flex justify-content-between align-items-sm-center'>
                  <div className='header_contact_info'>
                    <ul className='d-flex'>
                      <li className='text-white'>
                        <i className='icons icon-phone' />{' '}
                        <a href={`tel:${constants?.phone.replaceAll('-', '').replaceAll(' ', '')}`}>
                          {constants?.phone}
                        </a>
                      </li>
                      <li className='text-white'>
                        <i className='icon-envelope-letter icons' />{' '}
                        <a href={`mailto:${constants?.email}`}>{constants?.email}</a>
                      </li>
                    </ul>
                  </div>
                  <div className='free_shipping_text'>
                    <p className='text-white'>Delivery all over Pakistan 🇵🇰</p>
                  </div>
                  <div className='header_top_sidebar d-flex align-items-center'>
                    <div className='d-flex header_social'>
                      <span>Follow us</span>
                      <SocialLinks />
                    </div>
                    <div className='language_currency'>
                      <ul className='d-flex'>
                        <li className='language'>
                          <a href='#'>
                            {locale} <i className='icon-right ion-ios-arrow-down' />
                          </a>
                          <LanguageSwitcher />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='main_header sticky-header'>
          <div className='container custom-space'>
            <div className='row'>
              <div className='col-12'>
                <div className='header_container d-flex justify-content-between align-items-center'>
                  <div className='header_logo cursor-pointer'>
                    <a className='sticky_none '>
                      <Link className='cursor-pointer' href='/home'>
                        <img src='/assets/img/logo/logo.png' alt='' />
                      </Link>
                    </a>
                  </div>
                  <div className='main_menu d-none d-lg-block'>
                    <nav className='position-relative'>
                      <ul className='d-flex'>
                        <li>
                          <Link className='link' href='/home'>
                            <a>home</a>
                          </Link>
                        </li>
                        <li className='megamenu-holder'>
                          <Link href='/shop'>shop</Link>
                          <ul className='sub_menu megamenu'>
                            <li>
                              <span className='title'>Shop Layout</span>
                              <ul>
                                <li>
                                  <Link href='/product-category/decor-4/'>Decor</Link>
                                </li>
                                <li>
                                  <a href='shop-rightsidebar.html'>Right Sidebar</a>
                                </li>
                                <li>
                                  <a href='shop-list-leftsidebar.html'>List Left Sidebar</a>
                                </li>
                                <li>
                                  <a href='shop-list-rightsidebar.html'>List Right Sidebar</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span className='title'>Shop Related</span>
                              <ul>
                                <li>
                                  <a href='cart.html'>Cart</a>
                                </li>
                                <li>
                                  <a href='wishlist.html'>Wishlist</a>
                                </li>
                                <li>
                                  <a href='compare.html'>Compare</a>
                                </li>
                                <li>
                                  <a href='checkout.html'>Checkout</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href='/shop'>sale</Link>
                        </li>
                        <li>
                          <a href='#'>pages</a>
                          <ul className='sub_menu'>
                            <li>
                              <a href='faq.html'>FAQ</a>
                            </li>
                            <li>
                              <a href='404.html'>Error 404</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='blog.html'>blog</a>
                          <ul className='sub_menu'>
                            <li>
                              <a href='blog.html'>Blog Pages</a>
                            </li>
                            <li>
                              <a href='blog-details.html'>Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href='/contact' className='link'>
                            <a>Contact</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className='with-canvas'>
                    <div className='header_account'>
                      <ul className='d-flex'>
                        <li className='header_search'>
                          <a href='#' onClick={() => dispatch(updateIsSearchOpen(true))}>
                            <i className='icon-magnifier icons' />
                          </a>
                        </li>
                        <li className='account_link'>
                          <a href='#'>
                            <i className='icon-user icons' />
                          </a>
                          <ul className='dropdown_account_link'>
                            <li>
                              <a href='my-account.html'>My Account</a>
                            </li>
                            <li>
                              <a href='login-register.html'>Login | Register</a>
                            </li>
                            <li>
                              <Link href='/contact'>
                                <a>Contact</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='wishlist.html'>
                            <i className='icon-heart icons' />
                          </a>{' '}
                          <span className='item_count'>2</span>
                        </li>
                        <li className='shopping_cart'>
                          <a href='#'>
                            <i className='icon-basket-loaded icons' />
                          </a>{' '}
                          <span className='item_count'>2</span>
                        </li>
                      </ul>
                    </div>
                    <div className='canvas_open'>
                      <a href='/'>
                        <i className='ion-navicon' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageSearchBox />
      </header>
    </>
  );
};
