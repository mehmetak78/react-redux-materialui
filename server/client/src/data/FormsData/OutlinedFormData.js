
export const formType = {
    variant: "outlined"               // standard, outlined, filled
};

export const formFieldsGroup1 = [
    {
        name: "firstName",
        label: "First Name",
        type: "text",
        renderType: "TextField",
        autoComplete: "firstName",
        rows: 2,
        rowsMax:4,
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        validations: {
            emptyCheck: true,
            minLength: 3,
            maxLength: 30
        } ,
        warnings: {
            emptyCheck: true,
            minLength: 5,
            maxLength: 30
        }
    },
    {
        name: "lastName",
        label: "Last Name",
        type: "text",
        renderType: "TextField",
        autoComplete: "lastName",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
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
        size: {xs:12,md:6,lg:4,xl:3},
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
        size: {xs:12,md:6,lg:4,xl:3},
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
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
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
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
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
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
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
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
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
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
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
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
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
        size: {xs:12,md:6,lg:4,xl:3},
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
        name: "addressCheck",
        label: "Default Address",
        type: "checkbox",
        renderType: "CheckBox",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        value:true
    },
    {
        name: "address1",
        label: "Address Line 1",
        type: "text",
        renderType: "TextField",
        autoComplete: "address-line1",
        size: {xs:12,md:6,lg:4,xl:3},
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
        name: "ageSelect",
        label: "Age",
        type: "select",
        renderType: "Select",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        validations: {
            emptyCheck: true,
        },
        options: [
            {title:'None',value:""},
            {title:'Ten',value:10},
            {title:'Twelve',value:20},
            {title:'Thirty',value:30},
        ],

    },
    {
        name: "genderSelect",
        label: "Gender",
        type: "radio",
        renderType: "Radio",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        options: [
            {title:'Male',value:"male"},
            {title:'Female',value:"female"},
            {title:'Other',value:"other"},
        ],
        value:"male"

    },
    {
        name: "ageSelect2",
        label: "Age2",
        type: "select",
        renderType: "Select",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        validations: {
            emptyCheck: true,
        },
        options: [
            {title:'None',value:""},
            {title:'Ten',value:10},
            {title:'Twelve',value:20},
            {title:'Thirty',value:30},
        ],

    },
];


