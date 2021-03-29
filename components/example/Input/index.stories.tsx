import React from 'react';

import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from './index';

import styled from 'styled-components';

import LineIcon from 'components/Icons/LineIcon';

export default {
  title: 'Components/Example/Input',
  component: Input,
  argTypes: {
    icon: { control: false },
  },
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Input label="Title small" placeholder="이메일을 입력해 주세요." {...args} />
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

export const InputWithIcon = () => {
  return (
    <Wrapper>
      <div>
        <Input
          placeholder="비밀번호"
          icon={<LineIcon name="password" size={24} color="currentColor" />}
        />
      </div>
      <div>
        <Input
          placeholder="아이디"
          icon={<LineIcon name="user" size={24} color="currentColor" />}
          alignIcon="right"
        />
      </div>
      <div>
        <Input
          placeholder="비밀번호"
          variant="outline"
          icon={<LineIcon name="password" size={24} color="currentColor" />}
        />
      </div>
      <div>
        <Input
          placeholder="아이디"
          variant="outline"
          icon={<LineIcon name="user" size={24} color="currentColor" />}
          alignIcon="right"
        />
      </div>
    </Wrapper>
  );
};

export const InputWithLabel = () => {
  return (
    <Wrapper>
      <div>
        <Input placeholder="이메일" label="이메일" id="email" />
      </div>
      <div>
        <Input
          placeholder="이메일"
          variant="outline"
          label="이메일"
          id="email"
        />
      </div>
    </Wrapper>
  );
};

InputWithLabel.parameters = {
  docs: {
    description: {
      story:
        '`label` prop을 이용하여 인풋 컴포넌트 라벨 텍스트를 정의할 수 있습니다. `id` prop을 이용하여 라벨을 인풋 요소와 연결할 수 있습니다.',
    },
  },
};

export const InputWithError = () => {
  return (
    <Wrapper>
      <div>
        <Input
          placeholder="이메일"
          value="toktok@gmailcom"
          isError
          errorMessage="이메일을 올바르게 입력해주세요"
        />
      </div>
      <div>
        <Input
          placeholder="이메일"
          value="toktok@gmailcom"
          variant="outline"
          label="이메일"
          isError
          errorMessage="이메일을 올바르게 입력해주세요"
        />
      </div>
    </Wrapper>
  );
};

InputWithError.parameters = {
  docs: {
    description: {
      story:
        '`isError` prop을 이용하여 인풋 값이 유효하지 않음을 표시할 수 있습니다. `errorMessage` prop을 이용하여 에러 메시지를 정의할 수 있습니다.',
    },
  },
};
