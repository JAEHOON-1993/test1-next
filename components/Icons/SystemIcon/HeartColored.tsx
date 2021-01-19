import styled, { css } from 'styled-components';

import { Props } from './types';

const HeartColoredIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <Path
            fill={color}
            colored={color}
            d="M-80.023 514.255a.333.333 0 0 1-.209-.073c-.318-.255-7.791-6.282-8.908-9.849a6.042 6.042 0 0 1 .436-5.072 4.309 4.309 0 0 1 3.276-2.094 6.042 6.042 0 0 1 5.405 2.393 6.04 6.04 0 0 1 5.405-2.393 4.309 4.309 0 0 1 3.276 2.094 6.052 6.052 0 0 1 .43 5.089c-1.113 3.55-8.585 9.577-8.9 9.832a.333.333 0 0 1-.211.073z"
            transform="translate(92.503 -492.628) translate(-89.504 497.125) translate(89.503 -497.125)"
          />
        </g>
      </g>
      <path fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default HeartColoredIcon;
interface style {
  colored?: string;
}

const Path = styled.path<style>`
  fill: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
