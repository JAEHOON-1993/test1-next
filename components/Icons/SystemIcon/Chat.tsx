import { Props } from './types';
import { StrokeProps } from './styled';

const ChatIcon = ({ size = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_186_4"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <StrokeProps
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M576.547 363.361c-5.883 0-10.652 3.987-10.652 8.9a7.883 7.883 0 0 0 1.823 4.983l-1.7 3.895 4.147-1.751a12.029 12.029 0 0 0 6.387 1.778c5.883 0 10.652-3.987 10.652-8.905s-4.774-8.9-10.657-8.9z"
        transform="translate(-565.247 -360.117)"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default ChatIcon;
