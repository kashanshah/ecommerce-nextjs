import {PageWrapper} from '../../layouts/page-wrapper';
import {HeroCarousel} from "../../components/hero-carousel";
import {Header} from "../../layouts/header/header";
import {trans} from "../../utils/trans";
import {constants} from "../../utils/constants";
import {ImageTextSection} from "../../components/image-text-section";
import {Footer} from "../../layouts/footer";
import {SubscribeToNewsletter} from "../../components/subscribe-to-newsletter";
import {ContactUsSection} from "../../components/contact-us-section";
import {BannersSection} from "../../components/banners-section";
import React from "react";

export const HomeScreen = () => {

  return (
    <PageWrapper>
      <Header title={trans(constants?.seo?.title)}/>
      <HeroCarousel/>

      <BannersSection/>
      <BannersSection type='two' title='Featured Collection'/>

      <ImageTextSection
        title='About Us'
        text='readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in theirreadable English.'
        cta={{text: 'Read More', link: '/about'}}
        image='/images/about_img.jpg'
      />
      <SubscribeToNewsletter/>
      <Footer/>
    </PageWrapper>
  );
};
