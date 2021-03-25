import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderProps } from 'components/Header/interface';

import TextHeader from 'components/Header/TextHeader';

// import NavType2Container from 'components/Navigation/example/TextNavigation_2';
// import NavType3Container from 'components/Navigation/example/TextNavigation_3';
// import NavType4Container from 'components/Navigation/example/TextNavigation_4';
// import NavType5Container from 'components/Navigation/example/TextNavigation_5';

export default {
  title: 'Example/components/Header/TextHeader',
  component: TextHeader,
  argTypes: {
    centerPoint: {
      description: '로고의 중앙 정렬 기준',
      table: {
        category: 'header props',
        type: { summary: '"tab" | "mobile" | undefined' },
        defaultValue: { summary: 'tab' },
      },
      control: {
        type: 'select',
        options: ['tab', 'mobile', ''],
      },
      defaultValue: 'tab',
    },
    isCenter: {
      description: '메뉴의 중앙 정렬 여부',
      table: {
        category: 'header props',
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      defaultValue: true,
    },
    nickname: {
      description: '닉네임',
      table: {
        category: 'user props',
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
      defaultValue: 'jangwon',
    },
    avatar: {
      description: '프로필사진',
      table: {
        category: 'user props',
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
      defaultValue: 'https://tech.toktokhan.dev/files/authors/jangwon.seo.png',
    },
  },
} as Meta;

const getUser = (isLogin: boolean, nickname: string, avatar: string) => {
  // Makes some computations and returns something
  return { isLogin: isLogin, nickname, avatar };
};

const TextHeader1: Story<any | HeaderProps> = ({
  nickname,
  avatar,
  ...args
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const user = getUser(isLogin, nickname, avatar);
  return <TextHeader user={user} setIsLogin={setIsLogin} {...args} />;
};

export const Default = TextHeader1.bind({});
Default.args = {
  centerPoint: 'tab',
  isCenter: true,
};

const TextHeaderNoUser: Story<any | HeaderProps> = ({ ...args }) => {
  return <TextHeader {...args} />;
};

export const NoUser = TextHeaderNoUser.bind({});
NoUser.args = {
  isCenter: true,
  centerPoint: '',
  menuText: 'Menu',
};

// export const TextNavigation_2 = <NavType2Container />;
// export const TextNavigation_3 = <NavType3Container />;
// export const TextNavigation_4 = <NavType4Container />;
// export const TextNavigation_5 = <NavType5Container fixed={false} />;

// export const navMobile = <Nav_Mobile />;

// export const navQR = <Nav_QR />;
