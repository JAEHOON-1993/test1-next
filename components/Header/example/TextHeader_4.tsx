import { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Container from 'components/Container';

import { Title } from 'components/Typography';
import Logo from 'components/Header/_fragments/Logo';
import User from 'components/Header/_fragments/User';
import SystemIcon from 'components/Icons/SystemIcon';

import {
  Nav,
  Dim,
  MenuList,
  Content,
  MenuButton,
  DrawerHeader,
} from 'components/Header/index.styled';

const MENU_DATA = [
  { name: '메뉴1', path: '/' },
  { name: '메뉴2', path: '/' },
];
const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const user = {
    isLogin: isLogin,
    nickname: '김똑똑',
  };
  return (
    <ThemeConsumer>
      {(theme) => (
        <Nav>
          <Container>
            <Logo
              src="/images/logo.png"
              width={114}
              height={22}
              onClick={() => console.log('onClick')}
            />
            <MenuList isOpen={drawer}>
              <DrawerHeader>
                <User user={user} toLogin={() => setIsLogin(!isLogin)} />
                <SystemIcon name="close" onClick={() => setDrawer(false)} />
              </DrawerHeader>
              {MENU_DATA.map((menu, idx) => {
                return (
                  <Menu key={idx}>
                    <Title color={theme.color.BLACK}>
                      {menu.name}
                    </Title>
                  </Menu>
                );
              })}
            </MenuList>
            <Content>
              <div>
                <User user={user} toLogin={() => setIsLogin(!isLogin)} />
              </div>
              <div>
                <MenuButton onClick={() => setDrawer(true)}>
                  <SystemIcon name="hamburger" />
                </MenuButton>
              </div>
            </Content>
            <Dim isOpen={drawer} onClick={() => setDrawer(false)} />
          </Container>
        </Nav>
      )}
    </ThemeConsumer>
  );
};

export default HeaderComponent;

const Menu = styled.li``;
