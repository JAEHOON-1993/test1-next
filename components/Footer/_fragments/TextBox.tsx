import React from 'react';

import styled from 'styled-components';

import { Text } from 'components/Typography';

interface Props {
  label?: string;
  text1?: string;
  text2?: string;
  text3?: string;
}

const TextBox: React.FC<Props> = ({ label, text1, text2, text3 }) => {
  return (
    <Container className="textbox">
      {label && (
        <Text className="textbox__label" bold color="inherit">
          {label}
        </Text>
      )}
      {text1 && (
        <Text className="textbox__text" sm color="inherit">
          {text1}
        </Text>
      )}
      {text2 && (
        <Text className="textbox__text" sm color="inherit">
          {text2}
        </Text>
      )}
      {text3 && (
        <Text className="textbox__text" sm color="inherit">
          {text3}
        </Text>
      )}
    </Container>
  );
};

export default TextBox;

const Container = styled.div`
  flex-basis: 190px;

  & > .textbox__label {
    margin-bottom: 20px;
  }

  & > .textbox__text:not(:nth-last-of-type(1)) {
    margin-bottom: 10px;
  }

  ${(props) => props.theme.window.tab} {
    flex-basis: 155px;
  }

  ${(props) => props.theme.window.mobile} {
    flex-basis: auto !important;
    & > .textbox__label {
      margin-bottom: 9px;
    }
  }
`;
