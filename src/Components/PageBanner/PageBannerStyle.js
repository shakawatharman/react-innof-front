import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme)=>({
    pageBanner:{
        position:'relative',
        padding:'40px 0 80px 0',
        backgroundSize:'cover',
        backgroundPosition:'top',
        backgroundRepeat:'no-reapet'
    },
    bottomStyle:{
        position:'absolute',
        bottom: 0,
        marginBottom: '-4px',
    },
    bottomStyle2:{
        backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyNTBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0wIDE0MGgxMjgwQzU3My4wOCAxNDAgMCAwIDAgMHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAxNDBoMTI4MEM1NzMuMDggMTQwIDAgMzAgMCAzMHoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMCAxNDBoMTI4MEM1NzMuMDggMTQwIDAgNjAgMCA2MHoiLz48L2c+PC9zdmc+)',
        backgroundSize: '100% 250px',
        bottom: 0,
        height: 250,
        zIndex: 1,
    }
}))