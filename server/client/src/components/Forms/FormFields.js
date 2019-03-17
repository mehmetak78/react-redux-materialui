import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

import { Field } from 'redux-form'


const renderTextField = (
    { input, label, autoComplete, required, meta: { touched, error, warning } },
) => (
    <div>
        <div>
            <TextField
                required={required}
                fullWidth
                {...input}
                hintText={label}
                label={label}
                autoComplete={autoComplete}
                error={touched && error}
                helperText={touched && (error || warning)}
            />
        </div>
    </div>
);

const renderField = (item) => {
    switch (item.renderType) {
        case "TextField":
            return <Grid item xs={item.size.xs} sm={item.size.sm} md={item.size.md} lg={item.size.sm} xl={item.size.xl}>
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
                {formFields.map((item) => (
                    renderField(item)
                ))}
            </Grid>
        );
    }
}

export default FormFields;