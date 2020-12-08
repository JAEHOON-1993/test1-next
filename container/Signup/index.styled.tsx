import styled from 'styled-components';

import theme from 'layout/theme';

import ButtonComponent from 'components/Button';
import InputComponent from 'components/Input';

export const Nav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  + div {
    display: flex;
  }
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Large PC */
  width: 535px;

  /* Small PC */
  ${(props) => props.theme.window.pc} {
    width: 535px;
  }
  /* Tab */
  ${(props) => props.theme.window.tab} {
    width: 345px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  > p {
    color: ${theme.color.GRAY5};
    line-height: 1.8;
  }
  height: 92px;
  /* Tab */
  ${(props) => props.theme.window.tab} {
    height: 72px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    height: 72px;
  }
`;

export const Input = styled(InputComponent)`
  width: 100%;
  /* Large PC */
  margin-top: 70px;

  /* Small PC */
  ${(props) => props.theme.window.pc} {
    margin-top: 70px;
  }
  /* Tab */
  ${(props) => props.theme.window.tab} {
    margin-top: 50px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    margin-top: 20px;
    margin-bottom: auto;
  }
`;

export const Button = styled(ButtonComponent)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;

  /* Large PC */
  margin-top: 100px;

  /* Small PC */
  ${(props) => props.theme.window.pc} {
    margin-top: 100px;
  }
  /* Tab */
  ${(props) => props.theme.window.tab} {
    margin-top: 80px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    margin-top: auto;
  }
`;

export const ActionButton = styled(ButtonComponent)`
  width: 72px;
  height: 34px;
  font-size: 12px;
`;
