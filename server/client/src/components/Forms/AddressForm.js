import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Field, reduxForm } from 'redux-form'


const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 3) {
        errors.firstName = 'Must be 3 characters or more'
    }
  /*  if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }*/
    return errors
};

const warn = values => {
    const warnings = {};

    if (values.firstName && values.firstName.length >= 2 && values.firstName.length <10) {
        warnings.firstName = 'Should be 10 characters or more'
    }
    return warnings
};

const renderTextField = (
    { input, label, autoComplete, meta: { touched, error, warning }, ...custom },
) => (
    <div>
        <div>
            <TextField
                fullWidth
                {...input}
                {...custom}
                hintText={label}
                label={label}
                autoComplete={autoComplete}
                error={touched && error}
                helperText={touched && (error || warning)}
            />
        </div>
    </div>
);


class AddressForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit}>

                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <Field name="firstName" label="First Name" autoComplete="firstName" type="text" component={renderTextField} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="billing address-line1"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="billing address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="billing address-level2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="state" name="state" label="State/Province/Region" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="billing postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="billing country"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                                label="Use this address for payment details"
                            />
                        </Grid>
                    </Grid>
                </form>
            </React.Fragment>
        );
    }
}

export default reduxForm({
    form: 'addressForm',        // a unique identifier for this form
    validate,                   // <--- validation function given to redux-form
    warn                        // <--- warning function given to redux-form
})(AddressForm)