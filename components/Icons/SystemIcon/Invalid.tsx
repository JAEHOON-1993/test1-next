import styled, { css } from 'styled-components';

import { Props } from './types';

const InvalidIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="인포메이션_가이드_아이콘"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <StrokeProps
        id="타원_3178"
        fill="none"
        stroke={color}
        colored={color}
        strokeWidth="1.5px"
      >
        <circle cx="12" cy="12" r="12" stroke="none" />
        <circle cx="12" cy="12" r="11.25" fill="none" />
      </StrokeProps>
      <path id="사각형_1956" d="M0 0H24V24H0z" fill="none" />
      <g id="_" transform="translate(-129.297 -258.903)">
        <g id="그룹_37049" transform="translate(136.462 263)">
          <FillProps
            id="패스_264547"
            fill={color}
            colored={color}
            d="M139.853 273.584a5.225 5.225 0 0 1 .13-1.847 4.182 4.182 0 0 1 .572-1.242 4.558 4.558 0 0 1 .788-.867q.432-.364.81-.707a3.468 3.468 0 0 0 .638-.767 1.982 1.982 0 0 0 .259-1.049 2.1 2.1 0 0 0-.411-1.322 1.553 1.553 0 0 0-1.317-.537 2.013 2.013 0 0 0-1.49.586 2.741 2.741 0 0 0-.67 1.8h-2.7a5.473 5.473 0 0 1 .572-2.241 4.475 4.475 0 0 1 1.187-1.453 4.166 4.166 0 0 1 1.545-.757 5.543 5.543 0 0 1 1.642-.172 6.585 6.585 0 0 1 1.782.313 4.425 4.425 0 0 1 1.436.766 3.561 3.561 0 0 1 .95 1.2 3.632 3.632 0 0 1 .345 1.615 4.3 4.3 0 0 1-.281 1.7 3.571 3.571 0 0 1-.7 1.08 5.679 5.679 0 0 1-.9.757 6.2 6.2 0 0 0-.875.717 2.93 2.93 0 0 0-.875 2.432zm1.231 5.328a1.918 1.918 0 0 1-1.4-.554 1.984 1.984 0 0 1 0-2.766 1.918 1.918 0 0 1 1.4-.554 1.945 1.945 0 0 1 1.425.554 1.984 1.984 0 0 1 0 2.766 1.945 1.945 0 0 1-1.425.554z"
            transform="translate(-136.462 -263)"
          />
        </g>
      </g>
    </svg>
  );
};

export default InvalidIcon;

interface style {
  colored?: string;
}

const StrokeProps = styled.g<style>`
  stroke: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;

const FillProps = styled.path<style>`
  fill: ${(props) => props.theme.color.GRAY4};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
