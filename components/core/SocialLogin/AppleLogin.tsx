import React from 'react';
import Router from 'next/router';
import { ThemeConsumer } from 'styled-components';

import { Text } from 'components/Typography'

import { Button, Icon } from './Social.styled';

import { APPLE_LOGIN_URL } from './_settings';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
  size?: 'sm' | 'md'
}

const AppleLoginComponent: React.FC<Props> = ({ size, round, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          {...props}
          backgroundColor={'#000'}
          borderColor={'#000'}
          round={round}
          size={size}
          onClick={() => Router.replace(APPLE_LOGIN_URL)}
          icon={<Icon name="apple" color="#fff" />}
        >
          {size == 'sm' ? null : <Text style={{ color: theme.color.WHITE }}>Apple로 로그인</Text>}
          

        </Button>
      )}
    </ThemeConsumer>
  );
};

export default AppleLoginComponent;
