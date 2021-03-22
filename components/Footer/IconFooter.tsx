import React from 'react';

import styled from 'styled-components';

import TextBox from './_fragments/TextBox';
import Icons from './_fragments/Icons';
import SocialIcon from 'components/Icons/SocialIcon';

const FOOTER_DATA = [
  {
    label: 'Title',
    text1: '대표 | 홍길동',
    text2: '사업자등록번호 | 000-00-00000',
  },
  {
    label: 'Address',
    text1: '주소 | 서울특별시 강남구 6길 54, 6층 201호',
  },
  {
    label: 'Contact',
    text1: '전화 | 02-2323-2323',
  },
  {
    label: 'E-Mail',
    text1: '이메일 | honggildong@gmail.com',
  },
];

const IconFooter = () => {
  return (
    <Container>
      <TextContainer>
        {FOOTER_DATA.map((item, index) => (
          <TextBox key={index} {...item} />
        ))}
      </TextContainer>

      <IconsContainer>
        <Icons
          icons={
            <>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <SocialIcon name="kakaoTalk" color="currentColor" />
              </a>

              <a target="_blank" rel="noopener noreferrer" href="#">
                <SocialIcon name="web" color="currentColor" />
              </a>
            </>
          }
        />
      </IconsContainer>
    </Container>
  );
};

export default IconFooter;

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
    & > *:not(:last-child) {
      margin-right: 15px;
    }
  }

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

const IconsContainer = styled.div`
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
