import React from 'react';
import styled, { css } from 'styled-components';

import { TableWrapStyled } from '../table.styled';

interface Props {
  boxShadow?: boolean;
  children?: React.ReactNode | JSX.Element;
  nthWidth?: any[];
}

const TableHeader: React.FC<Props> = ({ children, boxShadow, nthWidth }) => {
  const totalChildren = React.Children.count(children);

  return (
    <HeaderWrap
      boxShadow={boxShadow}
      nthWidth={nthWidth}
      totalChildren={totalChildren}
    >
      {children}
    </HeaderWrap>
  );
};

export default TableHeader;

interface styleProps {
  totalChildren: number;
  nthWidth?: any[];
}

const HeaderWrap = styled(TableWrapStyled)<styleProps>`
  justify-content: space-around;

  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;

  > div {
    width: calc(100% / ${(props) => props.totalChildren});
  }

  ${(props) =>
    props.nthWidth &&
    css`
      > div {
        &:nth-child(${props.nthWidth[0]}) {
          width: ${props.nthWidth[1]};
        }
      }
    `};

  /* ${(props) => props.theme.window.mobile} {
    > div {
      &:nth-child(n + 4) {
        display: none;
      }
    }
  } */
`;
