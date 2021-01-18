/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import theme from 'layout/theme';
import { Text } from 'components/TypoGraphy';

export const customStyles = {
  menu: (provided: any) => ({
    ...provided,
    margin: 0,
    top: 'calc(100% - 2px)',
    boxShadow: 'none',
    border: `1px solid ${theme.color.GRAY2}`,
    borderTop: 0,
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: 0,
    borderTop: `1px solid ${theme.color.PRIMARY}`,
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    borderTop: `1px solid ${theme.color.GRAY1}`,
    color: state.isSelected ? theme.color.PRIMARY : theme.color.BLACK,
    backgroundColor: state.isSelected
      ? theme.color.PRIMARYSUB
      : theme.color.GRAY0,
  }),
  control: (_: any) => ({
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.color.PRIMARY}`,
    height: 50,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  valueContainer: () => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  placeholder: () => ({ color: theme.color.GRAY3 }),
  indicatorsContainer: () => ({
    padding: 0,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 1 : 1;
    const transition = 'opacity 300ms';
    const color = theme.color.BLACK;
    return { ...provided, opacity, transition, color };
  },
};

interface Props {
  options?: { value: string; label: string }[];
  placeholder?: string;
  defaultValue?: object | object[] | null | undefined;
  defaultInputValue?: string;
  inputValue?: string;
  isSearchable?: boolean;
  onClick?: any;
  children?: any;
  style?: any;
  title?: string | JSX.Element;
  chooseType?: any;
  isDisabled?: boolean;
  components?: any;
  value?: any;
}

const SelectComponent: React.FC<Props> = ({
  title,
  chooseType,
  defaultValue,
  isDisabled,
  inputValue,
  components,
  value,
  ...props
}) => {
  const handleChange = (e: any) => {
    chooseType(e.value);
  };

  return (
    <Wrap>
      <Label as="div" sm>
        {title}
      </Label>
      <CustomSelect
        {...props}
        styles={customStyles}
        onChange={handleChange}
        defaultValue={defaultValue}
        inputValue={inputValue}
        isDisabled={isDisabled}
        components={components}
        value={value}
      />
    </Wrap>
  );
};

export default SelectComponent;

interface wrapStyle {
  width?: string;
}

const Wrap = styled.div<wrapStyle>`
  width: ${({ width }) => (width ? width : '100%')};
  margin-bottom: 40px;
`;

const CustomSelect = styled(Select)`
  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.color.PRIMARY};
  }
`;

const Label = styled(Text)`
  color: ${(props) => props.theme.color.PRIMARY};
`;
