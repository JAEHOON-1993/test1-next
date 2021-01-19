import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import Modal, { ModalProps } from 'components/Modal';
import SystemIcon from 'components/Icons/SystemIcon';

const ReadyModal: React.FC<ModalProps> = ({ ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Modal {...props} slide="bottom">
          <ModalBody>
            <p>준비중입니다</p>
            <SystemIcon name="check" color={theme.color.PRIMARY} />
            <p>
              빠른 시일 내에 서비스 준비 후<br />
              찾아뵙겠습니다.
            </p>
          </ModalBody>
        </Modal>
      )}
    </ThemeConsumer>
  );
};

export default ReadyModal;

const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 13px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  > p {
    :nth-of-type(1) {
      font-weight: bold;
      color: ${(props) => props.theme.color.PRIMARY};
    }
    :nth-of-type(2) {
      text-align: center;
      color: ${(props) => props.theme.color.GRAY5};
    }
  }
`;
