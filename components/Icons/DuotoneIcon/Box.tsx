import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const BoxIcon: React.FC<Props> = ({ size = 100, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="popup_icon_2_100"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <path id="사각형_1944" d="M0 0H100V100H0z" fill="none" />
          <g
            id="타원_445"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="2px"
            transform="translate(87 18)"
          >
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
            <circle cx="4.5" cy="4.5" r="3.5" fill="none" />
          </g>
          <g
            id="타원_446"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="2px"
            transform="translate(3 35)"
          >
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="2.5" fill="none" />
          </g>
          <g id="cross-1" transform="translate(69.966 7.997)">
            <path
              id="line"
              d="M0 0L0 5.688"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2.844)"
            />
            <path
              id="line-2"
              d="M5.688 0L0 0"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 2.844)"
            />
          </g>
          <g id="cross-1-2" transform="translate(17.628 15.093)">
            <path
              id="line-3"
              d="M0 0L0 5.688"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2.844)"
            />
            <path
              id="line-4"
              d="M5.688 0L0 0"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 2.844)"
            />
          </g>
          <g id="그룹_432" transform="translate(17.925 27.838)">
            <path
              id="패스_986"
              fill="#c3dcff"
              d="M8.129 764.645l6.771 11.291L7 788.355l8.764 1.535-.86 18.788 25.968 6.774 22.581-6.774.677-19.86 6.1-.463-5.814-10.889 6.943-12.821L46.517 759l-6.774 11.29L31.839 759z"
              transform="translate(-7 -758.033)"
            />
            <g id="그룹_431" transform="translate(.836)">
              <g id="그룹_426" transform="translate(6.88 11.139)">
                <g id="그룹_423">
                  <path
                    id="패스_979"
                    d="M1468.061 853.01a1 1 0 0 1-.275-.037l-23.9-6.543a1.038 1.038 0 0 1 0-2l23.9-6.543a1.053 1.053 0 0 1 .546 0l23.9 6.543a1.037 1.037 0 0 1 0 2l-23.9 6.543a.98.98 0 0 1-.271.037zm-19.978-7.579l19.978 5.468 19.977-5.468-19.977-5.47z"
                    fill={theme.color.PRIMARY}
                    transform="translate(-1443.123 -837.85)"
                  />
                </g>
                <g id="그룹_424" transform="translate(23.902 13.088)">
                  <path
                    id="패스_980"
                    d="M1452.6 876.011a1.035 1.035 0 0 1-1.036-1.039v-31.461a1.036 1.036 0 1 1 2.072 0v31.461a1.037 1.037 0 0 1-1.036 1.039z"
                    fill={theme.color.PRIMARY}
                    transform="translate(-1451.569 -842.475)"
                  />
                </g>
                <g id="그룹_425" transform="translate(0 19.558)">
                  <path
                    id="패스_981"
                    d="M1468.061 871.827a1.125 1.125 0 0 1-.275-.037l-23.9-6.546a1.034 1.034 0 0 1-.761-1V845.8a1.036 1.036 0 1 1 2.071 0v17.659l22.867 6.26 22.864-6.26V845.8a1.037 1.037 0 0 1 2.074 0v18.449a1.036 1.036 0 0 1-.764 1l-23.9 6.546a1.1 1.1 0 0 1-.276.032z"
                    fill={theme.color.PRIMARY}
                    transform="translate(-1443.123 -844.761)"
                  />
                </g>
              </g>
              <g id="그룹_427" transform="translate(.22)">
                <path
                  id="패스_982"
                  d="M1448.658 853.67a1.034 1.034 0 0 1-.883-.5l-6.852-11.136a1.035 1.035 0 0 1 .608-1.542l23.9-6.546a1.043 1.043 0 0 1 1.158.458l6.848 11.136a1.033 1.033 0 0 1-.608 1.542l-23.9 6.546a1.124 1.124 0 0 1-.271.042zm-5.244-11.541l5.719 9.3 21.82-5.974-5.72-9.3z"
                  fill={theme.color.PRIMARY}
                  transform="translate(-1440.77 -833.914)"
                />
              </g>
              <g id="그룹_428" transform="translate(30.973)">
                <path
                  id="패스_983"
                  d="M1476.576 853.67a1.128 1.128 0 0 1-.274-.037l-23.9-6.546a1.033 1.033 0 0 1-.608-1.542l6.848-11.136a1.043 1.043 0 0 1 1.158-.458l23.9 6.546a1.034 1.034 0 0 1 .608 1.542l-6.851 11.136a1.029 1.029 0 0 1-.881.495zm-22.3-8.216l21.82 5.974 5.719-9.3-21.815-5.973z"
                  fill={theme.color.PRIMARY}
                  transform="translate(-1451.636 -833.914)"
                />
              </g>
              <g id="그룹_429" transform="translate(30.781 17.681)">
                <path
                  id="패스_984"
                  d="M1459.454 859.918a1.04 1.04 0 0 1-.883-.5l-6.849-11.136a1.036 1.036 0 0 1 .608-1.542l23.9-6.546a1.035 1.035 0 0 1 1.155.458l6.852 11.136a1.048 1.048 0 0 1 .082.925 1.037 1.037 0 0 1-.691.617l-23.9 6.546a1.128 1.128 0 0 1-.274.042zm-5.241-11.541l5.716 9.3 21.82-5.974-5.719-9.3z"
                  fill={theme.color.PRIMARY}
                  transform="translate(-1451.569 -840.162)"
                />
              </g>
              <g id="그룹_430" transform="translate(0 17.681)">
                <path
                  id="패스_985"
                  d="M1465.63 859.918a1.165 1.165 0 0 1-.275-.037l-23.9-6.546a1.027 1.027 0 0 1-.691-.617 1.039 1.039 0 0 1 .079-.925l6.852-11.136a1.036 1.036 0 0 1 1.157-.458l23.9 6.546a1.035 1.035 0 0 1 .608 1.542l-6.848 11.136a1.04 1.04 0 0 1-.882.495zm-22.3-8.216l21.82 5.974 5.719-9.3-21.82-5.974z"
                  fill={theme.color.PRIMARY}
                  transform="translate(-1440.692 -840.162)"
                />
              </g>
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default BoxIcon;
