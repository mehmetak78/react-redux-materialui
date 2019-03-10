import React, {Component, Fragment} from "react"
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
});

class PageNotFound extends Component {
    state = {};

    render() {
        console.log("PageNoteFound.render");
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    PageNotFound
                </Typography>
            </Fragment>
        );
    }
}

export default withStyles(styles)(PageNotFound);
