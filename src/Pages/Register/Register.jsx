import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useStyles } from '../Login/LoginStyle';
import img from './../../assets/img/FeatureImage.png'

const Register = () => {
    const {user,registerUser,error,loading } = useAuth()
    const [loginData,setLoginData] = useState({})
    const classes = useStyles();

    const navigate = useNavigate()

    const handleRegisterSubmit = (e) => {
       
        if(loginData.password != loginData.password2){
            alert('Password didn\'n match')
            return;
        }
        registerUser(loginData.email,loginData.password,loginData.name,navigate)

        e.preventDefault();
    }

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        setLoginData(newLoginData)

        //console.log(loginData)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid className={classes.loginForm} item xs={12} md={6}>
                    <Typography variant='h6'>Register</Typography>
                    
                    <form onSubmit={handleRegisterSubmit}>
                        <TextField onBlur={handleOnChange} name='name' style={{width:'75%' }} id='name' label='Name' type='text' variant='standard' />
                        <TextField onBlur={handleOnChange} name='email' style={{width:'75%' }} id='email' label='Email' type='email' variant='standard' />
                        <TextField onBlur={handleOnChange} name='password' style={{width:'75%'}} id='password' label='Password' variant='standard' type='password' />
                        <TextField onBlur={handleOnChange} name='password2' style={{width:'75%'}} id='password2' label='Confirm Password' variant='standard' type='password' />
                        <Button style={{width:'75%',marginTop:20 }} type='submit' variant='contained' color="primary">Register</Button>
                    </form>
                    { error && <Alert style={{marginTop:'20px'}} severity="warning">{error}</Alert> }
                    
                    
                    <NavLink style={{textDecoration:'none',marginTop:20}} to="/login"><Button>Already Registered? Please Login</Button></NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={img}></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;