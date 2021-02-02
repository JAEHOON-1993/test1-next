import React from 'react';
import Router from 'next/router';

import * as T from 'components/TypoGraphy';
import { Button, Icon } from './Social.styled';

import { KAKAO_LOGIN_URL } from './_settings';

interface Props {
  round?: boolean;
  onClick?: any;
  style?: any;
  children?: any;
}

const KakaoLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <Button
      {...props}
      label={
        <T.Text
          style={{
            color: '#000',
          }}
        >
          카카오 계정으로 로그인
        </T.Text>
      }
      backgroundColor={'#ffde32'}
      borderColor={'#ffde32'}
      round={round}
      onClick={() => Router.replace(KAKAO_LOGIN_URL)}
      icon={<Icon name="kakao" start />}
    />
  );
};

export default KakaoLoginComponent;
