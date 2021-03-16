import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react/types-6-0';

import CheckBox, { CheckboxProps } from 'components/CheckBox';
import SecondBox, { SecondBoxProps } from './SecondBox';
import Container from 'components/Container';

import Example from './examples/Terms';

export default {
  title: 'Example/components/CheckBox',
  component: CheckBox,
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <CheckBox {...args} />;
const SecondTemplate: Story<SecondBoxProps> = (args) => <SecondBox {...args} />;
const SecondBoxExample: Story<any> = (args) => <Example {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
  checked: true,
};

export const secondbox = SecondTemplate.bind({});
SecondTemplate.args = {
  checked: false,
  onChange: () => !true,
  isLink: true,
};

export const secondboxexample = SecondBoxExample.bind({});

export const checkboxAll = () => (
  <CustomContainer>
    <CheckBox checked={true} />
    <CheckBox checked={false}>체크박스</CheckBox>
  </CustomContainer>
);

const CustomContainer = styled(Container)``;
