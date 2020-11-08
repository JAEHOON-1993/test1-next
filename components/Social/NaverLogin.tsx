import React, { useEffect } from "react";
import Router from "next/router";

import * as Text from "components/Text";
import { Button, Hr, Icon } from "./Social.styled";
import * as AuthAPI from "api/Auth";

import { StorageSetToken } from "utils/Storage";

declare global {
  interface Window {
    naver: any;
  }
}
const NAVER_LOGO = "/images/naver_logo.png";
const NAVER_KEY = "08vq8KC8O46oGKpXm4Fu";
const NAVER_SECRET = "EXxQD5tVfW";
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
        const fromdata = new FormData();
        fromdata.append("token", naverLogin.accessToken.accessToken);
        fromdata.append("backend", "naver");
        fromdata.append("client_id", NAVER_KEY);
        fromdata.append("client_secret", NAVER_SECRET);
        fromdata.append("email", naverLogin.user.email);
        AuthAPI.social_login(fromdata)
          .then(async (res: any) => {
            if (res.status === 200) {
              const {
                access_token,
                expires_in,
                refresh_token,
              } = res?.data?.token;
              const result = await StorageSetToken(
                access_token,
                refresh_token,
                expires_in
              );
              if (result) {
                Router.push("/");
              }
            }
          })
          .catch(() => {});
      }
    });
  };
  useEffect(() => {
    if (window.naver) {
      const naver = window.naver;
      const naverLogin: any = new naver.LoginWithNaverId({
        clientId: NAVER_KEY,
        // callbackUrl: "http://localhost:3000/login",
        callbackUrl: "https://www.noutebook.com/login",
        isPopup: false,
        loginButton: { color: "green", type: 3, height: 60 },
      });
      naverLogin.init();
      window.addEventListener("load", () => _naverLogin(naverLogin));
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
          document.getElementById("naverIdLogin_loginButton")?.click()
        }
      >
        <Icon round={props.round} src={NAVER_LOGO} />
        {!props.round && <Hr />}
        <Text.Button
          style={{ color: props.round ? "#381f1f" : "#fff", fontWeight: 500 }}
        >
          {props.round ? "네이버 계정으로 로그인" : "네이버 로그인"}
        </Text.Button>
      </Button>
    </>
  );
};

export default NaverLoginComponent;
