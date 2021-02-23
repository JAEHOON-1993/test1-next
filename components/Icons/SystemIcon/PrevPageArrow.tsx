import { Props } from './types';
import { StrokeProps } from './styled';

const PrevPageArrow = ({ size = 22, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="next_page_arrow"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      {...props}
    >
      <path id="사각형_1950" fill="none" d="M0 0H22V22H0z" />
      <StrokeProps
        id="패스_1343"
        d="M-192.418-4421.433l-4.082-4.386 4.082-4.06"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        transform="translate(208.329 4436.61)"
      />
      <StrokeProps
        id="패스_264774"
        d="M-192.418-4421.433l-4.082-4.386 4.082-4.06"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        transform="translate(201.329 4436.61)"
      />
    </svg>
  );
};

export default PrevPageArrow;
