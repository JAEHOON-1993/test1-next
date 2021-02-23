import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const CallPopupIcon = ({ size = 100 }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <path id="사각형_28856" d="M0 0H100V100H0z" fill="none" />
          <g
            id="타원_3180"
            fill="none"
            stroke={theme.color.ICON}
            stroke-width="2px"
            transform="translate(6.398 50)"
          >
            <circle cx="4" cy="4" r="4" stroke="none" />
            <circle cx="4" cy="4" r="3" fill="none" />
          </g>
          <g id="cross-1" transform="translate(12.453 38.671)">
            <path
              id="line"
              d="M0 0L0 5.048"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(2.524)"
            />
            <path
              id="line-2"
              d="M0 0L5.048 0"
              fill="none"
              stroke={theme.color.ICON}
              strokeWidth="2px"
              strokeLinejoin="round"
              strokeLinecap="round"
              transform="translate(0 2.524)"
            />
          </g>
          <g id="cross-1-2" transform="rotate(135 38.78 32.951)">
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
          <g id="그룹_37639" transform="translate(-1456.471 -849.836)">
            <g id="그룹_37631" transform="translate(1479.471 882.345)">
              <path
                id="패스_264808"
                d="M1512.667 925.346a17.482 17.482 0 0 1-4.575-.61c-5.848-1.585-11.523-5.1-16.869-10.447-8.418-8.418-10.979-16.732-11.642-22.226a15.976 15.976 0 0 1 6.169-14.483l.407-.312a4.873 4.873 0 0 1 6.247.408l4.417 4.414a4.792 4.792 0 0 1 .051 6.708l-2.068 2.686a4.568 4.568 0 0 0-.577 4.566c2.041 4.807 6.576 13.121 14.04 14.786a4.65 4.65 0 0 0 3.84-.887l3.346-2.573a4.788 4.788 0 0 1 6.708.053l4.414 4.414a4.874 4.874 0 0 1 .369 6.306l-.286.36a17.852 17.852 0 0 1-13.991 6.837zm-30.924-33.546c.625 5.152 3.04 12.969 11.021 20.946 5.075 5.074 10.423 8.4 15.9 9.884a15.577 15.577 0 0 0 16.291-5.473l.282-.36a2.671 2.671 0 0 0-.2-3.414l-4.414-4.414a2.6 2.6 0 0 0-3.68 0l-.107.092-3.4 2.615a6.81 6.81 0 0 1-5.646 1.282c-8.412-1.874-13.367-10.866-15.571-16.06a6.752 6.752 0 0 1 .86-6.743l2.2-2.847a2.606 2.606 0 0 0 0-3.68l-4.417-4.417a2.676 2.676 0 0 0-3.379-.217l-.4.309a13.8 13.8 0 0 0-5.336 12.5z"
                fill={theme.color.ICON}
                transform="translate(-1479.471 -876.326)"
              />
            </g>
            <g id="그룹_37633" transform="translate(1492.547 873.278)">
              <g id="그룹_37632">
                <path
                  id="패스_264809"
                  d="M1521.676 916.986a1.09 1.09 0 0 1-.854-1.764 24.544 24.544 0 0 0-35.162-33.91 1.09 1.09 0 0 1-1.413-1.66 26.723 26.723 0 0 1 38.285 36.92 1.1 1.1 0 0 1-.856.414z"
                  fill={theme.color.ICON}
                  transform="translate(-1483.867 -873.278)"
                />
              </g>
            </g>
            <g id="그룹_37638" transform="translate(1502.344 886.037)">
              <g id="그룹_37634" transform="translate(0 3.169)">
                <path
                  id="패스_264810"
                  d="M1490.285 895.97a1.089 1.089 0 0 1-1.065-.872c-.872-4.235 2.546-6.4 4.477-6.957a3.742 3.742 0 0 0 2.418-1.606 3.691 3.691 0 1 0-6.7-1.288 1.089 1.089 0 1 1-2.132.44 5.87 5.87 0 1 1 6.931 4.566c-.25.08-2.784.907-2.945 3.311l8.162-1.677a1.089 1.089 0 1 1 .44 2.132l-9.367 1.928a1.1 1.1 0 0 1-.219.023z"
                  fill={theme.color.ICON}
                  transform="translate(-1487.16 -878.632)"
                />
              </g>
              <g id="그룹_37637" transform="translate(12.443)">
                <g id="그룹_37635" transform="translate(0 1.493)">
                  <path
                    id="패스_264811"
                    d="M1494 887.858a1.089 1.089 0 0 1-1.065-.868l-1.568-7.612a1.09 1.09 0 0 1 2.136-.437l1.344 6.541 6.19-1.273a1.09 1.09 0 1 1 .44 2.136l-7.258 1.493a1.081 1.081 0 0 1-.219.02z"
                    fill={theme.color.ICON}
                    transform="translate(-1491.343 -878.069)"
                  />
                </g>
                <g id="그룹_37636" transform="translate(7.257)">
                  <path
                    id="패스_264812"
                    d="M1497.771 893.84a1.089 1.089 0 0 1-1.065-.869l-2.9-14.1a1.089 1.089 0 0 1 2.133-.437l2.9 14.093a1.085 1.085 0 0 1-.845 1.285.949.949 0 0 1-.223.028z"
                    fill={theme.color.ICON}
                    transform="translate(-1493.783 -877.567)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default CallPopupIcon;
