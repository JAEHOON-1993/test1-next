import React from 'react';
import Router from 'next/router';

import * as T from 'components/Text';
import ButtonBaseComponent from 'components/ButtonBase';
import IconComponent from 'components/Icon';

import { Container, Nav, TextBox, Input, Button } from '../index.styled';

import { Props } from '../types';

const MainContainer: React.FC<Props> = () => {
  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/2')}>
          <IconComponent name="arrow-left" color="#585858" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>사용할 닉네임을 입력해주세요</T.Text>
      </TextBox>
      <Input
        name="phone"
        label="닉네임"
        placeholder="영문, 국문, 숫자만 입력 가능"
        errorText="사용 중인 닉네임입니다"
      />
      <Button round onClick={console.log}>
        다음
      </Button>
    </Container>
  );
};

export default MainContainer;
