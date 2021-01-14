import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  boxShadow?: string;
  children?: React.ReactNode | JSX.Element;
}

const TableBodyWrap: React.FC<Props> = ({ children, boxShadow }) => {
  return <TableBox BoxShadow={boxShadow}>{children}</TableBox>;
};

export default TableBodyWrap;

interface styleProps {
  BoxShadow?: string;
}

const TableBox = styled.div<styleProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  height: 100%;
  /* padding: 0 8px 0 8px; */

  ${(props) =>
    props.BoxShadow &&
    css`
      box-shadow: ${props.BoxShadow};
    `}

  ${(props) => props.theme.window.tab} {
  } ;
`;
