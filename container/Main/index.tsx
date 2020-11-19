import React from "react";

// components
import Container from "components/Container";
import TitleContainer from "./Title";
import BannerContainer from "./Banner";
import MenuContainer from "./Menu";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MainContainer: React.FC<Props> = () => {
  return (
    <Container>
      <TitleContainer />
      <BannerContainer />
      <MenuContainer />
    </Container>
  );
};

export default MainContainer;
