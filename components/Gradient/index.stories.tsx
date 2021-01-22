import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled, { ThemeConsumer } from 'styled-components';

import Gradient from './index';
import SystemIcon from 'components/Icons/SystemIcon';

export default {
  title: 'Example/components/Gradient',
  component: Gradient,
  parameters: {
    componentSubtitle: 'linear-gradient를 component로 만들었습니다.',
  },
  argTypes: {
    first: { control: 'color' },
    second: { control: 'color' },
    position: {
      control: {
        type: 'inline-radio',
        options: ['to right', 'to bottom', '135deg'],
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <ThemeConsumer>
    {(theme) => (
      <GradientBox>
        <Gradient
          first={theme.color.PRIMARY}
          second={theme.color.SECONDARY}
          position="to right"
          {...args}
        >
          기본값
        </Gradient>
      </GradientBox>
    )}
  </ThemeConsumer>
);

export const Default = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <GradientBox>
          <Gradient
            first={theme.color.PRIMARY}
            second={theme.color.SECONDARY}
            position="to right"
          >
            Gradient 컴포넌트
          </Gradient>
        </GradientBox>
      )}
    </ThemeConsumer>
  );
};

export const TextBox = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <GradientBoxLong>
          <Gradient
            first={theme.color.PRIMARY}
            second={theme.color.SECONDARY}
            position="to right"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              <FlexBox>12개월 이용권</FlexBox>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>2020.01.20까지</div>
                <div>
                  <SystemIcon name="arrowRight" color={theme.color.WHITE} />
                </div>
              </div>
            </div>
          </Gradient>
        </GradientBoxLong>
      )}
    </ThemeConsumer>
  );
};

export const TestGradient = Template.bind({});
TestGradient.args = {
  first: '#29af7e',
  second: '#ffffff',
  position: '135deg',
};

const GradientBox = styled.div`
  width: 200px;
  height: 100px;
`;

const GradientBoxLong = styled.div`
  width: 300px;
  height: 60px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
