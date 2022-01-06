import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme)=>({
    bannerSection:{
        display:'flex',
        alignItems:'center',
        backgroundSize:'cover',
        backgroundPosition:'center',
        position:'relative',
        background:'linear-gradient(90deg, #3d238c 0%, #007cff 100%)',
        zIndex:1,
        padding:'60px 0'
    },
    bannerText:{
        color:'#ffffff',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    bannerHeading:{
        color:'#ffffff',
        fontWeight:800,
        textTransform:'uppercase',
        marginBottom:40,
        fontFamily:'Helvetica Neue'
    },
    bannerBtn:{
        border:'none',
        padding: '15px 22px',
        fontSize: '0.8rem',
        fontWeight: 900,
        color: '#fff',
        textTransform: 'uppercase',
        textDecoration: 'none',
        boxShadow: '0 0 0 1px inset #fff',
    }


}))