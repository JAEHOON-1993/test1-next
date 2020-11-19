import React from "react";
import SuccessIcon from "./Success";
import RateIcon from "./Rate";
import QRIcon from "./QR";
import SearchIcon from "./Search";

type Props = {
  name: string;
  color?: string;
  style?: any;
  className?: any;
};

const Icon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case "success":
      return <SuccessIcon {...props} />;
    case "rate":
      return <RateIcon {...props} />;
    case "qr":
      return <QRIcon {...props} />;
    case "search":
      return <SearchIcon {...props} />;
  }
  return null;
};

export default Icon;
