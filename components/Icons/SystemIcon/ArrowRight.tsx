import { Props } from './types';
import { StrokeProps } from './styled';

const ArrowRightIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <StrokeProps
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        d="M-196.5-4416.5l7.023-6.948-7.023-6.43"
        transform="translate(205 4435.378)"
      />
    </svg>
  );
};

export default ArrowRightIcon;
