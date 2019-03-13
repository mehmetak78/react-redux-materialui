
const bgImg = require("../img/bg.jpg");

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
            display: "flex",
            //backgroundColor: "rgba(0, 0, 233)",
            backgroundColor: theme.palette.background.primary,
            opacity: "0.2",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            position: "absolute",
            zIndex: "-1",


        }
    }
});

export default pagesStyle;
