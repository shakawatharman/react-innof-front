import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme)=>({
    sectionFeature:{
        padding:'80px 0',
        backgroundColor:'#fbfbfb'
    },
    sectionHeading:{
        fontWeight:900,
        marginBottom:40,
        textAlign:'left'
    },
    featureRight:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    featureItem:{
        display:'flex',
        marginBottom:16,
        alignItems:'center',
        boxShadow:'0px 2px 70px 0px rgba(110,130,208,0.18)',
        ['& svg']:{
            fontSize: '50px',
            padding: 10,
        },
        ['& span']:{
            fontSize: 22,
            fontWeight: 'lighter',
            textAlign: 'left',
            marginLeft: 20,
            marginTop: 9,
        },
    },
    featureImg:{
        width:'100%',
        maxWidth:'100%',
        borderRadius:5,
        height:'auto',
    }
}))