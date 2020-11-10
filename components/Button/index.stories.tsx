import React from "react";

import styled from 'styled-components';
import theme from 'layout/theme';
import Button from "components/Button";
import NaverLogin from "components/Button/Social/NaverLogin";
import KakaoLogin from "components/Button/Social/KakaoLogin";

export default { title: "Example/components/Button" };

export const defaultButton = () => {
  return (
    <>
      <h1>Default</h1>
      <ButtonBox>
        <Button>Default</Button>
        <Button outline>Outline</Button>
        <Button disabled>Disabled</Button>
      </ButtonBox>
      <h1>Round</h1>
      <ButtonBox>
        <Button round>Default</Button>
        <Button round outline>Outline</Button>
        <Button round disabled>Disabled</Button>
      </ButtonBox>
      <h1>Custom Color</h1>
      <ButtonBox>
        <Button color={theme.color.SECONDARY}>Default</Button>
        <Button color={theme.color.SECONDARY} outline>Outline</Button>
        <Button color={theme.color.SECONDARY} disabled>Disabled</Button>
      </ButtonBox>
    </>
  )
};
const ButtonBox = styled.div`
  display: flex;
  > button {
    width: 300px;
    margin-right: 8px;
  }
  margin-bottom: 10px;
`
export const socialButton = () => {
  return (
    <>
      <SocialBox>
        <h1>Social Login <small>[Default]</small></h1>
        <NaverLogin/>
        <KakaoLogin/>
      </SocialBox>
      <SocialBox>
        <h1>Social Login <small>[Round]</small></h1>
        <NaverLogin round/>
        <KakaoLogin round/>
      </SocialBox>
    </>
  )
};

const SocialBox = styled.div`
  > button {
    margin-bottom: 8px;
  }
`