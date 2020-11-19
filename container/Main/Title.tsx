import React from "react";
import styled from "styled-components";

// components
import * as T from "components/Text";

type Props = {
  fixed?: boolean;
  style?: any;
};

const TitleContainer: React.FC<Props> = () => {
  return (
    <Title>
      <div>
        <T.Title style={{ fontWeight: "bold" }}>안녕하세요, Murat님!</T.Title>
        <T.Title>오늘은 어떤 걸 구매하시겠습니까?</T.Title>
      </div>
      <img src="/images/profile_default.png" />
    </Title>
  );
};

export default TitleContainer;

const Title = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 50px;
    height: 50px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 80px;
    margin-top: 50px;
    margin-bottom: 22px;
  }
`;