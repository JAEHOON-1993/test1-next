import React from "react";
import styled from "styled-components";
// components

import NavMobile from "./nav_mo";
import NavPC from "./nav_pc";

const NavMobileWrap = styled.div`
  @media (min-width: 0px) and (max-width: 767.98px) {
    display: flex;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const NavPCWrap = styled.div`
  @media (min-width: 0px) and (max-width: 767.98px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

type Props = {
  fixed?: boolean;
  style?: any;
};

const Nav: React.FC<Props> = ({ fixed }) => {
  return (
    <>
      <NavMobileWrap>
        <NavMobile />
      </NavMobileWrap>
      <NavPCWrap>
        <NavPC fixed={fixed} />
      </NavPCWrap>
    </>
  );
};

export default Nav;
