import React, { useState } from 'react';

import BottonNavigation from 'components/BottomNavigation';
import BottonNavigationAction from 'components/BottomNavigationAction';

export default { title: 'Example/components/BottomNavigation' };

export const BottomNavigation1 = () => {
  const [active, setActive] = useState(0);
  return (
    <BottonNavigation setActive={setActive} active={active}>
      <BottonNavigationAction label="home" icon="home" />
      <BottonNavigationAction label="chat" icon="chat" />
      <BottonNavigationAction label="mypage" icon="mypage" />
      <BottonNavigationAction label="shopping" icon="shopping" />
    </BottonNavigation>
  );
};

export const BottomNavigation2 = () => {
  const [active, setActive] = useState(0);
  return (
    <BottonNavigation setActive={setActive} active={active}>
      <BottonNavigationAction icon="home" />
      <BottonNavigationAction icon="chat" />
      <BottonNavigationAction icon="mypage" />
      <BottonNavigationAction icon="shopping" />
    </BottonNavigation>
  );
};
