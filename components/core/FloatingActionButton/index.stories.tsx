import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import styled from 'styled-components';
import FloatingActionButton, { Props } from './index';

export default {
  title: 'Components/Core/Floating Action Button',
  component: FloatingActionButton,
  argTypes: {
    icon: { control: false },
  },
} as Meta;

const Wrapper = styled.div`
  & > div + div {
    margin-top: 32px;
  }
`;

const Template: Story<Props> = (args) => (
  <FloatingActionButton
    {...args}
    backgroundColor="#4595F5"
  />
);

export const Default = Template.bind({});

export const WithLabel = () => {
  return (
    <Wrapper>
      <div>
        <FloatingActionButton
          onClick={() => console.log('log')}
          backgroundColor="white"
          outlineColor="blue"
          label="BUTTON"
          isMaxContent
        />
      </div>
    </Wrapper>
  );
};

WithLabel.parameters = {
  docs: {
    description: {
      story:
        '`label`, `isMaxContent` Props를 사용하여 Text를 포함할 수 있습니다.',
    },
  },
};

export const FilteredButton = () => {
  return (
    <Wrapper>
      <div>
        <FloatingActionButton
          backgroundColor="white"
          outlineColor="blue"
          isFiltered
        />
      </div>
    </Wrapper>
  );
};

FilteredButton.parameters = {
  docs: {
    description: {
      story:
        '`isFiltered` Prop을 사용하여 버튼에 필터효과를 적용할 수 있습니다.',
    },
  },
};
