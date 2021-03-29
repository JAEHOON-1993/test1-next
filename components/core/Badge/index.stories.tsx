import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Badge from './index';
import styled from 'styled-components';

export default {
  title: 'Components/Core/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => (
  <div>
    <Badge label="전체" {...args} />
  </div>
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

export const DefaultBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge label="전체" />
      </div>
      <div>
        <Badge size="small" label="전체" />
      </div>
    </Wrapper>
  );
};

export const OutlineBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge label="전체" outline={true} />
      </div>
      <div>
        <Badge size="small" label="전체" outline={true} />
      </div>
    </Wrapper>
  );
};

export const DisabledBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge label="전체" isDisabled />
      </div>
      <div>
        <Badge size="small" label="전체" isDisabled />
      </div>
    </Wrapper>
  );
};

export const OutlineDisabledBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge label="전체" isDisabled outline />
      </div>
      <div>
        <Badge size="small" label="전체" isDisabled outline />
      </div>
    </Wrapper>
  );
};

OutlineBadge.parameters = {
  docs: {
    description: {
      story: '`outline`을(를) 이용하여 아웃라인 여부를 변경할 수 있습니다.',
    },
  },
};

DisabledBadge.parameters = {
  docs: {
    description: {
      story:
        '`isDisabled`을(를) 이용하여 badge의 disabled 상태를 변경할 수 있습니다.',
    },
  },
};

OutlineDisabledBadge.parameters = {
  docs: {
    description: {
      story:
        '`isDisabled, outline`을(를) 적용하여 badge의 disabled, outline 상태를 변경할 수 있습니다.',
    },
  },
};
