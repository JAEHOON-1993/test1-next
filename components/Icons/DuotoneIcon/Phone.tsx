import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const PhoneIcon: React.FC<Props> = ({ size = 100, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="구성_요소_175_3"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <defs>
            <clipPath id="clipPath">
              <path
                id="사각형_28950"
                d="M0 0H58.154V60.936H0z"
                fill={theme.color.PRIMARY}
              />
            </clipPath>
          </defs>
          <path
            id="패스_264677"
            d="M-3470.722-2664.362v-15.776l2.046-3.647 2.912-1.609 5.344-.883h28.508l2.473.883 2.117 2.9 1.064 3.865v14.872l-1.74 3.638-3.915 2.27h-20.7l-7.81 7.845-.736-7.845-4.607-.851-2.912-2.226z"
            fill={theme.color.PRIMARYSUB}
            transform="translate(3512.639 2707.861)"
          />
          <rect
            id="사각형_28855"
            width="19"
            height="8"
            fill={theme.color.PRIMARYSUB}
            rx="3"
            transform="rotate(90 -7.5 46.5)"
          />
          <path id="사각형_28856" d="M0 0H100V100H0z" fill="none" />
          <g id="그룹_37314" transform="translate(30.5 20.5)">
            <g id="그룹_37313" clipPath="url(#clipPath)">
              <path
                id="패스_264674"
                d="M31.728 35.8a1.262 1.262 0 1 0-2.523 0v10.558H2.523V16.9H8.91a1.262 1.262 0 0 0 0-2.524H2.523v-1.32A3.216 3.216 0 0 1 6.03 9.941h.1a1.261 1.261 0 1 0 0-2.523h-.1A5.712 5.712 0 0 0 0 13.051V51.2a6.037 6.037 0 0 0 6.03 6.03H25.1c3.127 0 6.625-2.58 6.625-6.03zM25.1 54.7H6.03a3.51 3.51 0 0 1-3.507-3.5v-2.318H29.2V51.2c0 1.974-2.2 3.506-4.1 3.506"
                fill={theme.color.PRIMARY}
                transform="translate(0 3.71)"
              />
              <path
                id="패스_264675"
                d="M13.315 36.16H9.143a1.262 1.262 0 1 0 0 2.524h4.172a1.262 1.262 0 0 0 0-2.524"
                fill={theme.color.PRIMARY}
                transform="translate(3.94 18.081)"
              />
              <path
                id="패스_264676"
                d="M46.751 0H16.288c-4.725 0-8.871 3.8-8.871 8.13v13.846c0 4.377 4.227 8.363 8.871 8.363h.864V37.9a1.262 1.262 0 0 0 2.183.862l7.885-8.424h19.531c4.384 0 7.694-3.6 7.694-8.363V8.13c0-4.635-3.309-8.13-7.694-8.13M18.413 27.814h-2.125c-3.262 0-6.348-2.836-6.348-5.838V8.13c0-3.209 3.351-5.607 6.348-5.607h30.463c3 0 5.169 2.358 5.169 5.607v13.846c0 3.329-2.223 5.838-5.169 5.838H26.673a1.268 1.268 0 0 0-.921.4l-6.076 6.492v-5.63a1.262 1.262 0 0 0-1.261-1.262"
                fill={theme.color.PRIMARY}
                transform="translate(3.708 .001)"
              />
            </g>
          </g>
          <g
            id="타원_3180"
            fill="none"
            stroke={theme.color.PRIMARY}
            strokeWidth="2px"
            transform="translate(9.398 31)"
          >
            <circle cx="5" cy="5" r="5" stroke="none" />
            <circle cx="5" cy="5" r="4" fill="none" />
          </g>
          <g id="cross-1" transform="translate(30.193 11.411)">
            <path
              id="line"
              d="M0 0L0 6.308"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(3.154)"
            />
            <path
              id="line-2"
              d="M0 0L6.308 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 3.154)"
            />
          </g>
          <g id="cross-1-2" transform="rotate(135 28.823 49.916)">
            <path
              id="line-3"
              d="M0 6.308L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(3.154)"
            />
            <path
              id="line-4"
              d="M6.308 0L0 0"
              fill="none"
              stroke={theme.color.PRIMARY}
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 3.154)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default PhoneIcon;
