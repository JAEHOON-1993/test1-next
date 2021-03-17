import React, { useEffect, useState } from 'react';
import Router from 'next/router';

// components
import * as T from 'components/Typography';
import ButtonBaseComponent from 'components/Button/ButtonBase';
import SystemIcon from 'components/Icons/SystemIcon';

import { Container, Nav, TextBox, Input, Button } from '../index.styled';

import SignUpStore from 'stores/Signup';

type Props = {
  fixed?: boolean;
  style?: any;
};

const SignUp1Container: React.FC<Props> = () => {
  const [active, setActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(false);
    // console.log('token : ', SignUpStore.access);
    if (SignUpStore.phone.length > 10) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [SignUpStore.phone]);

  const next = () => {
    // TO DO
    // API 연동
    // console.log(setLoading);
    // if (!loading) {
    //   setLoading(true);
    //   setTimeout(() => {
    //     SignUpStore
    //       .sendSMS()
    //       .then((res: any) => {
    //         if (res.status < 300) {
    //           SignUpStore.count = 180;
    //           Router.push('/signup/2');
    //         }
    //       })
    //       .catch((e: any) => {
    //         const error = e.response.data;
    //         SignUpStore.phoneError = error?.non_field_errors || error?.phone;
    //       })
    //       .finally(() => () => setLoading(false));
    //   }, 800);
    // }
  };
  return (
    <Container>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/login')}>
          <SystemIcon name="arrowLeft" />
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
        value={SignUpStore.phone}
        onChange={SignUpStore.setPhone}
        errorText={SignUpStore.phoneError}
      />
      <Button
        round
        loading={loading}
        disabled={!active || SignUpStore.phoneError != ''}
        onClick={next}
      >
        다음
      </Button>
    </Container>
  );
};

export default SignUp1Container;
