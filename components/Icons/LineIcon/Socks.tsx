import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const SocksIcon = ({ size = 50, ...props }: Props) => {
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
          <path id="사각형_1994" fill="none" d="M0 0H36V36H0z" />
          <g id="그룹_653" transform="translate(-1703.244 -493.732)">
            <g id="그룹_649" transform="translate(1709.244 494.732)">
              <path
                id="패스_1143"
                d="M1715.554 528.653a6.31 6.31 0 0 1-4.466-10.774l6.593-6.593v-15.959a.594.594 0 0 1 .595-.6h11.436a.594.594 0 0 1 .595.6v18.725a1.271 1.271 0 0 1-.006.136 5.164 5.164 0 0 1-1.493 3.828l-8.79 8.791a6.292 6.292 0 0 1-4.464 1.846zm3.317-32.733v15.612a.6.6 0 0 1-.175.422l-6.766 6.766a5.124 5.124 0 0 0 7.246 7.246l8.79-8.789a3.961 3.961 0 0 0 1.145-2.943v-18.313zm-.6 15.612z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1709.244 -494.732)"
              />
            </g>
            <g id="그룹_650" transform="translate(1717.682 498.521)">
              <path
                id="패스_1144"
                d="M1726.479 498.257h-11.436a.594.594 0 1 1 0-1.188h11.436a.594.594 0 1 1 0 1.188z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1714.448 -497.069)"
              />
            </g>
            <g id="그룹_651" transform="translate(1723.455 506.964)">
              <path
                id="패스_1145"
                d="M1719.378 517.068a.6.6 0 0 1-.552-.37c-3.426-8.4 5.022-14.262 5.106-14.32a.6.6 0 0 1 .67.984c-.318.216-7.734 5.388-4.674 12.885a.594.594 0 0 1-.55.82z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1718.009 -502.276)"
              />
            </g>
            <g id="그룹_652" transform="translate(1710.916 517.706)">
              <path
                id="패스_1146"
                d="M1718.956 518.177a.592.592 0 0 1-.571-.433c-1.582-5.576-7.643-7.664-7.7-7.685a.594.594 0 1 1 .374-1.127c.274.091 6.716 2.3 8.472 8.488a.6.6 0 0 1-.41.734.559.559 0 0 1-.165.023z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                strokeWidth="0.5px"
                transform="translate(-1710.275 -508.901)"
              />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default SocksIcon;
