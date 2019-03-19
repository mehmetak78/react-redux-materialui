
export const formType = {
    variant: "standard"               // standard, outlined, filled
};

export const formFieldsGroup1 = [
    {
        name: "firstName",
        label: "First Name",
        type: "text",
        renderType: "TextField",
        autoComplete: "firstName",
        value:"Mehmet",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        adornment: {
            text:"kg",
            position:"end"
        },
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
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        adornment: {
            text:"$",
            position:"start"
        },
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
    {
        name: "addressCheck",
        label: "Default Address",
        type: "checkbox",
        renderType: "CheckBox",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        value:true
    },
    {
        name: "ageSelect",
        label: "Age",
        type: "select",
        renderType: "Select",
        size: {xs:12,sm:6,md:6,lg:4,xl:3},
        options: [
            {title:'None',value:""},
            {title:'Ten',value:10},
            {title:'Twelve',value:20},
            {title:'Thirty',value:30},
            {title:'Fourthy',value:40},
        ],

    },


];
