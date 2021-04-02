import React, { useState } from 'react';

import { Story, Meta } from '@storybook/react';

import Rating, { RatingProps } from './index';

import styled from 'styled-components';

export default {
  title: 'Components/Core/Rating',
  component: Rating,
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Default = Template.bind({});

export const ControlledRating = () => {
  const [rating, setRating] = useState(0);

  const handleChange = (value: number) => {
    setRating(value);
  };

  return <Rating max={5} value={rating} onChange={handleChange} />;
};

ControlledRating.parameters = {
  docs: {
    description: {
      story:
        '`value`, `onChange` prop을 이용하여 Rating component를 controlled 상태로 만들 수 있습니다.',
    },
  },
};

export const ReadOnlyRating = () => <Rating max={5} value={3.8} readOnly />;

ReadOnlyRating.parameters = {
  docs: {
    description: {
      story:
        '`readOnly` prop을 이용하여 모든 마우스 효과를 제거할 수 있습니다. 이 경우 여러 사용자의 평균 평점을 나타내는데 적합합니다.',
    },
  },
};
