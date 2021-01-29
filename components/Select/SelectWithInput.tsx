/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Creatable from 'react-select/creatable';

import { Text } from 'components/TypoGraphy';

interface Props {
  width?: string;
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

const SelectWithInputComponent: React.FC<Props> = ({
  width,
  title,
  chooseType,
  defaultValue,
  isDisabled,
  inputValue,
  components,
  value,
  ...props
}) => {
  const [hasValue, setHasValue] = useState<boolean>(false);
  const handleChange = (e: any) => {
    chooseType(e.value);
    setHasValue(true);
  };

  return (
    <Wrap width={width}>
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
        formatCreateLabel={(userInput: any) => `직접입력: ${userInput}`}
        hasValue={hasValue}
      />
    </Wrap>
  );
};

export default SelectWithInputComponent;

interface wrapStyle {
  width?: string;
}

const Wrap = styled.div<wrapStyle>`
  width: ${({ width }) => (width ? width : '100%')};
  margin-top: 20px;
  /* margin-bottom: 40px; */
`;

const CustomSelect = styled(Creatable)`
  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.color.PRIMARY};
  }

  & .Select {
    &__control {
      display: flex;
      align-items: center;
      border: 0;
      border-radius: 0;
      border-bottom: 1px solid ${(props) => props.theme.color.GRAY3};
      height: 50px;

      background-color: ${(props) => props.theme.background.PRIMARY};

      transition: 0.4s ease;

      ${(props) =>
        props.hasValue &&
        css`
          border-bottom: 1px solid ${props.theme.color.PRIMARY};
        `}

      &--is-focused {
        box-shadow: none !important;
        transition: 0.4s ease;
        border-bottom: 1px solid ${(props) => props.theme.color.PRIMARY};
      }
    }

    &__menu {
      margin: 0;
      top: calc(100% - 2px);
      box-shadow: 'none';
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
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;

      padding: 0;
    }
    &__single-value {
      color: ${(props) => props.theme.color.BLACK};
      height: 20px;
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
      padding: 0;
      &-separator {
        display: none;
      }
    }
  }
`;

const Label = styled(Text)`
  color: ${(props) => props.theme.color.PRIMARY};
`;
