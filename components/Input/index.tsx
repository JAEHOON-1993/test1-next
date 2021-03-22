import React, { useState, ReactNode, Ref } from 'react';
import styled, { css } from 'styled-components';

import * as T from 'components/Typography';

export interface Props {
  label?: string;
  id?: string;
  rows?: number;
  error?: boolean;
  disabled?: boolean;
  InputProps?: {
    ref?: Ref<any>;
    className?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
  };
  onChange?: any;
  placeholder?: string;
  name?: string;
  errorText?: string;
  value?: any;
  action?: any;
  isNullValue?: boolean;
  isReadOnly?: boolean;
}

const InputComponent: React.FC<Props> = ({
  name,
  label,
  placeholder,
  value,
  disabled,
  InputProps,
  action,
  error,
  errorText,
  isNullValue,
  isReadOnly,
  ...props
}) => {
  const [text, setText] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    if (!text) {
      setFocused(false);
    }
  };
  const changeHandler = (e: any) => {
    setText(e.target.value);
    props.onChange(e);
  };
  return (
    <div {...props}>
      {label && (
        <Label isNullValue={isNullValue} hasError={error}>
          {label}
        </Label>
      )}
      <FlexBox>
        <InputBox>
          <Input
            {...InputProps}
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={changeHandler}
            onFocus={onFocus}
            onBlur={onBlur}
            isNullValue={isNullValue}
            readOnly={isReadOnly}
            hasError={error}
          />
          {!error && <Hr focused={focused} />}
          {errorText && error && (
            <ErrorText sm as="div">
              {errorText}
            </ErrorText>
          )}
        </InputBox>
        {typeof action === 'string' || action instanceof String ? (
          <ActionBox>{action}</ActionBox>
        ) : (
          action
        )}
      </FlexBox>
    </div>
  );
};

export default InputComponent;

interface styleProp {
  focused?: boolean;
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: flex-start;
`;

const Label = styled(T.Text)<{ isNullValue?: boolean; hasError?: boolean }>`
  color: ${(props) => props.theme.color.PRIMARY};

  ${(props) =>
    props.isNullValue &&
    css`
      color: ${(props) => props.theme.color.GRAY3};
      > span {
        color: ${(props) => props.theme.color.GRAY3};
      }
    `}
  ${(props) =>
    props.hasError &&
    css`
      color: ${(props) => props.theme.color.WARNING};
    `}
`;

const Input = styled.input<{ isNullValue?: boolean; hasError?: boolean }>`
  all: unset;
  height: 50px;
  width: 100%;
  border-bottom: 1.5px solid ${(props) => props.theme.color.GRAY3};

  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  /* Tab */
  ${(props) => props.theme.window.tab} {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }

  ${(props) =>
    props.isNullValue &&
    css`
      > input:disabled {
        border-bottom: 1px solid ${(props) => props.theme.color.GRAY3};
        background: none;
      }
    `}
  ${(props) =>
    props.hasError &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.color.WARNING};
    `}
`;

const ActionBox = styled.div`
  margin-left: 10px;
`;

const Hr = styled.div`
  bottom: 0px;
  transition: 0.2s ease;
  width: 0%;
  height: 1.5px;
  background-color: ${(props) => props.theme.color.PRIMARY};
  position: absolute;
  ${(props: styleProp) =>
    props.focused &&
    css`
      width: 100%;
    `}
`;

const ErrorText = styled(T.Text)`
  color: ${(props) => props.theme.color.WARNING};
  margin: 10px 0;
`;
