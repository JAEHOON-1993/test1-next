import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import theme from 'layout/theme';
import useWindowSize from 'utils/useWindowSize';
import Container from 'components/Container';
import * as T from 'components/Text';

interface Props {
  noMobile?: boolean;
  render?: any;
  centered?: boolean;
  data?: any;
}

const Tabs: React.FC<Props> = ({ noMobile, centered, data, render }) => {
  const size = useWindowSize();
  const [active, setActive] = useState<number>(0);
  const listRef = useRef<any>(null);
  const activeBarRef = useRef<any>(null);
  const barHandler = () => {
    const listNodes = Array.prototype.slice.call(listRef.current.childNodes);
    const list = listNodes.slice(0, active);
    var left = 0;
    list.map((i) => (left += i.clientWidth));
    const bar = activeBarRef.current;
    bar.style.width = `${listNodes[active].clientWidth}px`;
    bar.style.left = `${left}px`;
  };
  useEffect(() => {
    barHandler();
  }, [active, size]);
  return (
    <TabsBox noMobile={noMobile}>
      <Container>
        <List ref={listRef} centered={centered}>
          {data?.map((item: any, idx: number) => {
            return (
              <Item
                key={idx}
                active={active === idx}
                onClick={() => setActive(idx)}
              >
                {render ? render(item) : <T.Text>{item.name}</T.Text>}
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

interface styleProps {
  active?: boolean;
  noMobile?: boolean;
  centered?: boolean;
}

const TabsBox = styled.div`
  z-index: 999;
  border-bottom: 1px solid ${theme.color.GRAY1};
  /* Mobile */
  ${theme.window.mobile} {
    > div {
      width: 100%;
      padding: 0px;
    }
    ${(props: styleProps) =>
      props.noMobile &&
      css`
        display: none;
      `}
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
  /* Mobile */
  ${theme.window.mobile} {
    margin: auto;
  }
  ${(props: styleProps) =>
    props.centered &&
    css`
      justify-content: center;
      width: fit-content;
      margin: auto;
    `}
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
