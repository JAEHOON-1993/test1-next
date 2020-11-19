import React from "react";
import styled from "styled-components";

import theme from "layout/theme";
// components
import ColorIcon from "components/ColorIcon";
import * as T from "components/Text";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MenuContainer: React.FC<Props> = () => {
  return (
    <Menu>
      <Item>
        <div>
          <ColorIcon name="bed" />
        </div>
        <T.Text>실내</T.Text>
      </Item>
      <Item>
        <div>
          <ColorIcon name="home" />
        </div>
        <T.Text>실외</T.Text>
      </Item>
      <Item>
        <div>
          <ColorIcon name="search" />
        </div>
        <T.Text>AI 스마트검색</T.Text>
      </Item>
      <Item>
        <div>
          <ColorIcon name="fix" />
        </div>
        <T.Text>시공업체</T.Text>
      </Item>
      <Item>
        <div>
          <ColorIcon name="ai" />
        </div>
        <T.Text>AI 가상시공</T.Text>
      </Item>
      <Item>
        <div>
          <ColorIcon name="add" />
        </div>
        <T.Text>업체등록</T.Text>
      </Item>
    </Menu>
  );
};

export default MenuContainer;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  /* Large PC */
  margin-top: 60px;
  padding: 0 150px;
  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    margin-top: 60px;
    padding: 0 80px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    margin-top: 40px;
    padding: 0 20px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: 40px;
    padding: 0;
  }
`;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    background-color: ${theme.color.GRAY2};
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    margin-bottom: 5px;
  }
  > p {
    color: ${theme.color.GRAY4};
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    min-width: calc(100% / 3);
    margin-bottom: 30px;
  }
`;
