import React from "react";
import styled from "styled-components";
import theme from "layout/theme";

// components
import * as T from "components/Text";
import ButtonComponent from "components/Button";
import InputComponent from "components/Input";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MainContainer: React.FC<Props> = () => {
  return (
    <Container>
      <TextBox>
        <T.Text lg>
          본인인증을 위한
          <br />
          핸드폰 번호를 입력하세요
        </T.Text>
      </TextBox>
      <Button round disabled onClick={console.log}>
        다음
      </Button>
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
  align-items: flex-start;
  justify-content: center;
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

const Button = styled(ButtonComponent)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    margin-bottom: 10px;
  }
  /* Large PC */
  margin-top: 100px;

  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    margin-top: 100px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    margin-top: 80px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: auto;
  }
`;
