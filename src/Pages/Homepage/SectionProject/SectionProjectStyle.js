import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme)=>({
    sectionProject:{
        padding:'80px 0',
        backgroundColor:'#fbfbfb'
    },
    sectionHeading:{
        fontWeight:900,
        marginBottom:40
    },
    demoImg:{
        width:'100%',
        maxWidth:'100%',
        borderRadius:5,
        height:'auto',
        boxShadow:'0px 2px 70px 0px rgba(110,130,208,0.18)',

    }
}))