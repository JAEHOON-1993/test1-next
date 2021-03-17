import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from 'components/Button';
import SystemIcon from 'components/Icons/SystemIcon';

import NaverLogin from 'components/Social/NaverLogin';
import KakaoLogin from 'components/Social/KakaoLogin';
import GoogleLogin from 'components/Social/GoogleLogin';
import FacebookLogin from 'components/Social/FacebookLogin';
import AppleLogin from 'components/Social/AppleLogin';

export default {
  title: 'Example/components/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const AllButtons = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <h1>Default</h1>
          <ButtonBox>
            <Button>Default</Button>
            <Button outline>Outline</Button>
            <Button disabled>Disabled</Button>
          </ButtonBox>
          <h1>Round</h1>
          <ButtonBox>
            <Button round>Default</Button>
            <Button round outline>
              Outline
            </Button>
            <Button round disabled>
              Disabled
            </Button>
          </ButtonBox>
          <h1>Custom Color</h1>
          <ButtonBox>
            <Button color={theme.color.SECONDARY}>Default</Button>
            <Button outline color={theme.color.SECONDARY}>
              Outline
            </Button>
            <Button disabled color={theme.color.SECONDARY}>
              Disabled
            </Button>
          </ButtonBox>
        </>
      )}
    </ThemeConsumer>
  );
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '200px',
  children: 'button',
  color: '#4575F5',
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  width: '200px',
  children: 'button',
  color: '#4575F5',
  icon: <SystemIcon name="alarm" color="white" />,
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  width: '200px',
  children: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  width: '200px',
  children: 'Disabled',
};

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    width: 300px;
    margin-bottom: 10px;
  }
  margin-bottom: 10px;
`;

export const socialButton = () => {
  return (
    <>
      <SocialBox>
        <h1>
          Social Login <small>[Default]</small>
        </h1>
        <KakaoLogin />
        <NaverLogin />
        <FacebookLogin />
        <GoogleLogin />
        <AppleLogin />
      </SocialBox>
    </>
  );
};

const SocialBox = styled.div`
  > button {
    margin-bottom: 8px;
  }
`;
