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
import SmallAnswerDisable from './SmallAnswerDisable';
import PlusIcon from './Plus';
import InvalidIcon from './Invalid';
import AnswerCorrect from './AnswerCorrect';
import AnswerFalse from './AnswerFalse';
import SoundIcon from './Sound';
import NewDotIcon from './NewDot';
import InfoIcon from './Info';
import GoogleIcon from './Google';
import MyPageIcon from './MyPage';
import ArchiveBoxIcon from './ArchiveBox';
import PaperClipIcon from './PaperClip';
import DropDownMenuIcon from './DropDownMenu';
import AppleIcon from './Apple'


export type nameProps =
  | 'add'
  | 'addProfile'
  | 'apple'
  | 'alarm'
  | 'alarmNew'
  | 'arrowRight'
  | 'arrowLeft'
  | 'back'
  | 'bookmark'
  | 'bookmarkColored'
  | 'calender'
  | 'chat'
  | 'check'
  | 'circleCheck'
  | 'checkbox'
  | 'close'
  | 'closeRound'
  | 'delete'
  | 'done'
  | 'facebook'
  | 'google'
  | 'heart'
  | 'heartColored'
  | 'hamburger'
  | 'image'
  | 'invalid'
  | 'info'
  | 'kakao'
  | 'like'
  | 'moreSetting'
  | 'newDot'
  | 'naver'
  | 'optionDown'
  | 'optionUp'
  | 'qr'
  | 'smallMinus'
  | 'smallPlus'
  | 'smallAnswerDisabled'
  | 'search'
  | 'setting'
  | 'share'
  | 'sound'
  | 'star'
  | 'starHalf'
  | 'starEmpty'
  | 'textDelete'
  | 'url'
  | 'write'
  | 'nextPageArrow'
  | 'prevPageArrow'
  | 'plus'
  | 'answerCorrect'
  | 'answerFalse'
  | 'paperClip'
  | 'dropDownMenu';

interface Props {
  name: nameProps | string;
  size?: string | number;
  color?: string;
  style?: any;
  star?: 'small' | 'medium' | 'large';
  fill?: boolean;
  onClick?: () => void;
}

/**
 * SystemColor??? ?????? ????????? GRAY4??????, ????????? BLACK, WHITE, ICON?????? ?????? ???????????????.
 *
 * ????????? ????????? ???????????? ?????? ????????? ICON??????, ?????? ????????? ???????????? ?????? ???????????????. (color="???")
 *
 * ?????? ????????? 24 x 24 ?????????.
 */
const SystemIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'add':
      return <AddIcon {...props} />;
    case 'apple':
      return <AppleIcon {...props} />;  
    case 'addProfile':
      return <AddProfileIcon {...props} />;
    case 'alarm':
      return <AlarmIcon {...props} />;
    case 'alarmNew':
      return <AlarmNewIcon {...props} />;
    case 'archiveBox':
      return <ArchiveBoxIcon {...props} />;
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
    case 'facebook':
      return <FacebookIcon {...props} />;
    case 'google':
      return <GoogleIcon {...props} />;
    case 'hamburger':
      return <HamburgerIcon {...props} />;
    case 'heart':
      return <HeartIcon {...props} />;
    case 'heartColored':
      return <HeartColoredIcon {...props} />;
    case 'image':
      return <ImageIcon {...props} />;
    case 'invalid':
      return <InvalidIcon {...props} />;
    case 'info':
      return <InfoIcon {...props} />;
    case 'kakao':
      return <KakaoIcon {...props} />;
    case 'like':
      return <LikeIcon {...props} />;
    case 'myPage':
      return <MyPageIcon {...props} />;
    case 'moreSetting':
      return <MoreSettingIcon {...props} />;
    case 'newDot':
      return <NewDotIcon {...props} />;
    case 'naver':
      return <NaverIcon {...props} />;
    case 'optionDown':
      return <OptionDownIcon {...props} />;
    case 'optionUp':
      return <OptionUpIcon {...props} />;
    case 'qr':
      return <QRCodeIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'setting':
      return <SettingIcon {...props} />;
    case 'share':
      return <ShareIcon {...props} />;
    case 'sound':
      return <SoundIcon {...props} />;
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
    case 'smallAnswerDisabled':
      return <SmallAnswerDisable {...props} />;
    case 'paperClip':
      return <PaperClipIcon {...props} />;
    case 'plus':
      return <PlusIcon {...props} />;
    case 'answerCorrect':
      return <AnswerCorrect {...props} />;
    case 'answerFalse':
      return <AnswerFalse {...props} />;
    case 'dropDownMenu':
      return <DropDownMenuIcon {...props} />;
  }
  return null;
};

export default SystemIcon;
