import styled, { css } from 'styled-components';

import { Props } from './types';

const UrlIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="url_icon_24"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="그룹_698" transform="translate(-244 -166.087)">
        <g id="icon-share" transform="translate(256.454 171)">
          <Path
            id="path-2"
            d="M264.1 175.284V171l-6.633 6.633"
            fill="none"
            stroke={color}
            colored={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            transform="translate(-257.466 -171)"
          />
          <Path
            id="line"
            d="M0 0L4.285 0"
            fill="none"
            stroke={color}
            colored={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            transform="translate(2.349)"
          />
        </g>
        <Path
          id="패스_1191"
          d="M263.087 178.7v6.383H249V171h6.374"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
        />
      </g>
      <path id="사각형_1962" fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default UrlIcon;

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
