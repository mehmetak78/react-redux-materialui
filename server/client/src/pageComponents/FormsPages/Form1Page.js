


import React from 'react'



import Form1 from "../../components/Forms/Form1";


import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import styles from "../../styles/FormsPagesStyles";



class Form1Page extends React.Component {
    handleSubmit = (values) => {
        console.log("handle submit");
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
                        <Form1 onSubmit={this.handleSubmit} />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Form1Page);