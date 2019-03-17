import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';


import Dashboard from '../pageComponents/Dashboard';
import Orders from '../pageComponents/Orders';
import Products from '../pageComponents/Products';
import LineChartsPage from '../pageComponents/ChartsPages/LineChartsPage';
import BarChartsPage from '../pageComponents/ChartsPages/BarChartsPage';
import PieChartsPage from '../pageComponents/ChartsPages/PieChartsPage';
import ScatterChartsPage from '../pageComponents/ChartsPages/ScatterChartsPage';
import RadarChartsPage from '../pageComponents/ChartsPages/RadarChartsPage';
import FunnelChartsPage from '../pageComponents/ChartsPages/FunnelChartsPage';
import GaugeChartsPage from '../pageComponents/ChartsPages/GaugeChartsPage';
import CandleStickChartsPage from '../pageComponents/ChartsPages/CandleStickChartsPage';
import HeatMapChartsPage from '../pageComponents/ChartsPages/HeatMapChartsPage';
import PictorialBarChartsPage from '../pageComponents/ChartsPages/PictorialBarChartsPage';
import SunBurstChartsPage from '../pageComponents/ChartsPages/SunBurstChartsPage';
import ThemeRiverChartsPage from '../pageComponents/ChartsPages/ThemeRiverChartsPage';
import Form1Page from "../pageComponents/FormsPages/Form1Page";
import Form2Page from "../pageComponents/FormsPages/Form2Page";
import AddressFormPage from "../pageComponents/FormsPages/AddressFormPage";
import PageNotFound from '../pageComponents/PageNotFound';

import styles from "../styles/MiddlePageStyles";


class MiddlePage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <main className={classes.content}>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/Dashboard" component={Dashboard}/>
                    <Route exact path="/Orders" component={Orders}/>
                    <Route exact path="/Products" component={Products}/>
                    <Route exact path="/Charts/LineCharts" component={LineChartsPage}/>
                    <Route exact path="/Charts/BarCharts" component={BarChartsPage}/>
                    <Route exact path="/Charts/PieCharts" component={PieChartsPage}/>
                    <Route exact path="/Charts/ScatterCharts" component={ScatterChartsPage}/>
                    <Route exact path="/Charts/RadarCharts" component={RadarChartsPage}/>
                    <Route exact path="/Charts/FunnelCharts" component={FunnelChartsPage}/>
                    <Route exact path="/Charts/GaugeCharts" component={GaugeChartsPage}/>
                    <Route exact path="/Charts/CandleStickCharts" component={CandleStickChartsPage}/>
                    <Route exact path="/Charts/HeatMapCharts" component={HeatMapChartsPage}/>
                    <Route exact path="/Charts/PictorialBarCharts" component={PictorialBarChartsPage}/>
                    <Route exact path="/Charts/SunBurstCharts" component={SunBurstChartsPage}/>
                    <Route exact path="/Charts/ThemeRiverCharts" component={ThemeRiverChartsPage}/>
                    <Route exact path="/FormPages/Form1" component={Form1Page}/>
                    <Route exact path="/FormPages/Form2" component={Form2Page}/>
                    <Route exact path="/FormPages/AddressFormPage" component={AddressFormPage}/>
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
