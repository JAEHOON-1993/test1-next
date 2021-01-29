import BoxIcon from './Box';
import CardIcon from './Card';
import CashIcon from './Cash';
import EstimateIcon from './Estimate';
import InquiryIcon from './Inquiry';
import PasswordIcon from './Password';
import CameraIcon from './Camera';
import HealthIcon from './Health';
import ToolsIcon from './Tools';
import CloudShareIcon from './CloudShare';
import SocksIcon from './Socks';
import FinanceIcon from './Finance';
import HobbyIcon from './Hobby';
import LifeCycleIcon from './LifeCycle';
import MediaIcon from './Media';
import MobilityIcon from './Mobility';
import ConsumableIcon from './Consumable';
import DeliveryIcon from './Delivery';
import DesignIcon from './Design';
import EduIcon from './Edu';
import FashionIcon from './Fashion';
import FoodIcon from './Food';
import HouseIcon from './House';
import MonthlyIcon from './Monthly';
import PetIcon from './Pet';
import ReceiptIcon from './Receipt';
import PersonIcon from './Person';
import PersonCyclingIcon from './PersonCycling';
import FootPrintIcon from './FootPrint';
import DestinationIcon from './Destination';
import WrongPasswordIcon from './WrongPassword';
import PhoneIcon from './Phone';
import UserIcon from './User';

export type nameProps =
  | 'box'
  | 'card'
  | 'camera'
  | 'cash'
  | 'cloudShare'
  | 'consumable'
  | 'delivery'
  | 'design'
  | 'destination'
  | 'edu'
  | 'estimate'
  | 'fashion'
  | 'food'
  | 'footPrint'
  | 'finance'
  | 'health'
  | 'hobby'
  | 'house'
  | 'inquiry'
  | 'lifeCycle'
  | 'media'
  | 'mobility'
  | 'monthly'
  | 'receipt'
  | 'socks'
  | 'tools'
  | 'password'
  | 'pet'
  | 'person'
  | 'personCycling'
  | 'phone'
  | 'wrongPassword'
  | 'user';

interface Props {
  name: nameProps | string;
  size?: string | number;
  style?: any;
  color?: string;
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
    case 'card':
      return <CardIcon {...props} />;
    case 'camera':
      return <CameraIcon {...props} />;
    case 'cash':
      return <CashIcon {...props} />;
    case 'cloudShare':
      return <CloudShareIcon {...props} />;
    case 'consumable':
      return <ConsumableIcon {...props} />;
    case 'delivery':
      return <DeliveryIcon {...props} />;
    case 'design':
      return <DesignIcon {...props} />;
    case 'destination':
      return <DestinationIcon {...props} />;
    case 'edu':
      return <EduIcon {...props} />;
    case 'estimate':
      return <EstimateIcon {...props} />;
    case 'fashion':
      return <FashionIcon {...props} />;
    case 'food':
      return <FoodIcon {...props} />;
    case 'footPrint':
      return <FootPrintIcon {...props} />;
    case 'finance':
      return <FinanceIcon {...props} />;
    case 'health':
      return <HealthIcon {...props} />;
    case 'hobby':
      return <HobbyIcon {...props} />;
    case 'house':
      return <HouseIcon {...props} />;
    case 'inquiry':
      return <InquiryIcon {...props} />;
    case 'lifeCycle':
      return <LifeCycleIcon {...props} />;
    case 'media':
      return <MediaIcon {...props} />;
    case 'mobility':
      return <MobilityIcon {...props} />;
    case 'monthly':
      return <MonthlyIcon {...props} />;
    case 'password':
      return <PasswordIcon {...props} />;
    case 'pet':
      return <PetIcon {...props} />;
    case 'person':
      return <PersonIcon {...props} />;
    case 'personCycling':
      return <PersonCyclingIcon {...props} />;
    case 'phone':
      return <PhoneIcon {...props} />;
    case 'receipt':
      return <ReceiptIcon {...props} />;
    case 'socks':
      return <SocksIcon {...props} />;
    case 'tools':
      return <ToolsIcon {...props} />;
    case 'wrongPassword':
      return <WrongPasswordIcon {...props} />;
    case 'user':
      return <UserIcon {...props} />;
  }
  return null;
};

export default LineIcon;
