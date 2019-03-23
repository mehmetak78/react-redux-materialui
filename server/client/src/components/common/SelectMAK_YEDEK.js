import React from "react"


import {Select,FormControl, InputLabel, OutlinedInput, Input, MenuItem} from '@material-ui/core';
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
        //color: "red",
    },
    outlinedLabelStyleEmpty: {
        marginTop: -13
    },
    helperText: {
        marginTop: 0,

    }
});

const SelectMAK = (props) => {

    const {formType, item, input} = props;

    const {classes} = props;

    const MULTIPLER = 9;

    let inputProps = {};
    let inputLabelProps = {};

    let variant = 'standard';
    if (formType && formType.variant) {
        variant = formType.variant
    }

    inputProps = {...inputProps, classes: { select: classes.select  }};
    if (variant === 'outlined') {
        inputLabelProps= {...inputLabelProps, className: input.value || props.meta.active
                ? classes.label
                : classes.label + " " + classes.outlinedLabelStyleEmpty}
    }
    else
    {
        inputLabelProps= {...inputLabelProps, className: classes.label}
    }

    const tmpInput = {...input, labelWidth:item.label.length*MULTIPLER};
    return (
        <FormControl variant={variant} fullWidth>
            <InputLabel
                className={input.value ||props.meta.active
                    ? classes.label
                    : classes.label + " " + classes.outlinedLabelStyleEmpty}
                htmlFor={item.id}>
                {item.label}
            </InputLabel>
            <Select
                inputProps={inputProps}

                input={variant==='outlined' ? <OutlinedInput{...tmpInput}/> :<Input{...input}/>}>

                {item.options.map( (option, index) => (
                    <MenuItem key={index} value={option.value}>{option.title}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
};

export default withStyles(styles)(SelectMAK);
