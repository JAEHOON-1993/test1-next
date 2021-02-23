import styled, { css } from 'styled-components';

import { Props } from './types';

const SmallAnswerDisableIcon: React.FC<Props> = ({
  color,
  size = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
    >
      <g>
        <path fill="none" d="M0 0H40V40H0z" />
      </g>
      <g>
        <Path
          fill="none"
          stroke={color}
          colored={color}
          strokeLinecap="round"
          strokeWidth="4px"
          d="M0 0L24 0"
          transform="rotate(45 2.904 27.424) rotate(135 8.729 4.445)"
        />
      </g>
    </svg>
  );
};

export default SmallAnswerDisableIcon;

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
