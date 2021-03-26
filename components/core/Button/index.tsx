import React from 'react';

import styled, { css } from 'styled-components';

interface BaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼은 2가지 색상으로 제공됩니다. 기본은 'primary' 입니다.
   */
  colorScheme?: 'primary' | 'point';
  /**
   * 4가지 사이즈가 제공됩니다. 기본은 md입니다.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * 버튼은 2가지 스타일로 제공됩니다. 기본은 'solid' 입니다.
   */
  variant?: 'solid' | 'outline';
  /**
   * true인 경우 disabled 상태로 변하고 스피너가 나타납니다.
   */
  isLoading?: boolean;
  /**
   * true인 경우 버튼의 상태가 disabled로 변합니다.
   */
  isDisabled?: boolean;
  /**
   * true인 경우 버튼의 양끝이 부드럽게 변합니다.
   */
  isRound?: boolean;
  /**
   * true인 경우 버튼 컴포넌트의 컨테이너 가로 길이 만큼의 영역을 갖습니다.
   */
  isFullWidth?: boolean;
  /**
   * true인 경우 label 길이에 맞춰 유동적으로 버튼 길이가 변합니다.
   */
  isHugging?: boolean;
}

const sizes = {
  xs: {
    pc: css`
      width: 84px;
      height: 40px;
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
  sm: {
    pc: css`
      width: 190px;
      height: 50px;
      font-size: 15px;
      line-height: 27px;
    `,
    tab: css`
      width: 200px;
      font-size: 14px;
      line-height: 26px;
    `,
    mobile: css`
      width: 165px;
      font-size: 16px;
      line-height: 28px;
    `,
  },
  md: {
    pc: css`
      width: 352px;
      height: 50px;
      font-size: 15px;
      line-height: 27px;
    `,
    tab: css`
      width: 360px;
      font-size: 14px;
      line-height: 26px;
    `,
    mobile: css`
      width: 293px;
      font-size: 16px;
      line-height: 28px;
    `,
  },
  lg: {
    pc: css`
      width: 402px;
      height: 50px;
      font-size: 15px;
      line-height: 27px;
    `,
    tab: css`
      width: 410px;
      font-size: 14px;
      line-height: 26px;
    `,
    mobile: css`
      width: 343px;
      font-size: 16px;
      line-height: 28px;
    `,
  },
};

const StyledButton = styled.button<BaseProps>`
  appearance: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
  /* font-family */
  font-family: inherit;
  /* font-weight */
  font-weight: 700;
  /* letter-spacing */
  letter-spacing: 0;
  /* cursor */
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  /* border-radius */
  border-radius: ${(props) => (props.isRound ? '9999px' : '5px')};

  /* width & height & font-size & line-height */
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

  /* isFullWidth */
  width: ${(props) => props.isFullWidth && '100%'};
  /* isHugging */
  width: ${(props) => props.isHugging && 'auto'};
  padding: ${(props) =>
    props.isHugging ? (props.size === 'xs' ? '0px 15px' : '0px 50px') : null};

  /* colorScheme */
  ${(props) => {
    switch (props.colorScheme) {
      case 'point':
        return css`
          color: ${props.theme.color.POINT};
          background-color: ${props.theme.color.POINT};
        `;
      default:
        // primary
        return css`
          color: ${props.theme.color.PRIMARY};
          background-color: ${props.theme.color.PRIMARY};
        `;
    }
  }}

  /* isDisabled || isLoading */
  color: ${(props) => props.isDisabled && props.theme.color.GRAY3};
  background-color: ${(props) => props.isDisabled && props.theme.color.GRAY3};

  /* isLoading */
  & > *:not(.spinner-container) {
    opacity: ${(props) => props.isLoading && 0};
  }

  /* variant */
  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid currentColor;
        `;
      default:
        // solid
        return css`
          color: ${props.theme.color.WHITE};
          border: none;
        `;
    }
  }}
`;

export interface ButtonProps extends BaseProps {
  /**
   * 버튼 label 왼쪽에 아이콘을 추가할 수 있습니다.
   */
  leftIcon?: React.ReactNode;
  /**
   * 버튼 label 오른쪽에 아이콘을 추가할 수 있습니다.
   */
  rightIcon?: React.ReactNode;
}

/**
 * `Button` 컴포넌트는 어떤 액션을 트리거하는데 사용합니다.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, leftIcon, rightIcon, isDisabled, isLoading, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        disabled={isDisabled}
        isDisabled={isDisabled || isLoading}
        isLoading={isLoading}
        {...props}
      >
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        {!isLoading ? (
          children
        ) : (
          <>
            <span>{children}</span>
            <SpinnerContainer className="spinner-container">
              <Spinner />
            </SpinnerContainer>
          </>
        )}
        {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
      </StyledButton>
    );
  },
);

export default Button;

Button.defaultProps = {
  size: 'md',
  variant: 'solid',
  colorScheme: 'primary',
};

const LeftIconContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;
const RightIconContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  display: flex;
`;

const Spinner = styled.div`
  display: inline-block;
  border-top: 2px solid currentcolor;
  border-right: 2px solid currentcolor;
  border-bottom-style: solid;
  border-left-style: solid;
  border-radius: 9999px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-bottom-color: transparent;
  border-left-color: transparent;
  color: currentcolor;
  width: 20px;
  height: 20px;
  animation: spin 0.7s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
