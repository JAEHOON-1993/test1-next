import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import DuotoneIcon from 'components/Icons/DuotoneIcon';

export default {
  title: 'Example/components/Icons/DuotoneIcon',
  component: DuotoneIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      <DuotoneIconBox>
        <DuotoneIcon name="card" />
        <div>Card</div>
      </DuotoneIconBox>

      <DuotoneIconBox>
        <DuotoneIcon name="click" />
        <div>click</div>
      </DuotoneIconBox>

      <DuotoneIconBox>
        <DuotoneIcon name="phone" />
        <div>Phone</div>
      </DuotoneIconBox>

      <DuotoneIconBox>
        <DuotoneIcon name="paper" />
        <div>Paper</div>
      </DuotoneIconBox>

      <DuotoneIconBox>
        <DuotoneIcon name="people" />
        <div>people</div>
      </DuotoneIconBox>

      <DuotoneIconBox>
        <DuotoneIcon name="popup" />
        <div>popup</div>
      </DuotoneIconBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const DuotoneIconBox = styled.div`
  display: flex;
  align-items: center;
`;
