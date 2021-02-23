import styled, { css } from 'styled-components';

import { Props } from './types';

const ArchiveBoxIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="system_archive-box_24"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path id="사각형_31763" fill="none" d="M0 0H24V24H0z" />
      <Path
        id="패스_265632"
        d="M55.558 56.3H40.741a.741.741 0 0 1-.741-.742V42.963L41.482 40h13.335l1.483 2.963v12.595a.741.741 0 0 1-.742.742z"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5px"
        transform="translate(-36.232 -36.471)"
      />
      <Path
        id="패스_265633"
        d="M94.059 150.059l3.236 3.235 3.236-3.235"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5px"
        transform="translate(-85.285 -136.428)"
      />
      <Path
        id="선_493"
        d="M0 0L0 6"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5px"
        transform="translate(12 10)"
      />
      <Path
        id="선_494"
        d="M0 0L16 0"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5px"
        transform="translate(4 7)"
      />
    </svg>
  );
};

export default ArchiveBoxIcon;

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
