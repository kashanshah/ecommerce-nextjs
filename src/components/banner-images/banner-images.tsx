import React from 'react';
import { Image } from 'antd';
import Link from 'next/link';

export const BannerImages = () => {
  return (
    <div className='elementor-container elementor-column-gap-default'>
      <div className='elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e2c3326'>
        <div className='elementor-widget-wrap elementor-element-populated'>
          <div className='elementor-element elementor-element-28d655d elementor-widget elementor-widget-xts_banner_carousel'>
            <div className='elementor-widget-container'>
              <div className='xts-iimage-carousel xts-row xts-row-lg-3 xts-row-md-2 xts-row-1 xts-row-spacing-20 xts-carousel xts-lib-swiper xts-dots- xts-arrows-hpos-outside xts-arrows-vpos-sides xts-arrows-design-default xts-init-on-scroll xts-autoplay-animations-off'>
                <div className='xts-col elementor-repeater-item-54afaa7'>
                  <div className='xts-iimage xts-with-image xts-hover-zoom-in xts-scheme-light xts-cursor-pointer'>
                    <div className='xts-iimage-img-wrapper'>
                      <div className='xts-iimage-img'>
                        <Image
                          width='460'
                          height='240'
                          src='/wp-content/uploads/2022/04/demo-4-b-1.jpg'
                          className='attachment-full size-full'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                      <div className='xts-iimage-overlay xts-fill' />
                    </div>
                    <div className='xts-iimage-content-wrapper xts-fill xts-justify-start xts-items-center xts-textalign-left'>
                      <div className='xts-iimage-content xts-reset-all-last'>
                        <div className='xts-iimage-subtitle xts-fontsize-s'>NEW ARRIVALS</div>
                        <h4 className='xts-iimage-title title xts-fontsize-xl'>Woman Accessories</h4>
                        <div className='xts-button-wrapper'>
                          <Link href='/shop'>
                            <a className='xts-button xts-size-l xts-style-link xts-color-white' href='#'>
                              <span className='xts-button-text'>To Shop</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='xts-col elementor-repeater-item-a393340'>
                  <div className='xts-iimage xts-with-image xts-hover-zoom-in xts-scheme-light xts-cursor-pointer'>
                    <div className='xts-iimage-img-wrapper'>
                      <div className='xts-iimage-img'>
                        <Image
                          width='460'
                          height='240'
                          src='/wp-content/uploads/2022/04/demo-4-b-2.jpg'
                          className='attachment-full size-full'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                      <div className='xts-iimage-overlay xts-fill' />
                    </div>
                    <div className='xts-iimage-content-wrapper xts-fill xts-justify-start xts-items-center xts-textalign-left'>
                      <div className='xts-iimage-content xts-reset-all-last'>
                        <div className='xts-iimage-subtitle xts-fontsize-s'>SUMMER SALE</div>
                        <h4 className='xts-iimage-title title xts-fontsize-xl'>Shoes Collection</h4>
                        <div className='xts-button-wrapper'>
                          <Link href='/shop'>
                            <a className='xts-button xts-size-l xts-style-link xts-color-white' href='#'>
                              <span className='xts-button-text'>View More</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='xts-col elementor-repeater-item-5e305bd'>
                  <div className='xts-iimage xts-with-image xts-hover-zoom-in xts-scheme-light xts-cursor-pointer'>
                    <div className='xts-iimage-img-wrapper'>
                      <div className='xts-iimage-img'>
                        <Image
                          width='460'
                          height='240'
                          src='/wp-content/uploads/2022/04/demo-4-b-3.jpg'
                          className='attachment-full size-full'
                          alt=''
                          loading='lazy'
                        />
                      </div>
                      <div className='xts-iimage-overlay xts-fill' />
                    </div>
                    <div className='xts-iimage-content-wrapper xts-fill xts-justify-start xts-items-center xts-textalign-left'>
                      <div className='xts-iimage-content xts-reset-all-last'>
                        <div className='xts-iimage-subtitle xts-fontsize-s'>SAVE UP TO 10%</div>
                        <h4 className='xts-iimage-title title xts-fontsize-xl'>Classic Women&apos;s Suits</h4>
                        <div className='xts-button-wrapper'>
                          <Link href='/shop'>
                            <a className='xts-button xts-size-l xts-style-link xts-color-white' href='#'>
                              <span className='xts-button-text'>To Shop</span>
                            </a>
                          </Link>
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
  );
};
