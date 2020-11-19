import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import theme from "layout/theme";
// components
import RatioBox from "components/RatioBox";
import * as T from "components/Text";

type Props = {
  fixed?: boolean;
  style?: any;
};

const BannerContainer: React.FC<Props> = () => {
  const [active, setActive] = useState<number>(1);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActive(next),
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        <RatioBox ratio="30%" src="/images/banner/1.png" />
        <RatioBox ratio="30%" src="/images/banner/1.png" />
        <RatioBox ratio="30%" src="/images/banner/1.png" />
      </Slider>
      <PageNumber>
        <T.Caption>{active + 1} / 3</T.Caption>
      </PageNumber>
    </div>
  );
};

export default BannerContainer;

const PageNumber = styled.div`
  position: absolute;

  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #000a;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    color: ${theme.color.WHITE};
  }
  /* Large PC */
  right: 20px;
  bottom: 15px;

  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    right: 20px;
    bottom: 15px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    right: 10px;
    bottom: 13px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    right: 10px;
    bottom: 13px;
  }
`;
