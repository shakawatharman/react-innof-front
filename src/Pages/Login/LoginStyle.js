import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme)=>({
    loginForm:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            marginTop:100
        }
    }
}))