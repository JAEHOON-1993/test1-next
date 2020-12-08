import styled, { css } from 'styled-components';

import theme from 'layout/theme';
import Container from 'components/Container';
import * as T from 'components/Text';

type styleProps = {
  transparent?: boolean;
  fixed?: boolean;
};
export const PageName = styled(T.Text)`
  position: absolute;
  color: ${theme.color.BLACK};
  font-weight: bold;
`;
export const EmptyBox = styled.div`
  height: 80px;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    height: 50px;
  }
`;
export const NavWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #fff;
  z-index: 9999;
  border-bottom: 1px solid #eee;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    height: 50px;
    border-bottom: 0px;
  }
  ${(props: styleProps) =>
    props.transparent &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(249, 249, 249, 0) 100%
      );

      transition: 0.4s;
      ${(props: styleProps) =>
        props.fixed &&
        css`
          background: none;
          background-color: #fff;
        `}
    `}
`;
export const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  height: 25px;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    position: absolute;
    width: 100px;
    height: 20px;
  }
`;
export const CustomContainer = styled(Container)`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
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
  ${(props) => props.theme.window.mobile} {
    > svg {
      margin-left: 15px;
    }
  }
`;
export const MobileRightBox = styled.div`
  display: none;
  margin-right: auto;
  > svg {
    cursor: pointer;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    display: block;
  }
`;

export const LeftBox = styled.div`
  border-left: 1px solid ${theme.color.GRAY5};
  margin-left: 20px;
  display: flex;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;
export const Link = styled.a`
  font-size: 15px;
  margin-left: 20px;
  text-decoration: none;
  color: ${theme.color.GRAY5};
  font-weight: bold;
`;

export const PCView = styled.div`
  display: block;
  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;
export const MobileView = styled.div`
  display: none;
  ${(props) => props.theme.window.mobile} {
    display: block;
  }
`;
