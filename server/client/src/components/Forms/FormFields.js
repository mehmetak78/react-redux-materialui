import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import {TextField, InputAdornment, FormControlLabel, Checkbox} from '@material-ui/core';

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
        console.log("initialize");
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
            </div>
        )
    };

    renderCheckBox = ({input, label, checked}) => {

        console.log(input);

        checked = Boolean(input.value);
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
                    label={label}
                />
            </div>
        )
    };
    renderField = (item, index) => {
        switch (item.renderType) {
            case "TextField":
                return (
                    <Grid item key={index} xs={item.size.xs} sm={item.size.sm} md={item.size.md} lg={item.size.lg}
                          xl={item.size.xl}>
                        <Field name={item.name} item={item}
                               component={this.renderTextField}
                        />
                    </Grid>);
            case "CheckBox":
                return (
                    <Grid item key={index} xs={item.size.xs} sm={item.size.sm} md={item.size.md} lg={item.size.lg}
                          xl={item.size.xl}>
                        <Field name={item.name} label={item.label} checked={item.checked}
                               component={this.renderCheckBox}
                        />
                    </Grid>);
            default:
                return "";
        }

    };

    render() {
        const {formFields} = this.props;
        console.log("FormFields.render()");
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