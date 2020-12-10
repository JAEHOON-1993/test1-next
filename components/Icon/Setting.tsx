import React from 'react';

import { Props } from './types';

const SettingIcon: React.FC<Props> = ({ color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="setting_icon_small"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path id="사각형_1961" d="M0 0H20V20H0z" fill="none" />
      <g id="그룹_461" transform="translate(1.838 1.796)">
        <g id="그룹_460">
          <g id="그룹_459">
            <path
              id="패스_1002"
              fill="none"
              stroke={color}
              strokeMiterlimit="10"
              d="M1804.649-29.591h-2.088a.228.228 0 0 1-.227-.208l-.148-1.7a6.337 6.337 0 0 1-2.093-.8l-1.256 1.055a.229.229 0 0 1-.309-.014l-1.476-1.475a.229.229 0 0 1-.013-.309l1.012-1.207a6.335 6.335 0 0 1-.923-2.157l-1.539-.135a.229.229 0 0 1-.208-.228v-2.091a.23.23 0 0 1 .208-.228l1.539-.134a6.339 6.339 0 0 1 .923-2.158l-1.012-1.206a.229.229 0 0 1 .013-.309l1.476-1.476a.23.23 0 0 1 .309-.013l1.256 1.055a6.338 6.338 0 0 1 2.093-.8l.148-1.7a.228.228 0 0 1 .227-.209h2.088a.229.229 0 0 1 .228.209l.156 1.8a6.375 6.375 0 0 1 1.912.854l1.43-1.2a.228.228 0 0 1 .308.013l1.476 1.476a.229.229 0 0 1 .013.309l-1.243 1.481a6.341 6.341 0 0 1 .742 1.847l1.95.17a.23.23 0 0 1 .209.228v2.087a.229.229 0 0 1-.209.228l-1.95.17a6.348 6.348 0 0 1-.742 1.847l1.243 1.481a.229.229 0 0 1-.013.309l-1.476 1.475a.228.228 0 0 1-.308.014l-1.43-1.2a6.373 6.373 0 0 1-1.912.853l-.156 1.8a.229.229 0 0 1-.228.196zm6.953-7.181z"
              transform="translate(-1795.379 46.042)"
            />
          </g>
        </g>
        <g
          id="타원_456"
          fill="none"
          stroke={color}
          transform="translate(4.422 4.422)"
        >
          <circle cx="3.745" cy="3.745" r="3.745" stroke="none" />
          <circle cx="3.745" cy="3.745" r="3.245" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export default SettingIcon;
