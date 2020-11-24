/**
 * @author TokTokHan, Corp.
 * @Component
 * @module components.Container
 */
import styled from "styled-components";
import theme from "layout/theme";

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* Large PC */
  width: 1250px;

  /* Small PC */
  ${theme.window.pc} {
    width: 950px;
  }
  /* Tab */
  ${theme.window.tab} {
    width: 720px;
  }
  /* Mobile */
  ${theme.window.mobile} {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

export default Container;
