import {PageWrapper} from '../../layouts/page-wrapper';
import {HeroCarousel} from "../../components/hero-carousel";
import {Header} from "../../layouts/header/header";
import {trans} from "../../utils/trans";
import {constants} from "../../utils/constants";
import {Footer} from "../../layouts/footer";
import {SubscribeToNewsletter} from "../../components/subscribe-to-newsletter";
import {BannersSection} from "../../components/banners-section";
import React from "react";

export const HomeScreen = () => {

  return (
    <PageWrapper>
      <Header title={trans(constants?.seo?.title)}/>
      <HeroCarousel/>

      <BannersSection/>
      <BannersSection type='two' title='Featured Collection'/>

      <SubscribeToNewsletter/>
      <Footer/>
    </PageWrapper>
  );
};
