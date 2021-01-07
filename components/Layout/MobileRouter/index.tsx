import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Router from 'next/router';
import RouterStore, { DirectionProps } from 'stores/Router';
import theme from 'layout/theme';

// import Footer from "./Footer";

interface Props {
  pageName?: string;
  noHeader?: boolean;
  noBorder?: boolean;
  centered?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
  title?: string;
}

const MobileRouter = ({
  children,
}: Props) => {
  const { direction, routing, setRouting, push } = RouterStore;

  useEffect(() => {
    // 뒤로가기
    const beforePopState = ({url, as, options} : any) => {
      // console.log('beforePopState : ', url);
      // console.log('beforePopState as : ', as);
      // console.log('beforePopState options : ', options);
      setRouting("right");
      // push(as, as, "right");
      return false
    }
    Router.beforePopState(beforePopState);
  }, [Router]);

  useEffect(() => {
    console.log("direction : ", direction)
    console.log("routing : ", routing)
  },[direction, routing, Router]);

  return (
    <Animation direction={direction} routing={routing}>
      {children}
    </Animation>
  );
};

export default MobileRouter;

interface AnimationProps {
  direction: DirectionProps;
  routing: boolean;
}
const Animation = styled.div<AnimationProps>`
  z-index: 99;
  position: absolute;
  left: 0px;
  right: 0;
  width: 100%;
  ${theme.window.mobile}{
    ${props => props.routing ? `
      ${props.direction === 'left' && css`
          margin-left: -100%;
          transition: margin-left 0.4;
      `}
      ${props.direction === 'right' && css`
          margin-left: 100%;
          transition: margin-left 0.4;
      `}
    ` : css`
      margin-left: 0%;
    `}
  }
  
`;