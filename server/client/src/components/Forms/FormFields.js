import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';

import {TextField, InputAdornment, FormControlLabel, Checkbox,
    FormControl, InputLabel, Select, MenuItem, OutlinedInput,
    Input} from '@material-ui/core';

import {Field} from 'redux-form'


class FormFields extends Component {

    componentWillMount() {
        let initValues = {};

        const {formFields} = this.props;

        formFields.forEach((item) => {
            if (item.value) {
                initValues = {...initValues, [item.name]: item.value};
            }
        });

        this.props.initialize(initValues);
    };


    renderTextField = ({item, input, meta: {touched, error, warning}}) => {
        const errorBoolean = Boolean(touched && error);
        const {formType} = this.props;

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
                    type={input.type}
                    label={item.label}
                    autoComplete={item.autoComplete}
                    error={errorBoolean}
                    helperText={touched && (error || warning)}
                    variant={variant}
                    InputProps={inputProps}
                />
            </div>
        )
    };

    renderCheckBox = ({item,input}) => {

        let checked = Boolean(input.value);
        const tmpInput = {...input, value: input.value.toString()};

        return (
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            checked={checked}
                            {...tmpInput}
                        />
                    }
                    label={item.label}
                />
            </div>
        )
    };


    renderSelect = ({item, input}) => {

        const MULTIPLER = 9;
        const {formType} = this.props;
        let variant = 'standard';
        if (formType && formType.variant) {
            variant = formType.variant
        }

        const tmpInput = {...input, labelWidth:item.label.length*MULTIPLER};
        return (

                <FormControl variant={variant} fullWidth>
                    <InputLabel htmlFor={item.id}>{item.label}</InputLabel>
                    <Select
                            input={variant==='outlined' ? <OutlinedInput{...tmpInput}/> :<Input{...input}/>
                            }>
                        {item.options.map( (option, index) => (
                            <MenuItem key={index} value={option.value}>{option.title}</MenuItem>
                        ))}

                    </Select>

                </FormControl>

        )
    };

    renderField = (item, index) => {
        let renderComponent;
        switch (item.renderType) {
            case "TextField": renderComponent = this.renderTextField; break;
            case "CheckBox": renderComponent = this.renderCheckBox; break;
            case "Select": renderComponent = this.renderSelect; break;
            default: renderComponent = null;
        }

        return (
            <Grid item key={index} xs={item.size.xs} sm={item.size.sm} md={item.size.md} lg={item.size.lg}
                  xl={item.size.xl}>
                <Field name={item.name} item={item}
                       component={renderComponent}
                />
            </Grid>
        )
    };

    render() {
        const {formFields} = this.props;
        const title = "Age";
        let labelWidth =  0;

        return (
            <Grid container spacing={24}>
                {formFields.map((item, index) => (
                    this.renderField(item, index)
                ))}
            </Grid>
        );
    }


}

export default FormFields;