import React from "react";

// components
import Container from "components/Container";
import ContentContainer from "./Content";

import Tabs from "components/Tabs";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MainContainer: React.FC<Props> = () => {
  return (
    <div style={{ flexDirection: "column" }}>
      <Tabs />
      <Container>
        <ContentContainer />
      </Container>
    </div>
  );
};

export default MainContainer;
