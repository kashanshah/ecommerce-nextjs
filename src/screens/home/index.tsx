import { PageWrapper } from '../../layouts/page-wrapper';
import { Header } from '../../layouts/header/header';
import { trans } from '../../utils/trans';
import { constants } from '../../utils/constants';
import { Footer } from '../../layouts/footer';
import React from 'react';
import { PageSearchBox } from '../../components/page-search-box';
import { MegaMenu } from '../../components/mega-menu/mega-menu';
import { HeroCarousel } from '../../components/hero-carousel';
import { BannerImages } from '../../components/banner-images/banner-images';
import { BestSellerProducts } from '../../components/best-seller-products/best-seller-products';

export const HomeScreen = () => {
  return (
    <PageWrapper>
      <PageSearchBox />
      <Header title={trans(constants?.seo?.title)} />
      <div className='xts-site-content'>
        <div className='container'>
          <div className='row row-spacing-40 xts-sidebar-hidden-md'>
            <div className='col-md-3'>
              <MegaMenu />
            </div>
            <div className='col-md-9'>
              <HeroCarousel />
            </div>
            <div className='col-md-12'>
              <BannerImages />

              <BestSellerProducts />
            </div>
          </div>
        </div>
      </div>

      {/*<BannersSection type='two' title='Featured Collection' />*/}

      {/*<SubscribeToNewsletter />*/}
      <Footer />
    </PageWrapper>
  );
};
