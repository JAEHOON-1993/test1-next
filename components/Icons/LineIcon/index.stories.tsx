import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import LineIcon from 'components/Icons/LineIcon';

export default {
  title: 'Example/components/Icons/LineIcon',
  component: LineIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      <LineIconBox>
        <LineIcon name="box" />
        <div>Box</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="cash" />
        <div>Cash</div>
      </LineIconBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const LineIconBox = styled.div`
  display: flex;
  align-items: center;
`;
