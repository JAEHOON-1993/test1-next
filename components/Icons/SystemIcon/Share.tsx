import styled, { css } from 'styled-components';

import { Props } from './types';

const ShareIcon: React.FC<Props> = ({ size = 24, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <Path
        fill={color}
        stroke={color}
        colored={color}
        strokeWidth="0.5px"
        d="M218.441 181.944a2.953 2.953 0 0 0-3.774.775l-7.111-3.92a2.991 2.991 0 0 0-.411-2.756l7.668-4.344a3.061 3.061 0 1 0-.485-.875l-7.946 4.5c-.069-.045-.129-.1-.2-.139a3.011 3.011 0 1 0 .877 4.48l7.111 3.92a3 3 0 1 0 4.273-1.642zm-3.055-13.1a2 2 0 1 1 .786 2.717 2 2 0 0 1-.786-2.719zm-10.657 10.972a2 2 0 1 1 1.754-1.035 2 2 0 0 1-1.754 1.033zm14.015 5.723a2 2 0 1 1-.786-2.717 2 2 0 0 1 .786 2.715z"
        transform="translate(-199.232 -165.307)"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default ShareIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  fill: ${(props) => props.theme.color.GRAY4};
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
      fill: ${props.colored};
    `}
`;
