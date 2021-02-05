import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Router from 'next/router';
import RouterStore, { DirectionProps } from 'stores/Router';

import { observer } from 'mobx-react';

interface Props {
  children?: React.ReactNode;
}

const MobileRouter = observer(({ children }: Props) => {
  const { direction, newPageDirection, routing, pop } = RouterStore;

  useEffect(() => {
    const onPopPage = ({ url, as }: any) => {
      pop(url, as);
      return false;
    };
    Router.beforePopState(onPopPage);
  }, [Router]);

  return (
    <Animation
      direction={direction}
      routing={routing}
      newPageDirection={newPageDirection}
    >
      {children}
    </Animation>
  );
});

export default MobileRouter;

interface AnimationProps {
  direction: DirectionProps;
  newPageDirection: DirectionProps;
  routing: boolean;
}
const Animation = styled.div<AnimationProps>`
  z-index: 99;
  position: absolute;
  left: 0px;
  right: 0;
  width: 100%;
  /* max-width: 600px;
  margin: 0 auto; */
  transition: left 0.4s;

  ${(props) => props.theme.window.mobile} {
    ${(props) =>
      !props.routing &&
      css`
        left: 0%;
      `}

    ${(props) =>
      props.routing &&
      props.direction === 'right' &&
      css`
        left: 100%;
      `}

      ${(props) =>
      props.routing &&
      props.direction === 'left' &&
      css`
        left: -100%;
      `}

      ${(props) =>
      props.routing &&
      props.direction === null &&
      props.newPageDirection !== null &&
      css`
        display: none;
        transition: none;
      `}

      ${(props) =>
      props.routing &&
      props.direction === null &&
      props.newPageDirection === 'right' &&
      css`
        display: block;
        left: -100%;
      `}

      ${(props) =>
      props.routing &&
      props.direction === null &&
      props.newPageDirection === 'left' &&
      css`
        display: block;
        left: 100%;
      `}
  }
`;
