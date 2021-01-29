import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const UserIcon: React.FC<Props> = ({ size = 50, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="order_history_icon"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path id="사각형_1940" fill="none" d="M0 0H24V24H0z" />
          <g id="그룹_222" transform="translate(-1868.246 -612.5)">
            <g id="그룹_220">
              <path
                id="패스_954"
                d="M1880.5 625.5a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5zm0-10a4.5 4.5 0 1 0 4.5 4.5 4.506 4.506 0 0 0-4.5-4.5z"
                fill={theme.color.PRIMARY}
              />
            </g>
            <g id="그룹_221">
              <path
                id="패스_955"
                d="M1886.968 634h-12.936c-.946 0-1.617-.748-1.751-1.951a7.333 7.333 0 0 1 3.912-6.879.5.5 0 0 1 .508.862c-1.767 1.04-3.724 3.211-3.426 5.906.044.4.2 1.062.757 1.062h12.936c.123 0 .5 0 .673-.619.671-2.384-1.091-4.948-3.178-6.25a.5.5 0 0 1 .529-.848c2.329 1.452 4.453 4.378 3.612 7.368a1.682 1.682 0 0 1-1.636 1.349z"
                fill={theme.color.PRIMARY}
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default UserIcon;
