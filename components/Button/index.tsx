import React, { useRef } from "react";
import styled, { css, keyframes } from "styled-components";

import theme from "layout/theme";

export type ButtonProps = {
  outline?: boolean;
  disabled?: boolean;
  round?: boolean;
  color?: string;
  style?: any;
  onClick?: any;
  children?: any;
};

const ButtonComponent: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  const buttonRef = useRef<any>(null)
  const rippleRef = useRef<any>(null)

  const clickHandler = (e: any) => {
    const circle = rippleRef?.current;
    const button = buttonRef?.current;
    const diameter = Math.max(button.clientWidth, button.clientWidth);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    if (circle) {
      circle.remove();
    }
    button.appendChild(circle);
    onClick(e);
  }
  return (
    <Button ref={buttonRef} onClick={clickHandler} {...props}>
      {children}
      <span ref={rippleRef}/>
    </Button>
  );
};

export default ButtonComponent;



type ButtonStyleProps = {
  outline?: boolean;
  round?: boolean;
  color?: string;
  disabled?: boolean;
};

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

const Button = styled.button`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 50px;
  border: 0px;
  background-color: ${(props:ButtonStyleProps) => props.color ? props.color :theme.color.PRIMARY};
  border-radius: ${theme.radius}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.WHITE};
  :focus {
    outline: none;
  }
  span {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${ripple} 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
  ${(props: ButtonStyleProps) => props.round && css`
    border-radius: 50px;
  `}
  ${(props: ButtonStyleProps) => 
    props.outline && css`
      background-color: ${theme.color.WHITE};
      border: 1px solid ${(props:ButtonStyleProps) => props.color ? props.color :theme.color.PRIMARY};
      color: ${(props:ButtonStyleProps) => props.color ? props.color :theme.color.PRIMARY};
      span {
        background-color: ${(props:ButtonStyleProps) => props.color ? `${props.color}77` :`${theme.color.PRIMARY}77`};
      }
    `
  }
  ${(props: ButtonStyleProps) => 
    props.disabled && css`
      background-color: ${theme.color.GRAY3};
      border: 0px;
      color: ${theme.color.WHITE};
    `
  }
`;