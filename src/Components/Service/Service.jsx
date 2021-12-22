import React, { useRef } from 'react';
import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { useStyles } from './ServiceStyle';
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import PageBanner from '../../Components/PageBanner/PageBanner.jsx';
import useAuth from '../../Hooks/useAuth';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const Service = () => {

    const {id} = useParams()
    const classes = useStyles()
    const {user} = useAuth()

    //const [services] = useServices();
    const userInfo = {name:user.displayName,email:user.email,phone:''}
    const [formdata,setFormdata] = useState(userInfo)
    //const [order,setOrder] = useState({})
    const [service,setService] = useState({});

    /**
     * Get service data by ID
     */

    useEffect(()=>{
        fetch(`http://localhost:4000/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[id]);


    /**
     * submit order data by form
     */


    const handlePurchase = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newFormnData = { ...formdata };
        newFormnData[field] = value;
        setFormdata(newFormnData)
    }

    const handlePurchaseSubmit = (e) => {

        const new_order = {
            ...formdata,
            service_id : service._id,
            service_title : service.name,
            service_price : service.price,
            service_status : "Pending"
        };
        

        ///setOrder(new_order);
        console.log("Order Info",new_order)

        e.preventDefault();

        fetch("http://localhost:4000/orders", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(new_order),
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.insertedId) {
            alert('Order Placed',result.insertedId)
            }
        });
    }



    return (
        <>
        <Navbar></Navbar>
            <PageBanner></PageBanner>
            <Box className={classes.pageService} >
                <Container>
                    <Grid container spacing={2}>
                        <Grid style={{padding:'0 80px'}} item sm={8} xs={12}>
                            <>
                                <Typography  variant='h3'>{service.name}</Typography>
                                <img
                                style={{width:"100%",padding:"40px 0"}}
                                src={service.image} alt="service"></img>
                                <Typography style={{marginTop:30}} variant='body1'>
                                    {service.content}
                                </Typography>
                             </>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Box className={classes.serviceForm} >
                                <Typography style={{marginBottom:30 }} variant='h6'>Purchase Our Service</Typography>
                                <form onSubmit={handlePurchaseSubmit}>
                                    <TextField
                                    onChange={handlePurchase}
                                    defaultValue={user?.displayName}
                                    name='name' 
                                    style={{width:'75%' }} 
                                    id='name' label='Name' 
                                    type='text' 
                                    variant='standard' />

                                    <TextField
                                    onChange={handlePurchase}
                                    defaultValue={user?.email}
                                    name='email' 
                                    style={{width:'75%' }} 
                                    id='email' label='Email' 
                                    type='email'
                                    variant='standard' />

                                    <TextField
                                    onChange={handlePurchase} 
                                    name='address' 
                                    style={{width:'75%'}} id='Address' 
                                    label='Address' 
                                    type='text'
                                    variant='standard' 
                                    multiline maxRows={4} />

                                    <Button 
                                    style={{width:'75%',marginTop:20 }} 
                                    type='submit'
                                    variant='contained' 
                                    color="primary">Buy Now</Button>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        <Footer></Footer>
        </>
    );
};

export default Service;