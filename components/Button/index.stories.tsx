import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import theme from 'layout/theme';
import Button, { ButtonProps } from 'components/Button';
import Icon from 'components/Icon';
import NaverLogin from 'components/Button/Social/NaverLogin';
import KakaoLogin from 'components/Button/Social/KakaoLogin';

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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '200px',
  label: 'button',
  color: theme.color.PRIMARY,
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  width: '200px',
  label: 'button',
  color: theme.color.PRIMARY,
  icon: <Icon name="alert" style={{ fill: 'white', marginRight: '10px' }} />,
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

export const AllButtons = () => {
  return (
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
  );
};

const ButtonBox = styled.div`
  display: flex;
  > button {
    width: 300px;
    margin-right: 8px;
  }
  margin-bottom: 10px;
`;

export const SocialButtons = () => {
  return (
    <>
      <SocialBox>
        <h1>
          Social Login <small>[Default]</small>
        </h1>
        <NaverLogin />
        <KakaoLogin />
      </SocialBox>
      <SocialBox>
        <h1>
          Social Login <small>[Round]</small>
        </h1>
        <NaverLogin round />
        <KakaoLogin round />
      </SocialBox>
    </>
  );
};

const SocialBox = styled.div`
  > button {
    margin-bottom: 8px;
  }
`;
