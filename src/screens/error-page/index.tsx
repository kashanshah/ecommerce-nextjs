import { PageWrapper } from '../../layouts/page-wrapper';
import { Header } from '../../layouts/header/header';
import { Footer } from '../../layouts/footer';
import Link from 'next/link';

type ErrorPageProps = {
  title?: string;
  text?: string;
  hideCTA?: boolean;
  cta?: {
    text: string;
    link?: string;
  };
};

export const ErrorPage = (props: ErrorPageProps) => {
  const {
    title = 'Oops! Something went wrong',
    text = 'Something has gone wrong on our side. We are looking into it.',
    cta = {
      text: 'Go to home page',
      link: '/',
    },
    hideCTA = false,
  } = props;

  return (
    <PageWrapper>
      <Header title={title} />
      <div className='full_bg mb-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='titlepage text_align_center'>
                <h2 className='mb-2'>{title}</h2>
                <p className='mb-3'>{text}</p>
                {!hideCTA && (
                  <Link href={cta?.link} className='read_more px-2 d-inline-block'>
                    <>{cta?.text}</>
                  </Link>
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
