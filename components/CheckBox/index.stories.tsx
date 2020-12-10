import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import CheckBox from 'components/CheckBox';

export default { title: 'Example/components/CheckBox' };

export const CheckBoxTest = () => (
  <CustomContainer>
    <CheckBox checked={true} />
    <CheckBox checked={false}>체크박스</CheckBox>
  </CustomContainer>
);

const CustomContainer = styled(Container)``;
