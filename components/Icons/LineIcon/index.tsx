import BoxIcon from './Box';
import CashIcon from './Cash';

interface Props {
  name: 'box' | 'cash';
  width?: string;
  height?: string;
  style?: any;
}

/**
 * LineIcon은 PRIMARY 색상으로만 이루어졌으며, 색상 변경이 불가합니다.
 *
 * 기본 크기는 50 x 50 입니다.
 */
const LineIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'box':
      return <BoxIcon {...props} />;
    case 'cash':
      return <CashIcon {...props} />;
  }
  return null;
};

export default LineIcon;
