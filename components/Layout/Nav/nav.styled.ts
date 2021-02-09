import styled, { css } from 'styled-components';

import Container from 'components/Container';
import * as T from 'components/Typography';

interface styleProps {
  transparent?: boolean;
  noBorder?: boolean;
  fixed?: boolean;
  isQR?: boolean;
}

export const PageName = styled(T.Text)`
  position: absolute;
  color: ${(props) => props.theme.color.BLACK};
  font-weight: bold;
`;
export const EmptyBox = styled.div`
  height: 80px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 50px;
  }
`;

export const NavWrap = styled.div<styleProps>`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.background.PRIMARY};
  z-index: 9999;
  border-bottom: 1px solid ${(props) => props.theme.color.WHITE};
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 50px;
    border-bottom: ${(props) =>
      props.noBorder ? '0px' : `1px solid ${props.theme.color.WHITE}`};
  }

  ${(props) =>
    props.transparent &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(249, 249, 249, 0) 100%
      );

      transition: 0.4s;
      ${props.fixed &&
      css`
        background: none;
        background-color: ${props.theme.background.PRIMARY};
      `}
    `}

  /*QR Nav*/
  ${(props) =>
    props.isQR &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100px;
      padding: 0 75px;
      background: transparent;
      border: 0;

      @media screen and (max-width: 767.98px) {
        width: 100%;
        height: 130px;
        padding: 0 16px;
      }
    `}
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  height: 25px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    position: absolute;
    width: 100px;
    height: 20px;
  }

  ${(props: styleProps) =>
    props.isQR &&
    css`
      @media screen and (max-width: 767.98px) {
        position: unset;
      }
    `}
`;

export const CustomContainer = styled(Container)`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    justify-content: center;
    height: 50px;
  }
`;

export const MobileLeftBox = styled.div`
  margin-left: auto;
  > svg {
    cursor: pointer;
    margin-left: 20px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    > svg {
      margin-left: 15px;
    }
  }
`;
export const MobileRightBox = styled.div`
  display: none;
  margin-right: auto;
  opacity: 0;
  > svg {
    cursor: pointer;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    display: block;
    opacity: 1;
    transition: 0.4s;
  }
`;

export const LeftBox = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.GRAY5};
  margin-left: 20px;
  display: flex;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    display: none;
  }
  > a {
    font-size: 15px;
    margin-left: 20px;
    text-decoration: none;
    color: ${(props) => props.theme.color.GRAY5};
    font-weight: bold;
  }
`;

export const PCView = styled.div`
  display: block;
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
export const MobileView = styled.div`
  display: none;
  @media screen and (max-width: 767.98px) {
    display: block;
  }
`;
