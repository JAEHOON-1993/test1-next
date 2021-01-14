import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react';

import theme from 'layout/theme';

import Icon from 'components/Icon';
import { Title, Text } from 'components/Text';

const ChoosePayment = observer(() => {
  const [type, setType] = useState<number>(0);

  return (
    <>
      <SubTitleBox>
        <Title bold>결제수단</Title>
      </SubTitleBox>
      <SelectBox>
        <Select
          active={type === 0}
          onClick={() => {
            setType(0);
          }}
        >
          <Icon
            name="card"
            style={{
              fill: theme.color.PRIMARY,
              width: '50px',
              height: '50px',
            }}
          />
          <Text>신용카드</Text>
        </Select>
        <Select
          active={type === 1}
          onClick={() => {
            setType(1);
          }}
        >
          <Icon
            name="cash"
            style={{
              fill: theme.color.PRIMARY,
              width: '50px',
              height: '50px',
            }}
          />
          <Text>계좌이체</Text>
        </Select>
        <Select
          active={type === 2}
          onClick={() => {
            setType(2);
          }}
        >
          <Icon
            name="inquiry"
            style={{
              fill: theme.color.PRIMARY,
              width: '50px',
              height: '50px',
            }}
          />
          <Text>신청만 진행 (후결제)</Text>
        </Select>
      </SelectBox>
    </>
  );
});

export default ChoosePayment;

const SubTitleBox = styled.div`
  margin-bottom: 50px;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.GRAY1};
  > div {
    width: calc(100% / 3);
    :nth-child(2) {
      border-right: 1px solid ${(props) => props.theme.color.GRAY1};
      border-left: 1px solid ${(props) => props.theme.color.GRAY1};
    }
  }
  ${(props) => props.theme.window.mobile} {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const Select = styled.div<{ active?: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  > p {
    margin-top: 10px;
    color: ${(props) => props.theme.color.GRAY5};
  }
  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.color.GRAY1};
    `}

  ${(props) => props.theme.window.mobile} {
    > p {
      text-align: center;
    }
  }
`;
