import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import GradientIcon from 'components/Icons/GradientIcon';

export default {
  title: 'Example/components/Icons/GradientIcon',
  component: GradientIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      <GradientIconIconBox>
        <GradientIcon name="graph" />
        <div>Graph</div>
      </GradientIconIconBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const GradientIconIconBox = styled.div`
  display: flex;
  align-items: center;
`;
