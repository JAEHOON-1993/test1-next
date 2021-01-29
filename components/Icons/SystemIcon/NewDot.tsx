import styled, { css } from 'styled-components';

import { Props } from './types';

const NewDotIcon = ({ size = 14, color, ...props }: Props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="info_icon_black"
      width={size}
      height={size}
      viewBox="0 0 14 14"
    >
      <FillProps cx="7" cy="7" r="7" fill={color} colored={color} />
      <path
        fill="#fff"
        d="M20442.711 24033.207V24031l2.578 3.729V24031h1.711v6h-1.711v.006zM20441 24037v-6h1.711v6z"
        transform="translate(-20437 -24027)"
      />
    </svg>
  );
};

export default NewDotIcon;

interface style {
  colored?: string;
}

const FillProps = styled.circle<style>`
  fill: ${(props) => props.theme.color.POINT};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
