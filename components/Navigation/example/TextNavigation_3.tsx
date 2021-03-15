import styled, { ThemeConsumer } from 'styled-components';
import Container from 'components/Container';

import * as T from 'components/Typography';
import Logo from 'components/Navigation/_fragments/Logo';
import SystemIcon from 'components/Icons/SystemIcon';

import {
  Nav,
  MenuList,
  Content,
  MenuButton,
} from 'components/Navigation/navigation.styled';

const MENU_DATA = [
  { name: '메뉴1', path: '/' },
  { name: '메뉴2', path: '/' },
  { name: '메뉴3', path: '/' },
  { name: '메뉴4', path: '/' },
];
const NavigationComponent = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Nav>
          <Container>
            <Logo src="/images/logo.png" width={114} height={22} />
            <MenuList isCenter>
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
              <div className="mobile">
                <MenuButton>
                  <T.Button color={theme.color.BLACK} bold>
                    Menu
                  </T.Button>
                  <SystemIcon name="hamburger" />
                </MenuButton>
              </div>
            </Content>
          </Container>
        </Nav>
      )}
    </ThemeConsumer>
  );
};

export default NavigationComponent;

const Menu = styled.li``;
