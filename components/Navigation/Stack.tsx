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
  // const pageRef = useRef(null);
  const { stack, setStack } = StackStore;
  const { component } = props;
  const getPage = (element: any) => {
    return <Page>{element}</Page>;
  };
  useEffect(() => {
    if (isMobile) {
      setStack([...stack, getPage(component)]);
    } else {
      setStack([component]);
    }
  }, [component]);

  useEffect(() => {
    Router.beforePopState(({ url }) => {
      setTimeout(() => {
        window.history.pushState({}, url);
        console.log('stack[stack.length - 1].ref : ', stack[stack.length - 1]);
        console.log('stack[stack.length - 1].ref : ', stack[stack.length - 1]);
        if (stack.length > 1) {
          stack.pop();
        }
      }, 400);
      return false;
    });
  }, [stack]);

  return <TransitionGroup>{stack}</TransitionGroup>;
});

export default StackComponent;
