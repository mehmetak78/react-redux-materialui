import React from "react"

import {TextField, InputAdornment} from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";
const styles = {
    input1: {
        height: 1
    }
};


const TextFieldMAK = (props) => {

    const {formType, item, input, meta: {touched, error, warning}} = props;

    const errorBoolean = Boolean(touched && error);

    let variant = 'standard';
    if (formType && formType.variant) {
        variant = formType.variant
    }

    let inputProps = {};
    if (item.adornment) {
        switch (item.adornment.position) {
            case "end":
                inputProps = {endAdornment: <InputAdornment position="end">{item.adornment.text}</InputAdornment>};
                break;
            default:
                inputProps = {
                    startAdornment: <InputAdornment position="start">{item.adornment.text}</InputAdornment>
                }
        }
    }
    if (variant === 'outlined') {
        inputProps = {...inputProps, classes: { input: props.classes.input1  }};
    }

    let required = false;
    if (item.validations && item.validations.emptyCheck) {
        required = true;
    }

    return (
        <div>
            <TextField

                required={required}
                fullWidth
                {...input}

                label={item.label}
                autoComplete={item.autoComplete}
                error={errorBoolean}
                helperText={touched && (error || warning)}
                variant={variant}
                InputProps={inputProps}
            />
        </div>
    );
};

export default withStyles(styles)(TextFieldMAK);
;
