import React from "react";
import SuccessIcon from "./Success";
import RateIcon from "./Rate";
import QRIcon from "./QR";
import SearchIcon from "./Search";
import HomeIcon from "./Home";
import ChatIcon from "./Chat";
import MypageIcon from "./Mypage";
import ShoppingIcon from "./Shopping";

export type IconName =
  | "success"
  | "rate"
  | "qr"
  | "search"
  | "home"
  | "home-fill"
  | "chat"
  | "chat-fill"
  | "mypage"
  | "mypage-fill"
  | "shopping"
  | "shopping-fill";

type Props = {
  name?: IconName;
  color?: string;
  style?: any;
  fill?: boolean;
  className?: any;
};

const Icon: React.FC<Props> = ({ name, fill, ...props }) => {
  switch (name) {
    case "success":
      return <SuccessIcon {...props} />;
    case "rate":
      return <RateIcon {...props} />;
    case "qr":
      return <QRIcon {...props} />;
    case "search":
      return <SearchIcon {...props} />;
    case "home":
      return <HomeIcon {...props} fill={fill} />;
    case "chat":
      return <ChatIcon {...props} fill={fill} />;
    case "mypage":
      return <MypageIcon {...props} fill={fill} />;
    case "shopping":
      return <ShoppingIcon {...props} fill={fill} />;
  }
  return null;
};

export default Icon;
