import styled, { css } from 'styled-components';

import { light, dark } from 'layout/theme';
import { LabelSize, IconSize, TextContainerSize } from './size';

interface Props {
  label?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  outlineColor?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const FloatingActionButtonWithText: React.FC<Props> = ({
  backgroundColor = '#ffffff',
  outlineColor = light.color.PRIMARY,
  icon,
  label,
  size,
  fontColor,
  ...props
}) => {
  return (
    <TextContainer size={size}>
      <LabelContainer size={size}>{label}</LabelContainer>
      <IconContainer
      size={size}
        backgroundColor={backgroundColor}
        outlineColor={outlineColor}
        {...props}
      >
        {icon && <SvgContainer>{icon}</SvgContainer>}
      </IconContainer>
    </TextContainer>
  );
};
export default FloatingActionButtonWithText;

const LabelContainer = styled.div<Props>`
  width: max-content;
  position: absolute;
  font-weight: bold;
  ${(props) => LabelSize[props.size || 'md']}
  ${(props) => props.theme.window.tab} {
    ${(props) => LabelSize[props.size || 'md']}
  }
  ${(props) => props.theme.window.mobile} {
    ${(props) => LabelSize[props.size || 'md']}
  }
`;

type IconContainerProps = Pick<Props, 'icon'>;

const SvgContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const IconContainer = styled.button<Props>`
  position: relative;
  top: -15%;
  left: 71.5px;
  ${(props) => IconSize[props.size || 'md']}
  ${(props) => props.theme.window.tab} {
    ${(props) => IconSize[props.size || 'md']}
  }
  ${(props) => props.theme.window.mobile} {
    ${(props) => IconSize[props.size || 'md']}
  }
  background-color: ${(props) => props.backgroundColor};
  border-radius: 100%;
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
`;

const TextContainer = styled.div<Props>`
  position: relative;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  z-index: 2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  ${(props) => TextContainerSize[props.size || 'md']}
  ${(props) => props.theme.window.tab} {
    ${(props) => TextContainerSize[props.size || 'md']}
  }
  ${(props) => props.theme.window.mobile} {
    ${(props) => TextContainerSize[props.size || 'md']}
  }
  border-radius: 20px;
`;
