import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const LoginIcon = ({ size = 100 }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="singletone_login_icon_100"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <path id="사각형_28856" d="M0 0H100V100H0z" fill="none" />
          <g
            id="타원_3181"
            fill="none"
            stroke={theme.color.ICON}
            strokeWidth="2px"
            transform="translate(73 30)"
          >
            <circle cx="3" cy="3" r="3" stroke="none" />
            <circle cx="3" cy="3" r="2" fill="none" />
          </g>
          <g
            id="타원_3182"
            fill="none"
            stroke={theme.color.ICON}
            strokeWidth="2px"
            transform="translate(20 23)"
          >
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
            <circle cx="4.5" cy="4.5" r="3.5" fill="none" />
          </g>
          <g id="cross-1" transform="rotate(90 -13.093 33.093)">
            <path
              id="line"
              d="M0 6.308L0 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(3.154)"
            />
            <path
              id="line-2"
              d="M6.308 0L0 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0 3.154)"
            />
          </g>
          <g id="cross-1-2" transform="rotate(135 31.396 25.036)">
            <path
              id="line-3"
              d="M0 6.308L0 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(3.154)"
            />
            <path
              id="line-4"
              d="M6.308 0L0 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0 3.154)"
            />
          </g>
          <g id="그룹_38152" transform="translate(-1843.246 -587.459)">
            <g id="그룹_220" transform="translate(1878.544 614.5)">
              <path
                id="패스_954"
                d="M1887.579 639.657a12.579 12.579 0 1 1 12.579-12.579 12.594 12.594 0 0 1-12.579 12.579zm0-22.87a10.292 10.292 0 1 0 10.292 10.292 10.3 10.3 0 0 0-10.292-10.292z"
                fill={theme.color.ICON}
                transform="translate(-1875 -614.5)"
              />
            </g>
            <path
              id="빼기_3"
              d="M2836.914 10402.812h-29.585c-2.162 0-3.7-1.71-4-4.462-.66-5.969 2.852-12.146 8.947-15.734a1.147 1.147 0 0 1 1.569.409 1.14 1.14 0 0 1-.407 1.562c-4.04 2.38-8.516 7.345-7.835 13.508.1.907.461 2.431 1.731 2.431h28.157a2 2 0 0 0 1.76 1.05h2.443a3.59 3.59 0 0 1-2.78 1.236zm-1.651-14.5a18.225 18.225 0 0 0-4.075-3.5 1.143 1.143 0 0 1 .612-2.112 1.118 1.118 0 0 1 .6.172 20.822 20.822 0 0 1 4.436 3.743 2 2 0 0 0-1.568 1.694z"
              fill={theme.color.ICON}
              transform="translate(-931 -9743.713)"
            />
          </g>
          <g id="구성_요소_328_1" transform="translate(53 43.4)">
            <g id="lock-key" transform="translate(2.667 1.333)">
              <path
                id="사각형_30646"
                d="M0 0H26V30H0z"
                fill="none"
                transform="translate(.334 -.332)"
              />
              <rect
                id="사각형_30647"
                width="16"
                height="15"
                stroke={theme.color.ICON}
                strokeWidth="2.5px"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                rx="2"
                transform="translate(5.334 10.668)"
              />
              <path
                id="패스_264845"
                d="M91.994 24v-4a4 4 0 1 1 8 0v4"
                stroke={theme.color.ICON}
                strokeWidth="2.5px"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-82.395 -13.333)"
              />
            </g>
            <path id="사각형_30649" d="M0 0H32V32H0z" fill="none" />
          </g>
          <g id="cross-1-3" transform="rotate(135 23.695 46.684)">
            <path
              id="line-5"
              d="M0 6.308L0 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(3.154)"
            />
            <path
              id="line-6"
              d="M6.308 0L0 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0 3.154)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default LoginIcon;
