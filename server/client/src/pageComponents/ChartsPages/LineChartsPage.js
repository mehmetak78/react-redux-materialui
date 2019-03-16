import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import Line1 from '../../components/Charts/LineCharts/Line1';
import Line2 from '../../components/Charts/LineCharts/Line2';
import Line3 from '../../components/Charts/LineCharts/Line3';
import Line4 from '../../components/Charts/LineCharts/Line4';

import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../styles/ChartsPageStyles";



class LineChartsPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Line Charts
                </Typography>
                <QueueAnim type="scale" duration={900}>
                    <div key={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Line1/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Line2/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Line3/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Line4/>
                            </CardContent>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default withStyles(styles)(LineChartsPage);
