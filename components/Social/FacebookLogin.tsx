import React from 'react';
import Router from 'next/router';
import { ThemeConsumer } from 'styled-components';

import * as T from 'components/TypoGraphy';

import { Button, Icon } from './Social.styled';
import { FACEBOOK_LOGIN_URL } from './_settings';

const FACEBOOK_LOGO = '/images/socialLogin/facebook_logo.png';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const FacebookLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          {...props}
          label={
            <T.Text style={{ color: theme.color.WHITE }}>
              Facebook으로 로그인
            </T.Text>
          }
          backgroundColor={'#1877f3'}
          borderColor={'#1877f3'}
          round={round}
          onClick={() => Router.replace(FACEBOOK_LOGIN_URL)}
          icon={<Icon round={round} src={FACEBOOK_LOGO} start />}
        />
      )}
    </ThemeConsumer>
  );
};

export default FacebookLoginComponent;
