import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react';

import LineIcon from 'components/Icons/LineIcon';
import { Text } from 'components/Typography';

interface Props {
  paymentData: {
    id: number;
    label: string;
    icon: string;
  }[];
}

const ChoosePayment = observer(({ paymentData }: Props) => {
  const [type, setType] = useState<number>(0);

  return (
    <SelectBox>
      {paymentData?.map((payment) => (
        <Select
          active={type === payment.id}
          onClick={() => {
            setType(payment.id);
          }}
          key={payment.label}
        >
          <LineIcon name={payment.icon} />
          <Text>{payment.label}</Text>
        </Select>
      ))}
    </SelectBox>
  );
});

export default ChoosePayment;

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
