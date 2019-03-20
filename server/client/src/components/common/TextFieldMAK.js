import React from "react"

import {TextField, InputAdornment} from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";



export const styles = theme => ({
        root: {
            //background: "black"
            margin:0,
            padding:0
        },
        input: {
            margin: 0,
            padding:5,
        },
        label: {
            color: theme.palette.primary.main,
        },
        outlinedLabelStyleEmpty: {
            marginTop: -13
        },
        helperText: {
            marginTop: 0,

        }
});


const TextFieldMAK = (props) => {

    const {formType, item, input, meta: {touched, error, warning}} = props;
    const {classes} = props;

    const errorBoolean = Boolean(touched && error);

    let variant = 'standard';
    if (formType && formType.variant) {
        variant = formType.variant
    }

    let inputProps = {};
    let inputLabelProps = {};
    let formHelperTextProps = {className: classes.helperText};

    if (item.adornment) {
        switch (item.adornment.position) {
            case "end":
                inputProps = {endAdornment: <InputAdornment position="end">{item.adornment.text}</InputAdornment>};
                break;
            default:
                inputProps = {startAdornment: <InputAdornment position="start">{item.adornment.text}</InputAdornment>}
        }
    }
    if (variant === 'outlined') {
        inputProps = {...inputProps, classes: { input: classes.input  }};
        inputLabelProps= {...inputLabelProps, className: input.value ||props.meta.active
                ? classes.label
                : classes.label + " " + classes.outlinedLabelStyleEmpty}
    }
    else
    {
        inputLabelProps= {...inputLabelProps, className: classes.label}
    }




    let required = false;
    if (item.validations && item.validations.emptyCheck) {
        required = true;
    }

    return (
        <div >
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
                InputLabelProps={inputLabelProps}
                FormHelperTextProps={formHelperTextProps}

            />
        </div>
    );
};

export default withStyles(styles)(TextFieldMAK);
