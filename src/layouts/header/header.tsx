import React from 'react';
import NextHead from 'next/head';
import {constants} from '../../utils/constants';
import {trans} from '../../utils/trans';
import {useRouter} from 'next/router';
import Link from "next/link";
import {useGoToUrl} from "../../utils/url";
import {ActiveLink} from "../../components/active-link";

type HeaderProps = {
  [key: string]: any;
  children?: React.ReactElement;
};

export const Header = (props: HeaderProps) => {
  const {title, description, keywords, robots, language, author} = props;
  const {locale, pathname} = useRouter();
  const goToUrl = useGoToUrl();

  return (
    <>
      <NextHead>
        <title>{title || trans(constants?.seo?.title)}</title>
        <meta name='title' content={title || trans(constants?.seo?.title)}/>
        <meta name='description' content={description || trans(constants?.seo?.description)}/>
        <meta name='keywords' content={keywords || trans(constants?.seo?.keywords)}/>
        <meta name='robots' content={robots || trans(constants?.seo?.robots)}/>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8'/>
        <meta name='language' content={language || locale}/>
        <meta name='author' content={author || trans(constants?.seo?.author)}/>
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="stylesheet" href="/css/responsive.css"/>
      </NextHead>

      <div className="header">
        <div className="top_header">
          <div className="container-width">
            <div className="row d_flex">
              <div className=" col-md-3 col-sm-4">
                <div className="logo">
                  <Link href="/">Melon</Link>
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <div className="select_main">
                  <ul className="top_infomation">
                    <li><i className="fa fa-map-marker" aria-hidden="true"/>
                      Address : Loram Ipusm
                    </li>
                    <li><i className="fa fa-phone" aria-hidden="true"/>
                      CALL : +01 1234567890
                    </li>
                    <li><i className="fa fa-envelope" aria-hidden="true"/>
                      <a href="Javascript:void(0)"> EMAIL : {constants?.email}</a>
                    </li>
                  </ul>
                  <a className="read_more" href="javascript:void(0)">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_midil">
          <div className="container-width">
            <div className="row d_flex">
              <div className="col-lg-9 col-md-12 col-sm-12">
                <div className="navbar-area">
                  <nav className="site-navbar">
                    <ul>
                      <li><ActiveLink className='link' href='/'>Home</ActiveLink></li>
                      <li><ActiveLink className='link' href="/about">About</ActiveLink></li>
                      <li><ActiveLink className='link' href="/service">Service</ActiveLink></li>
                      <li><ActiveLink className='link' href="/team">Team</ActiveLink></li>
                      <li><ActiveLink className='link' href="/blog">Blog</ActiveLink></li>
                      <li><ActiveLink className='link' href="/contact">Contact us</ActiveLink></li>
                    </ul>
                    <button className="nav-toggler">
                      <span />
                    </button>
                  </nav>
                </div>
              </div>
              <div className="col-md-3  d_none">
                <ul className="email text_align_right">
                  <li><a href="Javascript:void(0)"><i className="fa fa-user" aria-hidden="true" />Log In</a></li>
                  <li><a href="Javascript:void(0)"><i className="fa fa-user" aria-hidden="true" />Sign Up</a></li>
                  <li><a href="Javascript:void(0)"><i className="fa fa-search" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
