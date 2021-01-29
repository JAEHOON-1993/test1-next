import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Router from 'next/router';
import RouterStore, { DirectionProps } from 'stores/Router';

import { observer } from 'mobx-react';

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

const MobileRouter = observer(({ children }: Props) => {
  const { direction, routing, push } = RouterStore;
  
  console.log('')
  useEffect(() => {
    // 뒤로가기
    const beforePopState = ({ url, as, options }: any) => {
      console.log('================== 뒤로가기: POP');
      console.log('beforePopState : ', url);
      console.log('beforePopState options : ', options);
      // setRouting('right');
      push(as, as, 'right');
      return false;
    };
    Router.beforePopState(beforePopState);

    const routeChangeComplete = async ({ url }: any) => {
      console.log('================== 앞으로가기: PUSH');
      // TODO Router push...
      console.log('routeChangeComplete : ', url);
    };
    Router.events.on('routeChangeComplete', routeChangeComplete);
    return () => {
      Router.events.off('routeChangeComplete', routeChangeComplete);
    };
  }, [Router]);

  useEffect(() => {
    console.log('direction : ', direction);
    console.log('routing : ', routing);
  }, [direction, routing, Router]);

  return (
    <Animation direction={direction} routing={routing}>
      {children}
    </Animation>
  );
});

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
  transition: margin-left 0.4s;

  ${(props) => props.theme.window.mobile} {
    ${(props) =>
      !props.routing &&
      css`
        margin-left: 0%;
      `}
    ${(props) =>
      props.routing &&
      props.direction === 'right' &&
      css`
        margin-left: 100%;
      `}
      ${(props) =>
      props.routing &&
      props.direction === 'left' &&
      css`
        margin-left: -100%;
      `}
  }
`;
