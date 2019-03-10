import React, {Component} from "react"

import {Button, Typography} from '@material-ui/core';
import LoginIcon from '@material-ui/icons/ExitToApp';
import SignUpIcon from '@material-ui/icons/PlayForWork';
import {withStyles} from '@material-ui/core/styles';

import "../styles/Landing.css"

const styles = theme => ({

    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    paperContainer: {
        backgroundImage: `url(${"../img/showcase.jpg"})`
    }
});

class Landing extends Component {
    state = {};


    render() {
        const {classes, handleLogIn} = this.props;

        return (
            <div className={"landing"}>
                <div className={"landingInner"}>

                    <h1 >
                        Sample Application
                    </h1>
                    <Typography variant="subtitle1">This is a sample Application</Typography>

                        <Button variant="contained" color="primary"  className={classes.button}>
                            Sign Up
                            <SignUpIcon className={classes.rightIcon} />
                        </Button>


                        <Button variant="contained" color="secondary" className={classes.button}
                            onClick={handleLogIn}>
                            Login
                            <LoginIcon className={classes.rightIcon} />
                        </Button>


                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Landing);
