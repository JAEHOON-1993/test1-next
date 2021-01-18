import React from 'react';

import theme from 'layout/theme';

import { Props } from './types';

const Wallet: React.FC<Props> = ({ width = '50', height = '50', ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="icon10"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path
        id="패스_264821"
        fill={theme.color.PRIMARY}
        d="M-3997.771-16367.828l1.43-1.922 1.46-.66h8.932l1.382.66v5.431l-1.382 1.19h-8.932l-1.46-1.19-1.43-1.553z"
        transform="translate(4026 16397)"
      />
      <rect
        id="사각형_28855"
        width="15"
        height="6"
        fill={theme.color.PRIMARYSUB}
        rx="3"
        transform="rotate(90 -1 17)"
      />
      <path id="사각형_28856" fill="none" d="M0 0H50V50H0z" />
      <g id="그룹_37677" transform="translate(-2266.584 -826.459)">
        <g id="그룹_37672" transform="translate(2281.281 833.431)">
          <g id="그룹_37670">
            <path
              id="패스_264815"
              d="M2298.7 844.167a.611.611 0 0 1-.433-.179l-9.081-9.081-8.986 8.993a.612.612 0 0 1-.865-.865l9.421-9.421a.61.61 0 0 1 .863 0l9.513 9.513a.611.611 0 0 1-.433 1.044z"
              fill="#1a1a1a"
              stroke="#1a1a1a"
              strokeWidth=".3px"
              transform="translate(-2279.155 -833.431)"
            />
          </g>
          <g id="그룹_37671" transform="translate(4.379 7.125)">
            <path
              id="패스_264816"
              d="M2282.388 841.311a.611.611 0 0 1-.433-1.044l2.392-2.392a.611.611 0 0 1 .431-.179.606.606 0 0 1 .433.18 3.231 3.231 0 0 0 2.295.95 3.222 3.222 0 0 0 2.253-.912.61.61 0 0 1 .917-.023l2.281 2.28a.612.612 0 0 1-.865.865l-1.892-1.892a4.475 4.475 0 0 1-5.391 0l-1.989 1.987a.609.609 0 0 1-.432.18z"
              fill="#1a1a1a"
              stroke="#1a1a1a"
              strokeWidth=".3px"
              transform="translate(-2281.777 -837.697)"
            />
          </g>
        </g>
        <g id="그룹_37673" transform="translate(2275.983 844.663)">
          <path
            id="패스_264817"
            d="M2306.417 863.952h-26.172a4.267 4.267 0 0 1-4.262-4.262v-18.921a.612.612 0 0 1 .612-.613h29.822a.611.611 0 0 1 .611.613v7.581a.611.611 0 1 1-1.222 0v-6.97h-28.6v18.31a3.042 3.042 0 0 0 3.038 3.04h25.56v-6.971a.611.611 0 1 1 1.222 0v7.583a.61.61 0 0 1-.609.61z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".3px"
            transform="translate(-2275.983 -840.156)"
          />
        </g>
        <g id="그룹_37674" transform="translate(2275.983 839.958)">
          <path
            id="패스_264818"
            d="M2303.621 843.268h-27.026a.612.612 0 0 1-.612-.611v-2.579a2.743 2.743 0 0 1 2.741-2.739H2282a.611.611 0 1 1 0 1.223h-3.28a1.518 1.518 0 0 0-1.517 1.517v1.966h25.8v-3.482h-2.51a.611.611 0 1 1 0-1.223h3.122a.612.612 0 0 1 .611.611v4.706a.612.612 0 0 1-.605.611z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".3px"
            transform="translate(-2275.983 -837.339)"
          />
        </g>
        <g id="그룹_37675" transform="translate(2294.275 852.245)">
          <path
            id="패스_264819"
            d="M2298.932 853.327h-7.679a4.316 4.316 0 1 1 0-8.631h7.679a2.617 2.617 0 0 1 2.614 2.614v3.4a2.617 2.617 0 0 1-2.614 2.617zm-7.679-7.409a3.093 3.093 0 0 0 0 6.186h7.679a1.394 1.394 0 0 0 1.391-1.391v-3.4a1.394 1.394 0 0 0-1.391-1.391z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".3px"
            transform="translate(-2286.935 -844.696)"
          />
        </g>
        <g id="그룹_37676" transform="translate(2296.534 854.273)">
          <path
            id="패스_264820"
            d="M2290.576 850.486a2.288 2.288 0 1 1 2.288-2.288 2.29 2.29 0 0 1-2.288 2.288zm0-3.352a1.065 1.065 0 1 0 1.065 1.064 1.064 1.064 0 0 0-1.065-1.064z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".3px"
            transform="translate(-2288.288 -845.91)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Wallet;
