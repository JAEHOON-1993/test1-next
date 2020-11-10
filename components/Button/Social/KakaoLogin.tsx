import React, {useRef} from "react";

import * as Text from "components/Text";
import { StyledKakaoLogin, Hr, Icon } from "./Social.styled";
import { isMobile } from "react-device-detect";

const KAKAO_LOGO = require("public/images/kakao_logo.png");

interface Props {
  round?: boolean;
  onClick?: any;
  style?: any;
  children?: any;
}

const KakaoLoginComponent: React.FC<Props> = ({onClick, round, ...props}) => {
  const rippleRef = useRef<any>(null)
  const buttonRef = useRef<any>(null)
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
  const clickHandler = (e: any) => {
    const circle = rippleRef?.current;
    const button = buttonRef?.current;
    const diameter = Math.max(button.clientWidth, button.clientWidth);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    if (circle) {
      circle.remove();
    }
    button.appendChild(circle);
    onClick(e);
  }
  return (
    <div>
      <StyledKakaoLogin
        ref={buttonRef}
        jsKey={"cb851b3824b45cb9fb60925fa1671e27"}
        onSuccess={success}
        onFailure={failure}
        onClick={clickHandler}
        getProfile={true}
        throughTalk={isMobile}
        round={round}
        {...props}
      >
        <Icon round={round} src={KAKAO_LOGO} />
        {!round && <Hr />}
        <Text.Button
          style={{ color: round ? "#381f1f" : "#000", fontWeight: 500 }}
        >
          {round ? "카카오 계정으로 로그인" : "카카오톡 로그인"}
        </Text.Button>
        <span ref={rippleRef}/>
      </StyledKakaoLogin>
    </div>
  );
};

export default KakaoLoginComponent;
