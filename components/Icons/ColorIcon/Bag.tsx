import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const BagIcon: React.FC<Props> = ({ size = 50, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="icon11"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <path
            id="사각형_30152"
            d="M0 0H5V2H0z"
            fill={theme.color.PRIMARY}
            transform="translate(22 25)"
          />
          <path
            id="패스_264828"
            d="M-4036.281-16304.5v-7.107h15.6v6.586h-2.9v-4.107h-9.921v4.107z"
            fill={theme.color.PRIMARY}
            transform="translate(4053 16320)"
          />
          <rect
            id="사각형_28855"
            width="13"
            height="6"
            fill={theme.color.PRIMARYSUB}
            rx="3"
            transform="rotate(90 7.5 36.5)"
          />
          <path id="사각형_28856" fill="none" d="M0 0H50V50H0z" />
          <g id="그룹_37684" transform="translate(-1100.164 -371.73)">
            <g id="그룹_37678" transform="translate(1119.07 382.153)">
              <path
                id="패스_264822"
                d="M1125.791 386.788h-10.211a.52.52 0 0 1-.521-.521v-4.309a.52.52 0 0 1 .521-.521h10.211a.52.52 0 0 1 .521.521v4.309a.52.52 0 0 1-.521.521zm-9.69-1.041h9.171v-3.269h-9.172z"
                fill={theme.color.BLACK}
                stroke={theme.color.BLACK}
                strokeWidth=".3px"
                transform="translate(-1115.059 -381.438)"
              />
            </g>
            <g id="그룹_37679" transform="translate(1116.391 379.731)">
              <path
                id="패스_264823"
                d="M1129.4 387.5h-15.71a.52.52 0 0 1-.519-.521v-6.729a.519.519 0 0 1 .519-.519h15.71a.52.52 0 0 1 .521.519v6.732a.52.52 0 0 1-.521.518zm-15.187-1.041h14.666v-5.691h-14.666z"
                fill={theme.color.BLACK}
                stroke={theme.color.BLACK}
                strokeWidth=".3px"
                transform="translate(-1113.171 -379.731)"
              />
            </g>
            <g id="그룹_37680" transform="translate(1105.481 386.462)">
              <path
                id="패스_264824"
                d="M1143.469 411.626H1106a.52.52 0 0 1-.519-.521V385a.521.521 0 0 1 .519-.521h37.469a.52.52 0 0 1 .519.521v26.11a.519.519 0 0 1-.519.516zm-36.948-1.04h36.427v-25.07h-36.427z"
                fill={theme.color.BLACK}
                stroke={theme.color.BLACK}
                strokeWidth=".3px"
                transform="translate(-1105.481 -384.475)"
              />
            </g>
            <g id="그룹_37681" transform="translate(1121.16 395.777)">
              <path
                id="패스_264825"
                d="M1123.161 395.073h-6.108a.52.52 0 0 1-.521-.521v-2.991a.52.52 0 0 1 .521-.521h6.108a.52.52 0 0 1 .521.521v2.991a.52.52 0 0 1-.521.521zm-5.587-1.04h5.068v-1.952h-5.068z"
                fill={theme.color.BLACK}
                stroke={theme.color.BLACK}
                strokeWidth=".3px"
                transform="translate(-1116.532 -391.041)"
              />
            </g>
            <g id="그룹_37682" transform="translate(1105.481 396.812)">
              <path
                id="패스_264826"
                d="M1121.681 392.811H1106a.521.521 0 0 1 0-1.041h15.68a.521.521 0 1 1 0 1.041z"
                fill={theme.color.BLACK}
                stroke={theme.color.BLACK}
                strokeWidth=".3px"
                transform="translate(-1105.481 -391.77)"
              />
            </g>
            <g id="그룹_37683" transform="translate(1127.269 396.812)">
              <path
                id="패스_264827"
                d="M1137.038 392.811h-15.68a.521.521 0 0 1 0-1.041h15.68a.521.521 0 0 1 0 1.041z"
                fill={theme.color.BLACK}
                stroke={theme.color.BLACK}
                strokeWidth=".3px"
                transform="translate(-1120.838 -391.77)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default BagIcon;
