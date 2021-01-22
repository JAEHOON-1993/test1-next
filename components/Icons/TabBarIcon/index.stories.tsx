import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import TabBarIcon from 'components/Icons/TabBarIcon';

export default {
  title: 'Example/components/Icons/TabBarIcon',
  component: TabBarIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      {/* <AlphaBetically>[ A ]</AlphaBetically> */}
      {/* <AlphaBetically>[ B ]</AlphaBetically> */}

      <AlphaBetically>[ C ]</AlphaBetically>
      <TabBarIconBox>
        <TabBarIcon name="chat" />
        <div>chat</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="chat" fill />
        <div>chat</div>
      </TabBarIconBox>

      <TabBarIconBox>
        <TabBarIcon name="community" />
        <div>Community</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="community" fill />
        <div>Community</div>
      </TabBarIconBox>

      {/* <AlphaBetically>[ D ]</AlphaBetically> */}
      {/* <AlphaBetically>[ E ]</AlphaBetically> */}
      {/* <AlphaBetically>[ F ]</AlphaBetically> */}

      {/* <AlphaBetically>[ G ]</AlphaBetically> */}
      <AlphaBetically>[ H ]</AlphaBetically>
      <TabBarIconBox>
        <TabBarIcon name="home" />
        <div>Home</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="home" fill />
        <div>Home</div>
      </TabBarIconBox>

      {/* <AlphaBetically>[ I ]</AlphaBetically> */}
      {/* <AlphaBetically>[ J ]</AlphaBetically> */}
      {/* <AlphaBetically>[ K ]</AlphaBetically> */}
      {/* <AlphaBetically>[ L ]</AlphaBetically> */}

      <AlphaBetically>[ M ]</AlphaBetically>
      <TabBarIconBox>
        <TabBarIcon name="myPage" />
        <div>MyPage</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="myPage" fill />
        <div>MyPage</div>
      </TabBarIconBox>

      <TabBarIconBox>
        <TabBarIcon name="more" />
        <div>More</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="more" fill />
        <div>More</div>
      </TabBarIconBox>

      {/* <AlphaBetically>[ N ]</AlphaBetically> */}
      {/* <AlphaBetically>[ O ]</AlphaBetically> */}
      <AlphaBetically>[ P ]</AlphaBetically>
      <TabBarIconBox>
        <TabBarIcon name="page" />
        <div>Page</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="page" fill />
        <div>Page</div>
      </TabBarIconBox>

      {/* <AlphaBetically>[ Q ]</AlphaBetically> */}
      {/* <AlphaBetically>[ R ]</AlphaBetically> */}

      <AlphaBetically>[ S ]</AlphaBetically>
      <TabBarIconBox>
        <TabBarIcon name="shopping" />
        <div>Shopping</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="shopping" fill />
        <div>Shopping</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="store" />
        <div>Store</div>
      </TabBarIconBox>
      <TabBarIconBox>
        <TabBarIcon name="store" fill />
        <div>Store</div>
      </TabBarIconBox>

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

const TabBarIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  > div {
    &:last-child {
      margin-left: 5px;
    }
  }
`;
