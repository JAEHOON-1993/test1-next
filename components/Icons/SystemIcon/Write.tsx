import styled from 'styled-components';

import { Props } from './types';

const WriteIcon: React.FC<Props> = ({ width = 24, height = 24, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="write_icon_24"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g id="그룹_698" transform="translate(-421.858 -1335.248)">
        <Path
          id="패스_1191"
          d="M442.142 1352.394v7.133H426.4v-15.738h7.125"
          fill="none"
          stroke={color}
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

const Path = styled.path`
  stroke: ${(props) => props.theme.color.GRAY4};
`;
