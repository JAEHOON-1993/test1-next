import styled, { css } from 'styled-components';

import { Props } from './types';

const CloseIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_186_4"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="icon-arrow" transform="translate(2.496 4.178)">
        <PathBox
          id="line"
          d="M0 0L19.799 0"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeWidth="2px"
          transform="rotate(45 .63 2.54)"
        />
        <PathBox
          id="line-2"
          d="M0 0L19.799 0"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeWidth="2px"
          transform="rotate(135 7.928 3.459)"
        />
      </g>
      <g id="검색">
        <path id="사각형_1956" fill="none" d="M0 0H24V24H0z" />
      </g>
    </svg>
  );
};

export default CloseIcon;

interface style {
  colored?: string;
}

const PathBox = styled.path<style>`
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
