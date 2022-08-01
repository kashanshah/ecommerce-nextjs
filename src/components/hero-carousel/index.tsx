import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';
import Link from 'next/link';

export const HeroCarousel = () => {
  const slides = [
    {
      title: 'WEB AGENCY',
      text: 'when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here',
      cta: {
        link: '/products/web-development',
        text: 'Learn More',
      },
      image: '/images/banner_img.jpg',
    },
    {
      title: 'WEB AGENCY',
      text: 'when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here',
      cta: {
        link: '/products/web-development',
        text: 'Learn More',
      },
      image: '/images/banner_img.jpg',
    },
  ];

  return (
    <div className='axts-slider'>
      <Slider>
        <div id='xts-slide-3373' className='xts-slides'>
          <Image
            src='/wp-content/uploads/2022/04/d-4-slide-bg-2.jpg'
            className='img-responsive slider-img'
            alt='slider 1'
            preview={false}
          />
          <div className='xts-slide-container xts-items-center xts-justify-center'>
            <section className='xts-negative-gap'>
              <div className='xts-scheme-light xts-textalign-center'>
                <div className='elementor-widget-container'>
                  <p>Modern and stylish outfit</p>
                  <div className='xts-section-heading xts-reset-mb-10 xts-reset-last xts-textalign-center xts-scheme-light'>
                    <h4 className='xts-section-title title xts-design-default xts-fontsize-l'>
                      <span className='xts-section-title-text'>New Season Collection</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className='elementor-element elementor-element-5a57d57 elementor-widget elementor-widget-xts_button'>
                <div className='elementor-widget-container'>
                  <div className='xts-button-wrapper xts-textalign-center'>
                    <Link
                      className='xts-button xts-size-m xts-style-default xts-color-primary xts-shape-rectangle'
                      href='/shop'
                    >
                      <a className='xts-button xts-size-m xts-style-default xts-color-primary xts-shape-rectangle'>
                        <span className='xts-button-text'>To Shop</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div id='xts-slide-3379' className='xts-slides'>
          <Image
            src='/wp-content/uploads/2022/04/d-4-slide-bg-1.jpg'
            className='img-responsive slider-img'
            alt='slider 2'
            preview={false}
          />
          <div className='xts-slide-container xts-items-center xts-justify-center'>
            <section className='xts-negative-gap'>
              <div className='xts-scheme-light xts-textalign-center'>
                <div className='elementor-widget-container'>
                  <p>Latest trending looks</p>
                  <div className='xts-section-heading xts-reset-mb-10 xts-reset-last xts-textalign-center xts-scheme-light'>
                    <h4 className='xts-section-title title xts-design-default xts-fontsize-l'>
                      <span className='xts-section-title-text'>New Arrivals Jackets for Women</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className='elementor-element elementor-element-5a57d57 elementor-widget elementor-widget-xts_button'>
                <div className='elementor-widget-container'>
                  <div className='xts-button-wrapper xts-textalign-center'>
                    <Link href='/shop'>
                      <a className='xts-button xts-size-m xts-style-default xts-color-primary xts-shape-rectangle'>
                        <span className='xts-button-text'>To Shop</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div id='xts-slide-3383' className='xts-slides'>
          <Image
            src='/wp-content/uploads/2022/04/d-4-slide-bg-3.jpg'
            className='img-responsive slider-img'
            alt='slider 3'
            preview={false}
          />
          <div className='xts-slide-container xts-items-center xts-justify-center'>
            <section className='xts-negative-gap'>
              <div className='xts-scheme-light xts-textalign-center'>
                <div className='elementor-widget-container'>
                  <p>Clothes that you like</p>
                  <div className='xts-section-heading xts-reset-mb-10 xts-reset-last xts-textalign-center xts-scheme-light'>
                    <h4 className='xts-section-title title xts-design-default xts-fontsize-l'>
                      <span className='xts-section-title-text'>New Collection Of Basic Clothes</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className='elementor-element elementor-element-5a57d57 elementor-widget elementor-widget-xts_button'>
                <div className='elementor-widget-container'>
                  <div className='xts-button-wrapper xts-textalign-center'>
                    <Link
                      className='xts-button xts-size-m xts-style-default xts-color-primary xts-shape-rectangle'
                      href='/shop'
                    >
                      <a className='xts-button xts-size-m xts-style-default xts-color-primary xts-shape-rectangle'>
                        <span className='xts-button-text'>To Shop</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Slider>
    </div>
  );
};
