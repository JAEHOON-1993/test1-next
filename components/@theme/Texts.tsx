import React from 'react';
import styled, { css, ThemeConsumer } from 'styled-components';

import { Title, Text, Button } from 'components/Typography';

import { Props } from './types';

const Texts: React.FC<Props> = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <h1 style={{ color: theme.color.PRIMARY }}>TYPOGRAPHY</h1>
          <TextBox>
            <Title size="lg">Title Large</Title>
            <Title>Title</Title>
            <Title>Title with Bold</Title>
            <Title color="blue">Title with Color</Title>
            <Title size="sm">Title Small</Title>
          </TextBox>
          <TextBox>
            <Text>Text Large</Text>
            <Text>Text</Text>
            <Text>Text with Bold</Text>
            <Text color="pink">Text with Color</Text>
            <Text>Text Small</Text>
          </TextBox>
          <TextBox last>
            <Button>Button</Button>
            <Button bold>Button with Bold</Button>
            <Button color={theme.color.PRIMARY}>Button with Color</Button>
            <Button sm>Small</Button>
            <Button sm bold>
              Small with Thin Bold
            </Button>
            <Button sm color={theme.color.SECONDARY}>
              Small with Color
            </Button>
          </TextBox>
        </>
      )}
    </ThemeConsumer>
  );
};

export default Texts;

interface styleProps {
  last?: boolean;
}

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 1px solid #e6e6e6;
  ${(props: styleProps) =>
    props.last &&
    css`
      border-bottom: 0px;
    `}

  margin-bottom: 20px;
  padding-bottom: 20px;

  h1,
  h2,
  h3,
  p {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;
