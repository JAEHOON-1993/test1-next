import React, { useEffect, useState } from 'react';
import Router from 'next/router';
// components
import * as T from 'components/TypoGraphy';
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

import SignupStore from 'stores/Signup';

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
      if (SignupStore.count > 0) {
        SignupStore.count -= 1;
      }
    }, 1000);
  }, [SignupStore.count]);

  useEffect(() => {
    if (SignupStore.code.length > 5) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [SignupStore.code]);

  const resend = () => {
    // TO DO
    // API 연동
    console.log(setSendLoading);
    // if (!sendLoading) {
    //   setSendLoading(true);
    //   setTimeout(() => {
    //     SignupStore
    //       .sendSMS()
    //       .then(() => {
    //         SignupStore.count = 180;
    //       })
    //       .catch((e: any) => {
    //         const error = e.response.data;
    //         if (error.phone) {
    //           SignupStore.phoneError = error.phone;
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
      //   SignupStore
      //     .confirmSMS()
      //     .then((res: any) => {
      //       SignupStore.phoneToken = res.data.phone_token;
      //       Router.push('/signup/3');
      //     })
      //     .catch((e: any) => {
      //       const error = e.response.data;
      //       SignupStore.code = '';
      //       if (error.phone) {
      //         SignupStore.phoneError = error.phone;
      //         Router.push('/signup/1');
      //       }
      //       SignupStore.codeError = error?.non_field_errors || error?.code;
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
        value={SignupStore.code}
        onChange={SignupStore.setCode}
        errorText={SignupStore.codeError}
        action={
          SignupStore.count > 0 ? (
            <ActionButton label={formatTimer(SignupStore.count)} disabled />
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
