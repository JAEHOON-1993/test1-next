import { useState } from 'react';
import { NextPage } from 'next';
import { ThemeConsumer } from 'styled-components';
import Container from 'components/Container';

import { Text, Title } from 'components/Typography';
import Logo from 'components/Header/_fragments/Logo';
import User from 'components/Header/_fragments/User';
import SystemIcon from 'components/Icons/SystemIcon';

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
];

interface NavProps {
  backgroundColor?: string;
  fixed: boolean;
}
const HeaderComponent: NextPage<NavProps> = ({ backgroundColor }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  const user = {
    isLogin: isLogin,
    nickname: '김똑똑',
    avatar: '/images/profile_default.png',
  };
  return (
    <ThemeConsumer>
      {(theme) => (
        <Nav
          backgroundColor={
            backgroundColor ? backgroundColor : theme.color.WHITE
          }
        >
          <Container>
            <Logo
              src="/images/logo.png"
              width={114}
              height={22}
              onClick={() => console.log('onClick')}
            />
            <MenuList isOpen={drawer}>
              <DrawerHeader>
                <User
                  user={user}
                  toLogin={() => setIsLogin(!isLogin)}
                  color={
                    backgroundColor ? theme.color.WHITE : theme.color.BLACK
                  }
                />
                <SystemIcon
                  name="close"
                  onClick={() => setDrawer(false)}
                  color={
                    backgroundColor ? theme.color.WHITE : theme.color.BLACK
                  }
                />
              </DrawerHeader>
              {MENU_DATA.map((menu, idx) => {
                return (
                  <Menu key={idx}>
                    <Title
                      color={
                        backgroundColor ? theme.color.WHITE : theme.color.BLACK
                      }
                      bold
                    >
                      {menu.name}
                    </Title>
                  </Menu>
                );
              })}
              <DrawerFooter>
                {isLogin && (
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
              <div>
                <User
                  user={user}
                  toLogin={() => setIsLogin(!isLogin)}
                  togglePopup={() => setPopup(!popup)}
                  color={
                    backgroundColor ? theme.color.WHITE : theme.color.BLACK
                  }
                />
                {isLogin && (
                  <PopupBox isOpen={popup}>
                    <li onClick={() => setIsLogin(false)}>
                      <Text sm>로그아웃</Text>
                    </li>
                  </PopupBox>
                )}
              </div>
              <div className="tab">
                <MenuButton onClick={() => setDrawer(true)}>
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

HeaderComponent.defaultProps = { backgroundColor: '#000' };

export default HeaderComponent;
