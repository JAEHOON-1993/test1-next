import React from "react";
import Router from "next/router";

// components
import * as T from "components/Text";
import ButtonBaseComponent from "components/ButtonBase";
import IconComponent from "components/Icon";

import { Container, Nav, TextBox, Input, Button } from "../index.styled";

type Props = {
  fixed?: boolean;
  style?: any;
};

const MainContainer: React.FC<Props> = () => {
  return (
    <Container>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push("/login")}>
          <IconComponent name="arrow-left" color="#585858" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>
          본인인증을 위한
          <br />
          핸드폰 번호를 입력하세요
        </T.Text>
      </TextBox>
      <Input
        name="phone"
        label="핸드폰번호"
        placeholder="핸드폰 번호 입력('-'제외)"
      />
      <Button round disabled={false} onClick={() => Router.push("/signup/2")}>
        다음
      </Button>
    </Container>
  );
};

export default MainContainer;
