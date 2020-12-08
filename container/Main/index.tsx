import React, { useState } from 'react';
import Router from 'next/router';

import Container from 'components/Container';
import TitleContainer from './fragment/Title';
import BannerContainer from './fragment/Banner';
import MenuContainer from './fragment/Menu';

import BottonNavigation from 'components/BottomNavigation';
import BottonNavigationAction from 'components/BottomNavigationAction';

import { Props } from './types';

const MobileBottomNav = () => {
  const [active, setActive] = useState(0);
  return (
    <BottonNavigation setActive={setActive} active={active}>
      <BottonNavigationAction label="홈" icon="home" />
      <BottonNavigationAction
        label="채팅"
        icon="chat"
        onClick={() => Router.push('/chat')}
      />
      <BottonNavigationAction label="장바구니" icon="shopping" />
      <BottonNavigationAction
        label="마이페이지"
        icon="mypage"
        onClick={() => Router.push('/login')}
      />
    </BottonNavigation>
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
