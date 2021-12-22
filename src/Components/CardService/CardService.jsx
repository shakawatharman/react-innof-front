import { Box, Container, Grid, Link, Paper, Typography } from '@material-ui/core';
import { Laptop } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './CardServiceStyle';

const CardService = ({service}) => {
    const classes = useStyles()
    const { _id, name } = service
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.singleService} >
            <Laptop className={classes.icon} />
            <Typography className={classes.serviceName} variant='h6'>{name}</Typography>
            {/* <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Typography> */}
            <NavLink to={`/service/${_id}`} className={classes.service_btn}>See More</NavLink>
            </Paper>
        </Grid>
    );
};

export default CardService;