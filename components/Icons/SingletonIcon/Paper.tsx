import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const PaperIcon: React.FC<Props> = ({ size = 100, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="singletone_paper_popup_icon_100"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="사각형_28951"
                d="M0 0H48.906V52.52H0z"
                fill={theme.color.ICON}
              />
            </clipPath>
          </defs>
          <path id="사각형_28856" d="M0 0H100V100H0z" fill="none" />
          <g id="그룹_37316" transform="translate(31.549 26.867)">
            <g
              id="그룹_37315"
              clip-path="url(#clip-path)"
              transform="translate(-.001)"
            >
              <path
                id="패스_264678"
                d="M36.711 32.185a1.019 1.019 0 0 0-1.019 1.015v17.28H2.036V10.922l7.866.012a1.019 1.019 0 0 0 1.019-1.019V2.041h24.771v17.51a1.018 1.018 0 0 0 2.036 0V1.022A1.019 1.019 0 0 0 36.711.005H9.924C9.917.005 9.909 0 9.9 0a1.03 1.03 0 0 0-.11.022 1.038 1.038 0 0 0-.28.057 1.012 1.012 0 0 0-.3.2c-.01.01-.021.012-.028.021L.3 9.183a.883.883 0 0 0-.066.1.991.991 0 0 0-.152.226v.005a1.043 1.043 0 0 0-.066.329C.01 9.862 0 9.879 0 9.9v41.6a1.019 1.019 0 0 0 1.017 1.02h35.694a1.019 1.019 0 0 0 1.017-1.02V33.2a1.019 1.019 0 0 0-1.017-1.019M8.884 3.48V8.9l-5.41-.009z"
                fill={theme.color.ICON}
              />
              <path
                id="패스_264679"
                d="M36.2 14.242a1.011 1.011 0 0 0-.718-.3 1.011 1.011 0 0 0-.721.3L20.706 28.294a.99.99 0 0 0-.2.3.889.889 0 0 0-.037.1 1.135 1.135 0 0 0-.045.126l-.774 3.991a1.02 1.02 0 0 0 1 1.212.984.984 0 0 0 .195-.023l3.991-.774c.043-.009.083-.031.124-.044a.936.936 0 0 0 .106-.039.988.988 0 0 0 .3-.2L39.413 18.9a1.019 1.019 0 0 0 0-1.44zM22.06 31.089l.507.505-.628.122zm15.194-12.913L24.641 30.79l-1.775-1.775L35.478 16.4z"
                fill={theme.color.ICON}
                transform="translate(5.681 4.035)"
              />
              <path
                id="패스_264680"
                d="M39.238 14.732l-3.216-3.216a1.016 1.016 0 0 0-1.44 0l-1.906 1.906a1.018 1.018 0 0 0 0 1.439l3.216 3.216a1.016 1.016 0 0 0 1.44 0l1.906-1.9a1.019 1.019 0 0 0 0-1.44m-2.16.719l-.465.465-1.777-1.775.467-.465z"
                fill={theme.color.ICON}
                transform="translate(9.37 3.246)"
              />
              <path
                id="패스_264681"
                d="M30.091 12.29H5.212a1.018 1.018 0 1 0 0 2.036h24.88a1.018 1.018 0 1 0 0-2.036"
                fill={theme.color.ICON}
                transform="translate(1.213 3.556)"
              />
              <path
                id="패스_264682"
                d="M31.109 18.167a1.019 1.019 0 0 0-1.019-1.019H5.21a1.019 1.019 0 0 0 0 2.037h24.88a1.019 1.019 0 0 0 1.019-1.019"
                fill={theme.color.ICON}
                transform="translate(1.213 4.962)"
              />
              <path
                id="패스_264683"
                d="M25.542 23.024A1.019 1.019 0 0 0 24.524 22H5.21a1.019 1.019 0 0 0 0 2.037h19.314a1.019 1.019 0 0 0 1.019-1.019"
                fill={theme.color.ICON}
                transform="translate(1.213 6.368)"
              />
              <path
                id="패스_264684"
                d="M21.74 26.863H5.21a1.019 1.019 0 0 0 0 2.037h16.53a1.019 1.019 0 1 0 0-2.037"
                fill={theme.color.ICON}
                transform="translate(1.213 7.773)"
              />
              <path
                id="패스_264685"
                d="M4.193 32.74a1.019 1.019 0 0 0 1.019 1.019h24.88a1.019 1.019 0 0 0 0-2.037H5.212a1.019 1.019 0 0 0-1.019 1.018"
                fill={theme.color.ICON}
                transform="translate(1.213 9.179)"
              />
            </g>
          </g>
          <g
            id="타원_3181"
            fill="none"
            stroke={theme.color.ICON}
            strokeWidth="2px"
            transform="translate(80.398 25)"
          >
            <circle cx="3" cy="3" r="3" stroke="none" />
            <circle cx="3" cy="3" r="2" fill="none" />
          </g>
          <g
            id="타원_3182"
            fill="none"
            stroke={theme.color.ICON}
            strokeWidth="2px"
            transform="translate(17.398 18)"
          >
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
            <circle cx="4.5" cy="4.5" r="3.5" fill="none" />
          </g>
          <g id="cross-1" transform="rotate(135 -1.227 33.368)">
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
          <g id="cross-1-2" transform="rotate(135 36.386 23.173)">
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
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default PaperIcon;
