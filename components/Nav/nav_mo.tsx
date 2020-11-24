import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  NavWrap,
  CustomContainer,
  PageName,
  Logo,
  MobileLeftBox,
  MobileRightBox,
  LeftBox,
  Link,
  EmptyBox,
} from "./nav.styled";
import theme from "layout/theme";
// components
import Icon from "components/Icon";

type Props = {
  pageName?: string;
  fixed?: boolean;
  transparent?: boolean;
  style?: any;
};

const NoSearchPath = ["/", "/indoor", "/outdoor"];

const Nav: React.FC<Props> = ({ pageName, transparent }) => {
  const router = useRouter();
  const [fixed, setFixed] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(true);
  const [noSearch, setNoSearch] = useState<boolean>(true);
  useEffect(() => {
    if (router.pathname != "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
    if (NoSearchPath.indexOf(router.pathname) > 0) {
      setNoSearch(true);
    } else {
      setNoSearch(false);
    }
  }, [router]);
  const listener = () => {
    if (document.body.getBoundingClientRect().top === 0) {
      setFixed(false);
    } else {
      setFixed(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <>
      <NavWrap transparent={transparent} fixed={fixed}>
        <CustomContainer>
          {!isHome && (
            <MobileRightBox onClick={router.back}>
              <Icon
                name="arrow-left"
                color={
                  transparent && !fixed ? theme.color.WHITE : theme.color.GRAY5
                }
              />
            </MobileRightBox>
          )}
          {pageName ? (
            <PageName lg>{pageName}</PageName>
          ) : (
            <Logo
              onClick={() => router.push("/")}
              src="/icons/logo_black.png"
            />
          )}
          <MobileLeftBox>
            {noSearch && (
              <Icon
                style={{ margin: 0 }}
                name="search"
                color={
                  transparent && !fixed ? theme.color.WHITE : theme.color.GRAY5
                }
              />
            )}
            {isHome && <Icon name="qr" color={theme.color.GRAY5} />}
          </MobileLeftBox>
          <LeftBox>
            <Link href="/">장바구니</Link>
            <Link href="/login">로그인</Link>
            <Link href="#">채팅</Link>
          </LeftBox>
        </CustomContainer>
      </NavWrap>
      <EmptyBox />
    </>
  );
};

export default Nav;
