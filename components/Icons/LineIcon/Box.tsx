import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const BoxIcon: React.FC<Props> = ({ size = 50, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="order_history_icon"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="사각형_28861"
                d="M0 0H36.555V33.134H0z"
                fill={theme.color.PRIMARY}
              />
            </clipPath>
          </defs>
          <path id="사각형_28862" fill="none" d="M0 0H50V50H0z" />
          <g id="그룹_37245" transform="translate(6.723 8.842)">
            <g id="그룹_37244" clipPath="url(#clip-path)">
              <path
                id="패스_264613"
                d="M32.755 10.9l3.682-5.989a.787.787 0 0 0-.462-1.172L22.43.029a.79.79 0 0 0-.879.346L18.339 5.6 15.128.375a.784.784 0 0 0-.879-.346L.7 3.737a.787.787 0 0 0-.458 1.172l3.565 5.8-3.69 6a.789.789 0 0 0 .463 1.172l3.318.908v9.85a.785.785 0 0 0 .579.759l13.544 3.71a.811.811 0 0 0 .21.027.786.786 0 0 0 .207-.027L31.984 29.4a.788.788 0 0 0 .581-.76v-9.857l3.3-.9a.788.788 0 0 0 .463-1.172zM5.473 19.22l8.654 2.37a.827.827 0 0 0 .205.026.789.789 0 0 0 .67-.374l2.439-3.968v14.04L5.473 28.037zM5.14 9.866L2.133 4.978 14.1 1.7l3 4.892zm14.421-3.249L22.583 1.7l11.962 3.278-3.021 4.914zM18.23 13.7l-10.5-2.877 10.558-2.891 10.5 2.876-2.863.784zM16.993 15l-3.023 4.913-11.962-3.275 3.023-4.912zm14 13.037l-11.974 3.277V17.3l2.422 3.94a.788.788 0 0 0 .672.374.8.8 0 0 0 .208-.027l8.668-2.374zm-8.514-8.125L19.452 15l2.945-.807 9.016-2.468 3.025 4.912z"
                fill={theme.color.PRIMARY}
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default BoxIcon;
