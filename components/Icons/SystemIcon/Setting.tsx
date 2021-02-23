import styled, { css } from 'styled-components';

import { Props } from './types';

const SettingIcon: React.FC<Props> = ({ size = 24, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="setting_icon_24"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path id="사각형_1961" d="M0 0H24V24H0z" fill="none" />
      <g id="그룹_461" transform="translate(2 2)">
        <g id="그룹_460">
          <g id="그룹_459">
            <StrokeProps
              id="패스_1002"
              fill="none"
              stroke={color}
              colored={color}
              strokeMiterlimit="10"
              d="M1806.648-26.042h-2.538a.277.277 0 0 1-.277-.253l-.18-2.069a7.708 7.708 0 0 1-2.545-.975l-1.527 1.282a.278.278 0 0 1-.376-.017l-1.794-1.794a.278.278 0 0 1-.016-.375l1.231-1.467a7.7 7.7 0 0 1-1.122-2.622l-1.871-.164a.278.278 0 0 1-.254-.277v-2.537a.279.279 0 0 1 .254-.277l1.871-.163a7.708 7.708 0 0 1 1.122-2.623l-1.231-1.466a.278.278 0 0 1 .016-.375l1.794-1.795a.279.279 0 0 1 .376-.016l1.527 1.282a7.708 7.708 0 0 1 2.545-.975l.18-2.069a.278.278 0 0 1 .277-.254h2.538a.278.278 0 0 1 .277.254l.191 2.183a7.751 7.751 0 0 1 2.323 1.038l1.739-1.459a.278.278 0 0 1 .375.016l1.795 1.795a.279.279 0 0 1 .016.375l-1.512 1.8a7.713 7.713 0 0 1 .9 2.246l2.37.206a.279.279 0 0 1 .254.277v2.538a.278.278 0 0 1-.254.277l-2.37.207a7.721 7.721 0 0 1-.9 2.246l1.512 1.8a.279.279 0 0 1-.016.375l-1.795 1.794a.277.277 0 0 1-.375.017l-1.739-1.459a7.748 7.748 0 0 1-2.323 1.037l-.191 2.183a.277.277 0 0 1-.277.253zm8.453-8.731z"
              transform="translate(-1795.379 46.042)"
            />
          </g>
        </g>
        <StrokeProps
          as="g"
          id="타원_456"
          fill="none"
          stroke={color}
          colored={color}
          transform="translate(5.969 5.969)"
        >
          <circle cx="3.966" cy="3.966" r="3.966" stroke="none" />
          <circle cx="3.966" cy="3.966" r="3.466" fill="none" />
        </StrokeProps>
      </g>
    </svg>
  );
};

export default SettingIcon;

interface style {
  colored?: string;
}

const StrokeProps = styled.path<style>`
  stroke: ${(props) => props.theme.color.BLACK};
  ${(props) =>
    props.colored &&
    css`
      stroke: ${props.colored};
    `}
`;
