import styled, { css, ThemeConsumer } from 'styled-components';

import { Props } from './types';

const CardIcon: React.FC<Props> = ({ size = 50, color, ...props }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="card_icon"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <path id="사각형_1955" fill="none" d="M0 0H50V50H0z" />
          <g id="그룹_218" transform="translate(6.685 11.824)">
            <g id="그룹_215">
              <g id="그룹_213">
                <g id="그룹_211">
                  <FillStrokeProps
                    id="패스_944"
                    d="M-45.848 265.654h-17.4a2.685 2.685 0 0 1-2.682-2.682V243.7a2.684 2.684 0 0 1 2.682-2.682h30.1a2.684 2.684 0 0 1 2.682 2.682v8.779a.625.625 0 0 1-.626.625.625.625 0 0 1-.625-.625V243.7a1.432 1.432 0 0 0-1.431-1.43h-30.1a1.432 1.432 0 0 0-1.431 1.43v19.273a1.431 1.431 0 0 0 1.431 1.429h17.4a.627.627 0 0 1 .626.626.626.626 0 0 1-.626.626z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    colored={color}
                    strokeWidth=".5px"
                    transform="translate(65.931 -241.018)"
                  />
                </g>
                <g id="그룹_212" transform="translate(0 5.196)">
                  <FillStrokeProps
                    id="패스_945"
                    d="M-31.1 250.078h-34.206a.627.627 0 0 1-.625-.627v-4.764a.625.625 0 0 1 .625-.625H-31.1a.625.625 0 0 1 .626.625v4.764a.627.627 0 0 1-.626.627zm-33.584-1.253h32.96v-3.511H-64.68z"
                    fill={theme.color.PRIMARY}
                    stroke={theme.color.PRIMARY}
                    colored={color}
                    strokeWidth=".5px"
                    transform="translate(65.931 -244.062)"
                  />
                </g>
              </g>
              <g id="그룹_214" transform="translate(2.849 14.237)">
                <FillStrokeProps
                  id="패스_946"
                  d="M-52.62 250.609h-11.017a.625.625 0 0 1-.625-.626.625.625 0 0 1 .625-.625h11.017a.625.625 0 0 1 .626.625.626.626 0 0 1-.626.626z"
                  fill={theme.color.PRIMARY}
                  stroke={theme.color.PRIMARY}
                  colored={color}
                  strokeWidth=".5px"
                  transform="translate(64.262 -249.358)"
                />
              </g>
            </g>
            <g id="그룹_216" transform="translate(22.563 13.626)">
              <FillStrokeProps
                id="패스_947"
                d="M-46.157 263.02a7.6 7.6 0 0 1-7.6-7.6 7.6 7.6 0 0 1 7.6-7.6 7.6 7.6 0 0 1 7.6 7.6 7.6 7.6 0 0 1-7.6 7.6zm0-14.133a6.544 6.544 0 0 0-6.536 6.536 6.544 6.544 0 0 0 6.536 6.536 6.545 6.545 0 0 0 6.536-6.536 6.545 6.545 0 0 0-6.536-6.536z"
                fill={theme.color.PRIMARY}
                stroke={theme.color.PRIMARY}
                colored={color}
                strokeWidth=".5px"
                transform="translate(53.753 -247.827)"
              />
            </g>
            <FillStrokeProps
              id="패스_948"
              d="M-42.464 253.313h-1.371l.516-2.062a.5.5 0 0 0-.367-.611.506.506 0 0 0-.611.367l-.577 2.306H-46.1l-.577-2.306a.524.524 0 0 0-.978 0l-.577 2.306h-1.228l-.577-2.306a.507.507 0 0 0-.611-.367.5.5 0 0 0-.367.611l.516 2.062h-1.371a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h1.622l.912 3.65a.524.524 0 0 0 .978 0l.912-3.65h.556l.912 3.65a.5.5 0 0 0 .489.382.5.5 0 0 0 .489-.382l.912-3.65h1.622a.5.5 0 0 0 .5-.5.5.5 0 0 0-.498-.5zm-6.383 2.458l-.363-1.45h.726zm1.653-2.458l.027-.106.027.106zm1.707 2.458l-.363-1.45h.726z"
              fill={theme.color.PRIMARY}
              stroke={theme.color.PRIMARY}
              colored={color}
              strokeWidth=".5px"
              transform="translate(77.422 -232.792)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default CardIcon;

interface style {
  colored?: string;
}

const FillStrokeProps = styled.path<style>`
  fill: ${(props) => props.theme.color.PRIMARY};
  stroke: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
      stroke: ${props.colored};
    `}
`;
