import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { Text } from 'components/Typography';
import { Button, Icon } from './Social.styled';

interface Props {
  round?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
}

const AppleLoginComponent: React.FC<Props> = ({
  size,
  round,
  onClick,
  ...props
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          {...props}
          backgroundColor={'#000'}
          borderColor={'#000'}
          round={round}
          size={size}
          onClick={onClick}
          icon={<Icon name="apple" color={theme.color.WHITE} />}
        >
          {size == 'sm' ? null : (
            <Text style={{ color: theme.color.WHITE }}>Apple로 로그인</Text>
          )}
        </Button>
      )}
    </ThemeConsumer>
  );
};

export default AppleLoginComponent;
