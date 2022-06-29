import React from 'react';
import type { NextPage } from 'next';
import { ShopScreen } from '../../src/screens/shop';
import { PageWrapper } from '../../src/layouts/page-wrapper';
import { Header } from '../../src/layouts/header/header';
import { trans } from '../../src/utils/trans';
import { constants } from '../../src/utils/constants';
import { SubscribeToNewsletter } from '../../src/components/subscribe-to-newsletter';
import { Footer } from '../../src/layouts/footer';

const Shop: NextPage = () => {
  return (
    <PageWrapper>
      <Header title={trans(constants?.seo?.title)} />
      <ShopScreen />
      <SubscribeToNewsletter />
      <Footer />
    </PageWrapper>
  );
};

export default Shop;
