import React, { useState, ReactNode, Ref } from "react";
import styled from "styled-components";

import * as T from "components/Text";
import theme from "layout/theme";

type Props = {
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
  helperText?: string;
  value?: any;
  action?: any;
};

const InputComponent: React.FC<Props> = ({
  label,
  placeholder,
  value,
  disabled,
  InputProps,
  action,
  ...props
}) => {
  const [text, setText] = useState<string>("");
  const [focused, setFocused] = useState<Boolean>(false);
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
      {label && <Label>{label}</Label>}
      <InputBox>
        <Input
          {...InputProps}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={changeHandler}
        />
        {action && <ActionBox>{action}</ActionBox>}
      </InputBox>
    </div>
  );
};

export default InputComponent;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled(T.Caption)`
  color: ${theme.color.PRIMARY};
`;
const Input = styled.input`
  all: unset;
  height: 50px;
  width: 100%;
  border-bottom: 1.5px solid ${theme.color.PRIMARY};

  font-size: 15px;
  line-height: 1.53;
  letter-spacing: -0.15px;
  /* Tab */
  @media screen and (max-width: 991.98px) {
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.14px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }
`;

const ActionBox = styled.div`
  margin-left: 10px;
  width: auto;
`;
