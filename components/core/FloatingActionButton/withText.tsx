import styled from 'styled-components';

import { LabelSize, IconSize, TextContainerSize } from './size';

interface Props {
  /**
   * 버튼에 label을 표시할 수 있습니다.
   */
  label?: string;
  /**
   * 버튼에 표시될 아이콘을 설정합니다.
   */
  icon: React.ReactNode;
  /**
   * 버튼의 색을 설정합니다.
   */
  backgroundColor?: string;
  /**
   * label 사용 시 표시되는 text의 색상을 설정합니다.
   */
  fontColor?: string;
  /**
   * 버튼 outline의 색상을 설정합니다.
   */
  outlineColor?: string;
  /**
   * sm, md, lg 3가지 사이즈가 제공되며, 기본값은 md 입니다.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 버튼 클릭 시 동작할 기능, 상태를 설정합니다.
   */
  onClick?: () => void;
}

const FloatingActionButtonWithText: React.FC<Props> = ({
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


type LabelProps = Pick<Props, 'size' | 'fontColor'>;
type IconContainerProps = Pick<
  Props,
  'size' | 'backgroundColor' | 'outlineColor'
>;

const LabelContainer = styled.div<LabelProps>`
  width: max-content;
  position: absolute;
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
