import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import styled, { ThemeConsumer } from 'styled-components';
import FloatingActionButton from './index';
import ColorIcon from 'components/Icons/ColorIcon';
import DuotoneIcon from 'components/Icons/DuotoneIcon';

export default {
  title: 'Components/Core/Floating Action Button',
  component: FloatingActionButton,
} as Meta;

const Wrapper = styled.div`
  & > div + div {
    margin-top: 32px;
  }
`;

export const Default = () => {
  return (
    <ThemeConsumer>
    {(theme) => (
     <Wrapper>
     <div>
       <FloatingActionButton 
       color='#ffffff'
       outlineColor={theme.color.PRIMARY}
       icon={<ColorIcon name="ai"/>}
       />
     </div>
     <div>
       <FloatingActionButton 
       color='#ffffff'
       outlineColor='blue'
       icon={<DuotoneIcon name="click"/>}
       />
     </div>
     <div>
       <FloatingActionButton 
          label='asdlfkasdlkfasldkf'
       />
     </div>

     </Wrapper>
    )}
  </ThemeConsumer>

  );
};

// FloatingActionButton.parameters = {
//   docs: {
//     description: {
//       story: '카테고리 혹은 상태를 나타낼 때 사용하는 Badge 컴포넌트입니다.',
//     },
//   },
// };