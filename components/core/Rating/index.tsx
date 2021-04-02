import React, { useState } from 'react';

import styled from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';

export interface RatingProps {
  /**
   * 최대 평가(별)을 의미합니다.
   */
  max?: number;
  /**
   * 평가 점수 값입니다.
   */
  value?: number;
  /**
   * value가 변할때 실행되는 콜백함수입니다.
   */
  onChange?: (value: number) => void;
  /**
   * 아이콘의 크기를 지정할 수 있습니다.
   */
  size?: number;
  /**
   * hover, click 효과를 모두 제거합니다.
   */
  readOnly?: boolean;
}

/**
 * `Rating` 컴포넌트는 제품이나 서비스에 대한 사용자의 평가를 측정하는데 사용합니다. 또한 여러명의 평가을 나타낼 수도 있습니다.
 */
const Rating: React.FC<RatingProps> = ({
  max = 5,
  value: rating,
  onChange,
  size = 36,
  readOnly,
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleHover = (value: number) => {
    setHoverRating(value);
  };

  const getCurrentIndex = () => {
    if (!hoverRating && rating && rating <= max) {
      if (rating % 1 === 0) return rating * 2;

      const newRating = (rating % 1 > 0.5 ? 1 : 0.5) + Math.floor(rating);
      return newRating * 2;
    }

    return hoverRating * 2;
  };

  const currentIndex = getCurrentIndex();

  return (
    <Container readOnly={readOnly}>
      <InactiveIconContainer>
        {Array(max * 2)
          .fill(0)
          .map((_, index) => (
            <InactiveIcon
              key={index}
              index={index}
              onMouseEnter={() => handleHover((index + 1) / 2)}
              onMouseLeave={() => handleHover(0)}
              onClick={() => onChange && onChange((index + 1) / 2)}
              size={size}
            >
              <SystemIcon
                name={index + 1 <= currentIndex ? 'star' : 'starEmpty'}
                size={size}
              />
            </InactiveIcon>
          ))}
      </InactiveIconContainer>
    </Container>
  );
};

export default Rating;

type ContainerProps = Pick<RatingProps, 'readOnly'>;

const Container = styled.div<ContainerProps>`
  cursor: pointer;
  display: inline-flex;
  position: relative;
  pointer-events: ${(props) => props.readOnly && 'none'};
`;

const InactiveIconContainer = styled.div`
  display: inline-flex;
`;

type InactiveIconProps = {
  index: number;
} & Pick<RatingProps, 'size'>;

const InactiveIcon = styled.div<InactiveIconProps>`
  width: ${(props) => props.size && `${props.size / 2}px`};
  overflow: hidden;
  line-height: 0;
  direction: ${(props) => (props.index % 2 === 0 ? 'ltr' : 'rtl')};
`;
