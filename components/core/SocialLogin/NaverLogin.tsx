import React from 'react';

import { Text } from 'components/Typography';
import { Button, Icon } from './Social.styled';

interface Props {
  round?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
}

const NaverLoginComponent: React.FC<Props> = ({
  size,
  round,
  onClick,
  ...props
}) => {
  return (
    <Button
      {...props}
      backgroundColor={'#20cf5d'}
      borderColor={'#20cf5d'}
      round={round}
      size={size}
      onClick={onClick}
      icon={<Icon name="naver" color="#ffffff" />}
    >
      {size == 'sm' ? null : (
        <Text style={{ color: '#fff' }}>네이버 계정으로 로그인</Text>
      )}
    </Button>
  );
};

export default NaverLoginComponent;
