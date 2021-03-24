import React from 'react';
import styled from 'styled-components';

import * as T from 'components/Typography';
import TabBarIcon, { nameProps } from 'components/Icons/TabBarIcon';
import ButtonBase from 'components/Button/ButtonBase';

interface Props {
  id?: number;
  value?: string;
  label?: string;
  icon?: nameProps;
  active?: boolean;
  setActive?: any;
  onClick?: any;
}

const BottomNavigationItem: React.FC<Props> = ({
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
    <Item {...props} onClick={clickHandler}>
      {icon && <TabBarIcon fill={active} name={icon} />}
      <T.Text size="sm">{label}</T.Text>
    </Item>
  );
};

export default BottomNavigationItem;

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
