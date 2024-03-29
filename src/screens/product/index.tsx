import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../../layouts/page-wrapper';
import { Header } from '../../layouts/header/header';
import { trans } from '../../utils/trans';
import { constants } from '../../utils/constants';
import { Breadcrumb } from '../../components/breadcrumb';
import { SubscribeToNewsletter } from '../../components/subscribe-to-newsletter';
import { Footer } from '../../layouts/footer';
import { RatingStars } from '../../components/product/rating-stars';
import { ProductPrice } from '../../components/product/card/card';
import { useRouter } from 'next/router';
import { ErrorPage } from '../error-page';
import { IProduct } from '../../utils/data';
import { Image } from 'antd';
import { AddToCartBtn } from '../../components/product/card/add-to-cart-btn';
import { ProductTags } from './product-tags';
import { getProductStockLabel } from '../../utils/wc';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from '../../components/link';
import { ShareLinks } from '../../components/share-links';

export const ProductScreen = (props: { product: IProduct }) => {
  const {
    query: { slug },
  } = useRouter();
  const [activeImg, setActiveImg] = useState<IProduct['images'][0]>();

  const [pageURL, setPageURL] = useState('');

  useEffect(() => {
    setPageURL(window?.location.href);
  }, []);

  const { product } = props;

  if (!product) {
    return <ErrorPage />;
  }

  return (
    <PageWrapper>
      <Header title={product.name + ' - ' + trans(constants?.seo?.title)} />
      <div className='shop_section shop_reverse pt-sm-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <Breadcrumb
                routes={[
                  {
                    path: '/home',
                    breadcrumbName: 'Home',
                  },
                  ...(product?.categories?.map((category) => {
                    return {
                      path: `/product-category/${category.slug}-${category.id}/`,
                      breadcrumbName: category.name,
                    };
                  }) || []),
                  {
                    path: '/product/' + slug,
                    breadcrumbName: product?.name,
                  },
                ]}
              />

              <section className='product_details'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='product_zoom_gallery'>
                        <div className='zoom_gallery_inner d-flex'>
                          <div className='zoom_tab_img'>
                            {product?.images?.map((img, index) => {
                              return (
                                <a
                                  key={img.src + index}
                                  onClick={() => setActiveImg(img)}
                                  className='zoom_tabimg_list'
                                  href='javascript:void(0)'
                                >
                                  <img src={img.src} alt={img.alt} />
                                </a>
                              );
                            })}
                          </div>
                          <div className='product_zoom_main_img'>
                            <div className='product_zoom_thumb'>
                              <Image
                                src={activeImg?.src || product?.images?.[0]?.src}
                                alt={activeImg?.alt || product?.images?.[0]?.alt}
                                placeholder={
                                  <div
                                    style={{
                                      minHeight: 300,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <LoadingOutlined style={{ fontSize: 24 }} spin />
                                  </div>
                                }
                                fallback={'/assets/img/fallback.png'}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='product_d_right'>
                        <form action='#'>
                          <h1>{product?.name}</h1>
                          <div className='product_ratting_review d-flex align-items-center'>
                            <RatingStars rating={Number(product?.average_rating)} />
                            <div className='product_review'>
                              <ul className='d-flex'>
                                <li>{product?.rating_count} reviews</li>
                              </ul>
                            </div>
                          </div>
                          <div className='price_box'>
                            <ProductPrice priceHtml={product?.price_html} />
                          </div>
                          <div className='product_availalbe'>
                            <ul className='d-flex'>
                              <li>
                                <i className='icon-layers icons'></i> Availability:{' '}
                                <span className={product?.stock_status === 'instock' && ' stock '}>
                                  {getProductStockLabel(product?.stock_status)}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className='product_desc'>
                            <div dangerouslySetInnerHTML={{ __html: product.short_description }} />
                          </div>
                          <div className='product_variant'>
                            <div className='filter__list widget_color d-flex align-items-center'>
                              <h3>select color</h3>
                              <ul>
                                <li>
                                  <input type='checkbox' />
                                  <span className='checkmark color1'></span>
                                </li>
                                <li>
                                  <input type='checkbox' />
                                  <span className='checkmark color2'></span>
                                </li>
                                <li>
                                  <input type='checkbox' />
                                  <span className='checkmark color3'></span>
                                </li>
                                <li>
                                  <input type='checkbox' />
                                  <span className='checkmark color5'></span>
                                </li>
                              </ul>
                            </div>
                            <div className='filter__list widget_size d-flex align-items-center'>
                              <h3>select size</h3>
                              <ul>
                                <li>
                                  <a href='javascript:void(0)'>S </a>
                                </li>
                                <li>
                                  <a href='javascript:void(0)'> M</a>
                                </li>
                                <li>
                                  <a href='javascript:void(0)'>L</a>
                                </li>
                                <li>
                                  <a href='javascript:void(0)'> XL</a>
                                </li>
                                <li>
                                  <a href='javascript:void(0)'>XLL</a>
                                </li>
                              </ul>
                            </div>

                            <div className='variant_quantity_btn d-flex'>
                              <div className='pro-qty border'>
                                <input min='1' max='100' type='number' value='1' />
                              </div>
                              <div className='position-relative'>
                                <AddToCartBtn product={product} className='' />
                              </div>
                              <a className='wishlist' href='wishlist.html'>
                                <i className='ion-ios-heart'></i>
                              </a>
                            </div>
                          </div>
                          <div className='product_sku'>
                            <p>
                              <span>SKU: </span> {product.sku}
                            </p>
                          </div>
                          <div className='product_tags d-flex'>
                            <span>Category: </span>
                            <ul className='d-flex'>
                              {product.categories.map((cat, index) => {
                                return (
                                  <li key={cat.slug} className='comma-after'>
                                    <Link
                                      className={index !== product.categories.length - 1 ? 'comma-after' : ''}
                                      href={`/product-category/${cat.slug}-${cat.id}`}
                                      style={{ fontWeight: 400, color: '#999999' }}
                                    >
                                      <>{cat.name}</>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          {product.tags?.length > 0 && (
                            <div className='product_tags d-flex'>
                              <span>tags: </span>
                              <ProductTags tags={product.tags} />
                            </div>
                          )}
                          <div className='priduct_social d-flex'>
                            <span>SHARE: </span>
                            <ShareLinks url={pageURL} text={product.name} />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className='product_d_info pt-90 mb-0'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='product_d_inner'>
                        <div className='product_info_button border-bottom'>
                          <ul className='nav' role='tablist'>
                            <li>
                              <a
                                className='active'
                                data-bs-toggle='tab'
                                href='#info'
                                role='tab'
                                aria-controls='info'
                                aria-selected='false'
                              >
                                Product Description
                              </a>
                            </li>
                            <li>
                              <a
                                data-bs-toggle='tab'
                                href='#reviews'
                                role='tab'
                                aria-controls='reviews'
                                aria-selected='false'
                              >
                                Reviews
                              </a>
                            </li>
                            <li>
                              <a
                                data-bs-toggle='tab'
                                href='#tags'
                                role='tab'
                                aria-controls='tags'
                                aria-selected='false'
                              >
                                Tags{' '}
                              </a>
                            </li>
                            <li>
                              <a
                                data-bs-toggle='tab'
                                href='#additional'
                                role='tab'
                                aria-controls='additional'
                                aria-selected='false'
                              >
                                Additional Information
                              </a>
                            </li>
                            <li>
                              <a
                                data-bs-toggle='tab'
                                href='#tabinfo'
                                role='tab'
                                aria-controls='tabinfo'
                                aria-selected='false'
                              >
                                Custom Tab Info
                              </a>
                            </li>
                            <li>
                              <a
                                data-bs-toggle='tab'
                                href='#video'
                                role='tab'
                                aria-controls='video'
                                aria-selected='false'
                              >
                                Custom Tab Video
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='tab-content'>
                          <div className='tab-pane fade show active' id='info' role='tabpanel'>
                            <div className='product_info_content'>
                              <div dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                          </div>
                          <div className='tab-pane fade' id='reviews' role='tabpanel'>
                            <div className='reviews_wrapper'>
                              <h2>1 review for Donec eu furniture</h2>
                              <div className='reviews_comment_box'>
                                <div className='comment_thmb'>
                                  <img src='/assets/img/blog/comment2.jpeg' alt='' />
                                </div>
                                <div className='comment_text'>
                                  <div className='reviews_meta'>
                                    <div className='star_rating'>
                                      <ul className='d-flex'>
                                        <li>
                                          <a href='#'>
                                            <i className='icon-star' />
                                          </a>
                                        </li>
                                        <li>
                                          <a href='#'>
                                            <i className='icon-star' />
                                          </a>
                                        </li>
                                        <li>
                                          <a href='#'>
                                            <i className='icon-star' />
                                          </a>
                                        </li>
                                        <li>
                                          <a href='#'>
                                            <i className='icon-star' />
                                          </a>
                                        </li>
                                        <li>
                                          <a href='#'>
                                            <i className='icon-star' />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <p>
                                      <strong>admin </strong>- September 12, 2021
                                    </p>
                                    <span>roadthemes</span>
                                  </div>
                                </div>
                              </div>
                              <div className='comment_title'>
                                <h2>Add a review </h2>
                                <p>Your email address will not be published. Required fields are marked </p>
                              </div>
                              <div className='product_ratting mb-10'>
                                <h3>Your rating</h3>
                                <ul className='d-flex'>
                                  <li>
                                    <a href='#'>
                                      <i className='icon-star' />
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <i className='icon-star' />
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <i className='icon-star' />
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <i className='icon-star' />
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <i className='icon-star' />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className='product_review_form'>
                                <form action='#'>
                                  <div className='row'>
                                    <div className='col-12'>
                                      <label htmlFor='review_comment'>Your review </label>
                                      <textarea name='comment' id='review_comment'></textarea>
                                    </div>
                                    <div className='col-lg-6 col-md-6'>
                                      <label htmlFor='author'>Name</label>
                                      <input id='author' type='text' />
                                    </div>
                                    <div className='col-lg-6 col-md-6'>
                                      <label htmlFor='email'>Email </label>
                                      <input id='email' type='text' />
                                    </div>
                                  </div>
                                  <button type='submit'>Submit</button>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className='tab-pane fade' id='tags' role='tabpanel'>
                            <div className='product_info_content'>
                              <ul>
                                <li>Length: 74cm</li>
                                <li>Regular fit</li>
                                <li>Notched lapels</li>
                                <li>Twin button front fastening</li>
                                <li>Front patch pockets; chest pocket</li>
                                <li> Internal pockets</li>
                              </ul>
                            </div>
                          </div>
                          <div className='tab-pane fade' id='additional' role='tabpanel'>
                            <div className='product_d_table'>
                              <form action='#'>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className='first_child'>Compositions</td>
                                      <td>Polyester</td>
                                    </tr>
                                    <tr>
                                      <td className='first_child'>Styles</td>
                                      <td>Girly</td>
                                    </tr>
                                    <tr>
                                      <td className='first_child'>Properties</td>
                                      <td>Short Dress</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </form>
                            </div>
                            <div className='product_info_content'>
                              <p>
                                Vivamus vel leo et felis dictum sodales. Duis finibus placerat consectetur. Sed magna
                                ligula, molestie vitae faucibus sed, consequat ut nisl. Donec at dui tellus. Nullam sem
                                est, tincidunt at sapien nec, aliquet pellentesque nunc. Cras scelerisque risus quis
                                rutrum auctor. Phasellus laoreet sapien neque, vel ullamcorper nunc congue ut. Integer
                                non ipsum sapien Etiam at pellentesque urna. Nunc sit amet pellentesque neque. Nullam id
                                elementum metus.
                              </p>
                            </div>
                          </div>
                          <div className='tab-pane fade' id='tabinfo' role='tabpanel'>
                            <div className='product_d_table'>
                              <form action='#'>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className='first_child'>Compositions</td>
                                      <td>Polyester</td>
                                    </tr>
                                    <tr>
                                      <td className='first_child'>Styles</td>
                                      <td>Girly</td>
                                    </tr>
                                    <tr>
                                      <td className='first_child'>Properties</td>
                                      <td>Short Dress</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </form>
                            </div>
                            <div className='product_info_content'>
                              <p>
                                Vivamus vel leo et felis dictum sodales. Duis finibus placerat consectetur. Sed magna
                                ligula, molestie vitae faucibus sed, consequat ut nisl. Donec at dui tellus. Nullam sem
                                est, tincidunt at sapien nec, aliquet pellentesque nunc. Cras scelerisque risus quis
                                rutrum auctor. Phasellus laoreet sapien neque, vel ullamcorper nunc congue ut. Integer
                                non ipsum sapien Etiam at pellentesque urna. Nunc sit amet pellentesque neque. Nullam id
                                elementum metus.
                              </p>
                            </div>
                          </div>
                          <div className='tab-pane fade' id='video' role='tabpanel'>
                            <div className='product_tab_vidio text-center'>
                              <iframe
                                width='729'
                                height='410'
                                src='https://www.youtube.com/embed/BUWzX78Ye_8'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubscribeToNewsletter />
      <Footer />
    </PageWrapper>
  );
};
