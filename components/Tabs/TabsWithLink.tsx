import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import useWindowSize from 'utils/useWindowSize';

import Container from 'components/Container';

type Props = {
  active?: any;
  noMobile?: boolean;
  render?: any;
  centered?: boolean;
  data?: any;
  className?: string;
  itemStyle?: any;
  onChange?: any;
  path?: string;
};

const Tabs: React.FC<Props> = ({
  className,
  active,
  noMobile,
  centered,
  data,
  render,
  itemStyle,
  onChange,
  path,
}) => {
  const size = useWindowSize();
  const [_active, setActive] = useState<any>(0);
  const listRef = useRef<any>(null);
  const activeBarRef = useRef<any>(null);

  useEffect(() => {
    if (data) {
      barHandler();
    }
  }, [_active, size]);
  useEffect(() => {
    // console.log('active : ', active);
    setActive(active ? parseInt(active) : 0);
  }, [active]);

  const barHandler = () => {
    const listNodes = Array.prototype.slice.call(listRef.current.childNodes);
    const list = listNodes.slice(0, _active);
    var left = 0;
    list.map((i) => (left += i.clientWidth));
    const bar = activeBarRef.current;
    bar.style.width = `${listNodes[_active]?.clientWidth}px`;
    bar.style.left = `${left}px`;
  };

  const tabChangeHandler = (idx: number) => {
    setActive(idx);
    onChange(idx, data[idx], path);
  };

  return (
    <TabsBox noMobile={noMobile} className={className}>
      <Container>
        <List ref={listRef} centered={centered}>
          {data?.map((item: any, idx: number) => {
            return (
              <Item
                key={idx}
                style={itemStyle}
                active={_active === idx}
                onClick={() => tabChangeHandler(idx)}
              >
                {render ? render(item) : <p>{item.name}</p>}
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
  noMobile?: boolean;
  centered?: boolean;
};
const TabsBox = styled.div`
  z-index: 999;
  border-bottom: 1px solid ${(props) => props.theme.color.GRAY1};
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
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
  ${(props) => props.theme.window.mobile} {
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
    margin: 14px 16px;
    text-align: center;
    white-space: nowrap;
  }
  ${(props: styleProps) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.PRIMARY};
    `}
`;
const ActiveBar = styled.div`
  position: absolute;
  transition: 0.2s ease;
  left: 0;
  bottom: 0px;
  width: 57px;
  height: 3px;
  background-color: ${(props) => props.theme.color.PRIMARY};
`;
