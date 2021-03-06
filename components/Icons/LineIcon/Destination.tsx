import { FillProps } from './styled';
import { Props } from './types';

const DestinationIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="destination_icon_50"
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <clipPath id="clipPath">
        <FillProps
          id="사각형_28860"
          d="M0 0H41.181V24.563H0z"
          colored={color}
        />
      </clipPath>
      <path id="사각형_28863" fill="none" d="M0 0H50V50H0z" />
      <g id="그룹_37243" transform="translate(4.583 11.558)">
        <g id="그룹_37242" clipPath="url(#clipPath)">
          <FillProps
            id="패스_264612"
            d="M33.511 3.149a.818.818 0 0 0-.332-.071.748.748 0 0 0-.125.025c-.148-.008-.287-.046-.437-.046h-3.742V.833A.833.833 0 0 0 28.043 0H.834A.834.834 0 0 0 0 .833v13.62a.834.834 0 0 0 .834.833h1.989v5.25a.834.834 0 0 0 .834.833h1.86a4.028 4.028 0 0 0 7.883 0h17.2a4.027 4.027 0 0 0 7.881 0h1.87a.833.833 0 0 0 .833-.833v-8.912a8.546 8.546 0 0 0-7.669-8.475m1.024 15.02a2.365 2.365 0 1 1-2.362 2.364 2.367 2.367 0 0 1 2.362-2.364m0-1.665A4.034 4.034 0 0 0 30.6 19.7H13.4a4.03 4.03 0 0 0-7.886 0H4.49v-4.415h23.553a.833.833 0 0 0 .833-.833V4.724h3.469v7.844a.834.834 0 0 0 .834.833h6.337v6.3H38.48a4.04 4.04 0 0 0-3.944-3.2M9.458 22.9a2.365 2.365 0 1 1 2.365-2.365A2.368 2.368 0 0 1 9.458 22.9m16.556-9.282H1.667V1.667H27.21v11.951h-1.195m13.5-1.88h-5.5V4.867a6.912 6.912 0 0 1 5.5 6.757z"
            colored={color}
          />
        </g>
      </g>
    </svg>
  );
};

export default DestinationIcon;
