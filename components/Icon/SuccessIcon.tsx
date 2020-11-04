import React from "react";

type Props = {
  color?: string;
  style?: any;
  className?: any;
};

const SuccessIcon: React.FC<Props> = ({ color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3px"
        d="M-478.529 1325.481l9 11.357 13.307-18.69"
        transform="translate(491.664 -1301.813)"
      />
      <g fill="none" stroke={color} stroke-width="3px">
        <circle cx="25" cy="25" r="25" stroke="none" />
        <circle cx="25" cy="25" r="23.5" />
      </g>
    </svg>
  );
};

export default SuccessIcon;
