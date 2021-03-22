import React from 'react';

import { Props } from './types';

const Naver: React.FC<Props> = ({ size = 24, color, ...props }) => {
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
        d="M14.615 12.552L9.358 5H5V19.111H9.565V11.559L14.822 19.111H19.18V5.00299H14.615V12.552Z"
        fill={color ? color : '#20CF5D'}
      />
    </svg>
  );
};

export default Naver;
