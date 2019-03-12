import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import MiddlePage from "./MiddlePage"

import Landing from '../pageComponents/Landing';
import Login from '../pageComponents/Login';

import {loginUser,logoutUser,toggleDrawer, toggleTheme} from "../redux/actions/actions.js";

import pagesStyle from "../styles/MainPageStyles.js";
//import pagesStyle from "../assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";


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
                    useNextVariants: true
                }
            });
        }
    };


    render() {
        const { menuOpened } = this.props.mainPage;

        const isLogging = false;
        const {isAuthenticated} = this.props.user;

        const { classes } = this.props;


        const {loginUser, logoutUser, toggleDrawer, toggleTheme} = this.props;


        return (
            <BrowserRouter>
                <CssBaseline>
                    <MuiThemeProvider theme={this.getTheme()}>
                        {
                            isAuthenticated ?
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
                                        ? <Login/>
                                        : <Landing handleLogIn={loginUser}/>
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
    return {loginUser,logoutUser, toggleDrawer, toggleTheme}
}

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(pagesStyle)(MainPage));

