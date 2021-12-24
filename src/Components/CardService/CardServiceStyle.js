import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme)=>({
    singleService:{
        boxShadow:'0px 2px 70px 0px rgba(110,130,208,0.18)',
        padding:'30px 10px',
        borderRadius:'5px'
    },
    icon:{
        fontSize:40,
        fill:'#ddd',
        borderRadius:'50%',
        padding:'30px',
        boxShadow:'inset 0 0 0px 5px #2ecc71, 0 0 0px 1px #f5f5f5, #ededed 2px 2px, #ededed 3px 3px, #ededed 4px 4px, #eeeeee 5px 5px, #eeeeee 6px 6px, #eeeeee 7px 7px, #efefef 8px 8px, #efefef 9px 9px, #efefef 10px 10px, #f0f0f0 11px 11px, #f0f0f0 12px 12px, #f0f0f0 13px 13px, #f1f1f1 14px 14px, #f1f1f1 15px 15px, #f1f1f1 16px 16px, #f2f2f2 17px 17px, #f2f2f2 18px 18px, #f2f2f2 19px 19px, #f3f3f3 20px 20px, #f3f3f3 21px 21px, #f3f3f3 22px 22px, #f4f4f4 23px 23px, #f4f4f4 24px 24px, #f4f4f4 25px 25px, #f5f5f5 26px 26px, #f5f5f5 27px 27px, #f5f5f5 28px 28px, #f6f6f6 29px 29px, #f6f6f6 30px 30px, #f6f6f6 31px 31px, #f7f7f7 32px 32px, #f7f7f7 33px 33px, #f7f7f7 34px 34px, #f8f8f8 35px 35px, #f8f8f8 36px 36px, #f8f8f8 37px 37px, #f9f9f9 38px 38px, #f9f9f9 39px 39px, #f9f9f9 40px 40px, #fafafa 41px 41px, #fafafa 42px 42px, #fafafa 43px 43px, #fbfbfb 44px 44px, #fbfbfb 45px 45px, #fbfbfb 46px 46px, #fcfcfc 47px 47px, #fcfcfc 48px 48px, #fcfcfc 49px 49px, #fdfdfd 50px 50px, #fdfdfd 51px 51px, #fdfdfd 52px 52px, #fefefe 53px 53px, #fefefe 54px 54px, #fefefe 55px 55px, #ffffff 56px 56px',
        height:'auto',
        border:'8px solid #fff',
        marginBottom:30,
    },
    serviceImage:{
        maxHeight:100,
        marginBottom:30
    },
    serviceName:{
        textTransform:'uppercase',

    },
    service_btn:{
            color: '#555',
            marginTop: 20,
            borderColor: 'rgba(0,0,0,0)',
            borderRadius: 4,
            letterSpacing: 5,
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            backgroundColor: '#ffffff',
            display:'inline-block'
    }
}))