import React, {Component, Fragment} from "react"
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import QueueAnim from 'rc-queue-anim';

import styles from "../styles/MainPageStyles";

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

                <QueueAnim type="top"  >
                    <div key="1">Page Not Found</div>
                    <div key="2">Page Not Found</div>
                    <div key="3">Page Not Found</div>
                </QueueAnim>
            </Fragment>
        );
    }
}

export default withStyles(styles)(PageNotFound);
