import React from "react"


import {FormControl, OutlinedInput, InputAdornment} from '@material-ui/core';
import {InputLabel, Input, FormHelperText} from '@material-ui/core';
import {Select, MenuItem, Checkbox, FormControlLabel} from '@material-ui/core';
import {FormLabel, RadioGroup, Radio} from '@material-ui/core';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import { withStyles } from "@material-ui/core/styles";

export const styles = theme => ({
    input: {
        padding:5,
        fontSize: theme.typography.fontSize * 0.9
    },
    multiline: {
        padding:0,
    },
    select: {
        padding:5
    },
    label: {
        //color: theme.palette.primary.main,
        //fontSize: theme.typography.fontSize * 1.1
    },
    focusedLabel: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        fontSize: theme.typography.fontSize * 1.2
    },
    outlinedLabelEmpty: {
        marginTop: -13
    },
    helperText: {
        marginTop: 1,
        fontSize: theme.typography.fontSize * 0.8
    },

    radioGroup: {
        paddingTop:5,
        display:"block",
    },
    radioGroupOutlined: {
        padding:3,
        display:"block",
        border:"solid lightgray 1px",
        borderRadius:"5px",
        height:"40%"
    },

    radio: {
        paddingTop:0,
        paddingLeft:15,
        height:theme.typography.fontSize*0.5,
    },
    radioLabel: {
        fontWeight: "bold",
        fontSize:theme.typography.fontSize*0.9,
        color: theme.palette.primary.main,
    },
    radioLabelOutlined: {
        fontWeight: "bold",
        fontSize:theme.typography.fontSize*0.9,
        color: theme.palette.primary.main,
        zIndex: 1,
        backgroundColor:theme.palette.background.paper,
        position:"absolute",
        top:-7,
        paddingLeft:5,
        paddingRight:5,
        marginLeft:8,
    },

    checkBox: {
        marginLeft:0,
        marginRight:0
    },
    sizeIcon: {
        fontSize: theme.typography.fontSize*1.5,
    },
});

const FieldComponentMAK = (props) => {
    const {classes} = props;
    const {formType} = props;
    const {item, input, meta: {touched, error, warning}} = props;

    const lblId = "lbl_"+input.name;

    let variant = 'standard';
    if (formType && formType.variant) {
        variant = formType.variant;

    }

    const renderLabelField = () =>  {
        switch (item.renderType) {
            case "TextField" :
            case "Select" :
                let labelClassName = classes.label;
                if (variant === 'outlined' && !input.value && !props.meta.active) {
                    labelClassName = labelClassName + " " + classes.label + " " + classes.outlinedLabelEmpty;
                }

                if (input.value || props.meta.active || item.adornment) {
                    labelClassName = labelClassName + " " + classes.focusedLabel;
                }

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
                let checkBoxStyle = {};
                let labelHeight= 0;
                const lbl = document.getElementById(lblId);
                labelHeight = lbl ? lbl.offsetHeight: 0;
                if (variant === 'outlined') {
                    checkBoxStyle = {height:labelHeight};
                }
                return (
                    <FormControlLabel className={classes.checkBox}
                        control={
                            <Checkbox
                                      style={checkBoxStyle}
                                      icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
                                      checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
                                color="primary"
                                checked={checked}
                                {...tmpInput}
                            />
                        }
                        label={item.label}
                    />
                );
            case "Radio" :
                let radioLabelClassName =classes.radioLabel;
                if (variant === 'outlined') {
                    radioLabelClassName = classes.radioLabelOutlined;
                }
                return (
                    <div >
                        <FormLabel className={radioLabelClassName} >Gender</FormLabel>
                    </div>
                );
            default:
                return "";
        }
    };

    const renderInputField = () => {
        let rows=1;
        let rowsMax=null;
        let multiline = false;
        if (item.rows && item.rows>1) {
            rows = item.rows;
            multiline = true;
            if (item.rowsMax) {
                rowsMax = item.rowsMax;
            }

        }

        let adornmentProps = {};
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
                        classes={{input: classes.input, multiline: classes.multiline}}
                        multiline = {multiline}
                        rows={rows}
                        rowsMax={rowsMax}
                        id={input.name}
                        aria-describedby={input.name}
                        autoComplete={item.autoComplete}
                        {...adornmentProps}

                    />
                );
            case "outlined" :
                let labelWidth= 0;
                const lblId = "lbl_"+input.name;
                const lbl = document.getElementById(lblId);
                labelWidth = lbl ? lbl.offsetWidth: 0;
                return (
                    <OutlinedInput
                        {...input}
                        classes={{input: classes.input, multiline: classes.multiline}}
                        id={input.name}
                        multiline = {multiline}
                        rows={rows}
                        rowsMax={rowsMax}
                        aria-describedby={input.name}
                        autoComplete={item.autoComplete}
                        labelWidth={labelWidth}
                        {...adornmentProps}
                    />
                );
            default: return ""
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
                let radioGroupClassName =classes.radioGroup;
                if (variant === 'outlined') {
                    radioGroupClassName = classes.radioGroupOutlined;
                }
                return (
                    <RadioGroup {...input} className={radioGroupClassName} >
                        {item.options.map( (option, index) => (
                            <FormControlLabel
                                className={classes.radio}
                                key={index} value={option.value}
                                control={
                                    <Radio
                                        color="primary"
                                        icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                                        checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
                                    />
                                }
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
            <FormControl fullWidth
                         error={Boolean(touched && error)}
                         required={item.validations && item.validations.emptyCheck}
                         variant={variant}>
                {renderLabelField()}
                {renderField()}
                {renderHelperText()}

            </FormControl>
        </div>
    );

};

export default withStyles(styles)(FieldComponentMAK);
