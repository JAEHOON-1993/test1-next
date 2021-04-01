import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import styled, { ThemeConsumer } from 'styled-components';
import DuotoneIcon from 'components/Icons/DuotoneIcon';

import ColorIcon from 'components/Icons/ColorIcon';
import FloatingActionButtonWithText from './index';

export default {
  title: 'Components/Core/Floating Action Button with Text',
  component: FloatingActionButtonWithText,
} as Meta;

const Wrapper = styled.div`
  & > div + div {
    margin-top: 32px;
  }
`;

export const WithText = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Wrapper>
          <div>
            <FloatingActionButtonWithText
              label="문의"
              icon={<DuotoneIcon name="click" />}
              onClick={() => console.log('문의하기')}
            />
          </div>
          <div>
            <FloatingActionButtonWithText
               onClick={() => console.log('clicked')}
              size="lg"
              outlineColor="green"
              label="신청하기"
              icon={<ColorIcon name="ai" />}
            />
          </div>
          <div>
            <FloatingActionButtonWithText
              size="sm"
              outlineColor="blue"
              label="신청하기"
              icon={<ColorIcon name="home" />}
            />
          </div>
        </Wrapper>
      )}
    </ThemeConsumer>
  );
};

WithText.parameters = {
  docs: {
    description: {
      story:
        'Text와 함께 표시되며, 특정 동작을 유도 혹은 특정 기능을 수행하는 Floating action button 컴포넌트입니다.',
    },
  },
};
