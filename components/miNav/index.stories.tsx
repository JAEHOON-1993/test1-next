import React from "react";
import styled from "styled-components";
import { Menu, DefaultNav, CustomNav } from "components/miNav";

export default { title: "Example/components/MaterialNav" };

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

const thirdMenus = [
  {
    id: 1,
    name: "Title Small",
  },
  {
    id: 2,
    name: "Title Small",
  },
  {
    id: 3,
    name: "Title Small",
  },
];

export const MiNav = () => {
  const [valueOne, setValueOne] = React.useState(0);
  const [valueTwo, setValueTwo] = React.useState(0);
  const [valueThree, setValueThree] = React.useState(0);

  const handleChangeOne = (
    event: React.ChangeEvent<{}>,
    newValueOne: number
  ) => {
    setValueOne(newValueOne);
  };

  const handleChangeTwo = (
    event: React.ChangeEvent<{}>,
    newValueTwo: number
  ) => {
    setValueTwo(newValueTwo);
  };

  const handleChangeThree = (
    event: React.ChangeEvent<{}>,
    newValueThree: number
  ) => {
    setValueThree(newValueThree);
  };

  return (
    <MenuList>
      <Menu>
        <DefaultNav
          menus={firstMenus}
          value={valueOne}
          onChange={handleChangeOne}
        ></DefaultNav>
      </Menu>

      <Menu>
        <DefaultNav
          menus={secondMenus}
          value={valueTwo}
          onChange={handleChangeTwo}
        ></DefaultNav>
      </Menu>

      <Menu>
        <CustomNav
          menus={thirdMenus}
          value={valueThree}
          onChange={handleChangeThree}
        ></CustomNav>
      </Menu>
    </MenuList>
  );
};

const MenuList = styled.div`
  > div {
    margin-top: 10%;
  }
`;
