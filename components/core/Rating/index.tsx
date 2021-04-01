import React, { useState } from 'react';

import styled from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';

import { makeStars } from './script';

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
  readOnly,
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleHover = (value: number) => {
    setHoverRating(value);
  };

  const getNumberOfStars = () => {
    if (!hoverRating && rating && rating <= max) return rating;
    return hoverRating;
  };
  const numberOfStars = getNumberOfStars();

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
            >
              <StyledSystemIcon name="starEmpty" color="transparent" />
            </InactiveIcon>
          ))}
      </InactiveIconContainer>
      <ActiveIconContainer>
        {makeStars(numberOfStars, max).map((value, index) => (
          <StyledSystemIcon
            key={index}
            name={
              value === 1 ? 'star' : value === 0.5 ? 'starHalf' : 'starEmpty'
            }
          />
        ))}
      </ActiveIconContainer>
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
};

const InactiveIcon = styled.div<InactiveIconProps>`
  width: 15px;
  overflow: hidden;
  line-height: 0;
  direction: ${(props) => (props.index % 2 === 0 ? 'ltr' : 'rtl')};
`;

const ActiveIconContainer = styled.div`
  position: absolute;
  pointer-events: none;
`;

const StyledSystemIcon = styled(SystemIcon)`
  /* Pc */
  width: 30px;
  height: 30px;
`;
