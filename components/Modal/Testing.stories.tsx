import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Example/components/Modal_Test',
  components: Modal,
} as Meta;

const Template: Story = (args) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Modal visible={open} closeModal={() => setOpen(false)} {...args} />
      <Button
        onClick={() => setOpen(true)}
        label="Testing Modal"
        width="150px"
      />
    </>
  );
};

const RelativeDiv = styled.div`
  width: 300px;
  height: 100vh;
  background-color: white;
  padding: 30px;
`;

export const testModal = Template.bind({});
testModal.args = {
  position: 'right',
  slide: 'right',
  children: (
    <RelativeDiv>
      <h1>Testing</h1>
    </RelativeDiv>
  ),
};
