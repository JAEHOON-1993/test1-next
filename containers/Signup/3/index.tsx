import React from 'react';
import Router from 'next/router';

import SignUpStore from 'stores/SignUp';

import * as T from 'components/Typography';
import ButtonBaseComponent from 'components/Button/ButtonBase';
import SystemIcon from 'components/Icons/SystemIcon';

import { Container, Nav, TextBox, Input, Button } from '../index.styled';

interface Props {
  fixed?: boolean;
  style?: any;
}

const Signup3Container: React.FC<Props> = () => {
  const next = () => {
    if (!SignUpStore.nicknameLoading) {
      Router.push('/signup/4');
    }
  };
  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/2')}>
          <SystemIcon name="arrowLeft" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>사용할 닉네임을 입력해주세요</T.Text>
      </TextBox>
      <Input
        name="phone"
        label="닉네임"
        placeholder="영문, 국문, 숫자만 입력 가능"
        errorText={SignUpStore.nicknameError}
        value={SignUpStore.nickname}
        onChange={SignUpStore.setNickname}
      />
      <Button
        label="다음"
        round
        loading={SignUpStore.nicknameLoading}
        disabled={
          SignUpStore.nickname.length < 3 || SignUpStore.nicknameError != ''
        }
        onClick={next}
      />
    </Container>
  );
};

export default Signup3Container;
