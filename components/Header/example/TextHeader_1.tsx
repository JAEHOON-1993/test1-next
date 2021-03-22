import { useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import Container from 'components/Container';

import { Title } from 'components/Typography';
import Logo from 'components/Header/_fragments/Logo';
import SystemIcon from 'components/Icons/SystemIcon';

import { HeaderProps } from 'components/Header/interface';
import {
  Nav,
  Dim,
  MenuList,
  Menu,
  Content,
  MenuButton,
  DrawerHeader,
} from 'components/Header/index.styled';

const MENU_DATA = [
  { name: '메뉴1', path: '/' },
  { name: '메뉴2', path: '/' },
  { name: '메뉴3', path: '/' },
  { name: '메뉴4', path: '/' },
];

const HeaderComponent: React.FC<HeaderProps> = ({ centerPoint }) => {
  const [drawer, setDrawer] = useState<boolean>(false);
  return (
    <ThemeConsumer>
      {(theme) => (
        <Nav centerPoint={centerPoint}>
          <Container>
            <Logo
              src="https://next-init-rosy.vercel.app/images/logo.png"
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

export default HeaderComponent;
