import styled, { css, keyframes } from "styled-components";
import KakaoLogin from "react-kakao-login";

import ButtonComponent from 'components/Button'
import theme from "layout/theme";

interface Props {
  round?: boolean;
  backgroundColor?: string;
  color?: string;
}

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

export const StyledKakaoLogin = styled(KakaoLogin)`
  cursor: pointer;
  position: relative;
  background-color: #ffe812;
  width: 280px;
  height: 48px;

  display: flex;
  align-items: center;

  border: 0px;
  border-radius: 2px;
  p {
    padding-top: 3px;
    width: 100%;
    text-align: center;
  }
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
  ${(props: Props) =>
    props.round &&
    css`
      border-radius: 100px;
      background-color: ${theme.color.WHITE};
      box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
      justify-content: center;
    `}
`;
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
  width: 280px;
  height: 48px;
  background-color: ${(props: Props) => props.backgroundColor};

  border: 0px;
  border-radius: 2px;

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
