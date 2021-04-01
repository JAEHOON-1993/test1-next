import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import styled, { ThemeConsumer } from 'styled-components';
import FloatingActionButton from './index';
import DuotoneIcon from 'components/Icons/DuotoneIcon';
import SocialIcon from 'components/Icons/SocialIcon';


export default {
  title: 'Components/Core/Floating Action Button',
  component: FloatingActionButton,
} as Meta;

const Wrapper = styled.div`
  & > div + div {
    margin-top: 32px;
  }
`;

export const Default = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Wrapper>
          <div>
            <FloatingActionButton
              backgroundColor={theme.color.GRADIENT1}
              outlineColor={theme.color.PRIMARY}
              icon={<SocialIcon name="naver" color={theme.color.WHITE} />}
            />
          </div>
          <div>
            <FloatingActionButton
            isFiltered
              backgroundColor={theme.color.WHITE}
              outlineColor="blue"
              icon={<DuotoneIcon name="click" />}
            />
          </div>
        </Wrapper>
      )}
    </ThemeConsumer>
  );
};

Default.parameters = {
  docs: {
    description: {
      story:
        '특정 동작을 유도 혹은 특정 기능을 수행하는 Floating action button 컴포넌트입니다.',
    },
  },
};
