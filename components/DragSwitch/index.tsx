import React from 'react';
import styled from 'styled-components';

interface Props {
  checked: boolean;
  onClick?: () => void;
}

const DragSwitch = ({ checked, onClick }: Props) => {
  const left = !checked ? '2px' : '22px';

  return (
    <Wrap isChecked={checked} onClick={onClick}>
      <CheckBox leftPosition={left} />
    </Wrap>
  );
};

export default DragSwitch;

interface styleProps {
  isChecked: boolean;
}

const Wrap = styled.div<styleProps>`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 31px;
  width: 51px;
  background-color: ${(props) =>
    props.isChecked ? props.theme.color.PRIMARY : props.theme.color.GRAY2};
  border-radius: 16px;
  cursor: pointer;
`;

const CheckBox = styled.div<{ leftPosition?: string }>`
  position: absolute;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.WHITE};

  left: ${(props) => props.leftPosition};
  transition: 0.2s ease;
`;
