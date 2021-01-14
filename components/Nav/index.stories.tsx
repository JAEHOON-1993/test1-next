import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Nav from 'components/Nav';

export default {
  title: 'Example/components/Nav',
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const NavPC = Template.bind({});
NavPC.args = {};

export const NavMobile = Template.bind({});
NavMobile.args = {};

export const NavQR = Template.bind({});
NavQR.args = {};
