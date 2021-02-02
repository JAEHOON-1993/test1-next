import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

import * as T from 'components/Typography';
import { Card, CardHeader } from 'components/Card';
import SystemIcon from 'components/Icons/SystemIcon';

interface Props {
  children?: any;
  onClick?: any;
}

const OutlineCard: React.FC<Props> = (props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <AlertBox {...props}>
          <CardHeader
            title="주의사항"
            action={<SystemIcon name="alarm" color={theme.color.PRIMARY} />}
          />
          <T.Text sm>
            문제가 발생하는 경우 고객센터로 연락주시기 바랍니다.
          </T.Text>
        </AlertBox>
      )}
    </ThemeConsumer>
  );
};
export default OutlineCard;

const AlertBox = styled(Card)`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.PRIMARY};
  background-color: ${(props) => props.theme.color.WHITE};
  padding: 12px;
  h1,
  p {
    color: ${(props) => props.theme.color.PRIMARY};
  }
`;
