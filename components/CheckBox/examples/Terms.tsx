import React, { useRef, useState, useEffect } from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import { Text, Title } from 'components/Typography';
import CheckBox from 'components/CheckBox/SecondBox';
import SystemIcon from 'components/Icons/SystemIcon';

const DATA = [
  { id: 1, label: '옵션1' },
  { id: 2, label: '옵션2' },
];

const Terms = () => {
  const listBoxRef = useRef<any>(null);
  const [checked, setChecked] = useState<Array<boolean>>([]);
  const arr = JSON.parse(JSON.stringify(checked));

  useEffect(() => {
    setChecked(new Array(listBoxRef.current.childNodes.length).fill(false));
  }, []);

  const onClick = async (val: boolean, idx: number) => {
    arr[idx] = val;
    setChecked(arr);
  };

  const onToggleAll = () => {
    const checkedLength = checked.filter((el: boolean) => el === false).length;
    if (checkedLength > 0) {
      setChecked(arr.fill(true));
    } else {
      setChecked(arr.fill(false));
    }
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <Wrap>
          <TitleDiv>
            <Title bold>아래 약관에 동의합니다.</Title>
            <SystemIcon
              name="check"
              onClick={onToggleAll}
              color={
                checked.filter((el: boolean) => el === true).length ===
                checked.length
                  ? `${theme.color.PRIMARY}`
                  : undefined
              }
            />
          </TitleDiv>
          <ContentDiv ref={listBoxRef}>
            {DATA.map((data: any, idx: number) => {
              return (
                <CheckBox
                  checked={checked?.[idx]}
                  onChange={(val: boolean) => onClick(val, idx)}
                  isLink
                >
                  <Text sm>{data.label}</Text>
                </CheckBox>
              );
            })}
          </ContentDiv>
        </Wrap>
      )}
    </ThemeConsumer>
  );
};

export default Terms;

const Wrap = styled.div`
  max-width: 400px;
  margin: auto;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  /* border-bottom: 2px solid ${(props) => props.theme.color.PRIMARY}; */
  > svg {
    cursor: pointer;
  }
`;

const ContentDiv = styled.div`
  margin: 30px 0;
  margin-bottom: 70px;
  > div {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
