import Document, {Head, Html, Main, NextScript} from 'next/document';
import {getLangDir} from '../src/utils/trans';
import React from "react";

export default class MyDocument extends Document {
  render() {
    const language = this.props.__NEXT_DATA__.locale;
    return (
      <Html lang={language} dir={getLangDir(language)}>
        <Head>
          <link rel="profile" href="https://gmpg.org/xfn/11"/>
          <link rel="canonical" href={process.env['NEXT_PUBLIC_API_BASE']}/>
          <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico"/>

          <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css"/>
          <link rel="stylesheet" href="/assets/css/slick.css"/>
          <link rel="stylesheet" href="/assets/css/simple-line-icons.css"/>
          <link rel="stylesheet" href="/assets/css/ionicons.min.css"/>
          <link rel="stylesheet" href="/assets/css/font.awesome.css"/>
          <link rel="stylesheet" href="/assets/css/animate.css"/>
          <link rel="stylesheet" href="/assets/css/nice-select.css"/>
          <link rel="stylesheet" href="/assets/css/jquery-ui.min.css"/>
          <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>

          <link rel="stylesheet" href="/assets/css/style.css?asdasd"/>

        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
