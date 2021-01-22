import { NextPage } from 'next';
import styled from 'styled-components';

interface gradientProps {
  /**
    첫 번째로 올 색상
   */
  first: string;
  /**
    두 번째로 올 색상
   */
  second: string;
  /**
    gradient 방향, 현재 디자인시스템에서 아래 3개만 존재
   */
  position?: 'to right' | 'to bottom' | '135deg';
  style?: any;
  children?: React.ReactChild | JSX.Element;
}

/**
 * 필수로 first, second, position을 넘겨주어야 합니다.
 */
const Gradient: NextPage<gradientProps> = ({
  first,
  second,
  position = 'to right',
  children,
  ...props
}) => {
  return (
    <GradientWrap first={first} second={second} position={position} {...props}>
      {children}
    </GradientWrap>
  );
};

export default Gradient;

interface gradientStyleProps {
  first: string;
  second: string;
  position: string;
}

const GradientWrap = styled.div<gradientStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `linear-gradient(${props.position}, ${props.first}, ${props.second})`};
  color: #fff;
  border-radius: 8px;
`;
