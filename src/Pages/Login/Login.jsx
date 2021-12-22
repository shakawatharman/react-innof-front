import { Avatar, Box, Button, Chip, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';
import { Google } from '@material-ui/icons';
import React, { useState } from 'react';
import { useStyles } from './LoginStyle';
import img from './../../assets/img/FeatureImage.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const {loginUser,user,LoginWithGoogle,loading} = useAuth()
    const [loginData,setLoginData] = useState({})
    const classes = useStyles();

    const location = useLocation();
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email,loginData.password,location,navigate)
    }

    const handleGoogleLogin = () => {
        LoginWithGoogle(location,navigate)
    }

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid className={classes.loginForm} item xs={12} md={6}>
                    <Typography variant='h6'>Login</Typography>
                    {loading ? 
                    <Box sx={{ display: 'flex',justifyContent:'center',mt:10 }}>
                    <CircularProgress />
                    </Box> : 
                    <form onSubmit={handleLoginSubmit}>
                        <TextField onBlur={handleOnChange} name='email' style={{width:'75%' }} id='email' label='email' variant='standard' />
                        <TextField onBlur={handleOnChange} name='password' style={{width:'75%'}} id='password' label='Password' variant='standard' type='password' />
                        <Button style={{width:'75%',marginTop:20 }} type='submit' variant='contained' color="primary">Login</Button>
                    </form> }
                    <NavLink style={{textDecoration:'none',marginTop:20}} to="/register"><Button>New User? Please Register</Button></NavLink>
                    <span>
                        <Chip 
                            onClick={handleGoogleLogin} 
                            size="medium"
                            avatar={<Avatar alt="Sajib" src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"></Avatar>}
                            label="SignIn with Google"
                            variant="outlined"
                            color="primary"
                            />
                    </span>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={img}></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;