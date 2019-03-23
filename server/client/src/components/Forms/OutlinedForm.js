import React, {Component} from 'react';

import {reduxForm } from 'redux-form'
import {validateForm, warnForm} from "./formControlHelper";

import {formFieldsGroup1, formFieldsGroup2, formType} from "../../data/FormsData/OutlinedFormData";
import FormFields from "./FormFields"

import {Typography, Card, CardContent, Button, Grid} from '@material-ui/core';


import {withStyles} from "@material-ui/core/styles/index";
import styles from "../../styles/FormsPagesStyles";



const validate = (values) => {
    const formFields = [...formFieldsGroup1,...formFieldsGroup2];
    return validateForm(formFields, values);
};

const warn = (values) => {
    const formFields = [...formFieldsGroup1,...formFieldsGroup2];
    return warnForm(formFields, values);
};

class OutlinedForm extends Component {
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
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h6" className={classes.groupHeader}>
                                First Group
                            </Typography>
                            <FormFields  formFields={formFieldsGroup1} formType={formType} initialize={initialize}/>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h6" className={classes.groupHeader}>
                                Second Group
                            </Typography>
                            <FormFields  formFields={formFieldsGroup2} formType={formType} initialize={initialize}/>

                        </CardContent>
                    </Card>

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
    form: 'form2',        // a unique identifier for this form
    validate,                   // <--- validation function given to redux-form
    warn                        // <--- warning function given to redux-form
})(withStyles(styles)(OutlinedForm))

