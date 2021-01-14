export interface Props {
  color?: string;
  style?: any;
  className?: any;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export interface WithFillProps extends Props {
  fill?: boolean;
}
