import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Input, { Props } from 'components/Input';
import BoxInput from 'components/Input/BoxInput';
import Button from 'components/Button';

export default {
  title: 'Example/components/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;
const BoxTemplate: Story = (args) => <BoxInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Title *',
  placeholder: 'placeholder',
  action: <Button width="100px" label="전송" />,
};

export const OnlyInput = Template.bind({});
OnlyInput.args = {
  label: '이름',
  placeholder: '이름을 입력해주세요',
};

export const HasError = Default.bind({});
HasError.args = {
  label: '이메일',
  error: true,
  errorText: '가입된 이메일이 존재하지 않습니다.',
};

export const BoxDefault = BoxTemplate.bind({});
BoxDefault.args = {
  label: '이메일',
  errorRegex: /^[가-힣]{2,4}$/g,
  errorText: '이름을 정확하게 입력해주세요',
};

export const BoxActive = BoxTemplate.bind({});
BoxActive.args = {
  label: '이메일',
  errorRegex: /^[가-힣]{2,4}$/g,
  errorText: '이름을 정확하게 입력해주세요',
  action: '재전송',
};
