import React, { useState, Ref, ReactNode } from 'react';
import styled, { css, ThemeConsumer } from 'styled-components';

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
      {label && <Label hasError={checkError}>이름</Label>}
      <FlexBox>
        <InputBox
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
        {errorText && checkError && <ErrorText sm>{errorText}</ErrorText>}
        {action && (
          <ActionBox
            width="84px"
            style={{ height: '40px', borderRadius: 0 }}
            label={action}
          />
        )}
      </FlexBox>
    </>
  );
};

export default BoxInput;

interface BoxProps {
  active: boolean;
  hasError: boolean;
}

const FlexBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input<BoxProps>`
  width: calc(100% - 40px);
  height: 38px;

  padding: 0; //reset
  padding: 0 20px;

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
  margin-left: 10px;
`;
