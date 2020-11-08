import React, { useState, ReactNode, Ref } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import theme from "layout/theme";

const CustomInput = withStyles({
  root: {
    width: "100%",
    margin: "8px 0",
    color: theme.color.GRAY5,
    "& label.Mui-focused": {
      color: theme.color.PRIMARY,
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: theme.color.DANGER,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.color.PRIMARY,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.color.PRIMARY,
      },
      "&:hover fieldset": {
        borderColor: theme.color.PRIMARY,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.color.PRIMARY,
      },
    },
  },
})(TextField);

type Props = {
  id?: string;
  rows?: number;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | undefined;
  InputLabelProps?: object;
  InputProps?: {
    ref?: Ref<any>;
    className?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
  };
  inputProps?: object;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiline?: boolean;
  style?: any;
  onChange?: any;
  value?: any;
  variant?: any;
};

const Input: React.FC<Props> = (props) => {
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
  const onChange = (e: any) => {
    setText(e.target.value);
    props.onChange(e);
  };
  return (
    <CustomInput
      {...props}
      label={focused ? props.label : props.placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export default Input;
