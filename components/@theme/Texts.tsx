import React from "react";
import styled, {css} from "styled-components";

import * as Text from 'components/Text';
import theme from "layout/theme";
// components

type Props = {
  fixed?: boolean;
  style?: any;
};

const Texts: React.FC<Props> = () => {
  return (
    <>
      <h1 style={{color: theme.color.PRIMARY}}>TYPOGRAPHY</h1>
      <TextBox>
        <Text.LargeTitle>Large Title</Text.LargeTitle>
        <Text.Title>Title</Text.Title>
        <Text.SubTitle>SubTitle</Text.SubTitle>
      </TextBox>
      <TextBox>
        <Text.Large>Large</Text.Large>
        <Text.Body>Body</Text.Body>
        <Text.Small>Small</Text.Small>
      </TextBox>
      <TextBox last>
        <Text.Button>Button</Text.Button>
        <Text.ButtonSmall>Small</Text.ButtonSmall>
        <Text.Caption>Caption</Text.Caption>
      </TextBox>
    </>
  );
};

export default Texts;

type styleProps = {
  last?: boolean;
};

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 1px solid #e6e6e6;
  ${(props:styleProps) => props.last && css`
    border-bottom: 0px;
  `}

  margin-bottom: 20px;
  padding-bottom: 20px;

  h1,h2,h3,p {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;