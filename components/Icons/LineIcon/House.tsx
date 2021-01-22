import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const HouseIcon = ({ size = 50, ...props }: Props) => {
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
          <path id="사각형_1998" fill="none" d="M0 0H36V36H0z" />
          <g id="그룹_633" transform="translate(-1631.215 -1949.02)">
            <g id="그룹_631" transform="translate(1634.215 1952.971)">
              <g id="그룹_629">
                <g id="그룹_625">
                  <path
                    id="패스_1125"
                    d="M1661.363 1970.617a.465.465 0 0 1-.329-.137l-11.89-11.89-11.889 11.89a.466.466 0 0 1-.658 0l-2.246-2.245a.465.465 0 0 1 0-.658l12.161-12.161a.426.426 0 0 1 .053-.063l2.245-2.246a.468.468 0 0 1 .329-.136 1.013 1.013 0 0 1 .117.015.459.459 0 0 1 .222.121l2.246 2.246a.442.442 0 0 1 .053.065l12.161 12.16a.465.465 0 0 1 0 .658l-2.246 2.245a.46.46 0 0 1-.329.136zm-12.219-13.151a.461.461 0 0 1 .329.137l11.89 11.89 1.588-1.588-11.89-11.89a.491.491 0 0 1-.055-.065l-1.862-1.863-1.862 1.864a.573.573 0 0 1-.053.063l-11.89 11.89 1.588 1.588 11.89-11.89a.46.46 0 0 1 .327-.135z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-1634.215 -1952.971)"
                  />
                </g>
                <g id="그룹_626" transform="translate(3.313 15.647)">
                  <path
                    id="패스_1126"
                    d="M1637.289 1978.069a.465.465 0 0 1-.466-.465v-11.85a.466.466 0 1 1 .931 0v11.85a.465.465 0 0 1-.465.465z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-1636.823 -1965.288)"
                  />
                </g>
                <g id="그룹_627" transform="translate(25.615 15.647)">
                  <path
                    id="패스_1127"
                    d="M1654.845 1978.069a.465.465 0 0 1-.466-.465v-11.85a.466.466 0 1 1 .931 0v11.85a.465.465 0 0 1-.465.465z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-1654.379 -1965.288)"
                  />
                </g>
                <g id="그룹_628" transform="translate(20.263 1.256)">
                  <path
                    id="패스_1128"
                    d="M1655.451 1964.257a.466.466 0 0 1-.466-.466v-8.9h-3.885v4.082a.465.465 0 0 1-.93 0v-4.546a.465.465 0 0 1 .465-.466h4.82a.466.466 0 0 1 .465.466v9.365a.466.466 0 0 1-.469.465z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-1650.166 -1953.96)"
                  />
                </g>
              </g>
              <g id="그룹_630" transform="translate(1.267 27.496)">
                <path
                  id="패스_1129"
                  d="M1662.073 1975.547h-26.4a.465.465 0 0 1 0-.931h26.4a.465.465 0 0 1 0 .931z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-1635.212 -1974.616)"
                />
              </g>
            </g>
            <g id="그룹_632" transform="translate(1643.359 1967.104)">
              <path
                id="패스_1130"
                d="M1647.063 1974.017a.465.465 0 0 1-.285-.1c-.458-.354-4.5-3.521-5.146-5.52a3.507 3.507 0 0 1 .245-2.964 2.751 2.751 0 0 1 2.09-1.322 3.55 3.55 0 0 0 6.191 0 2.746 2.746 0 0 1 2.089 1.322 3.52 3.52 0 0 1 .238 2.989c-.641 1.973-4.679 5.139-5.137 5.494a.465.465 0 0 1-.285.101zm-2.8-8.99a1.542 1.542 0 0 0-.188.012 1.811 1.811 0 0 0-1.4.879 2.6 2.6 0 0 0-.168 2.171c.45 1.38 3.214 3.8 4.555 4.871 1.34-1.072 4.1-3.491 4.545-4.846a2.608 2.608 0 0 0-.158-2.2 1.81 1.81 0 0 0-1.4-.879c-1.587-.187-2.55 2.01-2.56 2.031a.466.466 0 0 1-.427.281.465.465 0 0 1-.427-.281c-.008-.017-.907-2.039-2.372-2.039z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1641.413 -1964.096)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default HouseIcon;
