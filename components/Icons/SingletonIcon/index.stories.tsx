import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';

import SingletonIcon from 'components/Icons/SingletonIcon';

export default {
  title: 'Example/components/Icons/SingletonIcon',
  component: SingletonIcon,
} as Meta;

export const all = () => {
  return (
    <Wrap>
      <SingletonIconBox>
        <SingletonIcon name="card" />
        <div>Card</div>
      </SingletonIconBox>

      <SingletonIconBox>
        <SingletonIcon name="callPopup" />
        <div>callPopup</div>
      </SingletonIconBox>

      <SingletonIconBox>
        <SingletonIcon name="click" />
        <div>click</div>
      </SingletonIconBox>

      <SingletonIconBox>
        <SingletonIcon name="login" />
        <div>login</div>
      </SingletonIconBox>

      <SingletonIconBox>
        <SingletonIcon name="phone" />
        <div>phone</div>
      </SingletonIconBox>

      <SingletonIconBox>
        <SingletonIcon name="paper" />
        <div>paper</div>
      </SingletonIconBox>

      <SingletonIconBox>
        <SingletonIcon name="people" />
        <div>people</div>
      </SingletonIconBox>

      <SingletonIconBox>
        <SingletonIcon name="popup" />
        <div>popup</div>
      </SingletonIconBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const SingletonIconBox = styled.div`
  display: flex;
  align-items: center;
`;
