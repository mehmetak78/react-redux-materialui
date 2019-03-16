
export const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    card: {
        minWidth: 275,
        marginTop: 20,
    },
});

export const CHARTCONFIG = {
    color: {
        danger: "rgba(233,75,59,.85)",
        gray: "rgba(221,221,221,.3)",
        info: "rgba(0,188,212,.85)",
        infoAlt: "rgba(126,87,194,.85)",
        primary: "rgba(33,150,243,.85)",
        splitArea: [
            "rgba(250,250,250,0.035)",
            "rgba(200,200,200,0.1)"
        ],
        splitLine: "rgba(0,0,0,.05)",
        success: "rgba(102,187,106,.85)",
        text: "#898989",
        warning: "rgba(255,202,40,.85)"
    }
};
