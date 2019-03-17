


import React from 'react'


import AddressForm from "../../components/Forms/AddressForm";

import {Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import styles from "../../styles/FormsPagesStyles";


class AddressFormPage extends React.Component {
    handleSubmit = values => {
        console.log(values);
    };
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.appBarSpacer}/>
                <Card className={classes.card}>
                    <CardContent>
                        <AddressForm onSubmit={this.handleSubmit} />
                    </CardContent>
                </Card>

            </div>
        )
    }
}

export default withStyles(styles)(AddressFormPage);