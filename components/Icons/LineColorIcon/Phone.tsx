import styled, { css, ThemeConsumer } from 'styled-components';

import { Props } from './types';

const PhoneIcon = ({ size = 50, color, ...props }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 50 50"
        >
          <defs>
            <clipPath id="clipPath">
              <FillProps
                id="사각형_28931"
                d="M0 0H18.766V36.334H0z"
                fill={theme.color.PRIMARY}
                colored={color}
              />
            </clipPath>
          </defs>
          <g id="그룹_37293" transform="translate(16 6.395)">
            <g id="그룹_37292" clipPath="url(#clipPath)">
              <FillProps
                id="패스_264654"
                d="M16.943 0H1.822A1.824 1.824 0 0 0 0 1.822v32.69a1.824 1.824 0 0 0 1.822 1.822h15.121a1.824 1.824 0 0 0 1.822-1.822V1.822A1.824 1.824 0 0 0 16.943 0M1.437 28.659H17.33v5.853a.387.387 0 0 1-.386.386H1.822a.386.386 0 0 1-.386-.386zM17.33 4.54H1.437V1.822a.386.386 0 0 1 .386-.386h15.12a.387.387 0 0 1 .386.386zM1.437 5.976H17.33v21.246H1.437z"
                fill={theme.color.PRIMARY}
                colored={color}
              />
              <FillProps
                id="패스_264655"
                d="M12.97 49.069a2.3 2.3 0 1 0-2.3-2.3 2.3 2.3 0 0 0 2.3 2.3m-.86-2.3a.86.86 0 1 1 .86.86.861.861 0 0 1-.86-.86"
                fill={theme.color.PRIMARY}
                colored={color}
                transform="translate(-3.588 -14.949)"
              />
              <FillProps
                id="패스_264656"
                d="M14.177 3.42h-1.653a.718.718 0 0 0 0 1.436h1.654a.718.718 0 1 0 0-1.436"
                fill={theme.color.PRIMARY}
                colored={color}
                transform="translate(-3.968 -1.149)"
              />
            </g>
          </g>
          <path id="사각형_28932" fill="none" d="M0 0H50V50H0z" />
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default PhoneIcon;

interface style {
  colored?: string;
}

const FillProps = styled.path<style>`
  fill: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
