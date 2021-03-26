import React from 'react';

import { Story, Meta } from '@storybook/react';

import InputBase, { BaseProps } from './index';

import styled from 'styled-components';

export default {
  title: 'Components/Core/InputBase',
  component: InputBase,
} as Meta;

const Template: Story<BaseProps> = (args) => (
  <InputBase placeholder="아이디를 입력해 주세요." {...args} />
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

export const Variants = () => {
  return (
    <Wrapper>
      <div>
        <InputBase placeholder="이메일을 입력해 주세요." />
      </div>
      <div>
        <InputBase placeholder="이메일을 입력해 주세요." variant="outline" />
      </div>
    </Wrapper>
  );
};

Variants.parameters = {
  docs: {
    description: {
      story:
        '`variant` prop을 이용하여 인풋의 스타일을 변경할 수 있습니다. `flushed(default)`, `outline`가 제공됩니다.',
    },
  },
};

export const DisabeldInput = () => {
  return (
    <Wrapper>
      <div>
        <InputBase placeholder="이메일을 입력해 주세요." isDisabled />
      </div>
      <div>
        <InputBase
          placeholder="이메일을 입력해 주세요."
          variant="outline"
          isDisabled
        />
      </div>
    </Wrapper>
  );
};

DisabeldInput.parameters = {
  docs: {
    description: {
      story:
        '`isDisabled` prop을 이용하여 인풋을 disabled 상태로 만들 수 있습니다.',
    },
  },
};

export const InputWithError = () => {
  return (
    <Wrapper>
      <div>
        <InputBase
          placeholder="이메일을 입력해 주세요."
          value="tokdigmal.com"
          hasError
        />
      </div>
      <div>
        <InputBase
          placeholder="이메일을 입력해 주세요."
          variant="outline"
          value="tokdigmal.com"
          hasError
        />
      </div>
    </Wrapper>
  );
};

InputWithError.parameters = {
  docs: {
    description: {
      story:
        '`hasError` prop을 이용하여 인풋 값이 유효하지 않음을 표시할 수 있습니다.',
    },
  },
};
