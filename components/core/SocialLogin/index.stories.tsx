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

export const socialButton = () => {
  return (
    <>
      <SocialBox>
        <KakaoLogin/>
        <NaverLogin />
        <FacebookLogin />
        <GoogleLogin />
        <AppleLogin />
      </SocialBox>
    </>
  );
};

const SocialBox = styled.div`
  > button {
    margin-bottom: 8px;
  }
`;
socialButton.parameters = {
  docs: {
    description: {
      story: '소셜 로그인 기능을 제공합니다.',
    },
  },
};
