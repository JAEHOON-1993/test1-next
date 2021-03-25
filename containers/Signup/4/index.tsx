import React, { useRef } from 'react';
import Router from 'next/router';

import SignUpStore from 'stores/Signup';

import { Text } from 'components/Typography';
import ButtonBaseComponent from 'components/Button/ButtonBase';
import SystemIcon from 'components/Icons/SystemIcon';

import { Container, Nav, TextBox, Button, AvatarBox } from '../index.styled';

const DEFAULT_IMAGE = '/images/profile_default.png';

interface Props {
  fixed?: boolean;
  style?: any;
}

const SignUp4Container: React.FC<Props> = () => {
  const inputRef = useRef<any>(null);
  const handleImageChange = (e: any) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      SignUpStore.image = { file: file, preview: reader.result };
    };
    reader.readAsDataURL(file);
  };
  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/2')}>
          <SystemIcon name="arrowLeft" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <Text size="lg">프로필 사진을 등록해 주세요.(선택)</Text>
      </TextBox>
      <input
        ref={inputRef}
        name="avatar"
        type="file"
        hidden
        onChange={handleImageChange}
      />
      <AvatarBox
        onClick={() => inputRef.current.click()}
        src={
          SignUpStore.image.preview ? SignUpStore.image.preview : DEFAULT_IMAGE
        }
      >
        <div />
        <span>
          <SystemIcon name="plus" color="#fff" />
        </span>
      </AvatarBox>
      <Text>{SignUpStore.nickname}</Text>
      <Button round onClick={SignUpStore.register}>
        완료
      </Button>
    </Container>
  );
};

export default SignUp4Container;
