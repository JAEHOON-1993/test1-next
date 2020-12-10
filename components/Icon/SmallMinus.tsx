import React from 'react';

import { Props } from './types';

const SmallMinusIcon: React.FC<Props> = ({ color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
    >
      <path fill="#585858" d="M0 0H9V1H0z" transform="translate(8 12)" />
      <path fill="none" d="M0 0H25V25H0z" />
    </svg>
  );
};

export default SmallMinusIcon;
