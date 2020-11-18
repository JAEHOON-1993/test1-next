import React from "react";
import styled from "styled-components";

import { Menu, MenuItem } from "components/MenuNav";
import { useState } from "@storybook/addons";

export default { title: "Example/components/MenuNav" };

const firstMenus = [
  {
    id: 1,
    name: "벽지",
  },
  {
    id: 2,
    name: "장판",
  },
  {
    id: 3,
    name: "필름",
  },
  {
    id: 4,
    name: "데코타일",
  },
  {
    id: 5,
    name: "포트폴리오",
  },
];

const secondMenus = [
  {
    id: 1,
    name: "Title",
  },
  {
    id: 2,
    name: "Title",
  },
];

export const TopNav = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <MenuList>
      <Menu>
        {firstMenus.map((item, idx) => (
          <MenuItem
            key={idx}
            title={item.name}
            onClick={() => setSelected(item.id)}
            active={selected === item.id}
          ></MenuItem>
        ))}
      </Menu>
      <Menu>
        {secondMenus.map((item, idx) => (
          <MenuItem
            key={idx}
            title={item.name}
            onClick={() => setSelected(item.id)}
            active={selected === item.id}
          ></MenuItem>
        ))}
      </Menu>
    </MenuList>
  );
};

const MenuList = styled.div`
  > div {
    margin-top: 10%;
  }
`;
