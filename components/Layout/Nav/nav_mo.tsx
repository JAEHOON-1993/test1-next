import React, { useEffect, useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import { useRouter } from 'next/router';

import RouterStore from 'stores/Router';

import SystemIcon from 'components/Icons/SystemIcon';

import {
  NavWrap,
  CustomContainer,
  Logo,
  MobileLeftBox,
  MobileRightBox,
  EmptyBox,
} from './nav.styled';

interface Props {
  fixed?: boolean;
  transparent?: boolean;
  noBorder?: boolean;
  style?: any;
}

const NO_BACK_PATH = ['/', '/chat', '/cart', '/mypage'];
const SEARCH_PATH = ['/', '/indoor', '/outdoor'];

const Nav: React.FC<Props> = ({ transparent, noBorder }) => {
  const router = useRouter();
  const [path, setPath] = useState<string>('/');
  const [fixed, setFixed] = useState<boolean>(false);
  // console.log('나중에 수정', setPath);
  useEffect(() => {
    // console.log(NO_BACK_PATH.indexOf(path));
    // console.log(SEARCH_PATH.indexOf(path));
    setPath(router.pathname);
  }, [router]);
  const listener = () => {
    if (document.body.getBoundingClientRect().top === 0) {
      setFixed(false);
    } else {
      setFixed(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <NavWrap noBorder={noBorder} transparent={transparent} fixed={fixed}>
            <CustomContainer>
              {NO_BACK_PATH.indexOf(path) < 0 && (
                <MobileRightBox onClick={router.back}>
                  <SystemIcon
                    name="arrowLeft"
                    color={
                      transparent && !fixed
                        ? theme.color.WHITE
                        : theme.color.GRAY5
                    }
                  />
                </MobileRightBox>
              )}
              <Logo
                onClick={() => RouterStore.push('/')}
                src="/icons/logo_black.png"
              />
              <MobileLeftBox>
                {SEARCH_PATH.indexOf(path) > -1 && (
                  <SystemIcon
                    onClick={() => router.push('/search')}
                    style={{ margin: 0 }}
                    name="search"
                    color={
                      transparent && !fixed
                        ? theme.color.WHITE
                        : theme.color.GRAY5
                    }
                  />
                )}
                {path === '/' && (
                  <SystemIcon name="qr" color={theme.color.GRAY5} />
                )}
              </MobileLeftBox>
            </CustomContainer>
          </NavWrap>
          <EmptyBox />
        </>
      )}
    </ThemeConsumer>
  );
};

export default Nav;
