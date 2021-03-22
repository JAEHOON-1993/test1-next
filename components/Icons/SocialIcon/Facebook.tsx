import React from 'react';

import { Props } from './types';

const Facebook: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.6411 21.016V12.8H20.8121V9.60002H17.6411V7.55603C17.6411 6.62803 17.8981 5.99703 19.2281 5.99703H20.9281V3.13303C20.1073 3.0459 19.2825 3.0035 18.4571 3.00603C17.8958 2.9653 17.3323 3.04785 16.8063 3.24788C16.2802 3.44792 15.8043 3.7606 15.4118 4.164C15.0194 4.56741 14.7199 5.05178 14.5344 5.58315C14.3489 6.11452 14.2819 6.68002 14.3381 7.24002V9.60002H11.5681V12.8H14.3331V21.017L17.6411 21.016Z"
        fill={color ? color : '#1877F3'}
      />
    </svg>
  );
};

export default Facebook;
