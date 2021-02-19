import styled, { css } from 'styled-components';

type Props = {
  sm?: boolean;
  lg?: boolean;
  xlg?: boolean;
  bold?: boolean;
  color?: string;
};

export const Title = styled.h1<Props>`
  margin: 0px;
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => props.theme.color.BLACK};
  color: ${(props) => props.color && props.color};
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }

  ${(props) =>
    props.xlg &&
    css`
      font-size: 35px;
      line-height: 52px;
      letter-spacing: -0.35px;
      ${(props) => props.theme.window.tab} {
        font-size: 26px;
        line-height: 38px;
        letter-spacing: -0.26px;
      }
    `}

  ${(props) =>
    props.lg &&
    css`
      font-size: 26px;
      line-height: 42px;
      letter-spacing: -0.26px;
      /* Tab & Mobile */
      ${(props) => props.theme.window.tab} {
        font-size: 20px;
        line-height: 29px;
        letter-spacing: -0.2px;
      }
    `}
  ${(props) =>
    props.sm &&
    css`
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: -0.12px;
      /* Tab */
      ${(props) => props.theme.window.tab} {
        font-size: 10px;
        line-height: 1.6;
        letter-spacing: -0.1px;
      }
      /* Mobile */
      ${(props) => props.theme.window.mobile} {
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: -0.12px;
      }
    `}
`;

export const Text = styled.p<Props>`
  margin: 0px;
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => props.theme.color.BLACK};
  color: ${(props) => props.color && props.color};
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }

  ${(props) =>
    props.xlg &&
    css`
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.26px;
    `}
  ${(props) =>
    props.lg &&
    css`
      font-size: 26px;
      line-height: 42px;
      letter-spacing: -0.26px;
      /* Tab & Mobile */
      ${(props) => props.theme.window.tab} {
        font-size: 20px;
        line-height: 29px;
        letter-spacing: -0.2px;
      }
    `}
  ${(props) =>
    props.sm &&
    css`
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: -0.12px;

      /* Tab */
      ${(props) => props.theme.window.tab} {
        font-size: 10px;
        line-height: 1.6;
        letter-spacing: -0.1px;
      }
      /* Mobile */
      ${(props) => props.theme.window.mobile} {
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: -0.12px;
      }
    `}
`;

export const Button = styled.p<Props>`
  margin: 0px;
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => props.theme.color.BLACK};
  color: ${(props) => props.color && props.color};
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }
`;

export const ButtonSmall = styled.p<Props>`
  margin: 0px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => props.theme.color.BLACK};
  color: ${(props) => props.color && props.color};
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 10px;
    line-height: 1.6;
    letter-spacing: -0.1px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.12px;
  }
`;
