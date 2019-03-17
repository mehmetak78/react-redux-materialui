import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

import { Field } from 'redux-form'


const renderTextField = (
    { input, label, autoComplete, required, meta: { touched, error, warning } }) => {
        const errorBoolean = Boolean(touched && error);
        return (
            <div>
                <div>
                    <TextField
                        required={required}
                        fullWidth
                        {...input}
                        label={label}
                        autoComplete={autoComplete}
                        error={errorBoolean}
                        helperText={touched && (error || warning)}
                    />
                </div>
            </div>
        )
    };

const renderField = (item, index) => {
    switch (item.renderType) {
        case "TextField":
            return <Grid key={index} item xs={item.size.xs} sm={item.size.sm} md={item.size.md} lg={item.size.lg} xl={item.size.xl}>
                        <Field name={item.name} label={item.label} required={item.validations.emptyCheck}
                            autoComplete={item.autoComplete} type={item.type} component={renderTextField}
                        />
                    </Grid>
    }

};

class FormFields extends Component {

    render() {
        const {formFields} = this.props;
        return (
            <Grid container spacing={24}>
                {formFields.map((item, index) => (
                    renderField(item, index)
                ))}
            </Grid>
        );
    }
}

export default FormFields;