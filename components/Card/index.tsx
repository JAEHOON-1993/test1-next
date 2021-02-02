import React from 'react';
import styled, { css } from 'styled-components';

import * as T from 'components/Typography';

interface CardProps {
  children?: any;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <CardComponent {...props}>{children}</CardComponent>;
};

const CardComponent = styled.div`
  background-color: ${(props) => props.theme.color.WHITE};
  border-radius: ${(props) => props.theme.radius};
  padding: 10px 20px;
  max-width: 375px;
`;

interface CardHeaderProps {
  title?: string;
  subTitle?: string;
  thumbnail?: any;
  avatar?: any;
  action?: any;
  children?: any;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subTitle,
  thumbnail,
  avatar,
  action,
  children,
  ...props
}) => {
  return (
    <CardHeaderComponent {...props}>
      <CardHeaderImage avatar={avatar} thumbnail={thumbnail} />
      <CardHeaderText>
        {title && <T.Title>{title}</T.Title>}
        {subTitle && <T.Text>{subTitle}</T.Text>}
      </CardHeaderText>
      <CardHeaderAction>{action}</CardHeaderAction>
    </CardHeaderComponent>
  );
};

interface cardStyleProps {
  avatar: any;
  thumbnail: any;
}

const CardHeaderComponent = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeaderImage = styled.div<cardStyleProps>`
  background-size: cover;
  background-position: center;
  ${(props) =>
    props.thumbnail &&
    css`
      width: 60px;
      height: 60px;
      border-radius: 5px;
      background-image: url(${props.thumbnail});
    `}
  ${(props) =>
    props.avatar &&
    css`
      width: 50px;
      height: 50px;
      margin: 4px 0px;
      border-radius: 25px;
      background-image: url(${props.avatar});
    `}
`;

const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  > h1 {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.16px;
    margin: 0px;
  }
  > p {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
    margin: 0px;
  }
`;

const CardHeaderAction = styled.div`
  margin-left: auto;
  align-self: flex-start;
`;
