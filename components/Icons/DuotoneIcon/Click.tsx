import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const ClickIcon = ({ size = 100 }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="duotone_click_icon_100"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <path id="사각형_1944" d="M0 0H100V100H0z" fill="none" />
          <g
            id="타원_445"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="2px"
            transform="translate(82 45)"
          >
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
            <circle cx="4.5" cy="4.5" r="3.5" fill="none" />
          </g>
          <g
            id="타원_446"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="2px"
            transform="translate(13 20)"
          >
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="2.5" fill="none" />
          </g>
          <g id="cross-1" transform="translate(78.84 11.996)">
            <path
              id="line"
              d="M0 0L0 5.688"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2.844)"
            />
            <path
              id="line-2"
              d="M5.688 0L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 2.844)"
            />
          </g>
          <g id="cross-1-2" transform="translate(6.313 41.396)">
            <path
              id="line-3"
              d="M0 0L0 5.688"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2.844)"
            />
            <path
              id="line-4"
              d="M5.688 0L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 2.844)"
            />
          </g>
          <g id="cross-1-3" transform="rotate(45 -82.094 62.289)">
            <path
              id="line-5"
              d="M0 0L0 5.688"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2.844)"
            />
            <path
              id="line-6"
              d="M5.688 0L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 2.844)"
            />
          </g>
          <g id="그룹_872" transform="translate(26.746 27)">
            <path
              id="패스_1163"
              d="M2329.7 574.091v-24.883a5.376 5.376 0 0 0 3.643-2.966h25.605a5.376 5.376 0 0 0 3.643 2.966v9.73h2.423v-9.73a5.36 5.36 0 1 0-6.561-5.39h-24.618a5.359 5.359 0 1 0-6.56 5.39v24.882a5.36 5.36 0 1 0 6.427 6.427h19.8v-2.423h-19.8a5.364 5.364 0 0 0-4.002-4.003zm34.1-33.042a2.942 2.942 0 1 1-2.941 2.944 2.946 2.946 0 0 1 2.949-2.944zm-38.259 2.944a2.942 2.942 0 1 1 2.944 2.941 2.948 2.948 0 0 1-2.936-2.942zm2.944 38.257a2.942 2.942 0 1 1 2.941-2.944 2.948 2.948 0 0 1-2.934 2.944z"
              fill={theme.color.PRIMARY}
              transform="translate(-2323.125 -538.625)"
            />
            <path
              id="패스_1164"
              d="M2355.365 567.265l-20.42-22.51a1.024 1.024 0 0 0-1.119-.262 1.011 1.011 0 0 0-.648.95v30.166a1.017 1.017 0 0 0 .606.931 1 1 0 0 0 1.1-.188l5.839-5.442 4.39 9.084a1.012 1.012 0 0 0 .915.575.994.994 0 0 0 .419-.091l3.6-1.622a1.043 1.043 0 0 0 .536-.576 1 1 0 0 0-.032-.779l-3.968-8.631 8.032.1a1.032 1.032 0 0 0 .932-.6 1.017 1.017 0 0 0-.182-1.105zm-11.3.992l4.21 9.165-1.757.8-4.56-9.436a1.025 1.025 0 0 0-.721-.552.948.948 0 0 0-.2-.02.994.994 0 0 0-.687.275l-5.139 4.786v-25.198l17.083 18.827-7.271-.087a.984.984 0 0 0-.9.465 1.01 1.01 0 0 0-.062.976z"
              fill={theme.color.PRIMARY}
              transform="translate(-2300.694 -525.683)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default ClickIcon;
