import React from 'react';

import styled, { css } from 'styled-components';

import InputBase, { BaseProps } from 'components/core/InputBase';

import {
  Title,
  BaseProps as TitleBaseProps,
  Text,
} from 'components/Typography';

export interface InputProps extends BaseProps {
  /**
   * 인풋 컴포넌트 안에 아이콘(24x24)을 추가할 수 있습니다.
   */
  icon?: React.ReactNode;
  /**
   * 아이콘의 위치를 선택할 수 있습니다.
   */
  alignIcon?: 'left' | 'right';
  /**
   * 인풋 컴포넌트의 라벨 텍스트를 정의할 수 있습니다.
   */
  label?: string;
  /**
   * id 값을 입력하면 label을 input 요소와 연결할 수 있습니다.
   */
  id?: string;
  /**
   * true인 경우 에러 메시지를 출력하여 에러 상태임을 표시합니다.
   */
  isError?: boolean;
  /**
   * 에러 메시지를 정의할 수 있습니다.
   */
  errorMessage?: string;
}

/**
 * `Input` 컴포넌트는 사용자의 입력 값을 받는데 사용됩니다.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      variant,
      icon,
      alignIcon,
      isFullWidth,
      isError,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    return (
      <Container isFullWidth={isFullWidth}>
        {label && (
          <Label as="label" size="sm" className="input-label" htmlFor={id}>
            {label}
          </Label>
        )}
        <InputContainer variant={variant} icon={icon} alignIcon={alignIcon}>
          {icon && (
            <IconContainer className="icon-container" alignIcon={alignIcon}>
              {icon}
            </IconContainer>
          )}

          <InputBase
            id={id}
            ref={ref}
            variant={variant}
            isFullWidth={isFullWidth}
            isError={isError}
            {...props}
          />
        </InputContainer>
        {isError && errorMessage && (
          <ErrorMessage size="sm">{errorMessage}</ErrorMessage>
        )}
      </Container>
    );
  },
);

export default Input;

Input.defaultProps = {
  variant: 'flushed',
  alignIcon: 'left',
};

type ContainerProps = Pick<InputProps, 'isFullWidth'>;

const Container = styled.div<ContainerProps>`
  display: inline-block;
  color: ${(props) => props.theme.color.PRIMARY};
  /* isFullWidth */
  width: ${(props) => props.isFullWidth && '100%'};
  & .input-label {
    display: block;
    margin-bottom: 10px;
  }
`;

type InputContainerProps = Pick<InputProps, 'variant' | 'icon' | 'alignIcon'>;

const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  /* variant */
  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          ${props.icon &&
          `${
            props.alignIcon === 'right'
              ? `& input { padding-right: 44px; } & .icon-container { margin-right: 10px; }`
              : `& input { padding-left: 44px; } & .icon-container { margin-left: 10px; }`
          }`}
        `;
      default:
        // flushed
        return css`
          ${props.icon &&
          `${
            props.alignIcon === 'right'
              ? `& input { padding-right: 34px; }`
              : `& input { padding-left: 34px; }`
          }`}
        `;
    }
  }}
`;

type IconContainerProps = Pick<InputProps, 'alignIcon'>;

const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  position: absolute;
  right: ${(props) => props.alignIcon === 'right' && 0};
`;

// Label component
interface LabelProps
  extends TitleBaseProps,
    React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = styled(Title)<LabelProps>``;

// ErrorMessage component
const ErrorMessage = styled(Text)`
  color: ${(props) => props.theme.color.WARNING};
  margin-top: 10px;
`;
