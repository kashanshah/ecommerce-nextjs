import {PageWrapper} from '../../layouts/page-wrapper';
import {Header} from "../../layouts/header/header";
import {trans} from "../../utils/trans";
import {constants} from "../../utils/constants";
import {Footer} from "../../layouts/footer";
import {SubscribeToNewsletter} from "../../components/subscribe-to-newsletter";
import {ContactUsSection} from "../../components/contact-us-section";

export const ContactScreen = () => {

  return (
    <PageWrapper>
      <Header title={`Contact Us | ${trans(constants?.seo?.title)}`}/>
      <ContactUsSection/>
      <SubscribeToNewsletter/>
      <Footer/>
    </PageWrapper>
  );
};
