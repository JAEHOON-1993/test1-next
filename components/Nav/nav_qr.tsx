import React from 'react';
import { useRouter } from 'next/router';

import theme from 'layout/theme';
import SystemIcon from 'components/Icons/SystemIcon';

import { NavWrap, Logo } from './nav.styled';

const Nav = () => {
  const router = useRouter();
  return (
    <NavWrap isQR>
      <Logo onClick={() => router.push('/')} src="/icons/logo_white.png" isQR />
      <SystemIcon
        name="close"
        color={theme.color.WHITE}
        onClick={() => router.back()}
      />
    </NavWrap>
  );
};

export default Nav;
