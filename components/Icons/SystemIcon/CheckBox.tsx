import theme from 'layout/theme';

import { Props } from './types';

interface checkBoxProps extends Props {
  fill?: boolean;
}

const CheckBoxIcon = ({
  color = theme.color.PRIMARY,
  fill,
  width = 24,
  height = 24,
  ...props
}: checkBoxProps) => {
  if (fill) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 30 30"
      >
        <rect width="30" height="30" fill={color} rx="4" />
        <path
          fill="none"
          stroke={theme.color.WHITE}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5px"
          d="M-477.878 1324.843l6.506 6.314 9.394-11.014"
          transform="translate(484.457 -1310.228)"
        />
      </svg>
    );
  }
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <g fill={theme.color.WHITE} stroke={theme.color.GRAY4}>
        <rect width="30" height="30" stroke="none" rx="4" />
        <rect width="29" height="29" x=".5" y=".5" fill="none" rx="3.5" />
      </g>
    </svg>
  );
};

export default CheckBoxIcon;
