import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Badge from './index';

export default {
  title: 'Example/components/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <BadgeBox>
    <Badge label="" {...args} />
  </BadgeBox>
);

const BadgeBox = styled.div``;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Badge',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Badge',
  outline: true,
};
