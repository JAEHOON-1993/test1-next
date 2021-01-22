import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const MediaIcon = ({ size = 50, ...props }: Props) => {
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
          <g id="그룹_514" transform="translate(3 9.638)">
            <g id="그룹_509" transform="translate(13.069 4.95)">
              <g id="그룹_508">
                <path
                  id="패스_1039"
                  d="M395.7 1226.032a.488.488 0 0 1-.488-.488v-6.663a.489.489 0 0 1 .733-.423l5.771 3.332a.489.489 0 0 1 0 .846l-5.771 3.331a.486.486 0 0 1-.245.065zm.488-6.306v4.973l4.307-2.487z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-395.208 -1218.393)"
                />
              </g>
            </g>
            <g id="그룹_513">
              <g id="그룹_510">
                <path
                  id="패스_1040"
                  d="M415.854 1232.042h-29.986a.488.488 0 0 1-.488-.488v-16.4a.488.488 0 0 1 .488-.487h29.986a.487.487 0 0 1 .487.487v16.4a.487.487 0 0 1-.487.488zm-29.5-.975h29.01v-15.421h-29.01z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-385.38 -1214.671)"
                />
              </g>
              <g id="그룹_511" transform="translate(14.993 16.396)">
                <path
                  id="패스_1041"
                  d="M397.143 1232.158a.487.487 0 0 1-.488-.488v-4.182a.488.488 0 0 1 .976 0v4.182a.488.488 0 0 1-.488.488z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-396.655 -1227.001)"
                />
              </g>
              <g id="그룹_512" transform="translate(9.49 20.577)">
                <path
                  id="패스_1042"
                  d="M404.01 1231.121h-11.005a.488.488 0 1 1 0-.976h11.005a.488.488 0 0 1 0 .976z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-392.517 -1230.145)"
                />
              </g>
            </g>
          </g>
          <path id="사각형_1990" fill="none" d="M0 0H36V37H0z" />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default MediaIcon;
