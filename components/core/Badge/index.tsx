import styled, { css } from 'styled-components';

interface Props {
  size?: 'default' | 'small';
  label: string;
  color?: string;
  outline?: boolean;
  isDisabled?: boolean;
}
const sizes = {
  default: {
    pc: css`
      width: 53px;
      height: 30px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 15px;
    `,
    tab: css`
      width: 49px;
      height: 30px;
      font-size: 10px;
      line-height: 16px;
      padding: 0px 15px;
    `,
    mobile: css`
      width: 53px;
      height: 30px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 15px;
    `,
  },
  small: {
    pc: css`
      width: 39px;
      height: 26px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 8px;
    `,
    tab: css`
      width: 35px;
      height: 26px;
      font-size: 10px;
      line-height: 16px;
      padding: 0px 8px;
    `,
    mobile: css`
      width: 39px;
      height: 26px;
      font-size: 12px;
      line-height: 18px;
      padding: 0px 8px;
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
    <BadgeWrap
      size={size}
      color={color}
      outline={outline}
      isDisabled={isDisabled}
      {...props}
    >
      {label}
    </BadgeWrap>
  );
};

export default Badge;

Badge.defaultProps = {
  size: 'default',
};

interface styleProps {
  size?: 'default' | 'small';
  outline?: boolean;
  isDisabled?: boolean;
}

const BadgeWrap = styled.div<styleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  /* PC */
  ${(props) => sizes[props.size || 'default']['pc']}
  /* Tab */
  ${(props) => props.theme.window.tab} {
    ${(props) => sizes[props.size || 'default']['tab']}
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    ${(props) => sizes[props.size || 'default']['mobile']}
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
      color: ${(props) => props.theme.color.GRAY3};
      border: 1px solid ${(props) => props.theme.color.GRAY3};
      background-color: transparent;
    `}
`;
