import AlarmIcon from './Alarm';
import AlarmNewIcon from './AlarmNew';
import ArrowRightIcon from './ArrowRight';
import ArrowLeftIcon from './ArrowLeft';
import BookmarkIcon from './Bookmark';
import BookmarkColoredIcon from './BookmarkColored';
import OptionDownIcon from './OptionDown';
import OptionUpIcon from './OptionUp';
import BackIcon from './Back';
import SearchIcon from './Search';
import SettingIcon from './Setting';
import UrlIcon from './Url';
import WriteIcon from './Write';
import HeartIcon from './Heart';
import HeartColoredIcon from './HeartColored';
import AddIcon from './Add';
import DeleteIcon from './Delete';
import ShareIcon from './Share';
import HamburgerIcon from './Hamburger';
import AddProfileIcon from './AddProfile';
import CalendarIcon from './Calendar';
import ChatIcon from './Chat';
import CheckIcon from './Check';
import PasswordIcon from './Password';
import LikeIcon from './Like';
import QRCodeIcon from './QRCode';
import TextDeleteIcon from './TextDelete';
import FacebookIcon from './Facebook';
import NaverIcon from './Naver';
import KakaoIcon from './Kakao';
import CloseRoundIcon from './CloseRound';
import DoneIcon from './Done';
import MoreSettingIcon from './MoreSetting';
import ImageIcon from './Image';
import StarIcon from './Star';
import StarHalfIcon from './StarHalf';
import StarEmptyIcon from './StarEmpty';
import NextPageArrow from './NextPageArrow';
import PrevPageArrow from './PrevPageArrow';
import CheckBoxIcon from './CheckBox';
import CloseIcon from './Close';
import SmallPlusIcon from './SmallPlus';
import SmallMinusIcon from './SmallMinus';
import PlusIcon from './Plus';
import InquiryIcon from './Inquiry';
import CardIcon from './Card';
import CashIcon from './Cash';
import EstimateIcon from './Estimate';

interface Props {
  name:
    | 'add'
    | 'addProfile'
    | 'alarm'
    | 'alarmNew'
    | 'arrowRight'
    | 'arrowLeft'
    | 'back'
    | 'bookmark'
    | 'bookmarkColored'
    | 'card'
    | 'cash'
    | 'calender'
    | 'chat'
    | 'check'
    | 'checkbox'
    | 'close'
    | 'closeRound'
    | 'delete'
    | 'done'
    | 'estimate'
    | 'facebook'
    | 'heart'
    | 'heartColored'
    | 'hamburger'
    | 'inquiry'
    | 'image'
    | 'kakao'
    | 'like'
    | 'moreSetting'
    | 'naver'
    | 'optionDown'
    | 'optionUp'
    | 'password'
    | 'qr'
    | 'smallMinus'
    | 'smallPlus'
    | 'search'
    | 'setting'
    | 'share'
    | 'star'
    | 'starHalf'
    | 'starEmpty'
    | 'textDelete'
    | 'url'
    | 'write'
    | 'nextPageArrow'
    | 'prevPageArrow'
    | 'plus';
  width?: string;
  height?: string;
  color?: string;
  style?: any;
  size?: 'small' | 'medium' | 'large';
  fill?: boolean;
  onClick?: () => void;
}

/**
 * SystemColor의 기본 색상은 GRAY4이며, 색상은 BLACK, WHITE, PRIMARY로 변경 가능합니다.
 *
 * 색상이 채워진 아이콘의 기본 색상은 PRIMARY이며, 위와 동일한 색상으로 변경 가능합니다. (color="값")
 *
 * 기본 크기는 24 x 24 입니다.
 */
const SystemIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'add':
      return <AddIcon {...props} />;
    case 'addProfile':
      return <AddProfileIcon {...props} />;
    case 'alarm':
      return <AlarmIcon {...props} />;
    case 'alarmNew':
      return <AlarmNewIcon {...props} />;
    case 'arrowRight':
      return <ArrowRightIcon {...props} />;
    case 'arrowLeft':
      return <ArrowLeftIcon {...props} />;
    case 'back':
      return <BackIcon {...props} />;
    case 'bookmark':
      return <BookmarkIcon {...props} />;
    case 'bookmarkColored':
      return <BookmarkColoredIcon {...props} />;
    case 'card':
      return <CardIcon {...props} />;
    case 'cash':
      return <CashIcon {...props} />;
    case 'calender':
      return <CalendarIcon {...props} />;
    case 'chat':
      return <ChatIcon {...props} />;
    case 'check':
      return <CheckIcon {...props} />;
    case 'checkbox':
      return <CheckBoxIcon {...props} />;
    case 'close':
      return <CloseIcon {...props} />;
    case 'closeRound':
      return <CloseRoundIcon {...props} />;
    case 'delete':
      return <DeleteIcon {...props} />;
    case 'done':
      return <DoneIcon {...props} />;
    case 'estimate':
      return <EstimateIcon {...props} />;
    case 'facebook':
      return <FacebookIcon {...props} />;
    case 'hamburger':
      return <HamburgerIcon {...props} />;
    case 'heart':
      return <HeartIcon {...props} />;
    case 'heartColored':
      return <HeartColoredIcon {...props} />;
    case 'inquiry':
      return <InquiryIcon {...props} />;
    case 'image':
      return <ImageIcon {...props} />;
    case 'kakao':
      return <KakaoIcon {...props} />;
    case 'like':
      return <LikeIcon {...props} />;
    case 'moreSetting':
      return <MoreSettingIcon {...props} />;
    case 'naver':
      return <NaverIcon {...props} />;
    case 'optionDown':
      return <OptionDownIcon {...props} />;
    case 'optionUp':
      return <OptionUpIcon {...props} />;
    case 'password':
      return <PasswordIcon {...props} />;
    case 'qr':
      return <QRCodeIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'setting':
      return <SettingIcon {...props} />;
    case 'share':
      return <ShareIcon {...props} />;
    case 'star':
      return <StarIcon {...props} />;
    case 'starHalf':
      return <StarHalfIcon {...props} />;
    case 'starEmpty':
      return <StarEmptyIcon {...props} />;
    case 'textDelete':
      return <TextDeleteIcon {...props} />;
    case 'url':
      return <UrlIcon {...props} />;
    case 'write':
      return <WriteIcon {...props} />;
    case 'nextPageArrow':
      return <NextPageArrow {...props} />;
    case 'prevPageArrow':
      return <PrevPageArrow {...props} />;
    case 'smallPlus':
      return <SmallPlusIcon {...props} />;
    case 'smallMinus':
      return <SmallMinusIcon {...props} />;
    case 'plus':
      return <PlusIcon {...props} />;
  }
  return null;
};

export default SystemIcon;
