import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import * as T from 'components/TypoGraphy';
import SystemIcon from 'components/Icons/SystemIcon';
import ButtonBase from 'components/Button/ButtonBase';

import { nameProps } from 'components/Icons/SystemIcon';

interface Props {
  id?: number;
  value?: string;
  label?: string;
  icon?: nameProps;
  active?: boolean;
  setActive?: any;
  onClick?: any;
}

const BottomNavigationAction: React.FC<Props> = ({
  value,
  label,
  icon,
  id,
  active,
  setActive,
  onClick,
  ...props
}) => {
  const clickHandler = (e: any) => {
    setActive(id);
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <ThemeConsumer>
      {(theme) => (
        <Item {...props} onClick={clickHandler}>
          {icon && (
            <SystemIcon
              color={theme.color.PRIMARY}
              isFilled={active}
              name={icon}
            />
          )}
          <T.Text sm>{label}</T.Text>
        </Item>
      )}
    </ThemeConsumer>
  );
};

export default BottomNavigationAction;

const Item = styled(ButtonBase)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    margin-top: 2px;
    color: ${(props) => props.theme.color.PRIMARY};
  }
`;
