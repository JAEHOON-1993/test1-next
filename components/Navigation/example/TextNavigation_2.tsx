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
  AbsoluteButton,
  MenuButton,
} from 'components/Navigation/navigation.styled';

const MENU_DATA = [
  { name: '메뉴1', path: '/' },
  { name: '메뉴2', path: '/' },
];

const NavigationComponent = () => {
  const centerPoint = 'mobile';
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

            <MenuList isCenter isOpen={drawer}>
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
              <AbsoluteButton>앱 다운로드</AbsoluteButton>
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
