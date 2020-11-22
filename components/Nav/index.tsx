import React from "react";

import PCNav from "./nav_pc";
import MobileNav from "./nav_mo";
import { PCView, MobileView } from "./nav.styled";

type Props = {
  pageName?: string;
  fixed?: boolean;
  style?: any;
};

const Nav: React.FC<Props> = ({ pageName }) => {
  return (
    <>
      <PCView>
        <PCNav />
      </PCView>
      <MobileView>
        <MobileNav pageName={pageName} />
      </MobileView>
    </>
  );
};

export default Nav;
