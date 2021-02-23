import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const MyPageIcon = ({ color, fill, size = 24, ...props }: Props) => {
  if (fill) {
    return (
      <ThemeConsumer>
        {(theme) => (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
          >
            <path id="사각형_1940" fill="none" d="M0 0H24V24H0z" />
            <g id="그룹_983" transform="translate(-683.485 -35.882)">
              <circle
                id="타원_475"
                cx="4.275"
                cy="4.275"
                r="4.275"
                fill={theme.color.ICON}
                transform="translate(690.893 39.565)"
              />
              <path
                id="패스_1302"
                d="M696.392 56.052c-4.438 0-8.036 2.321-8.036 5.185h16.072c0-2.864-3.598-5.185-8.036-5.185z"
                fill={theme.color.ICON}
                transform="translate(-1.223 -6)"
              />
            </g>
          </svg>
        )}
      </ThemeConsumer>
    );
  }
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path id="사각형_1940" fill="none" d="M0 0H24V24H0z" />
          <g id="그룹_983" transform="translate(-683.485 -35.882)">
            <circle
              id="타원_475"
              cx="4.275"
              cy="4.275"
              r="4.275"
              fill="none"
              stroke={theme.color.ICON}
              strokeMiterlimit="10"
              transform="translate(690.893 39.565)"
            />
            <path
              id="패스_1302"
              d="M696.392 56.052c-4.438 0-8.036 2.321-8.036 5.185h16.072c0-2.864-3.598-5.185-8.036-5.185z"
              fill="none"
              stroke={theme.color.ICON}
              strokeMiterlimit="10"
              transform="translate(-1.223 -6)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default MyPageIcon;
