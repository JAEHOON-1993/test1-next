import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const ToolsIcon = ({ size = 50, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="tools_icon_36"
          width={size}
          height={size}
          viewBox="0 0 36 36"
        >
          <path id="사각형_2003" fill="none" d="M0 0H36V36H0z" />
          <g id="그룹_734" transform="translate(-13.387 -667.832)">
            <g id="그룹_733" transform="translate(19.047 673.832)">
              <g id="그룹_732">
                <g id="그룹_728" transform="translate(15.326 15.322)">
                  <path
                    id="패스_1206"
                    d="M41.59 698.937a1.6 1.6 0 0 1-1.131-.468l-7.793-7.793a.645.645 0 0 1 0-.913l2.315-2.315a.645.645 0 0 1 .913 0l7.793 7.793a1.6 1.6 0 0 1 0 2.262l-.967.966a1.6 1.6 0 0 1-1.13.468zm-8.2-8.717l7.658 7.658a.767.767 0 0 0 1.078 0l.967-.968a.763.763 0 0 0 0-1.077l-7.658-7.658z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-32.477 -687.259)"
                  />
                </g>
                <g id="그룹_729" transform="translate(14.104 14.1)">
                  <path
                    id="패스_1207"
                    d="M33.438 690.305a.418.418 0 0 1-.3-.123l-1.612-1.611a.419.419 0 0 1 .592-.592l1.317 1.316 1.075-1.075-1.31-1.32a.419.419 0 1 1 .592-.592l1.611 1.612a.418.418 0 0 1 0 .592l-1.666 1.666a.418.418 0 0 1-.299.127z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-31.407 -686.189)"
                  />
                </g>
                <g id="그룹_730">
                  <path
                    id="패스_1208"
                    d="M28.253 692.24a9.206 9.206 0 1 1 6.509-15.716 9.206 9.206 0 0 1-6.509 15.716zm0-17.57a8.361 8.361 0 1 0 5.917 2.447 8.342 8.342 0 0 0-5.917-2.447z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-19.047 -673.832)"
                  />
                </g>
                <g id="그룹_731" transform="translate(2.24 2.24)">
                  <path
                    id="패스_1209"
                    d="M27.975 689.723a6.965 6.965 0 1 1 4.925-11.891 6.965 6.965 0 0 1-4.925 11.891zm0-13.294a6.325 6.325 0 1 0 4.478 1.851 6.317 6.317 0 0 0-4.478-1.852z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    strokeWidth="0.5px"
                    transform="translate(-21.01 -675.795)"
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

export default ToolsIcon;
