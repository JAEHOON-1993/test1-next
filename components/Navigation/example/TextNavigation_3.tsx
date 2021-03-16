import { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Container from 'components/Container';

import * as T from 'components/Typography';
import Logo from 'components/Navigation/_fragments/Logo';
import SystemIcon from 'components/Icons/SystemIcon';

import {
  Nav,
  Dim,
  MenuList,
  Content,
  MenuButton,
  DrawerHeader,
} from 'components/Navigation/navigation.styled';

const MENU_DATA = [
  { name: '메뉴1', path: '/' },
  { name: '메뉴2', path: '/' },
  { name: '메뉴3', path: '/' },
  { name: '메뉴4', path: '/' },
];
const NavigationComponent = () => {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <ThemeConsumer>
      {(theme) => (
        <Nav>
          <Container>
            <Logo src="/images/logo.png" width={114} height={22} />
            <MenuList isCenter isOpen={drawer}>
              <DrawerHeader>
                <SystemIcon name="close" onClick={() => setDrawer(false)} />
              </DrawerHeader>
              {MENU_DATA.map((menu, idx) => {
                return (
                  <Menu key={idx}>
                    <T.Title color={theme.color.BLACK} bold>
                      {menu.name}
                    </T.Title>
                  </Menu>
                );
              })}
            </MenuList>
            <Content>
              <div>
                <MenuButton onClick={() => setDrawer(true)}>
                  <T.Button color={theme.color.BLACK} bold>
                    Menu
                  </T.Button>
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

export default NavigationComponent;

const Menu = styled.li``;
