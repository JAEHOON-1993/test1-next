import React from 'react';
import styled from 'styled-components';

import { Meta } from '@storybook/react/types-6-0';

import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import AppleLogin from './AppleLogin';

export default {
  title: 'Components/Core/SocialLogin',
} as Meta;

export const SocialButton = () => {
  return (
    <>
     <SocialBox>
        <KakaoLogin />
        <NaverLogin />
        <FacebookLogin/>
        <GoogleLogin />
        <AppleLogin />
      </SocialBox>
      
    </>
  );
};

export const SmallSocialButton = () => {
  return (
    <>
     <SocialBox>
        <KakaoLogin size='sm' />
        <NaverLogin size='sm' />
        <FacebookLogin size='sm' />
        <GoogleLogin size='sm' />
        <AppleLogin size='sm' />
      </SocialBox>
    </>
  );
};


const SocialBox = styled.div`
  > button {
    margin-bottom: 8px;
  }
`;

SocialButton.parameters = {
  docs: {
    description: {
      story: '소셜 로그인 기능을 제공합니다.',
    },
  },
};

SmallSocialButton.parameters = {
  docs: {
    description: {
      story: '`size` prop으로 사이즈를 조절할 수 있습니다.',
    },
  },
};