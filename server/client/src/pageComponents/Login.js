

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from "react-redux";
import {loginUser,closeLoginPage} from "../redux/actions/actions";


import Fab from '@material-ui/core/Fab';

import styles from "../styles/LoginStyles"

const socialLogins = [
    {className:"twitter", iconName:"fab fa-twitter fa-2x", title: "Connect With Twitter"},
    {className:"facebook", iconName:"fab fa-facebook-f fa-2x", title: "Connect With Facebook"},
    {className:"google", iconName:"fab fa-google-plus-g fa-2x", title: "Connect With Google+"},
    {className:"linkedin", iconName:"fab fa-linkedin fa-2x", title: "Connect With Linkedin"},
 //   {className:"youtube", iconName:"fab fa-youtube-square fa-2x", title: "Connect With Youtube"},
 //   {className:"github", iconName:"fab fa-github fa-2x", title: "Connect With Github"},
];

class SignIn extends Component {

    render() {
        const { classes } = this.props;

        const { closeLoginPage ,loginUser} = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>

                    <br/>
                    <Typography  variant="h4">
                        Sign in
                    </Typography>
                    <br/>
                    <br/>


                    <div>
                        {socialLogins.map((social) => (
                                <Fab aria-label={social.title} className={classes[social.className]}>
                                    <i className={social.iconName}/>
                                </Fab>
                            )
                        )}
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

