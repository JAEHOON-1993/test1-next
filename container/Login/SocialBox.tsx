import React from "react";
import styled from "styled-components";
// components

import KakaoLogin from "components/Button/Social/KakaoLogin";
import NaverLogin from "components/Button/Social/NaverLogin";

type Props = {
  fixed?: boolean;
  style?: any;
};

const SocialBoxContainer: React.FC<Props> = () => {
  return (
    <SocialBox>
      <KakaoLogin />
      <NaverLogin />
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
  @media screen and (max-width: 1299.98px) {
    margin-top: 100px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    margin-top: 80px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: auto;
  }
`;
