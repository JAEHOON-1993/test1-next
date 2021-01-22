import ChatIcon from './Chat';
import CommunityIcon from './Community';
import HomeIcon from './Home';
import MoreIcon from './More';
import MyPageIcon from './MyPage';
import PageIcon from './Page';
import ShoppingIcon from './Shopping';
import StoreIcon from './Store';

export type nameProps =
  | 'chat'
  | 'community'
  | 'home'
  | 'myPage'
  | 'more'
  | 'page'
  | 'shopping'
  | 'store';
interface Props {
  name: nameProps;
  size?: string | number;
  fill?: boolean;
  style?: any;
}

/**
 * TabBarIcon은 PRIMARY 색상이며, 색상변경을 불가하며 outline만 가능합니다.
 *
 * 기본 크기는 24 x 24 입니다.
 */
const TabBarIcon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'chat':
      return <ChatIcon {...props} />;
    case 'community':
      return <CommunityIcon {...props} />;
    case 'home':
      return <HomeIcon {...props} />;
    case 'myPage':
      return <MyPageIcon {...props} />;
    case 'more':
      return <MoreIcon {...props} />;
    case 'page':
      return <PageIcon {...props} />;
    case 'shopping':
      return <ShoppingIcon {...props} />;
    case 'store':
      return <StoreIcon {...props} />;
  }

  return null;
};

export default TabBarIcon;
