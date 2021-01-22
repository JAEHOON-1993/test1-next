import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const FashionIcon = ({ size = 50, ...props }: Props) => {
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
          <g id="fashion_icon_36" transform="translate(.265)">
            <path id="사각형_1995" fill="none" d="M0 0H36V36H0z" />
            <g id="그룹_667" transform="translate(-1817.711 -451.768)">
              <g id="그룹_663" transform="translate(1824.899 457.323)">
                <path
                  id="패스_1154"
                  d="M1844.046 473.77H1844a.49.49 0 0 1-.448-.532c.458-5.45-.5-9.5-2.839-12.051a9.609 9.609 0 0 0-13.717 0c-2.342 2.548-3.3 6.6-2.837 12.051a.492.492 0 0 1-.981.082c-.483-5.734.559-10.041 3.094-12.8a10.592 10.592 0 0 1 15.167 0c2.537 2.758 3.577 7.065 3.094 12.8a.492.492 0 0 1-.487.45z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-1823.066 -457.323)"
                />
              </g>
              <g id="그룹_664" transform="translate(1817.711 472.786)">
                <path
                  id="패스_1155"
                  d="M1835.693 478.65c-14.8 0-17.743-3.192-17.861-3.328a.494.494 0 0 1-.054-.572c2.162-3.7 7.326-5.785 7.545-5.873a.492.492 0 0 1 .364.914c-.048.02-4.722 1.913-6.838 5.1.99.689 4.968 2.772 16.844 2.772 11.851 0 15.849-2.085 16.842-2.773-2.116-3.189-6.79-5.081-6.838-5.1a.492.492 0 1 1 .365-.914c.218.087 5.383 2.175 7.544 5.873a.49.49 0 0 1-.054.572c-.117.137-3.066 3.329-17.859 3.329z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-1817.711 -468.842)"
                />
              </g>
              <g id="그룹_665" transform="translate(1825.013 472.786)">
                <path
                  id="패스_1156"
                  d="M1833.83 471.571c-7.163 0-10.3-1.734-10.43-1.807a.492.492 0 0 1 .484-.858c.03.017 3.079 1.681 9.945 1.681s9.916-1.663 9.945-1.681a.492.492 0 0 1 .484.858c-.128.072-3.266 1.807-10.428 1.807z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-1823.151 -468.843)"
                />
              </g>
              <g id="그룹_666" transform="translate(1825.013 469.012)">
                <path
                  id="패스_1157"
                  d="M1833.83 468.759c-7.163 0-10.3-1.734-10.43-1.807a.493.493 0 0 1 .484-.858c.03.017 3.079 1.681 9.945 1.681s9.916-1.663 9.945-1.681a.493.493 0 0 1 .484.858c-.128.072-3.266 1.807-10.428 1.807z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  stroke-width="0.5px"
                  transform="translate(-1823.151 -466.031)"
                />
              </g>
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default FashionIcon;
