import { Props } from './types';
import { StrokeProps } from './styled';

const HeadphoneIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="line_headphone_icon_50"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      {...props}
    >
      <path id="Rectangle" d="M0 0H50V50H0z" fill="none" />
      <g id="headphones" transform="translate(6 6)">
        <path id="사각형_31656" d="M0 0H38V38H0z" fill="none" />
        <StrokeProps
          id="패스_265565"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          d="M60.524 54.155h-4.718a2.359 2.359 0 0 0-2.359 2.359v5.9a2.359 2.359 0 0 0 2.359 2.359h2.359a2.359 2.359 0 0 0 2.359-2.359v-8.259a14.262 14.262 0 0 0-28.524 0v8.257a2.359 2.359 0 0 0 2.359 2.359h2.359a2.359 2.359 0 0 0 2.359-2.359v-5.9a2.359 2.359 0 0 0-2.359-2.359H32"
          transform="translate(-27.282 -34.102)"
        />
      </g>
    </svg>
  );
};

export default HeadphoneIcon;
