import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import Bar1 from '../components/Charts/BarCharts/Bar1'
import Bar2 from '../components/Charts/BarCharts/Bar2';
import Bar3 from '../components/Charts/BarCharts/Bar3';
import Bar4 from '../components/Charts/BarCharts/Bar4';
import Bar5 from '../components/Charts/BarCharts/Bar5';

import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import styles from "../styles/BarChartsPageStyles";



class BarChartsPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Bar Charts
                </Typography>
                <QueueAnim type="bottom" className="ui-animate">
                    <Card className={classes.card}>
                        <CardContent>
                            <Bar1/>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Bar2/>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Bar3/>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Bar4/>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Bar5/>
                        </CardContent>
                    </Card>
               </QueueAnim>
            </div>
        );
    }
}

export default withStyles(styles)(BarChartsPage);
