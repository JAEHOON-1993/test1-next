import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import Rate from 'components/Rate';

export default { title: 'Example/components/Rate' };

export const ratioImage = () => (
  <CustomContainer>
    <Rate />
    <Rate value={1} />
    <Rate value={3.5} />
    <Rate value={5} />
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
