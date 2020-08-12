import React from "react";
import Router from "next/router";

// components
import Container from "../../Container";
import { NavWarp, NavWrap, Logo, Menu, NavLink } from "./nav_pc.styled";

const LOGO = "/images/logo.png";
const LOGO_WHITE = "/images/logo_white.png";

class NavPC extends React.Component {
  state = {
    url: "/",
    scrolled: false,
  };
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    this.setState({ scrolled: winScroll > 0 ? true : false });
  };
  toKakao = () => {
    console.log("toKakao");
    window.open("http://pf.kakao.com/_mGQqxb/chat");
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.listenToScroll();
    this.setState({ url: window.location.pathname.split("/")[1] });
  }
  render() {
    const { url, scrolled } = this.state;
    const { fixed } = this.props;
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
                티릴리 소식
              </NavLink>
              <NavLink
                fixed={fixed}
                scrolled={fixed && scrolled}
                onClick={this.toKakao}
              >
                문의하기
              </NavLink>
            </Menu>
          </NavWrap>
        </Container>
      </NavWarp>
    );
  }
}

export default NavPC;
