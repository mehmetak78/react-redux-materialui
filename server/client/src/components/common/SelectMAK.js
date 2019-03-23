import React from "react"


import {Select,FormControl, InputLabel, OutlinedInput, Input, MenuItem, FormHelperText} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";


export const styles = theme => ({
    root: {
        margin:0,
        padding:0
    },
    select: {
        margin: 0,
        padding:5,
    },
    label: {
        color: theme.palette.primary.main,
    },
    outlinedLabelEmpty: {
        marginTop: -13
    },
    helperText: {
        marginTop: 0,

    }
});

const SelectMAK = (props) => {

    const {formType, label, options, validations,  input, meta: {touched, error, warning}} = props;

    const {classes} = props;

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

    const renderInputField = () => {
        switch (variant) {
            case "standard" :
                return (
                    <Input
                        {...input}
                        classes={{input: classes.input}}
                        id={input.name}
                        aria-describedby={input.name}
                    />
                );
            case "outlined" :
                return (
                    <OutlinedInput
                        {...input}
                        classes={{input: classes.input}}
                        id={input.name}
                        aria-describedby={input.name}
                        labelWidth={labelWidth}
                    />
                );
            default: return ""
        }
    };

    return (
        <FormControl variant={variant} fullWidth error={errorBoolean} required={required} >
            <InputLabel
                className={labelClassName}
                htmlFor={input.name}
                id={lblId}
            >
                {label}
            </InputLabel>

            <Select
                classes={{select: classes.select}}
                input={renderInputField()}>

                {options.map( (option, index) => (
                    <MenuItem key={index} value={option.value}>{option.title}</MenuItem>
                ))}
            </Select>
            {touched && (error || warning)
                ? <FormHelperText className={classes.helperText}  >{touched && (error || warning)}</FormHelperText>
                : ""
            }
        </FormControl>
    )
};

export default withStyles(styles)(SelectMAK);
