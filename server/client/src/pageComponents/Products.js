import React, {Component, Fragment} from "react"
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import SimpleTable from "../components/SimpleTable";

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
});

class Products extends Component {
    state = {};

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.appBarSpacer} />
                <Typography variant="h4" gutterBottom component="h2">
                    Products
                </Typography>
                <div className={classes.tableContainer}>
                    <SimpleTable />
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Products);
