import styled, { css, ThemeConsumer } from 'styled-components';
import { Props } from './types';

const AddProfileIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color,
  ...props
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          id="add_profile_icon_20"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        >
          <FillProps
            id="타원_455"
            cx="12"
            cy="12"
            r="12"
            fill={color}
            colored={color}
          />
          <g id="그룹_904" transform="translate(6.275 6.273)">
            <path
              id="선_270"
              d="M0 0L0 10.552"
              fill="none"
              stroke={theme.color.WHITE}
              strokeLinecap="round"
              strokeWidth="1.5px"
              transform="translate(5.276)"
            />
            <path
              id="선_271"
              d="M0 0L0 10.552"
              fill="none"
              stroke={theme.color.WHITE}
              strokeLinecap="round"
              strokeWidth="1.5px"
              transform="rotate(90 2.638 7.914)"
            />
          </g>
        </svg>
      )}
    </ThemeConsumer>
  );
};

export default AddProfileIcon;

interface style {
  colored?: string;
}

const FillProps = styled.circle<style>`
  fill: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.colored &&
    css`
      fill: ${props.colored};
    `}
`;
