import React from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';

import useHeight from 'utils/useHeight';

import Header from 'components/Header';
// import Footer from "./Footer";

interface Props {
  pageName?: string;
  noHeader?: boolean;
  fixedHeader?: boolean;
  noBorder?: boolean;
  centered?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({
  children,
  noHeader,
  fixedHeader = true,
  centered,
  title = '똑똑한개발자',
}: Props) => {
  const height = useHeight();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!noHeader && <Header fixed={fixedHeader} />}
      <Body height={height} noHeader={noHeader} centered={centered}>
        {children}
      </Body>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

interface styleProps {
  height: number;
  noHeader?: boolean;
  fixedNav?: boolean;
  centered?: boolean;
}

const Body = styled.div`
  min-height: ${(props: styleProps) => `${props.height}px`};
  background-color: ${(props) => props.theme.background.PRIMARY};
  ${(props: styleProps) =>
    props.centered &&
    css`
      display: flex;
    `}
  ${(props: styleProps) =>
    !props.noHeader &&
    css`
      min-height: ${(props: styleProps) => `${props.height - 80}px`};
      ${!props.fixedNav &&
      css`
        padding-top: 80px;
      `}
    `};
`;
