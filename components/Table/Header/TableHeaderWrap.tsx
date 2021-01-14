import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  boxShadow?: string;
  children?: React.ReactNode | JSX.Element;
}

const TableHeaderWrap: React.FC<Props> = ({ children, boxShadow }) => {
  return <ItemBox BoxShadow={boxShadow}>{children}</ItemBox>;
};

export default TableHeaderWrap;

interface styleProps {
  BoxShadow?: string;
}

const ItemBox = styled.div<styleProps>`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 7px 12px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  ${(props) =>
    props.BoxShadow &&
    css`
      box-shadow: ${props.BoxShadow};
    `}

  ${(props) => props.theme.window.mobile} {
    > div {
      &:nth-child(n + 4) {
        display: none;
      }
    }
  }
`;
