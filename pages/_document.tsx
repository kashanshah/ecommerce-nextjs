import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getLangDir } from '../src/utils/trans';

export default class MyDocument extends Document {
  render() {
    const language = this.props.__NEXT_DATA__.locale;
    return (
      <Html lang={language} dir={getLangDir(language)}>
        <Head>
          <link rel='profile' href='https://gmpg.org/xfn/11' />
          <link rel='canonical' href={process.env['NEXT_PUBLIC_API_BASE']} />
          <link rel='shortcut icon' type='image/x-icon' href='/assets/img/favicon.ico' />

          <link
            rel='stylesheet'
            id='wc-blocks-vendors-style-css'
            href='/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=7.8.3'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='wc-blocks-style-css'
            href='/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=7.8.3'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-icons-css'
            href='/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.15.0'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-frontend-css'
            href='/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.6.7'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-post-6-css'
            href='/wp-content/uploads/elementor/css/post-6.css?ver=1658597014'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-pro-css'
            href='/wp-content/plugins/elementor-pro/assets/css/frontend.min.css?ver=3.0.8'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='xts-style-css'
            href='/wp-content/themes/xts-tethys/style.min.css?ver=1.3.1'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='xts-child-style-css'
            href='/wp-content/themes/xts-tethys-child/style.css?ver=1.3.1'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='xts-style-default_header_tethys-css'
            href='/wp-content/uploads/2022/07/xts-default_header_tethys-1659228791.css?ver=1.3.1'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='xts-style-theme_settings_default-css'
            href='/wp-content/uploads/2022/07/xts-theme_settings_default-1659228880.css?ver=1.3.1'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='google-fonts-1-css'
            href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto&#038;ver=6.0.1'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-post-30-css'
            href='/wp-content/uploads/elementor/css/post-30.css?ver=1658597014'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-post-3383-css'
            href='/wp-content/uploads/elementor/css/post-3383.css?ver=1658597091'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-post-3373-css'
            href='/wp-content/uploads/elementor/css/post-3373.css?ver=1658597091'
            type='text/css'
            media='all'
          />
          <link
            rel='stylesheet'
            id='elementor-post-3379-css'
            href='/wp-content/uploads/elementor/css/post-3379.css?ver=1658597091'
            type='text/css'
            media='all'
          />
        </Head>
        <body className='theme-xts-tethys woocommerce-no-js xts-cat-accordion xts-sticky-navbar-enabled elementor-default elementor-kit-6'>
          <div className='xts-site-wrapper'>
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
