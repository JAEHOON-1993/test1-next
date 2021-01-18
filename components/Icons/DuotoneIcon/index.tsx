import BoxIcon from './Box';
import CardIcon from './Card';
import PaperIcon from './Paper';
import PhoneIcon from './Phone';

interface Props {
  name: 'box' | 'card' | 'paper' | 'phone';
  width?: string;
  height?: string;
  style?: any;
}

/**
 * DuotoneIcon은 PRIMARY, PRIMARYSUB 색상으로 이루어졌으며, 색상 변경이 불가합니다.
 *
 * 기본 크기는 100 x 100 입니다.
 */
const DuotoneIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'box':
      return <BoxIcon {...props} />;
    case 'card':
      return <CardIcon {...props} />;
    case 'paper':
      return <PaperIcon {...props} />;
    case 'phone':
      return <PhoneIcon {...props} />;
  }

  return null;
};

export default DuotoneIcon;
