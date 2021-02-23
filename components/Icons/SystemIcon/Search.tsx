import { Props } from './types';
import { StrokeProps } from './styled';

const SearchIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="search_icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path id="사각형_1956" d="M0 0H24V24H0z" fill="none" />
      <StrokeProps
        as="g"
        id="타원_455"
        fill="none"
        colored={color}
        strokeWidth="1.5px"
        transform="translate(2 2)"
      >
        <circle cx="8" cy="8" r="8" stroke="none" />
        <circle cx="8" cy="8" r="7.25" fill="none" />
      </StrokeProps>
      <StrokeProps
        id="선_228"
        fill="none"
        colored={color}
        strokeLinecap="round"
        strokeWidth="2px"
        d="M0 0L6 6"
        transform="translate(15.5 15.5)"
      />
    </svg>
  );
};

export default SearchIcon;
