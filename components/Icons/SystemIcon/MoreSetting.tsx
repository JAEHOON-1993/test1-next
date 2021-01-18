import theme from 'layout/theme';

import { Props } from './types';

const MoreSettingIcon = ({
  width = 24,
  height = 24,
  color = theme.color.GRAY4,
  ...props
}: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_186_4"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g id="그룹_751" transform="translate(-316 -136)">
        <circle
          id="타원_462"
          cx="1.5"
          cy="1.5"
          r="1.5"
          fill={color}
          transform="translate(333 139)"
        />
        <circle
          id="타원_463"
          cx="1.5"
          cy="1.5"
          r="1.5"
          fill={color}
          transform="translate(333 146)"
        />
        <circle
          id="타원_464"
          cx="1.5"
          cy="1.5"
          r="1.5"
          fill={color}
          transform="translate(333 153)"
        />
      </g>
      <path id="사각형_28754" fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default MoreSettingIcon;
