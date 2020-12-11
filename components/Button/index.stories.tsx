import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import theme from 'layout/theme';
import Button, { ButtonProps } from 'components/Button';
import Icon from 'components/Icon';

export default {
  title: 'Example/components/Button',
  components: Button,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  width: '200px',
  label: 'button',
  color: theme.color.PRIMARY,
};

export const defaultButtonWithIcon = Template.bind({});
defaultButtonWithIcon.args = {
  width: '200px',
  label: 'button',
  color: theme.color.PRIMARY,
  icon: <Icon name="alert" style={{ fill: 'white', marginRight: '10px' }} />,
};

export const defaultOutlineButton = Template.bind({});
defaultOutlineButton.args = {
  outline: true,
  width: '200px',
  label: 'button',
};

export const defaultDisabledButton = Template.bind({});
defaultDisabledButton.args = {
  disabled: true,
  width: '200px',
  label: 'Disabled',
};
