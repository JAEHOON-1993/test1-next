import styled from 'styled-components';

import { LabelContainerSize, IconSize, StyledLabelSize } from './size';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 4가지 사이즈가 제공됩니다. 기본은 md입니다.
   */
  size?: 'sm' | 'md' | 'lg';
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
   * 버튼 클릭 시 동작을 정의합니다.
   */
  onClick?: () => void;
}
/**
 * 안내 문구와 함께 표기되어 특정 동작을 유도하거나 수행하는 Floating Action Button with Text 입니다.
 */
const FloatingActionButtonWithText: React.FC<Props> = ({
  backgroundColor,
  outlineColor,
  icon,
  label,
  size,
  fontColor,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <LabelContainer size={size}>
        <StyledLabel fontColor={fontColor}>{label}</StyledLabel>
      </LabelContainer>
      <IconContainer
        size={size}
        backgroundColor={backgroundColor}
        outlineColor={outlineColor}
      >
        <SvgContainer>{icon}</SvgContainer>
      </IconContainer>
    </Container>
  );
};
export default FloatingActionButtonWithText;

FloatingActionButtonWithText.defaultProps = {
  size: 'md',
  backgroundColor: '#ffffff',
  label: 'label',
};

type LabelProps = Pick<Props, 'size' | 'fontColor'>;
type IconContainerProps = Pick<
  Props,
  'size' | 'backgroundColor' | 'outlineColor'
>;

const Container = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 131px;
  height: 50px;
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

const StyledLabel = styled.div<LabelProps>`
  color: ${(props) => props.fontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => StyledLabelSize[props.size || 'md']}
`;

const IconContainer = styled.button<IconContainerProps>`
  cursor: pointer;
  position: relative;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  right: 20%;
  ${(props) => IconSize[props.size || 'md']}
  background: ${(props) => props.backgroundColor};
  border-radius: 100%;
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
`;

const SvgContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 40px;
    height: 40px;
  }
`;
