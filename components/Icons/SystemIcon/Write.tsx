import styled, { css } from 'styled-components';

import { Props } from './types';

const WriteIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="write_icon_24"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="그룹_698" transform="translate(-421.858 -1335.248)">
        <Path
          id="패스_1191"
          d="M442.142 1352.394v7.133H426.4v-15.738h7.125"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          transform="translate(0 -4.78)"
        />
        <Path
          id="패스_1192"
          d="M494.608 1338.379l2.621 2.621-8.62 8.62-2.937.267.316-2.888z"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          transform="translate(-54.498)"
        />
      </g>
      <path id="사각형_1956" fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default WriteIcon;

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
