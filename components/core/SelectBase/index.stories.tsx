import React from 'react';

import { Story, Meta } from '@storybook/react';

import SelectBase, { SelectBaseProps } from './index';

import styled from 'styled-components';

export default {
  title: 'Components/Core/SelectBase',
  component: SelectBase,
  argTypes: {
    value: { control: false },
    onChange: { control: false },
  },
} as Meta;

const Template: Story<SelectBaseProps> = (args) => {
  console.log(args);
  return (
    <SelectBase placeholder="옵션을 선택해 주세요" {...args}>
      <option value="면세사업자">면세사업자 (주택임대업 외)</option>
      <option value="주택임대업자">주택임대업자</option>
      <option value="일반">일반/간이사업자</option>
    </SelectBase>
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

export const Variants = () => {
  return (
    <Wrapper>
      <div>
        <SelectBase placeholder="옵션을 선택해 주세요">
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </SelectBase>
      </div>
      <div>
        <SelectBase placeholder="옵션을 선택해 주세요" variant="outline">
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </SelectBase>
      </div>
    </Wrapper>
  );
};

Variants.parameters = {
  docs: {
    description: {
      story:
        '`variant` prop을 이용하여 스타일을 변경할 수 있습니다. `flushed(default)`, `outline`가 제공됩니다.',
    },
  },
};

export const DisabledInput = () => {
  return (
    <Wrapper>
      <div>
        <SelectBase placeholder="옵션을 선택해 주세요" isDisabled>
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </SelectBase>
      </div>
      <div>
        <SelectBase
          placeholder="옵션을 선택해 주세요"
          variant="outline"
          isDisabled
        >
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </SelectBase>
      </div>
    </Wrapper>
  );
};

DisabledInput.parameters = {
  docs: {
    description: {
      story: '`isDisabled` prop을 이용하여 disabled 상태로 만들 수 있습니다.',
    },
  },
};

export const SelectWithError = () => {
  return (
    <Wrapper>
      <div>
        <SelectBase placeholder="옵션을 선택해 주세요" isError>
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </SelectBase>
      </div>
      <div>
        <SelectBase
          placeholder="옵션을 선택해 주세요"
          variant="outline"
          isError
        >
          <option value="면세사업자">면세사업자 (주택임대업 외)</option>
          <option value="주택임대업자">주택임대업자</option>
          <option value="일반">일반/간이사업자</option>
        </SelectBase>
      </div>
    </Wrapper>
  );
};

SelectWithError.parameters = {
  docs: {
    description: {
      story:
        '`isError` prop을 이용하여 값이 선택되지 않음을 표시할 수 있습니다.',
    },
  },
};
