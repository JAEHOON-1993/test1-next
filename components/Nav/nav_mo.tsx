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
  style?: any;
};

const Nav: React.FC<Props> = ({ pageName }) => {
  const router = useRouter();
  const [isHome, setIsHome] = useState<boolean>(true);
  useEffect(() => {
    if (router.pathname != "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [router]);
  return (
    <>
      <NavWrap>
        <CustomContainer>
          {!isHome && (
            <MobileRightBox onClick={router.back}>
              <Icon name="arrow-left" color={theme.color.GRAY5} />
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
            <Icon name="search" color={theme.color.GRAY5} />
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
