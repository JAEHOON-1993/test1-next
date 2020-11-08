import React from "react";

import styled from 'styled-components';

import Button from "components/Button";
import NaverLogin from "components/Button/Social/NaverLogin";
import KakaoLogin from "components/Button/Social/KakaoLogin";

export default { title: "Example/components/Button" };

export const defaultButton = () => {
  return (
    <>
      <Button style={{width: 350, marginBottom: 10}}>Text</Button>
      <Button style={{width: 350, marginBottom: 10}} outline>Text</Button>
      <Button style={{width: 350}} disabled>Text</Button>
    </>
  )
};


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