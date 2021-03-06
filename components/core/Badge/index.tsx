import styled, { css } from 'styled-components';

interface Props {
  size?: 'sm' | 'md';
  label: string;
  color?: string;
  outline?: boolean;
  isDisabled?: boolean;
}
const sizes = {
  sm: {
    pc: css`
      height: 26px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 8px;
    `,
    tab: css`
      height: 26px;
      font-size: 10px;
      line-height: 16px;
      padding: 0px 8px;
    `,
    mobile: css`
      height: 26px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 8px;
    `,
  },
  md: {
    pc: css`
      height: 30px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 15px;
    `,
    tab: css`
      height: 30px;
      font-size: 10px;
      line-height: 16px;
      padding: 0px 15px;
    `,
    mobile: css`
      height: 30px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 15px;
    `,
  },
 
};
/**
 * 카테고리 혹은 상태를 나타낼 때 사용하는 Badge 컴포넌트입니다.
 */
const Badge: React.FC<Props> = ({
  size,
  label,
  color,
  outline,
  isDisabled,
  ...props
}) => {
  return (
    <Wrapper
      size={size}
      color={color}
      outline={outline}
      isDisabled={isDisabled}
      {...props}
    >
      {label}
    </Wrapper>
  );
};
export default Badge;

Badge.defaultProps = {
  size: 'md',
};

interface StyleProps {
  size?: 'sm' | 'md';
  outline?: boolean;
  isDisabled?: boolean;
}

const Wrapper = styled.div<StyleProps>`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  ${(props) => sizes[props.size || 'md']['pc']}
  ${(props) => props.theme.window.tab} {
    ${(props) => sizes[props.size || 'md']['tab']}
  }
  ${(props) => props.theme.window.mobile} {
    ${(props) => sizes[props.size || 'md']['mobile']}
  }
  color: white;
  font-weight: ${(props) => (props.isDisabled ? 400 : 700)};
  background-color: ${(props) =>
    props.color ? props.color : props.theme.color.PRIMARY};
  border-radius: 15px;

  ${(props) =>
    props.outline &&
    css`
      color: ${(props) => props.theme.color.PRIMARY};
      border: 1px solid ${(props) => props.theme.color.PRIMARY};
      background-color: transparent;
    `}
  ${(props) =>
    props.isDisabled &&
    css`
      color: ${(props) => props.theme.color.BLACK};
      background-color: ${(props) => props.theme.color.GRAY2};
    `}
  ${(props) =>
    props.isDisabled &&
    props.outline &&
    css`
      font-weight: 700;
      color: ${(props) => props.theme.color.GRAY3};
      border: 1px solid ${(props) => props.theme.color.GRAY3};
      background-color: transparent;
    `}
`;
