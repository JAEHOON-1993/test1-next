import styled, { css } from 'styled-components';

import { Props } from './types';

const AnswerCorrectIcon: React.FC<Props> = ({ color, size = 24, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="small_answer_correct"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <FillProps
        fill={color}
        colored={color}
        d="M42 84A42.011 42.011 0 0 1 25.652 3.3a42.011 42.011 0 0 1 32.7 77.4A41.737 41.737 0 0 1 42 84zm0-73.715a31.616 31.616 0 1 0 12.345 2.492A31.516 31.516 0 0 0 42 10.285z"
        transform="translate(8 9)"
      />
      <path fill="none" d="M0 0H100V100H0z" />
    </svg>
  );
};

export default AnswerCorrectIcon;

interface style {
  colored?: string;
}

const FillProps = styled.path<style>`
  fill: ${(props) => props.theme.color.ICON};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
