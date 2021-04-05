import React from 'react';

import styled from 'styled-components';

export interface AspectRatioProps {
  /**
   * 가로세로 화면 비율입니다. 일반적인 값은 `21/9`, `16/9`, `9/16`, `4/3` 등 입니다.
   */
  ratio: number;
  /**
   * 콘텐츠의 최대 가로 길이를 나타냅니다.
   */
  maxWidth?: number | string;
}

/**
 * `AspectRatio` 컴포넌트는 비디오, 지도 등을 삽입하는 데 사용합니다.
 */
const AspectRatio: React.FC<AspectRatioProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default AspectRatio;

const Container = styled.div<AspectRatioProps>`
  position: relative;
  max-width: ${(props) =>
    props.maxWidth &&
    `${
      typeof props.maxWidth === 'string'
        ? props.maxWidth
        : `${props.maxWidth}px`
    }`};

  &::before {
    content: '';
    display: block;
    height: 0;
    padding-bottom: ${(props) => `${(1 / props.ratio) * 100}%`};
  }
  & > * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  * > img {
    object-fit: cover;
  }
`;
