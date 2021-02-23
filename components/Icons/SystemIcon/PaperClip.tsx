import { Props } from './types';
import { StrokeProps } from './styled';

const PaperClipIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <StrokeProps
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5px"
        d="M51.248 36.494l-7.809 7.939a1.5 1.5 0 1 0 2.121 2.121l9.309-9.438a3 3 0 0 0-4.242-4.242l-9.309 9.438a4.5 4.5 0 0 0 6.363 6.363l7.691-7.681"
        transform="translate(-36.251 -28.996)"
      />
    </svg>
  );
};

export default PaperClipIcon;
