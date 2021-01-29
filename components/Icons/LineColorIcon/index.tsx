import CardIcon from './Card';
import CashIcon from './Cash';

import PhoneIcon from './Phone';

export type nameProps = 'card' | 'cash' | 'phone';

interface Props {
  name: nameProps | string;
  size?: string | number;
  style?: any;
  color?: string;
}

/**
 * LineIcon은 기본 색상은 PRIMARY이며, 색상 변경이 가능합니다.
 *
 * 기본 크기는 50 x 50 입니다.
 */
const LineIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'card':
      return <CardIcon {...props} />;

    case 'cash':
      return <CashIcon {...props} />;

    case 'phone':
      return <PhoneIcon {...props} />;
  }
  return null;
};

export default LineIcon;
