import React from "react"


import {Select,FormControl, InputLabel, OutlinedInput, Input, MenuItem} from '@material-ui/core';

const SelectMAK = (props) => {

    const {formType, item, input} = props;

    const MULTIPLER = 9;

    let variant = 'standard';
    if (formType && formType.variant) {
        variant = formType.variant
    }

    const tmpInput = {...input, labelWidth:item.label.length*MULTIPLER};
    return (
        <FormControl variant={variant} fullWidth>
            <InputLabel htmlFor={item.id}>{item.label}</InputLabel>
            <Select
                input={variant==='outlined' ? <OutlinedInput{...tmpInput}/> :<Input{...input}/>}>
                {item.options.map( (option, index) => (
                    <MenuItem key={index} value={option.value}>{option.title}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
};

export default SelectMAK;
