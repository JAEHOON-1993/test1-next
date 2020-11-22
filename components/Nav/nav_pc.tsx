import React from "react";
import { useRouter } from "next/router";

import {
  NavWrap,
  CustomContainer,
  Logo,
  MobileLeftBox,
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

const Nav: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <>
      <NavWrap>
        <CustomContainer>
          <Logo onClick={() => router.push("/")} src="/icons/logo_black.png" />
          <MobileLeftBox>
            <Icon name="search" color={theme.color.GRAY5} />
            <Icon name="qr" color={theme.color.GRAY5} />
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