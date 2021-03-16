import styled, { ThemeConsumer } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';
import Button from 'components/Button';
import * as T from 'components/Typography';

interface Props {
  isLogin: boolean;
  color?: string;
  avatar?: string;
  toLogin: () => void;
}

const User = ({ isLogin, avatar, color, toLogin }: Props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          {isLogin ? (
            <UserInfo>
              {avatar ? (
                <Avatar src={avatar} />
              ) : (
                <SystemIcon
                  name="myPage"
                  color={color ? color : theme.color.BLACK}
                />
              )}
              <T.Title bold color={color ? color : theme.color.BLACK}>
                김똑똑 님
              </T.Title>
              <SystemIcon
                name="dropDownMenu"
                color={color ? color : theme.color.BLACK}
              />
            </UserInfo>
          ) : (
            <Button
              sm
              outline
              color={color ? color : theme.color.BLACK}
              onClick={toLogin}
            >
              <T.Text sm color={color ? color : theme.color.BLACK}>
                로그인/회원가입
              </T.Text>
            </Button>
          )}
        </>
      )}
    </ThemeConsumer>
  );
};

export default User;

const UserInfo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  > h1 {
    margin-right: 5px;
  }
  > svg {
    margin-right: 5px;
  }
`;

interface AvatarProps {
  src: string;
}
const Avatar = styled.div<AvatarProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;

  margin-right: 10px;
`;
