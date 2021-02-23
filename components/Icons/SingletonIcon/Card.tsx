import { ThemeConsumer } from 'styled-components';
import { Props } from './types';

const CardIcon: React.FC<Props> = ({ size = 100, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="singletone_popup_icon_100"
          width={size}
          height={size}
          viewBox="0 0 100 100"
          {...props}
        >
          <g id="그룹_218" transform="translate(22.012 34.41)">
            <g id="그룹_215">
              <g id="그룹_213">
                <g id="그룹_211">
                  <path
                    id="패스_944"
                    d="M-33.86 280.359h-27.788a4.288 4.288 0 0 1-4.283-4.282V245.3a4.287 4.287 0 0 1 4.283-4.282h48.064A4.286 4.286 0 0 1-9.3 245.3v14.02a1 1 0 0 1-1 1 1 1 0 0 1-1-1V245.3a2.287 2.287 0 0 0-2.284-2.284h-48.064a2.287 2.287 0 0 0-2.284 2.284v30.776a2.285 2.285 0 0 0 2.284 2.282h27.788a1 1 0 0 1 1 1 1 1 0 0 1-1 1.001z"
                    fill={theme.color.ICON}
                    strokeWidth="0.5px"
                    stroke={theme.color.ICON}
                    transform="translate(65.931 -241.018)"
                  />
                </g>
                <g id="그룹_212" transform="translate(0 8.298)">
                  <path
                    id="패스_945"
                    d="M-10.3 253.668h-54.633a1 1 0 0 1-1-1v-7.608a1 1 0 0 1 1-1H-10.3a1 1 0 0 1 1 1v7.608a1 1 0 0 1-1 1zm-53.631-2H-11.3v-5.608h-52.633z"
                    fill={theme.color.ICON}
                    strokeWidth="0.5px"
                    stroke={theme.color.ICON}
                    transform="translate(65.931 -244.062)"
                  />
                </g>
              </g>
              <g id="그룹_214" transform="translate(4.55 22.735)">
                <path
                  id="패스_946"
                  d="M-45.671 251.356h-17.593a1 1 0 0 1-1-1 1 1 0 0 1 1-1h17.593a1 1 0 0 1 1 1 1 1 0 0 1-1 1z"
                  fill={theme.color.ICON}
                  strokeWidth="0.5px"
                  stroke={theme.color.ICON}
                  transform="translate(64.262 -249.358)"
                />
              </g>
            </g>
            <g id="그룹_216" transform="translate(36.03 21.76)">
              <path
                id="패스_947"
                d="M-41.622 272.089a12.143 12.143 0 0 1-12.131-12.131 12.143 12.143 0 0 1 12.131-12.131 12.143 12.143 0 0 1 12.131 12.131 12.143 12.143 0 0 1-12.131 12.131zm0-22.569a10.451 10.451 0 0 0-10.438 10.438A10.451 10.451 0 0 0-41.622 270.4a10.451 10.451 0 0 0 10.438-10.438 10.451 10.451 0 0 0-10.438-10.442z"
                fill={theme.color.ICON}
                strokeWidth="0.5px"
                stroke={theme.color.ICON}
                transform="translate(53.753 -247.827)"
              />
            </g>
            <path
              id="패스_948"
              d="M-36.548 254.917h-2.189l.824-3.292a.806.806 0 0 0-.586-.976.808.808 0 0 0-.976.586l-.921 3.683h-1.961l-.921-3.683a.836.836 0 0 0-1.562 0l-.921 3.683h-1.961l-.921-3.683a.81.81 0 0 0-.976-.586.806.806 0 0 0-.586.976l.824 3.292h-2.189a.805.805 0 0 0-.8.8.805.805 0 0 0 .8.8h2.59l1.457 5.829a.836.836 0 0 0 1.562 0l1.457-5.829h.888l1.457 5.829a.806.806 0 0 0 .781.609.806.806 0 0 0 .781-.609l1.457-5.829h2.59a.805.805 0 0 0 .8-.8.805.805 0 0 0-.798-.8zm-10.194 3.925l-.579-2.316h1.159zm2.64-3.925l.043-.17.043.17zm2.725 3.925l-.579-2.316h1.156z"
              fill={theme.color.ICON}
              strokeWidth="0.5px"
              stroke={theme.color.ICON}
              transform="translate(92.373 -222.148)"
            />
          </g>
          <path id="사각형_1944" d="M0 0H100V100H0z" fill="none" />
          <g
            id="타원_445"
            stroke={theme.color.ICON}
            fill="none"
            strokeWidth="2px"
            transform="translate(86 28)"
          >
            <circle cx="5" cy="5" r="5" stroke="none" />
            <circle cx="5" cy="5" r="4" fill="none" />
          </g>
          <g
            id="타원_446"
            stroke={theme.color.ICON}
            fill="none"
            strokeWidth="2px"
            transform="translate(17 17)"
          >
            <circle cx="4" cy="4" r="4" stroke="none" />
            <circle cx="4" cy="4" r="3" fill="none" />
          </g>
          <g id="cross-1" transform="translate(68.899 10.411)">
            <path
              id="line"
              d="M0 0L0 6.308"
              stroke={theme.color.ICON}
              fill="none"
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(3.154)"
            />
            <path
              id="line-2"
              d="M6.308 0L0 0"
              stroke={theme.color.ICON}
              fill="none"
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0 3.154)"
            />
          </g>
          <g id="cross-1-2" transform="rotate(45 -46.258 29.57)">
            <path
              id="line-3"
              d="M0 0L0 6.308"
              stroke={theme.color.ICON}
              fill="none"
              strokeWidth="2px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(3.154)"
            />
            <path
              id="line-4"
              d="M6.308 0L0 0"
              stroke={theme.color.ICON}
              fill="none"
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

export default CardIcon;
