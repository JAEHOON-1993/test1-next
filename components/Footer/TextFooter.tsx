import React from 'react';

import styled from 'styled-components';

import TextBox from './_fragments/TextBox';
import Others from './_fragments/Others';
import { Text } from 'components/Typography';

const FOOTER_DATA = [
  {
    label: 'Title',
  },
  {
    text1: '대표 | 홍길동',
    text2: '주소 | 서울 관악구 관악로',
    text3: '전화 | 02 - 123 - 1234',
  },
  {
    text1: '사업자번호 | 000 - 00 - 00000',
    text2: '통신판매업 | XXXX - XXXXXXXXX - XX',
  },
];

const TextFooter = () => {
  return (
    <Container>
      <TextContainer>
        {FOOTER_DATA.map((item, index) => (
          <TextBox key={index} {...item} />
        ))}
      </TextContainer>

      <OthersContainer>
        <Others
          copyright="ⓒABC All Right Reserved."
          terms={
            <>
              <Text
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                size="sm"
                color="inherit"
              >
                개인정보처리방침
              </Text>
              <Text
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                size="sm"
                color="inherit"
              >
                서비스이용약관
              </Text>
            </>
          }
        />
      </OthersContainer>
    </Container>
  );
};

export default TextFooter;

const Container = styled.div`
  position: relative;
  flex-grow: 1;
  height: 120px;

  ${(props) => props.theme.window.mobile} {
    height: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 22px;
  }

  ${(props) => props.theme.window.tab} {
    & > *:first-child {
      flex-basis: 70px;
    }

    & > *:not(:last-child) {
      margin-right: 15px;
    }
  }

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 30px;
    }
    && .textbox__label {
      margin-bottom: 0;
    }
  }
`;

const OthersContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;

  ${(props) => props.theme.window.mobile} {
    top: auto;
    left: 0;
  }
`;
