import styled from 'styled-components';

export interface FloatingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  isFiltered?: boolean;
}

const FloatingActionButton: React.FC<FloatingProps> = ({
  backgroundColor = '#ffffff',
  outlineColor,
  icon,
  fontColor,
  isMaxContent,
  label,
  isFiltered,
  ...props
}) => {
  return (
    <Wrapper
      isMaxContent={isMaxContent}
      backgroundColor={backgroundColor}
      outlineColor={outlineColor}
      isFiltered={isFiltered}
      {...props}
    >
      {label == null ? (
        <IconContainer>{icon}</IconContainer>
      ) : (
        <LabelContainer fontColor={fontColor}>{label}</LabelContainer>
      )}
    </Wrapper>
  );
};
export default FloatingActionButton;

type IconContainerProps = Pick<FloatingProps, 'icon'>;
type LabelProps = Pick<FloatingProps, 'fontColor'>;

const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 40px;
    height: 40px;
  }
`;

const LabelContainer = styled.div<LabelProps>`
  font-size: 15px;
  line-height: 27px;
  font-weight: 700;
  padding: 0px 18px;
  color: ${(props) => props.fontColor};
`;

const Wrapper = styled.button<FloatingProps>`
  cursor: pointer;
  filter: ${(props) => (props.isFiltered && 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))')};
  width: ${(props) => (props.isMaxContent ? 'max-content' : '50px')};
  height: 50px;
  background: ${(props) => props.backgroundColor};
  box-sizing: border-box;
  border-radius: ${(props) => (props.isMaxContent ? '60px' : '100%')};
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
`;
