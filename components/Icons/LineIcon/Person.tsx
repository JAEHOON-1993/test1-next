import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const PersonIcon = ({ size = 50, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="daily_necessity_icon_36"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <g id="그룹_1072">
            <circle id="타원_530" cx="25" cy="25" r="25" fill="none" />
          </g>
          <g id="그룹_36704" transform="translate(7.963 6.337)">
            <g id="그룹_36702" transform="translate(12.161)">
              <path
                id="패스_264301"
                d="M1629.346 454.98a4.221 4.221 0 1 1 4.221-4.221 4.226 4.226 0 0 1-4.221 4.221zm0-7.114a2.892 2.892 0 1 0 2.892 2.892 2.9 2.9 0 0 0-2.892-2.892z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                transform="translate(-1625.125 -446.537)"
              />
            </g>
            <g id="그룹_36703" transform="translate(0 8.75)">
              <path
                id="패스_264302"
                d="M1563.6 529.666a2.66 2.66 0 0 1-.627-.075l-.289-.07a2.661 2.661 0 0 1-1.956-3.21l3.092-12.747v-9.048h-9.229a2.658 2.658 0 0 1 0-5.317h27.448a2.658 2.658 0 0 1 0 5.317h-9.229v9.048l3.092 12.746a2.664 2.664 0 0 1-1.957 3.21l-.288.07a2.661 2.661 0 0 1-3.21-1.957l-2.132-8.788-2.132 8.788a2.663 2.663 0 0 1-2.583 2.033zm1.512-15.789l-3.092 12.747a1.331 1.331 0 0 0 .978 1.6l.289.07a1.332 1.332 0 0 0 1.605-.979l2.778-11.45a.664.664 0 0 1 1.292 0l2.778 11.45a1.331 1.331 0 0 0 1.6.979l.289-.07a1.335 1.335 0 0 0 .978-1.605l-3.09-12.736-.016-.053a.656.656 0 0 1-.024-.177v-9.806a.665.665 0 0 1 .664-.665h9.894a1.329 1.329 0 0 0 0-2.658h-27.448a1.329 1.329 0 1 0 0 2.658h9.894a.665.665 0 0 1 .665.665v9.806a.67.67 0 0 1-.024.177c0 .017-.01.034-.016.051z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                transform="translate(-1551.929 -499.2)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default PersonIcon;
