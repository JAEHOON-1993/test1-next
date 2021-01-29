import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import LineColorIcon from 'components/Icons/LineColorIcon';

export default {
  title: 'Example/components/Icons/LineColorIcon',
  component: LineColorIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      {/* <AlphaBetically>[ A ]</AlphaBetically> */}
      {/* <AlphaBetically>[ B ]</AlphaBetically> */}

      <AlphaBetically>[ C ]</AlphaBetically>
      <LineColorIconBox>
        <LineColorIcon name="card" color="#000" />
        <div>card</div>
      </LineColorIconBox>
      <LineColorIconBox>
        <LineColorIcon name="cash" />
        <div>cash</div>
      </LineColorIconBox>

      {/* <AlphaBetically>[ D ]</AlphaBetically> */}
      {/* <AlphaBetically>[ E ]</AlphaBetically> */}
      {/* <AlphaBetically>[ F ]</AlphaBetically> */}

      {/* <AlphaBetically>[ G ]</AlphaBetically> */}
      {/* <AlphaBetically>[ H ]</AlphaBetically> */}

      {/* <AlphaBetically>[ I ]</AlphaBetically> */}
      {/* <AlphaBetically>[ J ]</AlphaBetically> */}
      {/* <AlphaBetically>[ K ]</AlphaBetically> */}
      {/* <AlphaBetically>[ L ]</AlphaBetically> */}

      {/* <AlphaBetically>[ M ]</AlphaBetically> */}

      {/* <AlphaBetically>[ N ]</AlphaBetically> */}
      {/* <AlphaBetically>[ O ]</AlphaBetically> */}
      <AlphaBetically>[ P ]</AlphaBetically>
      <LineColorIconBox>
        <LineColorIcon name="phone" />
        <div>phone</div>
      </LineColorIconBox>

      {/* <AlphaBetically>[ Q ]</AlphaBetically> */}
      {/* <AlphaBetically>[ R ]</AlphaBetically> */}

      {/* <AlphaBetically>[ S ]</AlphaBetically> */}

      {/* <AlphaBetically>[ T ]</AlphaBetically> */}

      {/* <AlphaBetically>[ U ]</AlphaBetically> */}
      {/* <AlphaBetically>[ V ]</AlphaBetically> */}
      {/* <AlphaBetically>[ W ]</AlphaBetically> */}

      {/* <AlphaBetically>[ X ]</AlphaBetically> */}
      {/* <AlphaBetically>[ Y ]</AlphaBetically> */}
      {/* <AlphaBetically>[ Z ]</AlphaBetically> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 800px;
`;

const AlphaBetically = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const LineColorIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  > div {
    &:last-child {
      margin-left: 5px;
    }
  }
`;
