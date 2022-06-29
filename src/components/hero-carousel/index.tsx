import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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
    <section className='slider_section'>
      <div className='slider_area slick_slider_activation'>
        <Carousel
          showStatus={false}
          showThumbs={false}
          dynamicHeight
          emulateTouch
          infiniteLoop
          className='slider_area slick_slider_activation slick-initialized slick-slider slick-dotted'
          renderArrowPrev={(clickHandler) => {
            return (
              <button className='slick-button prev_arrow slick-arrow' onClick={clickHandler}>
                <i className='icon-arrow-left icons' />
              </button>
            );
          }}
          renderArrowNext={(clickHandler) => {
            return (
              <button className='slick-button next_arrow slick-arrow' onClick={clickHandler}>
                <i className='icon-arrow-right icons' />
              </button>
            );
          }}
        >
          <div
            className='single_slider d-flex align-items-center'
            style={{ background: 'url("/assets/img/slider/slider1.jpg")' }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-7'>
                  <div className='slider_text'>
                    <span>Lookbook</span>
                    <h1>fashion trend for autum girls with vibes</h1>
                    <p>
                      We love seeing how our Edon wearers like <br /> to wear their Norda
                    </p>
                    <Link className='btn btn-primary' href='/shop'>
                      Explore Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='single_slider d-flex align-items-center'
            style={{ background: 'url("/assets/img/slider/slider2.jpg")' }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-7'>
                  <div className='slider_text text-white'>
                    <span>Handbag</span>
                    <h1>Men Collection Preview</h1>
                    <p className='text-white'>
                      The collection grows each year with original stories and design features by Edons employees.
                    </p>
                    <Link className='btn btn-primary' href='/shop'>
                      Explore Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
