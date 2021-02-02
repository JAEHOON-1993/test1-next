import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

const SITE_NAME = 'SITE_NAME';
const SITE_TITLE = 'SITE_TITLE';
const SITE_DESCRIPTION = 'SITE_DESCRIPTION';
const SITE_IMAGE = 'SITE_IMAGE';

const GOOGLE_ANALYTICS_ID = 'G-0L1YSV5CKF';
const GOOGLE_TAG_MANAGER_ID = 'GTM-WRP2HWZ';

interface Props {
  styleTags: any;
  styleTags2: any;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();
    const sheet2 = new ServerStyleSheets();
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(sheet2.collect(<App {...props} />)),
    );
    const styleTags = sheet.getStyleElement();
    const styleTags2 = sheet2.getStyleElement();
    return { ...page, styleTags, styleTags2 };
  }
  setGoogleAnalytics() {
    return {
      __html: `        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_ID}');
      `,
    };
  }
  setGoogleTagManager() {
    return {
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`,
    };
  }
  setGoogleTagManagerBody() {
    return {
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href="/icons/120.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/167.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link rel="canonical" href="https://rocketmakers.io/" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          {/* Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          ></script> */}
          {/* <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} /> */}
          {/* Google Tag Manager */}
          {/* <script dangerouslySetInnerHTML={this.setGoogleTagManager()} /> */}
          {this.props.styleTags}
          {this.props.styleTags2}
        </Head>
        <body>
          {/* Google Tag Manager */}
          {/* <noscript dangerouslySetInnerHTML={this.setGoogleTagManagerBody()} /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
