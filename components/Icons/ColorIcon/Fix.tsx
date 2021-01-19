import React from 'react';

import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const FixIcon: React.FC<Props> = ({
  width = '50',
  height = '50',
  ...props
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="icon4_50"
          width={width}
          height={height}
          viewBox="0 0 50 50"
        >
          <path
            id="패스_264419"
            d="M3281.811 258.2v2.626l.889 3.571 2.046 2.035 3.714.963h1.849l1.261-.491-4.619-4.853.532-1.862-2.217-1.5z"
            fill={theme.color.PRIMARYSUB}
            transform="translate(-3254.672 -222.15)"
          />
          <rect
            id="사각형_28777"
            width="8.568"
            height="5.712"
            fill={theme.color.PRIMARYSUB}
            rx="2"
            transform="rotate(-135.97 23.618 14.117)"
          />
          <rect
            id="사각형_28778"
            width="8.568"
            height="5.712"
            fill={theme.color.PRIMARYSUB}
            rx="2"
            transform="rotate(-135.97 22.568 1.25)"
          />
          <rect
            id="사각형_28775"
            width="25.702"
            height="4.284"
            fill={theme.color.PRIMARY}
            rx="2"
            transform="rotate(-44.03 53.038 10.814)"
          />
          <rect
            id="사각형_28776"
            width="7.14"
            height="2.856"
            fill={theme.color.POINT}
            rx="1.428"
            transform="rotate(-44.03 50.373 -34.836)"
          />
          <g id="교육" transform="translate(-.149 .065)">
            <path
              id="사각형_1991"
              fill="none"
              d="M0 0H50V50H0z"
              transform="translate(.149 -.065)"
            />
          </g>
          <g id="그룹_36725" transform="translate(4.002 5.644)">
            <path
              id="패스_264349"
              d="M23.426 109.968a7.885 7.885 0 0 1-7.672-9.558l-3.508-3.51a.577.577 0 1 1 .815-.816l3.739 3.739a.576.576 0 0 1 .149.554 6.746 6.746 0 0 0 1.746 6.461 6.671 6.671 0 0 0 6.637 1.7l-3.8-3.8a2.182 2.182 0 0 1 0-3.079l1.354-1.354a2.233 2.233 0 0 1 3.077 0l3.864 3.864a6.717 6.717 0 0 0-8.1-8.577.576.576 0 0 1-.554-.149l-3.733-3.737a.577.577 0 0 1 .816-.815l3.509 3.509a7.869 7.869 0 0 1 8.8 11.045.574.574 0 0 1-.422.321.583.583 0 0 1-.508-.159l-4.482-4.485a1.055 1.055 0 0 0-1.446 0l-1.356 1.354a1.029 1.029 0 0 0 0 1.447l4.436 4.436a.577.577 0 0 1-.176.936 7.892 7.892 0 0 1-3.182.673"
              fill={theme.color.BLACK}
              stroke={theme.color.BLACK}
              strokeWidth=".5px"
              transform="translate(6.92 -69.475)"
            />
            <path
              id="패스_264350"
              d="M12.885 97.307a.584.584 0 0 1-.409-.168l-2.93-2.933a7.869 7.869 0 0 1-8.8-11.043.577.577 0 0 1 .932-.163l4.483 4.482a1.022 1.022 0 0 0 1.446 0l1.355-1.352a1.026 1.026 0 0 0 0-1.447l-4.436-4.437a.577.577 0 0 1 .174-.936 7.818 7.818 0 0 1 8.731 1.642 7.9 7.9 0 0 1 2.125 7.248l3.075 3.075a.577.577 0 1 1-.815.816l-3.305-3.3a.58.58 0 0 1-.149-.555 6.75 6.75 0 0 0-1.746-6.461 6.666 6.666 0 0 0-6.637-1.7l3.8 3.8a2.179 2.179 0 0 1 0 3.077L8.422 88.3a2.176 2.176 0 0 1-3.077 0l-3.863-3.864a6.717 6.717 0 0 0 8.1 8.577.576.576 0 0 1 .554.149l3.16 3.16a.577.577 0 0 1-.407.985"
              fill={theme.color.BLACK}
              stroke={theme.color.BLACK}
              strokeWidth=".5px"
              transform="translate(0 -76.401)"
            />
            <path
              id="패스_264351"
              d="M5.9 114.843a4.361 4.361 0 0 1-2.978-1.521 4.138 4.138 0 0 1-1.509-3.237 2.867 2.867 0 0 1 1.1-1.946l20.561-19.99a5.46 5.46 0 0 0-.373-3.917 4.133 4.133 0 0 0-3.027-1.756 7.594 7.594 0 0 0-2.559.113c-.823.14-1.537.261-2.021-.2a1.754 1.754 0 0 1-.363-1.5 3.626 3.626 0 0 1 2.125-2.519c2.056-1.128 5.363-1.669 7.705-.521a42.84 42.84 0 0 1 3.856 2.165 11.661 11.661 0 0 0 1.133.656c.077-.031.2-.1.294-.145a1.75 1.75 0 0 1 1.716-.214c.255.143 4.689 3.948 4.771 4.935.011.124.017.338.022.6a9.073 9.073 0 0 0 .252 2.372c.415.414 1.079.807 1.432.709 1.172-.316 3.623 2.526 3.646 2.555.42.513.776 1.051.538 1.526-.033.066-5.108 6.171-6.245 5.891-.714-.179-3.263-2.8-3.7-3.595a.821.821 0 0 1-.1-.665 1.167 1.167 0 0 0-.2-.876 2.171 2.171 0 0 0-1.729-.689 11.142 11.142 0 0 0-2.078.017L8.106 113.726a2.869 2.869 0 0 1-1.946 1.106c-.087.008-.171.011-.26.011m12.915-33.589a6.59 6.59 0 0 1 1.046.083 5.217 5.217 0 0 1 3.824 2.3 6.69 6.69 0 0 1 .453 4.993.572.572 0 0 1-.149.241l-20.7 20.126a.5.5 0 0 1-.079.065 1.687 1.687 0 0 0-.654 1.15 3.161 3.161 0 0 0 1.178 2.3 3.137 3.137 0 0 0 2.312 1.178 1.694 1.694 0 0 0 1.134-.653c.02-.028.042-.055.064-.08L27.3 92.334v-.008c.2-.319.514-.518 3-.4a3.148 3.148 0 0 1 2.638 1.2 2.381 2.381 0 0 1 .379 1.677 18.4 18.4 0 0 0 2.83 2.893 48.451 48.451 0 0 0 4.946-5.078 9.3 9.3 0 0 0-2.827-2.561 3.172 3.172 0 0 1-2.5-1.046c-.428-.429-.529-1.394-.569-3.138 0-.192-.008-.352-.014-.466A30.954 30.954 0 0 0 31 81.324c-.093-.05-.433.127-.614.223a2.261 2.261 0 0 1-.72.285c-.412.063-.837-.2-1.855-.832a41.021 41.021 0 0 0-3.755-2.11c-1.97-.966-4.892-.466-6.645.5-.914.5-1.472 1.1-1.532 1.636a1.07 1.07 0 0 0 .019.544 4.429 4.429 0 0 0 1.027-.113 10.984 10.984 0 0 1 1.892-.2"
              fill={theme.color.BLACK}
              stroke={theme.color.BLACK}
              strokeWidth=".5px"
              transform="translate(.803 -77.215)"
            />
          </g>
          <path
            id="패스_264420"
            d="M3283.011 244.821l4.427 4.157"
            fill="none"
            stroke="#191919"
            strokeWidth="1.5px"
            transform="translate(-3255.586 -227.876)"
          />
          <path
            id="패스_264421"
            d="M3283.011 244.821l4.427 4.157"
            fill="none"
            stroke="#191919"
            strokeWidth="1.5px"
            transform="translate(-3258.442 -225.02)"
          />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default FixIcon;
