import React from 'react';
import Router from 'next/router';

import * as T from 'components/Text';
import ButtonBaseComponent from 'components/ButtonBase';
import IconComponent from 'components/Icon';

import {
  Container,
  Nav,
  TextBox,
  Input,
  Button,
  ActionButton,
} from '../index.styled';

import { Props } from '../types';

const MainContainer: React.FC<Props> = () => {
  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/1')}>
          <IconComponent name="arrow-left" color="#585858" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>전송된 인증번호를 입력하세요</T.Text>
      </TextBox>
      <Input
        name="phone"
        label="인증번호"
        placeholder="인증번호 입력"
        action={<ActionButton>재전송</ActionButton>}
      />
      <Button round onClick={() => Router.push('/signup/3')}>
        다음
      </Button>
    </Container>
  );
};

export default MainContainer;
