import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';
import { Text } from 'components/Typography';

export interface CheckboxProps {
  checked: boolean;
  ratio?: string;
  className?: string;
  onClick?: any;
  children?: any;
  style?: any;
}

const CheckBox: React.FC<CheckboxProps> = ({ checked, children, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <CheckWrap {...props}>
          <SystemIcon
            name="checkbox"
            fill={checked}
            color={theme.color.PRIMARY}
          />
          {typeof children === 'string' ? (
            <CheckLabel>{children}</CheckLabel>
          ) : (
            children
          )}
        </CheckWrap>
      )}
    </ThemeConsumer>
  );
};

export default CheckBox;

const CheckWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const CheckLabel = styled(Text)`
  margin-left: 5px;
  color: ${(props) => props.theme.color.GRAY4};
`;
