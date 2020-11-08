import React from "react";
import styled from "styled-components";

import theme from "layout/theme";
// components

type Props = {
  fixed?: boolean;
  style?: any;
};

const Colors: React.FC<Props> = () => {
  return (
    <>
      <h1>Brand Color</h1>
      <ColorBox>
        <Color color={theme.color.PRIMARY}>
          <div />
          <p>PRIMARY</p>
          <p>{theme.color.PRIMARY}</p>
        </Color>
        <Color color={theme.color.SECONDARY}>
          <div />
          <p>SECONDARY</p>
          <p>{theme.color.SECONDARY}</p>
        </Color>
      </ColorBox>
      <h1>Gray Scale</h1>
      <ColorBox>
        <Color color={theme.color.BLACK}>
          <div />
          <p>BLACK</p>
          <p>{theme.color.BLACK}</p>
        </Color>
        <Color color={theme.color.DARKGRAY}>
          <div />
          <p>DARKGRAY</p>
          <p>{theme.color.DARKGRAY}</p>
        </Color>
        <Color color={theme.color.GRAY}>
          <div />
          <p>GRAY</p>
          <p>{theme.color.GRAY}</p>
        </Color>
        <Color color={theme.color.LIGHTGRAY}>
          <div />
          <p>LIGHTGRAY</p>
          <p>{theme.color.LIGHTGRAY}</p>
        </Color>
        <Color color={theme.color.PALEGRAY}>
          <div />
          <p>PALEGRAY</p>
          <p>{theme.color.PALEGRAY}</p>
        </Color>
        <Color color={theme.color.WHITE}>
          <div style={{ border: "1px solid #767676" }} />
          <p>WHITE</p>
          <p>{theme.color.WHITE}</p>
        </Color>
      </ColorBox>
      <h1>Alert Color</h1>
      <ColorBox>
        <Color color={theme.color.SUCCESS}>
          <div />
          <p>SUCCESS</p>
          <p>{theme.color.SUCCESS}</p>
        </Color>
        <Color color={theme.color.DANGER}>
          <div />
          <p>DANGER</p>
          <p>{theme.color.DANGER}</p>
        </Color>
        <Color color={theme.color.WARNING}>
          <div />
          <p>WARNING</p>
          <p>{theme.color.WARNING}</p>
        </Color>
        <Color color={theme.color.INFO}>
          <div />
          <p>INFO</p>
          <p>{theme.color.INFO}</p>
        </Color>
      </ColorBox>
    </>
  );
};

export default Colors;

type styleProps = {
  color: string;
};

const ColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Color = styled.div`
  margin-bottom: 10px;
  > div {
    border-radius: 4px;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: ${(props: styleProps) => props.color};
  }
  > p {
    :nth-of-type(1) {
      margin: 0px;
    }
    :nth-of-type(2) {
      margin: 0px;
      color: ${theme.color.DARKGRAY};
    }
  }
`;
