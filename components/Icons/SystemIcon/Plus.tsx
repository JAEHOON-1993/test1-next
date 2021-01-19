import styled from 'styled-components';

import { Props } from './types';

const PlusIcon = ({ color, width = 24, height = 24, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <path
            fill="none"
            d="M0 0H24V24H0z"
            transform="translate(-334 -54) translate(334 54)"
          />
        </g>
      </g>
      <g>
        <Path
          fill={color}
          d="M848.164 498.446h6.169v2.2h-6.169v6.385h-2.232v-6.385h-6.169v-2.2h6.169v-6.417h2.232z"
          transform="translate(-834.764 -488.028)"
        />
      </g>
    </svg>
  );
};

export default PlusIcon;

const Path = styled.path`
  fill: ${(props) => props.theme.color.GRAY4};
`;
