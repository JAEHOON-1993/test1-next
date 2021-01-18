import { Props } from './types';

const FacebookIcon = ({
  width = 25,
  height = 24,
  color = '#1877f3',
  ...props
}: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="facebook"
      width={width}
      height={height}
      viewBox="0 0 25 24"
    >
      <g>
        <path
          fill={color}
          d="M646.82 207.422v-9.634h3.718v-3.755h-3.718v-2.4c0-1.088.3-1.828 1.861-1.828h1.988v-3.358a26.668 26.668 0 0 0-2.9-.148c-2.867 0-4.829 1.75-4.829 4.964v2.769h-3.24v3.755h3.242v9.634z"
          transform="translate(1.169 1.173) translate(-629.653 -186.3)"
        />
      </g>
      <path fill="none" d="M0 0H25V24H0z" />
    </svg>
  );
};

export default FacebookIcon;
