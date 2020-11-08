import React, { useState } from "react";
import styled from "styled-components";

import ReadyModal from "components/Modal/example/ReadyModal";
import AddImageModal from "components/Modal/example/AddImageModal";

import Modal from "components/Modal";
import Container from "components/Container";
import Button from "components/Button";

export default { title: "Example/components/Modal" };

export const positionModal = () => {
  const [center, setCenter] = useState<boolean>(false);
  const [top, setTop] = useState<boolean>(false);
  const [bottom, setBottom] = useState<boolean>(false);
  const [left, setLeft] = useState<boolean>(false);
  const [right, setRight] = useState<boolean>(false);
  return (
    <>
      <Modal visible={center} closeModal={() => setCenter(false)}>
        <ModalBody>
          <h1>Center</h1>
        </ModalBody>
      </Modal>
      <Modal
        visible={top}
        closeModal={() => setTop(false)}
        position="top"
        slide="top"
      >
        <ModalBody>
          <h1>Top</h1>
        </ModalBody>
      </Modal>
      <Modal
        visible={bottom}
        closeModal={() => setBottom(false)}
        position="bottom"
        slide="bottom"
      >
        <ModalBody>
          <h1>Bottom</h1>
        </ModalBody>
      </Modal>
      <Modal
        visible={left}
        closeModal={() => setLeft(false)}
        position="left"
        slide="left"
      >
        <ModalBody>
          <h1>Left</h1>
        </ModalBody>
      </Modal>
      <Modal
        visible={right}
        closeModal={() => setRight(false)}
        position="right"
        slide="right"
      >
        <ModalBody>
          <h1>Right</h1>
        </ModalBody>
      </Modal>
      <ButtonBox>
        <CustomButton onClick={() => setCenter(true)}>Center ReadyModal</CustomButton>
        <CustomButton onClick={() => setTop(true)}>Top ReadyModal</CustomButton>
        <CustomButton onClick={() => setBottom(true)}>Bottom ReadyModal</CustomButton>
        <CustomButton onClick={() => setLeft(true)}>Left ReadyModal</CustomButton>
        <CustomButton onClick={() => setRight(true)}>Right ReadyModal</CustomButton>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;
const CustomButton = styled(Button)`
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0px 15px;
`
const ModalBody = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const readyModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <ReadyModal
        visible={visible}
        closeModal={() => setVisible(false)}
        slide="bottom"
      />
      <Button style={{ width: 150 }} onClick={() => setVisible(true)}>
        Ready Modal
      </Button>
    </>
  );
};

export const addImageModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <AddImageModal
        visible={visible}
        closeModal={() => setVisible(false)}
        slide="bottom"
      />
      <Button style={{ width: 150 }} onClick={() => setVisible(true)}>
        Add Image Modal
      </Button>
    </>
  );
};
