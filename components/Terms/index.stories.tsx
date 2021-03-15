import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Terms from 'components/Terms';

export default {
  title: 'Example/components/Terms',
  component: Terms,
} as Meta;

const Template: Story = (args) => <Terms {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstText: '서비스 이용을 위한 필수약관 동의',
  secondText: '개인정보수집 및 이용, 제3자 제공 동의',
  action: <Terms />,
};
