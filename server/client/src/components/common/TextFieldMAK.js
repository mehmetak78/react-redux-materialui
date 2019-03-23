import React from "react"


import {FormControl, OutlinedInput, InputAdornment} from '@material-ui/core';
import {InputLabel, Input, FormHelperText} from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";

export const styles = theme => ({
        input: {
            margin: 0,
            padding:5
        },
        label: {
            color: theme.palette.primary.main,
        },
        outlinedLabelEmpty: {
            marginTop: -13
        },
        helperText: {
            marginTop: 1,
        },
        focused: {
            fontWeight: "bold"
    }
});

const TextFieldMAK = (props) => {
    const {classes} = props;
    const {formType} = props;
    const {adornment, validations, autoComplete, label, input, meta: {touched, error, warning}} = props;

    let variant = 'standard';
    const lblId = "lbl_"+input.name;
    let labelWidth= 0;
    if (formType && formType.variant) {
        variant = formType.variant;
        const lbl = document.getElementById(lblId);
        labelWidth = lbl ? lbl.offsetWidth: 0;
    }

    let labelClassName = classes.label;

    if (input.value || props.meta.active) {
        labelClassName = labelClassName + " " + classes.focused;
    }

    if (variant === 'outlined' && !input.value && !props.meta.active) {
        labelClassName = labelClassName + " " + classes.label + " " + classes.outlinedLabelEmpty
    }

    const errorBoolean = Boolean(touched && error);
    const required = validations && validations.emptyCheck;

    let adornmentProps = {};
    const renderInputField = () => {
        if (adornment) {
            switch (adornment.position) {
                case "end":
                    adornmentProps = {endAdornment: <InputAdornment position="end">{adornment.text}</InputAdornment>};
                    break;
                default:
                    adornmentProps = {startAdornment: <InputAdornment position="start">{adornment.text}</InputAdornment>}
            }
        }
        switch (variant) {
            case "standard" :
                return (
                    <Input
                        {...input}
                        classes={{input: classes.input}}
                        id={input.name}
                        aria-describedby={input.name}
                        autoComplete={autoComplete}
                        {...adornmentProps}

                    />
                );
            case "outlined" :
                return (
                    <OutlinedInput
                        {...input}
                        classes={{input: classes.input}}
                        id={input.name}
                        aria-describedby={input.name}
                        autoComplete={autoComplete}
                        labelWidth={labelWidth}
                        {...adornmentProps}
                    />
                    );
            default: return ""
        }
    };

    return (
        <div >
            <FormControl fullWidth error={errorBoolean} required={required} variant={variant}>
                <InputLabel
                    className={labelClassName}
                    htmlFor={input.name}
                    id={lblId}
                >
                    {label}
                </InputLabel>
                {renderInputField()}
                {touched && (error || warning)
                    ? <FormHelperText className={classes.helperText}  >{touched && (error || warning)}</FormHelperText>
                    : ""
                }
            </FormControl>
        </div>
    );

};

export default withStyles(styles)(TextFieldMAK);
