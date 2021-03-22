import { useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import Container from 'components/Container';

import { Text, Title, Button } from 'components/Typography';
import Logo from 'components/Header/_fragments/Logo';
import SystemIcon from 'components/Icons/SystemIcon';
import User from 'components/Header/_fragments/User';

import { HeaderProps } from 'components/Header/interface';
import {
  Nav,
  Dim,
  MenuList,
  Menu,
  Content,
  MenuButton,
  DrawerHeader,
  DrawerFooter,
  PopupBox,
} from 'components/Header/index.styled';

const MENU_DATA = [
  { name: '메뉴1', path: '/' },
  { name: '메뉴2', path: '/' },
  { name: '메뉴3', path: '/' },
  { name: '메뉴4', path: '/' },
];

const HeaderComponent: React.FC<HeaderProps> = ({
  menuText,
  centerPoint = 'tab',
  isCenter,
  user,
  backgroundColor,
  setIsLogin,
}) => {
  const [drawer, setDrawer] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);
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
            <MenuList isCenter={isCenter} isOpen={drawer}>
              <DrawerHeader>
                {user && (
                  <User
                    user={user}
                    toLogin={() => setIsLogin(true)}
                    color={
                      backgroundColor ? theme.color.WHITE : theme.color.BLACK
                    }
                  />
                )}
                <SystemIcon onClick={() => setDrawer(false)} name="close" />
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
              <DrawerFooter>
                {user?.isLogin && (
                  <button onClick={() => setIsLogin(false)}>
                    <Text
                      color={
                        backgroundColor ? theme.color.WHITE : theme.color.BLACK
                      }
                    >
                      로그아웃
                    </Text>
                  </button>
                )}
              </DrawerFooter>
            </MenuList>
            <Content>
              {user && (
                <div>
                  <User
                    user={user}
                    toLogin={() => setIsLogin(true)}
                    togglePopup={() => setPopup(!popup)}
                    color={
                      backgroundColor ? theme.color.WHITE : theme.color.BLACK
                    }
                  />
                  {user.isLogin && (
                    <PopupBox isOpen={popup}>
                      <li
                        onClick={() => {
                          setIsLogin(false);
                          setPopup(false);
                        }}
                      >
                        <Text sm>로그아웃</Text>
                      </li>
                    </PopupBox>
                  )}
                </div>
              )}

              <div className="tab">
                <MenuButton onClick={() => setDrawer(true)}>
                  {menuText && (
                    <Button color={theme.color.BLACK} bold>
                      {menuText}
                    </Button>
                  )}

                  <SystemIcon
                    name="hamburger"
                    color={
                      backgroundColor ? theme.color.WHITE : theme.color.BLACK
                    }
                  />
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
