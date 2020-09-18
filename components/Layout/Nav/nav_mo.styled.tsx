import styled, { css } from "styled-components";

interface Props {
  fixed?: boolean;
  active?: boolean;
}

export const NavWarp = styled.div`
  height: 95px;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

export const LogoWrap = styled.div`
  padding-top: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Menu = styled.div`
  padding-top: 13px;
  position: relative;
  width: 100%;
  background-color: #fff;
  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 50px;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 90%
    );
  }
  ${(props: Props) =>
    props.fixed &&
    css`
      z-index: 1;
      position: fixed;
      top: 0;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    `}
`;

export const NavLink = styled.p`
  margin: 0px;
  height: 45px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  &:focus {
    outline: none;
  }
  ${(props: Props) =>
    props.active &&
    css`
      color: #006cb3;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        display: inline-block;
        position: absolute;
        top: 0;
        left: calc(50% - 4px);
        border-radius: 4px;
        width: 4px;
        height: 4px;
        border: 2px solid #006cb3;
      }
    `}
`;
