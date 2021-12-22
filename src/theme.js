import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";


export const theme = createTheme({
    palette : {
        primary : {
            main : blue[500]
        }
    },
    myButton : {
        backgroundColor: "black",
        color: "white",
        border: "1px solid black",
        marginTop:"30px"
    },
    sectionPadding:{
        padding:"80px 0"
    }
})