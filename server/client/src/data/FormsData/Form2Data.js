export const formFieldsGroup1 = [
    {
        name: "firstName",
        label: "First Name",
        type: "text",
        renderType: "TextField",
        autoComplete: "firstName",
        size: {xs:12,sm:6},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "lastName",
        label: "Last Name",
        type: "text",
        renderType: "TextField",
        autoComplete: "lastName",
        size: {xs:12,sm:6},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "address1",
        label: "Address Line 1",
        type: "text",
        renderType: "TextField",
        autoComplete: "address-line1",
        size: {xs:12},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "address2",
        label: "Address Line 2",
        type: "text",
        renderType: "TextField",
        autoComplete: "address-line2",
        size: {xs:12},
        validations: {
            emptyCheck: false,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: false,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "city",
        label: "City",
        type: "text",
        renderType: "TextField",
        autoComplete: "City",
        size: {xs:12, sm:6},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "state",
        label: "State/Province/Region",
        type: "text",
        renderType: "TextField",
        autoComplete: "state",
        size: {xs:12, sm:6},
        validations: {
            emptyCheck: false,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "zip",
        label: "Zip / Postal Code",
        type: "text",
        renderType: "TextField",
        autoComplete: "zip",
        size: {xs:12, sm:6},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "country",
        label: "Country",
        type: "text",
        renderType: "TextField",
        autoComplete: "country",
        size: {xs:12, sm:6},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },


];

export const formFieldsGroup2 = [
    {
        name: "firstName2",
        label: "First Name",
        type: "text",
        renderType: "TextField",
        autoComplete: "firstName",
        size: {xs:12,sm:6},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    },
    {
        name: "lastName2",
        label: "Last Name",
        type: "text",
        renderType: "TextField",
        autoComplete: "lastName",
        size: {xs:12,sm:6},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 15
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 15
        }
    }
];



/*


                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                                label="Use this address for payment details"
                            />
                        </Grid>
 */