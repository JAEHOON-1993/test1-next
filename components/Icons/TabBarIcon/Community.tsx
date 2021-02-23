import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const CommunityIcon = ({ color, fill, size = 24, ...props }: Props) => {
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
            <path id="사각형_1959" fill="none" d="M0 0H24V24H0z" />
            <g id="그룹_987" transform="translate(-708.939 -191.652)">
              <path
                id="패스_1308"
                fill={theme.color.ICON}
                d="M727.555 196.652h-13.824a1.792 1.792 0 0 0-1.792 1.792v9.033a1.792 1.792 0 0 0 1.792 1.792h.169l-1.2 2.826 4.617-2.826h10.235a1.792 1.792 0 0 0 1.792-1.792v-9.033a1.792 1.792 0 0 0-1.789-1.792z"
              />
              <path
                id="선_280"
                d="M0 0L10.672 0"
                fill="none"
                stroke={theme.color.WHITE}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(715.307 200.336)"
              />
              <path
                id="선_281"
                d="M0 0L10.672 0"
                fill="none"
                stroke={theme.color.WHITE}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(715.307 202.96)"
              />
              <path
                id="선_282"
                d="M0 0L10.672 0"
                fill="none"
                stroke={theme.color.WHITE}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(715.307 205.585)"
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
          <path id="사각형_1959" fill="none" d="M0 0H24V24H0z" />
          <g id="그룹_987" transform="translate(-708.939 -191.652)">
            <path
              id="선_280"
              d="M0 0L10.672 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(715.307 200.336)"
            />
            <path
              id="선_281"
              d="M0 0L10.672 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(715.307 202.96)"
            />
            <path
              id="선_282"
              d="M0 0L10.672 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(715.307 205.585)"
            />
            <path
              id="패스_1308"
              d="M727.555 196.652h-13.824a1.792 1.792 0 0 0-1.792 1.792v9.033a1.792 1.792 0 0 0 1.792 1.792h.169l-1.2 2.826 4.617-2.826h10.235a1.792 1.792 0 0 0 1.792-1.792v-9.033a1.792 1.792 0 0 0-1.789-1.792z"
              fill="none"
              stroke={theme.color.ICON}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default CommunityIcon;
