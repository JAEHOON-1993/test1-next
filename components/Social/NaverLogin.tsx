import React from 'react';
import Router from 'next/router';

import * as T from 'components/TypoGraphy';
import { Button, Icon } from './Social.styled';

import { NAVER_LOGIN_URL } from './_settings';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const NaverLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <Button
      {...props}
      label={<T.Text style={{ color: '#fff' }}>네이버 계정으로 로그인</T.Text>}
      backgroundColor={'#20cf5d'}
      borderColor={'#20cf5d'}
      round={round}
      onClick={() => Router.replace(NAVER_LOGIN_URL)}
      icon={<Icon round={round} name="naver" start color="#fff" />}
    ></Button>
  );
};

export default NaverLoginComponent;
