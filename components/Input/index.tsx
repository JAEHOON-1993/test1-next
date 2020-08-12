import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import theme from "@layout/theme";

const CustomInput = withStyles({
  root: {
    width: "100%",
    margin: "15px 0",
    "& label.Mui-focused": {
      color: theme.color.PRIMARY,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.color.PRIMARY,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.color.PRIMARY,
      },
    },
  },
})(TextField);

class Input extends React.Component {
  state = {
    text: "",
    focused: false,
  };
  onFocus = () => {
    this.setState({ focused: true });
  };
  onBlur = () => {
    if (!this.state.text) {
      this.setState({ focused: false });
    }
  };
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { focused } = this.state;
    const { placeholder, label, ...props } = this.props;
    return (
      <CustomInput
        {...props}
        label={focused ? label : placeholder}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}

export default Input;
