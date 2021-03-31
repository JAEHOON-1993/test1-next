import styled from 'styled-components';
import { FloatingProps } from '.';

import { LabelSize, IconSize, TextContainerSize } from './size';

interface WithTextProps extends FloatingProps {
  size?: 'sm' | 'md' | 'lg';
}

const FloatingActionButtonWithText: React.FC<WithTextProps> = ({
  backgroundColor = '#ffffff',
  outlineColor,
  icon,
  label,
  size,
  fontColor,
  onClick,
}) => {
  return (
    <TextContainer size={size} onClick={onClick}>
      <LabelContainer size={size} fontColor={fontColor}>
        {label}
      </LabelContainer>
      <IconContainer
        size={size}
        backgroundColor={backgroundColor}
        outlineColor={outlineColor}
      >
        {icon && <SvgContainer>{icon}</SvgContainer>}
      </IconContainer>
    </TextContainer>
  );
};
export default FloatingActionButtonWithText;

type LabelProps = Pick<WithTextProps, 'size' | 'fontColor'>;
type IconContainerProps = Pick<
  WithTextProps,
  'size' | 'backgroundColor' | 'outlineColor'
>;

const LabelContainer = styled.div<LabelProps>`
  position: absolute;
  width: max-content;
  margin: auto;
  font-weight: bold;
  ${(props) => LabelSize[props.size || 'md']}
`;

const SvgContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const IconContainer = styled.button<IconContainerProps>`
  cursor: pointer;
  position: relative;
  top: -15%;
  left: 71.5px;
  ${(props) => IconSize[props.size || 'md']}
  background: ${(props) => props.backgroundColor};
  border-radius: 100%;
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
`;

const TextContainer = styled.div<LabelProps>`
  cursor: pointer;
  position: relative;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  z-index: 2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  ${(props) => TextContainerSize[props.size || 'md']}
  border-radius: 20px;
`;
