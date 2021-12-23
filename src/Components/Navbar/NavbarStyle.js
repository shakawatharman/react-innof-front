import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme)=>({
    appbar:{
        backgroundColor:'#fff',
        position:'relative'
    },
    toolbar: {
        display:'flex',
        justifyContent:"space-between",
        padding:"8px 0",
        width:'100%'
    },
    logo:{
        width:250,
        [theme.breakpoints.down('sm')]:{
            width:150,
        },
    },
    menu:{
        textAlign:'right',
        marginRight:theme.spacing(5),
        color:'#000',
        '& span':{
            color:'#000'
        },
        [theme.breakpoints.down('xs')]:{
            display:(props)=>(props.menuOpen ? 'flex':'none'),
            position:'absolute',
            height:'100vh',
            top:'72px',
            backgroundColor:'#000000ed',
            flexDirection: 'column',
            width: 200,
            textAlign:'center',
            right: 0,
            margin: 0,
            padding: '34px 0',
            zIndex:33
        },
        "& a:hover":{
            transition:'.3s',
            opacity:'.7W',
            borderBottom:'1px solid #555'
        }
    },
    menuBtn:{
        display:'block',
        cursor:'pointer',
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
    },
    closeBtn:{
        //display:'block',
        display:(props)=> props.open ? 'block' : 'none',
    },

}))