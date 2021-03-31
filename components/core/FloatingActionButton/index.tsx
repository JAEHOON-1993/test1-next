import styled, { css } from 'styled-components';

import { light, dark } from 'layout/theme';

interface Props {
  label?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  isMaxContent?: boolean;
  fontColor?: string;
  outlineColor?: string;
  onClick?: () => void;
}

const FloatingActionButton: React.FC<Props> = ({
  backgroundColor='#ffffff',
  outlineColor=light.color.PRIMARY,
  icon,
  fontColor,
  isMaxContent,
  label,
  ...props
}) => {
  return (
    <Wrapper
    isMaxContent={isMaxContent}
    backgroundColor={backgroundColor}
      outlineColor={outlineColor}
      {...props}
    >
      {label && <LabelContainer fontColor={fontColor}>{label}</LabelContainer>}
      {icon && <IconContainer>{icon}</IconContainer>}
    </Wrapper>
  );
};
export default FloatingActionButton;


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
  lg: {
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

type IconContainerProps = Pick<Props, 'icon'>;

const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const LabelContainer = styled.div<Props>`
  font-size: 15px;
  line-height: 27px;
  font-weight: 700;
  padding: 0px 18px;
  color: ${(props) => props.fontColor};
`;

const Wrapper = styled.button<Props>`
  cursor: pointer;
  width: ${(props) => (props.isMaxContent ? 'max-content' : '50px')};
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => (props.isMaxContent ? '60px' : '100%')};
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
`;


