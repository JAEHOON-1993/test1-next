import styled, { css } from 'styled-components';

import { Props } from './types';

const InfoIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="info_icon_black"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="bookmark_icon_24_D">
        <path id="사각형_1959" fill="none" d="M0 0H24V24H0z" />
      </g>
      <g id="그룹_38074" transform="translate(-460.097 -1327.203)">
        <g id="그룹_38079">
          <StrokeFillProps
            id="패스_265131"
            d="M470.451 1349.255a1.429 1.429 0 0 1-1.238-.713l-3.711-6.429h-.9a3.513 3.513 0 0 1-3.508-3.509v-1.472a3.513 3.513 0 0 1 3.508-3.509h9.908a.367.367 0 1 1 0 .734h-9.908a2.777 2.777 0 0 0-2.774 2.775v1.472a2.777 2.777 0 0 0 2.774 2.775h1.108a.366.366 0 0 1 .318.184l3.818 6.613a.694.694 0 0 0 .945.253l1.915-1.106a.693.693 0 0 0 .253-.945l-2.568-4.448a.367.367 0 0 1 .318-.551h3.8a.367.367 0 1 1 0 .734h-3.166l2.251 3.9a1.428 1.428 0 0 1-.522 1.948l-1.915 1.1a1.421 1.421 0 0 1-.706.194z"
            stroke={color}
            fill={color}
            colored={color}
            strokeWidth="0.3px"
          />
        </g>
        <g id="그룹_38080">
          <StrokeFillProps
            id="패스_265132"
            d="M480.861 1340.588a.367.367 0 1 1 0-.734c.813 0 1.5-.514 1.5-1.123v-1.715c0-.608-.686-1.122-1.5-1.122a.367.367 0 1 1 0-.734 2.074 2.074 0 0 1 2.233 1.856v1.715a2.074 2.074 0 0 1-2.233 1.857z"
            stroke={color}
            fill={color}
            colored={color}
            strokeWidth="0.3px"
          />
        </g>
        <g id="그룹_38081">
          <StrokeFillProps
            id="패스_265133"
            d="M480.861 1347.215a.37.37 0 0 1-.2-.06l-6.347-4.167a.366.366 0 0 1-.166-.307v-9.7a.365.365 0 0 1 .158-.3l6.347-4.41a.367.367 0 0 1 .577.3v18.278a.367.367 0 0 1-.367.367zm-5.981-4.732l5.614 3.685v-16.9l-5.614 3.9z"
            stroke={color}
            fill={color}
            colored={color}
            strokeWidth="0.3px"
          />
        </g>
      </g>
    </svg>
  );
};

export default InfoIcon;

interface style {
  colored?: string;
}

const StrokeFillProps = styled.path<style>`
  stroke: ${(props) => props.theme.color.GRAY4};
  fill: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
      fill: ${props.colored};
    `}
`;
