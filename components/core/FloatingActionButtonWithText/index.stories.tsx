import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import DuotoneIcon from 'components/Icons/DuotoneIcon';

import FloatingActionButtonWithText, { Props } from './index';

export default {
  title: 'Components/Core/Floating Action Button with Text',
  component: FloatingActionButtonWithText,
  argTypes: {
    icon: { control: false },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <FloatingActionButtonWithText
    {...args}
    icon={<DuotoneIcon name="click" />}
    onClick={() => console.log('123')}
  />
);

export const Default = Template.bind({});
