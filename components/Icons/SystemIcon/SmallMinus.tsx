import styled from 'styled-components';

import { Props } from './types';

const SmallMinusIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <Path fill={color} d="M0 0H9V1H0z" transform="translate(8 12)" />
      <path fill="none" d="M0 0H25V25H0z" />
    </svg>
  );
};

export default SmallMinusIcon;

const Path = styled.path`
  fill: ${(props) => props.theme.color.GRAY4};
`;
