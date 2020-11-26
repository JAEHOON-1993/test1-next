import React, { useState } from "react";
import Router from "next/router";

// components
import Container from "components/Container";
import TitleContainer from "./Title";
import BannerContainer from "./Banner";
import MenuContainer from "./Menu";

import BottonNavigation from "components/BottomNavigation";
import BottonNavigationAction from "components/BottomNavigationAction";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MobileBottomNav = () => {
  const [active, setActive] = useState(0);
  return (
    <BottonNavigation setActive={setActive} active={active}>
      <BottonNavigationAction label="홈" icon="home" />
      <BottonNavigationAction
        label="채팅"
        icon="chat"
        onClick={() => Router.push("/chat")}
      />
      <BottonNavigationAction label="장바구니" icon="shopping" />
      <BottonNavigationAction
        label="마이페이지"
        icon="mypage"
        onClick={() => Router.push("/login")}
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
