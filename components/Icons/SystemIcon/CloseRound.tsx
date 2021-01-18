import theme from 'layout/theme';

import { Props } from './types';

const CloseRoundIcon = ({
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
      <circle
        id="타원_3184"
        cx="10"
        cy="10"
        r="10"
        fill="#767676"
        transform="translate(2 2)"
      />
      <g id="그룹_37420" transform="rotate(45 -.017 17.193)">
        <path
          id="선_270"
          d="M0 0L0 9.958"
          fill="none"
          stroke={theme.color.WHITE}
          strokeLinecap="round"
          strokeWidth="1.5px"
          transform="translate(4.979)"
        />
        <path
          id="선_271"
          d="M0 0L0 9.958"
          fill="none"
          stroke={theme.color.WHITE}
          strokeLinecap="round"
          strokeWidth="1.5px"
          transform="rotate(90 2.49 7.469)"
        />
      </g>
      <circle id="타원_3185" cx="12" cy="12" r="12" fill="none" />
    </svg>
  );
};

export default CloseRoundIcon;
