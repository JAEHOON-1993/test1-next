import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import Button from 'components/Button';
import { Text } from 'components/Typography';

interface uploadFileProps {
  title: string | JSX.Element;
  button?: boolean;
  info?: string | JSX.Element;
  // uploadedFile?: (() => void | undefined) | undefined;
  uploadedFile?: any;
}

const UploadFile = observer(
  ({ title, button, info, uploadedFile }: uploadFileProps) => {
    const inputRef = useRef<any | null>(null);
    const [file, setFile] = useState<any>({
      name: null,
      url: null,
    });

    const uploadFile = (e: any) => {
      e.preventDefault();
      let reader = new FileReader();
      let upload = e.target.files[0];
      reader.readAsDataURL(upload);
      reader.onloadend = () => {
        uploadedFile(upload);
        setFile({ name: upload.name, url: reader.result });
      };
    };

    return (
      <Wrap>
        <Label sm>{title}</Label>
        <Flex>
          <FileName>
            {file && (
              <Text as="a" download={file.name} href={file.url}>
                {file.name?.length > 50
                  ? `${file.name.slice(0, 50)}...${file.name.slice(
                      file.name?.lastIndexOf('.'),
                      file.name.length,
                    )}`
                  : file.name}
              </Text>
            )}
          </FileName>
          {button && (
            <ButtonBox onClick={() => inputRef.current.click()}>
              <Button label="등록" width="83px" />
              <input
                type="file"
                ref={inputRef}
                onChange={uploadFile}
                accept="image/*|application/*"
                hidden
              />
            </ButtonBox>
          )}
        </Flex>
        {info && (
          <InfoBox as="div" sm>
            {info}
          </InfoBox>
        )}
      </Wrap>
    );
  },
);

export default UploadFile;

const Wrap = styled.div`
  margin-bottom: 40px;
`;

const Label = styled(Text)`
  color: ${(props) => props.theme.color.PRIMARY};

  > span {
    color: ${(props) => props.theme.color.WARNING};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FileName = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.PRIMARY};
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  text-decoration: underline;
`;

const ButtonBox = styled.div`
  margin-left: 10px;
  > input {
    width: 100%;
    height: 100%;
  }
`;

const InfoBox = styled(Text)`
  color: ${(props) => props.theme.color.WARNING};
  margin-top: 10px;
`;
