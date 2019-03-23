import React from "react"


import {FormControl, OutlinedInput, InputAdornment} from '@material-ui/core';
import {InputLabel, Input, FormHelperText} from '@material-ui/core';
import {Select, MenuItem, Checkbox, FormControlLabel} from '@material-ui/core';
import {FormLabel, RadioGroup, Radio} from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";

export const styles = theme => ({
    input: {
        padding:5
    },
    select: {
        padding:5
    },
    label: {
        //color: theme.palette.primary.main,
    },
    outlinedLabelEmpty: {
        marginTop: -13
    },
    helperText: {
        marginTop: 1,
    },
    focused: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    radioGroup: {
        paddingTop:5,

    },
    radioGroupOutlined: {
        padding:5,
        border:"solid lightgray 1px",
        borderRadius:"5px",
    },
    radio: {
        paddingTop:0,
        paddingLeft:15
    },
    radioLabel: {
        fontWeight: "bold",
        fontSize:"70%",
        color: theme.palette.primary.main,
    },
    radioLabelOutlined: {
        fontWeight: "bold",
        fontSize:"70%",
        color: theme.palette.primary.main,
        zIndex: 1,
        backgroundColor:theme.palette.background.default,
        position:"absolute",
        top:-7,
        paddingLeft:5,
        paddingRight:5,
        marginLeft:8,
    },
});

const FieldComponentMAK = (props) => {
    const {classes} = props;
    const {formType} = props;
    const {item, input, meta: {touched, error, warning}} = props;

    let variant = 'standard';
    const lblId = "lbl_"+input.name;
    let labelWidth= 0;
    let labelHeight= 0;
    if (formType && formType.variant) {
        variant = formType.variant;
        const lbl = document.getElementById(lblId);
        labelWidth = lbl ? lbl.offsetWidth: 0;
        labelHeight = lbl ? lbl.offsetHeight: 0;
    }

    let labelClassName = classes.label;
    let radioStyle = {};
    let checkBoxStyle = {};
    let radioGroupClassName =classes.radioGroup;
    let radioLabelClassName =classes.radioLabel;


    if (input.value || props.meta.active) {
        labelClassName = labelClassName + " " + classes.focused;
    }

    radioStyle = {height:labelHeight};
    if (variant === 'outlined') {
        checkBoxStyle = {height:labelHeight}
        radioGroupClassName = classes.radioGroupOutlined;
        radioLabelClassName = classes.radioLabelOutlined;
    }

    if (variant === 'outlined' && !input.value && !props.meta.active) {
        labelClassName = labelClassName + " " + classes.label + " " + classes.outlinedLabelEmpty;
    }

    const errorBoolean = Boolean(touched && error);
    const required = item.validations && item.validations.emptyCheck;

    let adornmentProps = {};

    const renderInputField = () => {
        if (item.adornment) {
            switch (item.adornment.position) {
                case "end":
                    adornmentProps = {endAdornment: <InputAdornment position="end">{item.adornment.text}</InputAdornment>};
                    break;
                default:
                    adornmentProps = {startAdornment: <InputAdornment position="start">{item.adornment.text}</InputAdornment>}
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
                        autoComplete={item.autoComplete}
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
                        autoComplete={item.autoComplete}
                        labelWidth={labelWidth}
                        {...adornmentProps}
                    />
                    );
            default: return ""
        }
    };

    const renderLabelField = () =>  {
        switch (item.renderType) {
            case "TextField" :
            case "Select" :
                return (
                    <InputLabel
                        className={labelClassName}
                        htmlFor={input.name}
                        id={lblId}
                    >
                        {item.label}
                    </InputLabel>
                );
            case "CheckBox" :
                const checked = Boolean(input.value);
                const tmpInput = {...input, value: input.value.toString()};
                return (
                    <FormControlLabel
                        control={
                            <Checkbox style={checkBoxStyle}
                                color="primary"
                                checked={checked}
                                {...tmpInput}
                            />
                        }
                        label={item.label}
                    />
                );
            case "Radio" :
                return (
                    <div >
                        <FormLabel className={radioLabelClassName} >Gender</FormLabel>
                    </div>
                );
            default:
                return "";
        }
    };

    const renderHelperText = () =>  {
        switch (item.renderType) {
            case "TextField" :
            case "Select" :
                return (
                    touched && (error || warning)
                        ?
                        <FormHelperText className={classes.helperText}>{touched && (error || warning)}</FormHelperText>
                        : ""

                );
            case "CheckBox" : return null;
            default: return ""
        }
    };

    const renderField = () => {
        switch (item.renderType) {
            case "TextField" :
                return renderInputField();
            case "Select" :
                return (
                    <Select
                        classes={{select: classes.select}}
                        input={renderInputField()}>
                        {item.options.map( (option, index) => (
                            <MenuItem key={index} value={option.value}>{option.title}</MenuItem>
                        ))}
                    </Select>
                );
            case "Radio" :
                return (
                    <RadioGroup {...input} className={radioGroupClassName}>
                        {item.options.map( (option, index) => (
                            <FormControlLabel
                                className={classes.radio}
                                key={index} value={option.value}
                                control={<Radio color="primary" style={radioStyle}/>}
                                label={option.title}
                            />
                        ))}
                    </RadioGroup>
                );
            case "CheckBox" : return "";
            default: return ""
        }
    };

    return (
        <div >
            <FormControl fullWidth error={errorBoolean} required={required} variant={variant}>
                {renderLabelField()}
                {renderField()}
                {renderHelperText()}

            </FormControl>
        </div>
    );

};

export default withStyles(styles)(FieldComponentMAK);
