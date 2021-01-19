/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import { Text } from 'components/TypoGraphy';

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
        classNamePrefix={'Select'}
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

  & .Select {
    &__control {
      display: flex;
      align-items: center;
      /* border-bottom: 1px solid ${(props) => props.theme.color.PRIMARY}; */
      height: 50;
    }

    &__menu {
      margin: 0;
      top: calc(100% - 2px);
      box-shadow: 'none';
      border: 1px solid ${(props) => props.theme.color.GRAY2};
      border-top: 0;
      &-list {
        padding: 0;
        border-top: 1px solid ${(props) => props.theme.color.PRIMARY};
      }
    }

    &__option {
      height: 50;
      display: 'flex';
      align-items: 'center';
      border-top: 1px solid ${(props) => props.theme.color.GRAY1};
      color: ${(props) => props.theme.color.BLACK};
      background-color: ${(props) => props.theme.color.GRAY0};
      &--is-selected {
        color: ${(props) => props.theme.color.PRIMARY};
        background-color: ${(props) => props.theme.color.PRIMARYSUB};
      }
    }

    &__value-container {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    &__single-value {
      color: ${(props) => props.theme.color.BLACK};
      opacity: 1;
      transition: opacity 300ms;
      &--is-disabled {
        opacity: 0;
      }
    }

    &__placeholder {
      color: ${(props) => props.theme.color.GRAY3};
    }

    &__indicator {
      &-separator {
        display: none;
      }
    }
  }
`;

const Label = styled(Text)`
  color: ${(props) => props.theme.color.PRIMARY};
`;
