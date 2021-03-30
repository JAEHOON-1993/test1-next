import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { Text } from 'components/Typography'
import { Button, Icon } from './Social.styled';

interface Props {
  round?: boolean;
  size?: 'sm' | 'md';
  onClick?: () => void;
}

const FacebookLoginComponent: React.FC<Props> = ({ size, round, onClick, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          {...props}
          backgroundColor={'#1877f3'}
          borderColor={'#1877f3'}
          size={size}
          round={round}
          onClick={onClick}
          icon={<Icon name="facebook" color={theme.color.WHITE} />}
        >
          {size == 'sm' ? <div style= {{ paddingRight: '10px'}}></div> : <Text style={{ color: theme.color.WHITE }}>
            Facebook으로 로그인
          </Text>}
          
        </Button>
      )}
    </ThemeConsumer>
  );
};

export default FacebookLoginComponent;
