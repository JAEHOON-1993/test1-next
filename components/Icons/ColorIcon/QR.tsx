import { ThemeConsumer } from 'styled-components';
import { Props } from './types';

const QRIcon: React.FC<Props> = ({ size = 50, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="QR_icon_50"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <defs>
            <clipPath id="clipPath">
              <path
                id="사각형_28797"
                fill="none"
                stroke="#707070"
                strokeWidth="1.7px"
                d="M0 0H34V34H0z"
                transform="translate(.015 .015)"
              />
            </clipPath>
          </defs>
          <g id="교육" transform="translate(.172 -.363)">
            <path
              id="사각형_1991"
              fill="none"
              d="M0 0H50V50H0z"
              transform="translate(-.172 .363)"
            />
          </g>
          <g id="그룹_36733" transform="translate(8.152 8.045)">
            <g id="그룹_36758" transform="translate(-.167 -.06)">
              <g id="그룹_36759">
                <g id="그룹_36758-2" clipPath="url(#clipPath)">
                  <path
                    id="패스_264436"
                    d="M11.214.75h-5.5A4.984 4.984 0 0 0 .75 5.72v5.494"
                    fill="none"
                    strokeWidth="1.7px"
                    stroke={theme.color.BLACK}
                    strokeMiterlimit="10"
                    transform="translate(.296 .296)"
                  />
                  <path
                    id="패스_264437"
                    d="M26.714 11.214V5.72A4.984 4.984 0 0 0 21.746.75h-5.5"
                    fill="none"
                    strokeWidth="1.7px"
                    stroke={theme.color.BLACK}
                    strokeMiterlimit="10"
                    transform="translate(6.422 .296)"
                  />
                  <path
                    id="패스_264438"
                    d="M16.25 26.714h5.5a4.984 4.984 0 0 0 4.968-4.97V16.25"
                    fill="none"
                    strokeWidth="1.7px"
                    stroke={theme.color.BLACK}
                    strokeMiterlimit="10"
                    transform="translate(6.422 6.422)"
                  />
                  <path
                    id="패스_264439"
                    d="M.75 16.25v5.494a4.984 4.984 0 0 0 4.968 4.97h5.5"
                    fill="none"
                    strokeWidth="1.7px"
                    stroke={theme.color.BLACK}
                    strokeMiterlimit="10"
                    transform="translate(.296 6.422)"
                  />
                </g>
              </g>
              <path
                id="사각형_28786"
                fill={theme.color.PRIMARY}
                d="M0 0H33.83V3.428H0z"
                transform="translate(.167 15.473)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default QRIcon;
