import styled, { css } from 'styled-components';

import { light, dark } from 'layout/theme';

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

const IconSize = {
  sm: css`
    height: 49px;
    width: 49px;
  `,
  md: css`
    height: 49px;
    width: 49px;
  `,
  lg: css`
    height: 50px;
    width: 50px;
  `,
};

const LabelSize = {
  sm: css`
    font-size: 16px;
    line-height: 28px;
    left: 13.76%;
    right: 32.11%;
    top: 15%;
    bottom: 15%;
  `,
  md: css`
    font-size: 14px;
    line-height: 26px;
    left: 14.71%;
    right: 34.31%;
    top: 15.79%;
    bottom: 15.79%;
  `,
  lg: css`
    font-size: 15px;
    line-height: 27px;
    left: 14.15%;
    right: 33.02%;
    top: 15.38%;
    bottom: 15.38%;
  `,
};

const TextContainerSize = {
  sm: css`
    width: 106px;
    height: 39px;
  `,
  md: css`
    width: 102px;
    height: 39px;
  `,
  lg: css`
    width: 106px;
    height: 39px;
  `,
};

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
