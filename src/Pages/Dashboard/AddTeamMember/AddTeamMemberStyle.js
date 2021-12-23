import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme)=>({
    pageService:{
        padding:'80px 0'
    },
    serviceForm:{
        background: '#ffffff',
        padding: '41px 39px',
        boxShadow: '0 25px 65px rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        position:'sticky',
        top:60,
        '& input':{
            fontSize:'12px',
            marginTop:15
        }
    }
}))