import React from "react";

import * as TextComponent from "../Text";
import { StyledKakaoLogin, Hr, Icon } from "./Social.styled";
import { isMobile } from "react-device-detect";

const KAKAO_LOGO = "/images/kakao_logo.png";

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const KakaoLoginComponent: React.FC<Props> = (props) => {
  const success = (e: any) => {
    const { response, profile } = e;
    const data = {
      token: response.access_token,
      grant_type: "convert_token",
      backend: "kakao",
      client_id: "59990fc2177c0efa96ed2b2b0d028be3",
      email: profile.kakao_account.email,
    };
    console.log(data);
  };
  const failure = (e: any) => {
    console.log(e);
  };
  return (
    <StyledKakaoLogin
      jsKey={"cb851b3824b45cb9fb60925fa1671e27"}
      onSuccess={success}
      onFailure={failure}
      getProfile={true}
      throughTalk={isMobile}
      round={props.round}
    >
      <Icon round={props.round} src={KAKAO_LOGO} />
      {!props.round && <Hr />}
      <TextComponent.FontSize18
        fontWeight={500}
        style={{ color: props.round ? "#381f1f" : "#000" }}
      >
        {props.round ? "카카오 계정으로 로그인" : "카카오톡 로그인"}
      </TextComponent.FontSize18>
    </StyledKakaoLogin>
  );
};

export default KakaoLoginComponent;
