import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import styled, { css } from 'styled-components';

import StackStore from 'stores/Stack';

interface PageProps {
  load: boolean;
  pop: boolean;
  left?: string;
  ref?: any;
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
    // props.load &&
    props.pop &&
    css`
      transition: left 0.4s;

      left: 0%;
    `}
`;
interface Props {
  children: any;
  pageRef?: any;
  left?: string;
}

const PageComponent = React.forwardRef(({ children, ...props }: Props, ref) => {
  const { stack } = StackStore;
  const pageRef = useRef<any>(null);
  const [load, setLoad] = useState<boolean>(false);
  const [pop, setPop] = useState<boolean>(false);

  // console.log('ref', ref);

  useImperativeHandle(ref, () => ({
    moveLeft: () => {
      // console.log('pageRef?.current', pageRef?.current);
      const page = pageRef.current;
      page.style.left = '-50%';
    },
    focus: () => {
      setPop(true);
      // pageRef?.current.focus();
    },
  }));

  useEffect(() => {
    setLoad(true);
  }, []);

  useEffect(() => {}, [stack]);

  // console.log('page ref', ref);

  return (
    <Page {...props} ref={pageRef} load={load} pop={pop}>
      {children}
    </Page>
  );
});

export default PageComponent;

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
