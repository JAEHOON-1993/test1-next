import styled, { ThemeConsumer, css } from 'styled-components';

import { Props } from './types';

interface starProps extends Props {
  star?: 'small' | 'medium' | 'large';
}

const setSize = (star: string) => {
  if (star === 'small') {
    return '14px';
  } else if (star === 'medium') {
    return '16px';
  } else if (star === 'large') {
    return '30px';
  }
};

const StarHalfIcon = ({
  star = 'medium',
  size = setSize(star),
  color,
  ...props
}: starProps) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="구성_요소_186_4"
          width={size}
          height={size}
          viewBox="0 0 31.982 30.52"
        >
          <g>
            <path
              fill={theme.color.GRAY4}
              d="M60.305 177.041l8.235 4.33a1.063 1.063 0 0 0 1.543-1.121l-1.573-9.17a1.064 1.064 0 0 1 .306-.941l6.663-6.494a1.063 1.063 0 0 0-.589-1.814l-9.208-1.338a1.064 1.064 0 0 1-.8-.582l-4.118-8.343a1.063 1.063 0 0 0-1.907 0l-4.118 8.343a1.064 1.064 0 0 1-.8.582l-9.208 1.338a1.063 1.063 0 0 0-.589 1.814l6.663 6.494a1.064 1.064 0 0 1 .306.941l-1.573 9.17a1.063 1.063 0 0 0 1.543 1.121l8.235-4.33a1.063 1.063 0 0 1 .989 0z"
              opacity="0.58"
              transform="translate(-43.819 -150.975)"
            />
            <Path
              fill={theme.color.PRIMARY}
              colored={color}
              d="M6.767 30.462a1.068 1.068 0 0 1-.818-.384 1.039 1.039 0 0 1-.23-.861l1.571-9.17a1.055 1.055 0 0 0-.3-.94l-6.664-6.5A1.062 1.062 0 0 1 .912 10.8l9.208-1.34a1.064 1.064 0 0 0 .8-.581L15.039.535A1.051 1.051 0 0 1 15.645 0v25.945a1.163 1.163 0 0 0-.147.064l-8.237 4.33a1.058 1.058 0 0 1-.494.123z"
              transform="translate(0 .058)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default StarHalfIcon;

interface style {
  colored?: string;
}

const Path = styled.path<style>`
  fill: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
