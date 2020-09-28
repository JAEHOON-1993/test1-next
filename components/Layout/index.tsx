import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "로켓메이커스" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <Body>{children}</Body>
    <Footer />
  </div>
);

export default Layout;

const Body = styled.div`
  min-height: calc(100vh - 110px - 176px);
  display: flex;
`;
