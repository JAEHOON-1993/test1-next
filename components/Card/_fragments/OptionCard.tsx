import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import { intComma } from 'utils/format';

import * as T from 'components/Typography';
import { Card, CardHeader } from 'components/Card';
import SystemIcon from 'components/Icons/SystemIcon';

interface Props {
  children?: any;
  onClick?: any;
}

const ItemCard: React.FC<Props> = (props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <ItemBox {...props}>
          <CardHeader
            subTitle="그레이 / 50 X 50 cm"
            action={<SystemIcon name="close" color={theme.color.GRAY4} />}
          />
          <Footer>
            <ButtonBox>
              <div>
                <SystemIcon name="smallMinus" color={theme.color.GRAY4} />
              </div>
              <div>
                <T.Text>{0}</T.Text>
              </div>
              <div>
                <SystemIcon name="smallPlus" color={theme.color.GRAY4} />
              </div>
            </ButtonBox>
            <T.Title>{intComma(3200)}원</T.Title>
          </Footer>
        </ItemBox>
      )}
    </ThemeConsumer>
  );
};
export default ItemCard;

const ItemBox = styled(Card)`
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.GRAY2};
  padding: 12px;
  h1,
  p {
    color: ${(props) => props.theme.color.GRAY5};
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.color.GRAY3};
  > div {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.WHITE};
    :hover {
      background-color: ${(props) => props.theme.color.GRAY0};
    }
    :nth-child(2) {
      cursor: default;
      border-left: 1px solid ${(props) => props.theme.color.GRAY3};
      border-right: 1px solid ${(props) => props.theme.color.GRAY3};
      :hover {
        background-color: ${(props) => props.theme.color.WHITE};
      }
    }
    > p {
      line-height: 1;
      color: ${(props) => props.theme.color.GRAY5};
    }
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  > h1 {
    color: ${(props) => props.theme.color.BLACK};
  }
`;
