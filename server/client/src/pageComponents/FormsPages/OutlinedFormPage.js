


import React from 'react'



import OutlinedForm from "../../components/Forms/OutlinedForm";


import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import styles from "../../styles/FormsPagesStyles";



class OutlinedFormPage extends React.Component {
    handleSubmit = values => {
        console.log(values);
    };
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Form With Two Groups Of Data
                </Typography>
                <Card className={classes.card}>
                    <CardContent>
                        <OutlinedForm onSubmit={this.handleSubmit} />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(OutlinedFormPage);