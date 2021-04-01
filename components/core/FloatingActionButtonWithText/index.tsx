import styled from 'styled-components';

import { LabelContainerSize, IconSize, LabelSize } from './size';

interface WithTextProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  /**
   * 버튼에 label을 표시할 수 있습니다.
   */
  label?: string;
  /**
   * 버튼에 표시될 아이콘을 설정합니다.
   */
  icon?: React.ReactNode;
  /**
   * 버튼의 색을 설정합니다.
   */
  backgroundColor?: string;
  /**
   * 설정 시 내부 contents만큼 width가 확장됩니다.
   */
  isMaxContent?: boolean;
  /**
   * label 사용 시 표시되는 text의 색상을 설정합니다.
   */
  fontColor?: string;
  /**
   * 버튼 outline의 색상을 설정합니다.
   */
  outlineColor?: string;
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
    <TextContainer onClick={onClick}>
      <LabelContainer size={size} fontColor={fontColor}>
        <LabelCon>{label}</LabelCon>
      </LabelContainer>
      <IconContainer
          size={size}
          backgroundColor={backgroundColor}
          outlineColor={outlineColor}
        >
          <SvgContainer>{icon}</SvgContainer>
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

const LabelCon = styled.div<LabelProps>`
  display: flex;
  justify-content: center;
  ${(props) => LabelSize[props.size || 'md']}
`;

const LabelContainer = styled.div<LabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 35px 6px 15px;
  font-weight: bold;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  ${(props) => LabelContainerSize[props.size || 'md']}
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
  z-index: 2;
  position: relative;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  right: 20%;
  ${(props) => IconSize[props.size || 'md']}
  background: ${(props) => props.backgroundColor};
  border-radius: 100%;
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
`;

const TextContainer = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  cursor: pointer;  
  width: 131px;
  height: 50px;
`;
