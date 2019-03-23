


import React from 'react'



import StandardForm from "../../components/Forms/StandardForm";


import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import styles from "../../styles/FormsPagesStyles";



class StandardFormPage extends React.Component {
    handleSubmit = (values) => {
        console.log("Handle Submit With Values");
        console.log(values);
    };
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Form With Single Group Of Data
                </Typography>
                <Card className={classes.card}>
                    <CardContent>
                        <StandardForm onSubmit={this.handleSubmit} />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(StandardFormPage);