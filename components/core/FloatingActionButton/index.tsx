import styled, { css } from 'styled-components';

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 3가지 사이즈가 제공됩니다. 기본은 md입니다.
   */
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
   * label 사용 시 내부 contents만큼 width가 확장됩니다.
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
  /**
   * true일 경우 버튼에 필터효과를 적용합니다.
   */
  isFiltered?: boolean;
}

const FloatingActionButton: React.FC<Props> = ({
  backgroundColor = '#ffffff',
  size,
  outlineColor = 'blue',
  icon,
  fontColor,
  isMaxContent,
  label,
  isFiltered,
  ...props
}) => {
  return (
    <Container
      isMaxContent={isMaxContent}
      backgroundColor={backgroundColor}
      outlineColor={outlineColor}
      isFiltered={isFiltered}
      {...props}
    >
      {label == null ? (
        <IconContainer>{icon}</IconContainer>
      ) : (
        <LabelContainer size={size} fontColor={fontColor}>
          {label}
        </LabelContainer>
      )}
    </Container>
  );
};
export default FloatingActionButton;

type IconContainerProps = Pick<Props, 'icon'>;
type LabelProps = Pick<Props, 'size' | 'fontColor'>;

const LabelSize = {
  sm: css`
    font-size: 16px;
    line-height: 28px;
    width: 67px;
    height: 28px;
  `,
  md: css`
    font-size: 14px;
    line-height: 26px;
    width: 59px;
    height: 26px;
  `,
  lg: css`
    font-size: 15px;
    line-height: 27px;
    width: 63px;
    height: 27px;
  `,
};

const Container = styled.button<Props>`
  cursor: pointer;
  filter: ${(props) =>
    props.isFiltered && 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))'};
  width: ${(props) => (props.isMaxContent ? 'max-content' : '50px')};
  height: 50px;
  background: ${(props) => props.backgroundColor};
  box-sizing: border-box;
  border-radius: ${(props) => (props.isMaxContent ? '60px' : '100%')};
  border: 1px solid
    ${(props) => (props.outlineColor ? props.outlineColor : 'transparent')};
`;

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
  ${(props) => LabelSize[props.size || 'md']}
  font-weight: 700;
  margin: 0px 10px;
  color: ${(props) => props.fontColor};
`;

