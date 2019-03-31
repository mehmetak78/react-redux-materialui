import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';



import {Field} from 'redux-form'
import FieldComponentMAK from "../common/FieldComponentMAK";


class FormFields extends Component {

    componentWillMount() {
        const {initialize} = this.props;
        let initValues = {};

        const {formFields} = this.props;

        formFields.forEach((item) => {
            if (item.value) {
                initValues = {...initValues, [item.name]: item.value};
            }
        });

        initialize(initValues);
    };

    renderField = (item, index) => {
        return (
            <Grid item key={index} xs={item.size.xs} sm={item.size.sm} md={item.size.md} lg={item.size.lg} xl={item.size.xl}>
                <Field
                    name={item.name}
                    item={item}
                    {...this.props}
                    component={FieldComponentMAK}/>
            </Grid>
        )
    };

    render() {
        const {formFields} = this.props;
        return (
            <Grid container spacing={8} >
                {formFields.map((item, index) => (
                    this.renderField(item, index)
                ))}
            </Grid>
        );
    }

}

export default FormFields;