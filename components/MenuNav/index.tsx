import React from "react";
import styled, { css } from "styled-components";

import theme from "layout/theme";
import * as T from "components/Text";

export type NavProps = {
  children?: any;
};

export const Menu: React.FC<NavProps> = ({ children, ...props }) => {
  return <NavComponent {...props}>{children}</NavComponent>;
};

const NavComponent = styled.div`
  display: flex;
  background-color: ${theme.color.WHITE};
  border-radius: ${theme.radius};
  width: 500px;
  overflow: auto;
`;

export type MenuItemProps = {
  title?: string;
  selected?: boolean;
  onClick?: any;
  active?: any;
};

export const MenuItem: React.FC<MenuItemProps> = ({ title, ...props }) => {
  return (
    <MenuItemComponent {...props}>
      <MenuItemText>{title && <T.Title>{title}</T.Title>}</MenuItemText>
    </MenuItemComponent>
  );
};

const MenuItemComponent = styled.div`
  align-items: center;
  text-align: center;
  float: left;
  justify-content: space-between;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  ${(props: MenuItemProps) =>
    props.active &&
    css`
      color: ${theme.color.PRIMARY};
      border-bottom: 3px solid ${theme.color.PRIMARY};
    `}
`;

const MenuItemText = styled.div`
  display: block;
  width: 100%;
  padding: 10px 0;
`;
