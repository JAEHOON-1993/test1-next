import React, { useEffect, useState } from 'react';
import Router from 'next/router';
// components
import * as T from 'components/Typography';
import ButtonBaseComponent from 'components/Button/ButtonBase';
import SystemIcon from 'components/Icons/SystemIcon';

import { formatTimer } from 'utils/format';

import {
  Container,
  Nav,
  TextBox,
  Input,
  Button,
  ActionButton,
} from '../index.styled';

import SignUpStore from 'stores/SignUp';

type Props = {
  fixed?: boolean;
  style?: any;
};

const Signup2Container: React.FC<Props> = () => {
  const [sendLoading, setSendLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (SignUpStore.count > 0) {
        SignUpStore.count -= 1;
      }
    }, 1000);
  }, [SignUpStore.count]);

  useEffect(() => {
    if (SignUpStore.code.length > 5) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [SignUpStore.code]);

  const resend = () => {
    // TO DO
    // API 연동
    console.log(setSendLoading);
    // if (!sendLoading) {
    //   setSendLoading(true);
    //   setTimeout(() => {
    //     SignUpStore
    //       .sendSMS()
    //       .then(() => {
    //         SignUpStore.count = 180;
    //       })
    //       .catch((e: any) => {
    //         const error = e.response.data;
    //         if (error.phone) {
    //           SignUpStore.phoneError = error.phone;
    //           Router.push('/signup/1');
    //         }
    //       })
    //       .finally(() => setSendLoading(false));
    //   }, 800);
    // }
  };

  const next = () => {
    if (!loading) {
      // TO DO
      // API 연동
      setLoading(true);
      // setTimeout(() => {
      //   SignUpStore
      //     .confirmSMS()
      //     .then((res: any) => {
      //       SignUpStore.phoneToken = res.data.phone_token;
      //       Router.push('/signup/3');
      //     })
      //     .catch((e: any) => {
      //       const error = e.response.data;
      //       SignUpStore.code = '';
      //       if (error.phone) {
      //         SignUpStore.phoneError = error.phone;
      //         Router.push('/signup/1');
      //       }
      //       SignUpStore.codeError = error?.non_field_errors || error?.code;
      //     })
      //     .finally(() => setSendLoading(false));
      // }, 800);
    }
  };

  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/1')}>
          <SystemIcon name="arrowLeft" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>전송된 인증번호를 입력하세요</T.Text>
      </TextBox>
      <Input
        name="code"
        label="인증번호"
        placeholder="인증번호 입력"
        value={SignUpStore.code}
        onChange={SignUpStore.setCode}
        errorText={SignUpStore.codeError}
        action={
          SignUpStore.count > 0 ? (
            <ActionButton label={formatTimer(SignUpStore.count)} disabled />
          ) : (
            <ActionButton
              label="재전송"
              onClick={resend}
              loading={sendLoading}
            />
          )
        }
      />
      <Button
        label="다음"
        round
        disabled={!active}
        loading={loading}
        onClick={next}
      />
    </Container>
  );
};

export default Signup2Container;
