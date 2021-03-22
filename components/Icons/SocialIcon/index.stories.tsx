import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import SocialIcon from 'components/Icons/SocialIcon';

export default {
  title: 'Example/components/Icons/SocialIcon',
  component: SocialIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      <IconBox>
        <SocialIcon name="kakao" />
        <Name>Kakao</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="facebook" />
        <Name>Facebook</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="naver" />
        <Name>Naver</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="google" />
        <Name>Google</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="web" />
        <Name>Web</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="kakaoTalk" />
        <Name>KakaoTalk</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="instagram" />
        <Name>Instagram</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="youtube" />
        <Name>Youtube</Name>
      </IconBox>

      <IconBox>
        <SocialIcon name="apple" />
        <Name>Apple</Name>
      </IconBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-left: 8px;
`;
