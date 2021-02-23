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
      {/* <AlphaBetically>[ A ]</AlphaBetically> */}
      <AlphaBetically>[ B ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="box" />
        <div>Box</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="brush" />
        <div>brush</div>
      </LineIconBox>

      <AlphaBetically>[ C ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="camera" />
        <div>Camera</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="card" />
        <div>Card</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="cash" />
        <div>Cash</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="cloudShare" />
        <div>CloudShare</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="consumable" />
        <div>Consumable</div>
      </LineIconBox>
      <AlphaBetically>[ D ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="delivery" />
        <div>Delivery</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="design" />
        <div>Design</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="destination" />
        <div>Destination</div>
      </LineIconBox>
      <AlphaBetically>[ E ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="edu" />
        <div>Edu</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="estimate" />
        <div>Estimate</div>
      </LineIconBox>
      <AlphaBetically>[ F ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="fashion" />
        <div>Fashion</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="finance" />
        <div>Finance</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="food" />
        <div>Food</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="footPrint" />
        <div>FootPrint</div>
      </LineIconBox>
      {/* <AlphaBetically>[ G ]</AlphaBetically> */}
      <AlphaBetically>[ H ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="headphone" />
        <div>headphone</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="health" />
        <div>Health</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="hobby" />
        <div>Hobby</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="house" />
        <div>House</div>
      </LineIconBox>

      <AlphaBetically>[ I ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="inquiry" />
        <div>Inquiry</div>
      </LineIconBox>
      {/* <AlphaBetically>[ J ]</AlphaBetically> */}
      {/* <AlphaBetically>[ K ]</AlphaBetically> */}
      <AlphaBetically>[ L ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="lifeCycle" />
        <div>LifeCycle</div>
      </LineIconBox>
      <AlphaBetically>[ M ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="media" />
        <div>Media</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="mobility" />
        <div>Mobility</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="monthly" />
        <div>Monthly</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="musicNote" />
        <div>musicNote</div>
      </LineIconBox>

      {/* <AlphaBetically>[ N ]</AlphaBetically> */}
      {/* <AlphaBetically>[ O ]</AlphaBetically> */}
      <AlphaBetically>[ P ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="password" />
        <div>Password</div>
      </LineIconBox>

      <LineIconBox>
        <LineIcon name="person" />
        <div>Person</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="personCycling" />
        <div>PersonCycling</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="pet" />
        <div>Pet</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="phone" />
        <div>Phone</div>
      </LineIconBox>
      {/* <AlphaBetically>[ Q ]</AlphaBetically> */}
      {/* <AlphaBetically>[ R ]</AlphaBetically> */}
      <LineIconBox>
        <LineIcon name="receipt" />
        <div>Receipt</div>
      </LineIconBox>
      <AlphaBetically>[ S ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="socks" />
        <div>Socks</div>
      </LineIconBox>
      <AlphaBetically>[ T ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="tools" />
        <div>Tools</div>
      </LineIconBox>

      <AlphaBetically>[ U ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="user" />
        <div>User</div>
      </LineIconBox>

      {/* <AlphaBetically>[ V ]</AlphaBetically> */}
      <AlphaBetically>[ W ]</AlphaBetically>
      <LineIconBox>
        <LineIcon name="wrongPassword" />
        <div>WrongPassword</div>
      </LineIconBox>
      <LineIconBox>
        <LineIcon name="writePen" />
        <div>writePen</div>
      </LineIconBox>

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

const LineIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  > div {
    &:last-child {
      margin-left: 5px;
    }
  }
`;
