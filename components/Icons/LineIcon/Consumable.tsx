import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const ConsumableIcon = ({ size = 50, ...props }: Props) => {
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
          <path id="사각형_1996" d="M0 0H36V36H0z" fill="none" />
          <g id="그룹_864" transform="translate(-1438.686 -831.711)">
            <g id="그룹_818" transform="translate(1443.11 837.85)">
              <g id="그룹_815" transform="translate(.017)">
                <path
                  id="패스_1253"
                  d="M1454.927 845.026a.473.473 0 0 1-.13-.017l-11.314-3.1a.491.491 0 0 1 0-.947l11.314-3.1a.5.5 0 0 1 .258 0l11.314 3.1a.491.491 0 0 1 0 .947l-11.314 3.1a.463.463 0 0 1-.128.017zm-9.456-3.587l9.456 2.588 9.456-2.588-9.456-2.589z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-1443.123 -837.85)"
                />
              </g>
              <g id="그룹_816" transform="translate(11.331 6.195)">
                <path
                  id="패스_1254"
                  d="M1452.059 858.349a.49.49 0 0 1-.49-.492v-14.892a.49.49 0 1 1 .981 0v14.892a.491.491 0 0 1-.491.492z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-1451.569 -842.475)"
                />
              </g>
              <g id="그룹_817" transform="translate(0 3.373)">
                <path
                  id="빼기_21"
                  d="M19090.4 8412.184a.58.58 0 0 1-.129-.015l-11.312-3.1a.49.49 0 0 1-.365-.47l-.014-14.9c0-.141.254-.205.488-.205s.49.064.49.205l.02 14.53 10.822 2.963 5.51-1.508a5.7 5.7 0 0 0 .117.983l-5.5 1.508a.58.58 0 0 1-.127.009zm11.8-8.433c-.178-.018-.359-.026-.543-.026-.139 0-.281.006-.437.017l-.01-10.049c0-.141.254-.205.49-.205s.492.064.492.205l.01 10.058z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  strokeWidth="0.5px"
                  transform="translate(-19078.576 -8393.488)"
                />
              </g>
            </g>
          </g>
          <g
            id="타원_465"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="1.5px"
            transform="translate(21 19)"
          >
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
            <circle cx="6.5" cy="6.5" r="5.75" fill="none" />
          </g>
          <path
            id="패스_1288"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeLinecap="round"
            strokeWidth="1.5px"
            d="M2123.252 5343.79l2.649 2.426h3.813"
            transform="translate(-2098.516 -5320.596)"
          />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default ConsumableIcon;
