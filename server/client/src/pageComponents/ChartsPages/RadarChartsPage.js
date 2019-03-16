import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import Radar1 from '../../components/Charts/RadarCharts/Radar1';
import Radar2 from '../../components/Charts/RadarCharts/Radar2';
import Radar3 from '../../components/Charts/RadarCharts/Radar3';

import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../styles/ChartsPageStyles";



class RadarChartsPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Radar Charts
                </Typography>
                <QueueAnim type="scale" duration={900}>
                    <div key={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Radar1/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Radar2/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Radar3/>
                            </CardContent>
                        </Card>
                    </div>

                </QueueAnim>
            </div>
        );
    }
}

export default withStyles(styles)(RadarChartsPage);
