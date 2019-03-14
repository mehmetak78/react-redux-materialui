import React, {Component} from "react"

import {Button, Typography} from '@material-ui/core';
import LoginIcon from '@material-ui/icons/ExitToApp';
import SignUpIcon from '@material-ui/icons/PlayForWork';
import {withStyles} from '@material-ui/core/styles';

import styles from "../styles/LandingStyles"

class Landing extends Component {
    state = {};
    render() {
        const {classes, openLoginPage} = this.props;

        return (
            <div className={classes.root}>
                    <Typography variant="h3" align="center">This is a sample Application</Typography>
                    <Typography variant="subtitle1" align="center">This is a sample Application</Typography>

                        <Button variant="contained" color="primary"  className={classes.button}>
                            Sign Up
                            <SignUpIcon className={classes.rightIcon} />
                        </Button>

                        <Button variant="contained" color="secondary" className={classes.button}
                            onClick={openLoginPage}>
                            Login
                            <LoginIcon className={classes.rightIcon} />
                        </Button>


            </div>
        );
    }
}

export default withStyles(styles)(Landing);
