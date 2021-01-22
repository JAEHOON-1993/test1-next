import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const WrongPasswordIcon = ({ size = 50, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="암호_불일치_icon"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <g id="그룹_36270" transform="translate(7.518 4.32)">
            <g id="그룹_36269">
              <g id="그룹_36268">
                <path
                  id="패스_264279"
                  d="M18.1 35.891H6.083a3.045 3.045 0 0 1-3.041-3.041V20.379a3.045 3.045 0 0 1 3.042-3.042h21.9a3.045 3.045 0 0 1 3.042 3.042v3.042a1.521 1.521 0 1 0 3.042 0v-3.042a6.09 6.09 0 0 0-6.086-6.079h-1.828V8.933A9.04 9.04 0 0 0 17.03 0a9.04 9.04 0 0 0-9.125 8.933V14.3H6.083A6.09 6.09 0 0 0 0 20.379V32.85a6.09 6.09 0 0 0 6.083 6.083H18.1a1.521 1.521 0 1 0 0-3.042zM10.947 8.933a6 6 0 0 1 6.083-5.89 6 6 0 0 1 6.083 5.89V14.3H10.947V8.933z"
                  fill={theme.color.PRIMARY}
                  transform="translate(0 -.001)"
                />
              </g>
            </g>
            <path
              id="패스_264280"
              d="M310.527 331.837l-5.437-4.662 5.437-4.662a1.483 1.483 0 1 0-1.93-2.251l-5.785 4.96-5.785-4.96a1.483 1.483 0 1 0-1.93 2.251l5.437 4.662-5.437 4.662a1.483 1.483 0 0 0 1.93 2.251l5.785-4.96 5.785 4.96a1.483 1.483 0 0 0 1.93-2.251z"
              fill={theme.color.PRIMARY}
              transform="translate(-272.18 -295.58)"
            />
          </g>
          <path id="사각형_28731" fill="none" d="M0 0H50V50H0z" />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default WrongPasswordIcon;
