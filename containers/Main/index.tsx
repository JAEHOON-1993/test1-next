import React, { useState } from 'react';
import Router from 'next/router';

import Container from 'components/Container';
import TitleContainer from './_fragments/Title';
import BannerContainer from './_fragments/Banner';
import MenuContainer from './_fragments/Menu';

import BottomNavigation from 'components/BottomNavigation';
import BottomNavigationAction from 'components/BottomNavigation/BottomNavigationItem';

import { Props } from './types';

const MobileBottomNav = () => {
  const [active, setActive] = useState(0);
  return (
    <BottomNavigation setActive={setActive} active={active}>
      <BottomNavigationAction label="홈" icon="home" />
      <BottomNavigationAction
        label="채팅"
        icon="chat"
        onClick={() => Router.push('/chat')}
      />
      <BottomNavigationAction label="장바구니" icon="shopping" />
      <BottomNavigationAction
        label="마이페이지"
        icon="myPage"
        onClick={() => Router.push('/login')}
      />
    </BottomNavigation>
  );
};

const MainContainer: React.FC<Props> = () => {
  return (
    <Container>
      <TitleContainer />
      <BannerContainer />
      <MenuContainer />
      <MobileBottomNav />
    </Container>
  );
};

export default MainContainer;
