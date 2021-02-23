import { Props } from './types';
import { StrokeProps } from './styled';

const MusicNoteIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="line_music_note_icon_50"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      {...props}
    >
      <path id="사각형_30647" d="M0 0H50V50H0z" fill="none" />
      <g id="music-notes" transform="translate(5.508 5.508)">
        <path
          id="사각형_31657"
          d="M0 0H38V38H0z"
          fill="none"
          transform="translate(.491 .491)"
        />
        <StrokeProps
          as="circle"
          id="타원_3214"
          cx="4.5"
          cy="4.5"
          r="4.5"
          fill="none"
          strokeWidth="3px"
          strokeLinejoin="round"
          strokeLinecap="round"
          colored={color}
          transform="translate(22.491 21.491)"
        />
        <StrokeProps
          as="ellipse"
          id="타원_3215"
          cx="4.5"
          cy="4"
          fill="none"
          strokeWidth="3px"
          strokeLinejoin="round"
          strokeLinecap="round"
          colored={color}
          rx="4.5"
          ry="4"
          transform="translate(3.491 26.491)"
        />
        <StrokeProps
          id="선_478"
          d="M19 0L0 4"
          fill="none"
          strokeWidth="3px"
          strokeLinejoin="round"
          strokeLinecap="round"
          colored={color}
          transform="translate(12.491 12.491)"
        />
        <StrokeProps
          id="패스_265566"
          d="M80 57.778V36.8L99.183 32v20.982"
          fill="none"
          strokeWidth="3px"
          strokeLinejoin="round"
          strokeLinecap="round"
          colored={color}
          transform="translate(-67.885 -27.079)"
        />
      </g>
    </svg>
  );
};

export default MusicNoteIcon;
