import styled, { css } from 'styled-components';

import { Props } from './types';

const PasswordIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="비밀번호_아이콘"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path id="사각형_1941" fill="none" d="M0 0H24V24H0z" />
      <g id="icon-padlock" transform="translate(2 1)">
        <StrokeProps
          id="path"
          d="M414 606v4.994a4.005 4.005 0 0 1-4.006 4.006h-11.988a4.005 4.005 0 0 1-4.006-4.006V606"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-394 -592.819)"
        />
        <StrokeProps
          id="path-2"
          d="M394 602.146a4.005 4.005 0 0 1 4.006-4.005h11.988a4.005 4.005 0 0 1 4.006 4.005"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-394 -592.819)"
        />
        <StrokeProps
          as="circle"
          id="ellipse"
          cx="2.013"
          cy="2.013"
          r="2.013"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(7.987 10.166)"
        />
        <StrokeProps
          id="path-3"
          d="M399.421 597.4a4.579 4.579 0 0 1 9.158 0"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-394 -592.819)"
        />
        <StrokeProps
          id="line"
          d="M0 0L0 2.304"
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(10 14.192)"
        />
      </g>
    </svg>
  );
};

export default PasswordIcon;

interface style {
  colored?: string;
}

const StrokeProps = styled.path<style>`
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
