
const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    card: {
        minWidth: 275,
        marginTop: 20,
    },
    button: {
        margin: theme.spacing.unit,
    },
    buttons: {
        marginTop: theme.spacing.unit * 4,
        justifyItems:"center",
        justifyContent:"center"
    }
});

export default styles;