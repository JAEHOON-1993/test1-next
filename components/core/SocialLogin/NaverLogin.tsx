import React from 'react';
import Router from 'next/router';

import { Text } from 'components/Typography';
import { Button, Icon } from './Social.styled';

import { NAVER_LOGIN_URL } from './_settings';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
  size?: 'sm' | 'md';
}

const NaverLoginComponent: React.FC<Props> = ({size, round, ...props }) => {
  return (
    <Button
      {...props}
      backgroundColor={'#20cf5d'}
      borderColor={'#20cf5d'}
      round={round}
      size={size}
      onClick={() => Router.replace(NAVER_LOGIN_URL)}
      icon={<Icon  name="naver" color="#fff" />}
    >
      {size == 'sm' ? null : <Text style={{ color: '#fff' }}>네이버 계정으로 로그인</Text>}
      
    </Button>
  );
};

export default NaverLoginComponent;
