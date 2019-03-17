const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    buttonsDiv: {
        textAlign:"center"
    },
    button: {
        margin: theme.spacing.unit * 2,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    socialButtonsIcons: {
        fontSize: "18px",
        //marginTop: "-2px",
        marginRight:"5px",
        position: "relative"
    },
    twitter: {
        margin:5,
        backgroundColor: "#55acee",
        color: "#fff",
        boxShadow:
            "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
        "&:hover,&:focus,&:visited": {
            backgroundColor: "#55acee",
            color: "#fff",
            boxShadow:
                "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
        }
    },
    facebook: {
        margin:5,
        backgroundColor: "#3b5998",
        color: "#fff",
        boxShadow:
            "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#3b5998",
            color: "#fff",
            boxShadow:
                "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
        }
    },
    google: {
        margin:5,
        backgroundColor: "#dd4b39",
        color: "#fff",
        boxShadow:
            "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#dd4b39",
            color: "#fff",
            boxShadow:
                "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
        }
    },
    linkedin: {
        margin:5,
        backgroundColor: "#0976b4",
        color: "#fff",
        boxShadow:
            "0 2px 2px 0 rgba(9, 118, 180, 0.14), 0 3px 1px -2px rgba(9, 118, 180, 0.2), 0 1px 5px 0 rgba(9, 118, 180, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#0976b4",
            color: "#fff",
            boxShadow:
                "0 14px 26px -12px rgba(9, 118, 180, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(9, 118, 180, 0.2)"
        }
    },
    youtube: {
        margin:5,
        backgroundColor: "#e52d27",
        color: "#fff",
        boxShadow:
            "0 2px 2px 0 rgba(229, 45, 39, 0.14), 0 3px 1px -2px rgba(229, 45, 39, 0.2), 0 1px 5px 0 rgba(229, 45, 39, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#e52d27",
            color: "#fff",
            boxShadow:
                "0 14px 26px -12px rgba(229, 45, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(229, 45, 39, 0.2)"
        }
    },
    github: {
        margin:5,
        backgroundColor: "#333333",
        color: "#fff",
        boxShadow:
            "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: "#333333",
            color: "#fff",
            boxShadow:
                "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
        }
    },
});

export default styles;