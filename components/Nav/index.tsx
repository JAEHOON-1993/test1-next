import React from "react";
import Router from "next/router";
import styled from "styled-components";

import theme from "layout/theme";
// components
import Icon from "components/Icon";
import Container from "components/Container";

type Props = {
  fixed?: boolean;
  style?: any;
};

const Nav: React.FC<Props> = () => {
  return (
    <>
      <NavWrap>
        <CustomContainer>
          <Logo onClick={() => Router.push("/")} src="/icons/logo_black.png" />
          <MobileLeftBox>
            <Icon name="search" color={theme.color.GRAY5} />
            <Icon name="qr" color={theme.color.GRAY5} />
          </MobileLeftBox>
          <LeftBox>
            <Link href="#">장바구니</Link>
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

const EmptyBox = styled.div`
  height: 80px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 50px;
  }
`;
const NavWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #fff;
  z-index: 9999;
  border-bottom: 1px solid #eee;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 50px;
    border-bottom: 0px;
  }
`;
const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  height: 25px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    position: absolute;
    width: 100px;
    height: 20px;
  }
`;
const CustomContainer = styled(Container)`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    justify-content: center;
    height: 50px;
  }
`;
const MobileLeftBox = styled.div`
  margin-left: auto;
  > svg {
    cursor: pointer;
    margin-left: 20px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    > svg {
      margin-left: 15px;
    }
  }
`;
const LeftBox = styled.div`
  border-left: 1px solid ${theme.color.GRAY5};
  margin-left: 20px;
  display: flex;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
const Link = styled.a`
  font-size: 15px;
  margin-left: 20px;
  text-decoration: none;
  color: ${theme.color.GRAY5};
  font-weight: bold;
`;
