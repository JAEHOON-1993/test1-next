import React from 'react';
import styled, { css } from 'styled-components';

import * as T from 'components/Typography';
import ButtonBase from 'components/Button/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface ButtonProps {
  width?: string;
  sm?: boolean;
  outline?: boolean;
  disabled?: boolean;
  round?: boolean;
  color?: string;
  icon?: React.ReactNode | JSX.Element;
  position?: 'left' | 'right' | 'top' | 'bottom';
  loading?: boolean;
  children?: string | React.ReactNode | JSX.Element;
  onClick?: any;
  style?: any;
}

/**
 * 버튼 컴포넌트
 */
const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  icon,
  position = 'left',
  children,
  loading,
  sm,
  ...props
}) => {
  return (
    <Button onClick={onClick} position={position} sm={sm} {...props}>
      {loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        <>
          {icon && <div>{icon}</div>}
          <T.Button sm={sm}>{children}</T.Button>
        </>
      )}
    </Button>
  );
};

export default ButtonComponent;

interface ButtonStyleProps {
  outline?: boolean;
  round?: boolean;
  color?: string;
  disabled?: boolean;
  width?: string;
  sm?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

const changePosition = (position: string | undefined) => {
  switch (position) {
    case 'left':
      return 'row';
    case 'right':
      return 'row-reverse';
    case 'top':
      return 'column';
    case 'bottom':
      return 'column-reverse';
    default:
      return 'row';
  }
};

const Button = styled(ButtonBase)<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: ${(props) => props.width && props.width};
  border: 0px;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.color.PRIMARY};
  border-radius: ${(props) => props.theme.radius}px;
  color: ${(props) => props.theme.color.WHITE};
  border-radius: ${(props) => props.round && '50px'};
  flex-direction: ${({ position }) => changePosition(position)};
  :focus {
    outline: none;
  }
  ${(props) =>
    props.outline &&
    css`
      background-color: ${(props) => props.theme.color.WHITE};
      border: 1px solid ${props.color ? props.color : props.theme.color.PRIMARY};
      color: ${props.color ? props.color : props.theme.color.PRIMARY};

      > span {
        background-color: ${props.color
          ? props.color
          : props.theme.color.PRIMARY};
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.color.GRAY3};
      border: 0px;
      color: ${(props) => props.theme.color.WHITE};
    `};
  ${(props) =>
    props.sm &&
    css`
      padding: 0px 10px;
      ${(props) => props.theme.window.pc} {
        height: 40px;
      }
      ${(props) => props.theme.window.tab} {
        height: 38px;
      }
      ${(props) => props.theme.window.mobile} {
        height: 40px;
      }
    `}
`;
