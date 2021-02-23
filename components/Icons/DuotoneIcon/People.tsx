import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const PeopleIcon = ({ size = 100 }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="duotone_people_icon_100"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <path id="사각형_28856" d="M0 0H100V100H0z" fill="none" />
          <g
            id="타원_3181"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="2px"
            transform="translate(76 30)"
          >
            <circle cx="3" cy="3" r="3" stroke="none" />
            <circle cx="3" cy="3" r="2" fill="none" />
          </g>
          <g
            id="타원_3182"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="2px"
            transform="translate(23 23)"
          >
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
            <circle cx="4.5" cy="4.5" r="3.5" fill="none" />
          </g>
          <g id="cross-1" transform="rotate(90 -11.593 34.593)">
            <path
              id="line"
              d="M0 6.308L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(3.154)"
            />
            <path
              id="line-2"
              d="M6.308 0L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0 3.154)"
            />
          </g>
          <g id="cross-1-2" transform="rotate(135 32.896 25.657)">
            <path
              id="line-3"
              d="M0 6.308L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(3.154)"
            />
            <path
              id="line-4"
              d="M6.308 0L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0 3.154)"
            />
          </g>
          <path
            id="사각형_1941"
            d="M0 0H50V50H0z"
            fill="none"
            transform="translate(26 33)"
          />
          <g id="그룹_38152" transform="translate(-1840.246 -587.459)">
            <g id="그룹_220" transform="translate(1878.544 614.5)">
              <path
                id="패스_954"
                d="M1887.579 639.657a12.579 12.579 0 1 1 12.579-12.579 12.594 12.594 0 0 1-12.579 12.579zm0-22.87a10.292 10.292 0 1 0 10.292 10.292 10.3 10.3 0 0 0-10.292-10.292z"
                fill={theme.color.PRIMARY}
                transform="translate(-1875 -614.5)"
              />
            </g>
            <g id="그룹_221" transform="translate(1872.246 638.746)">
              <path
                id="패스_955"
                d="M1905.916 645.453h-29.586c-2.163 0-3.7-1.711-4-4.462-.661-5.969 2.85-12.144 8.947-15.733a1.144 1.144 0 0 1 1.162 1.971c-4.042 2.379-8.517 7.344-7.835 13.507.1.908.459 2.429 1.731 2.429h29.585c.281 0 1.144 0 1.539-1.416 1.535-5.452-2.5-11.316-7.268-14.294a1.143 1.143 0 0 1 1.209-1.939c5.327 3.321 10.184 10.013 8.261 16.851a3.847 3.847 0 0 1-3.745 3.086z"
                fill={theme.color.PRIMARY}
                transform="translate(-1872.246 -625.102)"
              />
            </g>
          </g>
          <g id="cross-1-3" transform="rotate(135 28.195 48.548)">
            <path
              id="line-5"
              d="M0 6.308L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(3.154)"
            />
            <path
              id="line-6"
              d="M6.308 0L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
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

export default PeopleIcon;
