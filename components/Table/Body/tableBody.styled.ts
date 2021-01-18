import styled, { css } from 'styled-components';

import { Text } from 'components/TypoGraphy';

interface styleProps {
  color?: string;
  backgroundColor?: string;
  click?: boolean;
}

export const TRBox = styled.div<styleProps>`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 58px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    > p {
      text-align: center;
    }
  }

  ${(props) =>
    props.click &&
    css`
      background-color: ${(props) => props.theme.color.PRIMARYSUB};
      padding: 0;
      margin: 0;
    `}

  ${(props) => props.theme.window.tab} {
    padding: 0;
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      width: 100%;
      height: 45px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      &:nth-child(n + 4) {
        display: none;
      }
    }
  }
`;

export const TDText = styled(Text)<styleProps>`
  font-size: 15px;
  text-align: center;
`;
