import React from 'react';

import { Story, Meta } from '@storybook/react';

import Link, { LinkProps } from './index';

export default {
  title: 'Components/Core/Link',
  component: Link,
  argTypes: {
    color: {
      description:
        '컬러 값을 이용하여 색상을 변경할 수 있습니다. 기본은 inherit입니다.',
      control: 'color',
    },
  },
} as Meta;

const Template: Story<LinkProps> = ({ href, ...args }) => (
  <Link href="#" {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, deleniti!
  </Link>
);

export const Deafult = Template.bind({});

export const External = () => (
  <Link href="https://www.toktokhan.dev/" isExternal>
    https://www.toktokhan.dev/
  </Link>
);

External.parameters = {
  docs: {
    description: {
      story:
        'isExternal prop을 이용하여 새 탭을 열고 페이지로 이동할 수 있습니다. `noopener`, `noreferrer`이 설정되어있습니다.',
    },
  },
};
