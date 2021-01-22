import { Props } from './types';

const KakaoIcon = ({ size = 24, color = '#20cf5d', ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 24"
    >
      <path
        d="M3.677 17.813c-.179-.106-.15-.121.893-3.7C1.827 12.766 0 10.366 0 7.628 0 3.416 4.328 0 9.662 0h.077c5.36 0 9.707 3.412 9.707 7.623 0 3.833-3.6 7.006-8.3 7.542A12.4 12.4 0 0 1 8 15.141c-3.234 2.267-3.929 2.7-4.2 2.7a.229.229 0 0 1-.123-.028z"
        transform="translate(2.345 3.517)"
      />
      <path fill="none" d="M0 0H25V24H0z" />
    </svg>
  );
};

export default KakaoIcon;
