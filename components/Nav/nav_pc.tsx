import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SystemIcon from 'components/Icons/SystemIcon';

import {
  NavWrap,
  CustomContainer,
  Logo,
  MobileLeftBox,
  LeftBox,
  EmptyBox,
} from './nav.styled';

type Props = {
  fixed?: boolean;
  style?: any;
};

const Nav: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <>
      <NavWrap>
        <CustomContainer>
          <Logo onClick={() => router.push('/')} src="/icons/logo_black.png" />
          <MobileLeftBox>
            <SystemIcon name="search" />
            <SystemIcon name="qr" onClick={() => router.push('/qr')} />
          </MobileLeftBox>
          <LeftBox>
            <Link href="/cart">장바구니</Link>
            <Link href="/login">로그인</Link>
            <Link href="/chat">채팅</Link>
          </LeftBox>
        </CustomContainer>
      </NavWrap>
      <EmptyBox />
    </>
  );
};

export default Nav;
