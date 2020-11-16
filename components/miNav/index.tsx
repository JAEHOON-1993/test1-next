import React from "react";
import styled, { css } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { withStyles } from "@material-ui/core/styles";
import theme from "layout/theme";
import * as T from "components/Text";

export type MenuProps = {
  children?: any;
};

export const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <NavComponent {...props}>{children}</NavComponent>;
};

const NavComponent = styled.div`
  background-color: ${theme.color.WHITE};
  border-radius: ${theme.radius};
  width: 100%;
`;

export type MenuItemProps = {
  title?: string;
  selected?: boolean;
  onClick?: any;
  active?: any;
};

const CustomTabs = withStyles({
  indicator: {
    backgroundColor: `${theme.color.PRIMARY}`,
  },
})(Tabs);

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

// export type NavProps = {
//   menus?: Array<object>;
//   value?: any;
//   onChange?: any;
// };

export const DefaultNav: React.FC<any> = ({ menus, ...props }) => {
  return (
    <AppBar position="static" color="default">
      <CustomTabs variant="fullWidth" {...props}>
        {menus.map((item, idx) => (
          <Tab key={idx} label={<T.Title>{item.name}</T.Title>}></Tab>
        ))}
      </CustomTabs>
    </AppBar>
  );
};

export const CustomNav: React.FC<any> = ({ menus, ...props }) => {
  return (
    <AppBar position="static" color="default">
      <StyledTabs variant="fullWidth" {...props}>
        {menus.map((item, idx) => (
          <Tab key={idx} label={<T.Title>{item.name}</T.Title>}></Tab>
        ))}
      </StyledTabs>
    </AppBar>
  );
};
