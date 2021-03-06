import { Props } from './types';
import { FillProps } from './styled';

const HamburgerIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_186_4"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="그룹_37417" transform="translate(-489 -368)">
        <FillProps
          id="사각형_28746"
          d="M0 0H18V2.5H0z"
          colored={color}
          transform="translate(492 373)"
        />
        <FillProps
          id="사각형_29534"
          d="M0 0H18V2.5H0z"
          colored={color}
          transform="translate(492 384)"
        />
      </g>
      <path id="사각형_29535" fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default HamburgerIcon;
