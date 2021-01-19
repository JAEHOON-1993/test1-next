import styled from 'styled-components';

import { Props } from './types';

const TextDeleteIcon = ({
  width = 24,
  height = 24,
  color,
  ...props
}: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="text_delete"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path id="사각형_1950" fill="none" d="M0 0H24V24H0z" />
      <g id="icon-arrow" transform="translate(10.607 8.985)">
        <Path
          id="line"
          d="M0 0L7.328 0"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          transform="rotate(45 0 -.001)"
        />
        <Path
          id="line-2"
          d="M0 0L7.328 0"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          transform="rotate(135 2.59 1.073)"
        />
      </g>
      <Path
        id="패스_264283"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        d="M243.508 833.305l-5.344 5.242a.482.482 0 0 0 0 .69l5.344 5.243a.483.483 0 0 0 .338.138h12.238a.483.483 0 0 0 .483-.483V833.65a.483.483 0 0 0-.483-.483h-12.238a.482.482 0 0 0-.338.138z"
        transform="translate(-236.105 -827.351)"
      />
    </svg>
  );
};

export default TextDeleteIcon;

const Path = styled.path`
  stroke: ${(props) => props.theme.color.GRAY4};
`;
