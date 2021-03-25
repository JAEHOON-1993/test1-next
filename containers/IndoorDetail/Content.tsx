import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import { intComma } from 'utils/format';

import Select from 'components/Select';
import Button from 'components/Button';
import Rate from 'components/Rate';
import RatioBox from 'components/RatioBox';
import { Title, Text } from 'components/Typography';

interface Props {
  fixed?: boolean;
  style?: any;
}

const options = [
  { value: '1', label: '그레이' },
  { value: '2', label: '아이보리' },
  { value: '3', label: '블루' },
];
const sizeOptions = [
  { value: '50', label: '50 X 50 cm' },
  { value: '80', label: '80 X 80 cm' },
];

const ContentContainer: React.FC<Props> = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <ContentBox>
            <Image src="https://picsum.photos/200" />
            <Content>
              <UserInfo>
                <img src="/images/profile_default.png" />
                <div>
                  <Title>ArchDica</Title>
                  <Text size="sm">아키디카 디지털 카탈로그</Text>
                </div>
              </UserInfo>
              <Hr />
              <Name size="lg">다용도 타일 카펫</Name>
              <Hr />
              <RateBox>
                <Rate value={3.5} />
                <Title>3.5</Title>
              </RateBox>
              <DiscountBox>
                <Title size="lg">18%</Title>
                <Text>{intComma(3800)}</Text>
              </DiscountBox>
              <Name size="lg">{intComma(3800)}원</Name>
              <Hr />
              <ShippingBox>
                <div>
                  <Text>일반택배</Text>
                  <Text size="sm" color={theme.color.GRAY5}>
                    조건에 따라 추가비용 발생 가능
                  </Text>
                </div>
                <Text color={theme.color.GRAY5}>{intComma(3000)}원</Text>
              </ShippingBox>
              <Hr />
              <CustomSelect
                isSearchable={false}
                options={options}
                placeholder="색상"
              />
              <CustomSelect
                isSearchable={false}
                options={sizeOptions}
                placeholder="사이즈"
              />
              <PriceBox>
                <Text>
                  총 수량 <b style={{ color: theme.color.PRIMARY }}>0</b> 개
                </Text>
                <div>
                  <Text>합계</Text>
                  <Title>0원</Title>
                </div>
              </PriceBox>
              <ButtonBox>
                <Button outline round>
                  견적상담
                </Button>
                <Button outline round>
                  장바구니에 담기
                </Button>
                <Button round>지금 구매하기</Button>
              </ButtonBox>
              <MobileHr />
            </Content>
          </ContentBox>
        </>
      )}
    </ThemeConsumer>
  );
};

export default ContentContainer;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  /* Large PC */
  margin-top: 36px;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    margin-top: 100%;
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: calc(50% - 15px);
  margin-left: 30px;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    margin-top: 0px;
    margin-left: 0px;
    width: 100%;
  }
`;
const Image = styled(RatioBox)`
  border-radius: 0px;
  width: calc(50% - 15px) !important;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    position: absolute;
    width: 100% !important;
    top: 0px;
    left: 0px;
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

const Name = styled(Title)`
  font-weight: bold;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.color.GRAY1};
  margin: 13px 0px;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;
const MobileHr = styled.div`
  width: 100%;
  height: 9px;
  background-color: ${(props) => props.theme.color.GRAY1};
  margin: 13px 0px;
  display: none;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    display: block;
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;
const RateBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
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
    color: ${(props) => props.theme.color.PRIMARY};
    font-weight: bold;
    margin-right: 10px;
  }
  > p {
    text-decoration: line-through;
    color: ${(props) => props.theme.color.GRAY5};
  }
`;

const ShippingBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const CustomSelect = styled(Select)`
  margin-bottom: 7px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    > h1 {
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 14px;
  > button {
    width: calc((100% - 10px) / 3);
  }
  ${(props) => props.theme.window.pc} {
    > button {
      width: calc((100% - 10px) / 2);
      :nth-of-type(3) {
        margin-top: 8px;
        width: 100%;
      }
    }
  }
`;
