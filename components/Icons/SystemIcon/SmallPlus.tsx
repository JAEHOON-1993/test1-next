import styled from 'styled-components';

import { Props } from './types';

const SmallPlusIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_120_2"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <Path
        id="사각형_28968"
        d="M0 0H9V1H0z"
        fill={color}
        transform="translate(8 12)"
      />
      <Path
        id="사각형_28969"
        d="M0 0H9V1H0z"
        fill={color}
        transform="rotate(90 2.5 10.5)"
      />
      <path id="사각형_28970" fill="none" d="M0 0H25V25H0z" />
    </svg>
  );
};

export default SmallPlusIcon;

const Path = styled.path`
  fill: ${(props) => props.theme.color.GRAY4};
`;
