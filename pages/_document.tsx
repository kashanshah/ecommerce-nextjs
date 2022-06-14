import Document, {Head, Html, Main, NextScript} from 'next/document';
import {getLangDir} from '../src/utils/trans';

export default class MyDocument extends Document {
  render() {
    const language = this.props.__NEXT_DATA__.locale;
    return (
      <Html lang={language} dir={getLangDir(language)}>
        <Head/>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
