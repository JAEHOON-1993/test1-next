/**
 * @author TokTokHan, Corp.
 * @Component
 * @module components.Container
 */
import styled from 'styled-components';

interface ContainerProps {
  padding?: string;
}

const Container = styled.div<ContainerProps>`
  width: 924px;
  margin: 0 auto;
  padding: ${(props) => props.padding && props.padding};

  // large pc
  // width: 1250px;

  /* Tab */
  ${(props) => props.theme.window.tab} {
    width: 750px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    width: 100%;
  }
`;

export default Container;
