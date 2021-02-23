import { Props } from './types';
import { StrokeProps } from './styled';

const OptionUpIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="option_up_icon_24"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="구성_요소_86" transform="rotate(180 10.5 9)">
        <StrokeProps
          id="패스_949"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M2031.4 1274.507l6.509 5.591 6.74-5.591"
          transform="translate(-2028.821 -1271.179)"
        />
        <path
          id="사각형_1956"
          d="M0 0H12V18H0z"
          fill="none"
          transform="rotate(-90 6 6)"
        />
      </g>
      <path
        id="사각형_28934"
        d="M0 0H24V24H0z"
        fill="none"
        transform="rotate(180 12 12)"
      />
    </svg>
  );
};

export default OptionUpIcon;
