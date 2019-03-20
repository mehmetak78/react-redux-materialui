import React from "react"


import {Checkbox, FormControlLabel} from '@material-ui/core';

const CheckBoxMAK = (props) => {

    const {item, input} = props;

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

export default CheckBoxMAK;
