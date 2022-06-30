import React from 'react';
import { PageWrapper } from '../../layouts/page-wrapper';
import { Header } from '../../layouts/header/header';
import { Footer } from '../../layouts/footer';
import Link from 'next/link';

type ErrorPageProps = {
  title?: string;
  text?: string;
  paragraph?: string;
  hideCTA?: boolean;
  cta?: {
    text: string;
    link?: string;
  };
};

export const ErrorPage = (props: ErrorPageProps) => {
  const {
    title = '404',
    text = 'Page Cannot Be Found!',
    paragraph = 'It looks like nothing was found at this locations.',
    cta = {
      text: 'Go to home page',
      link: '/home',
    },
    hideCTA = false,
  } = props;

  return (
    <PageWrapper>
      <Header title={title} />

      <div className='error-404_area pt-80 pb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='error-404_content'>
                <h1 className='mb-0'>{title}</h1>
                <h2 className='sub-title mb-0'>{text}</h2>
                <p className='short-desc mb-0'>{paragraph}</p>
                {!hideCTA && (
                  <div className='error-btn_wrap'>
                    <Link className='btn btn-primary' href={cta?.link}>
                      {cta?.text}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
};
