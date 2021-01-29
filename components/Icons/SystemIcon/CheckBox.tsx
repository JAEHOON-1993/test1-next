import styled, { ThemeConsumer, css } from 'styled-components';

import { Props } from './types';

interface checkBoxProps extends Props {
  fill?: boolean;
}

const CheckBoxIcon = ({ color, fill, size = 24, ...props }: checkBoxProps) => {
  if (fill) {
    return (
      <ThemeConsumer>
        {(theme) => (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 30 30"
          >
            <RectBox
              width="30"
              height="30"
              fill={color}
              colored={color}
              rx="4"
            />
            <path
              fill="none"
              stroke={theme.color.WHITE}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5px"
              d="M-477.878 1324.843l6.506 6.314 9.394-11.014"
              transform="translate(484.457 -1310.228)"
            />
          </svg>
        )}
      </ThemeConsumer>
    );
  }
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 30 30"
        >
          <g fill={theme.color.WHITE} stroke={theme.color.GRAY4}>
            <rect width="30" height="30" stroke="none" rx="4" />
            <rect width="29" height="29" x=".5" y=".5" fill="none" rx="3.5" />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default CheckBoxIcon;

interface style {
  colored?: string;
}

const RectBox = styled.rect<style>`
  fill: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
