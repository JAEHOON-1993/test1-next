import { Props } from './types';

const GoogleIcon = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="systemicon_google"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <g id="logo_googleg_48dp" transform="translate(-11 -11)">
        <path
          id="Shape"
          fill="#4285f4"
          fill-rule="evenodd"
          d="M31.64 23.2a10.275 10.275 0 0 0-.164-1.841H23v3.481h4.844a4.141 4.141 0 0 1-1.8 2.716v2.264h2.908a8.779 8.779 0 0 0 2.688-6.62z"
        />
        <path
          id="Shape-2"
          fill="#34a853"
          fill-rule="evenodd"
          d="M23 32a8.594 8.594 0 0 0 5.956-2.18l-2.908-2.259a5.43 5.43 0 0 1-8.084-2.851h-3.007v2.332A9 9 0 0 0 23 32z"
        />
        <path
          id="Shape-3"
          fill="#fbbc05"
          fill-rule="evenodd"
          d="M17.964 24.71a5.326 5.326 0 0 1 0-3.42v-2.332h-3.007a9.014 9.014 0 0 0 0 8.084l3.007-2.332z"
        />
        <path
          id="Shape-4"
          fill="#ea4335"
          fill-rule="evenodd"
          d="M23 17.58a4.863 4.863 0 0 1 3.44 1.345l2.582-2.581A8.652 8.652 0 0 0 23 14a9 9 0 0 0-8.043 4.958l3.007 2.332A5.364 5.364 0 0 1 23 17.58z"
        />
        <path id="Shape-5" d="M14 14h18v18H14z" fill="none" />
      </g>
      <path id="사각형_30639" d="M0 0H24V24H0z" fill="none" />
    </svg>
  );
};

export default GoogleIcon;
