import React from 'react';

import SuccessIcon from './Success';
import StarIcon from './Star';
import StarHalfIcon from './StarHalf';
import StarOIcon from './StarO';
import QRIcon from './QR';
import SearchIcon from './Search';
import HomeIcon from './Home';
import ChatIcon from './Chat';
import MypageIcon from './Mypage';
import ShoppingIcon from './Shopping';
import ArrowLeftIcon from './ArrowLeft';

export type IconName =
  | 'success'
  | 'star'
  | 'star-half'
  | 'star-o'
  | 'qr'
  | 'search'
  | 'home'
  | 'home-fill'
  | 'chat'
  | 'chat-fill'
  | 'mypage'
  | 'mypage-fill'
  | 'shopping'
  | 'shopping-fill'
  | 'arrow-left';

type Props = {
  name?: IconName;
  color?: string;
  style?: any;
  fill?: boolean;
  className?: any;
};

const Icon: React.FC<Props> = ({ name, fill, ...props }) => {
  switch (name) {
    case 'success':
      return <SuccessIcon {...props} />;
    case 'star':
      return <StarIcon {...props} />;
    case 'star-half':
      return <StarHalfIcon {...props} />;
    case 'star-o':
      return <StarOIcon {...props} />;
    case 'qr':
      return <QRIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'arrow-left':
      return <ArrowLeftIcon {...props} />;
    case 'home':
      return <HomeIcon {...props} fill={fill} />;
    case 'chat':
      return <ChatIcon {...props} fill={fill} />;
    case 'mypage':
      return <MypageIcon {...props} fill={fill} />;
    case 'shopping':
      return <ShoppingIcon {...props} fill={fill} />;
  }
  return null;
};

export default Icon;
