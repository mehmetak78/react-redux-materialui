import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';


import Dashboard from '../pageComponents/Dashboard';
import Orders from '../pageComponents/Orders';
import Products from '../pageComponents/Products';
import PageNotFound from '../pageComponents/PageNotFound';

import styles from "../styles/MiddlePageStyles";

class MiddlePage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <main className={classes.content}>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/orders" component={Orders}/>
                    <Route exact path="/products" component={Products}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </main>

        );
    }
}

MiddlePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiddlePage);
