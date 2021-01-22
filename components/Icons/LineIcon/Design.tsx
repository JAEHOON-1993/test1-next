import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const DesignIcon = ({ size = 50, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="daily_necessity_icon_36"
          width={size}
          height={size}
          viewBox="0 0 36 36"
        >
          <g id="그룹_669" transform="translate(5.559 4.467)">
            <path
              id="패스_1163"
              d="M2326.54 557.031v-12.913a2.79 2.79 0 0 0 1.891-1.54h13.289a2.789 2.789 0 0 0 1.891 1.54v5.05h1.258v-5.05a2.782 2.782 0 1 0-3.4-2.8h-12.776a2.781 2.781 0 1 0-3.4 2.8v12.914a2.782 2.782 0 1 0 3.335 3.336h10.276v-1.258h-10.276a2.784 2.784 0 0 0-2.088-2.079zm17.7-17.148a1.527 1.527 0 1 1-1.526 1.528 1.53 1.53 0 0 1 1.524-1.528zm-19.855 1.528a1.527 1.527 0 1 1 1.528 1.526 1.53 1.53 0 0 1-1.53-1.526zm1.528 19.855a1.527 1.527 0 1 1 1.526-1.528 1.53 1.53 0 0 1-1.528 1.528z"
              fill={theme.color.PRIMARY}
              stroke={theme.color.PRIMARY}
              strokeWidth="0.3px"
              transform="translate(-2323.125 -538.625)"
            />
            <path
              id="패스_1164"
              d="M2344.692 556.279l-10.6-11.683a.531.531 0 0 0-.581-.136.525.525 0 0 0-.337.493v15.656a.528.528 0 0 0 .315.483.521.521 0 0 0 .571-.1l3.03-2.824 2.278 4.714a.525.525 0 0 0 .475.3.518.518 0 0 0 .218-.047l1.867-.842a.542.542 0 0 0 .278-.3.521.521 0 0 0-.017-.4l-2.06-4.479 4.168.05a.535.535 0 0 0 .484-.312.528.528 0 0 0-.089-.573zm-5.867.515l2.185 4.756-.912.413-2.366-4.9a.532.532 0 0 0-.374-.287.5.5 0 0 0-.1-.01.516.516 0 0 0-.357.143l-2.667 2.484V546.32l8.865 9.771-3.773-.045a.511.511 0 0 0-.464.241.525.525 0 0 0-.037.507z"
              fill={theme.color.PRIMARY}
              stroke={theme.color.PRIMARY}
              strokeWidth="0.3px"
              transform="translate(-2316.319 -534.698)"
            />
          </g>
          <path id="사각형_1992" fill="none" d="M0 0H36V36H0z" />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default DesignIcon;
