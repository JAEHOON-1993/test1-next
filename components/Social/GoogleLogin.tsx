import React from 'react';
import Router from 'next/router';

import theme from 'layout/theme';
import * as T from 'components/Text';
import { Button, Icon } from './Social.styled';
import { GOOGLE_LOGIN_URL } from './_settings';

const GOOGLE_LOGO = '/images/google_logo.png';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const GoogleLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <Button
      {...props}
      label={
        <T.Text style={{ color: theme.color.GRAY5 }}>Google로 로그인</T.Text>
      }
      style={{ color: theme.color.GRAY5 }}
      backgroundColor={'#FFF'}
      borderColor={'#ddd'}
      round={round}
      onClick={() => Router.replace(GOOGLE_LOGIN_URL)}
      icon={<Icon round={round} src={GOOGLE_LOGO} />}
    />
  );
};

export default GoogleLoginComponent;
