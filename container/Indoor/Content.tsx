import React from "react";
import Router from "next/router";
import styled from "styled-components";

// components
import Card from "components/Card/example/ContentCard";

type Props = {
  fixed?: boolean;
  style?: any;
};

const ContentContainer: React.FC<Props> = () => {
  return (
    <ContentBox>
      <Card onClick={() => Router.push("/indoor/1")} />
      <Card onClick={() => Router.push("/indoor/1")} />
      <Card onClick={() => Router.push("/indoor/1")} />
      <Card onClick={() => Router.push("/indoor/1")} />
      <Card onClick={() => Router.push("/indoor/1")} />
      <Card onClick={() => Router.push("/indoor/1")} />
      <Card onClick={() => Router.push("/indoor/1")} />
      <Card onClick={() => Router.push("/indoor/1")} />
    </ContentBox>
  );
};

export default ContentContainer;

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* Large PC */
  > div {
    width: calc((100% - 30px) / 4);
    margin-right: 10px;
    :nth-of-type(4n) {
      margin-right: 0px;
    }
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    > div {
      width: calc((100% - 10px) / 2);
      margin-right: 10px;
      :nth-of-type(2n) {
        margin-right: 0px;
      }
    }
  }
`;