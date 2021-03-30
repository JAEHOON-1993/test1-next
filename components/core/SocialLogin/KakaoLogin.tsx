import React from 'react';

import { Text } from 'components/Typography';
import { Button, Icon } from './Social.styled';

interface Props {
  round?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
}

const KakaoLoginComponent: React.FC<Props> = ({
  size,
  round,
  onClick,
  ...props
}) => {
  return (
    <Button
      {...props}
      backgroundColor={'#ffde32'}
      borderColor={'#ffde32'}
      size={size}
      round={round}
      onClick={onClick}
      icon={<Icon name="kakao" />}
    >
      {size == 'sm' ? null : (
        <Text
          style={{
            color: '#000000',
          }}
        >
          카카오 계정으로 로그인
        </Text>
      )}
    </Button>
  );
};

export default KakaoLoginComponent;
