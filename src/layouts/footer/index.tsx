import React from 'react';
import {constants} from "../../utils/constants";
import {trans} from "../../utils/trans";
import Link from "next/link";
import {SocialLinks} from "../../components/social-links";

type FooterProps = {
  [key: string]: any;
  children?: React.ReactElement;
};

export const Footer = (props: FooterProps) => {

  return (
    <footer className="footer_widgets pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="footer_widget_list">
              <div className="footer_logo">
                <a href="#"><img src="/assets/img/logo/logo.png" alt=""/></a>
              </div>
              <div className="footer_contact">
                <div className="footer_contact_list">
                  <span>Our Location</span>
                  <p>{constants?.address}</p>
                </div>
                <div className="footer_contact_list">
                  <span>24/7 hotline:</span>
                  <a href={`tel:${constants?.phone.replaceAll('-', '').replaceAll(' ', '')}`}>{constants?.phone}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="footer_widget_list text-end">
              <div className="footer_menu">
                <ul className="d-flex justify-content-end">
                  <li><Link href="/">HOME</Link></li>
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="product-gallery-left.html">Product</a></li>
                  <li><a href="/">pages</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><Link href="/contact">CONTACT</Link></li>
                </ul>
              </div>
              <div className="footer_social">
                <SocialLinks className='justify-content-end' />
              </div>
              <div className="copyright_right">
                <p>{trans(constants?.copyright)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
