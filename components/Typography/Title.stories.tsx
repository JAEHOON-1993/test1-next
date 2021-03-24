import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Title, BaseProps } from './index';

import styled from 'styled-components';

export default {
  title: 'Example/components/Title',
  component: Title,
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
  <Title {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, deleniti!
  </Title>
);

export const Deafult = Template.bind({});

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
        <Title size="sm">Small</Title>
      </div>
      <div>
        <Title size="md">Medium</Title>
      </div>
      <div>
        <Title size="lg">Large</Title>
      </div>
      <div>
        <Title size="xl">Extra Large</Title>
      </div>
    </Wrapper>
  );
};

export const Headings = () => {
  return (
    <Wrapper>
      <div>
        <Title as="h6" size="sm">
          Heading6
        </Title>
      </div>
      <div>
        <Title as="h5" size="sm">
          Heading5
        </Title>
      </div>
      <div>
        <Title as="h4" size="md">
          Heading4
        </Title>
      </div>
      <div>
        <Title as="h3" size="md">
          Heading3
        </Title>
      </div>
      <div>
        <Title as="h2" size="lg">
          Heading2
        </Title>
      </div>
      <div>
        <Title as="h1" size="lg">
          Heading1
        </Title>
      </div>
    </Wrapper>
  );
};

Headings.parameters = {
  docs: {
    description: {
      story:
        'styled-components의 as prop을 이용하여 element를 변경할 수 있습니다.',
    },
  },
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
