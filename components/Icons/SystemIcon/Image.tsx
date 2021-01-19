import styled from 'styled-components';

import { Props } from './types';

const ImageIcon = ({ width = 24, height = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g id="그룹_712" transform="translate(-896.815 -171.613)">
        <StrokeProps
          id="사각형_1982"
          fill="none"
          stroke={color}
          transform="translate(898.815 176.613)"
        >
          <rect width="20" height="15" stroke="none" rx="3" />
          <rect width="19" height="14" x=".5" y=".5" fill="none" rx="2.5" />
        </StrokeProps>
        <FillProps
          id="타원_460"
          cx="2.249"
          cy="2.249"
          r="2.249"
          fill={color}
          transform="translate(912.001 179.355)"
        />
        <FillProps
          as="path"
          id="패스_1196"
          d="M919.093 208.527l-.815 1.411a.551.551 0 0 1-.954 0l-2.589-4.484a.55.55 0 0 0-.953 0l-4.292 7.435a.55.55 0 0 0 .477.826h12.121a.55.55 0 0 0 .477-.826l-2.518-4.362a.55.55 0 0 0-.954 0z"
          fill={color}
          transform="translate(-7.965 -22.576)"
        />
      </g>
      <path id="사각형_1956" d="M0 0H24V24H0z" fill="none" />
    </svg>
  );
};

export default ImageIcon;

const StrokeProps = styled.g`
  stroke: ${(props) => props.theme.color.GRAY4};
`;

const FillProps = styled.circle`
  fill: ${(props) => props.theme.color.GRAY4};
`;
