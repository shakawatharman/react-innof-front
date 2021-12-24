import { Box, Container, Grid, Link, Paper, Typography } from '@material-ui/core';
import { Laptop } from '@material-ui/icons';
import { Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './CardServiceStyle';

const CardService = ({service}) => {
    const classes = useStyles()
    const { _id, name, image, price } = service
    return (
        <Grid style={{display:'grid'}} item xs={12} sm={6} md={3}>
            
            <Stack className={classes.singleService}
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                >
                <img className={classes.serviceImage} src={image} alt="" />
                {/* <Laptop className={classes.icon} /> */}
                <Typography className={classes.serviceName} variant='h6'>{name}</Typography>
                <Typography className={classes.serviceName} variant='h4'>${price}</Typography>
                {/* <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Typography> */}
                <NavLink to={`/service/${_id}`} className={classes.service_btn}>See More</NavLink>
            </Stack>
            
        </Grid>
    );
};

export default CardService;