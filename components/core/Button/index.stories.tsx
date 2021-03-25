import React from 'react';

import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './index';

import styled from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';

export default {
  title: 'Components/Core/Button',
  component: Button,
  argTypes: {
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>I'm Button</Button>
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
        <Button size="xs">XSmall</Button>
      </div>
      <div>
        <Button size="sm">Small</Button>
      </div>
      <div>
        <Button size="md">Medium</Button>
      </div>
      <div>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button size="xs" isRound>
          XSmall
        </Button>
      </div>
      <div>
        <Button size="sm" isRound>
          Small
        </Button>
      </div>
      <div>
        <Button size="md" isRound>
          Medium
        </Button>
      </div>
      <div>
        <Button size="lg" isRound>
          Large
        </Button>
      </div>
    </Wrapper>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story:
        '`size` prop을 이용하여 버튼의 크기를 변경할 수 있습니다. `xs`, `sm`, `md(default)`, `lg`가 제공됩니다.',
    },
  },
};

export const Variants = () => {
  return (
    <Wrapper>
      <div>
        <Button variant="solid">solid</Button>
      </div>
      <div>
        <Button variant="outline">outline</Button>
      </div>
    </Wrapper>
  );
};

Variants.parameters = {
  docs: {
    description: {
      story:
        '`variant` prop을 이용하여 버튼의 스타일을 변경할 수 있습니다. `solid(default)`, `outline`이 제공됩니다.',
    },
  },
};

export const ButtonWithIcon = () => {
  return (
    <Wrapper>
      <div>
        <Button leftIcon={<SystemIcon name="calender" color="currentColor" />}>
          Calender
        </Button>
      </div>
      <div>
        <Button
          variant="outline"
          colorScheme="point"
          rightIcon={<SystemIcon name="bookmark" color="currentColor" />}
        >
          Bookmark
        </Button>
      </div>
    </Wrapper>
  );
};

ButtonWithIcon.parameters = {
  docs: {
    description: {
      story:
        '`leftIcon`, `rightIcon` prop을 이용하여 버튼 label의 왼쪽과 오른쪽에 icon을 추가할 수 있습니다.',
    },
  },
};

export const LoadingState = () => {
  return (
    <Wrapper>
      <div>
        <Button variant="solid" isLoading>
          I'm Button
        </Button>
      </div>
      <div>
        <Button variant="outline" isLoading>
          I'm Button
        </Button>
      </div>
    </Wrapper>
  );
};

LoadingState.parameters = {
  docs: {
    description: {
      story:
        '`isLoading` prop을 이용하여 로딩 상태를 표시할 수 있습니다. 이때 버튼의 크기는 변하지 않습니다.',
    },
  },
};

export const HuggingButton = () => {
  return (
    <Wrapper>
      <div>
        <Button variant="solid" colorScheme="point" size="xs" isHugging>
          Button XSmall
        </Button>
      </div>
      <div>
        <Button variant="outline" colorScheme="point" isHugging>
          Button Medium
        </Button>
      </div>
    </Wrapper>
  );
};

HuggingButton.parameters = {
  docs: {
    description: {
      story:
        '`isHugging` prop을 이용하여 버튼의 크기를 label 길이에 맞춰 유동적으로 변하게 만들 수 있습니다.',
    },
  },
};
