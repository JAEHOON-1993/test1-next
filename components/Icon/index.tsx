import React from "react";
import SuccessIcon from "./SuccessIcon";
import RateIcon from "./RateIcon";

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
  }
  return null;
};

export default Icon;
