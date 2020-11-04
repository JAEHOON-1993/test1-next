/**
 * @author TokTokHan, Corp.
 * @Component
 * @module components.Container
 */
import styled from "styled-components";

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* Large PC */
  width: 1250px;

  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    width: 950px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    width: 720px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

export default Container;
