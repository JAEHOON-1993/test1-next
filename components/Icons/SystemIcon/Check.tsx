import { Props } from './types';
import { StrokeProps, GraphicsProps } from './styled';

const CheckIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <GraphicsProps fill="none" colored={color} strokeWidth="1.5px">
        <rect width="24" height="24" stroke="none" rx="12" />
        <rect width="22.5" height="22.5" x=".75" y=".75" rx="11.25" />
      </GraphicsProps>
      <StrokeProps
        as="path"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        d="M-478.529 1321.969l4.689 5.917 6.933-9.737"
        transform="translate(484.372 -1310.638)"
      />
    </svg>
  );
};

export default CheckIcon;
