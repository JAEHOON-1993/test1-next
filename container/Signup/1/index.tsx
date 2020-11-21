import React from "react";
import styled from "styled-components";
import theme from "layout/theme";

// components
import * as T from "components/Text";
import ButtonComponent from "components/Button";
import ButtonBaseComponent from "components/ButtonBase";
import IconComponent from "components/Icon";
import InputComponent from "components/Input";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MainContainer: React.FC<Props> = () => {
  return (
    <Container>
      <Nav>
        <ButtonBaseComponent>
          <IconComponent name="arrow-left" color="#585858"/>
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>
          본인인증을 위한
          <br />
          핸드폰 번호를 입력하세요
        </T.Text>
      </TextBox>
      <Input name="phone" label="핸드폰번호" placeholder="핸드폰 번호 입력('-'제외)"/>
      <Button round disabled onClick={console.log}>
        다음
      </Button>
    </Container>
  );
};

export default MainContainer;

const Nav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`
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
`;

const Input = styled(InputComponent)`
  width: 100%;
  /* Large PC */
  margin-top: 70px;

  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    margin-top: 70px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    margin-top: 50px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: 20px;
    margin-bottom: auto;
  }
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
