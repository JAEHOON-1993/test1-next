import { Props } from './types';
import { FillProps } from './styled';

const SmallPlusIcon: React.FC<Props> = ({ color, size = 24, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_120_2"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <FillProps
        id="사각형_28968"
        d="M0 0H9V1H0z"
        colored={color}
        transform="translate(8 12)"
      />
      <FillProps
        id="사각형_28969"
        d="M0 0H9V1H0z"
        colored={color}
        transform="rotate(90 2.5 10.5)"
      />
      <path id="사각형_28970" fill="none" d="M0 0H25V25H0z" />
    </svg>
  );
};

export default SmallPlusIcon;
