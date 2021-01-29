import styled, { css } from 'styled-components';

import { Props } from './types';

const SoundIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="sound_Icon_line"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="그룹_38022" transform="translate(-16 -21)">
        <StrokeProps
          id="패스_264898"
          d="M164.162 57.816a5.336 5.336 0 0 1 0 7.546"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          transform="translate(-131.72 -30.475)"
        />
        <StrokeProps
          id="패스_264899"
          d="M22.15 34.079h-3.557a.593.593 0 0 1-.593-.593v-4.743a.593.593 0 0 1 .593-.593h3.557L27.486 24v14.229z"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
        />
        <StrokeProps
          id="패스_264900"
          d="M142.948 79.029a2.371 2.371 0 0 1 0 3.354"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          transform="translate(-112.602 -49.592)"
        />
      </g>
      <path id="사각형_30716" fill="none" d="M0 0H20V20H0z" />
    </svg>
  );
};

export default SoundIcon;

interface style {
  colored?: string;
}

const StrokeProps = styled.path<style>`
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
