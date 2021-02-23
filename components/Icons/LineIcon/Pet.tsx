import { StrokeProps } from './styled';
import { Props } from './types';

const PetIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="daily_necessity_icon_36"
      width={size}
      height={size}
      viewBox="0 0 36 36"
    >
      <path fill="none" d="M0 0H36V36H0z" />
      <StrokeProps
        fill="none"
        colored={color}
        strokeMiterlimit="10"
        strokeWidth="1.5px"
        d="M1428.687 461.413a4.347 4.347 0 1 0-6.8 1.926l-12.152 9.962a4.082 4.082 0 0 0-.377-.6 4.236 4.236 0 1 0-2.845 6.9 4.346 4.346 0 1 0 6.8-1.926l12.152-9.962a4.106 4.106 0 0 0 .377.6 4.236 4.236 0 1 0 2.846-6.9z"
        transform="translate(-1399.301 -452.315)"
      />
    </svg>
  );
};

export default PetIcon;
