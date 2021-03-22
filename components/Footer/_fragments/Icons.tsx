import React from 'react';

import styled from 'styled-components';

interface Props {
  icons?: React.ReactNode;
}

const Icons: React.FC<Props> = ({ icons }) => {
  return <IconContainer>{icons}</IconContainer>;
};

export default Icons;

const IconContainer = styled.div`
  flex-grow: 1;
  display: flex;

  & a {
    color: inherit;
  }

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  ${(props) => props.theme.window.tab} {
    align-items: flex-end;
  }

  ${(props) => props.theme.window.mobile} {
    justify-content: center;
    align-items: center;
  }
`;
