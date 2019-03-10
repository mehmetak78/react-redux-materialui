import React, {Component, Fragment} from "react"
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import SimpleLineChart from "../components/SimpleLineChart";
import SimpleTable from "../components/SimpleTable";

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
});

class Dashboard extends Component {
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
                <Typography variant="h4" gutterBottom component="h2">
                    Customers
                </Typography>
                <div className={classes.tableContainer}>
                    <SimpleTable />
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Dashboard);
