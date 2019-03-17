import React, {Component} from 'react';

import {reduxForm } from 'redux-form'
import {validateForm, warnForm} from "./formControlHelper";

import {formFieldsGroup1, formFieldsGroup2} from "../../data/FormsData/Form2Data";
import FormFields from "./FormFields"

import {Typography} from '@material-ui/core';

const validate = (values) => {
    const formFields = [...formFieldsGroup1,...formFieldsGroup2];
    return validateForm(formFields, values);
};

const warn = (values) => {
    const formFields = [...formFieldsGroup1,...formFieldsGroup2];
    return warnForm(formFields, values);
};

class Form1 extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6" >
                        First Group
                    </Typography>
                    <FormFields  formFields={formFieldsGroup1} />
                    <Typography variant="h6" >
                        Second Group
                    </Typography>
                    <FormFields  formFields={formFieldsGroup2} />
                </form>
            </React.Fragment>
        );
    }
}

export default reduxForm({
    form: 'form1',        // a unique identifier for this form
    validate,                   // <--- validation function given to redux-form
    warn                        // <--- warning function given to redux-form
})(Form1)