import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Text, BaseProps } from './index';

import styled from 'styled-components';

export default {
  title: 'Example/components/Text',
  component: Text,
  argTypes: {
    color: {
      description:
        '컬러 값을 이용하여 색상을 변경할 수 있습니다. 기본은 inherit입니다.',
      control: 'color',
    },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
} as Meta;

const Template: Story<BaseProps> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, deleniti!
  </Text>
);

export const Default = Template.bind({});

const Wrapper = styled.div`
  .description {
    margin-bottom: 12px;
  }
  & > div + div {
    margin-top: 32px;
  }
`;

export const Sizes = () => {
  return (
    <Wrapper>
      <div>
        <Text size="sm">Small</Text>
      </div>
      <div>
        <Text size="md">Medium</Text>
      </div>
      <div>
        <Text size="lg">Large</Text>
      </div>
      <div>
        <Text size="xl">Extra Large</Text>
      </div>
    </Wrapper>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story:
        '**xl**\
        <br/>\
        프로덕트 내에서 **강조 요소**로 활용되는 가장 큰 사이즈의 텍스트입니다. 메인 타이틀, 메인 슬라이드 배너 등에 컨텐츠 요소로 활용됩니다.\
        <br/>\
        <br/>\
        **lg**\
        <br/>\
        프로덕트 내에서 강조 요소로 활용되는 가장 큰 사이즈의 텍스트입니다. 페이지 타이틀 등의 요소로 활용되는 텍스트 사이즈입니다.\
        <br/>\
        <br/>\
        **md**(default)\
        <br/>\
        가장 기본적으로 활용되는 텍스트 사이즈를 정의합니다. 타이틀, 본문 등 컨텐츠 페이지에 전반적으로 사용합니다.\
        <br/>\
        <br/>\
        **sm**\
        <br/>\
        타이틀, 본문 등 컨텐츠 페이지에 전반적으로 사용합니다.\
        ',
    },
  },
};
