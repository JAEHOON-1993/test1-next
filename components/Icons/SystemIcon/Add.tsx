import theme from 'layout/theme';

import { Props } from './types';

const AddIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = theme.color.GRAY4,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="add_icon_24"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g id="그룹_690" transform="translate(-3142.531 -2494.531)">
        <g id="그룹_689" transform="translate(3150.945 2502.031)">
          <path
            id="선_229"
            d="M0 0L0 7.666"
            fill="none"
            stroke={color}
            strokeWidth="1.3px"
            strokeLinecap="round"
            transform="translate(3.833)"
          />
          <path
            id="선_230"
            d="M0 0L0 7.666"
            fill="none"
            stroke={color}
            strokeWidth="1.3px"
            strokeLinecap="round"
            transform="rotate(90 1.916 5.75)"
          />
        </g>
        <g
          id="사각형_1970"
          fill="none"
          stroke="#767676"
          stroke-width="1.3px"
          transform="translate(3145.531 2496.531)"
        >
          <rect width="19" height="19" stroke="none" rx="4" />
          <rect
            width="17.7"
            height="17.7"
            x=".65"
            y=".65"
            fill="none"
            rx="3.35"
          />
        </g>
      </g>
      <path id="사각형_1940" d="M0 0H24V24H0z" fill="none" />
    </svg>
  );
};

export default AddIcon;
