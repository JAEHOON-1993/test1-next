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
    <Badge label="" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: '전체',
};

export const Outline = Template.bind({});
Outline.args = {
  label: '전체',
  outline: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '전체',
  isDisabled: true,
};

export const DisabledOutline = Template.bind({});
DisabledOutline.args = {
  label: '전체',
  isDisabled: true,
  outline: true,
};

