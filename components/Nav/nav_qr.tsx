import React from 'react';
import { useRouter } from 'next/router';
import { ThemeConsumer } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';

import { NavWrap, Logo } from './nav.styled';

const Nav = () => {
  const router = useRouter();
  return (
    <ThemeConsumer>
      {(theme) => (
        <NavWrap isQR>
          <Logo
            onClick={() => router.push('/')}
            src="/icons/logo_white.png"
            isQR
          />
          <SystemIcon
            name="close"
            color={theme.color.WHITE}
            onClick={() => router.back()}
          />
        </NavWrap>
      )}
    </ThemeConsumer>
  );
};

export default Nav;
