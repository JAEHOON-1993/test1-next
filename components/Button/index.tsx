import React from "react";
import styled from "styled-components";

import theme from "layout/theme";

export type ButtonProps = {
  style?: any;
  onClick?: any;
  children?: any;
};

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      <p>{children}</p>
    </Button>
  );
};

export default ButtonComponent;

const Button = styled.div`
  cursor: pointer;
  padding: 8px 25px;
  height: 50px;
  background-color: ${theme.color.PRIMARY};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    color: ${theme.color.WHITE};
    margin: 0px;
  }
`;
