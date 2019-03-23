import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import withStyles from "@material-ui/core/styles/withStyles";


import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import MiddlePage from "./MiddlePage"

import Landing from '../pageComponents/Landing';
import Login from '../pageComponents/Login';



import {openLoginPage, closeLoginPage, loginUser,logoutUser,toggleDrawer, toggleTheme} from "../redux/actions/actions.js";

import styles from "../styles/MainPageStyles.js";



class MainPage extends Component {
    getTheme = () => {
        const {appTheme, appFontSize, appPrimary, appSecondary} = this.props.mainPage.themeSettings;

        switch(appTheme) {
            case  "dark":
            case "light":  return createMuiTheme({
                palette: {
                    type: appTheme, // Switching the dark mode on is a single property value change.
                    primary: appPrimary,
                    secondary: appSecondary
                },
                typography: {
                    useNextVariants: true,
                    fontSize: appFontSize,
                    subtitle1: {
                        fontSize: appFontSize,
                        color: "red",
                        fontStyle: 'italic',
                        fontFamily: ["sans-serif",].join(','),
                    },
                    button: {
                        fontStyle: 'italic',
                        fontSize: appFontSize,
                    },
                }
            });

            default : return createMuiTheme({
                typography: {
                    fontSize: appFontSize,
                    useNextVariants: true,
                },
            });
        }
    };


    render() {
        const { menuOpened } = this.props.mainPage;
        const { isLogging } = this.props.user;


        const {isAuthenticated} = this.props.user;

        const { classes } = this.props;


        const {openLoginPage, closeLoginPage, loginUser, logoutUser, toggleDrawer, toggleTheme} = this.props;

console.log(this.getTheme());

        return (
            <BrowserRouter>
                <CssBaseline>
                    <MuiThemeProvider theme={this.getTheme()}>
                        { isAuthenticated ?
                                <div className={classes.App}>
                                    <TopMenu toggleDrawer={toggleDrawer} handleLogOut={logoutUser}
                                             handleToggleTheme={toggleTheme}/>
                                    <LeftMenu menuOpened={menuOpened}/>
                                    <MiddlePage/>
                                </div>
                                :
                                <div
                                    className={classes.fullPage}
                                >
                                    {isLogging
                                        ? <Login loginUser={loginUser} closeLoginPage={closeLoginPage}/>
                                        : <Landing openLoginPage={openLoginPage} />
                                    }
                                </div>
                        }
                    </MuiThemeProvider>

                </CssBaseline>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        user: reduxState.user,
        mainPage: reduxState.layout.mainPage
    }
}

function mapDispatchToProps() {
    return {openLoginPage, closeLoginPage, loginUser, logoutUser, toggleDrawer, toggleTheme}
}

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(styles)(MainPage));

