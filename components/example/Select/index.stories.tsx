import React, { useState } from 'react';

import { Story, Meta } from '@storybook/react';

import Select, { SelectProps } from './index';

import styled from 'styled-components';

export default {
  title: 'Components/Example/Select',
  component: Select,
  argTypes: {
    value: { control: false },
    onChange: { control: false },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => {
  return (
    <Select placeholder="옵션을 선택해 주세요" {...args}>
      <option value="면세사업자">면세사업자 (주택임대업 외)</option>
      <option value="주택임대업자">주택임대업자</option>
      <option value="일반">일반/간이사업자</option>
    </Select>
  );
};

export const Default = Template.bind({});

const Wrapper = styled.div`
  .description {
    margin-bottom: 12px;
  }
  & > div + div {
    margin-top: 32px;
  }
`;

export const ControlledSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      label="신고유형/ 수수료"
      placeholder="옵션을 선택해 주세요"
      value={selectedOption}
      onChange={setSelectedOption}
    >
      <option value="면세사업자">면세사업자 (주택임대업 외)</option>
      <option value="주택임대업자">주택임대업자</option>
      <option value="일반">일반/간이사업자</option>
    </Select>
  );
};

ControlledSelect.parameters = {
  docs: {
    description: {
      story:
        '`value`, `onChange` prop을 이용하여 option 값을 제어 할 수 있습니다.',
    },
  },
};

export const SelectWithLabel = () => {
  return (
    <Wrapper>
      <div>
        <Select label="Title small" placeholder="옵션을 선택해 주세요">
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </Select>
      </div>
      <div>
        <Select
          label="Title small"
          placeholder="옵션을 선택해 주세요"
          variant="outline"
        >
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </Select>
      </div>
    </Wrapper>
  );
};

SelectWithLabel.parameters = {
  docs: {
    description: {
      story:
        '`label` prop을 이용하여 select 컴포넌트 라벨 텍스트를 정의할 수 있습니다.',
    },
  },
};

export const SelectWithError = () => {
  return (
    <Wrapper>
      <div>
        <Select
          label="Title small"
          placeholder="옵션을 선택해 주세요"
          isError
          errorMessage="선택을 하지 않았습니다."
        >
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </Select>
      </div>
      <div>
        <Select
          label="Title small"
          placeholder="옵션을 선택해 주세요"
          variant="outline"
          isError
          errorMessage="선택을 하지 않았습니다."
        >
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </Select>
      </div>
    </Wrapper>
  );
};

SelectWithError.parameters = {
  docs: {
    description: {
      story:
        '`isError` prop을 이용하여 사용자가 어떤 선택도 하지 않았음을 표시할 수 있습니다. `errorMessage` prop을 이용하여 에러 메시지를 정의할 수 있습니다.',
    },
  },
};
