import React from "react";
import styled, { css } from "styled-components";

import * as T from "components/Text";
import theme from "layout/theme";
// components

type Props = {
  fixed?: boolean;
  style?: any;
};

const Texts: React.FC<Props> = () => {
  return (
    <>
      <h1 style={{ color: theme.color.PRIMARY }}>TYPOGRAPHY</h1>
      <TextBox>
        <T.Title lg>Title Large</T.Title>
        <T.Title>Title</T.Title>
        <T.Title sm>Title Small</T.Title>
      </TextBox>
      <TextBox>
        <T.Text>Text Large</T.Text>
        <T.Text>Text</T.Text>
        <T.Text>Text Small</T.Text>
      </TextBox>
      <TextBox last>
        <T.Button>Button</T.Button>
        <T.ButtonSmall>Small</T.ButtonSmall>
        <T.Caption>Caption</T.Caption>
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
