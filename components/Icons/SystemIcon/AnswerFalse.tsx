import styled, { css } from 'styled-components';

import { Props } from './types';

const AnswerFalseIcon: React.FC<Props> = ({ color, size = 24, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="small_answer_false"
      width={size}
      height={size}
      viewBox="0 0 40 40"
    >
      <g id="icon-arrow" transform="translate(8.505 8)">
        <Path
          id="line"
          d="M0 0L33.197 0"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeWidth="4"
          transform="rotate(45 -.001 0)"
        />
        <Path
          id="line-2"
          d="M0 0L33.197 0"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeWidth="4"
          transform="rotate(135 11.737 4.862)"
        />
      </g>
      <g id="검색">
        <path id="사각형_1956" fill="none" d="M0 0H40V40H0z" />
      </g>
    </svg>
  );
};

export default AnswerFalseIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  stroke: ${(props) => props.theme.color.WARNING};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
