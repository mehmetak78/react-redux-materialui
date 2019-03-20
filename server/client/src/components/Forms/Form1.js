import React, {Component} from 'react';

import {reduxForm } from 'redux-form'
import {validateForm, warnForm} from "./formControlHelper";

import {formFieldsGroup1, formType} from "../../data/FormsData/Form1Data";
import FormFields from "./FormFields"


import {Typography, Button, Grid} from '@material-ui/core';
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
        e.preventDefault();
        const {handleSubmit, reset} = this.props;
        handleSubmit(values);
        reset();
    };

    render() {
        const {pristine, reset, submitting, initialize} = this.props;
        const {classes} = this.props;
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <Typography variant="h6" className={classes.groupHeader}>
                        First Group
                    </Typography>
                    <FormFields  formFields={formFieldsGroup1} formType={formType}  initialize={initialize}/>

                    <Grid container className={classes.buttons}>
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.button}
                                    type="submit" disabled={pristine || submitting}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" className={classes.button}
                                    type="button" disabled={pristine || submitting} onClick={reset}>
                                Clear Values
                            </Button>
                        </Grid>
                    </Grid>
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