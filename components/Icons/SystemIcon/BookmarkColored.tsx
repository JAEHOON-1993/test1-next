import styled, { css } from 'styled-components';

import { Props } from './types';

const BookmarkColoredIcon: React.FC<Props> = ({ size = 24, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <Path
        fill={color}
        colored={color}
        d="M243.542 796.818a1.114 1.114 0 0 1 1.492 0l5.641 5.257a.364.364 0 0 0 .615-.229v-17.738a.344.344 0 0 0-.359-.328h-13.287a.344.344 0 0 0-.358.328v17.738a.364.364 0 0 0 .614.23z"
        transform="translate(-232.277 -779.94)"
      />
    </svg>
  );
};

export default BookmarkColoredIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  fill: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
