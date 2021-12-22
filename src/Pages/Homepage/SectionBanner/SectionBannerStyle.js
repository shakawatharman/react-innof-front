import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme)=>({
    bannerSection:{
        height:'100vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
        position:'relative',
        zIndex:1,
        "&::before":{
            position:'absolute',
            content:'""',
            left:0,
            right:0,
            width:'100%',
            height:'100%',
            background:'#fff',
            opacity:'.3',
            zIndex:-1,
        }
    },
    bannerHeading:{
        fontWeight:800,
        textTransform:'uppercase',
        marginTop:40,
        marginBottom:40,
        color:"#000"
    },
    bannerText:{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }


}))