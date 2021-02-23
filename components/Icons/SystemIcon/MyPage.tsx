import { Props } from './types';
import { StrokeProps } from './styled';

const MyPageIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="mypage_default"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path id="사각형_1940" fill="none" d="M0 0H24V24H0z" />
      <g id="그룹_983" transform="translate(-683.484 -35.883)">
        <StrokeProps
          as="circle"
          id="타원_475"
          cx="4.275"
          cy="4.275"
          r="4.275"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5px"
          transform="translate(690.893 39.565)"
        />
        <StrokeProps
          id="패스_1302"
          d="M696.392 56.052c-4.438 0-8.036 2.321-8.036 5.185h16.072c0-2.864-3.598-5.185-8.036-5.185z"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5px"
          transform="translate(-1.223 -6)"
        />
      </g>
    </svg>
  );
};

export default MyPageIcon;
