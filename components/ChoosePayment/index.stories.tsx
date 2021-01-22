import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import ChoosePayment from 'components/ChoosePayment';

export default { title: 'Example/components/ChoosePayment' };

const paymentData = [
  { id: 0, label: '신용카드', icon: 'card' },
  { id: 1, label: '계좌이체', icon: 'cash' },
  { id: 2, label: '후결제', icon: 'inquiry' },
];

export const ratioImage = () => (
  <CustomContainer>
    <ChoosePayment paymentData={paymentData} />
  </CustomContainer>
);

const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    width: calc((100% - 30px) / 4);
    margin-bottom: 20px;
  }
`;
