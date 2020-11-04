import React from "react";
import styled, { css } from "styled-components";

export type ModalProps = {
  visible: boolean;
  closeModal: any;
  slideFrom?: "top" | "bottom" | "right" | "left" | undefined;
  position?: "top" | "bottom" | "right" | "left" | undefined;
  children?: any;
};

const ModalComponent: React.FC<ModalProps> = ({
  visible,
  children,
  position,
  closeModal,
  slideFrom,
  ...props
}) => {
  return (
    <Dim {...props} visible={visible} onClick={closeModal}>
      <Modal visible={visible} slideFrom={slideFrom} position={position}>
        {children}
      </Modal>
    </Dim>
  );
};

export default ModalComponent;

type styleProps = {
  visible?: boolean;
  slideFrom?: "top" | "bottom" | "right" | "left" | undefined;
  position?: "top" | "bottom" | "right" | "left" | undefined;
};

const Dim = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
  ${(props: styleProps) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;
const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    transition: 0.2s ease;
  }

  ${(props: styleProps) =>
    props.slideFrom === "top" &&
    css`
      > div {
        margin-bottom: 50px;
      }
    `}
  ${(props: styleProps) =>
    props.slideFrom === "bottom" &&
    css`
      > div {
        margin-top: 50px;
      }
    `}
  ${(props: styleProps) =>
    props.slideFrom === "right" &&
    css`
      > div {
        margin-left: 50px;
      }
    `}
  ${(props: styleProps) =>
    props.slideFrom === "left" &&
    css`
      > div {
        margin-right: 50px;
      }
    `}

  ${(props: styleProps) =>
    props.position === "top" &&
    css`
      justify-content: flex-start;
    `}
  ${(props: styleProps) =>
    props.position === "bottom" &&
    css`
      justify-content: flex-end;
    `}
  ${(props: styleProps) =>
    props.position === "right" &&
    css`
      align-items: flex-end;
    `}
  ${(props: styleProps) =>
    props.position === "left" &&
    css`
      align-items: flex-start;
    `}
  ${(props: styleProps) =>
    props.visible &&
    css`
      > div {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
      }
    `}

    ${(props: styleProps) =>
      props.position === "top" &&
      props.slideFrom === "top" &&
      css`
        > div {
          position: absolute;
          top: -50px;
          ${(props: styleProps) =>
            props.visible &&
            css`
              top: 0px;
            `}
        }
      `}

    ${(props: styleProps) =>
      props.position === "bottom" &&
      props.slideFrom === "bottom" &&
      css`
        > div {
          position: absolute;
          bottom: -50px;
          ${(props: styleProps) =>
            props.visible &&
            css`
              bottom: 0px;
            `}
        }
      `}

    ${(props: styleProps) =>
      props.position === "right" &&
      props.slideFrom === "right" &&
      css`
        > div {
          position: absolute;
          right: -50px;
          ${(props: styleProps) =>
            props.visible &&
            css`
              right: 0px;
            `}
        }
      `}

    ${(props: styleProps) =>
      props.position === "left" &&
      props.slideFrom === "left" &&
      css`
        > div {
          position: absolute;
          left: -50px;
          ${(props: styleProps) =>
            props.visible &&
            css`
              left: 0px;
            `}
        }
      `}
`;
