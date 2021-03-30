import styled, { css } from 'styled-components';

interface Props {
  label?: string;
  icon?: React.ReactNode;
  color?: string;
  outlineColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const FloatingActionButton: React.FC<Props> = ({
  color='#ffffff',
  outlineColor='#f13838',
  disabled,
  icon,
  label,
  ...props
}) => {
  return (
    <Wrapper
      color={color}
      outlineColor={outlineColor}
      disabled={disabled}
      {...props}
    >
      {label && <div>{label}</div>}
      {icon && <IconContainer>{icon}</IconContainer>}
    </Wrapper>
  );
};
export default FloatingActionButton;

type IconContainerProps = Pick<Props, 'icon'>;

const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const Wrapper = styled.button<Props>`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: ${(props) => props.theme.color.WHITE};
      background-color: ${(props) => props.theme.color.GRAY4};
    `}
`;


