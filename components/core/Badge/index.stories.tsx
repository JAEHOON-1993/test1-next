import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Badge from './index';
import styled from 'styled-components';

export default {
  title: 'Components/Core/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Wrapper = styled.div`
  & > div + div {
    margin-top: 32px;
  }
`;

export const DefaultBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge size="small" label="small" />
      </div>
      <div>
        <Badge label="default" />
      </div>
    </Wrapper>
  );
};

DefaultBadge.parameters = {
  docs: {
    description: {
      story: '카테고리 혹은 상태를 나타낼 때 사용하는 Badge 컴포넌트입니다.',
    },
  },
};

export const OutlineBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge size="small" label="small" outline={true} />
      </div>
      <div>
        <Badge label="default" outline={true} />
      </div>
    </Wrapper>
  );
};

OutlineBadge.parameters = {
  docs: {
    description: {
      story:
        '`outline`을(를) 이용하여 활성화 된 Badge의 아웃라인 여부를 변경할 수 있습니다.',
    },
  },
};

export const DisabledBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge size="small" label="small" isDisabled />
      </div>
      <div>
        <Badge label="default" isDisabled />
      </div>
    </Wrapper>
  );
};

DisabledBadge.parameters = {
  docs: {
    description: {
      story: '`isDisabled`을(를) 이용하여 비활성화 상태로 변경할 수 있습니다.',
    },
  },
};

export const OutlineDisabledBadge = () => {
  return (
    <Wrapper>
      <div>
        <Badge size="small" label="small" isDisabled outline />
      </div>
      <div>
        <Badge label="default" isDisabled outline />
      </div>
    </Wrapper>
  );
};

OutlineDisabledBadge.parameters = {
  docs: {
    description: {
      story:
        '`isDisabled, outline`을(를) 적용하여 badge의 disabled, outline 상태를 변경할 수 있습니다.',
    },
  },
};
