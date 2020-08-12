import React, { useEffect, useRef, useState } from "react";

import * as TextComponent from "../Text";
import { Button, Hr, Icon } from "./Social.styled";

declare global {
  interface Window {
    naver: any;
  }
}
const NAVER_LOGO = "/images/naver_logo.png";
const NAVER_KEY = "08vq8KC8O46oGKpXm4Fu";
interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const NaverLoginComponent: React.FC<Props> = (props) => {
  const _naverLogin = (naverLogin: any) => {
    naverLogin.getLoginStatus((status: boolean) => {
      if (status) {
        console.log("naverLogin : ", naverLogin);
        const req = {
          grant_type: "convert_token",
          client_id: NAVER_KEY,
          backend: "naver",
          token: naverLogin.accessToken.accessToken,
          email: naverLogin.user.email,
        };
        console.log(req);
      }
    });
  };
  useEffect(() => {
    if (window.naver) {
      const naver = window.naver;
      const naverLogin = new naver.LoginWithNaverId({
        clientId: NAVER_KEY,
        callbackUrl: "http://localhost:3000/",
        isPopup: false,
        loginButton: { color: "green", type: 3, height: 60 },
      });
      naverLogin.init();
      window.addEventListener("load", _naverLogin(naverLogin));
    }
  }, []);
  return (
    <>
      <div id="naverIdLogin" style={{ display: "none" }} />
      <Button
        backgroundColor={"#7fdd34"}
        round={props.round}
        style={props.style}
        onClick={() =>
          document.getElementById("naverIdLogin_loginButton").click()
        }
      >
        <Icon round={props.round} src={NAVER_LOGO} />
        {!props.round && <Hr />}
        <TextComponent.FontSize18
          fontWeight={500}
          style={{ color: props.round ? "#381f1f" : "#fff" }}
        >
          {props.round ? "네이버 계정으로 로그인" : "네이버 로그인"}
        </TextComponent.FontSize18>
      </Button>
    </>
  );
};

export default NaverLoginComponent;
