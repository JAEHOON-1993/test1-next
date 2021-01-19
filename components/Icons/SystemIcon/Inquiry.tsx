import styled, { css } from 'styled-components';

import { Props } from './types';

const InquiryIcon = ({ width = 24, height = 24, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="inquiry_icon"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <defs>
        <clipPath id="clip-path">
          <Path
            id="사각형_28951"
            d="M0 0H34.171V36.696H0z"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
          />
        </clipPath>
      </defs>
      <path id="사각형_28856" fill="none" d="M0 0H50V50H0z" />
      <g id="그룹_37316" transform="translate(10.879 7.018)">
        <g id="그룹_37315" clip-path="url(#clip-path)">
          <Path
            id="패스_264678"
            d="M25.65 22.488a.712.712 0 0 0-.712.712v12.074H1.423V7.632l5.5.008a.712.712 0 0 0 .712-.712v-5.5h17.304V13.66a.711.711 0 0 0 1.423 0V.714A.712.712 0 0 0 25.65 0H6.919a.72.72 0 0 0-.077.015.725.725 0 0 0-.2.04.707.707 0 0 0-.208.145c-.005 0-.013 0-.019.009L.208 6.416a.617.617 0 0 0-.046.069.692.692 0 0 0-.106.158.729.729 0 0 0-.046.23C.007 6.891 0 6.9 0 6.918v29.068a.712.712 0 0 0 .711.711H25.65a.712.712 0 0 0 .711-.711V23.2a.712.712 0 0 0-.711-.712M6.207 2.432v3.784l-3.78-.006z"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
          />
          <Path
            id="패스_264679"
            d="M31.207 14.152a.706.706 0 0 0-.5-.209.707.707 0 0 0-.5.209l-9.825 9.818a.691.691 0 0 0-.139.207.621.621 0 0 0-.026.072.793.793 0 0 0-.032.088l-.541 2.788a.712.712 0 0 0 .7.847.687.687 0 0 0 .135-.014l2.788-.541c.03-.006.058-.022.086-.031a.654.654 0 0 0 .074-.027.69.69 0 0 0 .206-.138l9.821-9.821a.712.712 0 0 0 0-1.006zm-9.879 11.771l.354.353-.439.086zM31.945 16.9l-8.813 8.814-1.241-1.241 8.809-8.812z"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
            transform="translate(-1.946 -1.382)"
          />
          <Path
            id="패스_264680"
            d="M37.172 13.673l-2.247-2.247a.71.71 0 0 0-1.006 0l-1.332 1.332a.711.711 0 0 0 0 1.005l2.247 2.247a.71.71 0 0 0 1.006 0l1.332-1.331a.712.712 0 0 0 0-1.006m-1.509.5l-.325.325L34.1 13.26l.326-.325z"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
            transform="translate(-3.209 -1.111)"
          />
          <Path
            id="패스_264681"
            d="M22.289 12.29H4.9a.711.711 0 1 0 0 1.423h17.389a.711.711 0 1 0 0-1.423"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
            transform="translate(-.416 -1.218)"
          />
          <Path
            id="패스_264682"
            d="M23 17.86a.712.712 0 0 0-.712-.712H4.9a.712.712 0 0 0 0 1.423h17.388A.712.712 0 0 0 23 17.86"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
            transform="translate(-.416 -1.699)"
          />
          <Path
            id="패스_264683"
            d="M19.11 22.717A.712.712 0 0 0 18.4 22H4.9a.712.712 0 0 0 0 1.423h13.5a.712.712 0 0 0 .712-.712"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
            transform="translate(-.416 -2.181)"
          />
          <Path
            id="패스_264684"
            d="M16.453 26.863H4.9a.712.712 0 0 0 0 1.423h11.55a.712.712 0 0 0 0-1.423"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
            transform="translate(-.416 -2.662)"
          />
          <Path
            id="패스_264685"
            d="M4.193 32.433a.712.712 0 0 0 .712.712h17.384a.712.712 0 0 0 0-1.423H4.9a.712.712 0 0 0-.712.712"
            fill={color}
            stroke={color}
            colored={color}
            strokeWidth=".3px"
            transform="translate(-.416 -3.143)"
          />
        </g>
      </g>
    </svg>
  );
};

export default InquiryIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  stroke: ${(props) => props.theme.color.PRIMARY};
  fill: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
      fill: ${props.colored};
    `}
`;
