import styled, { css } from 'styled-components';

import { Props } from './types';

const BackIcon: React.FC<Props> = ({ size = 24, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="back_icon_24"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="Arrow" transform="translate(3 3)">
        <path id="사각형_1950" d="M0 0H18V18H0z" fill="none" />
        <GProps
          id="icon-arrow"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeWidth="2px"
          transform="translate(1 2)"
        >
          <path
            id="path"
            strokeLinejoin="round"
            d="M1288.262 1163.709l-6.775 6.775 6.775 6.775"
            transform="translate(-1281.487 -1163.709)"
          />
          <path id="line" d="M0 0L15.198 0" transform="translate(.855 6.772)" />
        </GProps>
      </g>
      <g id="검색">
        <path id="사각형_1956" d="M0 0H24V24H0z" fill="none" />
      </g>
    </svg>
  );
};

export default BackIcon;

interface style {
  colored?: string;
}

const GProps = styled.g<style>`
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
