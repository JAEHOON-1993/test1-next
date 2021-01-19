import styled from 'styled-components';

import { Props } from './types';

const CheckIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color,
  ...props
}) => {
  return (
    <SVGBox
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke={color} strokeWidth="1.5px">
        <rect width="24" height="24" stroke="none" rx="12" />
        <rect width="22.5" height="22.5" x=".75" y=".75" rx="11.25" />
      </g>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        d="M-478.529 1321.969l4.689 5.917 6.933-9.737"
        transform="translate(484.372 -1310.638)"
      />
    </SVGBox>
  );
};

export default CheckIcon;

const SVGBox = styled.svg`
  g,
  path {
    stroke: ${(props) => props.theme.color.GRAY4};
  }
`;
