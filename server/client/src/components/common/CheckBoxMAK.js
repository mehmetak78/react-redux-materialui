import React from "react"


import {Checkbox, FormControlLabel} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";

export const styles = theme => ({

});

const CheckBoxMAK = (props) => {

    const {item, input} = props;
    const {classes} = props;

    let checked = Boolean(input.value);
    const tmpInput = {...input, value: input.value.toString()};

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        checked={checked}
                        {...tmpInput}
                    />
                }
                label={item.label}
            />
        </div>
    )
};

export default withStyles(styles)(CheckBoxMAK);
