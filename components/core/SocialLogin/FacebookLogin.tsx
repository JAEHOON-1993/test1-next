import React from 'react';
import Router from 'next/router';
import { ThemeConsumer } from 'styled-components';

import { Text } from '../../../components/Typography'


import { Button, Icon } from './Social.styled';
import { FACEBOOK_LOGIN_URL } from './_settings';

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
          backgroundColor={'#1877f3'}
          borderColor={'#1877f3'}
          round={round}
          onClick={() => Router.replace(FACEBOOK_LOGIN_URL)}
          icon={<Icon name="facebook" start round={round} color="#fff" />}
        >
          <Text style={{ color: theme.color.WHITE }}>
            Facebook으로 로그인
          </Text>
        </Button>
      )}
    </ThemeConsumer>
  );
};

export default FacebookLoginComponent;
