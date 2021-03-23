import styled, { css } from 'styled-components';

export interface BaseProps {
  /**
   * 4가지 사이즈가 제공됩니다. 기본은 md입니다.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * 컬러 값을 이용하여 색상을 변경할 수 있습니다. 기본은 inherit입니다.
   */
  color?: string;
}

const sizes = {
  sm: {
    pc: css`
      font-size: 12px;
      line-height: 18px;
    `,
    tab: css`
      font-size: 10px;
      line-height: 16px;
    `,
    mobile: css`
      font-size: 12px;
      line-height: 18px;
    `,
  },
  md: {
    pc: css`
      font-size: 15px;
      line-height: 27px;
    `,
    tab: css`
      font-size: 14px;
      line-height: 26px;
    `,
    mobile: css`
      font-size: 16px;
      line-height: 28px;
    `,
  },
  lg: {
    pc: css`
      font-size: 26px;
      line-height: 42px;
    `,
    tab: css`
      font-size: 20px;
      line-height: 29px;
    `,
    mobile: css`
      font-size: 20px;
      line-height: 29px;
    `,
  },
  xl: {
    pc: css`
      font-size: 35px;
      line-height: 52px;
    `,
    tab: css`
      font-size: 26px;
      line-height: 38px;
    `,
    mobile: css`
      font-size: 26px;
      line-height: 38px;
    `,
  },
};

/**
 * `Title` 컴포넌트는 타이틀 위치에 활용됩니다. 항상 Bold로 스타일을 정의합니다.
 */
export const Title = styled.h1<BaseProps>`
  /* font-weight  */
  font-weight: 700;
  /* letter-spacing */
  letter-spacing: 0;
  /* color */
  color: ${(props) => (props.color ? props.color : 'inherit')};

  /* font-size & line-height */
  /* Pc */
  ${(props) => sizes[props.size || 'md']['pc']}
  /* Tab */
  ${(props) => props.theme.window.tab} {
    ${(props) => sizes[props.size || 'md']['tab']}
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    ${(props) => sizes[props.size || 'md']['mobile']}
  }
`;

/**
 * `Text` 컴포넌트는 본문 및 일반 컨텐츠 영역에 활용됩니다. 항상 Normal(Regular)로 스타일을 정의합니다.
 */
export const Text = styled.p<BaseProps>`
  /* font-weight  */
  font-weight: 400;
  /* letter-spacing */
  letter-spacing: 0;
  /* color */
  color: ${(props) => (props.color ? props.color : 'inherit')};

  /* font-size & line-height */
  /* Pc */
  ${(props) => sizes[props.size || 'md']['pc']}
  /* Tab */
  ${(props) => props.theme.window.tab} {
    ${(props) => sizes[props.size || 'md']['tab']}
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    ${(props) => sizes[props.size || 'md']['mobile']}
  }
`;

type Props = {
  sm?: boolean;
  lg?: boolean;
  xlg?: boolean;
  bold?: boolean;
  color?: string;
};

export const Button = styled.p<Props>`
  margin: 0px;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.15px;
  font-weight: ${(props) => props.bold && 'bold'};
  color: ${(props) => (props.color ? props.color : props.theme.color.BUTTON)};
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.16px;
  }
  ${(props) =>
    props.sm &&
    css`
      font-size: 12px;
      line-height: 18px;
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
        line-height: 18px;
        letter-spacing: -0.12px;
      }
    `}
`;
