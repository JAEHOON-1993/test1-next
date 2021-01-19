import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const PhoneIcon: React.FC<Props> = ({
  width = '50',
  height = '50',
  ...props
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="kakao_link_icon_50"
          width={width}
          height={height}
          viewBox="0 0 50 50"
        >
          <defs>
            <clipPath id="clip-path">
              <path id="사각형_28950" d="M0 0H38.769V40.624H0z" fill="none" />
            </clipPath>
          </defs>
          <path
            id="패스_264677"
            fill={theme.color.POINT}
            d="M-3470.722-2671.667v-10.517l1.364-2.431 1.941-1.073 3.563-.589h19.006l1.649.589 1.411 1.934.709 2.577v9.914l-1.16 2.425-2.61 1.513h-13.8l-5.207 5.23-.491-5.23-3.072-.567-1.941-1.484z"
            transform="translate(3488 2692)"
          />
          <rect
            id="사각형_28855"
            width="13"
            height="5"
            fill={theme.color.PRIMARY}
            rx="2.5"
            transform="rotate(90 -6 21)"
          />
          <path id="사각형_28856" d="M0 0H50V50H0z" fill="none" />
          <g id="그룹_37314" transform="translate(9 5)">
            <g id="그룹_37313" clip-path="url(#clip-path)">
              <path
                id="패스_264674"
                d="M21.152 26.339a.841.841 0 1 0-1.682 0v7.039H1.682V13.736H5.94a.841.841 0 0 0 0-1.683H1.682v-.88A2.144 2.144 0 0 1 4.02 9.1h.066a.841.841 0 1 0 0-1.682H4.02A3.808 3.808 0 0 0 0 11.173V36.6a4.025 4.025 0 0 0 4.02 4.02h12.715c2.085 0 4.417-1.72 4.417-4.02zm-4.417 12.6H4.02A2.34 2.34 0 0 1 1.682 36.6v-1.539H19.47V36.6a2.708 2.708 0 0 1-2.735 2.337"
              />
              <path
                id="패스_264675"
                d="M11.5 36.16H8.722a.841.841 0 1 0 0 1.683H11.5a.841.841 0 0 0 0-1.683"
              />
              <path
                id="패스_264676"
                d="M33.64 0H13.331c-3.15 0-5.914 2.532-5.914 5.42v9.231a5.979 5.979 0 0 0 5.914 5.575h.576v5.041a.841.841 0 0 0 1.455.575l5.257-5.616H33.64c2.923 0 5.129-2.4 5.129-5.575V5.42A5.165 5.165 0 0 0 33.64 0M14.748 18.543h-1.417A4.291 4.291 0 0 1 9.1 14.651V5.42c0-2.139 2.234-3.738 4.232-3.738H33.64a3.482 3.482 0 0 1 3.446 3.738v9.231a3.608 3.608 0 0 1-3.446 3.892H20.254a.845.845 0 0 0-.614.266l-4.051 4.328v-3.753a.842.842 0 0 0-.841-.841"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default PhoneIcon;
