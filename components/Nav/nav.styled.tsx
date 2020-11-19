import styled, { css } from "styled-components";
import theme from "layout/theme";
import * as T from "components/Text";

interface Props {
  fixed?: boolean;
  scrolled?: boolean;
  first?: boolean;
  active?: boolean;
}

export const NavWarp = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: ${theme.color.WHITE};
  ${(props: Props) =>
    props.fixed &&
    css`
      background-color: #fff0;
    `}
  ${(props: Props) =>
    props.scrolled &&
    css`
      background-color: ${theme.color.WHITE};
      transition: 0.6s;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    `}
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  @media (min-width: 0px) and (max-width: 767.98px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    padding: 0 16px;
  }
  position: relative;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 60px;
  height: 60px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavLink = styled(T.Text)`
  color: ${theme.color.GRAY5};
  margin: 0px;
  cursor: pointer;
  @media (min-width: 0px) and (max-width: 767.98px) {
    margin-left: 20px;
    font-size: 12px;
    font-weight: 500;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-left: 30px;
    font-size: 14px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) {
    margin-left: 48px;
    font-size: 14px;
  }
  @media (min-width: 1300px) and (max-width: 1599.98px) {
    margin-left: 48px;
    font-size: 14px;
  }
  @media (min-width: 1600px) {
    margin-left: 58px;
    font-size: 16px;
  }
  ${(props: Props) =>
    props.fixed &&
    css`
      color: ${theme.color.WHITE};
    `}
  ${(props: Props) =>
    props.scrolled &&
    css`
      color: ${theme.color.GRAY5};
      transition: 0.6s;
    `}
  ${(props: Props) =>
    props.first &&
    css`
      margin-left: 0px !important;
    `}
  ${(props: Props) =>
    props.active &&
    css`
      font-weight: bold;
    `}
`;
