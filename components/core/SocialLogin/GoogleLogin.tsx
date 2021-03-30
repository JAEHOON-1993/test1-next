import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { Text } from 'components/Typography'
import { Button, Icon } from './Social.styled';

interface Props {
  round?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md'
}

const GoogleLoginComponent: React.FC<Props> = ({ size, round, onClick, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          {...props}
          style={{ color: theme.color.GRAY5 }}
          backgroundColor={theme.color.WHITE}
          borderColor={'#ddd'}
          size={size}
          round={round}
          onClick={onClick}
          icon={<Icon name="google" />}
        >
          {size == 'sm' ? null : <Text style={{ color: theme.color.GRAY4 }}>Google로 로그인</Text>}
        </Button>
      )}
    </ThemeConsumer>
  );
};

export default GoogleLoginComponent;
