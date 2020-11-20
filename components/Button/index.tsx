import React from "react";
import styled, { css } from "styled-components";

import theme from "layout/theme";
import ButtonBase from "components/ButtonBase";

export type ButtonProps = {
  outline?: boolean;
  disabled?: boolean;
  round?: boolean;
  color?: string;
  style?: any;
  onClick?: any;
  children?: any;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;

type ButtonStyleProps = {
  outline?: boolean;
  round?: boolean;
  color?: string;
  disabled?: boolean;
};

const Button = styled(ButtonBase)`
  height: 50px;
  border: 0px;
  background-color: ${(props: ButtonStyleProps) =>
    props.color ? props.color : theme.color.PRIMARY};
  border-radius: ${theme.radius}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.WHITE};
  :focus {
    outline: none;
  }
  ${(props: ButtonStyleProps) =>
    props.round &&
    css`
      border-radius: 50px;
    `}
  ${(props: ButtonStyleProps) =>
    props.outline &&
    css`
      background-color: ${theme.color.WHITE};
      border: 1px solid
        ${(props: ButtonStyleProps) =>
          props.color ? props.color : theme.color.PRIMARY};
      color: ${(props: ButtonStyleProps) =>
        props.color ? props.color : theme.color.PRIMARY};
      span {
        background-color: ${(props: ButtonStyleProps) =>
          props.color ? `${props.color}77` : `${theme.color.PRIMARY}77`};
      }
    `}
  ${(props: ButtonStyleProps) =>
    props.disabled &&
    css`
      background-color: ${theme.color.GRAY3};
      border: 0px;
      color: ${theme.color.WHITE};
    `}
`;
