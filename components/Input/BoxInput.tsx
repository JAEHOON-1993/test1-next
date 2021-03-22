import React, { useState, Ref, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Text } from 'components/Typography';
import Button from 'components/Button';

interface BoxInputProps {
  label?: string;
  errorRegex?: string | any;
  disabled?: boolean;
  onChange?: any;
  placeholder?: string;
  errorText?: string;
  isReadOnly?: boolean;
  name?: string;
  value?: any;
  InputProps?: {
    ref?: Ref<any>;
    className?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
  };
  action?: any;
}

const BoxInput: React.FC<BoxInputProps> = ({
  name,
  label,
  placeholder,
  value,
  disabled,
  InputProps,
  errorRegex,
  errorText,
  isReadOnly,
  action,
  //   ...props
}) => {
  const [text, setText] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [checkError, setCheckError] = useState<boolean>(false);
  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    if (!text) {
      setFocused(false);
    }

    if (text.match(errorRegex) === null) {
      setCheckError(true);
    } else {
      setCheckError(false);
    }
  };

  const changeHandler = (e: any) => {
    setText(e.target.value);
    console.log(errorRegex);
    console.log(text.match(errorRegex), text);
    // props.onChange(e);
  };

  return (
    <>
      {label && <Label hasError={checkError}>{label}</Label>}
      <InputBox>
        <Input
          {...InputProps}
          active={focused}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={changeHandler}
          readOnly={isReadOnly}
          hasError={checkError}
        />
        {action && <ActionBox>{action}</ActionBox>}
      </InputBox>
      {errorText && checkError && <ErrorText sm>{errorText}</ErrorText>}
    </>
  );
};

export default BoxInput;

interface BoxProps {
  active: boolean;
  hasError: boolean;
}

const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Input = styled.input<BoxProps>`
  width: 100%;
  height: 38px;

  padding: 0 15px;

  font-size: 16px;
  line-height: 28px;

  ${(props) =>
    props.active
      ? css`
          border: 1px solid ${(props) => props.theme.color.PRIMARY};
        `
      : css`
          border: 1px solid ${(props) => props.theme.color.GRAY3};
        `}

  ${(props) =>
    props.hasError &&
    css`
      border: 1px solid ${(props) => props.theme.color.WARNING};
    `}
`;

const Label = styled(Text)<{ hasError: boolean }>`
  color: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.hasError &&
    css`
      color: ${(props) => props.theme.color.WARNING};
    `}

  margin-bottom: 7px;
`;

const ErrorText = styled(Text)`
  color: ${(props) => props.theme.color.WARNING};

  margin-top: 10px;
`;

const ActionBox = styled(Button)`
  flex-shrink: 0;
  margin-left: 10px;
  width: 84px;
  height: 40px;
  border-radius: 0;
`;
