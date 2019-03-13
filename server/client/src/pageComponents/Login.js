import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";



//import loginPageStyle from "../assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import loginPageStyle from "../styles/LoginPageStyle";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }
    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        this.timeOutFunction = setTimeout(
            function() {
                this.setState({ cardAnimaton: "" });
            }.bind(this),
            700
        );
    }
    componentWillUnmount() {
        clearTimeout(this.timeOutFunction);
        this.timeOutFunction = null;
    }

    handleCancel = () => {
        const { closeLoginPage } = this.props;
        closeLoginPage();
    };


    handleSubmit = () => {
        const { loginUser } = this.props;
        loginUser();
    };

    render() {
        const {classes } = this.props;
        return (
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4}>
                        <form onSubmit={this.handleSubmit}>
                            <Card login className={classes[this.state.cardAnimaton]}>
                                <CardHeader
                                    className={`${classes.cardHeader} ${classes.textCenter}`}
                                    color="rose"
                                >
                                    <h4 className={classes.cardTitle}>Log in</h4>
                                    <div className={classes.socialLine}>
                                        {[
                                            "fab fa-facebook-square",
                                            "fab fa-twitter",
                                            "fab fa-google-plus"
                                        ].map((prop, key) => {
                                            return (
                                                <Button
                                                    color="transparent"
                                                    justIcon
                                                    key={key}
                                                    className={classes.customButtonClass}
                                                >
                                                    <i className={prop} />
                                                </Button>
                                            );
                                        })}
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <CustomInput
                                        labelText="First Name.."
                                        id="firstname"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Face className={classes.inputAdornmentIcon} />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <CustomInput
                                        labelText="Email..."
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Email className={classes.inputAdornmentIcon} />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <CustomInput
                                        labelText="Password"
                                        id="password"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Icon className={classes.inputAdornmentIcon}>
                                                        lock_outline
                                                    </Icon>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </CardBody>
                                <CardFooter className={classes.justifyContentCenter}>
                                    <Button onClick={this.handleCancel} color="rose" simple size="lg" block>
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleSubmit} color="rose" simple size="lg" block>
                                        Login
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(LoginPage);
