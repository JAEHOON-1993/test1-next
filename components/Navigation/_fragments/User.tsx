import styled, { ThemeConsumer } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';
import Button from 'components/Button';
import * as T from 'components/Typography';

interface Props {
  isLogin: boolean;
  avatar?: string;
}

const User = ({ isLogin }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          {isLogin ? (
            <UserInfo>
              <SystemIcon name="myPage" />
              <T.Title bold>김똑똑 님</T.Title>
            </UserInfo>
          ) : (
            <CustomButton outline color={theme.color.BLACK}>
              <T.Text sm>로그인/회원가입</T.Text>
            </CustomButton>
          )}
        </>
      )}
    </ThemeConsumer>
  );
};

export default User;

interface StyleProps {}

const CustomButton = styled(Button)`
  height: 30px;
`;

const UserInfo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 5px;
  }
`;
