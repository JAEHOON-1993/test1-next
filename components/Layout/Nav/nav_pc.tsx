import React, { useEffect, useState } from "react";
import Router from "next/router";

// components
import Container from "components/Container";
import { NavWarp, NavWrap, Logo, Menu, NavLink } from "./nav_pc.styled";

const LOGO = "/images/logo.png";
const LOGO_WHITE = "/images/logo_white.png";

type Props = {
  fixed?: boolean;
  style?: any;
};

const NavPC: React.FC<Props> = ({ fixed }) => {
  const [url, setUrl] = useState<string>("/");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrolled(winScroll > 0 ? true : false);
  };
  const toKakao = () => {
    window.open("https://open.kakao.com/me/rocketmakers");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    listenToScroll();
    setUrl(window.location.pathname.split("/")[1]);
  }, []);
  return (
    <NavWarp fixed={fixed} scrolled={fixed && scrolled}>
      <Container>
        <NavWrap>
          <Logo
            src={fixed && !scrolled ? LOGO_WHITE : LOGO}
            onClick={() => Router.push("/")}
          />
          <Menu>
            <NavLink
              fixed={fixed}
              scrolled={fixed && scrolled}
              first
              onClick={() => Router.push("/info")}
              active={url === "info"}
            >
              서비스소개
            </NavLink>
            <NavLink
              fixed={fixed}
              scrolled={fixed && scrolled}
              onClick={() => Router.push("/team")}
              active={url === "team"}
            >
              팀소개
            </NavLink>
            <NavLink
              fixed={fixed}
              scrolled={fixed && scrolled}
              onClick={() => Router.push("/portfolio")}
              active={url === "portfolio"}
            >
              포트폴리오
            </NavLink>
            <NavLink
              fixed={fixed}
              scrolled={fixed && scrolled}
              onClick={() => Router.push("/news")}
              active={url === "news"}
            >
              소식
            </NavLink>
            <NavLink
              fixed={fixed}
              scrolled={fixed && scrolled}
              onClick={toKakao}
            >
              문의하기
            </NavLink>
          </Menu>
        </NavWrap>
      </Container>
    </NavWarp>
  );
};

export default NavPC;
