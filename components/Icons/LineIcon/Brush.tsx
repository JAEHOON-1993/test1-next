import { Props } from './types';
import { StrokeProps } from './styled';

const BrushIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="line_brush_icon_50"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      {...props}
    >
      <path id="Rectangle-Copy-14" d="M0 0H50V50H0z" fill="none" />
      <g id="paint-brush-broad" transform="translate(6.456 6.262)">
        <path
          id="사각형_31658"
          d="M0 0H38V38H0z"
          fill="none"
          transform="translate(-.456 -.262)"
        />
        <StrokeProps
          id="패스_265567"
          d="M44.77 32h20.273a1.18 1.18 0 0 1 1.193 1.168v15.181a1.18 1.18 0 0 1-1.193 1.168h-23.85A1.18 1.18 0 0 1 40 48.349V36.671A4.721 4.721 0 0 1 44.77 32z"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          transform="translate(-34.161 -27.329)"
        />
        <StrokeProps
          id="패스_265568"
          d="M105.168 152L104 160.175a3.5 3.5 0 0 0 7.007 0L109.839 152"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          transform="translate(-88.543 -129.074)"
        />
        <StrokeProps
          id="선_479"
          d="M0 0L25 0"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          transform="translate(6.544 16.738)"
        />
        <StrokeProps
          id="선_480"
          d="M0 0L0 5"
          fill="none"
          colored={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3px"
          transform="translate(25.544 4.738)"
        />
      </g>
    </svg>
  );
};

export default BrushIcon;
