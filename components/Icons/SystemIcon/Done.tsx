import styled, { css } from 'styled-components';

import { Props } from './types';

const DoneIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_186_4"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <Path
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3px"
        d="M792.883-4423.491l6.45 9.119 7.934-12.619"
        transform="translate(-787.785 4432.637)"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default DoneIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
