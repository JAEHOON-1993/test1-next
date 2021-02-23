import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const PageIcon = ({ color, fill, size = 24, ...props }: Props) => {
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
            <path id="사각형_28757" fill="none" d="M0 0H24V24H0z" />
            <g id="그룹_36743" transform="translate(-608.101 -36.628)">
              <g id="그룹_36738" transform="translate(611.101 41.151)">
                <path
                  id="패스_264349"
                  d="M611.1 41.5v14.28s6.2-1.294 8.782 1.078V42.582C617.3 40.209 611.1 41.5 611.1 41.5z"
                  fill={theme.color.ICON}
                  transform="translate(-611.101 -41.151)"
                />
              </g>
              <g id="그룹_36739" transform="translate(619.883 41.151)">
                <path
                  id="패스_264351"
                  d="M811.2 41.5v14.28s-6.195-1.294-8.782 1.078V42.582c2.587-2.373 8.782-1.082 8.782-1.082z"
                  fill={theme.color.ICON}
                  transform="translate(-802.418 -41.151)"
                />
              </g>
            </g>
            <path
              id="패스_264354"
              fill="none"
              stroke={theme.color.WHITE}
              d="M11.782 19.6V4.892"
              transform="translate(0 .634)"
            />
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
          <path id="사각형_28757" fill="none" d="M0 0H24V24H0z" />
          <g id="그룹_36743" transform="translate(-608.101 -36.628)">
            <g id="그룹_36738" transform="translate(611.101 41.151)">
              <path
                id="패스_264349"
                d="M611.1 41.5v14.28s6.2-1.294 8.782 1.078V42.582C617.3 40.209 611.1 41.5 611.1 41.5z"
                fill="none"
                stroke={theme.color.ICON}
                strokeLinejoin="round"
                strokeLinecap="round"
                transform="translate(-611.101 -41.151)"
              />
            </g>
            <g id="그룹_36739" transform="translate(619.883 41.151)">
              <path
                id="패스_264351"
                d="M811.2 41.5v14.28s-6.195-1.294-8.782 1.078V42.582c2.587-2.373 8.782-1.082 8.782-1.082z"
                fill="none"
                stroke={theme.color.ICON}
                strokeLinejoin="round"
                strokeLinecap="round"
                transform="translate(-802.418 -41.151)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default PageIcon;
