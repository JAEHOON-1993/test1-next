import React from 'react';

import { Story, Meta } from '@storybook/react';

import Footer, { Props } from './index';

export default {
  title: 'Example/components/Footer',
  component: Footer,
  parameters: {
    componentSubtitle:
      'Footer 컴포넌트는 웹 사이트의 부가적인 정보들을 표시하기 위해 사용됩니다.',
  },
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Deafult = Template.bind({});
Deafult.args = {};
