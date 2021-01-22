import { Props } from './types';

const NaverIcon = ({ size = 24, color = '#20cf5d', ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M171.341 256.052l-6.163-8.854h-5.109v16.544h5.352v-8.854l6.163 8.854h5.109V247.2h-5.352z"
        transform="translate(-156.615 -243.747)"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default NaverIcon;
