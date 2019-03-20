import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';



import {Field} from 'redux-form'

import TextFieldMAK from "../common/TextFieldMAK";
import CheckBoxMAK from "../common/CheckBoxMAK";
import SelectMAK from "../common/SelectMAK";


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

      renderField = (item, index) => {
        let renderComponent;

        switch (item.renderType) {
            case "TextField": renderComponent = TextFieldMAK; break;
            case "CheckBox": renderComponent = CheckBoxMAK; break;
            case "Select": renderComponent = SelectMAK; break;
            default: renderComponent = null;
        }
        return (
            <Grid item key={index} xs={item.size.xs} sm={item.size.sm} md={item.size.md} lg={item.size.lg} xl={item.size.xl}>
                <Field  name={item.name} item={item} {...this.props} component={renderComponent}/>
            </Grid>
        )
    };

    render() {
        const {formFields} = this.props;
        return (
            <Grid container spacing={8}>
                {formFields.map((item, index) => (
                    this.renderField(item, index)
                ))}
            </Grid>
        );
    }

}

export default FormFields;