import React from 'react';
import Router from 'next/router';

import { Text } from 'components/Typography';
import { Button, Icon } from './Social.styled';

import { KAKAO_LOGIN_URL } from './_settings';

interface Props {
  round?: boolean;
  onClick?: any;
  style?: any;
  children?: any;
  size?: 'sm' | 'md';
}

const KakaoLoginComponent: React.FC<Props> = ({ size, round, ...props }) => {
  return (
    <Button
      {...props}
      backgroundColor={'#ffde32'}
      borderColor={'#ffde32'}
      size={size}
      round={round}
      onClick={() => Router.replace(KAKAO_LOGIN_URL)}
      icon={<Icon name="kakao" />}
    >
      {size == 'sm' ? null : (
        <Text
          style={{
            color: '#000',
          }}
        >
          카카오 계정으로 로그인
        </Text>
      )}
    </Button>
  );
};

export default KakaoLoginComponent;
