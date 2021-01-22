import React from 'react';
import Head from 'next/head';
// import Router from 'next/router';
// import RouterStore from 'stores/Router';

import { AppProps } from 'next/app';

import ScrollToTop from 'components/ScrollToTop';
import MobileRouter from 'components/Layout/MobileRouter';

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
  // const [isPush, setIsPush] = useState(false);
  // const [isPop, setIsPop] = useState(false);
  // const [load, setLoad] = useState(true);

  // useEffect(() => {
  //   // 뒤로가기
  //   const beforePopState = ({url, as, options} : any) => {
  //     // console.log('beforePopState : ', url);
  //     // console.log('beforePopState as : ', as);
  //     // console.log('beforePopState options : ', options);
  //     RouterStore.push(as, as, "right");
  //     return false
  //   }

  //   // 다음 페이지 이동
  //   const routeChangeStart = async () => {
  //     // console.log(`beforeHistoryChange`);
  //     await setIsPush(true);
  //     setTimeout(() => {
  //       setLoad(false);
  //     }, 500)
  //   }
  //   const routeChangeComplete = async () => {
  //     // console.log(`routeChangeComplete`);
  //     // await setLoad(true);

  //     await setIsPop(false);
  //     setTimeout(() => {
  //       setLoad(true);
  //       setIsPush(false);
  //     }, 500)
  //   }

  //   Router.beforePopState(beforePopState);
  //   // Router.events.on('routeChangeStart', routeChangeStart);
  //   Router.events.on('beforeHistoryChange', routeChangeStart);
  //   Router.events.on('routeChangeComplete', routeChangeComplete);
  //   return () => {
  //     // Router.events.off('routeChangeStart', routeChangeStart);
  //     Router.events.off('beforeHistoryChange', routeChangeStart);
  //     Router.events.off('routeChangeComplete', routeChangeComplete);
  //   }
  // }, [Router]);

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
          <MobileRouter>
            <Component {...pageProps} />
          </MobileRouter>
        </StyledProvider>
      </ScrollToTop>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;
