import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import ColorIcon from 'components/Icons/ColorIcon';

export default {
  title: 'Example/components/Icons/ColorIcon',
  component: ColorIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      <ColorIconBox>
        <ColorIcon name="add" />
        <div>Add</div>
      </ColorIconBox>
      <ColorIconBox>
        <ColorIcon name="ai" />
        <div>AI</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="bag" />
        <div>Bag</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="bed" />
        <div>Bed</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="fix" />
        <div>Fix</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="home" />
        <div>Home</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="paint" />
        <div>Paint</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="phone" />
        <div>Phone</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="qr" />
        <div>QR</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="search" />
        <div>Search</div>
      </ColorIconBox>

      <ColorIconBox>
        <ColorIcon name="wallet" />
        <div>Wallet</div>
      </ColorIconBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ColorIconBox = styled.div`
  display: flex;
  align-items: center;
`;
