import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const ChatIcon = ({ color, fill, size = 24, ...props }: Props) => {
  if (fill) {
    return (
      <ThemeConsumer>
        {(theme) => (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            id="chat_select"
            width={size}
            height={size}
            viewBox="0 0 24 24"
          >
            <path id="사각형_1961" fill="none" d="M0 0H24V24H0z" />
            <g id="그룹_36735" transform="translate(1.829 2.701)">
              <g id="그룹_36744">
                <path
                  id="패스_264292"
                  d="M17.871 7.005C17.871 3.142 13.863 0 8.936 0S0 3.142 0 7.005a6.421 6.421 0 0 0 2.791 5.088v3.551a.382.382 0 0 0 .651.27l2.35-2.35a11.123 11.123 0 0 0 3.144.446c4.927 0 8.935-3.142 8.935-7.005M3.393 11.588A5.71 5.71 0 0 1 .764 7.005C.764 3.564 4.43.763 8.936.763s8.172 2.8 8.172 6.242-3.666 6.242-8.172 6.242a10.365 10.365 0 0 1-3.136-.478.373.373 0 0 0-.384.094l-1.861 1.86v-2.8a.385.385 0 0 0-.161-.333"
                  fill={theme.color.ICON}
                  stroke={theme.color.ICON}
                  strokeWidth=".25px"
                />
                <path
                  id="패스_264293"
                  d="M21.42 13.681a4.553 4.553 0 0 0-1.063-3A8.943 8.943 0 0 1 17.62 14.9a12.437 12.437 0 0 1-3.841 1.864c-4.19.864-5.8-.007-5.766 0s-.138.021 0 .18a8.068 8.068 0 0 0 6.062 2.508 9.137 9.137 0 0 0 2.539-.355l1.886 1.887a.381.381 0 0 0 .269.111.381.381 0 0 0 .382-.381v-2.855a5.29 5.29 0 0 0 2.272-4.178"
                  fill={theme.color.ICON}
                  stroke={theme.color.ICON}
                  strokeWidth=".25px"
                  transform="translate(-1.77 -2.334)"
                />
                <path
                  id="패스_264427"
                  fill={theme.color.ICON}
                  d="M2.424 2.819L4.436 1.5 6.62.513l1.951-.3 2.459.5 2.57 1.05 2.752 2.21.976 2.2v2.338L16 10.807l-2.08 1.732-3.089.824H7.853l-2.432-.3-.985 1.237-1.3.883v-3.051L1.9 10.807.848 9.509.262 7.688V5.973l.77-1.544z"
                />
              </g>
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
          id="chat_default"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <defs>
            <clipPath id="clipPath">
              <path
                id="사각형_28750"
                d="M0 0H19.649V18.761H0z"
                fill={theme.color.ICON}
                stroke={theme.color.ICON}
                strokeWidth=".25px"
              />
            </clipPath>
          </defs>
          <path id="사각형_1961" fill="none" d="M0 0H24V24H0z" />
          <g id="그룹_36735" transform="translate(1.829 2.701)">
            <g id="그룹_36692" clipPath="url(#clipPath)">
              <path
                id="패스_264292"
                d="M17.871 7.005C17.871 3.142 13.863 0 8.936 0S0 3.142 0 7.005a6.421 6.421 0 0 0 2.791 5.088v3.551a.382.382 0 0 0 .651.27l2.35-2.35a11.123 11.123 0 0 0 3.144.446c4.927 0 8.935-3.142 8.935-7.005M3.393 11.588A5.71 5.71 0 0 1 .764 7.005C.764 3.564 4.43.763 8.936.763s8.172 2.8 8.172 6.242-3.666 6.242-8.172 6.242a10.365 10.365 0 0 1-3.136-.478.373.373 0 0 0-.384.094l-1.861 1.86v-2.8a.385.385 0 0 0-.161-.333"
                fill={theme.color.ICON}
                stroke={theme.color.ICON}
                strokeWidth=".25px"
              />
              <path
                id="패스_264293"
                d="M21.42 13.681a4.906 4.906 0 0 0-1.144-3.1.381.381 0 1 0-.593.48 4.156 4.156 0 0 1 .974 2.621 4.577 4.577 0 0 1-2.11 3.672.382.382 0 0 0-.162.311v2.128L16.991 18.4a.379.379 0 0 0-.386-.094 8.327 8.327 0 0 1-2.53.387 7.3 7.3 0 0 1-5.486-2.246.382.382 0 1 0-.575.5 8.068 8.068 0 0 0 6.062 2.508 9.137 9.137 0 0 0 2.539-.355l1.885 1.884a.381.381 0 0 0 .269.111.381.381 0 0 0 .382-.381v-2.855a5.29 5.29 0 0 0 2.272-4.178"
                fill={theme.color.ICON}
                stroke={theme.color.ICON}
                strokeWidth=".25px"
                transform="translate(-1.77 -2.334)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default ChatIcon;
