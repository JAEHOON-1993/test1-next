import React, { useState, ReactNode, Ref } from "react";
import styled, {css} from "styled-components";

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
  name?: string;
  helperText?: string;
  value?: any;
  action?: any;
};

const InputComponent: React.FC<Props> = ({
  name,
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
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Hr focused={focused}/>
        {action && <ActionBox>{action}</ActionBox>}
      </InputBox>
    </div>
  );
};

export default InputComponent;

type styleProp = {
  focused?: boolean
}

const InputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Label = styled(T.Caption)`
  color: ${theme.color.PRIMARY};
`;
const Input = styled.input`
  all: unset;
  height: 50px;
  width: 100%;
  border-bottom: 1.5px solid ${theme.color.GRAY3};

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

const Hr = styled.div`
  bottom: 0px;
  transition: .2s ease;
  width: 0%;
  height: 1.5px;
  background-color: ${theme.color.PRIMARY};
  position: absolute;
  ${(props:styleProp) => props.focused && css`
    width: 100%;
  `}

`