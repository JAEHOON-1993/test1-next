/**
 * @author TokTokHan, Corp.
 * @Component
 * @module components.Container
 */
import styled, { css } from 'styled-components';

interface ContainerProps {
  height?: string;
  position?: string;
  mobileNoPadding?: boolean;
}

const Container = styled.div<ContainerProps>`
  position: ${(props) => props.position && props.position};
  height: ${(props) => props.height && props.height};

  padding-left: 15px;
  padding-right: 15px;
  margin: auto;

  width: 100%;
  /* Large PC */
  max-width: 1280px;

  /* Small PC */
  ${(props) => props.theme.window.pc} {
    max-width: 980px;
  }
  /* Tab */
  ${(props) => props.theme.window.tab} {
    max-width: 750px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    max-width: calc(100% - 32px);
    padding-right: 16px;
    padding-left: 16px;
    ${(props) =>
      props.mobileNoPadding &&
      css`
        width: 100%;
        padding: 0px;
      `}
  }
`;

export default Container;
