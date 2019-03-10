
import React from 'react';



import SvgIcon from '@material-ui/core/SvgIcon';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    Path: {
        stroke: "white",
        fill:"transparent"
    },
});

function IconMehmet(props) {
    const {classes} = props;
    return (
        <SvgIcon {...props} className={classes.Path} >
            <path d="M8 16 L 8 8 L 12 12 L 16 8 L 16 16 " />
            <circle id="pointA" cx="12" cy="12" r="10" />
        </SvgIcon>
    );
}

export default withStyles(styles)(IconMehmet);
