import React from 'react';
import Head from 'next/head';

import { AppProps } from 'next/app';

import ScrollToTop from 'components/ScrollToTop';
// import MobileRouter from 'components/Layout/MobileRouter';
import Stack from 'components/Navigation/Stack';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import StyledProvider from 'components/StyledProvider';

React.useLayoutEffect = React.useEffect;

declare global {
  interface Window {
    naver: any;
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
      </Head>
      <ScrollToTop>
        <StyledProvider>
          {/* <MobileRouter>
            <Component {...pageProps} />
          </MobileRouter> */}
          <Stack component={<Component {...pageProps} />} />
        </StyledProvider>
      </ScrollToTop>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  // console.log('Component : ', Component);
  // console.log('ctx : ', ctx);
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;
