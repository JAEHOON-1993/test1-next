import { Props } from './types';
import { FillProps } from './styled';

const DropDownMenuIcon: React.FC<Props> = ({ size = 14, color, ...props }) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <FillProps d="M7 10L11 5H3L7 10Z" colored={color} />
    </svg>
  );
};

export default DropDownMenuIcon;
