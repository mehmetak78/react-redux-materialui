import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import Scatter1 from '../../components/Charts/ScatterCharts/Scatter1';
import Scatter2 from '../../components/Charts/ScatterCharts/Scatter2';

import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../styles/ChartsPageStyles";



class ScatterChartsPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Scatter Charts
                </Typography>
                <QueueAnim type="scale" duration={900}>
                    <div key={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Scatter1/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Scatter2/>
                            </CardContent>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default withStyles(styles)(ScatterChartsPage);
