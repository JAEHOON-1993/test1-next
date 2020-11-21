import React from "react";
import styled from "styled-components";
import theme from "layout/theme";

// components
import SocialBoxContainer from "./SocialBox";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MainContainer: React.FC<Props> = () => {
  return (
    <Container>
      <TextBox>
        <p>
          스타트업 전문 개발사
          <br />
          엑셀러레이터
        </p>
        <Logo src="/icons/logo_black.png" />
      </TextBox>
      <SocialBoxContainer />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Large PC */
  width: 535px;

  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    width: 535px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    width: 345px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  > p {
    color: ${theme.color.GRAY5};
    line-height: 1.8;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: auto;
  }
`;

const Logo = styled.img`
  width: 250px;
  margin-top: 22px;
`;
