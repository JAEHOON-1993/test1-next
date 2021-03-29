import React from 'react';

import styled, { css } from 'styled-components';

export interface BaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 인풋은 2가지 스타일로 제공됩니다. 기본은 'flushed' 입니다.
   */
  variant?: 'flushed' | 'outline';
  /**
   * true인 경우 인풋의 상태가 disabled로 변합니다.
   */
  isDisabled?: boolean;
  /**
   * true인 경우 부모 요소의 가로 길이 만큼의 영역을 갖습니다.
   */
  isFullWidth?: boolean;
  /**
   * true인 경우 보더의 색상을 변경시켜 에러 상태임을 표시합니다.
   */
  isError?: boolean;
}

const sizes = {
  pc: css`
    width: 402px;
    height: 40px;
  `,
  tab: css`
    width: 410px;
    height: 40px;
  `,
  mobile: css`
    width: 343px;
    height: 40px;
  `,
};

const StyledInput = styled.input<BaseProps>`
  appearance: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.GRAY3};
  &::placeholder {
    color: currentColor;
  }
  /* width & height & font-size & line-height */
  font-size: 15px;
  line-height: 27px;
  /* Pc */
  ${sizes['pc']}
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 26px;
    ${sizes['tab']}
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    ${sizes['mobile']}
    font-size: 16px;
    line-height: 28px;
  }
  /* isFullWidth */
  width: ${(props) => props.isFullWidth && '100%'};
  /* border */
  border-color: ${(props) => props.theme.color.GRAY3};
  border-style: solid;
  /* variant */
  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          padding: 0 10px;
          background-color: ${props.theme.color.WHITE};
          border-width: 1px;
        `;
      default:
        // flushed
        return css`
          padding: 0;
          background-color: transparent;
          border-width: 0 0 2px 0;
        `;
    }
  }}
  /* when value filled */
  &:not(:placeholder-shown) {
    color: ${(props) => props.theme.color.BLACK};
    border-color: ${(props) => props.theme.color.BLACK};
  }
  /* isDisabled */
  background-color: ${(props) => props.isDisabled && props.theme.color.GRAY2};
  /* isError */
  border-color: ${(props) =>
    props.isError && `${props.theme.color.WARNING} !important`};
`;

/**
 * `InputBase` 컴포넌트는 최소한의 스타일 포함합니다. 더 많은 스타일, 로직이 추가된 `Input` 컴포넌트를 만드는데 사용됩니다.
 */
const InputBase = React.forwardRef<HTMLInputElement, BaseProps>(
  ({ isDisabled, ...props }, ref) => {
    return (
      <StyledInput
        ref={ref}
        disabled={isDisabled}
        isDisabled={isDisabled}
        {...props}
      />
    );
  },
);

export default InputBase;

InputBase.defaultProps = {
  variant: 'flushed',
};
