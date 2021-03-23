import React from 'react';

import styled, { css } from 'styled-components';

import Container from 'components/Container';
import IconFooter from './IconFooter';
import TextFooter from './TextFooter';

export interface Props {
  /**
   * Footer는 2가지 타입이 제공됩니다. 기본은 icon footer입니다.
   */
  iconMode?: boolean;
  /**
   * Footer는 3가지 색상 모드가 제공됩니다. 기본은 dark입니다.
   */
  colorMode?: 'dark' | 'light' | 'primary';
}

/**
 * Footer 컴포넌트는 웹 사이트의 부가적인 정보들을 표시하기 위해 사용됩니다. 텍스트, 아이콘 등의 수정은 `IconFooter`와 `TextFooter`에서 할 수 있습니다.
 *
 * `Icon footer`는 SNS, 홈페이지 링크 연결 등의 아이콘을 제공합니다.
 *
 * `Text footer`는 텍스트 정보로만 구성되어 있습니다.
 */
const Footer: React.FC<Props> = ({ iconMode = true, colorMode = 'dark' }) => {
  return (
    <FooterContainer colorMode={colorMode}>
      <Container>
        <Content>{iconMode ? <IconFooter /> : <TextFooter />}</Content>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer<Props>`
  ${(props) => {
    switch (props.colorMode) {
      case 'dark':
        return css`
          color: ${props.theme.color.WHITE};
          background-color: ${props.theme.color.GRAY5};
        `;
      case 'light':
        return css`
          color: ${props.theme.color.GRAY4};
          background-color: ${props.theme.color.GRAY2};
        `;
      case 'primary':
        return css`
          color: ${props.theme.color.WHITE};
          background-color: ${props.theme.color.PRIMARY};
        `;
      default:
        return '';
    }
  }}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  ${(props) => props.theme.window.mobile} {
    height: 470px;
    align-items: flex-start;
    padding: 35px 0;
  }
`;
