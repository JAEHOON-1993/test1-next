import React from 'react';
import Router from 'next/router';
import { ThemeConsumer } from 'styled-components';

import { Text } from '../../../components/Typography'

import { Button, TempoIcon, Icon } from './Social.styled';

import { APPLE_LOGIN_URL } from './_settings';

const APPLE_LOGO = '/images/socialLogin/apple_logo.png';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const AppleLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          {...props}
          backgroundColor={'#000'}
          borderColor={'#000'}
          round={round}
          onClick={() => Router.replace(APPLE_LOGIN_URL)}
          icon={<Icon name="apple" round={round} start color="#fff" />}
        >
          <Text style={{ color: theme.color.WHITE }}>Apple로 로그인</Text>
        </Button>
      )}
    </ThemeConsumer>
  );
};

export default AppleLoginComponent;