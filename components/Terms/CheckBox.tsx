import React, { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import { Title, Text } from 'components/Typography';
import SystemIcon from 'components/Icons/SystemIcon';

interface Props {
  firstText?: string;
  secondText?: string;
  thirdText?: string;
  forthText?: string;
}

const Terms: React.FC<Props> = ({
  firstText,
  secondText,
  thirdText,
  forthText,
}) => {
  const [checked, setChecked] = useState({
    first: false,
    second: false,
    third: false,
    forth: false,
  });

  const props: Array<any> = [firstText, secondText, thirdText, forthText];

  const propsLength = props.filter((el: string) => el !== undefined).length;

  const toggleAll = () => {
    if (checked.first && checked.second && checked.third && checked.forth) {
      setChecked({
        first: false,
        second: false,
        third: false,
        forth: false,
      });
    } else {
      setChecked({
        first: true,
        second: true,
        third: true,
        forth: true,
      });
    }
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <EachTerms>
          <Text sm>{firstText}</Text>
          <SystemIcon
            name="done"
            onClick={() => setChecked({ ...checked, first: !checked.first })}
            color={checked.first ? theme.color.PRIMARY : undefined}
          />
        </EachTerms>
      )}
    </ThemeConsumer>
  );
};

export default Terms;

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

const EachTerms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    text-decoration: underline;
    color: ${(props) => props.theme.color.GRAY4};
  }
  > svg {
    cursor: pointer;
  }
`;
