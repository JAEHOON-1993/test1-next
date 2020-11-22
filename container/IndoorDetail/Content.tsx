import React from "react";
import styled from "styled-components";

import theme from "layout/theme";
import { intcomma } from "utils/format";
// components
import RatioBox from "components/RatioBox";
import Icon from "components/Icon";
import * as T from "components/Text";

type Props = {
  fixed?: boolean;
  style?: any;
};

const ContentContainer: React.FC<Props> = () => {
  return (
    <ContentBox>
      <Image src="https://picsum.photos/200" />
      <Content>
        <UserInfo>
          <img src="/images/profile_default.png" />
          <div>
            <T.Title>ArchDica</T.Title>
            <T.Text sm>아키디카 디지털 카탈로그</T.Text>
          </div>
        </UserInfo>
        <Hr />
        <Name lg>다용도 타일 카펫</Name>
        <Hr />
        <RateBox>
          <Icon name="star" color={theme.color.PRIMARY} />
          <Icon name="star" color={theme.color.PRIMARY} />
          <Icon name="star" color={theme.color.PRIMARY} />
          <Icon name="star" color={theme.color.PRIMARY} />
          <Icon name="star-half" color={theme.color.PRIMARY} />
          <T.Title>4.5</T.Title>
        </RateBox>
        <DiscountBox>
          <T.Title lg>18%</T.Title>
          <T.Text>{intcomma(3800)}</T.Text>
        </DiscountBox>
        <Name lg>{intcomma(3800)}원</Name>
        <Hr />
      </Content>
    </ContentBox>
  );
};

export default ContentContainer;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  /* Large PC */
  margin-top: 36px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: 15px;
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: calc(50% - 15px);
  margin-left: 30px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: 20px;
    margin-left: 0px;
    width: 100%;
  }
`;
const Image = styled(RatioBox)`
  width: calc(50% - 15px) !important;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    width: 100% !important;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

const Name = styled(T.Title)`
  font-weight: bold;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.color.GRAY1};
  margin: 13px 0px;
`;
const RateBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  > svg {
    width: 17px;
    height: 17px;
    margin-right: 4px;
  }
  > h1 {
    font-weight: bold;
    margin-left: 5px;
  }
`;

const DiscountBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  > h1 {
    color: ${theme.color.PRIMARY};
    font-weight: bold;
    margin-right: 10px;
  }
  > p {
    text-decoration: line-through;
    color: ${theme.color.GRAY5};
  }
`;
