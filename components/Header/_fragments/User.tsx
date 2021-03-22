import styled, { ThemeConsumer } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';
import Button from 'components/Button';
import { Text, Title } from 'components/Typography';

interface Props {
  user: {
    isLogin: boolean;
    nickname: string;
    avatar?: string;
  };
  color?: string;
  toLogin?: () => void;
  togglePopup?: () => void;
}

const User = ({ user, color, toLogin, togglePopup }: Props) => {
  const onClickProfile = () => {
    if (togglePopup) {
      togglePopup();
    }
  };
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          {user?.isLogin ? (
            <UserInfo onClick={onClickProfile}>
              {user?.avatar ? (
                <Avatar src={user?.avatar} />
              ) : (
                <SystemIcon
                  name="myPage"
                  color={color ? color : theme.color.BLACK}
                />
              )}
              <Title bold color={color ? color : theme.color.BLACK}>
                {user?.nickname} 님
              </Title>
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
              <Text sm color={color ? color : theme.color.BLACK}>
                로그인/회원가입
              </Text>
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
  height: 40px;
  > h1 {
    margin-right: 5px;
  }
  > svg {
    margin-right: 5px;
  }
  ${(props) => props.theme.window.tab} {
    cursor: default;
    > svg {
      display: none;
    }
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
