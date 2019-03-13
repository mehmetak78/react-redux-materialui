const styles = theme => ({
    navlink: {
        textDecoration: "none"
    },
    appBarSpacer: theme.mixins.toolbar,
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: theme.spacing.unit * 30,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 7,
        },
    },
});

export default styles;