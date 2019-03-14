

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {IconButton} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from "react-redux";
import {loginUser,closeLoginPage} from "../redux/actions/actions";

import styles from "../styles/LoginStyles"

class SignIn extends Component {


    render() {
        const { classes } = this.props;

        const { closeLoginPage ,loginUser} = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <div className={classes.socialLine}>
                        <IconButton color="primary" >
                            <i className={"fab fa-facebook-f"} />
                        </IconButton>
                        <IconButton color="primary" >
                            <i className={"fab fa-twitter "} />
                        </IconButton>
                        <IconButton color="primary" >
                            <i className={"fab fa-google"} />
                        </IconButton>
                    </div>

                    <form className={classes.form} onSubmit={loginUser}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password"/>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <br/>
                        <div className={classes.buttonsDiv}>
                            <Button

                                type="button"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={closeLoginPage}

                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"

                                variant="contained"
                                color="primary"
                                className={classes.button}

                            >
                                Sign in
                            </Button>
                        </div>
                    </form>
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(reduxState) {
    return {
        user: reduxState.user
    }
}

function mapDispatchToProps() {
    return {loginUser, closeLoginPage}
}

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(styles)(SignIn));

