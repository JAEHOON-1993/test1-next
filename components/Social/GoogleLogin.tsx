import React from 'react';
import Router from 'next/router';
import { ThemeConsumer } from 'styled-components';

import * as T from 'components/TypoGraphy';
import { Button, Icon } from './Social.styled';
import { GOOGLE_LOGIN_URL } from './_settings';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const GoogleLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          {...props}
          label={
            <T.Text style={{ color: theme.color.GRAY4 }}>
              Google로 로그인
            </T.Text>
          }
          style={{ color: theme.color.GRAY5 }}
          backgroundColor={'#FFF'}
          borderColor={'#ddd'}
          round={round}
          onClick={() => Router.replace(GOOGLE_LOGIN_URL)}
          icon={<Icon round={round} name="google" start />}
        />
      )}
    </ThemeConsumer>
  );
};

export default GoogleLoginComponent;
