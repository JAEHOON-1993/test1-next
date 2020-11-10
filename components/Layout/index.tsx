import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "로켓메이커스" }: Props) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const updateSize = () => {
      setHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Body height={height}>{children}</Body>
      <Footer />
    </div>
  )
};

export default Layout;

type styleProps = {
  height: number;
};
const Body = styled.div`
  min-height: ${(props: styleProps) => `${props.height}px`};
  display: flex;
`;
