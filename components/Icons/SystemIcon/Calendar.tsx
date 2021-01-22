import styled, { css, ThemeConsumer } from 'styled-components';

import { Props } from './types';

const CalendarIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="calendar_icon_24"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path id="사각형_1956" d="M0 0H24V24H0z" fill="none" />
          <g id="그룹_944" transform="translate(-304 -54)">
            <StrokeProps
              as="g"
              id="사각형_2089"
              fill="none"
              stroke={color}
              colored={color}
              strokeWidth="1.5px"
              transform="translate(306 57)"
            >
              <rect width="20" height="20" stroke="none" rx="3" />
              <rect
                width="18.5"
                height="18.5"
                x=".75"
                y=".75"
                fill="none"
                rx="2.25"
              />
            </StrokeProps>
            <g id="그룹_943">
              <g
                id="사각형_2091"
                stroke={theme.color.GRAY4}
                fill={theme.color.GRAY4}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(313 64)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(313 64)"
                />
              </g>
              <StrokeFillProps
                id="사각형_2097"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(313 68)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(313 68)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2101"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(313 72)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(313 72)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2096"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(309 68)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(309 68)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2100"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(309 72)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(309 72)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2093"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(321 64)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(321 64)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2099"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(321 68)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(321 68)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2095"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(317 64)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(317 64)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2098"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(317 68)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(317 68)"
                />
              </StrokeFillProps>
              <StrokeFillProps
                id="사각형_2102"
                stroke={color}
                colored={color}
                fill={color}
              >
                <path
                  d="M0 0H2V2H0z"
                  stroke="none"
                  transform="translate(317 72)"
                />
                <path
                  d="M0.5 0.5H1.5V1.5H0.5z"
                  fill="none"
                  transform="translate(317 72)"
                />
              </StrokeFillProps>
            </g>
            <StrokeProps
              id="선_275"
              d="M0 0L0 3.5"
              fill="none"
              stroke={color}
              colored={color}
              strokeWidth="1.5px"
              strokeLinecap="round"
              transform="translate(309.5 56)"
            />
            <StrokeProps
              id="선_276"
              d="M0 0L0 3.5"
              fill="none"
              stroke={color}
              colored={color}
              strokeWidth="1.5px"
              strokeLinecap="round"
              transform="translate(322.5 56)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default CalendarIcon;

interface style {
  colored?: string;
}

const StrokeFillProps = styled.g<style>`
  stroke: ${(props) => props.theme.color.GRAY4};
  fill: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
      fill: ${props.colored};
    `}
`;

const StrokeProps = styled.path<style>`
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
