import React, { useEffect, useRef } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Page from './Page';

import StackStore from 'stores/Stack';
import { observer } from 'mobx-react';

interface Props {
  component: any;
}

const TransitionGroup = styled.div`
  overflow: hidden;
`;

const StackComponent: React.FC<Props> = observer((props: any) => {
  const pageRef = useRef<any>(null);
  const { stack, setStack } = StackStore;
  const { component } = props;
  const getPage = (element: any) => {
    return <Page ref={pageRef}>{element}</Page>;
  };

  useEffect(() => {
    if (isMobile) {
      setStack([...stack, getPage(component)]);
    } else {
      setStack([component]);
    }
  }, [component]);

  // console.log('stack props', props);

  useEffect(() => {
    Router.beforePopState(({ url }) => {
      setTimeout(() => {
        window.history.pushState({}, url);
        // console.log('pageRef.current.focus ==>', pageRef?.current?.focus());
        // console.log('pop stack', stack[stack.length - 2].ref.current);

        // console.log('stack[stack.length - 1].ref : ', stack[stack.length - 1]);
        if (stack.length > 1) {
          // stack[stack.length - 2].ref.current.moveLeft();
          stack[stack.length - 2].ref.current.focus();
          stack.pop();
        }
      }, 400);
      return false;
    });
  }, [stack]);

  return <TransitionGroup>{stack}</TransitionGroup>;
});

export default StackComponent;
