import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme)=>({
    footer:{
        padding:'50px 0',
        backgroundColor:'#000',
        color:'#7a7a7a',
        fontSize:'12px'
    },
    footerTitle:{
        textAlign:'left',
        marginBottom:24,
        color:'#fff',
    },
    brandinfo:{
        textAlign:'left',
    },
     logo:{
       width:'120px',
       marginBottom:30,
   },
   footerMenu:{
       display:'flex',
       flexDirection:'column',
       ['& span']:{
           color:'#7a7a7a'
       },
       ['& a']:{
           textAlign:'left'
       }
   },
   footerContact:{
       backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
   },
   contactItem:{
       display:'flex',
       marginBottom:15,
       ['& span']: {
           marginLeft:8,
           fontSize:'16px'
       }
   }
}))