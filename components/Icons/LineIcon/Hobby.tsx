import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const HobbyIcon = ({ size = 50, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="hobby_icon_36"
          width={size}
          height={size}
          viewBox="0 0 36 36"
        >
          <path id="사각형_2001" fill="none" d="M0 0H36V36H0z" />
          <g id="그룹_648" transform="translate(-1254.863 -1700.509)">
            <g id="그룹_642" transform="translate(1258.863 1731.667)">
              <path
                id="패스_1137"
                d="M1287.363 1725.109h-28a.5.5 0 0 1 0-1h28a.5.5 0 0 1 0 1z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1258.863 -1724.109)"
              />
            </g>
            <g id="그룹_643" transform="translate(1260.273 1703.509)">
              <path
                id="패스_1138"
                d="M1260.4 1732.6a.5.5 0 0 1-.227-.054.5.5 0 0 1-.22-.674l14.313-28.085a.5.5 0 0 1 .893.455l-14.313 28.086a.5.5 0 0 1-.446.272z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1259.894 -1703.509)"
              />
            </g>
            <g id="그룹_644" transform="translate(1271.163 1703.509)">
              <path
                id="패스_1139"
                d="M1280.235 1727.919a.5.5 0 0 1-.447-.273l-11.873-23.41a.5.5 0 0 1 .893-.452l11.873 23.408a.5.5 0 0 1-.22.674.494.494 0 0 1-.226.053z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1267.862 -1703.509)"
              />
            </g>
            <g id="그룹_645" transform="translate(1283.036 1726.918)">
              <path
                id="패스_1140"
                d="M1279.421 1726.313a.5.5 0 0 1-.447-.275l-2.373-4.676a.5.5 0 0 1 .892-.454l2.373 4.677a.5.5 0 0 1-.446.727z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1276.548 -1720.635)"
              />
            </g>
            <g id="그룹_646" transform="translate(1272.863 1706.859)">
              <path
                id="패스_1141"
                d="M1269.605 1731.768a.5.5 0 0 1-.5-.5v-24.808a.5.5 0 1 1 1 0v24.808a.5.5 0 0 1-.5.5z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1269.105 -1705.96)"
              />
            </g>
            <g id="그룹_647" transform="translate(1266.903 1718.624)">
              <path
                id="패스_1142"
                d="M1277.165 1728.609a.5.5 0 0 1-.5-.5c0-6.8-2.5-12.54-5.462-12.54s-5.455 5.742-5.455 12.54a.5.5 0 0 1-1 0c0-7.593 2.836-13.542 6.457-13.542s6.463 5.948 6.463 13.542a.5.5 0 0 1-.503.5z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1264.745 -1714.567)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default HobbyIcon;
