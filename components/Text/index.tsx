import styled, { css } from "styled-components";

type Props = {
  sm?: boolean;
  lg?: boolean;
};

export const Title = styled.h1`
  margin: 0px;
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  /* Tab */
  @media screen and (max-width: 991.98px) {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }
  ${(props: Props) =>
    props.lg &&
    css`
      font-size: 26px;
      line-height: 1.23;
      letter-spacing: -0.26px;
      /* Tab & Mobile */
      @media screen and (max-width: 991.98px) {
        font-size: 20px;
        line-height: 1.45;
        letter-spacing: -0.2px;
      }
    `}
  ${(props: Props) =>
    props.sm &&
    css`
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: -0.12px;
      /* Tab */
      @media screen and (max-width: 991.98px) {
        font-size: 10px;
        line-height: 1.6;
        letter-spacing: -0.1px;
      }
      /* Mobile */
      @media screen and (max-width: 767.98px) {
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: -0.12px;
      }
    `}
`;

export const Text = styled.p`
  margin: 0px;
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  /* Tab */
  @media screen and (max-width: 991.98px) {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }
  ${(props: Props) =>
    props.lg &&
    css`
      font-size: 26px;
      line-height: 1.23;
      letter-spacing: -0.26px;
      /* Tab & Mobile */
      @media screen and (max-width: 991.98px) {
        font-size: 20px;
        line-height: 1.45;
        letter-spacing: -0.2px;
      }
    `}
  ${(props: Props) =>
    props.sm &&
    css`
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: -0.12px;

      /* Tab */
      @media screen and (max-width: 991.98px) {
        font-size: 10px;
        line-height: 1.6;
        letter-spacing: -0.1px;
      }
      /* Mobile */
      @media screen and (max-width: 767.98px) {
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: -0.12px;
      }
    `}
`;

export const Button = styled.p`
  margin: 0px;
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  /* Tab */
  @media screen and (max-width: 991.98px) {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }
`;

export const ButtonSmall = styled.p`
  margin: 0px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  /* Tab */
  @media screen and (max-width: 991.98px) {
    font-size: 10px;
    line-height: 1.6;
    letter-spacing: -0.1px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.12px;
  }
`;

export const Caption = styled.p`
  margin: 0px;
  font-size: 10px;
  line-height: 1.6;
  letter-spacing: -0.1px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.12px;
  }
`;
