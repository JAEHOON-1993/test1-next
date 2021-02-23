import CardIcon from './Card';
import PaperIcon from './Paper';
import PhoneIcon from './Phone';
import PeopleIcon from './People';
import ClickIcon from './Click';
import PopupIcon from './Popup';
import CallPopupIcon from './CallPopup';
import LoginIcon from './Login';

export type nameProps =
  | 'card'
  | 'callPopup'
  | 'click'
  | 'login'
  | 'paper'
  | 'phone'
  | 'people'
  | 'popup';
interface Props {
  name: nameProps;
  size?: string | number;
  style?: any;
}

/**
 * SingletonIcon은 ICON 색상으로 이루어졌으며, 색상 변경이 불가합니다.
 *
 * 기본 크기는 100 x 100 입니다.
 */
const SingletonIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'card':
      return <CardIcon {...props} />;
    case 'callPopup':
      return <CallPopupIcon {...props} />;
    case 'click':
      return <ClickIcon {...props} />;
    case 'login':
      return <LoginIcon {...props} />;
    case 'paper':
      return <PaperIcon {...props} />;
    case 'phone':
      return <PhoneIcon {...props} />;
    case 'people':
      return <PeopleIcon {...props} />;
    case 'popup':
      return <PopupIcon {...props} />;
  }

  return null;
};

export default SingletonIcon;
