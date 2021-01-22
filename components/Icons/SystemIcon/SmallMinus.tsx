import styled, { css } from 'styled-components';

import { Props } from './types';

const SmallMinusIcon: React.FC<Props> = ({ color, size = 24, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <Path
        fill={color}
        colored={color}
        d="M0 0H9V1H0z"
        transform="translate(8 12)"
      />
      <path fill="none" d="M0 0H25V25H0z" />
    </svg>
  );
};

export default SmallMinusIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  fill: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
