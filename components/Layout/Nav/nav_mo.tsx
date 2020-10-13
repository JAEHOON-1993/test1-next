import React from "react";
import Router from "next/router";

// components
import Slider from "react-slick";
import { NavWarp, Logo, LogoWrap, Menu, NavLink } from "./nav_mo.styled";

const logo_ic = "/images/logo.png";

class NavMobile extends React.Component {
  state = {
    url: "/",
    activeSlide: false,
    scrollFixed: false,
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    this.setState({ scrollFixed: winScroll > 37 ? true : false });
  };
  toKakao = () => {
    window.open("https://open.kakao.com/me/rocketmakers");
  };
  componentDidMount() {
    this.listenToScroll();
    window.addEventListener("scroll", this.listenToScroll);
    this.setState({
      url: window.location.pathname.split("/")[1],
      activeSlide: true,
    });
  }
  render() {
    var settings = {
      infinite: false,
      autoplay: false,
      arrows: false,
      slidesToShow: 5.5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { url, activeSlide, scrollFixed } = this.state;
    return (
      <NavWarp>
        <LogoWrap>
          <Logo src={logo_ic} onClick={() => Router.push("/")} />
        </LogoWrap>
        <Menu fixed={scrollFixed}>
          {activeSlide && (
            <Slider {...settings}>
              <NavLink onClick={() => Router.push("/")} active={url === ""}>
                홈
              </NavLink>
              <NavLink
                onClick={() => Router.push("/info")}
                active={url === "info"}
              >
                서비스소개
              </NavLink>
              <NavLink
                onClick={() => Router.push("/team")}
                active={url === "team"}
              >
                팀소개
              </NavLink>
              <NavLink
                onClick={() => Router.push("/portfolio")}
                active={url === "portfolio"}
              >
                포트폴리오
              </NavLink>
              <NavLink
                onClick={() => Router.push("/news")}
                active={url === "news"}
              >
                소식
              </NavLink>
              <NavLink onClick={this.toKakao}>문의하기</NavLink>
            </Slider>
          )}
        </Menu>
      </NavWarp>
    );
  }
}

export default NavMobile;
