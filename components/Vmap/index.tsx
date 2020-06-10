import * as React from "react";
import styled from "styled-components";

type Props = {};

const Vmap = (props: Props) => <Heading active={false}>테스트</Heading>;

export default Vmap;

const Heading = styled.h1<{ active: boolean }>`
  color: ${(props) => (props.active ? "red" : "blue")};
`;
