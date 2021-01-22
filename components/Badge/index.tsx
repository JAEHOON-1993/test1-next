import styled, { css } from 'styled-components';

interface Props {
  label: string;
  color?: string;
  outline?: boolean;
}

/**
 * 카테고리 혹은 상태를 나타 날 때 사용하는 Badge 컴포넌트입니다.
 */
const Badge: React.FC<Props> = ({ label, color, outline }) => {
  return (
    <BadgeWrap color={color} outline={outline}>
      {label}
    </BadgeWrap>
  );
};

export default Badge;

interface styleProps {
  color?: string;
  outline?: boolean;
}

const BadgeWrap = styled.div<styleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  width: max-content;
  height: 32px;
  color: ${(props) => props.theme.color.WHITE};
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.color.PRIMARY};
  border-radius: 15px;

  ${(props) =>
    props.outline &&
    css`
      color: ${(props) => props.theme.color.PRIMARY};
      border: 1px solid ${(props) => props.theme.color.PRIMARY};
      background-color: ${(props) => props.theme.color.WHITE};

      ${(props) =>
        props.color &&
        css`
          color: ${props.color};
          border: 1px solid ${props.color};
        `}
    `}
`;
