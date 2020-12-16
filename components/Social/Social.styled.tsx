import styled, { css } from "styled-components";

import ButtonComponent from "components/Button";
import theme from "layout/theme";

interface Props {
  round?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
}

export const Hr = styled.div`
  width: 1px;
  height: 26px;
  background-color: ${theme.color.WHITE};
  margin-left: 5px;
  margin-right: 15px;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  ${(props: Props) =>
    props.round &&
    css`
      position: absolute;
      left: 0px;
    `}
`;

export const Button = styled(ButtonComponent)`
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 45px;
  background-color: ${(props: Props) => props.backgroundColor};

  border: 1px solid ${(props: Props) => props.borderColor};
  border-radius: 5px;

  display: flex;
  align-items: center;
  p {
    padding-top: 3px;
    width: 100%;
    text-align: center;
  }
  :focus {
    outline: none;
  }
  ${(props: Props) =>
    props.round &&
    css`
      border-radius: 100px;
      background-color: ${theme.color.WHITE};
      box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
      justify-content: center;
    `}
`;
