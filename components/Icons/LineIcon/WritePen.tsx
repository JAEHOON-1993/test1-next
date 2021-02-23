import styled, { css } from 'styled-components';

import { Props } from './types';

const WritePenIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="line_write_pen_icon_50"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      {...props}
    >
      <path id="사각형_30662" d="M0 0H50V50H0z" fill="none" />
      <g id="pen-nib" transform="translate(6.641 6.918)">
        <path
          id="사각형_31659"
          d="M0 0H38V38H0z"
          fill="none"
          transform="translate(-.641 -.918)"
        />
        <StrokeProps
          id="선_481"
          d="M0 0L0 13"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          transform="translate(17.859 20.082)"
        />
        <StrokeProps
          as="circle"
          id="타원_3216"
          cx="3"
          cy="3"
          r="3"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          transform="translate(14.859 14.082)"
        />
        <StrokeProps
          id="패스_265569"
          d="M66.471 42.639A15.664 15.664 0 0 1 62.324 32H46.6a15.664 15.664 0 0 1-4.147 10.639L54.464 61.2z"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          transform="translate(-36.439 -27.324)"
        />
      </g>
    </svg>
  );
};

export default WritePenIcon;

interface style {
  colored?: string;
}

const StrokeProps = styled.path<style>`
  stroke: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
