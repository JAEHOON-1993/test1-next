import styled, { css } from 'styled-components';

import { Props } from './types';

const LikeIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 24"
    >
      <g>
        <Path
          fill={color}
          colored={color}
          d="M111.747 103.183a3.372 3.372 0 0 0-2.128-.763h-5.167v-3.575a3.675 3.675 0 0 0-1.361-3.222 4.436 4.436 0 0 0-3.485-.4.569.569 0 0 0-.413.537v4a3.91 3.91 0 0 1-1.932 3.292 7.766 7.766 0 0 1-2.04.979l-.144.033a1.224 1.224 0 0 0-1.047-.574h-3.816A1.192 1.192 0 0 0 89 104.648V115.4a1.192 1.192 0 0 0 1.214 1.163h3.828a1.244 1.244 0 0 0 .934-.419 3.408 3.408 0 0 0 2.428 1.017h10.213c2.256 0 3.7-1.13 3.953-3.109l1.322-7.86a3.24 3.24 0 0 0-1.145-3.009zM94.073 115.4a.033.033 0 0 1-.033.033h-3.826a.033.033 0 0 1-.034-.032v-10.753a.033.033 0 0 1 .033-.033h3.83a.033.033 0 0 1 .034.032V115.4zm17.645-9.387l-1.317 7.874a.049.049 0 0 1-.005.023c-.182 1.408-1.115 2.124-2.782 2.124H97.4a2.136 2.136 0 0 1-2.119-1.738.727.727 0 0 0-.024-.1v-9.022l.256-.056h.024a8.686 8.686 0 0 0 2.389-1.13 5.048 5.048 0 0 0 2.453-4.234v-3.545a2.843 2.843 0 0 1 2.02.33 2.66 2.66 0 0 1 .875 2.308v4.132a.579.579 0 0 0 .59.565h5.755a2.153 2.153 0 0 1 1.361.494 2.1 2.1 0 0 1 .737 1.98z"
          transform="translate(.001) translate(-89 -95.03)"
        />
      </g>
      <path fill="none" d="M0 0H25V24H0z" />
    </svg>
  );
};

export default LikeIcon;
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
