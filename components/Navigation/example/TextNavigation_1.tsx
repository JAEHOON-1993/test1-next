import { useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import Container from 'components/Container';

import { Title } from 'components/Typography';
import Logo from 'components/Navigation/_fragments/Logo';
import SystemIcon from 'components/Icons/SystemIcon';

import {
  Nav,
  Dim,
  MenuList,
  Menu,
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
  const centerPoint = 'tab';
  const [drawer, setDrawer] = useState<boolean>(false);
  return (
    <ThemeConsumer>
      {(theme) => (
        <Nav centerPoint={centerPoint}>
          <Container>
            <Logo
              src="/images/logo.png"
              width={114}
              height={22}
              onClick={() => console.log('onClick')}
            />
            <MenuList isOpen={drawer}>
              <DrawerHeader>
                <SystemIcon name="close" />
              </DrawerHeader>
              {MENU_DATA.map((menu, idx) => {
                return (
                  <Menu key={idx}>
                    <Title color={theme.color.BLACK} bold>
                      {menu.name}
                    </Title>
                  </Menu>
                );
              })}
            </MenuList>
            <Content>
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

export default NavigationComponent;
