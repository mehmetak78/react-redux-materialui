import React, {Component, Fragment} from "react"
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import SimpleLineChart from "../components/SimpleLineChart";
const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
});

class Orders extends Component {
    state = {};

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.appBarSpacer} />
                <Typography variant="h4" gutterBottom component="h2">
                    Orders
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <SimpleLineChart />
                </Typography>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Orders);
