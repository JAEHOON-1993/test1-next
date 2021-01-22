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
            <Button label="Default" />
            <Button label="Outline" outline />
            <Button label="Disabled" disabled />
          </ButtonBox>
          <h1>Round</h1>
          <ButtonBox>
            <Button label="Default" round />
            <Button label="Outline" round outline />
            <Button label="Disabled" round disabled />
          </ButtonBox>
          <h1>Custom Color</h1>
          <ButtonBox>
            <Button label="Default" color={theme.color.SECONDARY} />
            <Button label="Outline" color={theme.color.SECONDARY} outline />
            <Button label="Disabled" color={theme.color.SECONDARY} disabled />
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
  label: 'button',
  color: '#4575F5',
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  width: '200px',
  label: 'button',
  color: '#4575F5',
  icon: <SystemIcon name="alarm" color="white" />,
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  width: '200px',
  label: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  width: '200px',
  label: 'Disabled',
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
