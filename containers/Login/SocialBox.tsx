import React from 'react';
import styled from 'styled-components';

import KakaoLogin from 'components/core/SocialLogin/KakaoLogin';
import NaverLogin from 'components/core/SocialLogin/NaverLogin';
import GoogleLogin from 'components/core/Social/GoogleLogin';
import FacebookLogin from 'components/core/Social/FacebookLogin';
import AppleLogin from 'components/core/Social/AppleLogin';

interface Props {
  fixed?: boolean;
  style?: any;
}

const SocialBoxContainer: React.FC<Props> = () => {
  return (
    <SocialBox>
      <KakaoLogin />
      <NaverLogin />
      <FacebookLogin />
      <GoogleLogin />
      <AppleLogin />
    </SocialBox>
  );
};

export default SocialBoxContainer;

const SocialBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 90px;
  > button {
    margin-bottom: 10px;
  }
  /* Large PC */
  margin-top: 100px;

  /* Small PC */
  ${(props) => props.theme.window.pc} {
    margin-top: 100px;
  }
  /* Tab */
  ${(props) => props.theme.window.tab} {
    margin-top: 80px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    margin-top: auto;
  }
`;
