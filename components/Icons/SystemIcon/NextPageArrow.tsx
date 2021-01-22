import styled, { css } from 'styled-components';

import { Props } from './types';

const NextPageArrow = ({ size = 22, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="next_page_arrow"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      {...props}
    >
      <path id="사각형_1950" fill="none" d="M0 0H22V22H0z" />
      <Path
        id="패스_1343"
        d="M-196.5-4421.433l4.082-4.386-4.082-4.06"
        fill="none"
        stroke={color}
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        transform="translate(202.589 4436.61)"
      />
      <Path
        id="패스_264774"
        d="M-196.5-4421.433l4.082-4.386-4.082-4.06"
        fill="none"
        stroke={color}
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        transform="translate(209.589 4436.61)"
      />
    </svg>
  );
};

export default NextPageArrow;

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
