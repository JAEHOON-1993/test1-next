import styled, { css } from 'styled-components';

import Button from 'components/Button';
import { Logo } from 'components/Navigation/_fragments/Logo';

interface NavProps {
  centerPoint?: 'pc' | 'tab' | 'mobile';
  backgroundColor?: string;
}
export const Nav = styled.nav<NavProps>`
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.GRAY1};
  ${(props) =>
    props.backgroundColor
      ? css`
          background-color: ${props.backgroundColor};
          ${MenuList} {
            background-color: ${props.backgroundColor};
          }
        `
      : css`
          background-color: ${props.theme.color.WHITE};
          ${MenuList} {
            background-color: ${props.theme.color.WHITE};
          }
        `}
  > div {
    display: flex;
    flex-direction: row;
  }
  ${(props) => props.theme.window.pc} {
    ${(props) =>
      props.centerPoint === 'pc' &&
      css`
        > div {
          justify-content: center;
        }
      `}
  }
  ${(props) => props.theme.window.tab} {
    ${(props) =>
      props.centerPoint === 'tab' &&
      css`
        > div {
          justify-content: center;
        }
      `}
  }
  ${(props) => props.theme.window.mobile} {
    ${(props) =>
      props.centerPoint === 'mobile' &&
      css`
        > div {
          justify-content: center;
        }
      `}
  }

  ${Logo} {
    ${(props) => props.theme.window.pc} {
      ${(props) =>
        props.centerPoint === 'pc' &&
        css`
          position: absolute;
          justify-content: center;
        `}
    }

    ${(props) => props.theme.window.tab} {
      ${(props) =>
        props.centerPoint === 'tab' &&
        css`
          position: absolute;
          justify-content: center;
        `}
    }
    ${(props) => props.theme.window.mobile} {
      ${(props) =>
        props.centerPoint === 'mobile' &&
        css`
          position: absolute;
          justify-content: center;
        `}
    }
  }
`;

interface MenuProps {
  isDrawer?: boolean;
}

const MenuMobileCSS = css`
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px 16px;
  width: 100%;
  :nth-of-type(1) {
    margin-top: 100px;
  }
`;

export const Menu = styled.li<MenuProps>`
  cursor: pointer;
`;

export const DrawerHeader = styled.div`
  display: none;
  height: 80px;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  > svg {
    cursor: pointer;
  }
`;

export const DrawerFooter = styled.div`
  display: none;
  width: 100%;

  position: absolute;
  bottom: 10px;

  align-items: center;
  justify-content: space-between;

  padding: 0 10px;

  > button {
    all: unset;
    cursor: pointer;
    padding: 5px 6px;
    margin-bottom: 15px;
  }
`;

export const Dim = styled.div<MenuListProps>`
  z-index: 9;
  transition: 0.4s;
  position: fixed;
  background-color: ${(props) => props.theme.color.BLACK};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ContentCSS = css`
  margin-left: auto;
  /* > div {
    display: none;
  } */
`;
export const Content = styled.div`
  width: 215px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > div {
    position: relative;
    :nth-of-type(1) {
      display: flex;
    }
    :last-child {
      display: none;
    }
  }

  ${(props) => props.theme.window.tab} {
    > div {
      :nth-of-type(1) {
        display: none;
      }
      :last-child {
        display: flex;
      }
    }
  }
`;

export const AbsoluteButton = styled(Button)`
  padding: 0 26px !important;

  ${(props) => props.theme.window.tab} {
    position: fixed;
    bottom: 30px;
    width: 750px;
    left: calc((100% - 750px) / 2);
  }
  ${(props) => props.theme.window.mobile} {
    position: fixed;
    bottom: 30px;
    width: calc(100% - 30px);
    left: 15px;
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;
  display: flex;
  > p {
    margin-right: 13px;
  }
`;

interface MenuListProps {
  isOpen?: boolean;
  isCenter?: boolean;
}

const MenuCSS = css`
  position: absolute;
  flex-direction: column;
  width: 313px;
  height: 100vh;
  background-color: #fff;
  top: 0;
  right: -313px;
  transition: 0.4s;
  z-index: 10;
`;
export const MenuList = styled.ul<MenuListProps>`
  display: flex;
  align-items: center;
  > li {
    margin-right: 50px;
    :last-child {
      margin-right: 0px;
    }
  }
  ${(props) =>
    props.isCenter
      ? css`
          margin: auto;
        `
      : css`
          margin-right: auto;
        `}
  ~ ${Dim} {
    visibility: hidden;
    opacity: 0;
  }
  ${(props) => props.theme.window.tab} {
    + ${Content} {
      ${ContentCSS}
    }
    > li {
      ${MenuMobileCSS}
    }
    ${MenuCSS}
    ${DrawerHeader}, ${DrawerFooter} {
      display: flex;
    }
    ${(props) =>
      props.isOpen &&
      css`
        right: 0;
        ~ ${Dim} {
          opacity: 0.5;
          visibility: visible;
        }
      `};
  }
`;

interface PopupBoxProp {
  isOpen: boolean;
}
export const PopupBox = styled.ul<PopupBoxProp>`
  position: absolute;
  top: 65px;
  right: 0px;
  background-color: #fff;
  > li {
    cursor: pointer;
    padding: 8px 15px;
  }
  transition: 0.2s;
  visibility: hidden;
  opacity: 0;

  ${(props) =>
    props.isOpen &&
    css`
      visibility: visible;
      opacity: 1;
      top: 60px;
    `}
  ${(props) => props.theme.window.tab} {
    display: none;
  }
`;
