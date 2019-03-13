
//const bgImg = require("../img/bg.jpg");
import bgImg from "../img/bg.jpg"

const pagesStyle = theme => ({
    App: {
        display: "flex!important"
    },
    appBarSpacer: theme.mixins.toolbar,
    fullPage: {
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",

        "&:before": {
            backgroundImage: `url(${bgImg})`,
            backgroundSize:"cover",
            content: "''",
            backgroundColor: theme.palette.background.primary,
            position: "absolute",
            opacity: "0.5",
            width:"100%",
            height:"100%",
            zIndex: "-1"
        },

    }
});

export default pagesStyle;
