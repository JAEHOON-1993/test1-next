import React from "react";
import KakaoLogin from "react-kakao-login";

import * as T from "components/Text";
import { Button, Icon } from "./Social.styled";

const KAKAO_LOGO = "/images/kakao_logo.png";

interface Props {
  round?: boolean;
  onClick?: any;
  style?: any;
  children?: any;
}

const KakaoLoginComponent: React.FC<Props> = ({ onClick, round, ...props }) => {
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
    <KakaoLogin
      {...props}
      jsKey={"cb851b3824b45cb9fb60925fa1671e27"}
      onSuccess={success}
      onFailure={failure}
      render={({ onClick }) => {
        return (
          <Button
            backgroundColor={"#ffde32"}
            onClick={(e: any) => {
              e.preventDefault();
              onClick();
            }}
          >
            <Icon src={KAKAO_LOGO} />
            <T.Text
              style={{
                color: "#000",
                fontWeight: 500,
              }}
            >
              카카오계정으로 로그인
            </T.Text>
          </Button>
        );
      }}
    />
  );
};

export default KakaoLoginComponent;
