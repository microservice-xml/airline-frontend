import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import React from "react";

const TextFieldControl : React.FC<{name : string, 
                                   control: any, 
                                   defaultValue?: string, 
                                   rules?: any,
                                   size?: any,
                                   fullWidth? : boolean,
                                   type? : any,
                                   margin? : any,
                                   error?: any,
                                   helperText? : string,
                                   label: string,
                                   disabled? : boolean,
                                   placeholder? : string,
                                   inputRef? : any}> = (props) => {
  return (
    <span className={"text-field-control-wrapper"}>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        rules={props.rules}
        
        render={({ field }) => {
          return (
            <TextField
              {...field}
              InputLabelProps={{ shrink: Boolean(field.value) }}
              size={props.size ? props.size : "small"}
              fullWidth={props.fullWidth ? props.fullWidth : true}
              type={props.type}
              margin={props.margin ? props.margin : "normal"}
              error={props.error}
              helperText={props.helperText}
              label={props.label}
              disabled={props.disabled}
              placeholder={props.placeholder}
              inputRef={(input) => {
                if (props.inputRef && input != null) {
                  input.focus();
                }
              }}
            />
          );
        }}
      />
    </span>
  );
};

export default TextFieldControl;