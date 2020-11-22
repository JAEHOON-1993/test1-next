import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

import theme from "layout/theme";

import Container from "components/Container";
import * as T from "components/Text";

const CATEGORIES = [
  { id: 1, name: "벽지" },
  { id: 2, name: "장판" },
  { id: 3, name: "필름" },
  { id: 4, name: "데코타일" },
  { id: 5, name: "포트폴리오" },
  { id: 6, name: "마루" },
  { id: 7, name: "몰딩" },
  { id: 8, name: "문" },
  { id: 9, name: "욕실" },
];
const Tabs = () => {
  const [active, setActive] = useState<number>(1);
  const listRef = useRef<any>(null);
  const activeBarRef = useRef<any>(null);
  useEffect(() => {
    const listNodes = Array.prototype.slice.call(listRef.current.childNodes);
    const list = listNodes.slice(0, active);
    var left = 0;
    list.map((i) => (left += i.clientWidth));
    const bar = activeBarRef.current;
    bar.style.width = `${listNodes[active].clientWidth}px`;
    bar.style.left = `${left}px`;
  }, [active]);
  return (
    <TabsBox>
      <Container>
        <List ref={listRef}>
          {CATEGORIES.map((item, idx) => {
            return (
              <Item
                key={idx}
                active={active === idx}
                onClick={() => setActive(idx)}
              >
                <T.Text>{item.name}</T.Text>
              </Item>
            );
          })}
          <ActiveBar ref={activeBarRef} />
        </List>
      </Container>
    </TabsBox>
  );
};
export default Tabs;

type styleProps = {
  active?: boolean;
};
const TabsBox = styled.div`
  border-bottom: 1px solid ${theme.color.GRAY1};
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    > div {
      width: 100%;
      padding: 0px;
    }
  }
`;
const List = styled.div`
  display: flex;
  overflow: auto;
  position: relative;
  ::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  }
`;
const Item = styled.div`
  cursor: pointer;
  > p {
    font-weight: bold;
    margin: 14px 16px;
    text-align: center;
    white-space: nowrap;
  }
  ${(props: styleProps) =>
    props.active &&
    css`
      color: ${theme.color.PRIMARY};
    `}
`;
const ActiveBar = styled.div`
  position: absolute;
  transition: 0.2s ease;
  left: 0;
  bottom: 0px;
  width: 57px;
  height: 3px;
  background-color: ${theme.color.PRIMARY};
`;
