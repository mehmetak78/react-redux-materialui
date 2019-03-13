
//const bgImg = require("../img/bg.jpg");
import bgImg from "../img/bg.jpg"

const pagesStyle = theme => ({
    App: {
        display: "flex!important"
    },

    fullPage: {
        display: "flex!important",
        height: "100vh",
        width: "100%",
        position: "relative",
        padding:"0",
        margin:"0",
        textAlign:"center",
        alignItems: "center",

        justifyContent: "center",

        color:"blue",
        "&:before": {
            backgroundImage: `url(${bgImg})`,
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat",
        },
        "&:before,&:after": {
            content: "''",
            backgroundColor: theme.palette.background.primary,
            opacity: "0.4",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            position: "absolute",
            zIndex: "0",


        }
    }
});

export default pagesStyle;
