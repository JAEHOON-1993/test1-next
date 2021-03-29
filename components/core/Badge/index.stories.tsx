import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Badge from './index';

export default {
  title: 'Components/Core/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <div>
    <Badge label="전체" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const DisabledOutline = Template.bind({});
DisabledOutline.args = {
  isDisabled: true,
  outline: true,
};

Outline.parameters = {
  docs: {
    description: {
      story: '`outline`을(를) 이용하여 아웃라인 여부를 변경할 수 있습니다.',
    },
  },
};

Disabled.parameters = {
  docs: {
    description: {
      story:
        '`isDisabled`을(를) 이용하여 badge의 disabled 상태를 변경할 수 있습니다.',
    },
  },
};

DisabledOutline.parameters = {
  docs: {
    description: {
      story:
        '`isDisabled, outline`을(를) 적용하여 badge의 disabled, outline 상태를 변경할 수 있습니다.',
    },
  },
};
