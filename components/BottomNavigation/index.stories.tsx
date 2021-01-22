import React, { useState } from 'react';

import BottomNavigation from 'components/BottomNavigation';
import BottomNavigationItem from 'components/BottomNavigation/BottomNavigationItem';

export default { title: 'Example/components/BottomNavigation' };

export const BottomNavigationWithText = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      Mobile에서 확인 가능합니다.
      <BottomNavigation setActive={setActive} active={active}>
        <BottomNavigationItem label="home" icon="home" />
        <BottomNavigationItem label="chat" icon="chat" />
        <BottomNavigationItem label="mypage" icon="myPage" />
        <BottomNavigationItem label="shopping" icon="shopping" />
      </BottomNavigation>
    </>
  );
};

export const BottomNavigationJustIcon = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      Mobile에서 확인 가능합니다.
      <BottomNavigation setActive={setActive} active={active}>
        <BottomNavigationItem icon="home" />
        <BottomNavigationItem icon="chat" />
        <BottomNavigationItem icon="myPage" />
        <BottomNavigationItem icon="shopping" />
      </BottomNavigation>
    </>
  );
};
