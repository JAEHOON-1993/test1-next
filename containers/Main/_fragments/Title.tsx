import React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Typography';

import { Props } from '../types';

const TitleContainer: React.FC<Props> = () => {
  return (
    <MainTitle>
      <div>
        <Title style={{ fontWeight: 'bold' }}>안녕하세요, Murat님!</Title>
        <Title>오늘은 어떤 걸 구매하시겠습니까?</Title>
      </div>
      <img src="/images/profile_default.png" />
    </MainTitle>
  );
};

export default TitleContainer;

const MainTitle = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 50px;
    height: 50px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    height: 80px;
    margin-top: 50px;
    margin-bottom: 22px;
  }
`;
