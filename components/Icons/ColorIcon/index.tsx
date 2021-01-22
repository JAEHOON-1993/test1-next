import BedIcon from './Bed';
import HomeIcon from './Home';
import SearchIcon from './Search';
import FixIcon from './Fix';
import AIIcon from './AI';
import AddIcon from './Add';
import PhoneIcon from './Phone';
import PaintIcon from './Paint';
import Wallet from './Wallet';
import BagIcon from './Bag';
import QRIcon from './QR';

export type nameProps =
  | 'add'
  | 'ai'
  | 'bag'
  | 'bed'
  | 'fix'
  | 'home'
  | 'paint'
  | 'phone'
  | 'qr'
  | 'search'
  | 'wallet';
interface Props {
  name: nameProps | string;
  size?: string | number;
  style?: any;
}

/**
 *
 * ColorIcon들은 해당 프로젝트의 PRIMARY, PRIMARYSUB, POINT 색상으로 이루어져 있으며, 색상 설정이 불가합니다.
 *
 * 기본 크기는 50 x 50 입니다.
 */

const ColorIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'add':
      return <AddIcon {...props} />;
    case 'ai':
      return <AIIcon {...props} />;
    case 'bag':
      return <BagIcon {...props} />;
    case 'bed':
      return <BedIcon {...props} />;
    case 'fix':
      return <FixIcon {...props} />;
    case 'home':
      return <HomeIcon {...props} />;
    case 'paint':
      return <PaintIcon {...props} />;
    case 'phone':
      return <PhoneIcon {...props} />;
    case 'qr':
      return <QRIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'wallet':
      return <Wallet {...props} />;
  }
  return null;
};

export default ColorIcon;
