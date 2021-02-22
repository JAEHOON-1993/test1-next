import React from 'react';
import styled, { css } from 'styled-components';

import { TableWrapStyled } from '../table.styled';

interface Props {
  boxShadow?: boolean;
  children?: React.ReactNode | JSX.Element;
  nthWidth?: any[];
}

const TableBody: React.FC<Props> = ({ children, boxShadow, nthWidth }) => {
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.map(
    // @ts-ignore
    (child) => child?.props.children.length,
  );

  return (
    <BodyWrap
      boxShadow={boxShadow}
      nthWidth={nthWidth}
      totalChildren={totalChildren[0]}
    >
      {children}
    </BodyWrap>
  );
};

export default TableBody;

interface styleProps {
  totalChildren: number;
  nthWidth?: any[];
}

const BodyWrap = styled(TableWrapStyled)<styleProps>`
  flex-direction: column;

  width: 100%;
  height: 100%;

  > div > div {
    width: calc(100% / ${(props) => props.totalChildren});
  }

  ${(props) =>
    props.nthWidth &&
    css`
      > div > div {
        &:nth-child(${props.nthWidth[0]}) {
          width: ${props.nthWidth[1]};
        }
      }
    `}
`;
