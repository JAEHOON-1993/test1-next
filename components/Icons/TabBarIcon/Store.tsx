import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const StoreIcon = ({ color, fill, size = 24, ...props }: Props) => {
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
            <g id="그룹_503" transform="translate(452.029 -1511.5)">
              <path
                id="패스_1029"
                fill={theme.color.PRIMARY}
                stroke={theme.color.WHITE}
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M-409.9 1673v9.081h-17.94v-9.07"
                transform="translate(-20.853 -150.151)"
              />
              <path
                id="패스_1030"
                fill={theme.color.PRIMARY}
                stroke={theme.color.WHITE}
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M-429.431 1522.593l-1.206-6.739h-18.183l-1.206 6.739a3.46 3.46 0 0 0 3.456 3.456 3.461 3.461 0 0 0 3.42-2.959 3.461 3.461 0 0 0 3.42 2.959 3.461 3.461 0 0 0 3.424-2.991 3.461 3.461 0 0 0 3.424 2.991 3.46 3.46 0 0 0 3.456-3.456z"
                transform="translate(0 -.333)"
              />
              <path
                id="선_231"
                d="M0 7.349L0.452 0"
                stroke={theme.color.WHITE}
                strokeMiterlimit="10"
                fill="none"
                transform="translate(-443.167 1515.5)"
              />
              <path
                id="선_232"
                d="M0.452 7.342L0 0"
                stroke={theme.color.WHITE}
                strokeMiterlimit="10"
                fill="none"
                transform="translate(-436.757 1515.5)"
              />
            </g>
            <path id="사각형_1961" fill="none" d="M0 0H24V24H0z" />
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
          <g id="그룹_503" transform="translate(452.029 -1511.5)">
            <path
              id="패스_1029"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M-409.9 1673v6.951h-17.94v-6.943"
              transform="translate(-20.853 -148.022)"
            />
            <path
              id="패스_1030"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M-429.431 1522.593l-1.206-6.739h-18.183l-1.206 6.739a3.46 3.46 0 0 0 3.456 3.456 3.461 3.461 0 0 0 3.42-2.959 3.461 3.461 0 0 0 3.42 2.959 3.461 3.461 0 0 0 3.424-2.991 3.461 3.461 0 0 0 3.424 2.991 3.46 3.46 0 0 0 3.456-3.456z"
              transform="translate(0 -.333)"
            />
            <path
              id="선_231"
              d="M0 7.349L0.452 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeMiterlimit="10"
              transform="translate(-443.167 1515.5)"
            />
            <path
              id="선_232"
              d="M0.452 7.342L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeMiterlimit="10"
              transform="translate(-436.757 1515.5)"
            />
          </g>
          <path id="사각형_1961" fill="none" d="M0 0H24V24H0z" />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default StoreIcon;
