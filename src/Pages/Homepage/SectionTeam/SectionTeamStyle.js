import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme)=>({
    sectionTeam:{
        padding:'80px 0',
        boxShadow:'0px 2px 70px 0px rgba(110,130,208,0.18)',
        
    },
    sectionHeading:{
        fontWeight:900,
        marginBottom:40
    },
    teamImg:{
        width:'100%',
        maxWidth:150,
        borderRadius:'50%',
        height:'auto',
        boxShadow:'0px 2px 70px 0px rgba(110,130,208,0.18)',

    }
}))