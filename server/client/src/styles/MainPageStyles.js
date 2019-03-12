
import Image from "../img/bg.jpg"

const pagesStyle = theme => ({

    fullPage: {
        height: "100vh",
        width: "100%",
        position: "relative",
        padding:"0",
        margin:"0",
        textAlign: "center",
        color:"blue",
        "&:after": {
            backgroundImage: `url(${Image})`,
            content: "''",
            backgroundColor: "red",
            opacity: "0.2",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            position: "absolute",
            zIndex: "-1"
        }
    }

});

export default pagesStyle;
