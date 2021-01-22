import styled, { css } from 'styled-components';

import { Props } from './types';

const ArrowLeftIcon: React.FC<Props> = ({ size = 24, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <Path
        fill="none"
        stroke={color}
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        d="M-189.477-4416.5l-7.023-6.948 7.023-6.43"
        transform="translate(205 4435.378)"
      />
    </svg>
  );
};

export default ArrowLeftIcon;

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
