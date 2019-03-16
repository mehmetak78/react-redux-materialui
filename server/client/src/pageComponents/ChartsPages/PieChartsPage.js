import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import Pie1 from '../../components/Charts/PieCharts/Pie1';
import Pie2 from '../../components/Charts/PieCharts/Pie2';
import Pie4 from '../../components/Charts/PieCharts/Pie4';
import Pie5 from '../../components/Charts/PieCharts/Pie5';

import {Typography, Card, CardContent} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../styles/ChartsPageStyles";



class PieChartsPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="">
                <div className={classes.appBarSpacer}/>
                <Typography variant="h4" className={classes.sample}>
                    Pie Charts
                </Typography>
                <QueueAnim type="scale" duration={900}>
                    <div key={1}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Pie1/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={2}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Pie2/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Pie4/>
                            </CardContent>
                        </Card>
                    </div>
                    <div key={5}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Pie5/>
                            </CardContent>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default withStyles(styles)(PieChartsPage);
