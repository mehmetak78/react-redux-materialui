import React from "react"
import ReactDOM from 'react-dom';


import {FormControl, OutlinedInput, InputAdornment} from '@material-ui/core';
import {InputLabel, Input, FormHelperText} from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";

export const styles = theme => ({
        root: {
            margin:0,
            padding:0
        },
        margin: {
                margin: 0
        },
        input: {
     //       margin: 0,
            padding:5,
        },
        label: {
            color: theme.palette.primary.main,
        },
        outlinedLabelEmpty: {
            //marginTop: -13
        },
        helperText: {
            marginTop: 0,
        }
});
let labelRef = null;
const TextFieldMAK = (props) => {
    const {classes} = props;
    const {formType} = props;
    const {adornment, validations, autoComplete, label, input, meta: {touched, error, warning}} = props;

    const errorBoolean = Boolean(touched && error);

    let variant = 'standard';
    if (formType && formType.variant) {
        variant = formType.variant
    }

    let inputProps = {};
    let inputLabelProps = {};
    let formHelperTextProps = {className: classes.helperText};

    if (adornment) {
        switch (adornment.position) {
            case "end":
                inputProps = {endAdornment: <InputAdornment position="end">{adornment.text}</InputAdornment>};
                break;
            default:
                inputProps = {startAdornment: <InputAdornment position="start">{adornment.text}</InputAdornment>}
        }
    }

    inputProps = {...inputProps, classes: { input: classes.input  }};

    if (variant === 'outlined') {
        inputLabelProps= {...inputLabelProps, className: input.value ||props.meta.active
                ? classes.label
                : classes.label + " " + classes.outlinedLabelEmpty}
    }
    else
    {
        inputLabelProps= {...inputLabelProps, className: classes.label}
    }

    const required = validations && validations.emptyCheck;


    return (
        <div className={classes.root}>
            <FormControl fullWidth error={errorBoolean} required={required} className={classes.formControl} variant="outlined">
                <InputLabel
                    htmlFor={input.name}
                    ref={ref => {
                        labelRef = ReactDOM.findDOMNode(ref);
                    }}
                >
                    {label}
                </InputLabel>
                <OutlinedInput
                    {...input}
                    id={input.name}
                    aria-describedby={input.name}
                    autoComplete={autoComplete}
                    labelWidth={labelRef ? labelRef.offsetWidth : 0}
                />
                <FormHelperText id={input.name} >{touched && (error || warning)}</FormHelperText>
            </FormControl>
        </div>
    );


   {/* <FormControl className={classes.formControl} variant="outlined">
        <InputLabel
            ref={ref => {
                labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="component-outlined"
        >
            Name
        </InputLabel>
        <OutlinedInput
            id="component-outlined"

            labelWidth={labelRef ? labelRef.offsetWidth : 0}
        />
    </FormControl>*/}

    /*return (
        <div className={classes.root}>
            <FormControl fullWidth>
                <TextField
                    {...input}
                    label={label}
                    required={required}
                    autoComplete={autoComplete}
                    error={errorBoolean}
                    helperText={touched && (error || warning)}
                    variant={variant}
                    InputProps={inputProps}
                    InputLabelProps={inputLabelProps}
                    FormHelperTextProps={formHelperTextProps}
                />
            </FormControl>
        </div>
    );*/
};

export default withStyles(styles)(TextFieldMAK);
