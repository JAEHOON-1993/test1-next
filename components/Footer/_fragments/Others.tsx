import React from 'react';

import styled from 'styled-components';

import { Text } from 'components/Typography';

interface Props {
  terms?: React.ReactNode;
  copyright?: string;
}

const Others: React.FC<Props> = ({
  terms,
  copyright = 'ⓒABC All Right Reserved.',
}) => {
  return (
    <Container>
      <Terms>{terms}</Terms>

      <Text size="sm" color="inherit">
        {copyright}
      </Text>
    </Container>
  );
};

export default Others;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  ${(props) => props.theme.window.mobile} {
    justify-content: flex-end;
    align-items: center;
  }
`;

const Terms = styled.div`
  & > *:not(:last-child) {
    margin-right: 15px;
  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 10px;
  }
`;
