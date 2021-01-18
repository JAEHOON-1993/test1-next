import theme from 'layout/theme';

import { Props } from './types';

interface starProps extends Props {
  size?: 'small' | 'medium' | 'large';
}

const setWidth = (size: string) => {
  if (size === 'small') {
    return '14px';
  } else if (size === 'medium') {
    return '17.8px';
  } else if (size === 'large') {
    return '31.9px';
  }
};

const setHeight = (size: string) => {
  if (size === 'small') {
    return '14px';
  } else if (size === 'medium') {
    return '17px';
  } else if (size === 'large') {
    return '30.5px';
  }
};

const StarIcon = ({
  size = 'medium',
  width = setWidth(size),
  height = setHeight(size),
  color = theme.color.PRIMARY,
  ...props
}: starProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="구성_요소_186_4"
      width={width}
      height={height}
      viewBox="0 0 31.982 30.52"
    >
      <g>
        <path
          fill={color}
          d="M60.305 177.041l8.235 4.33a1.063 1.063 0 0 0 1.543-1.121l-1.573-9.17a1.064 1.064 0 0 1 .306-.941l6.663-6.494a1.063 1.063 0 0 0-.589-1.814l-9.208-1.338a1.064 1.064 0 0 1-.8-.582l-4.118-8.343a1.063 1.063 0 0 0-1.907 0l-4.118 8.343a1.064 1.064 0 0 1-.8.582l-9.208 1.338a1.063 1.063 0 0 0-.589 1.814l6.663 6.494a1.064 1.064 0 0 1 .306.941l-1.573 9.17a1.063 1.063 0 0 0 1.543 1.121l8.235-4.33a1.063 1.063 0 0 1 .989 0z"
          transform="translate(-43.819 -150.975)"
        />
      </g>
    </svg>
  );
};

export default StarIcon;
