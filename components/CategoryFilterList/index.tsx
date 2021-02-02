import React, { useState } from 'react';
import styled from 'styled-components';

import { Text } from 'components/Typography';
import CheckBox from 'components/CheckBox';

interface Props {
  data?: any;
  checked?: boolean;
  title?: string;
}

const CategoryFilterList: React.FC<Props> = ({ data, checked, title }) => {
  const [open, setOpen] = useState<number>(1);
  const isOpen = (_id: number) => {
    setOpen(_id);
    if (open === _id) {
      setOpen(0);
    }
  };
  return (
    <CheckBoxContainer>
      {title && <Text bold>{title}</Text>}
      {checked
        ? data.list?.map((cur: any, index: any) => {
            return (
              <CheckBox
                key={index}
                checked={cur.id === open}
                onClick={() => isOpen(cur.id)}
              >
                <div style={{ marginLeft: 10 }}>
                  <Text>{cur.name}</Text>
                </div>
              </CheckBox>
            );
          })
        : data.list?.map((cur: any, index: any) => {
            return (
              <div key={index} style={{ marginLeft: 10 }}>
                <Text>{cur.name}</Text>
              </div>
            );
          })}
    </CheckBoxContainer>
  );
};

export default CategoryFilterList;

const CheckBoxContainer = styled.div`
  background-color: '#fff';
  margin-top: 10px;
  z-index: 999;
  width: 100%;
`;
