import React, {Component} from 'react';

import {reduxForm } from 'redux-form'
import {validateForm, warnForm} from "./formControlHelper";

import {formFieldsGroup1} from "../../data/FormsData/Form1Data";
import FormFields from "./FormFields"

import {Typography, Button} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import styles from "../../styles/FormsPagesStyles";


const validate = (values) => {
    const formFields = [...formFieldsGroup1];
    return validateForm(formFields, values);
};

const warn = (values) => {
    const formFields = [...formFieldsGroup1];
    return warnForm(formFields, values);
};

class Form1 extends Component {

    handleSubmit = (e, values) =>  {
        console.log("Handle Submit");
        const {handleSubmit, reset} = this.props;

        handleSubmit(values);

        e.preventDefault();
        reset();

    };

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        const {classes} = this.props;
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <Typography variant="h6" >
                        First Group
                    </Typography>
                    <FormFields  formFields={formFieldsGroup1} />
                    <div>
                        <Button variant="contained" color="primary" className={classes.button}

                                type="submit" disabled={pristine || submitting}>
                            Submit
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button}
                                type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </Button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
export default reduxForm({
    form: 'form1',        // a unique identifier for this form
    validate,                   // <--- validation function given to redux-form
    warn                        // <--- warning function given to redux-form
})(withStyles(styles)(Form1))