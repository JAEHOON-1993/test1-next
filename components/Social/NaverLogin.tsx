import React from 'react';
import Router from 'next/router';

import * as T from 'components/Text';
import { Button, Icon } from './Social.styled';

import { NAVER_LOGIN_URL } from './_settings';

const NAVER_LOGO = '/images/naver_logo.png';

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
      backgroundColor={'#7fdd34'}
      borderColor={'#7fdd34'}
      round={round}
      onClick={() => Router.replace(NAVER_LOGIN_URL)}
      icon={<Icon round={round} src={NAVER_LOGO} />}
    ></Button>
  );
};

export default NaverLoginComponent;
