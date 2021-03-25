import styled, { ThemeConsumer } from 'styled-components';

import SystemIcon from 'components/Icons/SystemIcon';
import Button from 'components/Button';
import { Text, Title } from 'components/Typography';

interface Props {
  isLogin: boolean;
  color?: string;
  avatar?: string;
  toLogin: () => void;
  togglePopup?: () => void;
}

const User = ({ isLogin, avatar, color, toLogin, togglePopup }: Props) => {
  const onClickProfile = () => {
    if (togglePopup) {
      togglePopup();
    }
  };
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          {isLogin ? (
            <UserInfo onClick={onClickProfile}>
              {avatar ? (
                <Avatar src={avatar} />
              ) : (
                <SystemIcon
                  name="myPage"
                  color={color ? color : theme.color.BLACK}
                />
              )}
              <Title color={color ? color : theme.color.BLACK}>
                김똑똑 님
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
              <Text size="sm" color={color ? color : theme.color.BLACK}>
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
