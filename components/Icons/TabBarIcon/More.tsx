import { ThemeConsumer } from 'styled-components';

import { Props } from './types';

const MoreIcon = ({ color, fill, size = 24, ...props }: Props) => {
  if (fill) {
    return (
      <ThemeConsumer>
        {(theme) => (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
          >
            <path id="사각형_1940" fill="none" d="M0 0H24V24H0z" />
            <g id="그룹_861" transform="rotate(90 241 -81)">
              <circle
                id="타원_462"
                cx="2.5"
                cy="2.5"
                r="2.5"
                fill={theme.color.PRIMARY}
                transform="translate(332 138)"
              />
              <circle
                id="타원_463"
                cx="2.5"
                cy="2.5"
                r="2.5"
                fill={theme.color.PRIMARY}
                transform="translate(332 145)"
              />
              <circle
                id="타원_464"
                cx="2.5"
                cy="2.5"
                r="2.5"
                fill={theme.color.PRIMARY}
                transform="translate(332 152)"
              />
            </g>
          </svg>
        )}
      </ThemeConsumer>
    );
  }
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path id="사각형_1940" d="M0 0H24V24H0z" fill="none" />
          <g id="그룹_861" transform="rotate(90 241 -81)">
            <g
              id="타원_462"
              fill="none"
              stroke={theme.color.PRIMARY}
              transform="translate(332 138)"
            >
              <circle cx="2.5" cy="2.5" r="2.5" stroke="none" />
              <circle cx="2.5" cy="2.5" r="2" fill="none" />
            </g>
            <g
              id="타원_463"
              fill="none"
              stroke={theme.color.PRIMARY}
              transform="translate(332 145)"
            >
              <circle cx="2.5" cy="2.5" r="2.5" stroke="none" />
              <circle cx="2.5" cy="2.5" r="2" fill="none" />
            </g>
            <g
              id="타원_464"
              fill="none"
              stroke={theme.color.PRIMARY}
              transform="translate(332 152)"
            >
              <circle cx="2.5" cy="2.5" r="2.5" stroke="none" />
              <circle cx="2.5" cy="2.5" r="2" fill="none" />
            </g>
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default MoreIcon;
