import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import Router from 'next/router';
import styled, { css } from 'styled-components';

import StackStore from 'stores/Stack';
import { observer } from 'mobx-react';

interface PageProps {
  load: boolean;
  pop: boolean;
  ref: any;
}
const Page = styled.div<PageProps>`
  z-index: 99;
  position: absolute;
  left: 100%;
  right: 0;
  width: 100%;
  ${(props) =>
    props.load &&
    css`
      transition: left 0.4s;
      left: 0%;
    `}
  ${(props) =>
    props.load &&
    props.pop &&
    css`
      transition: left 0.4s;
      left: 100%;
    `}
`;
interface Props {
  children: any;
  // ref: any;
}

// const PageComponent: React.FC<Props> = observer(({ children }) => {
//   const pageRef = useRef<any>(null);
//   const { stack } = StackStore;
//   const [load, setLoad] = useState<boolean>(false);
//   const [pop, setPop] = useState<boolean>(false);

//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       pageRef.current.focus();
//     },
//   }));
//   useEffect(() => {
//     setLoad(true);
//   }, []);
//   useEffect(() => {}, [stack]);

//   return (
//     <Page ref={pageRef} load={load} pop={pop}>
//       {children}
//     </Page>
//   );
// });

const PageComponent = React.forwardRef(({ children, ...props }: Props, ref) => {
  const { stack } = StackStore;
  const pageRef = useRef<any>(null);
  const [load, setLoad] = useState<boolean>(false);
  const [pop, setPop] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    focus: () => {
      pageRef.current.focus();
    },
  }));
  useEffect(() => {
    setLoad(true);
  }, []);
  useEffect(() => {}, [stack]);
  return (
    <Page {...props} ref={pageRef} load={load} pop={pop}>
      {children}
    </Page>
  );
});

export default PageComponent;
