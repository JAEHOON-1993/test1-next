import React, { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import { Text } from 'components/Typography';
import SystemIcon from 'components/Icons/SystemIcon';

interface Props {
  firstText?: string;
  secondText?: string;
  thirdText?: string;
  forthText?: string;
}

const Terms: React.FC<Props> = ({ firstText }) => {
  const [checked, setChecked] = useState({
    first: false,
    second: false,
    third: false,
    forth: false,
  });

  return (
    <ThemeConsumer>
      {(theme) => (
        <EachTerms>
          <Text size="sm">{firstText}</Text>
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
