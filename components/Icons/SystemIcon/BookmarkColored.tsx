import styled from 'styled-components';

import { Props } from './types';

const BookmarkColoredIcon: React.FC<Props> = ({
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
      <path fill="none" d="M0 0H24V24H0z" />
      <Path
        fill={color}
        d="M243.542 796.818a1.114 1.114 0 0 1 1.492 0l5.641 5.257a.364.364 0 0 0 .615-.229v-17.738a.344.344 0 0 0-.359-.328h-13.287a.344.344 0 0 0-.358.328v17.738a.364.364 0 0 0 .614.23z"
        transform="translate(-232.277 -779.94)"
      />
    </svg>
  );
};

export default BookmarkColoredIcon;

const Path = styled.path`
  fill: ${(props) => props.theme.color.PRIMARY};
`;
