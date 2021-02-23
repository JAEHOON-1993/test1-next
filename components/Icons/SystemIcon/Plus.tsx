import { Props } from './types';
import { FillProps } from './styled';

const PlusIcon = ({ color, size = 24, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <path
            fill="none"
            d="M0 0H24V24H0z"
            transform="translate(-334 -54) translate(334 54)"
          />
        </g>
      </g>
      <g>
        <FillProps
          colored={color}
          d="M848.164 498.446h6.169v2.2h-6.169v6.385h-2.232v-6.385h-6.169v-2.2h6.169v-6.417h2.232z"
          transform="translate(-834.764 -488.028)"
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
